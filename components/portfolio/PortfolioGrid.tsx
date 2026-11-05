"use client";

import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { projectCategories, projects, type ProjectCategory } from "@/lib/projects";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

export function PortfolioGrid() {
  const [active, setActive] = useState<Filter>("All");
  const filtered = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <div>
      <div
        className="flex gap-2 overflow-x-auto border-b border-ink/12 pb-4"
        role="group"
        aria-label="Filter projects by category"
      >
        {projectCategories.map((category) => {
          const selected = active === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={selected}
              className={cn(
                "shrink-0 border px-4 py-2 text-[0.625rem] font-semibold uppercase tracking-[0.14em] transition-colors",
                selected
                  ? "border-forest bg-forest text-paper"
                  : "border-ink/15 text-forest/60 hover:border-forest/40 hover:text-forest",
              )}
            >
              {category}
              <span className={cn("ml-2 text-[0.5625rem]", selected ? "text-paper/50" : "text-muted/50")}>
                {category === "All"
                  ? projects.length
                  : projects.filter((project) => project.category === category).length}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false}>
          {filtered.map((project, index) => (
            <m.div
              key={project.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.28, delay: index * 0.025, ease: [0.22, 1, 0.36, 1] }}
            >
              <PortfolioCard project={project} />
            </m.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-sm text-muted">
          No projects in this category yet. Please check back soon.
        </p>
      ) : null}

      <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted">
        Project previews are supplied mockups. Verified screenshots, case-study details, and live
        links will be added as they are approved.
      </p>
    </div>
  );
}
