import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name = "",
      email = "",
      company = "",
      room_size = "",
      timeline = "",
      notes = "",
    } = body || {};

    if (!email || !name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Use env vars if present; otherwise safe fallbacks so it works now.
    const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
    const TO = process.env.LEAD_TO_EMAIL || "mark@callordut.com";
    // If your domain isn't verified yet, Resend recommends using onboarding@resend.dev
    const FROM =
      process.env.LEAD_FROM_EMAIL || "onboarding@resend.dev";

    const resend = new Resend(RESEND_API_KEY);
    if (!RESEND_API_KEY) {
      // Fail early with a clear message so you know what's wrong in prod logs
      return NextResponse.json(
        { error: "RESEND_API_KEY not set" },
        { status: 500 }
      );
    }

    const subject = `New Lead: ${name} (${room_size || "Room size N/A"})`;
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.55;">
        <h2 style="margin:0 0 12px 0;">New Conference Room Design Lead</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Room size:</strong> ${escapeHtml(room_size)}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>
        <p><strong>Notes:</strong><br/>${escapeHtml(notes).replace(/\n/g, "<br/>")}</p>
        <hr/>
        <p style="color:#555;font-size:12px;">Sent from design.callordut.com</p>
      </div>
    `;

    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email, // so you can reply directly
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

// Basic HTML escaping to avoid injection in the plain email template
function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
