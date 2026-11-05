import { cn } from "@/lib/utils";
import type { ServiceAccent } from "@/lib/services";

const accentRule: Record<ServiceAccent, string> = {
  coral: "border-t-coral",
  teal: "border-t-teal",
  orange: "border-t-orange",
};

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
  return (
    <div
      className={cn(
        "flex h-full flex-col border-t-2 bg-paper-deep/40 p-6 transition-colors duration-200 hover:bg-sand/50 sm:p-7",
        accentRule[accent],
        className,
      )}
    >
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-muted">
          {label}
        </p>
        {featured ? (
          <span className="text-[0.5625rem] font-semibold uppercase tracking-[0.18em] text-coral-ink">
            Popular
          </span>
        ) : null}
      </div>
      <p className="mt-4 font-display text-[1.7rem] font-semibold leading-tight tracking-[-0.02em] text-forest sm:text-3xl">
        {price}
      </p>
      {note ? <p className="mt-3 text-sm leading-relaxed text-muted">{note}</p> : null}
    </div>
  );
}
