import { NextResponse } from "next/server";
import { rateLimit, getClientIp, escapeHtml, escapeSubject, isPlausibleEmail } from "@/lib/mail-guard";
import { resend } from "@/lib/resend";

export const runtime = "nodejs";

type LeadType = "consult" | "audit";

type LeadBody = {
  type?: LeadType;
  name?: string;
  firmName?: string;
  role?: string;
  email?: string;
  phone?: string;
  rooms?: string;
  platform?: string;
  interests?: string[];
  primaryPain?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  gclid?: string;
  pageUrl?: string;
};

const MISSING_ENV_MESSAGE =
  "Email service not configured. Please add RESEND_API_KEY and try again.";

function validate(body: LeadBody) {
  const errors: string[] = [];
  if (body.type !== "consult" && body.type !== "audit") errors.push("Invalid type.");
  if (!body.name) errors.push("Name is required.");
  if (!body.firmName) errors.push("Firm name is required.");
  if (!body.email) errors.push("Email is required.");
  if (!body.rooms) errors.push("Rooms is required.");
  if (!body.platform) errors.push("Platform is required.");
  return errors;
}

export async function POST(req: Request) {
  try {
    // ⚠ VOLUME BOUND (audit F-0056). This route sends a second mail to an address the
    // caller supplies, on the platform's shared Resend key. Two keys, because they bound
    // different things: per-IP stops one noisy sender, per-RECIPIENT stops the same
    // address being mailed repeatedly from rotating sources.
    //
    // Honest about what this is NOT: a fixed-window counter in one isolate's module scope.
    // Not sliding, not shared between isolates or regions, and useless against a
    // distributed sender. The arbitrary-recipient authority is removed below by pinning
    // the autoresponder to a validated address and escaping what goes into it — this only
    // bounds volume.
    const ip = getClientIp(req.headers);
    const ipGate = rateLimit(`smart-room-lead:ip:${ip}`, 5, 60_000);
    if (!ipGate.allowed) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again shortly." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((ipGate.resetAt - Date.now()) / 1000)) } }
      );
    }

    const body: LeadBody = await req.json();
    const errors = validate(body);
    if (errors.length) {
      return NextResponse.json(
        { success: false, message: errors.join(" ") },
        { status: 400 }
      );
    }

    const {
      type = "consult",
      name = "",
      firmName = "",
      role = "",
      email = "",
      phone = "",
      rooms = "",
      platform = "",
      interests = [],
      primaryPain = "",
      utmSource = "",
      utmMedium = "",
      utmCampaign = "",
      utmTerm = "",
      gclid = "",
      pageUrl = "",
    } = body;

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, message: MISSING_ENV_MESSAGE },
        { status: 500 }
      );
    }

    const subjectPrefix = type === "audit" ? "AUDIT" : "CONSULT";
    const interestsLine = interests.length ? interests.join(", ") : "Not specified";

    // ⚠ ESCAPED 2026-08-22, audit F-0066. Every field below is caller-supplied and was
    // interpolated RAW while the autoresponder twenty lines down was already escaped. Rendered
    // with a hostile payload, this body EXECUTED script and produced two attacker-authored
    // links, one displaying callordut.com while pointing elsewhere. It is the mail staff open
    // for every lead, from our own sending domain — a more trusted context than the
    // autoresponder, not a less trusted one, which is why it needed this more, not less.
    const internalHtml = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
        <h2>New Smart Room ${subjectPrefix} lead – ${escapeHtml(firmName)}</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
        <p><strong>Role:</strong> ${escapeHtml(role || "—")}</p>
        <p><strong>Rooms:</strong> ${escapeHtml(rooms)}</p>
        <p><strong>Platform:</strong> ${escapeHtml(platform)}</p>
        <p><strong>Interests:</strong> ${escapeHtml(interestsLine)}</p>
        <p><strong>Primary Pain:</strong><br>${escapeHtml(primaryPain || "—", 2000).replace(/\n/g, "<br>")}</p>
        <p><strong>UTM Source:</strong> ${escapeHtml(utmSource || "—")}</p>
        <p><strong>UTM Medium:</strong> ${escapeHtml(utmMedium || "—")}</p>
        <p><strong>UTM Campaign:</strong> ${escapeHtml(utmCampaign || "—")}</p>
        <p><strong>UTM Term:</strong> ${escapeHtml(utmTerm || "—")}</p>
        <p><strong>GCLID:</strong> ${escapeHtml(gclid || "—")}</p>
        <p><strong>Page URL:</strong> ${escapeHtml(pageUrl || "—")}</p>
      </div>
    `;

    const confirmHtml = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
        <h2>We received your Smart Room ${type === "audit" ? "audit" : "consultation"} request</h2>
        <p>Thanks for reaching out. We’ll reply within one business day.</p>
        <ul>
          <li><strong>Firm:</strong> ${escapeHtml(firmName)}</li>
          <li><strong>Rooms:</strong> ${escapeHtml(rooms)}</li>
          <li><strong>Platform:</strong> ${escapeHtml(platform)}</li>
        </ul>
        <p>If anything is time-sensitive, call us at (505) 315-7773.</p>
        <p style="margin-top:16px">— CalLord Unified Technologies</p>
      </div>
    `;

    const fromAddress = process.env.LEAD_FROM_EMAIL || "mark@mail.callordut.com";
    const toAddress =
      process.env.LEAD_TO_EMAIL ||
      process.env.SMART_ROOM_INBOX ||
      process.env.LEAD_INBOX_EMAIL ||
      "mark@mail.callordut.com";

    // ⚠ replyTo is VALIDATED BEFORE USE (F-0066). isPlausibleEmail already existed in this
    // file but was not consulted until line ~165, twenty lines AFTER this send, and only to
    // gate the autoresponder — so the internal mail took an unvalidated address as a header.
    // An unusable value drops the header rather than failing the send: the lead still arrives,
    // which matters because refusing it would turn a malformed field into lost business.
    const replyToOk = isPlausibleEmail(email);

    const internal = await resend.emails.send({
      from: fromAddress,
      to: Array.isArray(toAddress) ? toAddress : [toAddress],
      ...(replyToOk ? { replyTo: email } : {}),
      // escapeSubject, NOT escapeHtml: a subject is not HTML and entities would render
      // literally. It strips CR/LF, which escapeText deliberately preserves.
      subject: escapeSubject(`New Smart Room ${subjectPrefix} lead – ${firmName}`),
      html: internalHtml,
    });

    if (internal.error) {
      console.error("Smart room internal email failed:", internal.error);
      return NextResponse.json(
        {
          success: false,
          message: "We couldn't send your request right now. Please try again shortly.",
        },
        { status: 502 }
      );
    }

    // The autoresponder goes ONLY to the submitted address, and only if it is a plausible
    // one — a value carrying a comma, angle bracket or quote is a header-injection attempt,
    // not an email address. A per-recipient window stops the same victim being mailed
    // repeatedly from different sources.
    if (!isPlausibleEmail(email)) {
      return NextResponse.json({ success: true, message: "Received." });
    }
    const toGate = rateLimit(`smart-room-lead:to:${String(email).toLowerCase()}`, 3, 3_600_000);
    if (!toGate.allowed) {
      return NextResponse.json({ success: true, message: "Received." });
    }

    const confirmation = await resend.emails.send({
      from: fromAddress,
      to: [email],
      subject: `We received your Smart Room ${type === "audit" ? "audit" : "consultation"} request`,
      html: confirmHtml,
    });
    if (confirmation.error) {
      console.warn("Confirmation email failed:", confirmation.error);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    console.error("Smart room lead API error:", err);
    return NextResponse.json(
      { success: false, message: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
