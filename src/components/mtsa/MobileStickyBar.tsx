"use client";

import { ExternalLink, Trophy, MapPin, BookOpen, UserPlus, Info } from "lucide-react";
import { REGISTRATION_URL } from "@/lib/mtsa-data";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg px-2 py-2 safe-area-bottom">
      <div className="flex items-center justify-around gap-1">
        <a
          href="#divisions"
          className="flex flex-col items-center justify-center p-1.5 text-slate-600 hover:text-blue-600 active:scale-95 transition-all text-center min-w-[56px]"
        >
          <Trophy className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Divisions</span>
        </a>

        <a
          href="#locations"
          className="flex flex-col items-center justify-center p-1.5 text-slate-600 hover:text-blue-600 active:scale-95 transition-all text-center min-w-[56px]"
        >
          <MapPin className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Fields</span>
        </a>

        {/* Central Register Button */}
        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs px-4 py-2.5 rounded-full shadow-md shadow-blue-500/30 transition-all flex-shrink-0"
        >
          <UserPlus className="w-3.5 h-3.5" />
          <span>Register</span>
          <ExternalLink className="w-3 h-3 opacity-80" />
        </a>

        <a
          href="#rules"
          className="flex flex-col items-center justify-center p-1.5 text-slate-600 hover:text-blue-600 active:scale-95 transition-all text-center min-w-[56px]"
        >
          <BookOpen className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Rules</span>
        </a>

        <a
          href="#about"
          className="flex flex-col items-center justify-center p-1.5 text-slate-600 hover:text-blue-600 active:scale-95 transition-all text-center min-w-[56px]"
        >
          <Info className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">About</span>
        </a>
      </div>
    </div>
  );
}
