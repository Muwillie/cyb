import { NextResponse } from "next/server";
import { getTransporter } from "@/lib/mailer";

export const runtime = "nodejs"; // nodemailer needs the Node runtime, not edge

type ContactPayload = {
  name?: string;
  organisation?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
  // Honeypot field — real users never see or fill this in.
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, organisation, email, phone, topic, message, website } = body;

  // Honeypot: bots tend to fill every field, humans never see this one.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !organisation?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, organisation, email, and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const toAddress = process.env.CONTACT_TO_EMAIL;
  if (!toAddress) {
    console.error("CONTACT_TO_EMAIL is not set.");
    return NextResponse.json({ error: "Server is not configured to send email." }, { status: 500 });
  }

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"Apex Anchor Website" <${process.env.SMTP_USER}>`,
      to: toAddress,
      replyTo: email.trim(),
      subject: `New enquiry from ${name.trim()} (${organisation.trim()})`,
      text: [
        `Name: ${name.trim()}`,
        `Organisation: ${organisation.trim()}`,
        `Email: ${email.trim()}`,
        `Phone: ${phone?.trim() || "—"}`,
        `Topic: ${topic?.trim() || "—"}`,
        "",
        "Message:",
        message.trim(),
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; font-size: 14px; color: #0A121D;">
          <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
          <p><strong>Organisation:</strong> ${escapeHtml(organisation.trim())}</p>
          <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone?.trim() || "—")}</p>
          <p><strong>Topic:</strong> ${escapeHtml(topic?.trim() || "—")}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message.trim()).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again shortly." },
      { status: 502 }
    );
  }
}