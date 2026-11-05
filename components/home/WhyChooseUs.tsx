import { Globe2, Layers, Lightbulb, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
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
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <AnimatedSection className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Why Namilani</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.06] tracking-[-0.015em] text-forest">
              Digital solutions with your goals at the <span className="italic text-teal-ink">centre</span>.
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

          <AnimatedSection delay={0.08}>
            <ol className="border-t border-ink/12">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                const styles = accentStyles[reason.accent];
                return (
                  <li
                    key={reason.title}
                    className="grid gap-3 border-b border-ink/12 py-6 sm:grid-cols-[2.5rem_1fr] sm:gap-5"
                  >
                    <span className="font-display text-sm text-muted/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex items-center gap-2.5">
                        <Icon className={`size-4 ${styles.text}`} strokeWidth={1.8} aria-hidden="true" />
                        <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-forest sm:text-[1.35rem]">
                          {reason.title}
                        </h3>
                      </div>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                        {reason.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
