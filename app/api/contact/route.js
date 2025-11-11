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
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`.trim();

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
        <ul>
          <li><strong>Room size:</strong> ${roomSize || "—"}</li>
          <li><strong>Timeline:</strong> ${timel
