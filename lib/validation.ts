import { z } from "zod";

export const serviceOptions = [
  "Website Design & Development",
  "SEO Services",
  "Social Media Management",
  "Graphic Design & Branding",
  "Web Hosting & Domain Services",
  "Multiple Services",
  "Other",
] as const;

export const budgetOptions = [
  "Below KES 10,000",
  "KES 10,000–25,000",
  "KES 25,001–50,000",
  "KES 50,001–100,000",
  "Above KES 100,000",
  "Not Sure Yet",
] as const;

export const timelineOptions = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Flexible / Not sure",
] as const;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Please use 100 characters or fewer."),
  businessName: z
    .string()
    .trim()
    .max(120, "Please use 120 characters or fewer.")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address.")
    .max(160, "Please use 160 characters or fewer."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number we can reach you on.")
    .max(30, "Please use 30 characters or fewer.")
    .regex(/^[+()\d\s-]+$/, "Please enter a valid phone number."),
  service: z.enum(serviceOptions, {
    message: "Please select the service you need.",
  }),
  budget: z.enum(budgetOptions, {
    message: "Please select an estimated budget.",
  }),
  timeline: z.enum(timelineOptions, {
    message: "Please select a preferred timeline.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more about your project.")
    .max(2000, "Please use 2,000 characters or fewer."),
  consent: z.boolean().refine((value) => value === true, {
    message: "Please confirm that we may use your details to respond.",
  }),
  website: z.string().max(0).optional(),
  startedAt: z.number().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
