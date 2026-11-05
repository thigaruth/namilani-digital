import type { Metadata } from "next";
import { Eye, Handshake, Lightbulb, RefreshCw, Rocket, Target, Wrench } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ContactCTA } from "@/components/home/ContactCTA";
import { accentStyles } from "@/lib/accents";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About Namilani Digital | Our Story & Approach",
  description:
    "Learn about Namilani Digital, a Kenyan digital partner helping businesses build credible brands, stronger online experiences, and meaningful connections with their customers.",
  path: "/about",
  keywords: ["about Namilani Digital", "digital agency Kenya", "web design partner Kenya"],
});

const values = [
  {
    title: "Creativity",
    description:
      "We approach every project with curiosity and a commitment to thoughtful, engaging solutions.",
    icon: Lightbulb,
    accent: "coral" as const,
  },
  {
    title: "Purpose",
    description:
      "We believe digital work should serve a clear objective, whether that's communicating a message, attracting customers, or improving a business process.",
    icon: Target,
    accent: "teal" as const,
  },
  {
    title: "Collaboration",
    description:
      "We work with our clients, not just for them. Their knowledge of their businesses is an essential part of every successful project.",
    icon: Handshake,
    accent: "orange" as const,
  },
  {
    title: "Practicality",
    description:
      "We value solutions that make sense for the client's needs, available resources, and stage of growth.",
    icon: Wrench,
    accent: "teal" as const,
  },
  {
    title: "Continuous Improvement",
    description:
      "Digital platforms and customer expectations evolve. We believe in learning, adapting, and identifying opportunities to improve.",
    icon: RefreshCw,
    accent: "coral" as const,
  },
];

const approachPoints = [
  "Your audience and what matters to them.",
  "Your existing digital presence.",
  "Your competitive environment.",
  "Your budget and practical priorities.",
  "The stage of growth your business is in.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Namilani Digital"
        title="We're Here to Help Your Business Make Its Mark Online."
        description="Namilani Digital exists to help businesses turn digital opportunities into meaningful progress through thoughtful design, practical technology, and strategic digital marketing."
        breadcrumbs={[{ label: "About" }]}
        image="/hero/about-hero.jpg"
      >
        <div className="flex flex-wrap gap-2">
          {["Build", "Grow", "Connect"].map((word) => (
            <span
              key={word}
              className="border border-paper/25 px-3.5 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-paper/70"
            >
              {word}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <AnimatedSection>
              <Eyebrow>Our story</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.06] tracking-[-0.015em] text-forest">
                A digital partner for businesses with <span className="italic text-coral-ink">ambition</span>.
              </h2>
              <div className="mt-8 border-l-2 border-coral pl-5">
                <p className="font-display text-lg font-medium italic leading-snug tracking-[-0.01em] text-forest">
                  Every business has something valuable to offer. The challenge is making sure the
                  right people discover it, understand it, and trust it.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="space-y-4 text-base leading-relaxed text-muted sm:text-[1.0625rem]">
                <p>
                  Namilani Digital was built around this idea: businesses deserve digital solutions
                  that do more than simply look professional. They should help communicate value,
                  strengthen credibility, and create opportunities for growth.
                </p>
                <p>
                  We bring together website development, search engine optimization, social media
                  management, graphic design, and hosting solutions to help businesses build a
                  stronger digital foundation.
                </p>
                <p>
                  Our approach is practical and collaborative. We take time to understand what a
                  business needs before recommending the right way forward.
                </p>
                <p>
                  Whether you&apos;re establishing your first online presence or improving an
                  existing one, we&apos;re here to help you move forward with clarity.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="bg-paper-deep/50 py-20 md:py-28">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <AnimatedSection>
              <div className="h-full border-t-2 border-coral bg-coral p-7 text-ink sm:p-9">
                <span className="inline-flex size-11 items-center justify-center border border-ink/20">
                  <Target className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-8 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-ink/55">
                  Our mission
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-[-0.01em] sm:text-3xl">
                  Making digital opportunities more accessible.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70">
                  Our mission is to empower businesses with practical, creative, and effective
                  digital solutions that strengthen their online presence, improve their visibility,
                  and support sustainable growth.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="h-full border-t-2 border-teal bg-forest-deep p-7 text-paper sm:p-9">
                <span className="inline-flex size-11 items-center justify-center border border-paper/20 text-teal">
                  <Rocket className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-8 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-paper/40">
                  Our vision
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-[-0.01em] sm:text-3xl">
                  A future where every business can compete digitally.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/60">
                  Our vision is to become a trusted digital partner for businesses seeking to build
                  credible brands, meaningful online experiences, and stronger connections with
                  their customers.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="What guides us"
              title="Values that shape the work."
              description="These principles keep our recommendations grounded in what is useful, honest, and relevant to your business."
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              const styles = accentStyles[value.accent];
              return (
                <AnimatedSection key={value.title} delay={index * 0.04}>
                  <div className={`border-t-2 pt-5 ${styles.border}`}>
                    <div className="flex items-center justify-between">
                      <Icon className={`size-4 ${styles.text}`} strokeWidth={1.8} aria-hidden="true" />
                      <span className="font-display text-sm text-muted/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.01em] text-forest">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-paper-deep/50 py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <AnimatedSection>
              <Eyebrow>Our approach</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.06] tracking-[-0.015em] text-forest">
                We start with your business, not just the brief.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                Before recommending a website, marketing campaign, or design package, we want to
                understand what you&apos;re trying to achieve.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                We consider your audience, existing digital presence, competition, budget, and
                priorities before developing a practical way forward.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                This allows us to focus on solutions that are relevant to your business rather than
                recommending services simply because they&apos;re available.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="lg" arrow>
                  Let&apos;s Build Something That Moves Your Business Forward.
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="border border-ink/12 bg-paper p-7 sm:p-9">
                <span className="inline-flex size-12 items-center justify-center bg-teal/10 text-teal-ink">
                  <Eye className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.01em] text-forest">
                  Before we recommend anything, we consider:
                </h3>
                <ul className="mt-5 space-y-0">
                  {approachPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 border-b border-ink/10 py-3 text-sm leading-relaxed text-muted last:border-b-0">
                      <span className="mt-2 size-1.5 shrink-0 bg-teal" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <ContactCTA
        eyebrow="Work with us"
        title="Let's Build Something That Moves Your Business Forward."
        description="Tell us what you're planning. We'll take the time to understand your goals and recommend a practical way forward."
      />
    </>
  );
}
