"use client";

import { useState } from "react";
import { ExternalLink, CheckCircle, HelpCircle, Users, UserPlus, Shield, ArrowUpRight, Copy, Check } from "lucide-react";
import { REGISTRATION_URL, PLAYMETRICS_GUIDE_URL, REGISTRATION_STEPS } from "@/lib/mtsa-data";

export function RegistrationGuideSection() {
  const [activeTab, setActiveTab] = useState<string>("existing-team");
  const [copiedLink, setCopiedLink] = useState(false);

  const currentGuide = REGISTRATION_STEPS.find((g) => g.id === activeTab) || REGISTRATION_STEPS[0];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(REGISTRATION_URL);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="register-guide" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-blue-600 bg-blue-100/70 border border-blue-200 px-3 py-1 rounded-full mb-3">
            Registration Guide
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            How to Register for MTSA
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Registration is processed directly through PlayMetrics. Choose your role below for step-by-step guidance.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl max-w-full overflow-x-auto no-scrollbar gap-1">
            {REGISTRATION_STEPS.map((role) => {
              const isActive = activeTab === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveTab(role.id)}
                  type="button"
                  className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  {role.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Guide Card */}
        <div className="mt-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-3">
            <div>
              <div className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-blue-200 mb-2">
                {currentGuide.badge}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {currentGuide.title}
              </h3>
              <p className="text-sm text-slate-500 mt-0.5">
                {currentGuide.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2.5 rounded-xl transition-colors"
                title="Copy registration link to share with teammates"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-4 py-2.5 rounded-xl transition-all shadow-sm"
              >
                <span>Register Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Steps List */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentGuide.steps.map((s) => (
              <div
                key={s.step}
                className="relative bg-slate-50 border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center mb-3">
                    {s.step}
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Official PlayMetrics Documentation Link */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-blue-50/60 rounded-2xl p-4 sm:p-5 border border-blue-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-slate-900">
                  Official PlayMetrics Help Article & Screenshots
                </h5>
                <p className="text-xs text-slate-600 mt-0.5">
                  View the official PlayMetrics Knowledge Base guide with screenshots for team players and free agents.
                </p>
              </div>
            </div>

            <a
              href={PLAYMETRICS_GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-800 bg-white border border-blue-200 hover:border-blue-300 px-4 py-2 rounded-xl transition-all shadow-2xs whitespace-nowrap"
            >
              <span>Read Official Guide</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
