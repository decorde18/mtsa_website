"use client";

import { Toaster as SonnerToaster } from "sonner";

// Themed to match the app's design tokens. Render this once, near the root
// (see src/components/providers.tsx) — then call `toast(...)` from
// "sonner" anywhere to show a notification.
export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast: "bg-card text-card-foreground border border-border shadow-md",
          description: "text-muted-foreground",
          actionButton: "bg-primary text-primary-foreground",
          cancelButton: "bg-secondary text-secondary-foreground",
        },
      }}
    />
  );
}
