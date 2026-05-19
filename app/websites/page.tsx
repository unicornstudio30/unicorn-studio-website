"use client";

import { useState } from "react";
import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { useCalendly } from "@/components/CalendlyProvider";

const websiteFaqs = [
  {
    question: "WordPress, Webflow, or Framer — which should I pick?",
    answer:
      "Depends on team size, content velocity, and design ambition. WordPress when content updates are weekly. Webflow when marketing wants to ship without involving engineering. Framer when motion and craft are the point. We&apos;ll suggest the right one on the discovery call.",
  },
  {
    question: "How long does a build take?",
    answer:
      "From a few days for a single landing page to roughly four weeks for a 10 to 15 page marketing site. Every tier has a stated turnaround, and we&apos;ve never missed one across 460+ projects.",
  },
  {
    question: "What's included in every project?",
    answer:
      "Source files (Figma + the build platform), fully responsive design, two structured revision rounds, dedicated Slack channel, hosting setup, basic on-page SEO, and a launch kit. The boring things, handled.",
  },
  {
    question: "Can you help with copy?",
    answer:
      "Yes. Copywriting is an optional add-on at any tier — conversion-focused copy written specifically for AI SaaS buyers. Bundle it with the build or scope it standalone.",
  },
  {
    question: "What if I want changes after launch?",
    answer:
      "Optional monthly maintenance covers platform updates, weekly backups, uptime and security monitoring, performance scans, plus a fixed number of change requests per month.",
  },
  {
    question: "Is there a guarantee?",
    answer:
      "Love it, or we redo it. If you&apos;re not happy with the first deliverable, we redo it from scratch. If the launched site doesn&apos;t convert at the category baseline, we refund. Used twice across 460+ projects.",
  },
];

type Tier = {
  id: "standard" | "premium" | "elite";
  name: string;
  symbol: string;
  tagline: string;
  highlight?: boolean;
  includes: string[];
  turnaround: string;
  bestFor: string;
};

type PackageDef = {
  id: "design" | "dev" | "bundle";
  name: string;
  shortName: string;
  description: string;
  badge?: string;
  bestFor: string;
  tiers: Tier[];
};

