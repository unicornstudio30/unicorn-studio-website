"use client";

import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import { useCalendly } from "@/components/CalendlyProvider";

const aiSaasFaqs = [
  {
    question: "What's the typical timeline for an AI SaaS MVP?",
    answer:
      "4 to 8 weeks for an MVP, 10 to 14 weeks for a full multi-tenant build. Both are fixed-scope and fixed-timeline. Discovery, design, and architecture happen in the first two weeks before any production code is written.",
  },
  {
    question: "Will I own the code and infrastructure?",
    answer:
      "Yes. Code lives in your GitHub from day one. Production runs in your cloud account, on your domain, with your secrets. We hand over keys, never gate access, and don&apos;t insert proprietary middleware between you and your stack.",
  },
  {
    question: "What stack do you use?",
    answer:
      "Default: Next.js + TypeScript + Tailwind on the frontend, Node or Python on the backend with Postgres + Redis, OpenAI / Anthropic / Google for AI providers, Clerk or Supabase for auth, Stripe for billing, Vercel or AWS for hosting. We&apos;ll change parts that don&apos;t fit and explain the tradeoffs.",
  },
  {
    question: "How do you handle model swaps?",
    answer:
      "Every AI call sits behind a single interface in your codebase. Swapping GPT for Claude, or to a fine-tune, is a config change rather than a rewrite. You stay portable as the model landscape moves.",
  },
  {
    question: "What about token cost economics?",
    answer:
      "We model cost-per-user before architecture, with caching, context sizing, and routing built in to protect margins. You launch with a per-user cost dashboard so you can see margins at every tier.",
  },
  {
    question: "Do you stay on after launch?",
    answer:
      "30 days of stabilisation are included by default. After that, optional ongoing partnership for new features, model upgrades, and scale work. Or your team can take it from here with the documentation we hand over.",
  },
];

const stack = [
  {
    label: "Frontend",
    detail: "Next.js, React, TypeScript, Tailwind, shadcn/ui",
  },
  {
    label: "Backend",
    detail: "Node + TypeScript or Python, Postgres, Redis",
  },
  {
    label: "AI providers",
    detail: "OpenAI, Anthropic, Google, open-source via Together or Replicate",
  },
  {
    label: "Retrieval",
    detail: "pgvector, Pinecone, or Weaviate, depending on scale and ops budget",
  },
  {
    label: "Auth & billing",
    detail: "Clerk or Supabase Auth, Stripe for subscriptions and metering",
  },
  {
    label: "Hosting",
    detail: "Vercel or AWS, deployed in your cloud account from day one",
  },
];

const honest = [
  {
    title: "Token costs change everything.",
    body: "A working demo and a sustainable product are different things. We size context, cache aggressively, and pick smaller models for the hot paths so the unit economics survive a paying user base.",
  },
  {
    title: "Models change every six months.",
    body: "GPT-4 to Claude to a fine-tune to whatever ships next. We keep the model behind a single interface in your code, so swapping providers is a config change, not a rewrite.",
  },
  {
    title: "The demo wins. Retention is the product.",
    body: "Most AI products show up well in a 60-second demo and lose users by day three. We design onboarding around getting one real result inside the first session, before anyone tours the features.",
  },
  {
    title: "Procurement still asks the old questions.",
    body: "PII handling, data residency, audit logs, SSO, retention policies. We design with those questions in mind so the first enterprise security review doesn&apos;t become a six-week rewrite.",
  },
];

const engagement = [
  {
    week: "Week 1",
    title: "Discovery",
    body:
      "Two or three working sessions. We map the user, the job to be done, and the one workflow the product has to be excellent at. You leave with a written scope and an architecture sketch, even if you don&apos;t hire us.",
  },
  {
    week: "Week 2",
    title: "Design and architecture",
    body:
      "Wireframes, prototype of the core flow, model and provider choice, data model, and a cost-per-user estimate. This is where we kill the features that won&apos;t move the needle.",
  },
  {
    week: "Weeks 3 to 8",
    title: "Build",
    body:
      "Code lives in your GitHub from day one. We deploy to your hosting, your domain, your accounts. Friday demos, weekly Loom updates, and a shared Linear board. No monthly check-in surprises.",
  },
  {
    week: "Weeks 8 to 12",
    title: "Hardening and launch",
    body:
      "Cost guardrails, error budgets, eval coverage on the prompts that matter, auth flows pen-tested. We run the launch with you, watch the first wave of users, and stay close for the first 30 days.",
  },
];

