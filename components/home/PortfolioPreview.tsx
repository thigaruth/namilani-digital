import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { featuredProjects } from "@/lib/projects";

export function PortfolioPreview() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-20 text-paper md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-y-0 left-[18%] hidden w-px bg-paper/10 lg:block"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <AnimatedSection className="flex-1">
            <SectionHeading
              eyebrow="Selected work"
              title="Ideas turned into digital experiences."
              description="Every project begins with a goal. Our work reflects the different ways digital solutions can help businesses communicate their value, showcase their services, and reach their audiences."
              tone="dark"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="shrink-0">
            <Button href="/portfolio" variant="teal" size="md" arrow>
              Explore Our Portfolio
            </Button>
          </AnimatedSection>
        </div>

        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <PortfolioCard project={project} tone="dark" />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mt-8 max-w-xl text-xs leading-relaxed text-paper/40">
          Project previews are supplied mockups. Verified case-study details will be added as they
          become available.
        </p>
      </Container>
    </section>
  );
}
