import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { accentStyles } from "@/lib/accents";
import type { ServiceAccent } from "@/lib/services";

export function PricingCard({
  label,
  price,
  note,
  accent = "coral",
  featured = false,
  className,
}: {
  label: string;
  price: string;
  note?: string;
  accent?: ServiceAccent;
  featured?: boolean;
  className?: string;
}) {
  const styles = accentStyles[accent];

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7",
        featured ? "border-navy/15 shadow-soft" : "border-navy/8",
        className,
      )}
    >
      <span
        className={cn("mb-5 inline-flex size-10 items-center justify-center rounded-xl", styles.soft, styles.text)}
        aria-hidden="true"
      >
        <Check className="size-5" strokeWidth={2.4} />
      </span>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{label}</p>
      <p className="mt-2 font-display text-2xl font-extrabold tracking-[-0.03em] text-navy sm:text-[1.7rem]">
        {price}
      </p>
      {note ? <p className="mt-3 text-sm leading-relaxed text-muted">{note}</p> : null}
    </div>
  );
}
