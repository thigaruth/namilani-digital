import Link from "next/link";
import { ArrowUpRight, Check, Info, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/ui/PricingCard";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { ContactCTA } from "@/components/home/ContactCTA";
import { accentStyles } from "@/lib/accents";
import { services, type Service } from "@/lib/services";

const processHeadings: Record<string, string> = {
  "web-design": "Our Development Process",
  seo: "Our SEO Process",
  "social-media": "How We Work",
  "graphic-design": "Our Design Process",
  hosting: "How We Work",
};

const serviceHeroImages: Record<string, string> = {
  "web-design": "/service-hero/web-design.jpg",
  seo: "/service-hero/seo.jpg",
  "social-media": "/service-hero/social-media.jpg",
  "graphic-design": "/service-hero/graphic-design.jpg",
  hosting: "/service-hero/hosting.jpg",
};

export function ServiceDetail({ service }: { service: Service }) {
  const styles = accentStyles[service.accent];
  const processHeading = processHeadings[service.slug] ?? "Our Process";
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.heroTitle}
        description={service.heroDescription}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.name }]}
        image={serviceHeroImages[service.slug] || "/hero/services-hero.jpg"}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex items-center gap-2 border border-paper/25 px-4 py-2 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-paper`}
          >
            <Sparkles className="size-3.5 text-coral" aria-hidden="true" />
            {service.startingPrice}
          </span>
          <Button href="/contact" variant="outline-light" size="md" arrow>
            Request a Quote
          </Button>
        </div>
      </PageHero>

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <AnimatedSection>
              <Eyebrow>The opportunity</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.07] tracking-[-0.015em] text-forest">
                {service.whyHeading}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                {service.whyBody.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="navy" size="md" arrow>
                  Discuss This Service
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className={`relative h-full border-t-2 bg-paper-deep/40 p-7 sm:p-9 ${styles.border}`}>
                <span className={`inline-flex size-12 items-center justify-center ${styles.soft} ${styles.text}`}>
                  <ServiceIcon name={service.icon} className="size-5" />
                </span>
                <p className="mt-7 text-[0.5625rem] font-semibold uppercase tracking-[0.2em] text-muted">
                  At a glance
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.01em] text-forest">
                  {service.name}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {service.offerings.slice(0, 5).map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className={`mt-0.5 inline-flex size-4 shrink-0 items-center justify-center ${styles.soft} ${styles.text}`}>
                        <Check className="size-2.5" strokeWidth={3} aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex items-center justify-between border-t border-ink/12 pt-5">
                  <div>
                    <p className="text-[0.5625rem] font-semibold uppercase tracking-[0.18em] text-muted">
                      Starting point
                    </p>
                    <p className="mt-1 font-display text-xl font-semibold tracking-[-0.01em] text-forest">
                      {service.startingPrice}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className={`inline-flex size-11 items-center justify-center ${styles.solid} transition-colors hover:opacity-90`}
                    aria-label={`Request a quote for ${service.name}`}
                  >
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="bg-paper-deep/50 py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="What we offer"
              title={service.offeringHeading}
              description={service.offeringIntro}
            />
          </AnimatedSection>

          <StaggerGroup className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.offerings.map((item) => (
              <StaggerItem key={item}>
                <div className="flex h-full items-start gap-3 border border-ink/10 bg-paper p-5 transition-colors hover:border-ink/25">
                  <span className={`mt-0.5 inline-flex size-5 shrink-0 items-center justify-center ${styles.soft} ${styles.text}`}>
                    <Check className="size-3" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-forest">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {service.included ? (
            <div className="mt-14">
              <AnimatedSection>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.01em] text-forest sm:text-3xl">
                  {service.includedHeading}
                </h3>
              </AnimatedSection>
              <StaggerGroup className="mt-6 grid gap-x-8 gap-y-0 sm:grid-cols-2">
                {service.included.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3 border-b border-ink/12 py-3 text-sm text-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-coral-ink" strokeWidth={2.5} aria-hidden="true" />
                      {item}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          ) : null}

          {service.platforms ? (
            <AnimatedSection className="mt-14">
              <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-forest">
                Platforms we work with
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="border border-ink/15 bg-paper px-4 py-2 text-xs font-medium text-forest/70"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          ) : null}
        </Container>
      </section>

      {service.approach ? (
        <section className="bg-paper py-20 md:py-28">
          <Container>
            <AnimatedSection>
              <SectionHeading
                eyebrow="Content approach"
                title="Content with a clear purpose."
                description="Each piece of content should have a role. We plan around these five intentions so your social presence stays useful and consistent."
              />
            </AnimatedSection>
            <StaggerGroup className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
              {service.approach.map((item, index) => {
                const accents = ["coral", "teal", "orange", "coral", "teal"] as const;
                const itemStyles = accentStyles[accents[index] ?? "teal"];
                return (
                  <StaggerItem key={item.title}>
                    <div className={`border-t-2 pt-4 ${itemStyles.border}`}>
                      <span className={`font-display text-sm font-semibold ${itemStyles.text}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-3 font-display text-base font-semibold tracking-[-0.01em] text-forest">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted">{item.description}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </Container>
        </section>
      ) : null}

      <section className="bg-paper-deep/50 py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Process"
              title={processHeading}
              description="A clear sequence keeps the project focused and makes it easier to review progress at each stage."
            />
          </AnimatedSection>

          <StaggerGroup className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {service.process.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className={`border-t-2 pt-4 ${styles.border}`}>
                  <span className={`font-display text-sm font-semibold ${styles.text}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug tracking-[-0.01em] text-forest">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Investment"
              title="Clear starting points."
              description="Final pricing depends on the agreed scope, deliverables, and any additional requirements confirmed during your quotation."
            />
          </AnimatedSection>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {service.pricing.map((price, index) => (
              <PricingCard
                key={price.label}
                label={price.label}
                price={price.price}
                note={price.note}
                accent={service.accent}
                featured={index === 0}
              />
            ))}
          </div>

          {service.notes.length > 0 ? (
            <div className="mt-6 space-y-2 border-l-2 border-orange/60 bg-paper-deep/40 p-4">
              {service.notes.map((note) => (
                <p key={note} className="flex items-start gap-2.5 text-xs leading-relaxed text-forest/70">
                  <Info className="mt-0.5 size-3.5 shrink-0 text-orange-ink" aria-hidden="true" />
                  {note}
                </p>
              ))}
            </div>
          ) : null}
        </Container>
      </section>

      <section className="bg-paper-deep/50 py-16 md:py-20">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>Keep exploring</Eyebrow>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.01em] text-forest sm:text-3xl">
                  Other ways we can help.
                </h2>
              </div>
              <Button href="/services" variant="outline" size="md" arrow>
                All services
              </Button>
            </div>
          </AnimatedSection>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((item) => {
              const itemStyles = accentStyles[item.accent];
              return (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group border border-ink/10 bg-paper p-6 transition-colors hover:border-ink/25"
                >
                  <span className={`inline-flex size-10 items-center justify-center ${itemStyles.soft} ${itemStyles.text}`}>
                    <ServiceIcon name={item.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.01em] text-forest">
                    {item.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted">
                    {item.cardDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-forest">
                    Learn more
                    <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <ContactCTA
        eyebrow="Take the next step"
        title="Let's Talk About What Your Business Needs."
        description="Share your goals and current challenges. We'll help you decide whether this service is the right next step or recommend a more suitable approach."
        primaryLabel="Start Your Project"
      />
    </>
  );
}
