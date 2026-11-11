"use client";

import { useState } from "react";
import Link from "next/link";
import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { useCalendly } from "@/components/CalendlyProvider";
import type { CaseStudy, Shot } from "@/components/case-study-content";

const SITE = "https://unicornstudio.io";

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-5 ${
        dark ? "bg-white/10 border border-white/20 text-blue-100" : "bg-blue-50 border border-blue-100 text-blue-700"
      }`}
    >
      {children}
    </div>
  );
}

/* ---------- Share ---------- */

function ShareBar({ cs, align = "left" }: { cs: CaseStudy; align?: "left" | "center" }) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE}/case-studies/${cs.slug}/`;
  const text = `${cs.client}: ${cs.headline} ${cs.headlineAccent}`;
  const enc = encodeURIComponent;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const t = document.createElement("textarea");
      t.value = url;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nativeShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({ title: cs.seoTitle, text, url }).catch(() => {});
    } else {
      copy();
    }
  };

  const btn =
    "inline-flex items-center justify-center gap-2 h-10 px-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 text-sm font-semibold hover:border-blue-400 hover:text-blue-700 transition-colors";

  const links = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
      icon: (
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.55 4.77 5.86v5.59h-4v-4.96c0-1.18-.02-2.7-1.7-2.7-1.7 0-1.96 1.28-1.96 2.61v5.05h-4v-11Z" />
      ),
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${enc(`${text} ${url}`)}`,
      icon: (
        <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.17-1.5A9.9 9.9 0 1 0 12.04 2Zm5.8 14.03c-.25.7-1.43 1.32-1.98 1.37-.5.05-1.13.07-1.82-.12a16.5 16.5 0 0 1-1.65-.6 12.9 12.9 0 0 1-4.95-4.37c-.36-.5-1.2-1.6-1.2-3.05 0-1.45.76-2.17 1.03-2.46.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.25.6.84 2.05.91 2.2.08.15.13.32.03.52-.1.2-.15.32-.3.5l-.45.52c-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.05 1.13 1 2.09 1.32 2.38 1.47.3.15.47.12.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.07.12.07.72-.18 1.42Z" />
      ),
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${enc(text)}&url=${enc(url)}`,
      icon: (
        <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.58l11.09 14.43Z" />
      ),
    },
    {
      label: "Email",
      href: `mailto:?subject=${enc(cs.seoTitle)}&body=${enc(`${text}\n\n${url}`)}`,
      icon: (
        <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2 7.6 5.7L19.6 7H4.4ZM20 8.25l-7.4 5.55a1 1 0 0 1-1.2 0L4 8.25V17h16V8.25Z" />
      ),
    },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-2 ${align === "center" ? "justify-center" : ""}`}>
      <button type="button" onClick={copy} className={`${btn} ${copied ? "!border-emerald-400 !text-emerald-700" : ""}`}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          {copied ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5M14 10a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" />
          )}
        </svg>
        {copied ? "Link copied" : "Copy link"}
      </button>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target={l.label === "Email" ? undefined : "_blank"}
          rel="noopener noreferrer"
          className={`${btn} w-10 !px-0 ${l.label === "X" || l.label === "Email" ? "hidden sm:inline-flex" : ""}`}
          aria-label={`Share on ${l.label}`}
          title={`Share on ${l.label}`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {l.icon}
          </svg>
        </a>
      ))}
      <button type="button" onClick={nativeShare} className={`${btn} sm:hidden`} aria-label="More sharing options">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v12m0-12 4 4m-4-4L8 7M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
        </svg>
        Share
      </button>
    </div>
  );
}

/* ---------- Video ---------- */

function ClientVideo({ t }: { t: CaseStudy["testimonial"] }) {
  const [started, setStarted] = useState(false);
  return (
    <div className="relative aspect-[9/16] w-full max-w-[300px] mx-auto rounded-3xl overflow-hidden bg-gray-900 border border-gray-200 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.3)]">
      <video
        id="case-video"
        src={t.video}
        poster={t.poster}
        preload="none"
        playsInline
        controls={started}
        className="absolute inset-0 w-full h-full object-cover"
        aria-label={`Video testimonial from ${t.name}`}
      />
      {!started && (
        <button
          type="button"
          onClick={() => {
            setStarted(true);
            (document.getElementById("case-video") as HTMLVideoElement | null)?.play();
          }}
          className="group absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 via-transparent to-transparent"
          aria-label={`Play video testimonial from ${t.name}`}
        >
          <span className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-blue-600 shadow-xl transition-transform duration-300 group-hover:scale-110">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.02-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
            </svg>
          </span>
          <span className="absolute bottom-4 right-4 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-semibold">
            {t.duration}
          </span>
        </button>
      )}
    </div>
  );
}

/* ---------- Product screenshot ---------- */

function Screenshot({ shot, dark = false }: { shot: Shot; dark?: boolean }) {
  return (
    <figure className="mt-4">
      <a
        href={shot.src}
        target="_blank"
        rel="noopener noreferrer"
        className={`block rounded-xl sm:rounded-2xl overflow-hidden border shadow-[0_20px_60px_-25px_rgba(15,23,42,0.45)] transition-transform hover:-translate-y-0.5 ${
          dark ? "border-white/15" : "border-gray-200"
        }`}
        aria-label={`Open full-size screenshot: ${shot.alt}`}
      >
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0b0d14] border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} loading="lazy" decoding="async" className="block w-full h-auto bg-[#0b0d14]" />
      </a>
      <figcaption className={`mt-2.5 text-xs sm:text-[13px] leading-relaxed ${dark ? "text-blue-100/70" : "text-gray-500"}`}>
        {shot.caption}
      </figcaption>
    </figure>
  );
}

/* ---------- Page ---------- */

export default function CaseStudyDetail({ cs }: { cs: CaseStudy }) {
  const { openModal } = useCalendly();
  const t = cs.testimonial;

  return (
    <>
      <TopNavigation />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/case-studies/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-blue-700 mb-6 sm:mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All case studies
            </Link>

            <div className="max-w-4xl">
              <Pill>{cs.eyebrow}</Pill>
              <h1 className="text-[32px] leading-[1.1] sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-[-0.02em]">
                {cs.headline} <span className="gradient-text-modern">{cs.headlineAccent}</span>
              </h1>
              <p className="mt-5 sm:mt-7 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">{cs.intro}</p>

              {/* Mini quote + share */}
              <div className="mt-7 sm:mt-8 flex flex-col gap-5">
                <a href="#testimonial" className="group flex items-start gap-3 max-w-2xl">
                  <span className="mt-1 w-1 self-stretch rounded-full bg-blue-500 shrink-0" />
                  <span>
                    <span className="block text-base sm:text-lg text-gray-900 font-medium leading-snug">&ldquo;{t.quote}&rdquo;</span>
                    <span className="block mt-1 text-sm text-gray-500 group-hover:text-blue-700">
                      {t.name}, {t.role} · <span className="underline underline-offset-2">Watch the video</span>
                    </span>
                  </span>
                </a>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500 mb-2">Share this case study</div>
                  <ShareBar cs={cs} />
                </div>
              </div>
            </div>

            {/* Outcome stats */}
            <div className={`mt-10 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4 ${cs.stats.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
              {cs.stats.map((s) => (
                <div key={s.label} className="px-4 py-4 sm:py-5 rounded-2xl bg-white border border-gray-200 shadow-sm [&:last-child:nth-child(odd)]:col-span-2 lg:[&:last-child:nth-child(odd)]:col-span-1">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text-modern leading-tight">{s.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-snug mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-500">{cs.statsNote}</p>
          </div>
        </section>

        {/* 1. Pain point */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6 lg:gap-14 mb-8 sm:mb-12">
              <div>
                <Pill>01 · The pain point</Pill>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                  {cs.pain.title}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed lg:pt-12">{cs.pain.intro}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {cs.pain.points.map((p) => (
                <div key={p.title} className="flex gap-4 p-5 sm:p-6 rounded-2xl bg-rose-50/50 border border-rose-100">
                  <span className="mt-0.5 flex items-center justify-center w-8 h-8 rounded-full bg-white border border-rose-200 text-rose-600 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">{p.title}</h3>
                    <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. How we solved it */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-14">
            <div className="lg:sticky lg:top-28 self-start">
              <Pill>02 · How we solved it</Pill>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                {cs.solution.title}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">{cs.solution.intro}</p>
              {cs.solution.steps.some((s) => s.image) && (
                <p className="mt-4 text-xs text-gray-500">Screenshots are from the live platform. Company names and personal details are blurred.</p>
              )}
            </div>
            <ol className="relative border-l-2 border-blue-200 pl-6 sm:pl-8 space-y-7 sm:space-y-9">
              {cs.solution.steps.map((s, i) => (
                <li key={s.title} className="relative">
                  <span className="absolute -left-[39px] sm:-left-[47px] top-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-blue-500 text-blue-700 text-xs sm:text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5">{s.title}</h3>
                  <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">{s.body}</p>
                  {s.image && <Screenshot shot={s.image} />}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 3. Outcome */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8 sm:mb-12">
              <Pill dark>03 · The outcome</Pill>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">{cs.outcome.title}</h2>
              <p className="mt-4 text-base sm:text-lg text-blue-100/90 leading-relaxed">{cs.outcome.intro}</p>
            </div>
            {cs.outcome.image && (
              <div className="mb-8 sm:mb-10 max-w-5xl">
                <Screenshot shot={cs.outcome.image} dark />
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {cs.outcome.points.map((o) => (
                <div key={o.title} className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10">
                  {o.value ? (
                    <div className="text-3xl sm:text-4xl font-bold text-white leading-none mb-3">{o.value}</div>
                  ) : (
                    <span className="mb-3 flex items-center justify-center w-9 h-9 rounded-full bg-emerald-400/15 text-emerald-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  )}
                  <h3 className="text-base font-bold text-white mb-1.5">{o.title}</h3>
                  <p className="text-sm text-blue-100/80 leading-relaxed">{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section id="testimonial" className="py-12 sm:py-16 lg:py-20 bg-white scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-14 items-start">
            <div className="lg:sticky lg:top-28">
              <ClientVideo t={t} />
              <div className="mt-4 text-center">
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </div>
            <div>
              <Pill>In {t.name.split(" ")[0]}&apos;s words</Pill>
              <blockquote className="text-2xl sm:text-3xl font-medium text-gray-900 leading-snug tracking-[-0.01em]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 sm:mt-8 p-5 sm:p-7 rounded-2xl bg-gray-50 border border-gray-200">
                <svg className="w-8 h-8 text-blue-200 mb-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9.62 18.32H5.4v-4.21H8q.43 0 .69-.27a.93.93 0 0 0 .26-.66c0-.32-.13-.6-.4-.83-.27-.23-.66-.34-1.18-.34-.59 0-1.1.16-1.5.49v-2.94c.5-.34 1.16-.5 1.99-.5 1.13 0 2.04.36 2.71 1.07.68.71 1.02 1.69 1.02 2.93v5.26ZM18.6 18.32h-4.22v-4.21h2.6q.42 0 .69-.27a.93.93 0 0 0 .26-.66q0-.48-.4-.83c-.27-.23-.66-.34-1.18-.34-.59 0-1.1.16-1.5.49v-2.94c.5-.34 1.16-.5 1.99-.5 1.13 0 2.04.36 2.71 1.07.68.71 1.02 1.69 1.02 2.93v5.26Z" />
                </svg>
                <div className="space-y-4 text-[15px] sm:text-base text-gray-700 leading-relaxed">
                  {t.full.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-gray-200 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="font-bold text-gray-900">{t.name}</span>
                    <span className="text-sm text-gray-500">, {t.role}</span>
                  </div>
                  <span className="text-xs text-gray-400">{t.fullNote}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Share + book */}
        <section className="pb-12 sm:pb-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl sm:rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-10 text-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                Know someone with the same problem?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600">Send them this case study, or talk to us about your own workflow.</p>
              <div className="mt-6">
                <ShareBar cs={cs} align="center" />
              </div>
              <button
                onClick={openModal}
                className="btn-primary mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 text-white rounded-xl font-semibold text-base"
              >
                <span>Book a discovery call</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <Link
              href={`/case-studies/${cs.companion.slug}/`}
              className="group mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-gray-200 p-5 sm:p-6 hover:border-blue-400 transition-colors"
            >
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 mb-1">Related case study</div>
                <div className="text-lg font-bold text-gray-900">{cs.companion.title}</div>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed max-w-2xl">{cs.companion.body}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 shrink-0">
                Read it
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </section>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
