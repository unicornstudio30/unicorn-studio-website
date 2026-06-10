"use client";

import Image from "next/image";

export type CaseStudyItem = {
  name: string;
  eyebrow: string;
  headline: React.ReactNode;
  snapshot: string;
  metrics: { value: string; label: string }[];
  timelineLabel: string;
  tools: string[];
  gradientStyle: string;
  image: string | null;
  isFeatured: boolean;
};

export const caseStudies: CaseStudyItem[] = [
  {
    name: "AI Revenue Operations · B2B SaaS Platform",
    eyebrow: "Case 01 · AI System for B2B SaaS",
    headline: (
      <>
        How a B2B SaaS company shortened sales cycles by <em className="italic font-medium">42%</em> and unlocked a 6-figure pipeline in a quarter.
      </>
    ),
    snapshot:
      "A mid-market B2B SaaS company selling to revenue teams. Long enterprise sales cycles, fragmented data across HubSpot, Salesforce, and Slack, and SDRs spending 60% of their time on manual research and CRM hygiene instead of selling.",
    metrics: [
      { value: "−42%", label: "Sales cycle length (avg deal close)" },
      { value: "3.4×", label: "SDR-qualified meetings per rep" },
      { value: "$640K", label: "New pipeline added in 90 days" },
      { value: "60%", label: "Reclaimed SDR selling time" },
    ],
    timelineLabel: "8 weeks",
    tools: ["HubSpot", "Salesforce", "Slack", "Clearbit", "OpenAI"],
    gradientStyle: "linear-gradient(135deg, #0f172a, #1e3a8a, #0ea5e9)",
    image: "/case-studies/b2b-saas-revops.svg",
    isFeatured: true,
  },
  {
    name: "Sip AI",
    eyebrow: "Case 02 · AI Mobile Product",
    headline: (
      <>
        An AI cocktail crafting app, <em className="italic font-medium">built and shipped</em> in 5 days.
      </>
    ),
    snapshot:
      "A subscription-ready mobile app turning any set of ingredients into a personalized cocktail recipe. Built end-to-end with FlutterFlow, Firebase, and GPT-4o.",
    metrics: [
      { value: "5", label: "Days from zero to production" },
      { value: "GPT-4o", label: "Recipe generation engine" },
      { value: "Stripe", label: "Subscription model live at launch" },
    ],
    timelineLabel: "5 days",
    tools: ["FlutterFlow", "Firebase", "OpenAI GPT-4o"],
    gradientStyle: "linear-gradient(135deg, #9333ea, #6366f1, #ec4899)",
    image: "/sip-ai-case-study.jpg",
    isFeatured: false,
  },
  {
    name: "Habitic",
    eyebrow: "Case 03 · Mobile Product",
    headline: (
      <>
        A habit tracker designed to feel <em className="italic font-medium">effortless every day.</em>
      </>
    ),
    snapshot:
      "A FlutterFlow-built habit tracker with one-tap check-ins, streak tracking, progress charts, and a motivational onboarding flow. Designed to never feel like a chore itself.",
    metrics: [
      { value: "1-tap", label: "Daily check-ins" },
      { value: "FlutterFlow", label: "Built for rapid iteration" },
      { value: "Production", label: "Polished, ready to ship" },
    ],
    timelineLabel: "5 days",
    tools: ["FlutterFlow", "Firebase", "Dart"],
    gradientStyle: "linear-gradient(135deg, #f97316, #ea580c, #dc2626)",
    image: "/habitic-case-study.jpg",
    isFeatured: false,
  },
  {
    name: "Flairr",
    eyebrow: "Case 04 · Custom Web Platform",
    headline: (
      <>
        A prompt marketplace, <em className="italic font-medium">built from scratch.</em>
      </>
    ),
    snapshot:
      "A two-sided marketplace where AI creators share, sell, and discover prompts. Personalized feeds, real-time messaging, secure payments, and a premium subscription tier. All custom-built.",
    metrics: [
      { value: "Real-time", label: "Messaging via WebSockets" },
      { value: "Stripe", label: "Marketplace payments" },
      { value: "Premium", label: "Subscription tier live" },
    ],
    timelineLabel: "Multi-phase",
    tools: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "WebSockets"],
    gradientStyle: "linear-gradient(135deg, #7c3aed, #6d28d9, #4c1d95)",
    image: "/flairr-case-study-1.jpg",
    isFeatured: false,
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Detailed Builds · Real Outcomes
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight px-4">
            Case <span className="gradient-text-modern">Studies</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light px-4">
            How we&apos;ve built systems and products for real businesses, with real timelines, tools, and outcomes.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {caseStudies.map((cs, index) => (
            <article
              key={index}
              className={`group relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0 rounded-2xl sm:rounded-3xl overflow-hidden border-2 transition-all duration-300 ${
                cs.isFeatured
                  ? "border-blue-300 shadow-2xl shadow-blue-500/10"
                  : "border-gray-200 hover:border-gray-900 shadow-lg hover:shadow-2xl"
              }`}
            >
              {/* Visual side */}
              <div
                className="relative min-h-[260px] lg:min-h-[440px]"
                style={{ background: cs.gradientStyle }}
              >
                {cs.image ? (
                  <Image
                    src={cs.image}
                    alt={cs.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-white/30 text-7xl sm:text-9xl font-bold italic select-none">
                      0{index + 1}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/80 mb-2">
                    {cs.eyebrow}
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                    {cs.name}
                  </h3>
                </div>
                {cs.isFeatured && (
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-blue-700 text-xs font-bold uppercase tracking-wider shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      Featured · B2B SaaS
                    </span>
                  </div>
                )}
              </div>

              {/* Content side */}
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
                      <div key={i} className="px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gray-50 border border-gray-200">
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
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold">{cs.timelineLabel}</span>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-gray-200" />
                    <div className="flex flex-wrap gap-1.5">
                      {cs.tools.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 text-[11px] font-medium"
                        >
                          {t}
                        </span>
                      ))}
                      {cs.tools.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 text-[11px] font-medium">
                          +{cs.tools.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300"
          >
            <span>Explore the full portfolio</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
