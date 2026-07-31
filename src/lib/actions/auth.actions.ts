"use server";

import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { sendWelcomeEmail } from "@/lib/email";
import { signUpSchema, type SignUpInput } from "@/lib/validations/auth";

type ActionResult<T = undefined> =
  | { success: true; data: T }
  | { success: false; error: string };

export async function signUpAction(input: SignUpInput): Promise<ActionResult<{ userId: string }>> {
  const parsed = signUpSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  const { name, email, password } = parsed.data;

  const existing = await db.user.findUnique({ where: { email } });
  if (existing) {
    return { success: false, error: "An account with this email already exists" };
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await db.user.create({
    data: { name, email, passwordHash },
  });

  // Don't let a flaky SMTP send block account creation from succeeding.
  try {
    await sendWelcomeEmail(user.email, user.name);
  } catch (err) {
    console.error("Welcome email failed to send:", err);
  }

  return { success: true, data: { userId: user.id } };
}
