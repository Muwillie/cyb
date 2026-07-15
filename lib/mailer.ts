import nodemailer from "nodemailer";

/**
 * SMTP transporter for outgoing mail. Configure via environment variables
 * (see .env.example). Works with any standard SMTP provider — NZ-based
 * options include MailerSend, Postmark, or your domain host's SMTP.
 */
export function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "Missing SMTP configuration. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in your environment."
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for port 465, false for 587/25 (STARTTLS)
    auth: { user, pass },
  });
}