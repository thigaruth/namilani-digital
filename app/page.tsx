import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PricingOverview } from "@/components/home/PricingOverview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Namilani Digital | Web Design, SEO & Digital Marketing",
  description:
    "Build a stronger online presence with Namilani Digital. Explore website design, SEO, social media management, graphic design, and hosting solutions.",
  path: "/",
  keywords: [
    "web design Kenya",
    "website development Kenya",
    "digital marketing Kenya",
    "SEO services Kenya",
    "social media management Kenya",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesOverview />
      <WhyChooseUs />
      <PortfolioPreview />
      <ProcessSection />
      <PricingOverview />
      <ContactCTA />
    </>
  );
}