const packages: PackageDef[] = [
  {
    id: "design",
    name: "Website Design",
    shortName: "Design only",
    description:
      "Pixel-perfect Figma designs of every page, every breakpoint. You hand the file to your own dev team or come back to us to build it.",
    bestFor:
      "Founders who already have a developer or design system, and need a designer who actually understands how AI SaaS sites convert.",
    tiers: [
      {
        id: "standard",
        name: "Standard",
        symbol: "⚡",
        tagline: "Template-led layout, clean type, considered spacing",
        includes: [
          "Home + key sub-pages",
          "Mobile, tablet, desktop frames",
          "Brand colours and typography applied",
          "Component library, ready to dev",
        ],
        turnaround: "2 to 5 days",
        bestFor: "A clean, modern marketing site. No bells, no whistles.",
      },
      {
        id: "premium",
        name: "Premium",
        symbol: "✦",
        tagline: "Custom layout, brand typography, wireframes, prototype",
        highlight: true,
        includes: [
          "Custom layout for every page",
          "Wireframes and clickable prototype",
          "Light micro-interactions",
          "CRM and form integrations mapped out",
        ],
        turnaround: "5 to 10 days",
        bestFor: "Most AI SaaS founders. Where conversion design meets a brand that actually feels like yours.",
      },
      {
        id: "elite",
        name: "Elite",
        symbol: "♛",
        tagline: "Art direction, illustration, motion, full brand book",
        includes: [
          "Bespoke art direction",
          "Custom illustrations and motion concepts",
          "Full brand book delivered alongside",
          "High-fidelity prototype with animation",
        ],
        turnaround: "7 to 18 days",
        bestFor: "Funding-grade marketing sites, launch campaigns, flagship product reveals.",
      },
    ],
  },
  {
    id: "dev",
    name: "Development",
    shortName: "Dev only",
    description:
      "You bring the design, we build it. Pixel-perfect, responsive, properly fast. WordPress, Webflow, or Framer, your call.",
    bestFor:
      "Founders who already have a designer (or Figma file) and need a build that loads fast, ranks, and is easy for the team to update later.",
    tiers: [
      {
        id: "standard",
        name: "Standard",
        symbol: "⚡",
        tagline: "Straightforward build, basic plugins or components",
        includes: [
          "Faithful Figma-to-build implementation",
          "Forms, analytics, and basic SEO",
          "CMS for blog or simple collections",
          "Launch on your hosting of choice",
        ],
        turnaround: "3 to 10 days",
        bestFor: "Marketing sites that need to ship now, not next quarter.",
      },
      {
        id: "premium",
        name: "Premium",
        symbol: "✦",
        tagline: "Custom build, animations, CRM and integrations",
        highlight: true,
        includes: [
          "Custom components, smooth interactions",
          "HubSpot, Pipedrive, Salesforce, or your CRM",
          "Member-gated content if needed",
          "Performance and accessibility passes",
        ],
        turnaround: "5 to 21 days",
        bestFor: "Sites with real product depth: pricing, docs, comparison, gated demos.",
      },
      {
        id: "elite",
        name: "Elite",
        symbol: "♛",
        tagline: "Complex build, GSAP-grade motion, full performance audit",
        includes: [
          "Advanced animations and scroll work",
          "Multilingual or multi-region setup",
          "Full Core Web Vitals tuning",
          "Custom CMS structures for product, careers, and resources",
        ],
        turnaround: "10 to 28 days",
        bestFor: "Sites that need to look and feel like a category leader, not a startup template.",
      },
    ],
  },
  {
    id: "bundle",
    name: "Design + Development",
    shortName: "Design + Dev",
    description:
      "End-to-end. We design, we build, we ship. One brief, one team, one delivery. The shape most founders pick.",
    badge: "Most popular",
    bestFor:
      "Founders who want a single point of accountability for the whole site, and don&apos;t want to hand designs across two vendors.",
    tiers: [
      {
        id: "standard",
        name: "Standard",
        symbol: "⚡",
        tagline: "Template-led design, straightforward build",
        includes: [
          "Standard tier design + standard tier build",
          "Brand applied, content slotted in",
          "Forms, analytics, SEO basics",
          "Live in days, not months",
        ],
        turnaround: "5 to 14 days",
        bestFor: "First version of your AI SaaS site. Ship something credible, fast.",
      },
      {
        id: "premium",
        name: "Premium",
        symbol: "✦",
        tagline: "Custom design + custom build, with animations",
        highlight: true,
        includes: [
          "Premium tier design + premium tier build",
          "Wireframes through to launch under one roof",
          "CRM, marketing, and analytics wired up",
          "Performance and SEO passes included",
        ],
        turnaround: "7 to 21 days",
        bestFor: "The version you actually run paid traffic to. Most founders pick this tier.",
      },
      {
        id: "elite",
        name: "Elite",
        symbol: "♛",
        tagline: "Art direction, motion, complex build, full performance pass",
        includes: [
          "Elite tier design + elite tier build",
          "Brand book and motion guidelines",
          "Multilingual, multi-region, multi-CMS",
          "Launch support and post-launch tuning",
        ],
        turnaround: "10 to 38 days",
        bestFor: "Brand-defining sites. The one your investors and competitors will reference.",
      },
    ],
  },
];

const platforms = [
  {
    name: "WordPress",
    tagline: "Builders that scale",
    description:
      "Elementor, DIVI, Bricks, Kadence, or Beaver Builder. Best when content velocity matters: blog, careers, docs, and pages that non-technical teammates update weekly.",
  },
  {
    name: "Webflow",
    tagline: "Visual-first, hosted",
    description:
      "When you want a marketing team to ship updates without involving engineering, but still need real CMS structure and clean code under the hood.",
  },
  {
    name: "Framer",
    tagline: "Design-led and fast",
    description:
      "When the design language is the product. Framer is our default for landing pages and high-fidelity launch sites where motion and craft are the point.",
  },
];

