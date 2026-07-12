"use client";

import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

const aiIntegrationsFaqs = [
  {
    question: "Can you work with our existing codebase?",
    answer:
      "Yes. We work in your repo, your stack, your conventions. We&apos;ll send a few PRs in the first week so you can see how we write code before committing to a full integration.",
  },
  {
    question: "Which AI providers do you integrate?",
    answer:
      "OpenAI, Anthropic, Google, plus open-source models via Together or Replicate. We pick based on quality, latency, and cost for your specific workflow, and keep the choice swappable.",
  },
  {
    question: "How do you handle PII and compliance?",
    answer:
      "We design for SOC 2, GDPR, and data residency from day one: prompt scrubbing, audit logs, region-locked deployments, and zero-retention provider configs where supported.",
  },
  {
    question: "What about runaway token costs?",
    answer:
      "We size context, cache aggressively, and route to smaller models on the hot paths. Every integration ships with a per-user cost dashboard so you see margins, not just usage.",
  },
  {
    question: "How long does a typical integration take?",
    answer:
      "A focused integration on one to three features ships in roughly 4 weeks. A comprehensive cross-product push runs around 8 weeks. Both fixed-scope, both quoted before we start.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Optional. Most clients run a light monthly engagement after launch for prompt tuning, model upgrades, and new feature rollouts. Or your team can take it from there.",
  },
];

import { useCalendly } from '@/components/CalendlyProvider';

