import type { IconName } from "@/components/layout/icon-map";

export interface NavItem {
  label: string;
  href: string;
  /**
   * Icon name (string), not a component reference. Passing an actual
   * component/function from a Server Component to a Client Component prop
   * fails RSC serialization ("Only plain objects can be passed..."),
   * so navItems defined in a server layout must use string names —
   * Sidebar resolves the real component client-side via icon-map.ts.
   */
  icon?: IconName;
}
