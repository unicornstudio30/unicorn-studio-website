"use client";

import Image from "next/image";
import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const beliefs = [
  {
    title: "Specialists beat generalists.",
    description:
      "Most agencies do too many things badly. We do four things well. The four we do are enough to transform almost any business.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Honest scope is a sales tool.",
    description:
      "Every other agency promises everything. We tell you exactly what we don't do (strategy, sales scripts, business outcomes). It's the most credible thing on our website.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "You should own what we build.",
    description:
      "No proprietary lock-in. No black boxes. Every workflow, prompt, and integration we build is yours forever, even if you fire us.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Custom beats template, every time.",
    description:
      "We don't sell SaaS. We don't resell tools. We build systems specific to your business. That's slower and harder. It's also why they actually work.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "The AI gap is real, and it's widening.",
    description:
      "Businesses installing AI infrastructure now will own their markets. The rest will be sold to them. We'd rather build for the first kind.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    span: true,
  },
];

const culture = [
  {
    title: "We take fewer clients on purpose.",
    description:
      "Every system is custom-built. We cap onboarding so quality never slips. If we're full, we'll tell you and put you on the waitlist. We won't take your money and short-staff your build.",
  },
  {
    title: "We don't pitch.",
    description:
      "The discovery call is genuinely a discovery call. If we're not the right fit, we'll tell you that on the call and recommend someone who is.",
  },
  {
    title: "We don't disappear after launch.",
    description:
      "The team that built your system is the team that maintains it. No outsourced support. No \"your account manager has changed\" emails.",
  },
  {
    title: "We're not the cheapest.",
    description:
      "We're not trying to be. Custom builds, ongoing maintenance, real specialists, real guarantees: that costs more than templates and offshore subcontractors. We think the math still works.",
  },
];

const fitYes = [
  "You're already running a real business with real revenue",
  "You have repeated, manual processes draining your team's time",
  "You have a clear idea of what your business does, even if you don't know how AI fits in",
  "You're willing to invest in custom infrastructure rather than chase the cheapest tool",
];

const fitNo = [
  "You're pre-revenue and looking for AI to make up for an unclear business",
  "You want strategy, copywriting, or marketing knowledge bundled in",
  "You expect business outcome guarantees (we guarantee infrastructure, not outcomes)",
  "You're shopping primarily on price",
];

const stats = [
  { value: "04", label: "Systems we specialize in" },
  { value: "100%", label: "Custom-built per business" },
  { value: "10+", label: "Products shipped" },
  { value: "<2h", label: "Average response time" },
];

