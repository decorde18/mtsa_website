"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { iconMap } from "@/components/layout/icon-map";
import type { NavItem } from "@/components/layout/types";

interface SidebarProps {
  items: NavItem[];
  /** Rendered above the nav list — logo, app name, whatever you want. */
  header?: React.ReactNode;
  /** Rendered pinned to the bottom — user card, version tag, etc. */
  footer?: React.ReactNode;
  className?: string;
}

export function Sidebar({ items, header, footer, className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex h-full w-64 flex-col border-r border-border bg-card",
        className
      )}
    >
      {header && <div className="border-b border-border p-4">{header}</div>}

      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {items.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
          const Icon = item.icon ? iconMap[item.icon] : undefined;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
              )}
            >
              {Icon && <Icon className="h-4 w-4 shrink-0" />}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {footer && <div className="border-t border-border p-3">{footer}</div>}
    </aside>
  );
}
