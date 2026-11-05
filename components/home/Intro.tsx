import { Blocks, Link2, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
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
    <section className="relative overflow-hidden bg-paper py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <AnimatedSection>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.06] tracking-[-0.015em] text-forest">
              We make digital work for <span className="italic text-coral-ink">your</span> business.
            </h2>
            <div className="mt-8">
              <Button href="/about" variant="outline" size="md" arrow>
                Discover Namilani Digital
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <p className="max-w-xl font-display text-2xl font-medium italic leading-snug tracking-[-0.01em] text-forest sm:text-[1.75rem]">
              Having a digital presence is just the beginning.
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-[1.0625rem]">
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

            <div className="mt-10 grid gap-0 border-t border-ink/12 sm:grid-cols-3">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                const styles = accentStyles[pillar.accent];
                return (
                  <div
                    key={pillar.title}
                    className="border-b border-ink/12 py-5 sm:border-b-0 sm:border-r sm:px-5 sm:py-6 sm:last:border-r-0 sm:first:pl-0"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <Icon className={`size-4 ${styles.text}`} strokeWidth={1.8} aria-hidden="true" />
                      <span className="text-[0.5625rem] font-medium tracking-[0.18em] text-muted/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-3 font-display text-lg font-semibold tracking-[-0.01em] text-forest">
                      {pillar.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