export default function AboutPage() {
  return (
    <>
      <TopNavigation />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white" />
          <div className="pointer-events-none absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl" />

          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200/70 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              About Unicorn Studio
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-gray-900 leading-[1.05] tracking-[-0.02em] mb-6 sm:mb-8 max-w-4xl mx-auto text-balance">
              We build systems for the businesses that{" "}
              <span className="gradient-text-modern">refuse to stay manual.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-[1.6] max-w-2xl mx-auto text-pretty">
              Unicorn Studio is an AI systems specialist studio. Small team. Specific focus. We build four kinds of AI systems and we don&apos;t pretend to do anything else.
            </p>
          </div>
        </section>

        {/* Stats strip */}
        <section className="px-4 sm:px-6 lg:px-8 -mt-2 sm:-mt-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-200/80 rounded-3xl border border-gray-200/80 bg-white shadow-[0_30px_60px_-30px_rgba(15,23,42,0.18)] overflow-hidden">
              {stats.map((s, i) => (
                <div key={i} className="px-5 sm:px-8 py-7 sm:py-8 text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] gradient-text-modern leading-none mb-2">
                    {s.value}
                  </div>
                  <div className="text-[12px] sm:text-sm text-gray-600 font-medium leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[minmax(0,360px)_1fr] gap-10 lg:gap-20 items-start">
              <div className="lg:sticky lg:top-28">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
                  Our Story
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] tracking-[-0.02em] text-balance">
                  How we <span className="gradient-text-modern">got here.</span>
                </h2>
              </div>
              <div className="space-y-5 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-[1.7] text-pretty">
                <p>
                  We didn&apos;t start as an AI company. We started as systems builders. The kind of work that, before AI, meant Zapier integrations, custom scripts, and a lot of duct tape between tools that refused to cooperate. The work was useful but slow. The ceiling was low.
                </p>
                <p>
                  Then AI arrived. Not the demo-day version. The version that could actually hold a conversation, follow instructions, and operate inside real business workflows. Suddenly the systems we&apos;d been building got dramatically more capable, and the businesses installing them got dramatically more leverage.
                </p>
                <p>
                  We watched a wave of agencies appear in 2024, branded around AI but missing the systems thinking that makes it actually work.
                </p>
                <blockquote className="relative pl-6 border-l-2 border-blue-500 my-2">
                  <p className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug tracking-[-0.01em]">
                    AI without good systems is a toy. AI on top of good systems is leverage.
                  </p>
                </blockquote>
                <p>
                  We chose to build the second kind, and to specialize narrowly enough to be excellent at it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[minmax(0,360px)_1fr] gap-10 lg:gap-20 items-start">
              {/* Photo */}
              <div className="relative mx-auto lg:mx-0 w-full max-w-[280px] lg:max-w-none">
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 shadow-[0_30px_80px_-25px_rgba(37,99,235,0.45)]">
                  <Image
                    src="/team/founder.jpg?v=2"
                    alt="Saidur Rahaman, Founder of Unicorn Studio"
                    width={720}
                    height={720}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                      Available for new projects
                    </span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 tracking-[-0.01em]">
                    Saidur Rahaman
                  </div>
                  <div className="text-sm text-gray-500">
                    Founder, Unicorn Studio
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
                  The founder
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] tracking-[-0.02em] text-balance mb-6 sm:mb-8">
                  Hi, I&apos;m Saidur. I started this studio after watching too many businesses{" "}
                  <span className="gradient-text-modern">stall at the same wall.</span>
                </h2>
                <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-[1.7] text-pretty">
                  <p>
                    I spent five-plus years in the web design and marketing industry. Long enough to watch the same pattern play out across business after business. They&apos;d grow up to a point. And then they&apos;d stall. Not because the demand wasn&apos;t there. Not because the founder wasn&apos;t working hard enough. They stalled because the business was held together by manual, messy, repetitive work, and the only way to grow was to do more of it.
                  </p>
                  <p>
                    Hiring fixed it for a quarter. Then the same bottleneck moved one seat over. New software promised to fix it; six months later, nothing structural had changed. The manual work just multiplied.
                  </p>
                  <p>
                    Most growing businesses hit the same wall: lead generation running on the wrong channels, sales follow-up depending on whoever&apos;s free that day, inbound leaking through the cracks after hours, reporting eating a full day every week, support piling up faster than it closes, and the owner running everything.
                  </p>
                  <p>
                    So I started Unicorn Studio to build AI systems that actually replace the work. Every business is different, so we don&apos;t sell off-the-shelf packages. We talk, find the choke point that&apos;s eating your time, your team, or your revenue, and build a custom AI system to fix it. Internal workflow, lead generation, communication, marketing, sales, or the deeper builds that turn AI into a product of its own.
                  </p>
                  <p>
                    Built for founders and operators ready to replace manual work with systems they own. You own the code. Results, or we work for free. If you&apos;re at that wall and want to talk, the discovery call is the right place to start. I take it personally for every new project.
                  </p>
                </div>

                {/* Personal links */}
                <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                  <a
                    href="mailto:saidur@unicornstudio.io"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="underline-offset-4 hover:underline">saidur@unicornstudio.io</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/saidur-builder/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="underline-offset-4 hover:underline">LinkedIn</span>
                  </a>
                  <a
                    href="https://x.com/saidur_builder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span className="underline-offset-4 hover:underline">@saidur_builder</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beliefs */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
                What We Believe
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] text-balance">
                Five things <span className="gradient-text-modern">we&apos;re certain about.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {beliefs.map((belief, index) => (
                <div
                  key={index}
                  className={`group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 hover:border-gray-900 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-xl ${
                    belief.span ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {belief.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-1.5">
                        Belief 0{index + 1}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-snug tracking-[-0.01em] text-balance">
                        {belief.title}
                      </h3>
                      <p className="text-[15px] sm:text-base text-gray-600 leading-[1.65] text-pretty">
                        {belief.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture / How we work */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
                How We Work
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] text-balance">
                A few things you should know{" "}
                <span className="gradient-text-modern">about working with us.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {culture.map((c, index) => (
                <div
                  key={index}
                  className="relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 hover:border-gray-900 transition-colors duration-300"
                >
                  <div className="flex items-baseline gap-4 mb-3">
                    <div className="text-3xl sm:text-4xl font-bold gradient-text-modern leading-none">
                      0{index + 1}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug tracking-[-0.01em] text-balance">
                      {c.title}
                    </h4>
                  </div>
                  <p className="text-[15px] sm:text-base text-gray-600 leading-[1.65] text-pretty pl-0">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fit */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
                Who We Work With
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] text-balance">
                We&apos;re a fit for some businesses.{" "}
                <span className="gradient-text-modern">Not all.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-bold uppercase tracking-[0.18em] mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Good fit
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 tracking-[-0.01em]">
                  You&apos;re a good fit if:
                </h4>
                <ul className="space-y-3.5">
                  {fitYes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 leading-[1.55]">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[15px] sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-[11px] font-bold uppercase tracking-[0.18em] mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  Not for everyone
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 tracking-[-0.01em]">
                  We&apos;re probably not a fit if:
                </h4>
                <ul className="space-y-3.5">
                  {fitNo.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 leading-[1.55]">
                      <svg className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M20 12H4" />
                      </svg>
                      <span className="text-[15px] sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Personal CTA — connekt-inspired */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
