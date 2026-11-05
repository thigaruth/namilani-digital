import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ServiceAccent } from "@/lib/services";

const accentRule: Record<ServiceAccent, string> = {
  coral: "border-t-coral",
  teal: "border-t-teal",
  orange: "border-t-orange",
};

const accentText: Record<ServiceAccent, string> = {
  coral: "text-coral-ink",
  teal: "text-teal-ink",
  orange: "text-orange-ink",
};

export function PricingCard({
  label,
  price,
  note,
  accent = "coral",
  featured = false,
  index,
  image,
  imageAlt = "",
  href,
  className,
}: {
  label: string;
  price: string;
  note?: string;
  accent?: ServiceAccent;
  featured?: boolean;
  index?: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex h-full flex-col border border-t-2 transition-colors duration-200",
        accentRule[accent],
        featured
          ? "border-forest-deep bg-forest-deep text-paper hover:bg-forest-deep/95"
          : "border-ink/10 bg-paper hover:border-ink/25 hover:bg-sand/30",
        className,
      )}
    >
      {image ? (
        <div
          className={cn(
            "relative aspect-[16/9] overflow-hidden border-b",
            featured ? "border-paper/15" : "border-ink/10",
          )}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {featured ? (
            <span className="absolute left-4 top-4 bg-coral px-2.5 py-1 text-[0.5625rem] font-semibold uppercase tracking-[0.18em] text-ink">
              Popular
            </span>
          ) : null}
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-baseline justify-between gap-3">
          <p
            className={cn(
              "text-[0.625rem] font-semibold uppercase tracking-[0.18em]",
              featured ? "text-paper/50" : "text-muted",
            )}
          >
            {label}
          </p>
          {!featured && index ? (
            <span className="text-[0.5625rem] font-medium tracking-[0.18em] text-muted/50">
              {index}
            </span>
          ) : null}
          {featured && !image ? (
            <span className={cn("text-[0.5625rem] font-semibold uppercase tracking-[0.18em]", accentText[accent])}>
              Popular
            </span>
          ) : null}
        </div>

        <p
          className={cn(
            "mt-4 font-display text-[1.7rem] font-semibold leading-tight tracking-[-0.02em] sm:text-3xl",
            featured ? "text-paper" : "text-forest",
          )}
        >
          {price}
        </p>
        {note ? (
          <p
            className={cn(
              "mt-3 text-sm leading-relaxed",
              featured ? "text-paper/55" : "text-muted",
            )}
          >
            {note}
          </p>
        ) : null}

        {href ? (
          <Link
            href={href}
            className={cn(
              "mt-auto inline-flex items-center gap-1.5 pt-6 text-[0.625rem] font-semibold uppercase tracking-[0.16em] transition-colors",
              featured ? "text-paper/65 hover:text-paper" : "text-forest/65 hover:text-coral-ink",
            )}
          >
            View service
            <ArrowUpRight
              className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        ) : null}
      </div>
    </div>
  );
}
