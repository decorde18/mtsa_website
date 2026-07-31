import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import type { RoleType } from "@prisma/client";

/**
 * Use in server components/actions that require a signed-in user.
 * Redirects to sign-in if there's no session.
 */
export async function requireSession() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/sign-in");
  }
  return session;
}

/**
 * Roles that are active RIGHT NOW: active flag is true, startDate has passed,
 * and endDate is either null or hasn't passed yet.
 *
 * Always query this fresh from the DB for anything sensitive (permissions,
 * viewing restricted data) — don't rely solely on a session-cached snapshot,
 * since a role's active flag or endDate can change while a session is live.
 */
export async function getCurrentRoles(userId: string) {
  const now = new Date();
  return db.userRole.findMany({
    where: {
      userId,
      active: true,
      startDate: { lte: now },
      OR: [{ endDate: null }, { endDate: { gte: now } }],
    },
  });
}

/**
 * Roles that are assigned but haven't started yet (e.g. "coach starting
 * next season"). These should be visible in upcoming-roster style UI,
 * but must NOT grant any current permissions.
 */
export async function getUpcomingRoles(userId: string) {
  const now = new Date();
  return db.userRole.findMany({
    where: {
      userId,
      active: true,
      startDate: { gt: now },
    },
    orderBy: { startDate: "asc" },
  });
}

/**
 * Throws/redirects unless the current user has an active role of the given type.
 * Use in server actions or route handlers that gate a specific action.
 */
export async function requireActiveRole(type: RoleType) {
  const session = await requireSession();
  const roles = await getCurrentRoles(session.user.id);
  const hasRole = roles.some((r) => r.type === type);

  if (!hasRole) {
    throw new Error(`Forbidden: requires active ${type} role`);
  }

  return session;
}
