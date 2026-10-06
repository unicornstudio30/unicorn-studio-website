import TopNavigation from "@/components/TopNavigation";
import Hero from "@/components/deal-flow/Hero";
import Problem from "@/components/deal-flow/Problem";
import HowItWorks from "@/components/deal-flow/HowItWorks";
import ValueStack from "@/components/deal-flow/ValueStack";
import SampleOutput from "@/components/deal-flow/SampleOutput";
import Proof from "@/components/deal-flow/Proof";
import DealMath from "@/components/deal-flow/DealMath";
import Fit from "@/components/deal-flow/Fit";
import Security from "@/components/deal-flow/Security";
import Pricing from "@/components/deal-flow/Pricing";
import FAQ from "@/components/deal-flow/FAQ";
import FinalCTA from "@/components/deal-flow/FinalCTA";
import Footer from "@/components/deal-flow/Footer";

/**
 * The 30-Day Deal Flow Engine landing page.
 *
 * Offer page: it uses the site-wide TopNavigation so visitors get the
 * real Unicorn Studio menu, and keeps the design's own compact footer.
 * The `landing-inter` class scopes the page's typography (Inter throughout, where
 * the rest of the site sets headings in Sora) and its white background.
 */
export default function DealFlowEnginePage() {
  return (
    <div className="landing-inter min-h-screen bg-white text-[#151616] leading-[1.55]">
      <TopNavigation />
      <main className="pt-14 sm:pt-16">
        <Hero />
        <Problem />
        <HowItWorks />
        <ValueStack />
        <SampleOutput />
        <Proof />
        <DealMath />
        <Fit />
        <Security />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
