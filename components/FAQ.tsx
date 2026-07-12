"use client";

import { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  /** Custom FAQ items. Defaults to the general homepage list. */
  faqs?: FAQItem[];
  /** Eyebrow text. Defaults to "FAQ". */
  eyebrow?: string;
  /** First line of the headline. Defaults to "Frequently asked". */
  headingLead?: string;
  /** Highlighted second line of the headline. Defaults to "questions." */
  headingHighlight?: string;
  /** Lead paragraph below the headline. */
  lead?: string;
  /** Call-to-action label in the left column. */
  ctaLabel?: string;
  /** Anchor target for the CTA. Defaults to "#contact". */
  ctaHref?: string;
};

/**
 * AI GTM System FAQ — also used as the default on the homepage.
 * Exported so the AI GTM System page can reuse the same source of truth.
 */
export const aiSystemsFaqs: FAQItem[] = [
  {
    question: "How is this different from hiring an SDR agency?",
    answer:
      "An SDR agency rents you 2-3 humans for $8-12k/month who send templated messages until you fire them. The AI GTM System runs 24/7, personalises every message with real research, and gets better every week as we tune it. Same monthly cost, 5-10x the throughput, and the system stays yours.",
  },
  {
    question: "How is this different from Clay, Instantly, or Apollo?",
    answer:
      "Those are ingredients, not a system. Buying Clay doesn't build your ICP. Buying Instantly doesn't warm your domains, tune your copy, or handle replies. We orchestrate best-in-class tools into one system that runs for you, then we operate it. You get the outcome, not more software to manage.",
  },
  {
    question: "What if we already have SDRs? Does this replace them?",
    answer:
      "Usually augments, not replaces. The system handles top-of-funnel volume that SDRs can't sustain, then your humans take over the moment a conversation gets nuanced. Most clients redeploy their SDR team into AE support or expansion, not layoffs.",
  },
  {
    question: "How quickly does the system go live?",
    answer:
      "First booked meetings by week 6. Fully autopilot pipeline by month 3. We do a system audit in week 1, build for 3 weeks, then start with a warm rollout of 50 prospects/day and ramp from there.",
  },
  {
    question: "Will my data stay private?",
    answer:
      "Yes. We deploy to your cloud, your accounts, and your CRM. Nothing routes through our infrastructure. We'll sign an NDA before scoping if you need it.",
  },
  {
    question: "What's the guarantee?",
    answer:
      "If we don't hit the agreed pipeline output by month 3 (booked sales conversations from qualified ICP accounts), we work for free until we do. Written into the contract.",
  },
];

const defaultFaqs: FAQItem[] = aiSystemsFaqs;

export default function FAQ({
  faqs = defaultFaqs,
  eyebrow = "FAQ",
  headingLead = "Frequently asked",
  headingHighlight = "questions.",
  lead = "Most-asked things, answered honestly. Don’t see your question?",
  ctaLabel = "Ask on a discovery call",
  ctaHref = "#contact",
}: FAQProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header (split layout for visual interest) */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start mb-10 sm:mb-12 lg:mb-14">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-7">
              {eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-5 sm:mb-7">
              {headingLead} <span className="gradient-text-modern">{headingHighlight}</span>
            </h2>
            <p className="text-lg text-gray-600 leading-[1.65] mb-8">
              {lead}
            </p>
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
            >
              <span>{ctaLabel}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Questions */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-blue-200 shadow-[0_15px_40px_-15px_rgba(37,99,235,0.18)]"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 sm:px-7 py-5 sm:py-6 flex items-center justify-between gap-6 text-left"
                  >
                    <span
                      className={`text-base sm:text-lg font-semibold leading-[1.4] ${
                        isOpen ? "text-blue-900" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-blue-600 text-white rotate-45"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7">
                        <p className="text-[15px] sm:text-base text-gray-600 leading-[1.7]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
