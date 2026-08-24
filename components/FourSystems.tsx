"use client";

import Link from "next/link";

export default function FourSystems() {
  const featured = {
    number: "01",
    label: "Flagship",
    title: "AI GTM System",
    description:
      "One AI system that runs your entire go-to-market. Finds the right accounts, enriches every contact, writes the outreach, books the meetings, syncs your CRM, and reports the numbers. Built once, runs forever.",
    keywords: ["Prospecting", "Outreach", "Qualification", "CRM sync", "Reporting"],
    href: "/ai-gtm-system/",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  };

  const rest = [
    {
      number: "02",
      title: "Workflow Automation",
      description:
        "Kill the manual, repetitive work that shouldn't need a person. Approvals, onboarding, reporting, cross-tool handoffs — automated end-to-end with the guardrails your operations need.",
      keywords: ["Onboarding", "Approvals", "Reporting", "Integrations"],
      href: "/workflow-automation/",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "AI Agents",
      description:
        "Intelligent assistants trained on your business — support, research, qualification, internal Q&A. Running 24/7, escalating to a human only when it should.",
      keywords: ["Support", "Sales", "Ops", "Research"],
      href: "/ai-agents/",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Custom Apps",
      description:
        "Internal tools and client portals built around how your business actually works. Not off-the-shelf software bent into shape; software designed for your workflow, integrations, and data.",
      keywords: ["Internal tools", "Portals", "AI-native", "Integrations"],
      href: "/custom-apps/",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Dashboards & Reporting",
      description:
        "Live business intelligence pulled from every system you run. Real-time metrics, automated reports, and dashboards your team actually opens.",
      keywords: ["Executive", "Operational", "Warehouse", "Alerts"],
      href: "/dashboards-reporting/",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "AI Solutions",
      description:
        "Multi-agent orchestration, LLM fine-tuning, retrieval, NLP, perception, classical ML, MLOps. Applied AI work where you need something more specialised than a chatbot.",
      keywords: ["Multi-agent", "Fine-tuning", "Retrieval", "MLOps"],
      href: "/ai-solutions/",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      number: "07",
      title: "AI Integrations",
      description:
        "Add AI capabilities to an existing product or workflow without rebuilding it. OpenAI, Claude, Gemini, or a custom model wired into the surfaces your users already know.",
      keywords: ["OpenAI", "Claude", "Gemini", "Custom models"],
      href: "/ai-integrations/",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      number: "08",
      title: "AI SaaS",
      description:
        "Full-stack AI SaaS products for ambitious founders and businesses. Auth, billing, admin, and observability shipped by default. Idea to first paying customer in eight weeks.",
      keywords: ["MVP", "Stripe billing", "Next.js", "Launch"],
      href: "/ai-saas/",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h10a4 4 0 00.8-7.92A6 6 0 006.34 9.5 4 4 0 003 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v6m0-6l-2 2m2-2l2 2" />
        </svg>
      ),
    },
    {
      number: "09",
      title: "AI SEO",
      description:
        "Rank in AI search, not just Google. Structured data, machine-readable content, and citation seeding so Google AI Overview, ChatGPT, Perplexity, and Claude cite you when your customers ask.",
      keywords: ["AI Overview", "Perplexity", "Schema", "llms.txt"],
      href: "/ai-seo/",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.5 11.2l1.6 1.7 3.4-3.6" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="systems"
      className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-7">
            Our Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 sm:mb-6 tracking-[-0.02em] px-4 max-w-4xl mx-auto leading-[1.1] text-balance">
            One flagship,{" "}
            <span className="gradient-text-modern">eight supporting solutions.</span> Every one guaranteed.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-[1.6] px-4">
            Pick the one that hurts most, or let us map your business on the discovery call and recommend the order.
          </p>
        </div>

        {/* Featured: AI GTM System */}
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
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.keywords.map((k, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] sm:text-xs font-medium text-white/90 backdrop-blur-sm">
                    {k}
                  </span>
                ))}
              </div>
              <Link href={featured.href} className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all">
                <span className="border-b border-white/40">Explore the AI GTM System</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="hidden lg:flex items-center justify-center w-32 h-32 rounded-2xl bg-white/10 border border-white/20 text-white">
              {featured.icon}
            </div>
          </div>
        </article>

        {/* Eight supporting solutions as a grid (3 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {rest.map((sys) => (
            <Link
              key={sys.number}
              href={sys.href}
              className="group relative bg-white rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 p-7 sm:p-8 overflow-hidden flex flex-col h-full shadow-sm hover:shadow-[0_25px_60px_-15px_rgba(59,130,246,0.25)]"
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
                  <span key={i} className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-700 text-[11px] font-medium border border-gray-100">
                    {k}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-12 lg:mt-14">
          <a
            href="#contact"
            className="btn-primary group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-white rounded-xl font-semibold text-[15px] sm:text-base"
          >
            <span className="relative z-10">Tell us which solution you need</span>
            <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
