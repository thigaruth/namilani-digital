import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/lib/services";

export function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-paper-deep/50 py-20 md:py-28">
      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <AnimatedSection className="flex-1">
            <SectionHeading
              eyebrow="What we do"
              title="Everything you need to build, grow and connect."
              description="We provide practical digital solutions designed to help businesses establish their presence, reach more customers, and compete effectively online."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="shrink-0">
            <Button href="/services" variant="navy" size="md" arrow>
              View all services
            </Button>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.08}>
          <div className="mt-12 border-t border-ink/12">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
