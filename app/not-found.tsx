import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Page Not Found | Namilani Digital",
  description: "The page you are looking for could not be found.",
  robots: { index: false, follow: false },
};

const links = [
  { label: "Home", href: "/", description: "Back to the starting point." },
  { label: "Services", href: "/services", description: "Explore what we do." },
  { label: "Our Work", href: "/portfolio", description: "Browse selected projects." },
  { label: "Contact", href: "/contact", description: "Start a conversation." },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-forest-deep pb-20 pt-32 text-paper md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06]" aria-hidden="true" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Eyebrow tone="dark">404 — Page not found</Eyebrow>
            <p className="mt-6 font-display text-[clamp(5rem,16vw,11rem)] font-semibold leading-[0.8] tracking-[-0.04em] text-paper/10">
              404
            </p>
            <h1 className="-mt-2 font-display text-[clamp(2.3rem,5.5vw,4.3rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
              This page took a <span className="italic text-coral">different path.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/55">
              The page you were looking for may have moved, changed, or never existed. Let&apos;s get
              you back to somewhere useful.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/" variant="primary" size="lg">
                <ArrowLeft className="size-4" aria-hidden="true" />
                Back to Home
              </Button>
              <Button href="/contact" variant="outline-light" size="lg" arrow>
                Contact Us
              </Button>
            </div>
          </div>

          <div className="border border-paper/15 p-4 sm:p-6">
            <p className="px-2 text-[0.5625rem] font-semibold uppercase tracking-[0.2em] text-paper/40">
              Popular destinations
            </p>
            <ul className="mt-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between gap-4 border-b border-paper/10 px-2 py-3.5 transition-colors last:border-b-0 hover:bg-paper/5"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-paper/80 group-hover:text-paper">
                        {link.label}
                      </span>
                      <span className="block text-xs text-paper/35">{link.description}</span>
                    </span>
                    <ArrowUpRight className="size-4 text-paper/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
