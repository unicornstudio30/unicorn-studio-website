"use client";

import Image from "next/image";
import Link from "next/link";
import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { caseStudies } from "@/components/CaseStudies";
import { useCalendly } from "@/components/CalendlyProvider";

export default function CaseStudiesPage() {
  const { openModal } = useCalendly();

  const stats = [
    { value: "12+", label: "Systems & products shipped" },
    { value: "40+", label: "Integrations across stacks" },
    { value: "5–8 wks", label: "Typical build window" },
    { value: "100%", label: "Client-owned IP" },
  ];

  return (
    <>
      <TopNavigation />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/20 to-cyan-400/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-to-l from-indigo-400/20 to-purple-400/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
                Case Studies · Real Builds · Real Outcomes
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[1.1] tracking-tight">
                Systems that quietly{" "}
                <span className="gradient-text-modern inline-block">move revenue.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                A look behind the curtain at the AI systems and products we&apos;ve built. The constraints, the tradeoffs, and the numbers they actually shifted.
              </p>

              {/* Hero stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mt-10 sm:mt-14">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="px-4 py-4 sm:py-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 shadow-sm"
                  >
                    <div className="text-2xl sm:text-3xl font-bold gradient-text-modern leading-tight">
                      {s.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-600 leading-snug mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured case study */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-12 text-center">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-4">
                Featured Build
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                A B2B SaaS company, <span className="gradient-text-modern">re-engineered for revenue.</span>
              </h2>
            </div>

            {caseStudies
              .filter((cs) => cs.isFeatured)
              .map((cs, idx) => (
                <article
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-blue-300 shadow-2xl shadow-blue-500/10"
                >
                  <div
                    className="relative min-h-[280px] lg:min-h-[520px]"
                    style={{ background: cs.gradientStyle }}
                  >
                    {cs.image ? (
                      <Image
                        src={cs.image}
                        alt={cs.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-blue-700 text-xs font-bold uppercase tracking-wider shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        Featured · B2B SaaS
                      </span>
                    </div>
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                      <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/80 mb-2">
                        {cs.eyebrow}
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                        {cs.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-4 sm:mb-5">
                        {cs.headline}
                      </h3>
                      <div className="mb-5 sm:mb-6 p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                        <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-blue-700 mb-1.5">
                          Client snapshot
                        </div>
                        <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                          {cs.snapshot}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                        {cs.metrics.map((m, i) => (
                          <div
                            key={i}
                            className="px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gray-50 border border-gray-200"
                          >
                            <div className="text-lg sm:text-xl font-bold gradient-text-modern leading-tight">
                              {m.value}
                            </div>
                            <div className="text-[11px] sm:text-xs text-gray-600 leading-snug mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4 sm:pt-5">
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
                        <div className="flex items-center gap-1.5">
                          <svg
                            className="w-4 h-4 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="font-semibold">{cs.timelineLabel}</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-gray-200" />
                        <div className="flex flex-wrap gap-1.5">
                          {cs.tools.map((t, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 text-[11px] font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>

        {/* Featured deep-dive */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-1">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-4">
                  How it was built
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
                  8 weeks. <span className="gradient-text-modern">Five systems. One pipeline.</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  We didn&apos;t replace their CRM. We turned it into one node in a coordinated AI revops graph, so leads, signals, and follow-up actions move automatically across HubSpot, Salesforce, Slack, Clearbit, and the AI agent layer.
                </p>
              </div>

              <div className="lg:col-span-2">
                <ol className="relative border-l-2 border-blue-200 pl-6 sm:pl-8 space-y-7 sm:space-y-9">
                  {[
                    {
                      week: "Week 1",
                      title: "Discovery & RevOps Audit",
                      body:
                        "Mapped every lead source, handoff point, and broken edge in the existing CRM stack. Defined the qualification logic the team used implicitly and the deals that were silently slipping through.",
                    },
                    {
                      week: "Weeks 2–3",
                      title: "Unified Pipeline Layer",
                      body:
                        "Connected HubSpot, Salesforce, Clearbit, and Slack into a single source of truth. Every inbound lead now arrives enriched, deduped, and routed inside 60 seconds.",
                    },
                    {
                      week: "Weeks 4–5",
                      title: "AI Qualification & Research Agents",
                      body:
                        "Deployed agents that research accounts, score intent, generate first-touch outreach drafts, and surface buying signals. SDRs spend their time on conversations, not lookups.",
                    },
                    {
                      week: "Weeks 6–7",
                      title: "Forecasting & Pipeline Hygiene",
                      body:
                        "Automated CRM hygiene, stage progression nudges, and deal-risk flags. Sales leadership got a forecast they could trust without a Sunday spreadsheet ritual.",
                    },
                    {
                      week: "Week 8",
                      title: "Launch, Measurement & Tuning",
                      body:
                        "Side-by-side rollout with the GTM team, instrumented every step, and tuned thresholds against the first 30 days of real production data.",
                    },
                  ].map((step, i) => (
                    <li key={i} className="relative">
                      <span className="absolute -left-[37px] sm:-left-[41px] top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-600" />
                      </span>
                      <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-blue-600 mb-1">
                        {step.week}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                        {step.body}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* More case studies grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-4">
                More Builds
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Other recent <span className="gradient-text-modern">case studies.</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4 font-light">
                Mobile, marketplaces, AI products. Same playbook, different shapes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {caseStudies
                .filter((cs) => !cs.isFeatured)
                .map((cs, idx) => (
                  <article
                    key={idx}
                    className="group rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-gray-900 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col bg-white"
                  >
                    <div
                      className="relative aspect-[16/10]"
                      style={{ background: cs.gradientStyle }}
                    >
                      {cs.image ? (
                        <Image
                          src={cs.image}
                          alt={cs.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : null}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/80 mb-1.5">
                          {cs.eyebrow}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                          {cs.name}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 flex flex-col flex-1 gap-4">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                        {cs.headline}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {cs.snapshot}
                      </p>

                      <div className="grid grid-cols-3 gap-2 mt-1">
                        {cs.metrics.slice(0, 3).map((m, i) => (
                          <div
                            key={i}
                            className="px-2.5 py-2 rounded-lg bg-gray-50 border border-gray-200"
                          >
                            <div className="text-sm font-bold gradient-text-modern leading-tight">
                              {m.value}
                            </div>
                            <div className="text-[10px] text-gray-600 leading-snug mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-gray-100 pt-4 mt-auto">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600">
                          <div className="flex items-center gap-1.5">
                            <svg
                              className="w-4 h-4 text-blue-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="font-semibold">{cs.timelineLabel}</span>
                          </div>
                          <span className="text-gray-300">·</span>
                          <div className="flex flex-wrap gap-1">
                            {cs.tools.slice(0, 2).map((t, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 text-[10px] font-medium"
                              >
                                {t}
                              </span>
                            ))}
                            {cs.tools.length > 2 && (
                              <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 text-[10px] font-medium">
                                +{cs.tools.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* Process / approach strip */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-4">
                Why these builds work
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Same approach. <span className="gradient-text-modern">Every build.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  number: "01",
                  title: "Constraints first.",
                  body:
                    "We map the system the business already runs on (tools, handoffs, edge cases) before drawing a single architecture diagram.",
                },
                {
                  number: "02",
                  title: "Ship in weeks, not quarters.",
                  body:
                    "Tight scope, weekly milestones, production deploys from week one. You see the system working before you ever pay the final invoice.",
                },
                {
                  number: "03",
                  title: "You own everything.",
                  body:
                    "No black boxes. Every workflow, prompt, and integration is yours forever, with documentation and a handoff your team can run on.",
                },
              ].map((p) => (
                <div
                  key={p.number}
                  className="relative bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 hover:border-blue-300 transition-colors"
                >
                  <div className="text-xs font-mono text-blue-600 mb-2 tracking-[0.2em]">
                    {p.number}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 sm:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                Want a build like one of these?
              </h3>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
                We take a small number of new builds each quarter. If you have a system in mind, the discovery call is the place to pressure-test it.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <button
                  onClick={openModal}
                  className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-white rounded-xl font-semibold text-base"
                >
                  <span>Book a discovery call</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <Link
                  href="/#portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base text-gray-900 bg-white border border-gray-300 hover:border-gray-900 transition-colors"
                >
                  See recent launches
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CTA />
        <Footer />
      </div>
    </>
  );
}