const everyProject = [
  "Figma source files, handed over",
  "Fully responsive: mobile, tablet, desktop",
  "Two rounds of structured revisions",
  "Project workspace and dedicated Slack channel",
  "Hosting setup and DNS guidance, on the platform you pick",
  "Competitor audit and basic on-page SEO included",
];

const guaranteeBullets = [
  "First deliverable not landing? We redo it from scratch.",
  "Site live but not converting at category baseline? We refund.",
  "Used twice across 460+ projects. Both founders are still with us.",
];

export default function WebsitePage() {
  const { openModal } = useCalendly();
  const [activePackage, setActivePackage] = useState<PackageDef["id"]>("bundle");
  const active = packages.find((p) => p.id === activePackage)!;

  return (
    <>
      <TopNavigation />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
          <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-blue-300/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-indigo-300/20 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Websites for AI SaaS founders
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[1.05] tracking-[-0.02em]">
                A website that takes your AI product
                <br />
                <span className="gradient-text-modern inline-block mt-2">as seriously as the tech.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-[1.65] max-w-2xl mx-auto">
                Three tiers, three platforms, fixed scope. The kind of site AI founders actually need, on the CMS that fits your team.
              </p>

              {/* Hero stat strip */}
              <div className="grid grid-cols-3 max-w-2xl mx-auto mt-10 sm:mt-12 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200/70 shadow-sm overflow-hidden divide-x divide-gray-200/70">
                {[
                  { value: "460+", label: "Sites delivered" },
                  { value: "4.9★", label: "Client satisfaction" },
                  { value: "0", label: "Missed deadlines" },
                ].map((s, i) => (
                  <div key={i} className="px-4 py-5 sm:py-6">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text-modern leading-none mb-1.5">{s.value}</div>
                    <div className="text-[11px] sm:text-xs text-gray-600 font-medium leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why founders pick us */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Why AI SaaS founders <span className="gradient-text-modern">pick us.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                A different kind of website partner. No retainer trap, no scope-creep games, no agency-speak.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {[
                {
                  title: "Built for AI SaaS.",
                  body: "We design for buyers reviewing AI tools: founders, ops, IT. Trust signals, security cues, and product clarity baked in.",
                },
                {
                  title: "Scoped, not hourly.",
                  body: "Every engagement is fixed-scope. You know what's getting built, when it lands, and what triggers a change order.",
                },
                {
                  title: "Predictable timelines.",
                  body: "Each tier has a stated turnaround. Most builds ship inside two weeks. Zero missed deadlines on 460+ projects.",
                },
                {
                  title: "Your stack, your win.",
                  body: "WordPress, Webflow, or Framer. Source files always handed over. No platform lock-in, no vendor leverage.",
                },
              ].map((b, i) => (
                <div
                  key={i}
                  className="group relative bg-white p-7 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]"
                >
                  <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-blue-600 mb-3">0{i + 1}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-[1.3] mb-2.5">{b.title}</h3>
                  <p className="text-[15px] text-gray-600 leading-[1.7]">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform flexibility */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                Platform flexibility
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                WordPress, Webflow, or Framer. <span className="gradient-text-modern">Your call.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                We&apos;ll suggest the right platform on our discovery call based on how your team works. None of them are wrong, but the wrong one for your team is the one you&apos;ll fight with for years.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className="group relative bg-white p-7 sm:p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]"
                >
                  <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-blue-500 to-indigo-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <div className="relative z-10">
                    <div className="flex items-baseline justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 tracking-[-0.01em]">{p.name}</h3>
                      <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-gray-400">{p.tagline}</span>
                    </div>
                    <p className="text-[15px] text-gray-600 leading-[1.7]">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Three packages overview */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                Three engagement shapes
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Pick how much of the build <span className="gradient-text-modern">you want us to handle.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                Design only, development only, or the full thing end-to-end.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
              {packages.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActivePackage(p.id);
                    document.getElementById("tiers")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`group relative text-left rounded-2xl border-2 p-7 sm:p-8 transition-all duration-300 overflow-hidden ${
                    p.id === "bundle"
                      ? "bg-gradient-to-br from-blue-700 via-blue-700 to-indigo-700 text-white border-blue-700 shadow-2xl shadow-blue-600/25"
                      : "bg-white border-gray-200 hover:border-gray-900 hover:shadow-xl hover:-translate-y-0.5"
                  }`}
                >
                  {p.badge && (
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] mb-4 ${
                        p.id === "bundle" ? "bg-white/15 text-white" : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      <span className={`w-1 h-1 rounded-full ${p.id === "bundle" ? "bg-cyan-300" : "bg-blue-600"}`} />
                      {p.badge}
                    </span>
                  )}
                  <h3
                    className={`text-2xl sm:text-[26px] font-bold leading-[1.2] mb-3 tracking-[-0.01em] ${
                      p.id === "bundle" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <p className={`text-[15px] leading-[1.65] ${p.id === "bundle" ? "text-blue-50/90" : "text-gray-600"}`}>
                    {p.description}
                  </p>
                  <div className={`mt-6 pt-5 border-t ${p.id === "bundle" ? "border-white/15" : "border-gray-100"}`}>
                    <div
                      className={`text-[10px] font-mono uppercase tracking-[0.22em] mb-2 ${
                        p.id === "bundle" ? "text-cyan-200" : "text-gray-400"
                      }`}
                    >
                      Best for
                    </div>
                    <p
                      className={`text-sm leading-[1.6] ${p.id === "bundle" ? "text-blue-50/80" : "text-gray-600"}`}
                      dangerouslySetInnerHTML={{ __html: p.bestFor }}
                    />
                  </div>
                  <div
                    className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
                      p.id === "bundle" ? "text-white" : "text-blue-600"
                    }`}
                  >
                    See tier breakdown
                    <svg
                      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tier breakdown */}
        <section id="tiers" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                Tier breakdown
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Three tiers, three depths of craft.
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                Pick a tier based on how custom you want it. We&apos;ll quote the build on the discovery call once we know the scope.
              </p>
            </div>

            {/* Package tabs */}
            <div className="flex justify-center mb-10 sm:mb-12">
              <div className="inline-flex rounded-full bg-white p-1.5 border border-gray-200 shadow-sm">
                {packages.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePackage(p.id)}
                    className={`px-4 sm:px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                      activePackage === p.id
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {p.shortName}
                  </button>
                ))}
              </div>
            </div>

            {/* Active package tiers */}
            <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
              {active.tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`relative rounded-3xl p-7 sm:p-8 transition-all duration-300 flex flex-col ${
                    tier.highlight
                      ? "bg-gradient-to-br from-blue-700 via-blue-700 to-indigo-700 text-white border-2 border-blue-600 shadow-2xl shadow-blue-600/25 scale-[1.02]"
                      : "bg-white border-2 border-gray-200 hover:border-gray-300 shadow-sm"
                  }`}
                >
                  {tier.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-blue-700 text-[10px] font-bold uppercase tracking-[0.18em] shadow-lg whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      Most picked
                    </span>
                  )}

                  <div className={`flex items-center gap-3 mb-2 ${tier.highlight ? "text-white" : "text-gray-900"}`}>
                    <span className={`text-2xl ${tier.highlight ? "text-cyan-200" : "text-blue-500"}`}>{tier.symbol}</span>
                    <h3 className="text-2xl font-bold tracking-[-0.01em]">{tier.name}</h3>
                  </div>
                  <p className={`text-sm leading-[1.6] mb-7 ${tier.highlight ? "text-blue-50/90" : "text-gray-600"}`}>
                    {tier.tagline}
                  </p>

                  <ul className="space-y-3 mb-7 flex-1">
                    {tier.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            tier.highlight ? "text-cyan-200" : "text-emerald-500"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-[14px] leading-[1.55] ${tier.highlight ? "text-blue-50" : "text-gray-700"}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className={`pt-5 border-t ${tier.highlight ? "border-white/15" : "border-gray-100"}`}>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div
                        className={`text-[10px] font-mono uppercase tracking-[0.22em] ${
                          tier.highlight ? "text-cyan-200" : "text-gray-400"
                        }`}
                      >
                        Turnaround
                      </div>
                      <div className={`text-sm font-semibold ${tier.highlight ? "text-white" : "text-gray-900"}`}>
                        {tier.turnaround}
                      </div>
                    </div>
                    <p className={`text-xs leading-[1.6] ${tier.highlight ? "text-blue-100/80" : "text-gray-500"}`}>
                      {tier.bestFor}
                    </p>
                  </div>

                  <button
                    onClick={openModal}
                    className={`mt-6 w-full py-3 rounded-xl font-bold text-sm transition-all ${
                      tier.highlight
                        ? "bg-white text-blue-700 hover:bg-blue-50"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    Let&apos;s Build
                  </button>
                </div>
              ))}
            </div>

            {/* Custom-quote callout */}
            <div className="max-w-4xl mx-auto mt-12 sm:mt-14 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 text-center shadow-sm">
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-blue-600 mb-2">
                Pricing
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-[1.7] max-w-2xl mx-auto">
                Every project is scoped and priced individually based on tier, page count, platform, and what you need launched. We&apos;ll quote the full build on the discovery call, in writing, before you commit a cent.
              </p>
            </div>
          </div>
        </section>

        {/* Whats included */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold mb-5">
                  What every project includes
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-5">
                  The boring things, <span className="gradient-text-modern">handled.</span>
                </h2>
                <p className="text-lg text-gray-600 leading-[1.65]">
                  Things most studios upcharge for or quietly skip. We bundle them in by default because a website without them isn&apos;t a finished website.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50/40 to-indigo-50/40 p-7 sm:p-9">
                <ul className="space-y-3.5">
                  {everyProject.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-gray-700 leading-[1.6]">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Optional <span className="gradient-text-modern">add-ons.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                Bundle in copy or ongoing maintenance, or add later. Quoted with the rest of the project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
              <article className="bg-white rounded-2xl border border-gray-200 p-7 sm:p-9">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Copywriting</h3>
                </div>
                <p className="text-[15px] text-gray-600 leading-[1.7]">
                  Conversion-focused copy written for AI SaaS buyers. Hero, sub-hero, features, social proof, FAQs, and the CTAs that actually convert. Rolled into the project quote or scoped standalone.
                </p>
              </article>

              <article className="bg-white rounded-2xl border border-gray-200 p-7 sm:p-9">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Maintenance</h3>
                </div>
                <p className="text-[15px] text-gray-600 leading-[1.7]">
                  Once your site is live, we keep it that way. Platform and plugin updates, weekly backups, uptime monitoring, security and performance scans, plus a monthly report and a fixed number of change requests. Optional, monthly.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-white border border-gray-200 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.18)] overflow-hidden">
              <div className="grid lg:grid-cols-[auto_1fr]">
                <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-8 sm:p-10 lg:w-[300px] flex flex-col items-start gap-5 text-white">
                  <span className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-blue-200 mb-1.5">The guarantee</div>
                    <div className="text-2xl font-bold leading-[1.2]">Love it, or we redo it.</div>
                  </div>
                </div>
                <div className="p-8 sm:p-10 flex items-center">
                  <ul className="space-y-3.5">
                    {guaranteeBullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] sm:text-base text-gray-700 leading-[1.65]">
                        <svg
                          className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          faqs={websiteFaqs}
          eyebrow="Website FAQ"
          headingLead="Common questions"
          headingHighlight="about the website service."
          lead="The ones founders ask before kicking off a build. Don&rsquo;t see yours?"
        />

        {/* CTA */}
        <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-[-0.02em] leading-[1.1]">
              Ready to brief your website?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-[1.6] max-w-2xl mx-auto">
              30 minutes, no pitch. Tell us about your AI SaaS, what pages you need, and we&apos;ll quote the full build on the call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="btn-primary-light w-full sm:w-auto px-8 py-4 text-blue-700 rounded-xl font-semibold text-base sm:text-lg text-center"
              >
                Book a discovery call
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
