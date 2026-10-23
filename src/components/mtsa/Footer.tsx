import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ShieldCheck, Heart, ArrowUp } from "lucide-react";
import { REGISTRATION_URL, PLAYMETRICS_GUIDE_URL, RULES_DOC_URL } from "@/lib/mtsa-data";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl p-1 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/mtsa-logo.png"
                  alt="MTSA Soccer Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-white tracking-tight">
                  MTSA <span className="text-blue-400">SOCCER</span>
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Middle Tennessee Soccer Alliance
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              The premier competitive adult soccer league in Nashville and Middle Tennessee. Operated in partnership with Tennessee Soccer (TNSoccer) and powered by PlayMetrics.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700/40 rounded-xl px-3 py-1.5 text-xs text-blue-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>US Soccer & TNSoccer Sanctioned</span>
            </div>
          </div>

          {/* Registration & PlayMetrics Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Registration
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white inline-flex items-center gap-1 font-semibold text-blue-400"
                >
                  PlayMetrics Registration
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="#register-guide"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Player on Team Guide
                </a>
              </li>
              <li>
                <a
                  href="#register-guide"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Free Agent Registration
                </a>
              </li>
              <li>
                <a
                  href="#register-guide"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Captain Roster Guide
                </a>
              </li>
              <li>
                <a
                  href={PLAYMETRICS_GUIDE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  PlayMetrics Help Center
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick League Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              League
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#whats-next" className="text-slate-400 hover:text-white transition-colors">
                  What's Next
                </a>
              </li>
              <li>
                <a href="#divisions" className="text-slate-400 hover:text-white transition-colors">
                  Divisions & Programs
                </a>
              </li>
              <li>
                <a href="#locations" className="text-slate-400 hover:text-white transition-colors">
                  Field Locations & Directions
                </a>
              </li>
              <li>
                <a href="#rules" className="text-slate-400 hover:text-white transition-colors">
                  League Rules Overview
                </a>
              </li>
              <li>
                <a
                  href={RULES_DOC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  Full Rules Document
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  Mission & Values
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Governance */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contact & Affiliates
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <span className="block text-slate-500 text-[11px] font-semibold">Phone:</span>
                <a href="tel:615-241-0816" className="text-slate-300 hover:text-white">
                  615-241-0816
                </a>
              </li>
              <li>
                <span className="block text-slate-500 text-[11px] font-semibold">Email:</span>
                <a href="mailto:mtsaexecutivedirector@gmail.com" className="text-slate-300 hover:text-white">
                  mtsaexecutivedirector@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <span className="block text-slate-500 text-[11px] font-semibold">Affiliations:</span>
                <div className="flex flex-col gap-1 mt-1 text-xs">
                  <a href="https://www.tnsoccer.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                    • Tennessee Soccer (TNSoccer)
                  </a>
                  <a href="https://www.usadultsoccer.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                    • US Adult Soccer Association
                  </a>
                  <a href="https://www.ussoccer.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                    • US Soccer Federation
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and disclaimers */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Middle Tennessee Soccer Alliance (MTSA). All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            Nashville, Tennessee • Serving Adult Soccer Since 2002
          </p>
        </div>
      </div>
    </footer>
  );
}
