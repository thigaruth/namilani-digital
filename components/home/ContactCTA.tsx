import type { ReactNode } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { mailtoHref, site, telHref, whatsappMessageHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ContactCTA({
  eyebrow = "Start a conversation",
  title = "Ready to Take Your Business Further?",
  description = "Let's build a digital presence that reflects your brand, connects with your audience, and supports your ambitions. Whether you need a new website, stronger search visibility, or a more consistent social media presence, we're ready to explore the possibilities with you.",
  primaryLabel = "Start Your Project",
  primaryHref = "/contact",
  secondaryLabel = "Message on WhatsApp",
  className,
  children,
}: {
  eyebrow?: string;
  title?: string;
  description?: ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section className={cn("bg-paper py-16 md:py-24", className)}>
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden bg-forest-deep px-6 py-12 text-paper sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06]" aria-hidden="true" />
            <div
              className="pointer-events-none absolute inset-y-0 left-[55%] hidden w-px bg-paper/15 lg:block"
              aria-hidden="true"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
              <div>
                <Eyebrow tone="dark">{eyebrow}</Eyebrow>
                <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.1rem,4.4vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.015em]">
                  {title}
                </h2>
                <div className="mt-5 max-w-2xl text-sm leading-relaxed text-paper/60 sm:text-base">
                  {description}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button href={primaryHref} variant="primary" size="lg" arrow>
                    {primaryLabel}
                  </Button>
                  <Button href={whatsappMessageHref()} variant="outline-light" size="lg" target="_blank">
                    <MessageCircle className="size-4" aria-hidden="true" />
                    {secondaryLabel}
                  </Button>
                </div>
                {children}
              </div>

              <div className="border-t border-paper/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-paper/40">
                  Prefer to reach out directly?
                </p>
                <ul className="mt-4 space-y-3.5 text-sm">
                  <li>
                    <a href={mailtoHref} className="flex items-center gap-2.5 text-paper/70 transition hover:text-paper">
                      <Mail className="size-4 text-coral" aria-hidden="true" />
                      {site.email}
                    </a>
                  </li>
                  <li>
                    <a href={telHref} className="flex items-center gap-2.5 text-paper/70 transition hover:text-paper">
                      <Phone className="size-4 text-teal" aria-hidden="true" />
                      {site.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 text-paper/60">
                    <span className="size-1 bg-orange" aria-hidden="true" />
                    {site.location}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
