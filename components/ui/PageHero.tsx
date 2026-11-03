import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { TextReveal } from "@/components/animations/TextReveal";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
  image?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  className,
  titleClassName,
  image = "/hero/about-hero.jpg",
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-navy-deep pt-32 text-white md:pt-40", className)}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/85 via-navy-deep/75 to-navy-deep/90" />
        <div className="absolute inset-0 bg-navy-deep/40" />
      </div>
      
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-25" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-12 size-[26rem] rounded-full bg-coral/30 blur-[120px] animate-pulse"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 size-[24rem] rounded-full bg-teal/25 blur-[120px] animate-pulse"
        aria-hidden="true"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="pointer-events-none absolute right-[18%] top-1/2 hidden size-40 rounded-full border border-white/15 lg:block animate-spin"
        style={{ animationDuration: '20s' }}
        aria-hidden="true"
      >
        <span className="absolute inset-8 rounded-full border border-white/15" />
        <span className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange shadow-[0_0_20px_4px_rgba(255,110,66,0.6)]" />
      </div>
      
      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute size-1 rounded-full bg-white/40 animate-float-slow"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + i}s`
            }}
          />
        ))}
      </div>

      <Container className="relative pb-16 md:pb-24">
        <div className="max-w-5xl">
          {breadcrumbs ? (
            <div className="mb-8">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          ) : null}
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1
            className={cn(
              "mt-5 font-display text-[clamp(2.65rem,6vw,5.4rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-white drop-shadow-2xl",
              titleClassName,
            )}
          >
            <TextReveal text={title} delay={0.08} />
          </h1>
          <div className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg drop-shadow-lg">
            {description}
          </div>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
