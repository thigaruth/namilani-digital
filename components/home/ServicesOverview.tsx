import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/lib/services";

const spans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
];

export function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-mist py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dots-light opacity-40" aria-hidden="true" />
      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <AnimatedSection className="flex-1">
            <SectionHeading
              eyebrow="What we do"
              title="Everything You Need to Build, Grow and Connect."
              description="We provide practical digital solutions designed to help businesses establish their presence, reach more customers, and compete effectively online."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.12} className="shrink-0">
            <Button href="/services" variant="navy" size="md" arrow>
              View all services
            </Button>
          </AnimatedSection>
        </div>

        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => (
            <StaggerItem key={service.slug} className={spans[index]}>
              <ServiceCard service={service} index={index} featured={index < 2} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
