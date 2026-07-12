"use client";

import Link from "next/link";

export default function FourSystems() {
  const stages = [
    {
      number: "01",
      label: "The core",
      isMain: true,
      title: "Prospect discovery & list building",
      description:
        "A continuous sourcing engine that loads 50-500 fresh, ICP-matched accounts into your funnel every week. Multi-source (Apollo, LinkedIn Sales Nav, Clearbit, custom scrapers), deduped against your CRM automatically, enriched to 90%+ contact accuracy.",
      keywords: ["Sourcing", "ICP scoring", "Enrichment", "CRM dedup"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Personalised outreach",
      description:
        "AI writes every message from scratch, grounded in the prospect's actual role, company, and recent activity. Sent on the channel and cadence that fit them. Deliverability warm-up and reply monitoring built in.",
      keywords: ["Email", "LinkedIn", "WhatsApp", "Multi-channel"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Qualification & booking",
      description:
        "When a prospect replies, AI handles the back-and-forth, answers questions, and books meetings on your calendar. Only real intent hits your calendar; noise gets requalified or archived.",
      keywords: ["Reply handling", "Meeting booking", "Cal.com", "Hot handoff"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "CRM sync & reporting",
      description:
        "Every touchpoint, reply, and booked meeting logged in your CRM in real time. One dashboard for pipeline generated per week. Bi-weekly optimisation call to steer what the system rewrites next.",
      keywords: ["HubSpot", "Salesforce", "Attio", "Dashboard"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const featured = stages[0];
  const rest = stages.slice(1);

  return (
    <section
      id="systems"
      className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-7">
            The AI GTM System
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 sm:mb-6 tracking-[-0.02em] px-4 max-w-4xl mx-auto leading-[1.1] text-balance">
            One system, four stages.{" "}
            <span className="gradient-text-modern">Built around your ICP,</span> not a template.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-[1.6] px-4">
            Prospects go in at the top. Booked meetings come out the bottom. Everything between runs on autopilot, seven days a week.
          </p>
        </div>

        {/* Featured: The core */}
        <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-700 to-indigo-700 text-white shadow-2xl shadow-blue-600/25 mb-7 sm:mb-9 lg:mb-10">
          <div className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-indigo-400/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-14 items-center p-8 sm:p-12 lg:p-14">
            <div className="flex lg:flex-col items-baseline lg:items-start gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-bold uppercase tracking-[0.18em] backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                {featured.label}
              </span>
              <div className="text-6xl lg:text-7xl font-black leading-none text-white/30 lg:mt-4">
                {featured.number}
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 sm:mb-4">
                {featured.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-blue-50/90 leading-relaxed max-w-2xl mb-5 sm:mb-6">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.keywords.map((k, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] sm:text-xs font-medium text-white/90 backdrop-blur-sm"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center w-32 h-32 rounded-2xl bg-white/10 border border-white/20 text-white">
              {featured.icon}
            </div>
          </div>
        </article>

        {/* Three secondary stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {rest.map((sys) => (
            <article
              key={sys.number}
              className="group relative bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 p-7 sm:p-8 lg:p-9 overflow-hidden flex flex-col h-full shadow-sm hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]"
            >
              <span className="absolute top-0 left-0 h-1 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-t-2xl" />

              <div className="flex items-start justify-between mb-6 sm:mb-7">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border border-blue-100 flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6">
                  {sys.icon}
                </div>
                <span className="text-3xl sm:text-4xl font-black leading-none text-gray-100 group-hover:text-blue-100 transition-colors">
                  {sys.number}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-[1.3] mb-3">
                {sys.title}
              </h3>
              <p className="text-[15px] text-gray-600 leading-[1.7] mb-7 flex-1">
                {sys.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-5 border-t border-gray-100">
                {sys.keywords.map((k, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-700 text-[11px] font-medium border border-gray-100"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-12 lg:mt-14">
          <Link
            href="/ai-gtm-system/"
            className="btn-primary group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-white rounded-xl font-semibold text-[15px] sm:text-base"
          >
            <span className="relative z-10">See the full system in detail</span>
            <svg
              className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href="#contact"
            className="btn-secondary inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-white text-gray-900 rounded-xl font-semibold text-[15px] sm:text-base border border-gray-300"
          >
            Talk to us first
          </a>
        </div>
      </div>
    </section>
  );
}
