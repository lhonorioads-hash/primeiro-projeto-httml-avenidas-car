import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedVehicles } from "@/components/FeaturedVehicles";
import { Differentials } from "@/components/Differentials";
import { Inventory } from "@/components/Inventory";
import { Financing } from "@/components/Financing";
import { TradeIn } from "@/components/TradeIn";
import { Appraisal } from "@/components/Appraisal";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Instagram } from "@/components/Instagram";
import { FAQ } from "@/components/FAQ";
import { LocationSection } from "@/components/Location";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedVehicles />
        <Differentials />
        <Inventory />
        <Financing />
        <TradeIn />
        <Appraisal />
        <HowItWorks />
        <About />
        <Testimonials />
        <Instagram />
        <FAQ />
        <LocationSection />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
