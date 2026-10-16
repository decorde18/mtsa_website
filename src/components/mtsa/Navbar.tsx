"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ExternalLink, ArrowRight, ShieldCheck, MapPin, BookOpen, Trophy } from "lucide-react";
import { REGISTRATION_URL } from "@/lib/mtsa-data";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "What's Next", href: "#whats-next" },
    { label: "How to Register", href: "#register-guide" },
    { label: "Divisions", href: "#divisions" },
    { label: "Field Locations", href: "#locations" },
    { label: "Rules", href: "#rules" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      {/* Top Banner Notice for TNSoccer Transition */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white text-xs sm:text-sm font-medium py-2 px-4 border-b border-blue-700/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              New Registration
            </span>
            <span className="hidden sm:inline text-slate-200">
              MTSA is now powered by Tennessee Soccer (TNSoccer).
            </span>
            <span className="sm:hidden text-slate-200">Powered by TNSoccer.</span>
          </div>

          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-blue-200 hover:text-white transition-colors underline-offset-2 hover:underline ml-auto"
          >
            Register on PlayMetrics
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 w-full glass-nav border-b border-slate-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group py-2">
            <div className="relative w-11 h-11 flex-shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 p-1 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
              <Image
                src="/mtsa-logo.png"
                alt="Middle Tennessee Soccer Alliance Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 leading-tight">
                MTSA <span className="text-blue-600 font-extrabold">SOCCER</span>
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase hidden sm:block">
                Middle Tennessee Soccer Alliance
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-100/80 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-sm shadow-blue-500/25 transition-all hover:shadow-md hover:scale-[1.02]"
            >
              <span>Register Now</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl shadow-sm transition-all"
              >
                <span>Register on PlayMetrics</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-center text-xs text-slate-500">
                Operated in partnership with Tennessee Soccer (TNSoccer).
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
