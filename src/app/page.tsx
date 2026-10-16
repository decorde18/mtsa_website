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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
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
