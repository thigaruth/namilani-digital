import Image from "next/image";
import { cn, initials } from "@/lib/utils";
import type { Project } from "@/lib/projects";

const gradients = {
  coral: "from-coral via-coral/80 to-clay/60",
  teal: "from-teal via-teal/80 to-forest/60",
  orange: "from-orange via-orange/80 to-coral/45",
  navy: "from-forest via-forest/85 to-teal/50",
} as const;

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
        "relative overflow-hidden border border-ink/10 bg-paper-deep",
        large ? "aspect-[16/10]" : "aspect-[4/3]",
        className,
      )}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.name} project preview`}
          fill
          className="object-cover object-top"
          sizes={
            large
              ? "(max-width: 1024px) 100vw, 1100px"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
        />
      ) : (
        <div
          className={cn(
            "flex h-full flex-col justify-between bg-gradient-to-br p-6",
            gradients[project.accent],
          )}
        >
          <span className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-paper/70">
            {project.category}
          </span>
          <div>
            <span className="font-display text-5xl font-semibold text-paper">
              {initials(project.name)}
            </span>
            <p className="mt-3 max-w-[80%] font-display text-xl font-semibold text-paper/90">
              {project.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
