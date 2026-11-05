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
    <section
      className={cn(
        "relative overflow-hidden bg-forest-deep pt-28 text-paper md:pt-36",
        className,
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/88 to-forest-deep/55" />
        <div className="absolute inset-0 bg-forest-deep/30" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05]" aria-hidden="true" />

      <Container className="relative pb-16 md:pb-24">
        <div className="max-w-4xl">
          {breadcrumbs ? (
            <div className="mb-8">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          ) : null}
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1
            className={cn(
              "mt-5 font-display text-[clamp(2.5rem,5.6vw,4.9rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-paper",
              titleClassName,
            )}
          >
            <TextReveal text={title} delay={0.08} />
          </h1>
          <div className="mt-6 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">
            {description}
          </div>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-paper/25 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
