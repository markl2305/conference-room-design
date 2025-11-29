// app/api/contact/route.js
import { NextResponse } from "next/server";
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

    const internalHtml = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
        <h2>New Lead — ${lead.name || "Unknown"}</h2>
        <p><strong>Name:</strong> ${lead.name || "—"}</p>
        <p><strong>Email:</strong> ${lead.email || "—"}</p>
        <p><strong>Phone:</strong> ${lead.phone || "—"}</p>
        <p><strong>Role:</strong> ${lead.role || "—"}</p>
        <p><strong>Facility Type:</strong> ${lead.facilityType || "—"}</p>
        <p><strong>State:</strong> ${lead.state || "—"}</p>
        <p><strong>Urgency:</strong> ${lead.urgency || "—"}</p>
        <p><strong>Source:</strong> ${lead.source || "—"}</p>
        <p><strong>Details:</strong><br>${(lead.details || "—").replace(/\n/g, "<br>")}</p>
      </div>
    `;

    const prospectHtml = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
        <h2>Thanks, ${lead.name?.split(" ")[0] || "there"} — we received your request.</h2>
        <p>We’ll reply shortly with next steps.</p>
        <ul>
          <li><strong>Role:</strong> ${lead.role || "—"}</li>
          <li><strong>Facility:</strong> ${lead.facilityType || "—"}</li>
          <li><strong>Urgency:</strong> ${lead.urgency || "—"}</li>
        </ul>
        <p>If anything changes, reply to this email or call (505) 315-7773.</p>
        <p style="margin-top:16px">— CalLord Unified Technologies</p>
      </div>
    `;

    const internal = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: lead.email,
      subject: `New Lead — ${lead.name || "Prospect"}`,
      html: internalHtml,
    });

    if (internal.error) {
      console.error("Contact internal email failed:", internal.error);
      return NextResponse.json(
        { ok: false, message: "We couldn't send your request right now. Please try again shortly." },
        { status: 502 }
      );
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
