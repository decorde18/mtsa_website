import Link from "next/link";
import { ExternalLink, ArrowRight, Shield, MapPin, Users, Award, Calendar, CheckCircle2, Trophy } from "lucide-react";
import { REGISTRATION_URL, PLAYMETRICS_GUIDE_URL } from "@/lib/mtsa-data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-pattern text-white pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-slate-800">
      {/* Decorative soccer pitch markings overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="pitchGrid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pitchGrid)" />
          <circle cx="50%" cy="50%" r="180" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="8 8" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Partnership Announcement Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium text-blue-200 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>League Update: Operated in Partnership with <strong>Tennessee Soccer (TNSoccer)</strong></span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
            Competitive Adult Soccer in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">Middle Tennessee</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
            Welcome to the new era of MTSA. Operated in partnership with TNSoccer, we provide premier adult soccer leagues across Greater Nashville with certified referee crews, top facilities, and streamlined registration via PlayMetrics.
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] text-center"
            >
              <span>Register on PlayMetrics</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="#register-guide"
              className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 font-semibold text-base px-5 py-3.5 rounded-xl border border-slate-700 transition-all text-center"
            >
              <span>How to Register Guide</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#divisions"
              className="inline-flex items-center justify-center text-sm font-semibold text-slate-300 hover:text-white px-3 py-2 text-center transition-colors"
            >
              View Divisions ↓
            </a>
          </div>

          {/* Quick Perks */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>No website login needed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Full USSF 3-referee crews for 11v11</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>USSF referee for 7v7</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Free Agents & Teams welcome</span>
            </div>
          </div>
        </div>

        {/* Quick League Highlights Cards Grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-2xl p-4 sm:p-5">
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">4 Divisions</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Open, O30, O40, O50</div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-2xl p-4 sm:p-5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">TNSoccer</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">State-sanctioned operations</div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-2xl p-4 sm:p-5">
            <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">Locations</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Nashville, Williamson</div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-2xl p-4 sm:p-5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">PlayMetrics</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Digital rosters & schedules</div>
          </div>
        </div>
      </div>
    </section>
  );
}
