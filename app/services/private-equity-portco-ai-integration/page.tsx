import TopNavigation from "@/components/TopNavigation";
import Hero from "@/components/ebitda-finder/Hero";
import Problem from "@/components/ebitda-finder/Problem";
import HowItWorks from "@/components/ebitda-finder/HowItWorks";
import Deliverables from "@/components/ebitda-finder/Deliverables";
import Security from "@/components/ebitda-finder/Security";
import Proof from "@/components/ebitda-finder/Proof";
import ValueMath from "@/components/ebitda-finder/ValueMath";
import Pricing from "@/components/ebitda-finder/Pricing";
import FAQ from "@/components/ebitda-finder/FAQ";
import FinalCTA from "@/components/ebitda-finder/FinalCTA";
import Footer from "@/components/ebitda-finder/Footer";

/**
 * The 14-Day EBITDA Finder landing page, for PE operating partners.
 *
 * Offer page: it uses the site-wide TopNavigation so visitors get the
 * real Unicorn Studio menu, and keeps the design's own compact footer.
 * `landing-inter` scopes the page's typography (Inter throughout, where
 * the rest of the site sets headings in Sora) and its white background.
 */
export default function EbitdaFinderPage() {
  return (
    <div className="landing-inter min-h-screen bg-white text-[#151616] leading-[1.55]">
      <TopNavigation />
      <main className="pt-14 sm:pt-16">
        <Hero />
        <Problem />
        <HowItWorks />
        <Deliverables />
        <Security />
        <Proof />
        <ValueMath />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
