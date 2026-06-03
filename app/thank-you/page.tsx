"use client";

import Link from "next/link";
import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import { useCalendly } from "@/components/CalendlyProvider";

const nextSteps = [
  {
    title: "Book a discovery call",
    description: "Skip the wait. Grab a 30-min slot on the calendar.",
    cta: "Book a call",
    type: "modal" as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "See recent work",
    description: "How we've cut hours, lifted conversions, and shipped AI in production.",
    cta: "See case studies",
    type: "link" as const,
    href: "/case-studies",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
  {
    title: "Chat on WhatsApp",
    description: "Prefer instant? Send a message and we'll reply on the same thread.",
    cta: "Open WhatsApp",
    type: "external" as const,
    href: "https://wa.me/8801799296925?text=Hi%20Saidur%2C%20I%20just%20sent%20a%20message%20through%20the%20website.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.516-5.26c0-5.445 4.455-9.885 9.942-9.885a9.86 9.86 0 0 1 7.022 2.91 9.788 9.788 0 0 1 2.916 6.99c-.005 5.444-4.46 9.885-9.945 9.885zM20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
      </svg>
    ),
  },
];

export default function ThankYouPage() {
  const { openModal } = useCalendly();

  return (
    <>
      <TopNavigation />

      <main className="relative pt-32 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden">
        {/* Ambient backdrop */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-gradient-to-b from-blue-200/30 via-cyan-100/20 to-transparent rounded-[50%] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

        <div className="relative max-w-4xl mx-auto">
          {/* Success indicator */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 blur-2xl opacity-40 scale-110" />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-[0_20px_50px_-12px_rgba(16,185,129,0.5)]">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Message received
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.05] text-center mb-6 text-balance">
            Thanks, your message is{" "}
            <span className="gradient-text-modern">on its way.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-gray-600 leading-[1.6] text-center max-w-2xl mx-auto mb-10 sm:mb-14 text-pretty">
            We typically reply within <strong className="font-semibold text-gray-900">2 hours during business hours</strong>. Check your inbox (and spam, just in case) for our reply from <span className="font-medium text-gray-900">saidur@unicornstudio.io</span>.
          </p>

          {/* What happens next */}
          <div className="relative bg-white rounded-3xl border border-gray-200/80 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.18)] p-6 sm:p-8 lg:p-10 mb-10 sm:mb-14">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">
              What happens next
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold text-sm flex items-center justify-center">
                  1
                </span>
                <div>
                  <p className="text-[15px] sm:text-base font-semibold text-gray-900 mb-1">
                    We read your brief.
                  </p>
                  <p className="text-sm sm:text-[15px] text-gray-600 leading-[1.6]">
                    Saidur reads every message personally. No autoresponders.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold text-sm flex items-center justify-center">
                  2
                </span>
                <div>
                  <p className="text-[15px] sm:text-base font-semibold text-gray-900 mb-1">
                    You hear back within 2 hours.
                  </p>
                  <p className="text-sm sm:text-[15px] text-gray-600 leading-[1.6]">
                    A short reply with our initial thoughts, a few clarifying questions, and a link to book a call if it makes sense.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold text-sm flex items-center justify-center">
                  3
                </span>
                <div>
                  <p className="text-[15px] sm:text-base font-semibold text-gray-900 mb-1">
                    We map out a path forward.
                  </p>
                  <p className="text-sm sm:text-[15px] text-gray-600 leading-[1.6]">
                    On the call we walk through scope, timeline, and price. No pressure, no sales script.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next-step cards */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-[-0.01em] mb-2">
              While you wait
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              A few things you can do right now.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {nextSteps.map((step) => {
              const inner = (
                <>
                  <div className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-[1.55] mb-4">
                    {step.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                    {step.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </>
              );

              const cardClass =
                "group block text-left bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 hover:border-blue-300 hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.25)] transition-all";

              if (step.type === "modal") {
                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={openModal}
                    className={`${cardClass} w-full text-left`}
                  >
                    {inner}
                  </button>
                );
              }
              if (step.type === "external") {
                return (
                  <a
                    key={step.title}
                    href={step.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {inner}
                  </a>
                );
              }
              return (
                <Link key={step.title} href={step.href!} className={cardClass}>
                  {inner}
                </Link>
              );
            })}
          </div>

          {/* Back home */}
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="underline-offset-4 hover:underline">Back to homepage</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
