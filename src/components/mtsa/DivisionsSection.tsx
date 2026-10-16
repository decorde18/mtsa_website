"use client";

import { useState } from "react";
import { ExternalLink, Trophy, Users, Clock, Shield, AlertTriangle } from "lucide-react";
import { DIVISIONS, REGISTRATION_URL } from "@/lib/mtsa-data";

export function DivisionsSection() {
  const [filter, setFilter] = useState<"All" | "11v11" | "7v7" | "Cup">("All");

  const filteredDivisions =
    filter === "All" ? DIVISIONS : DIVISIONS.filter((d) => d.category === filter);

  return (
    <section id="divisions" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3">
              Divisions & Programs
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              League Formats for Every Level
            </h2>
            <p className="mt-2 text-base text-slate-600 font-normal">
              From elite open competition to veteran over-50 play, MTSA offers organized soccer for all adult players across Middle Tennessee.
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl overflow-x-auto no-scrollbar">
            {(["All", "11v11", "7v7", "Cup"] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                  filter === cat
                    ? "bg-white text-blue-600 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat === "All" ? "All Formats" : cat === "Cup" ? "Cups & Tournaments" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Divisions Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDivisions.map((div) => {
            const isNoSliding = div.slideTackling.toLowerCase().includes("not permitted");

            return (
              <div
                key={div.id}
                className={`relative bg-slate-50 border rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all hover:shadow-md ${
                  div.featured
                    ? "border-blue-300 ring-1 ring-blue-200/50"
                    : "border-slate-200"
                }`}
              >
                <div>
                  {/* Category & Age badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block bg-blue-600/10 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded-full border border-blue-200">
                      {div.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {div.ageGroup}
                    </span>
                  </div>

                  <h3 className="text-xl font-black tracking-tight text-slate-900">
                    {div.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[40px]">
                    {div.description}
                  </p>

                  {/* Division Specs */}
                  <div className="mt-5 pt-4 border-t border-slate-200/80 space-y-2.5 text-xs text-slate-700 font-medium">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        Match Duration:
                      </span>
                      <span className="font-bold text-slate-900">{div.matchDuration}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-slate-400" />
                        Officiating:
                      </span>
                      <span className="font-bold text-slate-900">{div.referees}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        Roster Limit:
                      </span>
                      <span className="font-bold text-slate-900">Max {div.rosterLimit} players</span>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 flex items-start justify-between gap-2">
                      <span className="text-slate-500 flex items-center gap-1 flex-shrink-0">
                        Slide Tackles:
                      </span>
                      <span
                        className={`text-right font-bold ${
                          isNoSliding ? "text-amber-700" : "text-emerald-700"
                        }`}
                      >
                        {div.slideTackling}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-slate-200/80">
                  <a
                    href={REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-600 hover:text-white text-slate-800 border border-slate-300 hover:border-blue-600 text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl transition-all shadow-2xs group"
                  >
                    <span>Register on PlayMetrics</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
