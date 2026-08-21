// app/api/contact/route.js
import { NextResponse } from "next/server";
import { rateLimit, getClientIp, escapeHtml, escapeSubject, isPlausibleEmail } from "@/lib/mail-guard";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

const MISSING_ENV_MESSAGE =
  "Email service not configured. Please add RESEND_API_KEY and try again.";

function isNewSchema(body) {
  return (
    typeof body?.name === "string" ||
    typeof body?.role === "string" ||
    typeof body?.facilityType === "string" ||
    typeof body?.state === "string" ||
    typeof body?.urgency === "string"
  );
}

function validateNew(body) {
  const required = ["name", "email", "phone", "role", "facilityType", "state", "urgency"];
  const missing = required.filter((f) => !body?.[f]?.toString().trim());
  if (missing.length) {
    return { ok: false, message: "Please complete the required fields." };
  }
  return { ok: true };
}

function normalizeLegacy(body) {
  const {
    firstName = "",
    lastName = "",
    email = "",
    company = "",
    roomSize = "",
    timeline = "",
    notes = "",
    source = "hero_lead_form",
  } = body || {};

  return {
    name: `${firstName} ${lastName}`.trim(),
    email,
    phone: body?.phone || "",
    role: company || "—",
    facilityType: roomSize || "—",
    state: body?.state || "—",
    urgency: timeline || "—",
    details: notes,
    source,
  };
}

function buildPayload(body) {
  if (isNewSchema(body)) {
    return {
      name: body?.name?.toString().trim() || "",
      email: body?.email?.toString().trim() || "",
      phone: body?.phone?.toString().trim() || "",
      role: body?.role?.toString().trim() || "",
      facilityType: body?.facilityType?.toString().trim() || "",
      state: body?.state?.toString().trim() || "",
      urgency: body?.urgency?.toString().trim() || "",
      details: body?.details?.toString() || "",
      source: body?.source || "contact_form",
    };
  }
  return normalizeLegacy(body);
}

export async function POST(req) {
  // ⚠ VOLUME BOUND (audit F-0056) — fixed-window, per-isolate, per-IP. Bounds one noisy
  // sender; does nothing against a distributed one. The recipient authority is removed at
  // the autoresponder below, not here.
  const ip = getClientIp(req.headers);
  const ipGate = rateLimit(`contact:ip:${ip}`, 5, 60_000);
  if (!ipGate.allowed) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(Math.ceil((ipGate.resetAt - Date.now()) / 1000)) } }
    );
  }
  try {
    const body = await req.json();
    const lead = buildPayload(body);

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ ok: false, message: MISSING_ENV_MESSAGE }, { status: 500 });
    }

    if (isNewSchema(body)) {
      const valid = validateNew(lead);
      if (!valid.ok) {
        return NextResponse.json(
          { ok: false, message: valid.message },
          { status: 400 }
        );
      }
    } else {
      // Legacy path: ensure minimum required fields so old UI keeps working
      if (!lead.name || !lead.email) {
        return NextResponse.json(
          { ok: false, message: "Please complete the required fields." },
          { status: 400 }
        );
      }
    }

    const fromAddress = process.env.LEAD_FROM_EMAIL || "mark@mail.callordut.com";
    const toAddress = process.env.LEAD_TO_EMAIL || "mark@mail.callordut.com";

    // ⚠ ESCAPED 2026-08-22, audit F-0066 — see lib/mail-guard.ts. Every field is caller-supplied
    // and was raw while prospectHtml below was already escaped. This is the mail staff read.
    const internalHtml = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
        <h2>New Lead — ${escapeHtml(lead.name || "Unknown")}</h2>
        <p><strong>Name:</strong> ${escapeHtml(lead.name || "—")}</p>
        <p><strong>Email:</strong> ${escapeHtml(lead.email || "—")}</p>
        <p><strong>Phone:</strong> ${escapeHtml(lead.phone || "—")}</p>
        <p><strong>Role:</strong> ${escapeHtml(lead.role || "—")}</p>
        <p><strong>Facility Type:</strong> ${escapeHtml(lead.facilityType || "—")}</p>
        <p><strong>State:</strong> ${escapeHtml(lead.state || "—")}</p>
        <p><strong>Urgency:</strong> ${escapeHtml(lead.urgency || "—")}</p>
        <p><strong>Source:</strong> ${escapeHtml(lead.source || "—")}</p>
        <p><strong>Details:</strong><br>${escapeHtml(lead.details || "—", 2000).replace(/\n/g, "<br>")}</p>
      </div>
    `;

    const prospectHtml = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
        <h2>Thanks, ${escapeHtml(lead.name?.split(" ")[0] || "there", 60)} — we received your request.</h2>
        <p>We’ll reply shortly with next steps.</p>
        <ul>
          <li><strong>Role:</strong> ${escapeHtml(lead.role || "—")}</li>
          <li><strong>Facility:</strong> ${escapeHtml(lead.facilityType || "—")}</li>
          <li><strong>Urgency:</strong> ${escapeHtml(lead.urgency || "—")}</li>
        </ul>
        <p>If anything changes, reply to this email or call (505) 315-7773.</p>
        <p style="margin-top:16px">— CalLord Unified Technologies</p>
      </div>
    `;

    // replyTo validated BEFORE use (F-0066); an unusable value drops the header, never the lead.
    const replyToOk = isPlausibleEmail(lead.email);

    const internal = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      ...(replyToOk ? { replyTo: lead.email } : {}),
      subject: escapeSubject(`New Lead — ${lead.name || "Prospect"}`),
      html: internalHtml,
    });

    if (internal.error) {
      console.error("Contact internal email failed:", internal.error);
      return NextResponse.json(
        { ok: false, message: "We couldn't send your request right now. Please try again shortly." },
        { status: 502 }
      );
    }

    // Autoresponder: validated recipient, per-recipient window (audit F-0056).
    if (!isPlausibleEmail(lead.email)) {
      return NextResponse.json({ ok: true });
    }
    const toGate = rateLimit(`contact:to:${String(lead.email).toLowerCase()}`, 3, 3_600_000);
    if (!toGate.allowed) {
      return NextResponse.json({ ok: true });
    }

    const confirmation = await resend.emails.send({
      from: fromAddress,
      to: [lead.email],
      subject: "We received your request — CalLord Unified Technologies",
      html: prospectHtml,
    });

    if (confirmation.error) {
      console.warn("Contact confirmation failed:", confirmation.error);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { ok: false, message: "Server error. Please try again shortly." },
      { status: 500 }
    );
  }
}
