"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title?: string;
  /** Right-aligned slot — user menu, sign-out button, notifications, etc. */
  actions?: React.ReactNode;
  /** Shown only on mobile widths; toggles the AppShell's sidebar. */
  onMenuClick?: () => void;
  showMenuButton?: boolean;
  className?: string;
}

export function Header({ title, actions, onMenuClick, showMenuButton, className }: HeaderProps) {
  return (
    <header
      className={cn(
        "flex items-center justify-between gap-4 border-b border-border bg-background px-4 py-3 sm:px-6",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {showMenuButton && (
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onMenuClick}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}
        {title && <span className="font-semibold">{title}</span>}
      </div>

      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </header>
  );
}
