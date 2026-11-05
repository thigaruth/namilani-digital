import { cn } from "@/lib/utils";

const tones = {
  coral: "bg-coral/12 text-coral-ink ring-coral/25",
  teal: "bg-teal/10 text-teal-ink ring-teal/25",
  orange: "bg-orange/12 text-orange-ink ring-orange/25",
  navy: "bg-ink/6 text-forest ring-ink/12",
  light: "bg-paper/10 text-paper ring-paper/20",
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
        "inline-flex items-center gap-1.5 rounded-[2px] px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.16em] ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
