import { NextResponse } from "next/server";
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

    const subjectPrefix = type === "audit" ? "AUDIT" : "CONSULT";
    const interestsLine = interests.length ? interests.join(", ") : "Not specified";

    const internalHtml = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
        <h2>New Smart Room ${subjectPrefix} lead – ${firmName}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Role:</strong> ${role || "—"}</p>
        <p><strong>Rooms:</strong> ${rooms}</p>
        <p><strong>Platform:</strong> ${platform}</p>
        <p><strong>Interests:</strong> ${interestsLine}</p>
        <p><strong>Primary Pain:</strong><br>${(primaryPain || "—").replace(/\n/g, "<br>")}</p>
        <p><strong>UTM Source:</strong> ${utmSource || "—"}</p>
        <p><strong>UTM Medium:</strong> ${utmMedium || "—"}</p>
        <p><strong>UTM Campaign:</strong> ${utmCampaign || "—"}</p>
        <p><strong>UTM Term:</strong> ${utmTerm || "—"}</p>
        <p><strong>GCLID:</strong> ${gclid || "—"}</p>
        <p><strong>Page URL:</strong> ${pageUrl || "—"}</p>
      </div>
    `;

    const confirmHtml = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
        <h2>We received your Smart Room ${type === "audit" ? "audit" : "consultation"} request</h2>
        <p>Thanks for reaching out. We’ll reply within one business day.</p>
        <ul>
          <li><strong>Firm:</strong> ${firmName}</li>
          <li><strong>Rooms:</strong> ${rooms}</li>
          <li><strong>Platform:</strong> ${platform}</li>
        </ul>
        <p>If anything is time-sensitive, call us at (505) 315-7773.</p>
        <p style="margin-top:16px">— CalLord Unified Technologies</p>
      </div>
    `;

    const internal = await resend.emails.send({
      from: "CalLord UT Leads <leads@design.callordut.com>",
      to: ["sales@callordut.com"],
      reply_to: email,
      subject: `New Smart Room ${subjectPrefix} lead – ${firmName}`,
      html: internalHtml,
    });

    if (internal.error) {
      console.error("Internal email failed:", internal.error);
      return NextResponse.json(
        { success: false, message: internal.error.message },
        { status: 502 }
      );
    }

    const confirmation = await resend.emails.send({
      from: "CalLord UT <sales@callordut.com>",
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
