import { LayoutDashboard, Users, Settings, Home, Calendar } from "lucide-react";

// Add icons here as your nav grows. Keeping this as the single registry
// means server-defined navItems only ever pass a string name across the
// server/client boundary — never a component reference (which RSC can't
// serialize).
export const iconMap = {
  LayoutDashboard,
  Users,
  Settings,
  Home,
  Calendar,
} as const;

export type IconName = keyof typeof iconMap;
