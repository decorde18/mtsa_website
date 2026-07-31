"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/components/layout/types";

interface AppShellProps {
  navItems: NavItem[];
  title?: string;
  /** Rendered in the header's right slot — user email, sign-out button, etc. */
  headerActions?: React.ReactNode;
  /** Rendered above the sidebar nav — logo, app name, etc. */
  sidebarHeader?: React.ReactNode;
  /** Rendered at the bottom of the sidebar — user card, version tag, etc. */
  sidebarFooter?: React.ReactNode;
  /** Set to false to omit the footer entirely. */
  showFooter?: boolean;
  footerContent?: React.ReactNode;
  children: React.ReactNode;
}

export function AppShell({
  navItems,
  title,
  headerActions,
  sidebarHeader,
  sidebarFooter,
  showFooter = true,
  footerContent,
  children,
}: AppShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop sidebar — always visible at md+ */}
      <div className="hidden md:block">
        <Sidebar items={navItems} header={sidebarHeader} footer={sidebarFooter} />
      </div>

      {/* Mobile sidebar — slide-over, toggled by the header's menu button */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <div className="absolute inset-y-0 left-0 flex">
            <Sidebar items={navItems} header={sidebarHeader} footer={sidebarFooter} />
            <Button
              variant="ghost"
              size="icon"
              className="mt-2 ml-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      )}

      <div className={cn("flex flex-1 flex-col overflow-hidden")}>
        <Header
          title={title}
          actions={headerActions}
          showMenuButton
          onMenuClick={() => setMobileOpen(true)}
        />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
        {showFooter && <Footer>{footerContent}</Footer>}
      </div>
    </div>
  );
}
