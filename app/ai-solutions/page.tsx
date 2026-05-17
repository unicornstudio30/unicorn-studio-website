"use client";

import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

import { useCalendly } from "@/components/CalendlyProvider";

const aiSolutionsFaqs = [
  {
    question: "When does multi-agent orchestration beat a single agent?",
    answer:
      "When the work spans different skills (research vs writing vs verification), needs human handoffs at specific points, or has long-horizon steps where a single prompt would lose context. We start every engagement by checking if a single well-designed agent works first. If it does, we ship that.",
  },
  {
    question: "Why fine-tune instead of just prompting?",
    answer:
      "Fine-tuning earns its keep when prompts can&apos;t express the pattern reliably (your tone, your taxonomy, your edge cases), when latency or cost matters (a smaller fine-tuned model often beats a large prompted one), or when domain quality has a hard floor that off-the-shelf models can&apos;t hit. We benchmark before recommending it.",
  },
  {
    question: "Which models do you fine-tune on?",
    answer:
      "Open-source first (Llama 3, Mistral, Qwen, Gemma) when you want to own the weights and run inference yourself. OpenAI, Anthropic via Bedrock, or Google when you want hosted endpoints. We pick based on your data sensitivity, latency targets, and ops budget.",
  },
  {
    question: "How do you evaluate quality?",
    answer:
      "Eval harness from week one. We co-build a test set with you that captures your real edge cases, then run every model and prompt change against it. Quality is a number you can watch, not a feeling.",
  },
  {
    question: "Will I own the models, prompts, and orchestration code?",
    answer:
      "Fully. Source code, prompt graphs, orchestration logic, fine-tuned weights, and infrastructure config are all yours. We deploy to your cloud, your accounts, your provider keys, and hand over everything at launch.",
  },
];

type Shape = {
  number: string;
  category: string;
  name: string;
  summary: string;
  bullets: string[];
  badge?: string;
  primary?: boolean;
};

const shapes: Shape[] = [
  {
    number: "01",
    category: "Systems",
    name: "Multi-Agent Orchestration",
    summary:
      "Agent graphs with explicit roles, handoffs, and verification. Built for the work that&apos;s too long, too branched, or too consequential for a single prompt.",
    bullets: [
      "Planner / researcher / verifier graphs",
      "Human-in-the-loop checkpoints",
      "Per-agent traces, costs, failure modes",
    ],
    primary: true,
  },
  {
    number: "02",
    category: "Models",
    name: "Custom LLM Fine-Tuning",
    summary:
      "When prompts can&apos;t reliably express what you need. We fine-tune open-source or hosted models on your domain, your voice, and your edge cases, with the eval harness to prove it.",
    bullets: [
      "LoRA, full-tune, instruction-tune, DPO",
      "Llama · Mistral · Qwen · OpenAI · Bedrock",
      "Side-by-side eval vs. the baseline you&apos;d otherwise ship",
    ],
    primary: true,
    badge: "New · 2026",
  },
  {
    number: "03",
    category: "Retrieval",
    name: "RAG & Knowledge Systems",
    summary:
      "Retrieval pipelines that ground models in your proprietary data. Versioned, evaluated, and observable.",
    bullets: ["Hybrid retrieval + rerankers", "Source-attributed answers"],
  },
  {
    number: "04",
    category: "NLP",
    name: "Language Intelligence",
    summary:
      "Extraction, classification, summarisation, and domain reasoning where accuracy has a hard floor.",
    bullets: ["Taxonomy & schema design", "Eval-first development"],
  },
  {
    number: "05",
    category: "Perception",
    name: "Computer Vision",
    summary:
      "Recognition, inspection, and document understanding. Translating pixels into structured decisions.",
    bullets: ["Detection, OCR, layout parsing", "Edge or cloud deployment"],
  },
  {
    number: "06",
    category: "Classical",
    name: "ML & Decision Systems",
    summary:
      "Forecasting, optimisation, and anomaly detection where a classical model still beats an LLM on cost and interpretability.",
    bullets: ["Gradient boosting, time-series, optimisation", "Explainable by default"],
  },
  {
    number: "07",
    category: "MLOps",
    name: "AI Engineering & Delivery",
    summary:
      "The plumbing that turns a prototype into something on-call at 3am: CI for prompts, eval gates, cost guardrails, rollback.",
    bullets: ["Observability + eval harness", "Cloud-native deploys to your accounts"],
  },
];

