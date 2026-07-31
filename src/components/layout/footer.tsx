import { cn } from "@/lib/utils";

interface FooterProps {
  children?: React.ReactNode;
  className?: string;
}

export function Footer({ children, className }: FooterProps) {
  return (
    <footer
      className={cn(
        "border-t border-border px-4 py-4 text-center text-sm text-muted-foreground sm:px-6",
        className
      )}
    >
      {children ?? `© ${new Date().getFullYear()} — All rights reserved.`}
    </footer>
  );
}
