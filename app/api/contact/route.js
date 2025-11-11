// app/api/contact/route.js
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // ✅ required for Resend SDK

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      source = "hero_lead_form",
      firstName = "",
      lastName = "",
      email = "",
      company = "",
      roomSize = "",
      timeline = "",
      notes = ""
    } = body || {};

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    const fullName = `${firstName} ${lastName}`.trim();

    // --- Build HTML once ---
    const internalHtml = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
        <h2>New Lead: ${roomSize || "Unspecified room size"}</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "—"}</p>
        <p><strong>Room Size:</strong> ${roomSize || "—"}</p>
        <p><strong>Timeline:</strong> ${timeline || "—"}</p>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Notes:</strong><br>${(notes || "—").toString().replace(/\n/g, "<br>")}</p>
      </div>
    `;

    const prospectHtml = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
        <h2>Thanks, ${firstName} — we’re on it.</h2>
        <p>We’ll send a fixed-price quote within <strong>4 hours</strong> (often sooner).</p>
        <p><strong>Summary you submitted:</strong></p>
        <ul>
          <li><strong>Room size:</strong> ${roomSize || "—"}</li>
          <li><strong>Timeline:</strong> ${timeline || "—"}</li>
          <li><strong>Company:</strong> ${company || "—"}</li>
        </ul>
        <p>If anything changes, reply to this email or call <a href="tel:+15053157773">(505) 315-7773</a>.</p>
        <p style="margin-top:16px">— Mark at CalLord Unified Technologies</p>
      </div>
    `;

    // 1) Send internal notification (must succeed)
    const { error: internalError, data } = await resend.emails.send({
      from: "CalLord UT Leads <leads@callordut.com>", // domain must be Verified in Resend
      to: ["sales@callordut.com"],
      reply_to: email,                                  // ✅ correct field name
      subject: `New Lead: ${roomSize || "Room"} • ${fullName}`,
      html: internalHtml,
    });

    if (internalError) {
      return NextResponse.json({ ok: false, error: internalError.message }, { status: 502 });
    }

    // 2) Send prospect auto-reply (best-effort; don't fail UI)
    const { error: prospectError } = await resend.emails.send({
      from: "CalLord UT <no-reply@callordut.com>",
      to: [email],
      subject: "We received your conference room design request",
      html: prospectHtml,
    });

    if (prospectError) {
      // Log it but still succeed so the UI doesn’t show failure
      console.warn("Autoresponder failed:", prospectError);
    }

    return NextResponse.json({ ok: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ ok: false, error: err?.message || "Server error" }, { status: 500 });
  }
}
