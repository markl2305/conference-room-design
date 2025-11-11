// app/api/contact/route.js
import { Resend } from "resend";

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

    // Basic required fields check
    if (!firstName || !lastName || !email) {
      return new Response("Missing required fields.", { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const fullName = `${firstName} ${lastName}`.trim();

    // 1) Internal notification to CalLord sales inbox
    const internalHtml = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
        <h2>New Lead: ${roomSize || "Unspecified room size"}</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "—"}</p>
        <p><strong>Room Size:</strong> ${roomSize || "—"}</p>
        <p><strong>Timeline:</strong> ${timeline || "—"}</p>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Notes:</strong><br>${(notes || "—")
          .toString()
          .replace(/\n/g, "<br>")}</p>
      </div>
    `;

    await resend.emails.send({
      from: "CalLord UT Leads <leads@callordut.com>",   // <-- use a verified sender
      to: ["sales@callordut.com"],                      // <-- your sales inbox
      replyTo: email,
      subject: `New Lead: ${roomSize || "Room"} • ${fullName}`,
      html: internalHtml,
    });

    // 2) Auto-reply to the prospect
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
        <p>If anything changes, reply to this email or call <a href="tel:+15052261457">(505) 226-1457</a>.</p>
        <p style="margin-top:16px">— Mark at CalLord Unified Technologies</p>
      </div>
    `;

    await resend.emails.send({
      from: "CalLord UT <no-reply@callordut.com>",      // <-- use a verified sender
      to: [email],
      subject: "We received your conference room design request",
      html: prospectHtml,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return new Response("Email service failed.", { status: 500 });
  }
}
