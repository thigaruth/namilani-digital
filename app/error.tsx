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
    <section className="relative overflow-hidden bg-forest-deep pb-24 pt-32 text-paper md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06]" aria-hidden="true" />

      <Container className="relative">
        <div className="mx-auto max-w-xl border border-paper/15 p-8 text-center sm:p-10">
          <span className="mx-auto inline-flex size-14 items-center justify-center border border-coral/30 bg-coral/10 text-coral">
            <AlertCircle className="size-7" aria-hidden="true" />
          </span>
          <h1 className="mt-6 font-display text-3xl font-semibold tracking-[-0.02em] text-paper">
            Something went wrong.
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-paper/55">
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
