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
    <section className="relative overflow-hidden bg-navy-deep pb-20 pt-32 text-white md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-16 size-96 rounded-full bg-coral/20 blur-[110px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-96 rounded-full bg-teal/15 blur-[110px]" aria-hidden="true" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Eyebrow tone="dark">404 — Page not found</Eyebrow>
            <p className="mt-6 font-display text-[clamp(5rem,16vw,11rem)] font-extrabold leading-[0.8] tracking-[-0.07em] text-white/10">
              404
            </p>
            <h1 className="-mt-4 font-display text-[clamp(2.3rem,5.5vw,4.3rem)] font-extrabold leading-[1.02] tracking-[-0.05em]">
              This page took a <span className="text-coral">different path.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/55">
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

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-6">
            <p className="px-2 text-[0.625rem] font-bold uppercase tracking-[0.18em] text-white/40">
              Popular destinations
            </p>
            <ul className="mt-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between gap-4 rounded-2xl px-3 py-3.5 transition-colors hover:bg-white/5"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-white/80 group-hover:text-white">
                        {link.label}
                      </span>
                      <span className="block text-xs text-white/35">{link.description}</span>
                    </span>
                    <ArrowUpRight className="size-4 text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal" aria-hidden="true" />
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
