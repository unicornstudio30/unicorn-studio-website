"use client";

import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

import FlipCard from '@/components/FlipCard';
import { useCalendly } from '@/components/CalendlyProvider';

const brandingFaqs = [
  {
    question: "What's the typical timeline?",
    answer:
      "Roughly 2 weeks for a Brand Starter, 4 weeks for a Full Brand System. We commit to a fixed turnaround upfront and run weekly check-ins to keep you aligned.",
  },
  {
    question: "How many concept rounds do we get?",
    answer:
      "Two structured revision rounds per tier. We deliver each round with a written rationale so feedback is concrete, not subjective.",
  },
  {
    question: "What's included in the full brand system?",
    answer:
      "Logomark and wordmark, colour palette, typography, brand voice and messaging guide, motion notes, and digital templates for deck, doc, and social. All source files included.",
  },
  {
    question: "Will we own the source files?",
    answer:
      "Yes. Every working file is handed over: Figma, exports in every format you&apos;ll need, motion source where applicable. No platform lock-in, no licensing strings.",
  },
  {
    question: "Do you handle the website too?",
    answer:
      "Yes. Branding pairs naturally with our website service, so brand and site stay consistent and the handoff between them disappears entirely.",
  },
  {
    question: "Can you work with our existing brand?",
    answer:
      "Yes. We can extend, refresh, or rebuild around what you already have. We&apos;ll tell you on the discovery call which is the right call for where you are.",
  },
];

