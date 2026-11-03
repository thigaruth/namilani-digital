import { cn, initials } from "@/lib/utils";
import type { Project } from "@/lib/projects";

const gradients = {
  coral: "from-coral via-coral/75 to-orange/35",
  teal: "from-teal via-teal/70 to-navy/30",
  orange: "from-orange via-orange/70 to-coral/35",
  navy: "from-navy via-navy/85 to-teal/35",
} as const;

function Pattern({ pattern }: { pattern: Project["pattern"] }) {
  if (pattern === "orbit") {
    return (
      <div className="absolute inset-0" aria-hidden="true">
        <span className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25" />
        <span className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
        <span className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <span className="absolute left-[62%] top-[30%] size-4 rounded-full bg-white/80" />
      </div>
    );
  }

  if (pattern === "grid") {
    return <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />;
  }

  if (pattern === "wave") {
    return (
      <svg className="absolute inset-x-0 bottom-0 h-1/2 w-full text-white/20" viewBox="0 0 400 160" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 100C70 20 130 20 200 100s130 80 200 0v60H0Z" fill="currentColor" />
        <path d="M0 130C70 50 130 50 200 130s130 80 200 0v30H0Z" fill="currentColor" opacity=".5" />
      </svg>
    );
  }

  if (pattern === "stack") {
    return (
      <div className="absolute inset-0" aria-hidden="true">
        <span className="absolute left-[18%] top-[28%] h-24 w-48 rotate-[-7deg] rounded-2xl border border-white/20 bg-white/8" />
        <span className="absolute left-[26%] top-[38%] h-24 w-48 rotate-[4deg] rounded-2xl border border-white/20 bg-white/8" />
      </div>
    );
  }

  if (pattern === "rays") {
    return (
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <span
            key={index}
            className="absolute -bottom-20 left-1/2 h-[140%] w-px origin-bottom bg-white"
            style={{ transform: `rotate(${-60 + index * 24}deg)` }}
          />
        ))}
      </div>
    );
  }

  if (pattern === "blocks") {
    return (
      <div className="absolute inset-0 grid grid-cols-3 gap-2 p-6 opacity-25" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <span key={index} className="rounded-lg border border-white/40" />
        ))}
      </div>
    );
  }

  if (pattern === "rings") {
    return (
      <div className="absolute inset-0" aria-hidden="true">
        {[72, 120, 168, 216].map((size, index) => (
          <span
            key={size}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
            style={{ width: size, height: size, opacity: 1 - index * 0.18 }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="absolute inset-x-8 bottom-8 flex items-end gap-2 opacity-30" aria-hidden="true">
      {[38, 58, 82, 112, 146].map((height, index) => (
        <span
          key={height}
          className="flex-1 rounded-t-lg bg-white"
          style={{ height, opacity: 0.35 + index * 0.12 }}
        />
      ))}
    </div>
  );
}

export function ProjectVisual({
  project,
  className,
  large = false,
}: {
  project: Project;
  className?: string;
  large?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/15 bg-navy-deep shadow-soft",
        large ? "aspect-[16/9]" : "aspect-[4/3]",
        className,
      )}
    >
      <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-white/8 px-4">
        <span className="size-2 rounded-full bg-coral" aria-hidden="true" />
        <span className="size-2 rounded-full bg-orange" aria-hidden="true" />
        <span className="size-2 rounded-full bg-teal" aria-hidden="true" />
        <span className="ml-2 flex-1 rounded-full bg-white/8 px-3 py-0.5 text-[0.55rem] font-medium tracking-wide text-white/40">
          namilanidigital.com/work/{project.slug}
        </span>
      </div>

      <div className={cn("relative h-[calc(100%-2.25rem)] bg-gradient-to-br", gradients[project.accent])}>
        <div className="absolute inset-0 bg-navy/10" aria-hidden="true" />
        <Pattern pattern={project.pattern} />

        <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 text-[0.55rem] font-bold uppercase tracking-[0.18em] text-white/70">
              <span className="size-1.5 rounded-full bg-white" aria-hidden="true" />
              {project.category}
            </span>
            <span className="rounded-full border border-white/25 bg-navy/20 px-2.5 py-1 text-[0.5rem] font-bold uppercase tracking-[0.15em] text-white/80">
              Preview
            </span>
          </div>

          <div>
            <span className="mb-3 inline-flex size-12 items-center justify-center rounded-2xl border border-white/25 bg-white/12 font-display text-base font-extrabold text-white backdrop-blur-sm">
              {initials(project.name)}
            </span>
            <p className="max-w-[85%] font-display text-xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-2xl">
              {project.name}
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white/65">
              Placeholder visual
              <span aria-hidden="true">↗</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
