"use client";

import { useEffect, useRef, ReactNode, ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  threshold?: number;
  /**
   * If true, applies `reveal-stagger` to this container so direct child
   * `.reveal` elements animate in sequence. The container itself does NOT
   * animate when `stagger` is set.
   */
  stagger?: boolean;
  id?: string;
}

/**
 * Reveal-on-scroll wrapper. Uses IntersectionObserver to add `is-visible`
 * once the element scrolls into view (animation defined in globals.css).
 * Falls back to immediately visible when prefers-reduced-motion is set.
 */
export default function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  threshold = 0.12,
  stagger = false,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the user prefers reduced motion, skip the animation entirely.
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.classList.add("is-visible");
      if (stagger) {
        el.querySelectorAll(".reveal").forEach((c) =>
          c.classList.add("is-visible")
        );
      }
      return;
    }

    const targets: Element[] = stagger
      ? Array.from(el.querySelectorAll(":scope > .reveal"))
      : [el];

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (delay) {
              window.setTimeout(() => target.classList.add("is-visible"), delay);
            } else {
              target.classList.add("is-visible");
            }
            observer.unobserve(target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [delay, threshold, stagger]);

  const Tag: ElementType = as;
  const baseClasses = stagger ? "reveal-stagger" : "reveal";

  return (
    <Tag
      ref={ref as unknown as React.Ref<HTMLElement>}
      id={id}
      className={`${baseClasses} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