const builds = [
  {
    title: "Vertical AI products",
    body:
      "Industry-specific tools where the moat is the data model and the prompts, not the base model. Legal review, clinical notes, real-estate lease abstraction, fintech reconciliation.",
  },
  {
    title: "B2B AI tools",
    body:
      "Multi-tenant SaaS with the AI doing the work the user used to do manually. Procurement-ready, SSO from day one, role-based access, and audit logs that survive enterprise security reviews.",
  },
  {
    title: "Agents and copilots",
    body:
      "Products that take actions, not just answer questions. Tools, memory, human-in-the-loop, and clear escape hatches for when the agent gets it wrong (because it will).",
  },
  {
    title: "AI-native dev tools",
    body:
      "APIs, SDKs, and developer-facing products where the integration story matters more than the marketing site. We ship docs, code samples, and SDKs alongside the product.",
  },
  {
    title: "Workflow products",
    body:
      "One AI-native interface replacing a multi-tab, multi-tool internal workflow. Drafting, summarisation, extraction, review, and the boring glue around them.",
  },
  {
    title: "AI marketplaces",
    body:
      "Two-sided platforms for prompts, agents, fine-tunes, or models. Trust, payments, search, and a content-quality bar that doesn&apos;t collapse under spam.",
  },
];

const wontDo = [
  "Take on a build with no validated user. We&apos;ll send you back to do customer interviews first.",
  "Ship a product with no evaluation coverage on the prompts that drive business outcomes.",
  "Wrap proprietary middleware around your code. You own the repo, the secrets, the cloud account, and the IP.",
  "Sell you a maintenance retainer you don&apos;t actually need. If the team can run it, they should.",
];

