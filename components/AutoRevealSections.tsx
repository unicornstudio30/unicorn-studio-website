"use client";

import { useEffect } from "react";

/**
 * Auto-applies reveal-on-scroll to every <section> on the current page,
 * skipping any section explicitly opted out with `data-no-reveal`. Runs
 * once on mount and after route changes (via key on layout).
 *
 * Why a global mount instead of <Reveal> wrappers: avoids editing every
 * page to add the wrapper, and works consistently across the site. Each
 * section gets `opacity: 0` until it scrolls into view, then animates up.
 */
export default function AutoRevealSections() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section")
    ).filter((s) => !s.hasAttribute("data-no-reveal"));

    if (sections.length === 0) return;

    if (reduced) {
      // Respect the user's accessibility preference — show everything
      // immediately, no animation.
      sections.forEach((s) => s.classList.add("auto-reveal", "is-visible"));
      return;
    }

    sections.forEach((s) => s.classList.add("auto-reveal"));

    // The very first section above the fold should reveal immediately so
    // visitors see the hero without an awkward fade.
    if (sections[0]) sections[0].classList.add("is-visible");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    sections.slice(1).forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return null;
}
