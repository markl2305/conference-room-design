import { Resend } from "resend";
import { rateLimit, getClientIp, escapeHtml, escapeSubject, isPlausibleEmail } from "@/lib/mail-guard";

export async function POST(req) {
  try {
    // ⛔ F-0069 / turn 172. This route carried a census EXEMPTION claiming its
    //    caller-addressed send "never fires". That premise was false (see 6e55665) and
    //    the exemption ALSO hid a real gap: escaping and isPlausibleEmail had landed here,
    //    but the volume bound never had. Removing the stale exemption turned the census red
    //    for a true reason, which is what an exemption is supposed to make impossible.
    //
    //    ⚠️ rateLimit is a FIXED-WINDOW counter in one serverless isolate — a volume bound,
    //    not an authorization control. It bounds one noisy sender and nothing distributed.
    //    Same limits as the sibling routes in this repo, deliberately.
    const ip = getClientIp(req.headers);
    if (!rateLimit(`lead:ip:${ip}`, 5, 60_000).allowed) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200, headers: { "Content-Type": "application/json" },
      });
    }

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

    // ⚠ ESCAPED 2026-08-22 (audit F-0066 scope correction). This route was EXCLUDED from R-22 on
    // the stated ground that it "never sends". That was wrong: the early return above fires only
    // when RESEND_API_KEY is ABSENT, and the key is present in this project because sibling routes
    // demonstrably send with it. What this route actually lacks is a CALLER — nothing in app/ or
    // components/ references /api/lead. Per F-0065 that makes it a WIDER surface, not a narrower
    // one: an anonymous public write endpoint with no first-party client has no legitimate traffic
    // shape to compare against and nobody who would notice it behaving differently.
    const subject = escapeSubject(`New Room Design Lead — ${name} (${roomSize})`);
    const html = `
      <h2>New Lead</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company || "-")}</p>
      <p><strong>Room Size:</strong> ${escapeHtml(roomSize)}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>
      <p><strong>Notes:</strong><br/>${escapeHtml(notes || "", 2000).replace(/\n/g, "<br/>")}</p>
    `;


    const sendResult = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      subject,
      html,
      // reply_to validated before use; an unusable value drops the header, never the lead.
      ...(isPlausibleEmail(email) ? { reply_to: email } : {}),
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

    // Optional confirmation to submitter; enable via env.
    // ⚠ The env flag is a FEATURE toggle, not a validation gate — it says whether we want to send,
    // never whether `email` is safe to send to. isPlausibleEmail is the gate (F-0066/F-0069).
    if (process.env.LEAD_SEND_CONFIRMATION === "true" && isPlausibleEmail(email)) {
      await resend.emails.send({
        from: fromAddress,
        to: email,
        subject: "We received your request — CalLord Unified Technologies",
        html: `
          <p>Hi ${escapeHtml(name.split(" ")[0] || "there", 60)},</p>
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
