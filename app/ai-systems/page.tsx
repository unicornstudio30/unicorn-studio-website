"use client";

import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import FAQ, { aiSystemsFaqs } from "@/components/FAQ";
import Link from "next/link";
import { useCalendly } from "@/components/CalendlyProvider";

export default function AISystemsPage() {
  const { openModal } = useCalendly();

  const systems = [
    {
      number: "01",
      tag: "Our Specialty",
      isMain: true,
      title: "AI Business Process Automation",
      description:
        "Onboarding, approvals, reporting, internal agents, tool integrations. Anything manual and repetitive in your operations. The work that shouldn't need a person, finally doesn't.",
      examples: [
        "Client onboarding workflows",
        "Internal approval routing",
        "Automated reporting dashboards",
        "Custom internal AI agents",
        "Cross-tool integration layers",
      ],
    },
    {
      number: "02",
      tag: "Common build",
      title: "AI Marketing Systems",
      description:
        "Social media automation across LinkedIn, Facebook, Instagram, X and Reddit. Plus email marketing engines that segment, send, and follow up on autopilot.",
      examples: [
        "Multi-platform content engines",
        "Audience segmentation",
        "Behavior-based email flows",
        "Posting & scheduling automation",
        "Campaign performance tracking",
      ],
    },
    {
      number: "03",
      tag: "Common build",
      title: "AI Sales Systems",
      description:
        "Lead qualification, follow-up automation, pipeline routing, sales-handoff flows. Stop letting warm leads go cold.",
      examples: [
        "Lead scoring & qualification",
        "Automated follow-up sequences",
        "Pipeline routing logic",
        "Sales-handoff workflows",
        "CRM enrichment & insights",
      ],
    },
    {
      number: "04",
      tag: "Common build",
      title: "AI Communication Automation",
      description:
        "WhatsApp, Discord, and Slack workflows. Conversational AI that responds, qualifies, routes, and escalates across every messaging channel your business runs on.",
      examples: [
        "WhatsApp Business workflows",
        "Discord & Slack bots",
        "Multi-channel inbox unification",
        "Conversational qualification",
        "Smart escalation routing",
      ],
    },
  ];

  const plan = [
    {
      step: "Step 1",
      title: "Tell us",
      description:
        "Free 30-minute discovery call. You walk us through your business. We listen, we ask, we don't pitch.",
    },
    {
      step: "Step 2",
      title: "We map it",
      description:
        "You get a written breakdown of every task in your business AI can take over, with realistic timelines and scope. Yours to keep, even if you don't hire us.",
    },
    {
      step: "Step 3",
      title: "We build it",
      description:
        "Custom AI system, scoped to your business. We install, integrate, and stay on it until it's running. Then we maintain it.",
    },
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
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                AI Systems · Custom-built per business
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[1.05] tracking-[-0.02em] text-balance max-w-4xl mx-auto">
                Custom AI systems{" "}
                <span className="gradient-text-modern">that run your business in the background.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-[1.65] max-w-2xl mx-auto mb-8 sm:mb-10 text-pretty">
                Four kinds we build well: process automation, marketing, sales, and communication. Tell us what your business does, we&apos;ll tell you which you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <button
                  onClick={openModal}
                  className="btn-primary group w-full sm:w-auto px-8 py-4 text-white rounded-xl font-semibold text-base text-center flex items-center justify-center gap-2"
                >
                  Book a discovery call
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <a
                  href="#systems"
                  className="btn-secondary w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-base border-2 border-gray-300 text-center"
                >
                  See the four systems
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-rose-600 mb-3">What we don&apos;t do</div>
                <ul className="space-y-3.5">
                  {[
                    "Pick from a menu. No pre-packaged templates.",
                    "Strategy, copywriting, or business-outcome guarantees.",
                    "Resell SaaS tools dressed up as AI.",
                    "Black-box integrations you can&apos;t own or audit.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      <span className="text-[15px] text-gray-700 leading-[1.6]" dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-emerald-600 mb-3">What we actually build</div>
                <ul className="space-y-3.5">
                  {[
                    "Custom AI infrastructure scoped to your business.",
                    "Workflows, prompts, and assets you fully own.",
                    "Integrations into the tools your team already uses.",
                    "Maintenance by the same team that built it.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[15px] text-gray-700 leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Four Systems */}
        <section id="systems" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                The Four Systems
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Built around your business, not a template.
              </p>
            </div>

            <div className="space-y-6">
              {systems.map((sys, index) => (
                <div
                  key={index}
                  className={`group relative grid grid-cols-1 lg:grid-cols-[80px_1.4fr_1fr] gap-6 lg:gap-10 items-start p-6 sm:p-8 lg:p-10 rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    sys.isMain
                      ? "bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 border-blue-500 text-white shadow-2xl shadow-blue-500/20"
                      : "bg-white border-gray-200 hover:border-gray-900"
                  }`}
                >
                  {!sys.isMain && (
                    <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />
                  )}
                  <div className={`text-5xl lg:text-6xl font-bold leading-none ${
                    sys.isMain ? "text-white/40" : "text-blue-600/30"
                  }`}>
                    {sys.number}.
                  </div>

                  <div className="relative z-10">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
                      sys.isMain
                        ? "bg-white/15 text-white backdrop-blur-sm"
                        : "bg-gray-100 text-gray-500"
                    }`}>
                      {sys.tag}
                    </span>
                    <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight ${
                      sys.isMain ? "text-white" : "text-gray-900"
                    }`}>
                      {sys.title}
                    </h3>
                    <p className={`text-sm sm:text-base leading-relaxed mb-5 ${
                      sys.isMain ? "text-blue-50" : "text-gray-600"
                    }`}>
                      {sys.description}
                    </p>
                  </div>

                  <div className={`relative z-10 rounded-xl p-5 sm:p-6 ${
                    sys.isMain
                      ? "bg-white/10 border border-white/20"
                      : "bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100"
                  }`}>
                    <div className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-3 ${
                      sys.isMain ? "text-blue-100" : "text-blue-700"
                    }`}>
                      What it can include
                    </div>
                    <ul className="space-y-2">
                      {sys.examples.map((ex, i) => (
                        <li key={i} className={`flex items-start gap-2 text-sm ${
                          sys.isMain ? "text-white" : "text-gray-700"
                        }`}>
                          <svg
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              sys.isMain ? "text-blue-200" : "text-blue-600"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plan */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Three Steps. <span className="gradient-text-modern">No Surprises.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {plan.map((p, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200"
                >
                  <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {p.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">{p.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                The Reverse-Risk Guarantee
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Built and Running, <span className="gradient-text-modern">Or We Work Free.</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                We agree on scope and timeline upfront, in writing, before any build begins.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
              {[
                <>We refund <strong>100% of your setup fee</strong>. No negotiation.</>,
                <>We keep working with you <strong>at no cost</strong> until it&apos;s running as scoped.</>,
                <>You keep <strong>every workflow, prompt, and asset</strong> we built. Yours forever.</>,
              ].map((content, index) => (
                <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="text-2xl font-bold text-blue-600/30">0{index + 1}</span>
                  </div>
                  <p className="text-base text-gray-800 leading-relaxed">{content}</p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto p-5 rounded-xl bg-white border border-gray-200">
              <p className="text-sm text-gray-600 italic leading-relaxed text-center">
                We guarantee the system is built, integrated, and operational as scoped. We don&apos;t guarantee business outcomes. Those depend on your strategy, offer, and inputs. We guarantee the infrastructure works. The rest is up to you.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing note */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                There&apos;s no price list. <span className="gradient-text-modern">And there won&apos;t be one.</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Every business is different. A focused workflow build is not the same as a full four-system installation. Once we know what we&apos;re building, we give you an honest, fixed price.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { title: "The discovery call is free.", desc: "You walk us through your business. We listen." },
                { title: "The process map is free.", desc: "You leave with a written scope of every task AI can take over, whether you hire us or not." },
                { title: "The quote comes after the map.", desc: "Once we know what we're building, we give you an honest, fixed price." },
                { title: "No quote, no commitment.", desc: "You can take the map and shop it elsewhere." },
              ].map((rule, i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-2 sm:gap-8 py-4 border-b border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900">{rule.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{rule.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-lg sm:text-xl text-gray-700 leading-relaxed italic max-w-2xl">
              What we will tell you upfront: a custom AI system from us costs less than the salaries of the people it replaces. And it works at 3am, on weekends, and through your team&apos;s vacations.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          faqs={aiSystemsFaqs}
          eyebrow="AI Systems FAQ"
          headingLead="Common questions"
          headingHighlight="about AI systems."
          lead="The ones founders ask us before booking a discovery call. Don&rsquo;t see yours?"
        />

        {/* CTA */}
        <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Stop watching. Start building.
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-[1.6]">
              A free 30-minute call. No pitch. You walk us through your business and we tell you honestly which of our four systems you actually need.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button
                onClick={openModal}
                className="btn-primary-light w-full sm:w-auto px-8 py-4 text-blue-700 rounded-xl font-semibold text-base sm:text-lg text-center"
              >
                Book a discovery call
              </button>
              <Link
                href="/about"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-white/20 transition-colors text-center"
              >
                Learn about us
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