const heroStats = [
  { value: "07", label: "solution shapes" },
  { value: "02", label: "core specialisms" },
  { value: "90d", label: "stabilisation included" },
  { value: "100%", label: "code & weights yours" },
];

const engagements = [
  {
    duration: "≈ 3 weeks",
    name: "Proof of concept",
    description:
      "Validate the approach on real data before committing to the full build. You get a working prototype, an eval harness, and a side-by-side benchmark.",
    highlighted: false,
  },
  {
    duration: "≈ 8 weeks + 90-day stabilisation",
    name: "Complete solution",
    description:
      "End-to-end build of one offering: orchestration system or production fine-tune. Deployed to your cloud with observability and handoff.",
    highlighted: true,
  },
  {
    duration: "Multi-month",
    name: "Combined engagement",
    description:
      "Both specialisms across several workflows. Shared retrieval, eval, and observability layer. Internal team training included.",
    highlighted: false,
  },
];

export default function AISolutionsPage() {
  const { openModal } = useCalendly();
  return (
    <>
      <TopNavigation />
      <div className="min-h-screen bg-white">
        {/* §003 Hero */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
          <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-blue-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-indigo-300/20 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.24em] text-blue-700 mb-5">
                <span className="text-gray-400">§ 003</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>Custom intelligence, built for your domain</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[1.05] tracking-[-0.02em]">
                AI solutions
                <br />
                <span className="gradient-text-modern inline-block mt-2">
                  that earn their keep.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-[1.65] max-w-2xl mx-auto mb-10 sm:mb-12">
                We don&apos;t sell a buzzword grab-bag. Two specialisms run the engagement: multi-agent orchestration when one model isn&apos;t enough, and custom LLM fine-tuning when prompts can&apos;t reliably express what you need. Backed by the surrounding craft to put either into production.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-14">
                <button
                  onClick={openModal}
                  className="btn-primary group w-full sm:w-auto px-8 py-4 text-white rounded-xl font-semibold text-base inline-flex items-center justify-center gap-2"
                >
                  <span>Book a discovery call</span>
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </button>
                <a
                  href="#shapes"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                >
                  See the seven solution shapes
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>

              {/* Stats strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200/70 shadow-sm overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-200/70">
                {heroStats.map((s, i) => (
                  <div key={i} className="px-4 py-5 sm:px-6 sm:py-6 text-center md:text-left">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.02em] gradient-text-modern leading-none mb-1.5 sm:mb-2">
                      {s.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-600 font-medium leading-snug">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* §004 Seven shapes */}
        <section id="shapes" className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <div className="flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.24em] text-blue-700 mb-5">
                <span className="text-gray-400">§ 004</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>The seven shapes</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Seven shapes. <span className="gradient-text-modern">No grab-bag.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                Your problem probably rhymes with one of these. On the discovery call we&apos;ll tell you which, and whether it&apos;s worth building at all.
              </p>
            </div>

            {/* Primary two specialisms */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
              {shapes
                .filter((s) => s.primary)
                .map((s) => (
                  <article
                    key={s.number}
                    className="relative rounded-3xl border-2 border-gray-200 bg-white p-8 sm:p-9 lg:p-10 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600" />
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-black text-gray-200 tracking-tight leading-none">
                          {s.number}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-blue-700">
                          {s.category}
                        </span>
                      </div>
                      {s.badge && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.18em]">
                          <span className="w-1 h-1 rounded-full bg-emerald-600" />
                          {s.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-[1.15] tracking-[-0.01em] mb-4">
                      {s.name}
                    </h3>
                    <p
                      className="text-[15px] sm:text-base text-gray-600 leading-[1.7] mb-6"
                      dangerouslySetInnerHTML={{ __html: s.summary }}
                    />
                    <ul className="space-y-2.5">
                      {s.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-[15px] text-gray-700 leading-[1.6]"
                        >
                          <span className="text-blue-500 mt-0.5">→</span>
                          <span dangerouslySetInnerHTML={{ __html: b }} />
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
            </div>

            {/* Five supporting shapes */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {shapes
                .filter((s) => !s.primary)
                .map((s) => (
                  <article
                    key={s.number}
                    className="group relative bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)]"
                  >
                    <div className="flex items-baseline gap-3 mb-3.5">
                      <span className="text-2xl font-black text-gray-200 tracking-tight leading-none">
                        {s.number}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-blue-700">
                        {s.category}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-[1.25] mb-3 tracking-[-0.01em]">
                      {s.name}
                    </h3>
                    <p
                      className="text-[14px] text-gray-600 leading-[1.65] mb-4"
                      dangerouslySetInnerHTML={{ __html: s.summary }}
                    />
                    <ul className="space-y-2">
                      {s.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[13px] text-gray-700 leading-[1.55]"
                        >
                          <span className="text-blue-500 mt-0.5">→</span>
                          <span dangerouslySetInnerHTML={{ __html: b }} />
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
            </div>

            {/* Pull quote */}
            <figure className="mt-14 sm:mt-16 lg:mt-20 max-w-4xl mx-auto text-center">
              <svg
                className="w-10 h-10 text-blue-200 mx-auto mb-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M9.62 18.32H5.4v-4.21H8q.43 0 .69-.27a.93.93 0 0 0 .26-.66c0-.32-.13-.6-.4-.83-.27-.23-.66-.34-1.18-.34-.59 0-1.1.16-1.5.49v-2.94c.5-.34 1.16-.5 1.99-.5 1.13 0 2.04.36 2.71 1.07.68.71 1.02 1.69 1.02 2.93v5.26ZM18.6 18.32h-4.22v-4.21h2.6q.42 0 .69-.27a.93.93 0 0 0 .26-.66q0-.48-.4-.83c-.27-.23-.66-.34-1.18-.34-.59 0-1.1.16-1.5.49v-2.94c.5-.34 1.16-.5 1.99-.5 1.13 0 2.04.36 2.71 1.07.68.71 1.02 1.69 1.02 2.93v5.26Z" />
              </svg>
              <blockquote className="text-xl sm:text-2xl lg:text-[26px] text-gray-900 font-medium leading-[1.4] tracking-[-0.01em] mb-5">
                The right question isn&apos;t which model. It&apos;s whether the shape of your problem is a graph, a fine-tune, or something a well-written prompt already solves.
              </blockquote>
              <figcaption className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">The Unicorn Studio team</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* §005 Engagement shapes */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <div className="flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.24em] text-blue-700 mb-5">
                <span className="text-gray-400">§ 005</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>Engagement shapes</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Three ways teams <span className="gradient-text-modern">work with us.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                All fixed-scope. All quoted in writing before work begins.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {engagements.map((tier, index) => (
                <div
                  key={index}
                  className={`group relative bg-white p-8 rounded-2xl border-2 transition-all duration-300 flex flex-col ${
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
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-blue-700 mb-3">
                      {tier.duration}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-[-0.01em]">
                      {tier.name}
                    </h3>
                    <p className="text-[15px] text-gray-600 leading-[1.65] mb-7 flex-1">
                      {tier.description}
                    </p>
                    <button
                      onClick={openModal}
                      className={`group/btn inline-flex items-center justify-between w-full py-3 px-5 rounded-xl font-bold text-sm transition-all duration-300 ${
                        tier.highlighted
                          ? "btn-primary text-white"
                          : "bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-900"
                      }`}
                    >
                      <span>Start here</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-12 sm:mt-14 rounded-2xl border border-gray-200 bg-white/70 p-6 sm:p-7 text-center">
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-blue-600 mb-2">
                Pricing
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-[1.7]">
                Every solution is custom. Pricing depends on the data, the model choice, and what infrastructure you&apos;re bringing in. We quote in writing on the discovery call, before any work begins.
              </p>
            </div>
          </div>
        </section>

        {/* §006 FAQ */}
        <FAQ
          faqs={aiSolutionsFaqs}
          eyebrow="§ 006 · FAQ"
          headingLead="Questions founders"
          headingHighlight="ask."
          lead="Before committing to a custom AI build. The rest happen on the call."
        />

        {/* CTA */}
        <section
          id="contact"
          className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-600"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-[-0.02em] leading-[1.1]">
              Ready to build real AI solutions?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-[1.6] max-w-2xl mx-auto">
              Let&apos;s skip the hype and build AI that transforms your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="btn-primary-light px-8 py-4 text-blue-700 rounded-xl font-semibold text-base sm:text-lg"
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