export default function AISaaSPage() {
  const { openModal } = useCalendly();
  return (
    <>
      <TopNavigation />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
          <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-blue-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-indigo-300/20 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                AI SaaS · Full product builds for founders
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[1.05] tracking-[-0.02em]">
                We build AI SaaS products
                <br />
                <span className="gradient-text-modern inline-block mt-2">from scratch.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-[1.65] max-w-2xl mx-auto">
                Strategy, design, engineering, and AI integration under one roof. Real software you own, in weeks.
              </p>
            </div>
          </div>
        </section>

        {/* What building AI SaaS actually requires */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                  The honest part
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-5">
                  Building AI SaaS is a different job to <span className="gradient-text-modern">building generic SaaS.</span>
                </h2>
                <p className="text-lg text-gray-600 leading-[1.65]">
                  The wins come from the same place they always did, but the failure modes are new. Four of them show up on almost every build we&apos;ve seen.
                </p>
              </div>

              <div className="grid gap-5">
                {honest.map((h, i) => (
                  <article
                    key={i}
                    className="bg-white rounded-2xl border border-gray-200 p-7 sm:p-8 transition-all hover:border-gray-300 hover:shadow-sm"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-blue-600 mb-3">
                      0{i + 1}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-[1.25] mb-3">
                      {h.title}
                    </h3>
                    <p
                      className="text-[15px] text-gray-600 leading-[1.7]"
                      dangerouslySetInnerHTML={{ __html: h.body }}
                    />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                The stack
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Real software, <span className="gradient-text-modern">not vibes.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                A working default stack we ship most projects on. We&apos;ll change the parts that don&apos;t fit, and explain the tradeoffs when we do.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {stack.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl border border-gray-200 p-7 hover:border-gray-300 transition-colors"
                >
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-blue-600 mb-2.5">
                    {s.label}
                  </div>
                  <p className="text-[15px] sm:text-base text-gray-800 leading-[1.55]">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement shape */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                How we work
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Same shape, <span className="gradient-text-modern">every build.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                Weekly demos, weekly progress updates, and your repo on day one. You always know where the build is, and what the next deliverable looks like.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* spine */}
              <div
                className="hidden md:block absolute left-1/2 -translate-x-px top-3 bottom-3 w-px bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200"
                aria-hidden="true"
              />
              <ol className="space-y-10 md:space-y-14">
                {engagement.map((step, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <li key={i} className="relative md:grid md:grid-cols-2 md:gap-12 items-start">
                      <span className="absolute left-0 md:left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-white border-2 border-blue-500 z-10 shadow-[0_0_0_4px_rgba(59,130,246,0.12)]" />
                      <div
                        className={`pl-7 md:pl-0 ${
                          isLeft ? "md:col-start-1 md:pr-10 md:text-right" : "md:col-start-2 md:pl-10 md:text-left"
                        }`}
                      >
                        <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-blue-600 mb-2">
                          {step.week}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-[1.2] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-[15px] text-gray-600 leading-[1.7]">{step.body}</p>
                      </div>
                      <div className={`hidden md:block ${isLeft ? "md:col-start-2" : "md:col-start-1"}`} />
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        {/* Common builds */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                Shapes we&apos;ve shipped
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Six shapes of AI SaaS we&apos;ve <span className="gradient-text-modern">built before.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                Not a comprehensive list, just the ones we keep ending up on. If your idea looks like one of these, we already have a head start.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {builds.map((b, i) => (
                <article
                  key={i}
                  className="group relative bg-white p-7 sm:p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]"
                >
                  <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-blue-500 to-indigo-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-[1.25] mb-3">{b.title}</h3>
                    <p className="text-[15px] text-gray-600 leading-[1.7]">{b.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What we won't do */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 sm:p-10 lg:p-14">
              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
                <div>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs sm:text-sm font-semibold mb-5">
                    What we won&apos;t do
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1]">
                    The bits most agencies <span className="gradient-text-modern">leave off the website.</span>
                  </h2>
                </div>
                <ul className="space-y-4">
                  {wontDo.map((w, i) => (
                    <li key={i} className="flex items-start gap-4 text-[15px] sm:text-base text-gray-700 leading-[1.65]">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: w }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing note */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-5 shadow-sm">
              Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-5">
              Every build is custom. <span className="gradient-text-modern">So is the quote.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-[1.7] max-w-2xl mx-auto mb-3">
              Pricing depends on what you&apos;re building, who it&apos;s for, what infrastructure you&apos;re bringing, and how fast it has to ship. We&apos;ll quote in writing before any work starts, with a fixed scope and a fixed timeline.
            </p>
            <p className="text-base text-gray-500 leading-[1.65] max-w-2xl mx-auto">
              The discovery call is free. The scope doc you walk away with is yours, even if you don&apos;t hire us.
            </p>
            <div className="mt-10">
              <button
                onClick={openModal}
                className="btn-primary inline-flex items-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 text-white rounded-xl font-semibold text-base"
              >
                <span>Book a discovery call</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          faqs={aiSaasFaqs}
          eyebrow="AI SaaS FAQ"
          headingLead="Common questions"
          headingHighlight="about building AI SaaS."
          lead="The ones founders ask before kicking off a build. Don&rsquo;t see yours?"
        />

        {/* CTA */}
        <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-[-0.02em] leading-[1.1]">
              Got an AI SaaS in mind?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-[1.6] max-w-2xl mx-auto">
              30 minutes, no pitch. Walk us through the idea and we&apos;ll tell you whether it&apos;s an MVP shape or a full build, what the stack should look like, and what we&apos;d ship in the first 4 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button
                onClick={openModal}
                className="btn-primary-light w-full sm:w-auto px-8 py-4 text-blue-700 rounded-xl font-semibold text-base sm:text-lg text-center"
              >
                Book a discovery call
              </button>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-white/20 transition-colors text-center"
              >
                See case studies
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
