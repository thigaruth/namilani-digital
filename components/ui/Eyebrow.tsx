import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.24em]",
        tone === "dark" ? "text-paper/60" : "text-muted",
        className,
      )}
    >
      <span className="h-px w-7 bg-coral" aria-hidden="true" />
      {children}
    </span>
  );
}
