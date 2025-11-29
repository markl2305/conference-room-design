import { Resend } from "resend";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name = "",
      email = "",
      company = "",
      roomSize = "",
      timeline = "",
      notes = "",
    } = body || {};

    if (!name || !email || !roomSize || !timeline) {
      return new Response(
        JSON.stringify({ ok: false, message: "Missing required fields." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Allow testing without blocking the UI
      return new Response(
        JSON.stringify({
          ok: false,
          message:
            "Email service not configured (RESEND_API_KEY missing). Add it in Vercel → Settings → Environment Variables.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(apiKey);

    // Use your verified from address when ready, otherwise fallback works for testing
    const fromAddress =
      process.env.LEAD_FROM_EMAIL || "CalLord <onboarding@resend.dev>";
    const toAddress =
      process.env.LEAD_INBOX_EMAIL || "mark@callordut.com";

    const subject = `New Room Design Lead — ${name} (${roomSize})`;
    const html = `
      <h2>New Lead</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "-"}</p>
      <p><strong>Room Size:</strong> ${roomSize}</p>
      <p><strong>Timeline:</strong> ${timeline}</p>
      <p><strong>Notes:</strong><br/>${(notes || "").replace(/\n/g, "<br/>")}</p>
    `;

    const sendResult = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      subject,
      html,
      reply_to: email,
    });

    // Resend returns { id, ... } on success
    if (!sendResult || !sendResult.id) {
      return new Response(
        JSON.stringify({
          ok: false,
          message:
            "Email could not be sent. If you just verified the domain, try again in a minute.",
        }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    // Optional confirmation to submitter; enable via env
    if (process.env.LEAD_SEND_CONFIRMATION === "true") {
      await resend.emails.send({
        from: fromAddress,
        to: email,
        subject: "We received your request — CalLord Unified Technologies",
        html: `
          <p>Hi ${name.split(" ")[0] || "there"},</p>
          <p>Thanks for reaching out. We'll review your project and reply within 4 business hours.</p>
          <p>— CalLord Unified Technologies</p>
        `,
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Lead API error:", err);
    return new Response(
      JSON.stringify({
        ok: false,
        message:
          "Server error while sending your request. Please try again shortly.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
