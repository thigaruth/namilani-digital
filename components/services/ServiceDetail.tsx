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
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] ${styles.solid}`}>
            <Sparkles className="size-3.5" aria-hidden="true" />
            {service.startingPrice}
          </span>
          <Button href="/contact" variant="outline-light" size="md" arrow>
            Request a Quote
          </Button>
        </div>
      </PageHero>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <AnimatedSection>
              <Eyebrow>The opportunity</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.04] tracking-[-0.045em] text-navy">
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

            <AnimatedSection delay={0.1}>
              <div className="relative overflow-hidden rounded-[2rem] border border-navy/8 bg-mist p-7 sm:p-9">
                <div className={`pointer-events-none absolute -right-12 -top-12 size-44 rounded-full ${styles.soft} blur-2xl`} aria-hidden="true" />
                <span className={`inline-flex size-14 items-center justify-center rounded-2xl ${styles.soft} ${styles.text}`}>
                  <ServiceIcon name={service.icon} className="size-6" />
                </span>
                <p className="mt-7 text-[0.625rem] font-bold uppercase tracking-[0.18em] text-muted">
                  At a glance
                </p>
                <h3 className="mt-2 font-display text-2xl font-extrabold tracking-[-0.035em] text-navy">
                  {service.name}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {service.offerings.slice(0, 5).map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className={`mt-1 inline-flex size-4 shrink-0 items-center justify-center rounded-full ${styles.soft} ${styles.text}`}>
                        <Check className="size-2.5" strokeWidth={3} aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex items-center justify-between rounded-2xl border border-navy/8 bg-white p-4">
                  <div>
                    <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-muted">
                      Starting point
                    </p>
                    <p className="mt-1 font-display text-lg font-extrabold tracking-[-0.02em] text-navy">
                      {service.startingPrice}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className={`inline-flex size-10 items-center justify-center rounded-full ${styles.solid} transition-transform hover:scale-105`}
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

      <section className="bg-mist py-20 md:py-28">
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
                <div className="flex h-full items-start gap-3 rounded-2xl border border-navy/8 bg-white p-5 transition-colors hover:border-navy/15">
                  <span className={`mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full ${styles.soft} ${styles.text}`}>
                    <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-navy">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {service.included ? (
            <div className="mt-14">
              <AnimatedSection>
                <h3 className="font-display text-2xl font-extrabold tracking-[-0.035em] text-navy sm:text-3xl">
                  {service.includedHeading}
                </h3>
              </AnimatedSection>
              <StaggerGroup className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {service.included.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3 border-b border-navy/8 py-2.5 text-sm text-muted">
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
              <h3 className="font-display text-xl font-bold tracking-[-0.03em] text-navy">
                Platforms we work with
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full border border-navy/10 bg-white px-4 py-2 text-xs font-semibold text-navy/70"
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
        <section className="bg-white py-20 md:py-28">
          <Container>
            <AnimatedSection>
              <SectionHeading
                eyebrow="Content approach"
                title="Content With a Clear Purpose."
                description="Each piece of content should have a role. We plan around these five intentions so your social presence stays useful and consistent."
              />
            </AnimatedSection>
            <StaggerGroup className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {service.approach.map((item, index) => {
                const accents = ["coral", "teal", "orange", "coral", "teal"] as const;
                const itemStyles = accentStyles[accents[index] ?? "teal"];
                return (
                  <StaggerItem key={item.title}>
                    <div className="h-full rounded-3xl border border-navy/8 bg-mist/60 p-5">
                      <span className={`inline-flex size-8 items-center justify-center rounded-full ${itemStyles.solid} font-display text-[0.625rem] font-extrabold`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-4 font-display text-base font-bold tracking-[-0.02em] text-navy">
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

      <section className="bg-mist py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Process"
              title={processHeading}
              description="A clear sequence keeps the project focused and makes it easier to review progress at each stage."
            />
          </AnimatedSection>

          <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {service.process.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="relative h-full rounded-3xl border border-navy/8 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex size-10 items-center justify-center rounded-xl font-display text-sm font-extrabold ${styles.solid}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {index < service.process.length - 1 ? (
                      <span className="hidden h-px w-6 bg-navy/10 lg:block" aria-hidden="true" />
                    ) : null}
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold leading-snug tracking-[-0.02em] text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Investment"
              title="Clear Starting Points."
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
            <div className="mt-6 space-y-2 rounded-2xl border border-orange/25 bg-orange/8 p-4">
              {service.notes.map((note) => (
                <p key={note} className="flex items-start gap-2.5 text-xs leading-relaxed text-navy/70">
                  <Info className="mt-0.5 size-3.5 shrink-0 text-orange-ink" aria-hidden="true" />
                  {note}
                </p>
              ))}
            </div>
          ) : null}
        </Container>
      </section>

      <section className="bg-mist py-16 md:py-20">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>Keep exploring</Eyebrow>
                <h2 className="mt-4 font-display text-2xl font-extrabold tracking-[-0.035em] text-navy sm:text-3xl">
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
                  className="group rounded-3xl border border-navy/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className={`inline-flex size-10 items-center justify-center rounded-xl ${itemStyles.soft} ${itemStyles.text}`}>
                    <ServiceIcon name={item.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold tracking-[-0.025em] text-navy">
                    {item.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted">
                    {item.cardDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.625rem] font-bold uppercase tracking-[0.13em] text-navy">
                    Learn more
                    <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
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
