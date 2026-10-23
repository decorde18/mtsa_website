"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Copy, Check, Mail, Phone, ShieldCheck } from "lucide-react";
import { REGISTRATION_URL, PLAYMETRICS_GUIDE_URL } from "@/lib/mtsa-data";

export function ComingSoonLanding() {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(REGISTRATION_URL);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0b1528] text-slate-100 relative overflow-hidden">
      {/* Subtle athletic pitch background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Top minimal bar */}
      <header className="relative z-10 w-full max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-xl p-1 flex items-center justify-center shadow-md">
            <Image
              src="/mtsa-logo.png"
              alt="MTSA Soccer Logo"
              width={34}
              height={34}
              className="object-contain"
              priority
            />
          </div>
          <span className="text-base font-black tracking-tight text-white">
            MTSA <span className="text-blue-400">SOCCER</span>
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Registration Open</span>
        </div>
      </header>

      {/* Main Centered Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="max-w-2xl w-full text-center">
          {/* Centered Logo Badge */}
          <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-3xl p-3 shadow-2xl shadow-blue-500/20 ring-4 ring-white/10 flex items-center justify-center mb-6">
            <Image
              src="/mtsa-logo.png"
              alt="Middle Tennessee Soccer Alliance Logo"
              width={96}
              height={96}
              className="object-contain"
              priority
            />
          </div>

          {/* Subheading / Tagline */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-blue-300 bg-blue-950/80 border border-blue-800/60 px-4 py-1.5 rounded-full mb-4">
            Middle Tennessee Soccer Alliance • Nashville, TN
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            New MTSA Experience <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
              Coming Soon
            </span>
          </h1>

          {/* Clean Message */}
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-lg mx-auto leading-relaxed">
            We are currently building our brand-new league website. In the meantime, season registration is officially open!
          </p>

          {/* Registration CTA Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02]"
            >
              <span>Register on PlayMetrics</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 font-semibold text-sm px-5 py-4 rounded-xl border border-slate-700 transition-colors"
              title="Copy direct registration URL"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Registration Link</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Help Link for PlayMetrics */}
          <div className="mt-4 text-xs text-slate-400">
            <span>New to PlayMetrics or registering a team/free agent? </span>
            <a
              href={PLAYMETRICS_GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline font-medium inline-flex items-center gap-0.5"
            >
              View registration guide <ExternalLink className="w-3 h-3 inline" />
            </a>
          </div>

          {/* Contact Box */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <a href="mailto:mtsaexecutivedirector@gmail.com" className="hover:text-white transition-colors">
                mtsaexecutivedirector@gmail.com
              </a>
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <a href="tel:615-241-0816" className="hover:text-white transition-colors">
                615-241-0816
              </a>
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>TNSoccer & US Soccer Sanctioned</span>
            </span>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 w-full py-4 text-center text-[11px] text-slate-500 border-t border-slate-800/60">
        <p>© {new Date().getFullYear()} Middle Tennessee Soccer Alliance. All rights reserved.</p>
      </footer>
    </div>
  );
}
