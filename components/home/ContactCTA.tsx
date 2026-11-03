import type { ReactNode } from "react";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
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
    <section className={cn("bg-white py-16 md:py-24", className)}>
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-12 text-white sm:px-10 sm:py-14 md:rounded-[2.75rem] lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-35" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-coral/25 blur-[90px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-28 left-1/3 size-80 rounded-full bg-teal/20 blur-[100px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute right-10 top-10 hidden size-44 rounded-full border border-white/10 lg:block"
              aria-hidden="true"
            >
              <span className="absolute inset-10 rounded-full border border-white/10" />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
              <div>
                <Eyebrow tone="dark">{eyebrow}</Eyebrow>
                <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.2rem,4.6vw,3.9rem)] font-extrabold leading-[1.02] tracking-[-0.045em]">
                  {title}
                </h2>
                <div className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
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

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6">
                <p className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-white/40">
                  Prefer to reach out directly?
                </p>
                <ul className="mt-4 space-y-3.5 text-sm">
                  <li>
                    <a href={mailtoHref} className="flex items-center gap-2.5 text-white/70 transition hover:text-white">
                      <Mail className="size-4 text-coral" aria-hidden="true" />
                      {site.email}
                    </a>
                  </li>
                  <li>
                    <a href={telHref} className="flex items-center gap-2.5 text-white/70 transition hover:text-white">
                      <Phone className="size-4 text-teal" aria-hidden="true" />
                      {site.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 text-white/60">
                    <ArrowUpRight className="size-4 text-orange" aria-hidden="true" />
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
