"use client";

import { m } from "motion/react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { TextReveal } from "@/components/animations/TextReveal";
import { homeServiceLine } from "@/lib/services";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-deep text-paper">
      <div className="absolute inset-0">
        <Image
          src="/hero/home-hero.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/88 to-forest-deep/35" />
        <div className="absolute inset-0 bg-forest-deep/20" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-y-0 right-[16%] hidden w-px bg-paper/15 lg:block"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-end gap-12 pb-14 pt-28 md:pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:pb-20">
          <div>
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-paper/50"
            >
              <span className="h-px w-7 bg-coral" aria-hidden="true" />
              Digital growth partner · Kenya
            </m.div>

            <h1 className="mt-7 font-display text-[clamp(2.6rem,6vw,5.1rem)] font-semibold leading-[0.98] tracking-[-0.02em]">
              <TextReveal text="Your Business" className="block" delay={0.06} />
              <TextReveal
                text="Deserves More"
                className="block italic text-coral"
                delay={0.2}
              />
              <TextReveal
                text="Than an Online Presence."
                className="block text-paper/90"
                delay={0.34}
              />
            </h1>

            <m.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl space-y-3 text-sm leading-relaxed text-paper/65 sm:text-base"
            >
              <p>
                We build digital experiences that help businesses stand out, connect with their
                audiences, and grow with confidence.
              </p>
              <p className="text-paper/45">
                From professional websites to strategic digital marketing, Namilani Digital helps
                turn your business goals into digital opportunities.
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Button href="/contact" variant="primary" size="lg" arrow>
                Start Your Project
              </Button>
              <Button href="/services" variant="outline-light" size="lg">
                Explore Our Services
              </Button>
            </m.div>
          </div>

          <m.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="ml-auto max-w-xs border-l border-paper/20 pl-6">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-paper/40">
                Working across
              </p>
              <ul className="mt-5">
                {homeServiceLine.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-baseline justify-between gap-4 border-b border-paper/12 py-2.5"
                  >
                    <span className="text-[0.5625rem] font-medium tracking-[0.18em] text-paper/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-right text-sm text-paper/75">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-paper/40">
                <span className="h-px flex-1 bg-paper/20" aria-hidden="true" />
                Nairobi · Kenya
              </div>
            </div>
          </m.div>
        </div>
      </Container>

      <div className="relative border-t border-paper/15">
        <Container>
          <Marquee items={homeServiceLine} />
        </Container>
      </div>
    </section>
  );
}
