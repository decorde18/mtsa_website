import { Phone, Mail, MapPin, Shield, Trophy, HeartHandshake, Sparkles, ExternalLink } from "lucide-react";
import { REGISTRATION_URL } from "@/lib/mtsa-data";

export function MissionAboutSection() {
  const affiliations = [
    { name: "Tennessee Soccer (TNSoccer)", url: "https://www.tnsoccer.org/", desc: "State Governing Body" },
    { name: "US Adult Soccer Association", url: "https://www.usadultsoccer.com/", desc: "National Adult Affiliate" },
    { name: "US Soccer Federation", url: "https://www.ussoccer.com/", desc: "National Governing Body" },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Mission & Purpose */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-blue-600 bg-blue-100/70 border border-blue-200 px-3 py-1 rounded-full mb-3">
              About MTSA
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              Our Mission & Heritage
            </h2>

            {/* Official Mission Quote Card */}
            <div className="mt-6 bg-white border-l-4 border-blue-600 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-2xs">
              <p className="text-base sm:text-lg text-slate-800 font-medium italic leading-relaxed">
                “Middle Tennessee Soccer Alliance is committed to creating the best opportunity for competitive adult soccer with passion and respect to all. We want to invite everyone to celebrate our appreciation for the beautiful game while fostering a spirit that leads to healthy competition and the opportunity to determine a champion.”
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Official MTSA Mission Statement
                </span>
                <span className="text-xs font-semibold text-blue-600">Nashville, TN</span>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">Certified USSF Officiating</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Every 11v11 match is staffed with 3 certified USSF referees for safety and fair competition.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">Respect & Sportsmanship</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Zero tolerance for unsportsmanlike conduct, preserving an enjoyable match environment for all ages.
                </p>
              </div>
            </div>
          </div>

          {/* Affiliations & Direct Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Sanctioning Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-2xs">
              <h3 className="text-lg font-bold text-slate-900">
                Official League Affiliations
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                MTSA is fully sanctioned, providing players with national affiliation benefits and insurance.
              </p>

              <div className="space-y-2.5">
                {affiliations.map((aff, i) => (
                  <a
                    key={i}
                    href={aff.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-200 transition-all group"
                  >
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {aff.name}
                      </div>
                      <div className="text-xs text-slate-500">{aff.desc}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-7 shadow-md">
              <h3 className="text-lg font-bold text-white">
                League Contacts
              </h3>
              <p className="text-xs text-slate-300 mt-1 mb-5">
                Have questions regarding team placement, commissioner oversight, or registration?
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <a
                  href="tel:615-241-0816"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="font-semibold text-white">615-241-0816</span>
                </a>

                <a
                  href="mailto:mtsaexecutivedirector@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="font-semibold text-white">mtsaexecutivedirector@gmail.com</span>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/10 text-slate-300">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Nashville & Middle Tennessee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
