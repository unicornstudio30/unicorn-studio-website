/**
 * Shared presentation tokens for the Deal Flow Engine landing page.
 *
 * The brand gradient is written out in full in each constant rather than
 * composed from fragments, because Tailwind's JIT scans source files for
 * complete class strings and will not see a class assembled at runtime.
 */

/** linear-gradient(105deg, #3b82f6, #2563eb 52%, #1d4ed8) */
export const GRADIENT_BG =
  "bg-[linear-gradient(105deg,#3b82f6,#2563eb_52%,#1d4ed8)]";

/** Same gradient, clipped to the text. Used on highlighted headline words. */
export const GRADIENT_TEXT =
  "bg-[linear-gradient(105deg,#3b82f6,#2563eb_52%,#1d4ed8)] bg-clip-text text-transparent";

/** Gradient CTA button. 44px min height keeps the tap target accessible. */
export const BTN =
  "bg-[linear-gradient(105deg,#3b82f6,#2563eb_52%,#1d4ed8)] text-white no-underline font-semibold rounded-xl min-h-[44px] box-border inline-flex items-center justify-center transition-opacity hover:opacity-90";

/** Secondary outline button. */
export const BTN_OUTLINE =
  "bg-white text-[#151616] no-underline font-semibold rounded-xl min-h-[44px] box-border inline-flex items-center justify-center border-[1.5px] border-[rgba(21,22,22,0.18)] transition-colors hover:border-[rgba(21,22,22,0.35)]";

/** Pale blue band used by alternating sections. */
export const TINT_SECTION =
  "bg-[rgba(37,99,235,0.05)] border-y border-[rgba(37,99,235,0.10)]";

/** Shared section shell: 1200px column, 24px gutter, 96px vertical rhythm. */
export const SECTION_INNER =
  "max-w-[1200px] mx-auto px-6 py-16 sm:py-20 lg:py-24";

/** Small uppercase label above each section heading. */
export const EYEBROW =
  "text-sm font-bold tracking-[0.08em] uppercase text-[#2563eb]";

/** Section h2. Responsive down from the 44px desktop size. */
export const H2 =
  "m-0 text-[32px] sm:text-[38px] lg:text-[44px] leading-[1.1] tracking-[-0.02em] font-extrabold";

/** Body copy under a section heading. */
export const LEAD = "m-0 text-[17px] sm:text-[19px] text-[rgba(21,22,22,0.75)]";

/** Card surface used across Problem, Security and How it works. */
export const CARD =
  "border border-[rgba(21,22,22,0.10)] rounded-2xl p-7 flex flex-col gap-3 bg-white";
