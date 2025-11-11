import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic"; // ensure server executes on request

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
      return NextResponse.json({ error: "Missing required fields: name and email." }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Server is missing RESEND_API_KEY. Add it in Vercel → Project → Settings → Environment Variables." },
        { status: 500 }
      );
    }

    const TO = process.env.LEAD_TO_EMAIL || "mark@callordut.com";

    // Until the domain is verified, send from Resend’s sandbox:
    // switch this to your domain address after verification (and set LEAD_FROM_EMAIL)
    const FROM = process.env.LEAD_FROM_EMAIL || "onboarding@resend.dev";

    const resend = new Resend(RESEND_API_KEY);

    const subject = `New Lead: ${name} (${room_size || "Room size N/A"})`;
    const html = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.55">
        <h2 style="margin:0 0 12px 0">New Conference Room Design Lead</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Room size:</strong> ${escapeHtml(room_size)}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>
        <p><strong>Notes:</strong><br>${escapeHtml(notes).replace(/\n/g,"<br/>")}</p>
        <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb"/>
        <p style="color:#6b7280;font-size:12px">Sent from design.callordut.com</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      // Resend returns structured errors; surface the message for debugging in the form.
      return NextResponse.json({ error: error.message || "Resend failed." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json(
      { error: err?.message || "Internal error" },
      { status: 500 }
    );
  }
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
