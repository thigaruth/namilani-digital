import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "@/components/layout/SocialIcon";
import {
  footerLinks,
  mailtoHref,
  site,
  socialLinks,
  telHref,
  whatsappMessageHref,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-deep text-paper">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06]" aria-hidden="true" />

      <Container className="relative">
        <div className="border-b border-paper/12 py-14 md:py-16">
          <p className="font-display text-[clamp(2.6rem,7.5vw,6.2rem)] font-semibold leading-[0.98] tracking-[-0.02em]">
            <span className="text-coral">Build.</span>{" "}
            <span className="text-paper">Grow.</span>{" "}
            <span className="italic text-teal">Connect.</span>
          </p>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr] lg:gap-10">
          <div>
            <Link href="/" aria-label="Namilani Digital home" className="inline-block bg-paper p-2">
              <Logo size="md" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/55">
              We help businesses build a stronger digital presence through creative design,
              website development, SEO, and digital marketing solutions.
            </p>
            {socialLinks.length > 0 ? (
              <div className="mt-6">
                <p className="mb-3 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-paper/35">
                  Follow
                </p>
                <div className="flex items-center gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${site.name} on ${link.label}`}
                      className="inline-flex size-9 items-center justify-center border border-paper/15 text-paper/60 transition-colors hover:border-coral hover:text-coral"
                    >
                      <SocialIcon name={link.icon} />
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <FooterColumn title="Quick Links" links={footerLinks.quick} />
          <FooterColumn title="Our Services" links={footerLinks.services} />

          <div>
            <h3 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-paper/35">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-paper/60">
              <li>
                <a href={mailtoHref} className="flex items-start gap-2.5 transition-colors hover:text-paper">
                  <Mail className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li>
                <a href={telHref} className="flex items-start gap-2.5 transition-colors hover:text-paper">
                  <Phone className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                  <span>{site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappMessageHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 transition-colors hover:text-paper"
                >
                  <MessageCircle className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
                  <span>WhatsApp {site.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" />
                <span>{site.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-paper/12 py-7 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Namilani Digital. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="transition-colors hover:text-paper">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-paper">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-paper/35">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm text-paper/60">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition-colors hover:text-paper">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
