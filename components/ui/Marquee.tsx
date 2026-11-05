import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  tone = "dark",
}: {
  items: string[];
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "mask-fade-x relative flex overflow-hidden py-4",
        className,
      )}
      aria-label={items.join(", ")}
    >
      <div className="animate-marquee flex w-max shrink-0 items-center gap-0">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {items.map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center">
                <span
                  className={cn(
                    "whitespace-nowrap px-5 text-[0.6875rem] font-bold uppercase tracking-[0.2em] sm:text-xs",
                    tone === "dark" ? "text-paper/50" : "text-muted",
                  )}
                >
                  {item}
                </span>
                <span
                  className={cn(
                    "size-1 rounded-full",
                    tone === "dark" ? "bg-coral" : "bg-teal",
                  )}
                  aria-hidden="true"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
