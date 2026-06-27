import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ProductHighlight from "@/components/sections/ProductHighlight";
import WhyUs from "@/components/sections/WhyUs";
import HowItWorks from "@/components/sections/HowItWorks";
import CountriesServed from "@/components/sections/CountriesServed";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: `${SITE.name} — Premium Corn Silage Exporter`,
  description: "ISO 22000 certified. 15+ countries. 40+ buyers.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <TrustBar /> */}
      <ProductHighlight />
      <WhyUs />
      <HowItWorks />
      {/* <CountriesServed /> */}
      {/* <Testimonials /> */}
      <CTABanner />
    </>
  );
}