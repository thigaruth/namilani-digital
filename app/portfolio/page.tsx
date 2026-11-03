import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { ContactCTA } from "@/components/home/ContactCTA";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Our Work | Namilani Digital Portfolio",
  description:
    "Explore selected website design, branding, graphic design, and digital marketing project profiles from Namilani Digital in Kenya.",
  path: "/portfolio",
  keywords: ["Namilani Digital portfolio", "web design portfolio Kenya", "digital agency work Kenya"],
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Good Ideas Deserve Great Digital Execution."
        description="Explore selected digital projects that demonstrate how thoughtful design, functional development, and clear communication can help businesses present themselves online."
        breadcrumbs={[{ label: "Our Work" }]}
        image="/portfolio-hero/portfolio.jpg"
      >
        <Button href="/contact" variant="primary" size="lg" arrow>
          Have a Similar Project in Mind?
        </Button>
      </PageHero>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Selected projects"
              title="A Growing Portfolio of Digital Work."
              description="Use the categories below to explore project profiles across website development, branding, and digital content."
            />
          </AnimatedSection>
          <div className="mt-10">
            <PortfolioGrid />
          </div>
        </Container>
      </section>

      <ContactCTA
        eyebrow="Your project next"
        title="Have a Similar Project in Mind?"
        description="Tell us what you're planning. We'll help you shape a practical digital project around your goals, audience, and budget."
        primaryLabel="Start Your Project"
      />
    </>
  );
}
