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
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          solid
            ? "border-b border-navy/8 bg-white/95 text-navy shadow-[0_8px_30px_-24px_rgba(23,36,58,0.5)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent text-white",
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <Link href="/" aria-label="Namilani Digital home" className="shrink-0">
            <div className="rounded-lg bg-white/95 p-1 shadow-lg">
              <Logo priority size="md" />
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
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
                          "relative flex items-center py-2 text-sm font-semibold transition-colors",
                          solid
                            ? active
                              ? "text-navy"
                              : "text-navy/65 hover:text-navy"
                            : active
                              ? "text-white"
                              : "text-white/65 hover:text-white",
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.label}
                        {active ? (
                          <span
                            className="absolute -bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-coral"
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
                          "ml-1 inline-flex size-6 items-center justify-center rounded-full transition-colors",
                          solid ? "hover:bg-navy/5" : "hover:bg-white/10",
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
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-4"
                        >
                          <div className="overflow-hidden rounded-3xl border border-navy/8 bg-white p-2.5 text-navy shadow-lift">
                            <ul>
                              {children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setServicesOpen(false)}
                                    className={cn(
                                      "group flex items-center justify-between gap-3 rounded-2xl px-3.5 py-3 text-sm font-medium transition-colors hover:bg-mist",
                                      pathname === child.href ? "bg-mist text-navy" : "text-navy/75",
                                    )}
                                  >
                                    <span className="flex items-center gap-2.5">
                                      <span
                                        className="size-1.5 rounded-full bg-teal transition-transform group-hover:scale-150"
                                        aria-hidden="true"
                                      />
                                      {child.label}
                                    </span>
                                    <span className="text-navy/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-coral-ink">
                                      →
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <Link
                              href="/services"
                              onClick={() => setServicesOpen(false)}
                              className="mt-1.5 flex items-center justify-between rounded-2xl bg-navy px-3.5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
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
                    "relative py-2 text-sm font-semibold transition-colors",
                    solid
                      ? active
                        ? "text-navy"
                        : "text-navy/65 hover:text-navy"
                      : active
                        ? "text-white"
                        : "text-white/65 hover:text-white",
                  )}
                >
                  {item.label}
                  {active ? (
                    <span
                      className="absolute -bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-coral"
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
                "inline-flex size-11 items-center justify-center rounded-full border transition-colors lg:hidden",
                solid
                  ? "border-navy/15 text-navy hover:bg-navy/5"
                  : "border-white/20 text-white hover:bg-white/10",
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
