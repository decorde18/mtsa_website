import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Middle Tennessee Soccer Alliance | MTSA Soccer",
  description:
    "Middle Tennessee Soccer Alliance (MTSA) - Middle Tennessee's premier competitive adult soccer league operated in partnership with TNSoccer. Open, Over 30, Over 40, and Over 50.",
  keywords: [
    "MTSA",
    "Middle Tennessee Soccer Alliance",
    "Nashville adult soccer",
    "Tennessee Soccer",
    "TNSoccer",
    "PlayMetrics adult soccer",
    "adult soccer league Nashville",
    "Over 30 soccer",
    "Over 40 soccer",
    "Over 50 soccer",
  ],
  authors: [{ name: "Middle Tennessee Soccer Alliance" }],
  openGraph: {
    title: "Middle Tennessee Soccer Alliance | MTSA Soccer",
    description:
      "Nashville's premier competitive adult soccer league. Powered by TNSoccer and PlayMetrics.",
    url: "https://www.mtsasoccer.com/",
    siteName: "MTSA Soccer",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b1528",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-800 bg-slate-50 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
