/**
 * Inline SVGs used across the Deal Flow Engine page, lifted from the
 * approved design. Kept here so sections stay readable and a stroke or
 * size tweak happens in one place.
 */
import type { IconName } from "./content";

type Props = { className?: string; strokeWidth?: number };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function Icon({ name, className = "w-7 h-7", strokeWidth = 2 }: Props & { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    lines: <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />,
    grid: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18M9 3v18" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    check: <path d="M20 6L9 17l-5-5" />,
    gift: (
      <>
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 8v13" />
        <path d="M19 12v9H5v-9" />
        <path d="M12 8c-2-3-6-3-6 0 0 1 1 0 6 0zM12 8c2-3 6-3 6 0 0 1-1 0-6 0z" />
      </>
    ),
    cross: <path d="M18 6L6 18M6 6l12 12" />,
    server: (
      <>
        <rect x="3" y="4" width="18" height="7" rx="1.5" />
        <rect x="3" y="13" width="18" height="7" rx="1.5" />
        <path d="M7 7.5h.01M7 16.5h.01" />
      </>
    ),
    unlink: (
      <>
        <circle cx="8" cy="15" r="4" />
        <path d="M11 12l9-9M17 6l3 3M15 8l2 2" />
      </>
    ),
  };

  return (
    <svg {...base} strokeWidth={strokeWidth} className={className}>
      {paths[name]}
    </svg>
  );
}

/** Check mark used in lists. Sized and offset to sit on the first text line. */
export function CheckIcon({ className = "w-[22px] h-[22px] flex-none mt-[3px] text-[#2563eb]" }: Props) {
  return (
    <svg {...base} strokeWidth={2.4} className={className}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

/** The double-chevron Unicorn Studio mark from the nav. */
export function BrandMark({ className = "w-8 h-8" }: Props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden className={className}>
      <defs>
        <linearGradient id="usmark" x1="0" y1="32" x2="32" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#10adda" />
          <stop offset="1" stopColor="#3488f2" />
        </linearGradient>
      </defs>
      <path d="M6 20 L16 10 L26 20" stroke="url(#usmark)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 28 L16 18 L26 28" stroke="url(#usmark)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Opening quote glyph above the testimonial. */
export function QuoteMark({ className = "w-11 h-11 text-[#2563eb]" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M9.5 6C6.5 6.6 4 9.3 4 13v5h6v-6H7.2c.2-2 1.4-3.5 3-4l-.7-2zm10 0c-3 .6-5.5 3.3-5.5 7v5h6v-6h-2.8c.2-2 1.4-3.5 3-4l-.7-2z" />
    </svg>
  );
}
