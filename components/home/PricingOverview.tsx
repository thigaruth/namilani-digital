import { Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { PricingCard } from "@/components/ui/PricingCard";

const pricing = [
  {
    label: "Website Design",
    price: "From KES 25,000",
    note: "The final price depends on the number of pages, complexity, integrations, and requested features.",
    accent: "coral" as const,
    className: "lg:col-span-2",
    featured: true,
  },
  {
    label: "SEO Services",
    price: "From KES 5,000",
    note: "Quoted according to the agreed deliverables and reporting arrangements.",
    accent: "teal" as const,
    className: "lg:col-span-2",
    featured: false,
  },
  {
    label: "Web Hosting",
    price: "From KES 2,500",
    note: "Billing periods and hosting specifications are confirmed in the selected package.",
    accent: "orange" as const,
    className: "lg:col-span-2",
    featured: false,
  },
  {
    label: "Social Media Management",
    price: "From KES 5,000",
    note: "Excluding advertising spend. Scope and inclusions are confirmed in your quotation.",
    accent: "coral" as const,
    className: "lg:col-span-3",
    featured: false,
  },
  {
    label: "Social Media Graphics",
    price: "KES 3,000 for 15 graphics",
    note: "A practical starting package for branded social media creative.",
    accent: "teal" as const,
    className: "lg:col-span-3",
    featured: false,
  },
];

export function PricingOverview() {
  return (
    <section className="relative overflow-hidden bg-mist py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dots-light opacity-40" aria-hidden="true" />
      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <AnimatedSection className="flex-1">
            <SectionHeading
              eyebrow="Starting points"
              title="Professional Digital Solutions That Respect Your Budget."
              description="Every business has different priorities. We offer accessible starting packages for selected services, with tailored quotations for projects requiring additional features or support."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.12} className="shrink-0">
            <Button href="/contact" variant="navy" size="md" arrow>
              Request a Custom Quote
            </Button>
          </AnimatedSection>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {pricing.map((item) => (
            <div key={item.label} className={`md:col-span-1 ${item.className}`}>
              <PricingCard
                label={item.label}
                price={item.price}
                note={item.note}
                accent={item.accent}
                featured={item.featured}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-navy/8 bg-white/70 p-4 text-xs leading-relaxed text-muted">
          <Info className="mt-0.5 size-4 shrink-0 text-teal-ink" aria-hidden="true" />
          <p>
            Final pricing depends on the agreed scope. Quotations confirm the deliverables,
            inclusions, and billing arrangements for each project.
          </p>
        </div>
      </Container>
    </section>
  );
}
