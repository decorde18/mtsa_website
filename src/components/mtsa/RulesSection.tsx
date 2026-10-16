"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, AlertCircle, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import { RULES_HIGHLIGHTS, RULES_DOC_URL } from "@/lib/mtsa-data";

export function RulesSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    rosters: true,
    sliding: true,
  });

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="rules" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3">
              Fair Play & Regulations
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              League Rules & Guidelines
            </h2>
            <p className="mt-2 text-base text-slate-600 font-normal">
              MTSA matches are governed by FIFA Laws of the Game with specific league modifications for adult player safety, rolling substitutions, and division age eligibility.
            </p>
          </div>

          <a
            href={RULES_DOC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100/80 border border-blue-200 px-4 py-2.5 rounded-xl transition-all shadow-2xs whitespace-nowrap"
          >
            <BookOpen className="w-4 h-4" />
            <span>Full Official Rules Document</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Quick Highlights Summary Banner */}
        <div className="mt-8 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-white">Photo ID Pre-Match Check-in</h4>
                <p className="text-xs text-slate-300 mt-1">Referees verify all players against printed TSSA rosters before kickoff.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-white">Slide Tackling Varies by Division</h4>
                <p className="text-xs text-slate-300 mt-1">Allowed in Open; Captains' mutual agreement in O30 D1; Prohibited in O30 D2, O40 & O50.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-white">Rolling Substitutions</h4>
                <p className="text-xs text-slate-300 mt-1">Unlimited substitutions on own throw-ins, goal kicks, injury, and goals.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Accordion List */}
        <div className="mt-8 space-y-4">
          {RULES_HIGHLIGHTS.map((item) => {
            const isOpen = !!openIds[item.id];

            return (
              <div
                key={item.id}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-100/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-xl bg-slate-200/60 flex items-center justify-center text-slate-600 flex-shrink-0 ml-4">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-2 border-t border-slate-200/60 bg-white">
                    {item.alert && (
                      <div className="mb-4 bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-800 flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{item.alert}</span>
                      </div>
                    )}

                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
