import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";
import { accentStyles } from "@/lib/accents";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  index,
  className,
}: {
  service: Service;
  index: number;
  className?: string;
  featured?: boolean;
}) {
  const styles = accentStyles[service.accent];

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group grid items-start gap-4 border-b border-ink/12 py-7 transition-colors hover:bg-paper-deep/40 sm:grid-cols-[2.5rem_1fr_auto] lg:grid-cols-[3rem_1fr_17rem_auto] lg:items-center",
        className,
      )}
    >
      <span className="font-display text-sm text-muted/70">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div>
        <p className={cn("text-[0.625rem] font-semibold uppercase tracking-[0.18em]", styles.text)}>
          {service.name}
        </p>
        <h3 className="mt-1.5 font-display text-[1.55rem] font-semibold leading-tight tracking-[-0.015em] text-forest transition-colors group-hover:text-coral-ink sm:text-[1.75rem]">
          {service.cardTitle}
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted lg:hidden">
          {service.cardDescription}
        </p>
      </div>

      <p className="hidden max-w-xs text-sm leading-relaxed text-muted lg:block">
        {service.cardDescription}
      </p>

      <span
        className="inline-flex size-11 items-center justify-center border border-ink/15 text-forest transition-colors group-hover:border-forest group-hover:bg-forest group-hover:text-paper"
        aria-hidden="true"
      >
        <ArrowUpRight className="size-4" />
      </span>
    </Link>
  );
}
