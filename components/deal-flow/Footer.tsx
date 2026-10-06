import { footer } from "./content";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(21,22,22,0.08)]">
      <div className="max-w-[1200px] mx-auto px-6 py-7 flex flex-wrap justify-between gap-3 text-sm text-[rgba(21,22,22,0.72)]">
        <span>{footer.blurb}</span>
        <span>{footer.copyright}</span>
      </div>
    </footer>
  );
}
