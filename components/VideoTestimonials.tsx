"use client";

import { useRef, useState } from "react";

const videos = [
  {
    id: "dudley",
    name: "Dudley Peacock",
    role: "Owner, Digital Growth Equity",
    quote:
      "A productive, proactive and engaged technology partner that delivers on time and within budget.",
    duration: "0:59",
  },
  {
    id: "ernesto",
    name: "Ernesto Bent",
    role: "Founder & CEO, White Knight Acquisitions",
    quote:
      "It has turned sourcing from a manual activity into a much more systematic and scalable process.",
    duration: "2:40",
  },
  {
    id: "zach",
    name: "Zach Gitlin",
    role: "Founder & CEO, MoreConvos.com",
    quote: "A very professional team, very good prices, and a pleasure to work with.",
    duration: "1:03",
  },
];

export default function VideoTestimonials() {
  const refs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [started, setStarted] = useState<Record<string, boolean>>({});

  // Only one video plays at a time.
  const pauseOthers = (id: string) => {
    Object.entries(refs.current).forEach(([key, el]) => {
      if (key !== id && el && !el.paused) el.pause();
    });
  };

  const play = (id: string) => {
    pauseOthers(id);
    setStarted((s) => ({ ...s, [id]: true }));
    refs.current[id]?.play();
  };

  return (
    <section
      id="video-testimonials"
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-7">
            Video testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] max-w-3xl mx-auto">
            Hear it from <span className="gradient-text-modern">our clients.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-sm md:max-w-none mx-auto">
          {videos.map((v) => {
            const isStarted = started[v.id];
            return (
              <article key={v.id} className="flex flex-col">
                <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-gray-900 border border-gray-200 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.25)]">
                  <video
                    ref={(el) => {
                      refs.current[v.id] = el;
                    }}
                    src={`/testimonial/videos/${v.id}.mp4`}
                    poster={`/testimonial/videos/${v.id}-poster.jpg`}
                    preload="none"
                    playsInline
                    controls={isStarted}
                    onPlay={() => pauseOthers(v.id)}
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-label={`Video testimonial from ${v.name}`}
                  />

                  {!isStarted && (
                    <button
                      type="button"
                      onClick={() => play(v.id)}
                      className="group absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 via-transparent to-transparent"
                      aria-label={`Play video testimonial from ${v.name}`}
                    >
                      <span className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-blue-600 shadow-xl transition-transform duration-300 group-hover:scale-110">
                        <svg className="w-7 h-7 sm:w-8 sm:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.02-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
                        </svg>
                      </span>
                      <span className="absolute bottom-4 right-4 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-semibold">
                        {v.duration}
                      </span>
                    </button>
                  )}

                </div>

                <div className="pt-6 px-1">
                  <blockquote className="text-base sm:text-lg text-gray-900 font-medium leading-snug">
                    &ldquo;{v.quote}&rdquo;
                  </blockquote>
                  <div className="mt-4">
                    <div className="font-bold text-gray-900 text-sm sm:text-base">{v.name}</div>
                    <div className="text-sm text-gray-500">{v.role}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
