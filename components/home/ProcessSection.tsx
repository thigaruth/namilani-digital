import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { accentStyles } from "@/lib/accents";

const steps = [
  {
    title: "Discover",
    description:
      "We learn about your business, your audience, your challenges, and what you want to achieve.",
    accent: "coral" as const,
  },
  {
    title: "Strategize",
    description:
      "We recommend the appropriate services, define the project scope, and agree on deliverables and timelines.",
    accent: "teal" as const,
  },
  {
    title: "Create",
    description:
      "We design, develop, and refine your digital solution, keeping your goals and feedback at the centre.",
    accent: "orange" as const,
  },
  {
    title: "Launch & Grow",
    description:
      "We help you launch your project and identify opportunities for continued improvement, visibility, and growth.",
    accent: "coral" as const,
  },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 md:py-28">
      <Container className="relative">
        <AnimatedSection>
          <SectionHeading
            eyebrow="How we work"
            title="From first conversation to digital launch."
            description="A clear, collaborative process keeps the work focused on your business and the outcome you want to create."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const styles = accentStyles[step.accent];
            return (
              <AnimatedSection key={step.title} delay={index * 0.05}>
                <div className={`border-t-2 pt-5 ${styles.border}`}>
                  <div className="flex items-center justify-between">
                    <span className={`font-display text-sm font-semibold ${styles.text}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.5625rem] font-semibold uppercase tracking-[0.18em] text-muted/60">
                      Step
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.01em] text-forest">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
