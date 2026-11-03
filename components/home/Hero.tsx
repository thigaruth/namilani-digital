"use client";

import { m } from "motion/react";
import { Check, Search, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { TextReveal } from "@/components/animations/TextReveal";
import { homeServiceLine } from "@/lib/services";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep pb-10 pt-28 text-white md:pb-14 md:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-10 size-[30rem] rounded-full bg-coral/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 size-[28rem] rounded-full bg-teal/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[46%] top-28 size-2 rounded-full bg-orange shadow-[0_0_30px_6px_rgba(255,110,66,0.5)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10">
          <div>
            <m.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[0.625rem] font-bold uppercase tracking-[0.19em] text-white/65"
            >
              <span className="relative inline-flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-teal" />
              </span>
              Digital growth partner · Kenya
            </m.div>

            <h1 className="mt-7 font-display text-[clamp(2.85rem,6.4vw,5.35rem)] font-extrabold leading-[0.97] tracking-[-0.055em]">
              <TextReveal text="Your Business" className="block" delay={0.08} />
              <TextReveal
                text="Deserves More"
                className="block text-gradient-warm"
                delay={0.26}
              />
              <TextReveal
                text="Than Just an Online Presence."
                className="block text-white/90"
                delay={0.42}
              />
            </h1>

            <m.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl space-y-3 text-sm leading-relaxed text-white/60 sm:text-base"
            >
              <p>
                We build digital experiences that help businesses stand out, connect with their
                audiences, and grow with confidence.
              </p>
              <p className="text-white/48">
                From professional websites to strategic digital marketing, Namilani Digital helps
                turn your business goals into digital opportunities.
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[540px] lg:max-w-none"
            aria-hidden="true"
          >
            <div className="absolute -inset-5 rotate-3 rounded-[2.5rem] border border-white/10" />
            <div className="absolute inset-6 rounded-full bg-teal/10 blur-[70px]" />

            <div className="animate-float-slow relative ml-auto w-[92%]">
              <div className="rounded-[1.7rem] border border-white/15 bg-white/10 p-2 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.8)] backdrop-blur-sm">
                <div className="overflow-hidden rounded-[1.25rem] bg-mist">
                  <div className="flex h-8 items-center gap-1.5 border-b border-navy/8 bg-white px-3.5">
                    <span className="size-1.5 rounded-full bg-coral" />
                    <span className="size-1.5 rounded-full bg-orange" />
                    <span className="size-1.5 rounded-full bg-teal" />
                    <span className="ml-2 rounded-full bg-mist px-2.5 py-0.5 text-[0.5rem] font-medium text-muted">
                      namilanidigital.com
                    </span>
                  </div>

                  <div className="bg-white p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-[0.55rem] font-extrabold tracking-[-0.02em] text-navy">
                        namilani<span className="text-teal">.</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="h-1 w-6 rounded-full bg-navy/15" />
                        <span className="h-1 w-4 rounded-full bg-navy/15" />
                        <span className="h-4 w-10 rounded-full bg-navy" />
                      </div>
                    </div>

                    <div className="relative mt-5 overflow-hidden rounded-2xl bg-navy p-5 sm:p-6">
                      <div className="absolute -right-8 -top-10 size-32 rounded-full bg-coral/40 blur-2xl" />
                      <div className="absolute -bottom-10 left-8 size-24 rounded-full bg-teal/30 blur-2xl" />
                      <div className="relative">
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-2 py-0.5 text-[0.42rem] font-bold uppercase tracking-[0.15em] text-white/60">
                          <Sparkles className="size-2" /> Digital agency
                        </span>
                        <p className="mt-2.5 font-display text-lg font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-xl">
                          Build.
                          <br />
                          Grow.
                          <br />
                          <span className="text-teal">Connect.</span>
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="rounded-full bg-coral px-2.5 py-1 text-[0.45rem] font-bold text-ink">
                            Start a project
                          </span>
                          <span className="rounded-full border border-white/15 px-2.5 py-1 text-[0.45rem] font-semibold text-white/60">
                            Our services
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {["Design", "Visibility", "Content"].map((label, index) => (
                        <div key={label} className="rounded-xl border border-navy/6 bg-mist p-2.5">
                          <span
                            className={`mb-2 block size-1.5 rounded-full ${
                              index === 0 ? "bg-coral" : index === 1 ? "bg-teal" : "bg-orange"
                            }`}
                          />
                          <p className="text-[0.45rem] font-bold text-navy">{label}</p>
                          <span className="mt-1 block h-1 w-3/4 rounded-full bg-navy/10" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <m.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="animate-float-slower absolute -left-1 top-[18%] hidden w-[9.5rem] rounded-2xl border border-navy/8 bg-white p-3 shadow-lift sm:block"
            >
              <span className="inline-flex size-7 items-center justify-center rounded-lg bg-teal/12 text-teal-ink">
                <Search className="size-3.5" />
              </span>
              <p className="mt-2 text-[0.55rem] font-bold uppercase tracking-[0.12em] text-navy">
                Search visibility
              </p>
              <div className="mt-2 space-y-1">
                <span className="block h-1 w-full rounded-full bg-teal/25" />
                <span className="block h-1 w-3/4 rounded-full bg-teal/25" />
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: 16, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
              className="animate-float-slow absolute -bottom-3 -left-2 w-[11rem] rounded-2xl border border-navy/8 bg-white p-3 shadow-lift sm:-left-6"
            >
              <div className="flex items-center justify-between">
                <p className="text-[0.55rem] font-bold uppercase tracking-[0.12em] text-navy">
                  Content plan
                </p>
                <span className="text-[0.45rem] font-bold text-coral-ink">Weekly</span>
              </div>
              <div className="mt-2 grid grid-cols-5 gap-1">
                {[0, 1, 2, 3, 4].map((index) => (
                  <span
                    key={index}
                    className={`h-5 rounded-md ${
                      index === 1 || index === 3
                        ? index === 1
                          ? "bg-coral"
                          : "bg-teal"
                        : "bg-navy/6"
                    }`}
                  />
                ))}
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
              className="animate-float-slower absolute -right-2 top-[64%] hidden w-[8.75rem] rounded-2xl border border-navy/8 bg-white p-3 shadow-lift sm:block"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-coral text-ink">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <p className="text-[0.5rem] font-bold uppercase tracking-[0.1em] text-navy">
                  Launch ready
                </p>
              </div>
              <p className="mt-1.5 text-[0.45rem] leading-relaxed text-muted">
                Design · Build · Launch
              </p>
            </m.div>
          </m.div>
        </div>

        <div className="mt-12 border-t border-white/10 md:mt-16">
          <Marquee items={homeServiceLine} />
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-navy-deep to-transparent" aria-hidden="true" />
    </section>
  );
}
