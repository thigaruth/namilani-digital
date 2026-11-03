import { cn } from "@/lib/utils";

const tones = {
  coral: "bg-coral/15 text-coral-ink ring-coral/25",
  teal: "bg-teal/15 text-teal-ink ring-teal/25",
  orange: "bg-orange/15 text-orange-ink ring-orange/30",
  navy: "bg-navy/8 text-navy ring-navy/15",
  light: "bg-white/10 text-white ring-white/20",
} as const;

export function Badge({
  children,
  tone = "navy",
  className,
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.13em] ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
