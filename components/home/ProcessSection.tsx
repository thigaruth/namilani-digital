import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
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
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <Container className="relative">
        <AnimatedSection>
          <SectionHeading
            eyebrow="How we work"
            title="From First Conversation to Digital Launch."
            description="A clear, collaborative process keeps the work focused on your business and the outcome you want to create."
          />
        </AnimatedSection>

        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-navy/10 lg:block" aria-hidden="true" />
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const styles = accentStyles[step.accent];
              return (
                <StaggerItem key={step.title}>
                  <div className="group relative h-full rounded-3xl border border-navy/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7">
                    <div className="relative z-10 flex items-center justify-between">
                      <span
                        className={`inline-flex size-14 items-center justify-center rounded-2xl font-display text-lg font-extrabold ${styles.solid}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-10 bg-navy/10 transition-all duration-300 group-hover:w-14 group-hover:bg-navy/20" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.03em] text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {step.description}
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
