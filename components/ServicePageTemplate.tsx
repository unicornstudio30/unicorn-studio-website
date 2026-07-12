"use client";

import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import FAQ, { FAQItem } from "@/components/FAQ";
import { useCalendly } from "@/components/CalendlyProvider";

export interface ServiceModule {
  number: string;
  tag: string;
  title: string;
  description: string;
  outputs: string[];
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServicePageContent {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  subhead: string;
  outcomes: { number: string; label: string }[];
  modulesEyebrow: string;
  modulesHeadline: string;
  modulesLead: string;
  modules: ServiceModule[];
  processEyebrow: string;
  processHeadline: string;
  processHeadlineAccent: string;
  processLead: string;
  process: ServiceProcessStep[];
  guarantee: {
    headline: string;
    headlineAccent: string;
    body: string;
    footnote: string;
  };
  faqs: FAQItem[];
  faqEyebrow: string;
  faqHeadingHighlight: string;
  ctaHeadline: string;
  ctaSubhead: string;
}

/**
 * Server-rendered shell for every "one of the five systems" page.
 * Takes content as a plain object so each service page stays a
 * ~200-line data file rather than 500 lines of duplicated JSX.
 */
export default function ServicePageTemplate({ content }: { content: ServicePageContent }) {
  const { openModal } = useCalendly();

  return (
    <>
      <TopNavigation />
      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-gradient-to-b from-blue-200/30 via-cyan-100/20 to-transparent rounded-[50%] blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              {content.eyebrow}
            </div>
            <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl font-bold text-gray-900 leading-[1.05] tracking-[-0.02em] mb-6 sm:mb-7 text-balance">
              {content.headline}{" "}
              <span className="gradient-text-modern">{content.headlineAccent}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-[1.6] mb-8 sm:mb-10 text-pretty">
              {content.subhead}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-14 px-4">
              <button
                type="button"
                onClick={openModal}
                className="btn-primary w-full sm:w-auto px-8 py-4 text-white rounded-xl font-semibold text-base"
              >
                Book a free AI consultation
              </button>
              <a
                href="#how-it-works"
                className="btn-secondary w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-base border border-gray-300"
              >
                See how it works
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {content.outcomes.map((o) => (
                <div key={o.label} className="text-left sm:text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text-modern tracking-[-0.01em] mb-1">
                    {o.number}
                  </div>
                  <div className="text-xs sm:text-[13px] text-gray-500 leading-snug">
                    {o.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MODULES */}
        <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                {content.modulesEyebrow}
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-5 text-balance">
                {content.modulesHeadline}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                {content.modulesLead}
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {content.modules.map((m) => (
                <article
                  key={m.number}
                  className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-8 items-start p-6 sm:p-8 lg:p-9 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.25)] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl lg:text-5xl font-black text-gray-200 leading-none tabular-nums">
                      {m.number}
                    </span>
                    <span className="inline-flex items-center h-6 mt-2 px-2.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-[0.14em]">
                      {m.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 tracking-[-0.01em]">
                      {m.title}
                    </h3>
                    <p className="text-[15px] sm:text-base text-gray-600 leading-[1.6]">
                      {m.description}
                    </p>
                  </div>
                  <ul className="lg:min-w-[260px] space-y-1.5 text-sm text-gray-600">
                    {m.outputs.map((o) => (
                      <li key={o} className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold mb-5">
                {content.processEyebrow}
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-5 text-balance">
                {content.processHeadline}{" "}
                <span className="gradient-text-modern">{content.processHeadlineAccent}</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                {content.processLead}
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-4 sm:left-6 top-4 bottom-4 w-px bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200" />
              <div className="space-y-8">
                {content.process.map((p, i) => (
                  <div key={p.step} className="relative pl-12 sm:pl-16">
                    <div className="absolute left-0 top-1 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-md">
                      <span className="text-xs sm:text-sm font-bold text-blue-600 tabular-nums">
                        {i + 1}
                      </span>
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600 mb-1.5">
                      {p.step}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 tracking-[-0.01em]">
                      {p.title}
                    </h3>
                    <p className="text-[15px] sm:text-base text-gray-600 leading-[1.6] max-w-2xl">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GUARANTEE */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-semibold mb-6">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              The guarantee
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-5 text-balance">
              {content.guarantee.headline}{" "}
              <span className="gradient-text-modern">{content.guarantee.headlineAccent}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.65] mb-8 sm:mb-10 text-pretty">
              {content.guarantee.body}
            </p>
            <p className="text-sm text-gray-500">{content.guarantee.footnote}</p>
          </div>
        </section>

        <FAQ
          faqs={content.faqs}
          eyebrow={content.faqEyebrow}
          headingLead="Common questions"
          headingHighlight={content.faqHeadingHighlight}
          lead="The ones founders and operators ask before we sign. Don&rsquo;t see yours?"
        />

        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 tracking-[-0.02em] leading-[1.1] text-balance">
              {content.ctaHeadline}
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-10 leading-[1.6]">
              {content.ctaSubhead}
            </p>
            <button
              type="button"
              onClick={openModal}
              className="btn-primary-light w-full sm:w-auto px-8 py-4 text-blue-700 rounded-xl font-semibold text-base sm:text-lg"
            >
              Book a free AI consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
