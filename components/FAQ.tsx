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
 * Homepage default FAQ. General questions about the studio's engagements
 * that apply across every solution. AI GTM System page and each of the
 * supporting solution pages use their own FAQ set passed via props.
 */
export const aiSystemsFaqs: FAQItem[] = [
  {
    question: "Which of your solutions should I pick first?",
    answer:
      "Whichever bottleneck is hurting growth most right now. Most clients start with the AI GTM System (if pipeline is the problem) or Workflow Automation (if ops hours are the problem). We'll map your business on the discovery call and recommend the order.",
  },
  {
    question: "How quickly does a solution go live?",
    answer:
      "4 to 8 weeks depending on complexity and how clean your existing data and tools are. We commit to a fixed timeline and a fixed scope before any build begins.",
  },
  {
    question: "Will my data stay private?",
    answer:
      "Yes. We deploy to your cloud, your accounts, and your secrets manager. Nothing routes through our infrastructure. We'll sign an NDA before scoping if you need it.",
  },
  {
    question: "Will I own the workflows and prompts?",
    answer:
      "Every workflow, prompt, integration, and asset we build is yours. Forever. Even if you fire us tomorrow, the system keeps running and your team can extend it.",
  },
  {
    question: "What if the system needs changes after launch?",
    answer:
      "Maintenance is optional and scoped per request. Most clients run lightweight after the first 30 days. Your team can extend it themselves, or come back to us when you need bigger changes.",
  },
  {
    question: "Do you guarantee outcomes?",
    answer:
      "We guarantee the system is built, integrated, and operational as scoped. Where a solution has a measurable output (booked meetings for the AI GTM System, hours reclaimed for Workflow Automation, etc.), we back that number with a work-for-free-until-it-hits guarantee.",
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
