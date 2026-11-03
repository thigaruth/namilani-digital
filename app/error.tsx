"use client";

import { useEffect } from "react";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative overflow-hidden bg-navy-deep pb-24 pt-32 text-white md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-10 size-80 rounded-full bg-coral/20 blur-[110px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-teal/15 blur-[110px]" aria-hidden="true" />

      <Container className="relative">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-lift backdrop-blur-sm sm:p-10">
          <span className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-coral/15 text-coral">
            <AlertCircle className="size-7" aria-hidden="true" />
          </span>
          <h1 className="mt-6 font-display text-3xl font-extrabold tracking-[-0.04em] text-white">
            Something went wrong.
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-white/55">
            We hit an unexpected error while loading this page. You can try again or return to a
            familiar place.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button type="button" onClick={reset} variant="primary" size="md">
              Try again
            </Button>
            <Button href="/" variant="outline-light" size="md">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
