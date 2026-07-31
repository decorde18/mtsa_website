import { auth } from "@/lib/auth";
import { env } from "@/lib/env";
import { getCurrentRoles, getUpcomingRoles } from "@/lib/auth-guard";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

export default async function DashboardPage() {
  // Roles are tied to a specific user, so this view has nothing meaningful
  // to show without a session. The (app)/layout.tsx already skips its own
  // requireSession() redirect when AUTH_ENABLED is false — this page must
  // do the same check itself rather than calling requireSession() again,
  // or it forces a redirect regardless of the flag (that mismatch was the
  // bug that caused a redirect to /sign-in even with AUTH_ENABLED="false").
  if (!env.AUTH_ENABLED) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>
            Auth is currently disabled (<code>AUTH_ENABLED=&quot;false&quot;</code>), so there's no
            signed-in user to show roles for. Replace this page's content with whatever this app
            needs when running without login.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  // Auth is enabled — the layout above already guaranteed a session exists
  // (it redirects to /sign-in otherwise), so this is safe to use directly.
  const session = await auth();
  const [current, upcoming] = await Promise.all([
    getCurrentRoles(session!.user.id),
    getUpcomingRoles(session!.user.id),
  ]);

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Current roles</CardTitle>
          <CardDescription>Active right now — grant real permissions.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {current.length === 0 && (
            <p className="text-sm text-muted-foreground">No active roles yet.</p>
          )}
          {current.map((role) => (
            <Badge key={role.id} variant="primary">
              {role.type}
            </Badge>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming roles</CardTitle>
          <CardDescription>Assigned but not started — visible, no permissions yet.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {upcoming.length === 0 && (
            <p className="text-sm text-muted-foreground">Nothing scheduled.</p>
          )}
          {upcoming.map((role) => (
            <Badge key={role.id} variant="outline">
              {role.type} — starts {formatDate(role.startDate)}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