export default function AIIntegrationsPage() {
  const { openModal } = useCalendly();
  return (
    <>
      <TopNavigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[1.05] tracking-[-0.02em]">
                Add AI to your product in
                <br />
                <span className="gradient-text-modern inline-block mt-2">weeks, not months.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-[1.65] max-w-2xl mx-auto">
                Your competitors are already shipping intelligent features. We&apos;ll integrate AI into yours faster than you can hire a team.
              </p>
            </div>
          </div>
        </section>

        {/* The Smart Way to Add AI */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                The Smart Way to Add AI
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-rose-600 mb-3">What doesn&apos;t work</div>
                <ul className="space-y-3.5">
                  {[
                    "Bolting on generic chatbots that frustrate users.",
                    "Adding AI features that don&apos;t align with core workflows.",
                    "Implementing AI because everyone else is.",
                    "Treating AI as a separate product, not native functionality.",
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
                <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-emerald-600 mb-3">What actually works</div>
                <ul className="space-y-3.5">
                  {[
                    "AI designed around your users&apos; existing behaviours.",
                    "Intelligence that enhances your core value prop.",
                    "Integration that feels like it was always there.",
                    "AI that solves the problems your users actually have.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[15px] text-gray-700 leading-[1.6]" dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Approaches */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Integration Approaches
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  title: "Enhance Core Features",
                  description: "Make your existing features smarter. Auto-suggestions, intelligent defaults, predictive actions - AI that users don't even notice."
                },
                {
                  title: "Add New Capabilities",
                  description: "Unlock features that weren't possible before. Natural language search, content generation, intelligent routing."
                },
                {
                  title: "Automate Workflows",
                  description: "Let AI handle the repetitive tasks. Data entry, categorization, quality checks - free your users for high-value work."
                },
                {
                  title: "Personalize Experience",
                  description: "Every user gets their perfect product. Adaptive interfaces, custom recommendations, personalized insights."
                }
              ].map((approach, index) => (
                <div key={index} className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top - moves left to right */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{approach.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{approach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built for Your Stack */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Built for Your Stack
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  title: "Frontend Integration",
                  items: [
                    "React/Next.js components",
                    "Real-time AI responses",
                    "Optimistic UI updates",
                    "Progressive enhancement"
                  ]
                },
                {
                  title: "Backend Architecture",
                  items: [
                    "API gateway design",
                    "Queue management",
                    "Caching strategies",
                    "Cost optimization"
                  ]
                },
                {
                  title: "Model Integration",
                  items: [
                    "OpenAI/Claude/Gemini",
                    "Custom model hosting",
                    "Prompt management",
                    "Version control"
                  ]
                },
                {
                  title: "Data Pipeline",
                  items: [
                    "ETL for training data",
                    "Vector databases",
                    "Real-time processing",
                    "Privacy compliance"
                  ]
                }
              ].map((stack, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top - moves left to right */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{stack.title}</h3>
                    <ul className="space-y-3">
                      {stack.items.map((item, iIndex) => (
                        <li key={iIndex} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Integration Process */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Integration Process
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  phase: "Week 1",
                  title: "AI Audit",
                  description: "We analyze your product, identify high-impact opportunities, and design an integration roadmap that aligns with your product goals."
                },
                {
                  phase: "Week 2-3",
                  title: "Design & Prototype",
                  description: "Create AI experiences that feel native. Mockups, user flows, and interactive prototypes to validate before building."
                },
                {
                  phase: "Week 4-6",
                  title: "Build & Test",
                  description: "Develop robust AI infrastructure. From API integration to error handling, we build for reliability at scale."
                },
                {
                  phase: "Week 7-8",
                  title: "Launch & Monitor",
                  description: "Deploy with confidence. A/B testing, performance monitoring, and gradual rollout strategies."
                }
              ].map((step, index) => (
                <div key={index} className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200">
                  <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {step.phase}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement shapes (no pricing) */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                Engagement shapes
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Two ways most teams <span className="gradient-text-modern">work with us.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                A focused integration on a specific feature, or a broader push across the product. Both fixed-scope, both quoted in writing before we start.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Focused integration",
                  description: "Add one to three AI features to your existing product, end to end.",
                  features: [
                    "Feature design and UX",
                    "API integration with your stack",
                    "Eval coverage on the prompts that matter",
                    "Production rollout and 30-day stabilisation",
                    "Roughly 4-week build window",
                  ],
                  highlighted: false,
                },
                {
                  name: "Comprehensive integration",
                  description: "Five to ten AI touchpoints across the product, with shared infrastructure.",
                  features: [
                    "Full product audit and integration plan",
                    "Shared retrieval, eval, and observability layer",
                    "Custom fine-tunes or routing where it earns its keep",
                    "Performance dashboard and cost guardrails",
                    "Roughly 8-week build window",
                  ],
                  highlighted: true,
                },
              ].map((tier, index) => (
                <div
                  key={index}
                  className={`group relative bg-white p-9 sm:p-10 rounded-2xl border-2 transition-all duration-300 flex flex-col ${
                    tier.highlighted
                      ? "border-blue-500 shadow-2xl scale-[1.02] overflow-visible"
                      : "border-gray-200 hover:border-gray-900 overflow-hidden"
                  }`}
                >
                  {!tier.highlighted && (
                    <>
                      <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    </>
                  )}

                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-bold z-20">
                      Most picked
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-[-0.01em]">{tier.name}</h3>
                    <p className="text-[15px] sm:text-base text-gray-600 mb-7 leading-[1.65]">{tier.description}</p>
                    <ul className="space-y-3.5 mb-8 flex-1">
                      {tier.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-[15px] leading-[1.6]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={openModal}
                      className={`block w-full text-center py-3.5 px-8 rounded-xl font-bold text-base transition-all duration-300 ${
                        tier.highlighted
                          ? "btn-primary text-white"
                          : "bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-900"
                      }`}
                    >
                      Let&apos;s Build
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing note */}
            <div className="max-w-3xl mx-auto mt-12 sm:mt-14 rounded-2xl border border-gray-200 bg-gray-50/60 p-6 sm:p-7 text-center">
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-blue-600 mb-2">Pricing</div>
              <p className="text-base sm:text-lg text-gray-700 leading-[1.7]">
                Every integration is custom and the price reflects what you&apos;re bringing in (existing stack, scale, compliance) and what you&apos;re launching. We quote in writing on the discovery call, before any work begins.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  before: "Manual data entry taking hours per client",
                  after: "AI extraction with 98% accuracy in seconds",
                  result: "Legal tech SaaS - 300% productivity increase"
                },
                {
                  before: "Generic search returning irrelevant results",
                  after: "Semantic search understanding user intent",
                  result: "Ecommerce platform - 45% increase in conversions"
                },
                {
                  before: "Support team overwhelmed with repetitive questions",
                  after: "AI handling 70% of queries automatically",
                  result: "B2B SaaS - $500K annual savings"
                }
              ].map((story, index) => (
                <div key={index} className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top - moves left to right */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="text-xs font-bold text-red-600 mb-2">BEFORE</div>
                      <p className="text-gray-700 text-sm leading-relaxed">{story.before}</p>
                    </div>
                    <div className="mb-6">
                      <div className="text-xs font-bold text-green-600 mb-2">AFTER</div>
                      <p className="text-gray-700 text-sm leading-relaxed">{story.after}</p>
                    </div>
                    <div className="pt-4 border-t-2 border-gray-100">
                      <p className="text-blue-900 font-bold text-sm">{story.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* FAQ */}
        <FAQ
          faqs={aiIntegrationsFaqs}
          eyebrow="AI Integrations FAQ"
          headingLead="Common questions"
          headingHighlight="about AI integrations."
          lead="The ones product teams ask before signing off on AI work. Don&rsquo;t see yours?"
        />

        {/* CTA Section */}
        <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Ship AI Features?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Your competitors are already building. Let's help you leap ahead.
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
