import type { Metadata } from "next";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { SiteContact } from "@/components/layout/SiteContact";
import { mailtoHref, site, telHref, whatsappMessageHref } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact Namilani Digital | Start Your Project",
  description:
    "Contact Namilani Digital to discuss a website, SEO, social media, graphic design, or hosting project. Email info@namilanidigital.com or message us on WhatsApp.",
  path: "/contact",
  keywords: ["contact Namilani Digital", "web design enquiry Kenya", "digital agency contact Kenya"],
});

const helpfulDetails = [
  "What your business does and who it serves.",
  "What you want the project to achieve.",
  "Any existing website, brand assets, or social profiles.",
  "Your rough budget range and preferred timeline.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Next Digital Project."
        description="Whether you need a new website, better search visibility, a stronger social media presence, or a complete digital foundation, we'd love to hear what you're planning."
        breadcrumbs={[{ label: "Contact" }]}
        image="/hero/contact-hero.jpg"
      >
        <div className="flex flex-wrap gap-3">
          <Button
            href={whatsappMessageHref()}
            variant="primary"
            size="md"
            target="_blank"
            arrow
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Message on WhatsApp
          </Button>
          <Button href={mailtoHref} variant="outline-light" size="md">
            <Mail className="size-4" aria-hidden="true" />
            Email Us
          </Button>
        </div>
      </PageHero>

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div>
              <AnimatedSection>
                <Eyebrow>Contact details</Eyebrow>
                <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold tracking-[-0.015em] text-forest">
                  Reach us directly.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Share a few details about your business and what you&apos;re planning. We&apos;ll
                  review your enquiry and respond using the contact details you provide.
                </p>

                <div className="mt-7">
                  <SiteContact />
                </div>

                <div className="mt-8 border border-ink/12 bg-paper-deep/40 p-5 sm:p-6">
                  <p className="text-[0.5625rem] font-semibold uppercase tracking-[0.18em] text-muted">
                    Helpful details to include
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {helpfulDetails.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-xs leading-relaxed text-muted">
                        <span className="mt-[0.4rem] size-1.5 shrink-0 bg-coral" aria-hidden="true" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={telHref}
                    className="group flex flex-1 items-center justify-between border border-ink/12 bg-paper p-4 transition-colors hover:border-ink/25"
                  >
                    <span className="flex items-center gap-3">
                      <Phone className="size-4 text-teal-ink" aria-hidden="true" />
                      <span className="text-sm font-semibold text-forest">{site.phoneDisplay}</span>
                    </span>
                    <ArrowUpRight className="size-4 text-forest/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                  <a
                    href={whatsappMessageHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-1 items-center justify-between border border-ink/12 bg-paper p-4 transition-colors hover:border-ink/25"
                  >
                    <span className="flex items-center gap-3">
                      <MessageCircle className="size-4 text-teal-ink" aria-hidden="true" />
                      <span className="text-sm font-semibold text-forest">WhatsApp</span>
                    </span>
                    <ArrowUpRight className="size-4 text-forest/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.1}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
