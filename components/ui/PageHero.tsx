import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { TextReveal } from "@/components/animations/TextReveal";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  className,
  titleClassName,
}: {
  eyebrow: string;
  title: string;
  description: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-navy-deep pt-32 text-white md:pt-40", className)}>
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-12 size-[26rem] rounded-full bg-coral/20 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 size-[24rem] rounded-full bg-teal/15 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[18%] top-1/2 hidden size-40 rounded-full border border-white/10 lg:block"
        aria-hidden="true"
      >
        <span className="absolute inset-8 rounded-full border border-white/10" />
        <span className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange" />
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
              "mt-5 font-display text-[clamp(2.65rem,6vw,5.4rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-white",
              titleClassName,
            )}
          >
            <TextReveal text={title} delay={0.08} />
          </h1>
          <div className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            {description}
          </div>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
