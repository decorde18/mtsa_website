import { ShieldCheck, Smartphone, CheckCircle, ArrowRight, ExternalLink, Sparkles, AlertCircle } from "lucide-react";
import { REGISTRATION_URL, PLAYMETRICS_GUIDE_URL } from "@/lib/mtsa-data";

export function WhatsNextSection() {
  const transitionPoints = [
    {
      title: "Operated by Tennessee Soccer (TNSoccer)",
      description:
        "MTSA has partnered directly with TNSoccer to manage league administration, referee assignors, state association insurance, and competition governance. This brings professional-grade organization and certified USSF officiating to every match.",
      icon: ShieldCheck,
      color: "blue",
    },
    {
      title: "PlayMetrics Registration & Management",
      description:
        "All player sign-ups, team registration, waiver signing, payment processing, and photo rosters are now handled via the PlayMetrics app. Captains have digital rosters and real-time team communication at their fingertips.",
      icon: Smartphone,
      color: "emerald",
    },
    {
      title: "No Website Logins Required",
      description:
        "You no longer need an account or password on mtsasoccer.com! This website is now a clean, modern informational hub for divisions, field directions, rules, and registration links. All secure account activity lives in PlayMetrics.",
      icon: CheckCircle,
      color: "sky",
    },
    {
      title: "Streamlined, Distraction-Free Hub",
      description:
        "We retired outdated social media feeds, static field widgets, and old news archives. Everything is focused on giving players and captains fast, mobile-friendly access to what actually matters.",
      icon: Sparkles,
      color: "indigo",
    },
  ];

  return (
    <section id="whats-next" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide uppercase text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3">
            League Update & Transition
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            What's Next for MTSA Soccer
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Middle Tennessee Soccer Alliance has undergone significant modern upgrades. Here is what you need to know about our partnership with TNSoccer and our new registration process.
          </p>
        </div>

        {/* Transition Feature Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {transitionPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-7 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Card: Next Steps for Players & Captains */}
        <div className="mt-10 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-400/30 mb-3">
                Action Required
              </div>
              <h3 className="text-xl sm:text-3xl font-black tracking-tight text-white">
                Ready to Join the Upcoming Season?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether you are joining an existing squad or registering as a Free Agent, all registrations are completed online through PlayMetrics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto flex-shrink-0">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg transition-all text-center"
              >
                <span>Direct Registration Link</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#register-guide"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl border border-white/20 transition-all text-center"
              >
                <span>Step-by-Step Instructions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
