"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Check, Loader2, Send } from "lucide-react";
import {
  budgetOptions,
  contactFormSchema,
  serviceOptions,
  timelineOptions,
  type ContactFormValues,
} from "@/lib/validation";
import { mailtoHref, whatsappMessageHref } from "@/lib/site";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full border border-ink/15 bg-paper px-3.5 py-3 text-sm text-forest outline-none transition-colors placeholder:text-forest/30 focus:border-teal focus:ring-2 focus:ring-teal/15 aria-[invalid=true]:border-coral-ink";

const labelClass =
  "mb-1.5 block text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-forest/70";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 flex items-center gap-1 text-[0.6875rem] font-medium text-coral-ink">
      <AlertCircle className="size-3 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [startedAt] = useState(() => Date.now());

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      service: "" as ContactFormValues["service"],
      budget: "" as ContactFormValues["budget"],
      timeline: "" as ContactFormValues["timeline"],
      message: "",
      consent: false,
      website: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          startedAt,
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        fieldErrors?: Record<string, string>;
      };

      if (!response.ok || !data.ok) {
        if (data.fieldErrors) {
          for (const [field, message] of Object.entries(data.fieldErrors)) {
            if (field in values) {
              setError(field as keyof ContactFormValues, { message });
            }
          }
        }
        setServerMessage(
          data.message ||
            "We couldn't send your enquiry right now. Please try again or contact us directly.",
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setServerMessage(
        "We couldn't reach the server. Please check your connection or contact us directly by email or WhatsApp.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-ink/12 bg-paper p-7 sm:p-9">
        <span className="inline-flex size-14 items-center justify-center border border-teal/30 bg-teal/10 text-teal-ink">
          <Check className="size-7" strokeWidth={2.5} aria-hidden="true" />
        </span>
        <h2 className="mt-6 font-display text-2xl font-semibold tracking-[-0.015em] text-forest">
          Your enquiry has been sent.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Thank you for reaching out to Namilani Digital. We&apos;ll review your message and get back
          to you using the contact details you provided.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex min-h-11 items-center justify-center bg-forest px-5 text-sm font-semibold text-paper transition hover:bg-forest-deep"
          >
            Send another enquiry
          </button>
          <a
            href={whatsappMessageHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center border border-ink/20 px-5 text-sm font-semibold text-forest transition hover:border-ink/40"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="border border-ink/12 bg-paper p-5 sm:p-7 lg:p-8"
    >
      <div className="mb-6">
        <h2 className="font-display text-xl font-semibold tracking-[-0.015em] text-forest">
          Tell us about your project
        </h2>
        <p className="mt-1.5 text-xs leading-relaxed text-muted">
          Fields marked with <span className="text-coral-ink">*</span> are required.
        </p>
      </div>

      {status === "error" && serverMessage ? (
        <div
          role="alert"
          className="mb-5 border border-coral-ink/25 bg-coral/10 p-4 text-xs leading-relaxed text-forest"
        >
          <p className="flex items-start gap-2 font-medium">
            <AlertCircle className="mt-0.5 size-4 shrink-0 text-coral-ink" aria-hidden="true" />
            {serverMessage}
          </p>
          <p className="mt-2 pl-6 text-forest/60">
            You can also email{" "}
            <a href={mailtoHref} className="font-semibold text-teal-ink underline underline-offset-2">
              info@namilanidigital.com
            </a>{" "}
            or{" "}
            <a
              href={whatsappMessageHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-ink underline underline-offset-2"
            >
              message us on WhatsApp
            </a>
            .
          </p>
        </div>
      ) : null}

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span className="text-coral-ink">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          <FieldError id="fullName-error" message={errors.fullName?.message} />
        </div>

        <div>
          <label htmlFor="businessName" className={labelClass}>
            Business Name
          </label>
          <input
            id="businessName"
            type="text"
            autoComplete="organization"
            placeholder="Your business"
            className={inputClass}
            aria-invalid={Boolean(errors.businessName)}
            aria-describedby={errors.businessName ? "businessName-error" : undefined}
            {...register("businessName")}
          />
          <FieldError id="businessName-error" message={errors.businessName?.message} />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-coral-ink">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-coral-ink">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="07XX XXX XXX"
            className={inputClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          <FieldError id="phone-error" message={errors.phone?.message} />
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Service Required <span className="text-coral-ink">*</span>
          </label>
          <select
            id="service"
            className={cn(inputClass, "appearance-none")}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            {...register("service")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError id="service-error" message={errors.service?.message} />
        </div>

        <div>
          <label htmlFor="budget" className={labelClass}>
            Estimated Budget <span className="text-coral-ink">*</span>
          </label>
          <select
            id="budget"
            className={cn(inputClass, "appearance-none")}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "budget-error" : undefined}
            {...register("budget")}
          >
            <option value="" disabled>
              Select a budget range
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError id="budget-error" message={errors.budget?.message} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="timeline" className={labelClass}>
            Preferred Project Timeline <span className="text-coral-ink">*</span>
          </label>
          <select
            id="timeline"
            className={cn(inputClass, "appearance-none")}
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby={errors.timeline ? "timeline-error" : undefined}
            {...register("timeline")}
          >
            <option value="" disabled>
              Select a timeline
            </option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError id="timeline-error" message={errors.timeline?.message} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Tell Us About Your Project <span className="text-coral-ink">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="What are you trying to achieve? Share any useful context, requirements, or links."
            className={cn(inputClass, "resize-y")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          <FieldError id="message-error" message={errors.message?.message} />
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            className="mt-0.5 size-4 shrink-0 border-ink/25 accent-teal"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            {...register("consent")}
          />
          <label htmlFor="consent" className="text-xs leading-relaxed text-muted">
            I agree that Namilani Digital may use the information provided to respond to my enquiry
            in accordance with the{" "}
            <Link href="/privacy-policy" className="font-semibold text-teal-ink underline underline-offset-2">
              Privacy Policy
            </Link>
            . <span className="text-coral-ink">*</span>
          </label>
        </div>
        <FieldError id="consent-error" message={errors.consent?.message} />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-6 inline-flex min-h-13 w-full items-center justify-center gap-2 bg-coral px-6 text-sm font-semibold text-ink transition-colors hover:bg-coral-strong disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending your enquiry…
          </>
        ) : (
          <>
            Send My Enquiry
            <Send className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </>
        )}
      </button>

      <p className="mt-4 text-[0.6875rem] leading-relaxed text-muted">
        By submitting this form, you agree that we may use the information provided to respond to
        your enquiry in accordance with our Privacy Policy. We do not sell your information.
      </p>
    </form>
  );
}
