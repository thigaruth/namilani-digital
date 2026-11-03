import { Blocks, Link2, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { accentStyles } from "@/lib/accents";

const pillars = [
  {
    title: "Build",
    description:
      "Professional websites, branding, and technology that give your business a strong digital foundation.",
    icon: Blocks,
    accent: "coral" as const,
  },
  {
    title: "Grow",
    description:
      "SEO and digital marketing that improve visibility and help you reach more customers.",
    icon: TrendingUp,
    accent: "teal" as const,
  },
  {
    title: "Connect",
    description:
      "Engaging content and digital experiences that build meaningful relationships with your audience.",
    icon: Link2,
    accent: "orange" as const,
  },
];

export function Intro() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <AnimatedSection>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2.1rem,4.2vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-navy">
              We Make Digital Work for Your Business.
            </h2>
            <div className="mt-7">
              <Button href="/about" variant="outline" size="md" arrow>
                Discover Namilani Digital
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p className="font-medium text-navy">Having a digital presence is just the beginning.</p>
              <p>
                Your website needs to communicate your value, your brand needs to stand out, and
                your marketing needs to reach the right people.
              </p>
              <p>
                At Namilani Digital, we bring these elements together to help businesses build
                credibility, improve visibility, and create meaningful connections with their
                customers.
              </p>
              <p>
                Whether you&apos;re launching a new business or taking an established brand to the
                next level, we&apos;re here to help you make the most of the digital world.
              </p>
            </div>

            <StaggerGroup className="mt-9 grid gap-3 sm:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                const styles = accentStyles[pillar.accent];
                return (
                  <StaggerItem key={pillar.title}>
                    <div className="h-full rounded-2xl border border-navy/8 bg-mist/70 p-4">
                      <span className={`inline-flex size-9 items-center justify-center rounded-xl ${styles.soft} ${styles.text}`}>
                        <Icon className="size-4" strokeWidth={2} aria-hidden="true" />
                      </span>
                      <p className="mt-3 font-display text-base font-bold tracking-[-0.02em] text-navy">
                        {pillar.title}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted">
                        {pillar.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
