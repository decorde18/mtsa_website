import nodemailer from "nodemailer";
import { env } from "@/lib/env";

// Hostinger SMTP: check hPanel -> Emails -> your account -> "Configure Email Client"
// Typical ports: 465 (implicit SSL) or 587 (STARTTLS) — set SMTP_PORT accordingly.
const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: env.SMTP_PORT === 465, // true for 465, false for 587
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
});

type SendEmailArgs = {
  to: string;
  subject: string;
  html: string;
  text?: string; // plain-text fallback; falls back to a stripped version of html if omitted
};

export async function sendEmail({ to, subject, html, text }: SendEmailArgs) {
  return transporter.sendMail({
    from: env.EMAIL_FROM,
    to,
    subject,
    html,
    text: text ?? html.replace(/<[^>]+>/g, ""),
  });
}

export async function sendPasswordResetEmail(to: string, resetUrl: string) {
  return sendEmail({
    to,
    subject: "Reset your password",
    html: `
      <p>We received a request to reset your password.</p>
      <p><a href="${resetUrl}">Click here to set a new password</a>. This link expires in 1 hour.</p>
      <p>If you didn't request this, you can safely ignore this email.</p>
    `,
  });
}

export async function sendWelcomeEmail(to: string, name?: string | null) {
  return sendEmail({
    to,
    subject: "Welcome!",
    html: `<p>Hi${name ? ` ${name}` : ""}, your account is ready to go.</p>`,
  });
}
