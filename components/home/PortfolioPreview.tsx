import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { featuredProjects } from "@/lib/projects";

export function PortfolioPreview() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-35" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 top-20 size-[26rem] rounded-full bg-coral/15 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-10 size-[24rem] rounded-full bg-teal/10 blur-[110px]"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <AnimatedSection className="flex-1">
            <SectionHeading
              eyebrow="Selected work"
              title="Ideas Turned Into Digital Experiences."
              description="Every project begins with a goal. Our work reflects the different ways digital solutions can help businesses communicate their value, showcase their services, and reach their audiences."
              tone="dark"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.12} className="shrink-0">
            <Button href="/portfolio" variant="teal" size="md" arrow>
              Explore Our Portfolio
            </Button>
          </AnimatedSection>
        </div>

        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <PortfolioCard project={project} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mt-6 text-xs leading-relaxed text-white/35">
          Project visuals are temporary placeholders. Verified screenshots and case-study details
          will be added as they become available.
        </p>
      </Container>
    </section>
  );
}
