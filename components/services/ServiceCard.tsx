import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";
import { accentStyles } from "@/lib/accents";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  index,
  className,
  featured = false,
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
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy/15 hover:shadow-lift sm:p-7",
        className,
      )}
    >
      <span
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
          styles.dot,
        )}
        aria-hidden="true"
      />
      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            "inline-flex size-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105",
            styles.soft,
            styles.text,
          )}
        >
          <ServiceIcon name={service.icon} />
        </span>
        <span className="font-display text-xs font-bold tracking-[0.18em] text-navy/25">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3
        className={cn(
          "mt-6 font-display font-extrabold leading-[1.12] tracking-[-0.035em] text-navy",
          featured ? "text-[1.45rem] sm:text-[1.7rem]" : "text-[1.25rem] sm:text-[1.35rem]",
        )}
      >
        {service.cardTitle}
      </h3>
      <p className={cn("mt-3 flex-1 leading-relaxed text-muted", featured ? "text-sm sm:text-[0.9375rem]" : "text-sm")}>
        {service.cardDescription}
      </p>

      <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-navy">
        Explore
        <ArrowUpRight
          className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
