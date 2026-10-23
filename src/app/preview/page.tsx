import { Navbar } from "@/components/mtsa/Navbar";
import { HeroSection } from "@/components/mtsa/HeroSection";
import { WhatsNextSection } from "@/components/mtsa/WhatsNextSection";
import { RegistrationGuideSection } from "@/components/mtsa/RegistrationGuideSection";
import { DivisionsSection } from "@/components/mtsa/DivisionsSection";
import { LocationsSection } from "@/components/mtsa/LocationsSection";
import { RulesSection } from "@/components/mtsa/RulesSection";
import { MissionAboutSection } from "@/components/mtsa/MissionAboutSection";
import { MobileStickyBar } from "@/components/mtsa/MobileStickyBar";
import { Footer } from "@/components/mtsa/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Preview Full Site | Middle Tennessee Soccer Alliance",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PreviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      {/* Dev / Preview Banner */}
      <div className="bg-amber-500 text-slate-950 px-4 py-2 text-xs sm:text-sm font-semibold flex items-center justify-between shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="bg-slate-950 text-amber-400 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
            Development Preview
          </span>
          <span>This is the full MTSA site currently in development.</span>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-1 bg-slate-950 text-white hover:bg-slate-800 px-3 py-1 rounded text-xs transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Landing Page</span>
        </Link>
      </div>

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <WhatsNextSection />
        <RegistrationGuideSection />
        <DivisionsSection />
        <LocationsSection />
        <RulesSection />
        <MissionAboutSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar />
    </div>
  );
}
