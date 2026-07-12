import TopNavigation from "@/components/TopNavigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FourSystems from "@/components/FourSystems";
import Plan from "@/components/Plan";
import Guarantee from "@/components/Guarantee";
import RecentLaunches from "@/components/RecentLaunches";
import Scarcity from "@/components/Scarcity";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopNavigation />
      <main className="min-h-screen">
        <Hero />
        <Problem />
        <FourSystems />
        <Plan />
        <Guarantee />
        <RecentLaunches />
        <Scarcity />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
