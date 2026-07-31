import { env } from "@/lib/env";
import { requireSession } from "@/lib/auth-guard";
import { SignOutButton } from "@/components/sign-out-button";
import { AppShell } from "@/components/layout/app-shell";
import type { NavItem } from "@/components/layout/types";

const navItems: NavItem[] = [{ label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" }];

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  // When AUTH_ENABLED is false, skip session checks entirely — this becomes
  // a plain shell with no login requirement, for the no-auth version of an app.
  const session = env.AUTH_ENABLED ? await requireSession() : null;

  return (
    <AppShell
      navItems={navItems}
      title="App Blueprint"
      sidebarHeader={<span className="font-semibold">App Blueprint</span>}
      headerActions={
        session && (
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>{session.user.email}</span>
            <SignOutButton />
          </div>
        )
      }
    >
      {children}
    </AppShell>
  );
}
