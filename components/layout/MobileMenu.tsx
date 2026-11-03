"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, m } from "motion/react";
import { ArrowUpRight, Mail, MessageCircle, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { SiteContact } from "@/components/layout/SiteContact";
import { cn } from "@/lib/utils";
import { mailtoHref, primaryNav, telHref, whatsappMessageHref } from "@/lib/site";

export function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>("button, a")?.focus();
    }, 120);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <m.div
          className="fixed inset-0 z-[70] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-navy-deep/60 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={onClose}
            tabIndex={-1}
          />
          <m.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute inset-y-0 right-0 flex h-full w-full max-w-md flex-col overflow-y-auto bg-navy-deep text-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-24 top-0 size-72 rounded-full bg-coral/20 blur-[100px]" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-teal/15 blur-[100px]" aria-hidden="true" />

            <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-4">
              <Link href="/" onClick={onClose} aria-label="Namilani Digital home">
                <Logo size="sm" />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:text-white"
                aria-label="Close menu"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="relative flex-1 px-5 py-7" aria-label="Mobile navigation">
              <ul className="space-y-1">
                {primaryNav.map((item) => {
                  const active =
                    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  const children = "children" in item ? item.children : undefined;

                  return (
                    <li key={item.href}>
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={onClose}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "flex flex-1 items-center py-3 font-display text-2xl font-bold tracking-[-0.03em] transition-colors",
                            active ? "text-white" : "text-white/65 hover:text-white",
                          )}
                        >
                          {item.label}
                          {active ? (
                            <span className="ml-3 size-1.5 rounded-full bg-coral" aria-hidden="true" />
                          ) : null}
                        </Link>
                      </div>

                      {children ? (
                        <ul className="mb-2 ml-3 space-y-0.5 border-l border-white/10 pl-4">
                          {children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className={cn(
                                  "flex items-center gap-2 py-2 text-sm transition-colors",
                                  pathname === child.href
                                    ? "text-teal"
                                    : "text-white/50 hover:text-white/85",
                                )}
                              >
                                <span className="size-1 rounded-full bg-current" aria-hidden="true" />
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-7">
                <Button href="/contact" variant="primary" size="lg" className="w-full" onClick={onClose} arrow>
                  Get a Quote
                </Button>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-3 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-white/40">
                  Talk to us
                </p>
                <SiteContact variant="mobile" onNavigate={onClose} />
              </div>
            </nav>

            <div className="relative border-t border-white/10 px-5 py-5 text-xs text-white/40">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <a href={mailtoHref} className="inline-flex items-center gap-1.5 hover:text-white">
                  <Mail className="size-3.5" aria-hidden="true" /> Email
                </a>
                <a href={telHref} className="inline-flex items-center gap-1.5 hover:text-white">
                  <Phone className="size-3.5" aria-hidden="true" /> Call
                </a>
                <a
                  href={whatsappMessageHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white"
                >
                  <MessageCircle className="size-3.5" aria-hidden="true" /> WhatsApp
                </a>
                <Link href="/portfolio" onClick={onClose} className="inline-flex items-center gap-1 hover:text-white">
                  Our Work <ArrowUpRight className="size-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </m.div>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