export default function BrandingPage() {
  const { openModal } = useCalendly();
  return (
    <>
      <TopNavigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
          <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-blue-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-indigo-300/20 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Branding for AI SaaS products
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[1.05] tracking-[-0.02em]">
                A brand that takes your AI product
                <br />
                <span className="gradient-text-modern inline-block mt-2">as seriously as the tech.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-[1.65] max-w-2xl mx-auto">
                Logo, visual system, messaging, and tone. Built to earn trust with the buyers who matter.
              </p>
            </div>
          </div>
        </section>

        {/* Why Brand Identity Matters */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Brand Identity Matters
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  title: "First Impressions",
                  description: "You have 50 milliseconds to make an impression. Make it count with professional, cohesive branding."
                },
                {
                  title: "Trust & Credibility",
                  description: "Professional branding increases perceived value by 20%. Customers trust brands that look established."
                },
                {
                  title: "Market Differentiation",
                  description: "Stand out in saturated markets. Own a unique position in your customers' minds."
                },
                {
                  title: "Premium Pricing",
                  description: "Strong brands command 23% higher prices. Stop competing on cost alone."
                }
              ].map((item, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands We Create */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Brands We Create
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "AI SaaS Startups",
                  description: "Modern, scalable identities for early-stage AI products. Built to attract investors, design partners, and the first 1,000 users."
                },
                {
                  title: "B2B AI Platforms",
                  description: "Professional brands that convey trust, reliability, and enterprise-grade safety. Designed for procurement teams and security reviews."
                },
                {
                  title: "AI Agents & Copilots",
                  description: "Personality-forward identities for products that feel like teammates. Tone, voice, and visual cues that make AI feel human."
                },
                {
                  title: "AI Developer Tools",
                  description: "Technical but not intimidating. Brands that engineers respect, share, and add to their stack."
                },
                {
                  title: "Vertical AI Products",
                  description: "Industry-specific AI brands (legal, health, fintech) that earn instant credibility with the buyers who matter."
                }
              ].map((category, index) => (
                <div key={index} className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Branding Process */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Branding Process
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  phase: "Step 1",
                  title: "Discovery & Research",
                  description: "We dive deep into your business, values, and audience. Competitive analysis, user research, and strategic positioning."
                },
                {
                  phase: "Step 2",
                  title: "Concept Development",
                  description: "Three distinct creative directions. Each with its own personality, visual language, and strategic rationale."
                },
                {
                  phase: "Step 3",
                  title: "Refinement",
                  description: "Your chosen direction refined through collaborative iteration. Every detail perfected."
                },
                {
                  phase: "Step 4",
                  title: "System Creation",
                  description: "Complete brand guidelines and assets. Everything needed for consistent application across all touchpoints."
                }
              ].map((step, index) => (
                <FlipCard key={index} phase={step.phase} title={step.title} description={step.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Brand Deliverables */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Brand Deliverables
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  title: "Core Identity",
                  items: [
                    "Logo design (primary + variations)",
                    "Color palette (primary, secondary, accents)",
                    "Typography system (headlines, body, UI)",
                    "Visual style (photography, illustration, icons)"
                  ]
                },
                {
                  title: "Brand Voice",
                  items: [
                    "Personality attributes",
                    "Tone of voice guide",
                    "Messaging framework",
                    "Tagline development"
                  ]
                },
                {
                  title: "Brand Guidelines",
                  items: [
                    "20-30 page brand manual",
                    "Logo usage rules",
                    "Color specifications",
                    "Typography hierarchy",
                    "Application examples"
                  ]
                },
                {
                  title: "Digital Assets",
                  items: [
                    "Social media templates",
                    "Email signatures",
                    "Presentation template",
                    "Favicon & app icons"
                  ]
                }
              ].map((feature, index) => (
                <div key={index} className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                    <ul className="space-y-3">
                      {feature.items.map((item, iIndex) => (
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

        {/* Engagement shapes */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                Engagement shapes
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Two ways most founders <span className="gradient-text-modern">work with us.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                A focused identity for an early-stage launch, or a full brand system for a product about to scale. Both fixed-scope, both quoted in writing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Brand starter",
                  description: "The essentials, dialled in. Enough to launch, raise, and keep things consistent.",
                  features: [
                    "Logomark and wordmark",
                    "Colour palette and typography",
                    "Basic usage guidelines",
                    "Source files handed over",
                    "Roughly 2-week build window",
                  ],
                  highlighted: false,
                },
                {
                  name: "Full brand system",
                  description: "Complete brand identity for AI SaaS products that need to look the part end to end.",
                  features: [
                    "Everything in Brand starter",
                    "Brand voice and messaging guide",
                    "Extended visual guidelines and motion notes",
                    "Digital templates (deck, doc, social)",
                    "Roughly 4-week build window",
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
                Every brand build is custom. Pricing depends on the depth of the system, the asset count, and how much research and messaging is in scope. We quote in writing on the discovery call, before any work begins.
              </p>
            </div>
          </div>
        </section>

        {/* Recent Brand Launches */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Recent Brand Launches
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: "NeuralNet - AI Analytics Platform",
                  description: "Modern, trustworthy identity that balances innovation with enterprise credibility"
                },
                {
                  name: "SwiftPay - Fintech Mobile App",
                  description: "Bold, simple brand that stands out in the crowded finance category"
                },
                {
                  name: "DevTools - Developer Platform",
                  description: "Technical but approachable identity that resonates with engineers"
                }
              ].map((project, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{project.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Our Brands Different */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Makes Our Brands Different
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  title: "Strategic Foundation",
                  description: "Every creative decision tied to business objectives. Beautiful brands that also drive results."
                },
                {
                  title: "Systematic Thinking",
                  description: "Flexible design systems that scale with your business. Consistent across infinite applications."
                },
                {
                  title: "Digital-First Design",
                  description: "Optimized for screens first, print second. Perfect for modern digital products."
                },
                {
                  title: "Implementation Focus",
                  description: "We don't just deliver logos. Complete systems with templates and guidelines for real-world use."
                }
              ].map((reason, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Success Metrics */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Brand Success Metrics
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Average results from Unicorn Studio brand launches
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  metric: "40%",
                  description: "increase in perceived value"
                },
                {
                  metric: "3x",
                  description: "more investor interest"
                },
                {
                  metric: "55%",
                  description: "better talent attraction"
                },
                {
                  metric: "2x",
                  description: "higher conversion rates"
                }
              ].map((item, index) => (
                <div key={index} className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden text-center">
                  {/* Animated blue border at top */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-4xl font-bold text-blue-600 mb-3">{item.metric}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                FAQs
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How many logo concepts do we get?",
                  answer: "Three distinct directions, each fully developed with color and type recommendations."
                },
                {
                  question: "What if we need changes after delivery?",
                  answer: "We include two rounds of refinement. Additional changes available at hourly rate."
                },
                {
                  question: "Can you refresh our existing brand?",
                  answer: "Yes, we can evolve your current identity or create something entirely new."
                },
                {
                  question: "Do you handle naming?",
                  answer: "Yes, naming services available as an add-on to any branding package."
                },
                {
                  question: "What about trademark?",
                  answer: "We provide trademark-ready files but recommend working with legal counsel for registration."
                }
              ].map((faq, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* FAQ */}
        <FAQ
          faqs={brandingFaqs}
          eyebrow="Branding FAQ"
          headingLead="Common questions"
          headingHighlight="about branding."
          lead="The ones founders ask before scoping a brand build. Don&rsquo;t see yours?"
        />

        {/* CTA Section */}
        <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Brand?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Let&apos;s create an identity that captures your vision and captivates your market.
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
