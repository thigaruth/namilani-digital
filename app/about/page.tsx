import type { Metadata } from "next";
import { Eye, Handshake, Lightbulb, RefreshCw, Rocket, Target, Wrench } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { ContactCTA } from "@/components/home/ContactCTA";
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
      >
        <div className="flex flex-wrap gap-2">
          {["Build", "Grow", "Connect"].map((word, index) => (
            <span
              key={word}
              className="rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-[0.625rem] font-bold uppercase tracking-[0.16em] text-white/60"
            >
              <span className={index === 0 ? "text-coral" : index === 1 ? "text-white" : "text-teal"}>
                {word}
              </span>
            </span>
          ))}
        </div>
      </PageHero>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <AnimatedSection>
              <Eyebrow>Our story</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2.1rem,4.2vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-navy">
                A Digital Partner for Businesses With Ambition.
              </h2>
              <div className="mt-8 rounded-3xl border border-coral/25 bg-coral/10 p-6">
                <p className="font-display text-lg font-bold leading-snug tracking-[-0.02em] text-navy">
                  Every business has something valuable to offer. The challenge is making sure the
                  right people discover it, understand it, and trust it.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
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

      <section className="bg-mist py-20 md:py-28">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <AnimatedSection>
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-coral p-7 text-ink sm:p-9">
                <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/20 blur-2xl" aria-hidden="true" />
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-ink/10">
                  <Target className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-8 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-ink/55">
                  Our mission
                </p>
                <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-[-0.035em] sm:text-3xl">
                  Making Digital Opportunities More Accessible.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70">
                  Our mission is to empower businesses with practical, creative, and effective
                  digital solutions that strengthen their online presence, improve their visibility,
                  and support sustainable growth.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-navy p-7 text-white sm:p-9">
                <div className="pointer-events-none absolute -bottom-12 -right-8 size-44 rounded-full bg-teal/25 blur-3xl" aria-hidden="true" />
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-white/10 text-teal">
                  <Rocket className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-8 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-white/40">
                  Our vision
                </p>
                <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-[-0.035em] sm:text-3xl">
                  A Future Where Every Business Can Compete Digitally.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
                  Our vision is to become a trusted digital partner for businesses seeking to build
                  credible brands, meaningful online experiences, and stronger connections with
                  their customers.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="What guides us"
              title="Values That Shape the Work."
              description="These principles keep our recommendations grounded in what is useful, honest, and relevant to your business."
            />
          </AnimatedSection>

          <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title} className={index === 4 ? "lg:col-span-1" : undefined}>
                  <div className="group h-full rounded-3xl border border-navy/8 bg-mist/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft sm:p-7">
                    <div className="flex items-start justify-between">
                      <span
                        className={`inline-flex size-11 items-center justify-center rounded-2xl ${
                          value.accent === "coral"
                            ? "bg-coral/12 text-coral-ink"
                            : value.accent === "teal"
                              ? "bg-teal/12 text-teal-ink"
                              : "bg-orange/12 text-orange-ink"
                        }`}
                      >
                        <Icon className="size-5" strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      <span className="font-display text-xs font-bold tracking-[0.16em] text-navy/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold tracking-[-0.025em] text-navy">
                      {value.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">{value.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-mist py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <AnimatedSection>
              <Eyebrow>Our approach</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2.1rem,4.2vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-navy">
                We Start With Your Business, Not Just the Brief.
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

            <AnimatedSection delay={0.1}>
              <div className="relative rounded-[2rem] border border-navy/8 bg-white p-7 shadow-soft sm:p-9">
                <div className="pointer-events-none absolute -right-3 -top-3 size-16 rounded-full bg-coral/20 blur-xl" aria-hidden="true" />
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-teal/12 text-teal-ink">
                  <Eye className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.03em] text-navy">
                  Before we recommend anything, we consider:
                </h3>
                <ul className="mt-5 space-y-3">
                  {approachPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-teal/12 text-teal-ink">
                        <span className="size-1.5 rounded-full bg-teal" aria-hidden="true" />
                      </span>
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
