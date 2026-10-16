"use client";

import { useState } from "react";
import { MapPin, Navigation, Copy, Check, Search, ExternalLink } from "lucide-react";
import { LOCATIONS } from "@/lib/mtsa-data";

export function LocationsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredLocations = LOCATIONS.filter((loc) => {
    const q = searchQuery.toLowerCase();
    return (
      loc.name.toLowerCase().includes(q) ||
      loc.city.toLowerCase().includes(q) ||
      loc.address.toLowerCase().includes(q) ||
      loc.fields.some((f) => f.toLowerCase().includes(q))
    );
  });

  const handleCopyAddress = (id: string, address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="locations" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-blue-600 bg-blue-100/70 border border-blue-200 px-3 py-1 rounded-full mb-3">
              Match Facilities
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              League Field Directory
            </h2>
            <p className="mt-2 text-base text-slate-600 font-normal">
              MTSA matches take place on premier natural grass and turf pitches across Greater Nashville and Williamson County.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search complex or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
            />
          </div>
        </div>

        {/* Locations Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((loc) => {
            const isCopied = copiedId === loc.id;
            const fullAddress = `${loc.address}, ${loc.city}, ${loc.state} ${loc.zip}`;

            return (
              <div
                key={loc.id}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all"
              >
                <div>
                  {/* Top Bar with Surface badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                      <MapPin className="w-3 h-3 text-blue-600" />
                      {loc.city}, {loc.state}
                    </span>

                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                        loc.surface === "Turf"
                          ? "bg-sky-50 text-sky-700 border-sky-200"
                          : "bg-emerald-50 text-emerald-700 border-emerald-200"
                      }`}
                    >
                      {loc.surface}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    {loc.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500 font-medium">
                    {loc.address}, {loc.city}, {loc.state} {loc.zip}
                  </p>

                  {/* Field list pills */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-400 block mb-1.5">
                      Match Fields:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.fields.map((field, fIdx) => (
                        <span
                          key={fIdx}
                          className="bg-slate-100 text-slate-700 text-xs font-medium px-2 py-0.5 rounded-md border border-slate-200/60"
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>

                  {loc.notes && (
                    <p className="mt-3 text-xs text-slate-500 italic">
                      {loc.notes}
                    </p>
                  )}
                </div>

                {/* Card Actions: Copy & Directions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopyAddress(loc.id, fullAddress)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 py-2.5 px-3 rounded-xl transition-colors"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 py-2.5 px-4 rounded-xl transition-all shadow-2xs"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Directions</span>
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
