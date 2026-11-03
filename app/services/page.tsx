import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
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
      >
        <Button href="/contact" variant="primary" size="lg" arrow>
          Discuss Your Project
        </Button>
      </PageHero>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Five connected capabilities"
              title="Choose the Support Your Business Needs Right Now."
              description="Each service can stand on its own, or work together as part of a more connected digital presence."
            />
          </AnimatedSection>

          <div className="mt-12 space-y-4">
            {services.map((service, index) => {
              const styles = accentStyles[service.accent];
              return (
                <AnimatedSection key={service.slug} delay={index * 0.04}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group grid gap-6 rounded-3xl border border-navy/8 bg-mist/50 p-6 transition-all duration-300 hover:border-navy/15 hover:bg-white hover:shadow-soft sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`inline-flex size-14 items-center justify-center rounded-2xl ${styles.soft} ${styles.text}`}>
                        <ServiceIcon name={service.icon} className="size-6" />
                      </span>
                      <span className="font-display text-xs font-bold tracking-[0.18em] text-navy/25 lg:hidden">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div>
                      <p className={`text-[0.625rem] font-bold uppercase tracking-[0.17em] ${styles.text}`}>
                        {service.name}
                      </p>
                      <h2 className="mt-2 font-display text-2xl font-extrabold leading-[1.15] tracking-[-0.035em] text-navy sm:text-[1.7rem]">
                        {service.cardTitle}
                      </h2>
                      <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted">
                        {service.cardDescription}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end">
                      <span className="hidden font-display text-xs font-bold tracking-[0.18em] text-navy/20 lg:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-navy transition-all duration-300 group-hover:border-coral group-hover:bg-coral">
                        Explore
                        <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy-deep py-20 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-35" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 top-10 size-96 rounded-full bg-teal/15 blur-[110px]" aria-hidden="true" />
        <Container className="relative">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Integrated solutions"
              title="Better Results Begin When Your Digital Channels Work Together."
              description="Choose a focused starting point or combine services into a package built around where your business is now."
              tone="dark"
            />
          </AnimatedSection>

          <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2">
            {integratedPackages.map((pack, index) => {
              const styles = accentStyles[pack.accent];
              return (
                <StaggerItem key={pack.title}>
                  <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/8 sm:p-8">
                    <div className="flex items-start justify-between">
                      <span className={`inline-flex size-11 items-center justify-center rounded-2xl bg-white/10 ${styles.text}`}>
                        <span className={`size-3 rounded-full ${styles.dot}`} aria-hidden="true" />
                      </span>
                      <span className="font-display text-xs font-bold tracking-[0.16em] text-white/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-extrabold tracking-[-0.035em]">
                      {pack.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/55">
                      {pack.description}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-white/75 transition-colors hover:text-white"
                    >
                      Request a custom quote
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
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
