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

    // Basic required field checks
    if (!name || !email || !roomSize || !timeline) {
      return new Response(
        JSON.stringify({ ok: false, message: "Missing required fields." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Resend client
    const resend = new Resend(process.env.RESEND_API_KEY);
    const toAddress =
      process.env.LEAD_INBOX_EMAIL || "leads@callordut.com"; // customize as you like
    const fromAddress =
      process.env.LEAD_FROM_EMAIL || "CalLord <leads@mail.callordut.com>";

    // Email to you
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

    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      subject,
      html,
      replyTo: email,
    });

    // Optional: simple confirmation to the submitter (can disable if you want)
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
      JSON.stringify({ ok: false, message: "Server error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
