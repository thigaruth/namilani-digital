"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "motion/react";
import { ChevronDown, Menu } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";
import { primaryNav } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const solid = scrolled || mobileOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          solid
            ? "border-b border-ink/10 bg-paper/95 text-forest backdrop-blur-md"
            : "border-b border-transparent bg-transparent text-paper",
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <Link href="/" aria-label="Namilani Digital home" className="shrink-0">
            <Logo priority size="md" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {primaryNav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              const children = "children" in item ? item.children : undefined;

              if (children) {
                return (
                  <div
                    key={item.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={cn(
                          "relative flex items-center py-2 text-sm font-medium transition-colors",
                          solid
                            ? active
                              ? "text-forest"
                              : "text-forest/60 hover:text-forest"
                            : active
                              ? "text-paper"
                              : "text-paper/60 hover:text-paper",
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.label}
                        {active ? (
                          <span
                            className="absolute -bottom-0.5 left-0 right-0 h-px bg-coral"
                            aria-hidden="true"
                          />
                        ) : null}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={servicesOpen}
                        aria-controls="services-dropdown"
                        aria-label={servicesOpen ? "Close services menu" : "Open services menu"}
                        onClick={() => setServicesOpen((value) => !value)}
                        className={cn(
                          "ml-1 inline-flex size-5 items-center justify-center transition-colors",
                          solid ? "hover:text-coral-ink" : "hover:text-coral",
                        )}
                      >
                        <ChevronDown
                          className={cn("size-3.5 transition-transform duration-300", servicesOpen && "rotate-180")}
                          aria-hidden="true"
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {servicesOpen ? (
                        <m.div
                          id="services-dropdown"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-1/2 top-full w-[21rem] -translate-x-1/2 pt-5"
                        >
                          <div className="overflow-hidden border border-ink/10 bg-paper text-forest shadow-soft">
                            <ul>
                              {children.map((child) => (
                                <li key={child.href} className="border-b border-ink/8 last:border-b-0">
                                  <Link
                                    href={child.href}
                                    onClick={() => setServicesOpen(false)}
                                    className={cn(
                                      "group flex items-center justify-between gap-3 px-4 py-3 text-sm transition-colors hover:bg-sand/60",
                                      pathname === child.href ? "text-coral-ink" : "text-forest/75",
                                    )}
                                  >
                                    <span>{child.label}</span>
                                    <span className="text-forest/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-coral-ink">
                                      →
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <Link
                              href="/services"
                              onClick={() => setServicesOpen(false)}
                              className="flex items-center justify-between bg-forest px-4 py-3 text-sm font-medium text-paper transition-colors hover:bg-forest-deep"
                            >
                              View all services
                              <span aria-hidden="true">↗</span>
                            </Link>
                          </div>
                        </m.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-2 text-sm font-medium transition-colors",
                    solid
                      ? active
                        ? "text-forest"
                        : "text-forest/60 hover:text-forest"
                      : active
                        ? "text-paper"
                        : "text-paper/60 hover:text-paper",
                  )}
                >
                  {item.label}
                  {active ? (
                    <span
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-coral"
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <Button href="/contact" variant="primary" size="sm" className="hidden md:inline-flex" arrow>
              Get a Quote
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className={cn(
                "inline-flex size-11 items-center justify-center border transition-colors lg:hidden",
                solid
                  ? "border-ink/15 text-forest hover:bg-ink/5"
                  : "border-paper/25 text-paper hover:bg-paper/10",
              )}
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu">
        <MobileMenu open={mobileOpen} onClose={closeMobile} pathname={pathname} />
      </div>
    </>
  );
}
