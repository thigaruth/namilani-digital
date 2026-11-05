import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ContactCTA } from "@/components/home/ContactCTA";
import { accentStyles } from "@/lib/accents";
import { integratedPackages, services } from "@/lib/services";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Digital Services | Namilani Digital",
  description:
    "Explore Namilani Digital services: website design and development, SEO, social media management, graphic design and branding, and web hosting in Kenya.",
  path: "/services",
  keywords: [
    "digital services Kenya",
    "web design services",
    "SEO services Kenya",
    "social media management",
    "graphic design Kenya",
    "web hosting Kenya",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Digital Services Designed Around Your Business."
        description="From your first website to a more established digital marketing strategy, Namilani Digital provides connected solutions to help your business build credibility, improve visibility, and grow online."
        breadcrumbs={[{ label: "Services" }]}
        image="/hero/services-hero.jpg"
      >
        <Button href="/contact" variant="primary" size="lg" arrow>
          Discuss Your Project
        </Button>
      </PageHero>

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Five connected capabilities"
              title="Choose the support your business needs right now."
              description="Each service can stand on its own, or work together as part of a more connected digital presence."
            />
          </AnimatedSection>

          <div className="mt-12 border-t border-ink/12">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-forest-deep py-20 text-paper md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06]" aria-hidden="true" />
        <Container className="relative">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Integrated solutions"
              title="Better results begin when your digital channels work together."
              description="Choose a focused starting point or combine services into a package built around where your business is now."
              tone="dark"
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10">
            {integratedPackages.map((pack, index) => {
              const styles = accentStyles[pack.accent];
              return (
                <AnimatedSection key={pack.title} delay={index * 0.06}>
                  <div className={`border-t-2 pt-6 ${styles.border}`}>
                    <div className="flex items-center justify-between">
                      <span className={`font-display text-sm font-semibold ${styles.text}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={`size-2 ${styles.dot}`} aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.01em]">
                      {pack.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-paper/55">
                      {pack.description}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-paper/70 transition-colors hover:text-paper"
                    >
                      Request a custom quote
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      <ContactCTA
        eyebrow="Not sure where to start?"
        title="Let's Find the Right Mix for Your Business."
        description="Tell us about your goals and current challenges. We'll recommend a practical combination of services rather than a one-size-fits-all package."
        primaryLabel="Talk About Your Business"
      />
    </>
  );
}
