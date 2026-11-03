import { Globe2, Layers, Lightbulb, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { accentStyles } from "@/lib/accents";

const reasons = [
  {
    title: "Business-Focused Approach",
    description:
      "We begin with your business objectives and recommend solutions that support your goals.",
    icon: Target,
    accent: "coral" as const,
  },
  {
    title: "Creative Meets Strategic",
    description:
      "We combine thoughtful design with practical digital strategies to create work that looks good and serves a purpose.",
    icon: Lightbulb,
    accent: "teal" as const,
  },
  {
    title: "Solutions for Different Stages of Growth",
    description:
      "Whether you're starting small or expanding your operations, we help you identify digital solutions suited to your current needs.",
    icon: Layers,
    accent: "orange" as const,
  },
  {
    title: "A Connected Digital Approach",
    description:
      "Your website, branding, SEO, and social media should work together. We help bring these elements into a more consistent digital experience.",
    icon: Globe2,
    accent: "teal" as const,
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <AnimatedSection className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Why Namilani</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2.1rem,4.2vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-navy">
              Digital Solutions With Your Goals at the Centre.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              We combine practical thinking, creative execution, and a clear understanding of your
              business to recommend work that is relevant to where you are now.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="md" arrow>
                Let&apos;s Talk About Your Business
              </Button>
            </div>
          </AnimatedSection>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const styles = accentStyles[reason.accent];
              return (
                <StaggerItem key={reason.title}>
                  <div className="group h-full rounded-3xl border border-navy/8 bg-mist/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy/15 hover:bg-white hover:shadow-soft sm:p-7">
                    <div className="flex items-start justify-between">
                      <span className={`inline-flex size-11 items-center justify-center rounded-2xl ${styles.soft} ${styles.text}`}>
                        <Icon className="size-5" strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      <span className="font-display text-xs font-bold tracking-[0.16em] text-navy/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold leading-tight tracking-[-0.025em] text-navy">
                      {reason.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {reason.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
