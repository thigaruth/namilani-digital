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
        "inline-flex items-center gap-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.22em]",
        tone === "dark" ? "text-white/65" : "text-muted",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-teal" aria-hidden="true" />
      {children}
    </span>
  );
}
