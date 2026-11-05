import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema, escapeHtml } from "@/lib/validation";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const buckets = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const existing = buckets.get(ip);

  if (!existing || now > existing.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (existing.count >= RATE_LIMIT) return true;
  existing.count += 1;
  return false;
}

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return (
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

function cleanHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "We couldn't read that request. Please try again." },
      { status: 400 },
    );
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json(
      { ok: false, message: "We couldn't read that request. Please try again." },
      { status: 400 },
    );
  }

  const raw = body as Record<string, unknown>;

  if (typeof raw.website === "string" && raw.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (typeof raw.startedAt === "number") {
    const elapsed = Date.now() - raw.startedAt;
    if (elapsed >= 0 && elapsed < 1500) {
      return NextResponse.json({ ok: true });
    }
  }

  const result = contactFormSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }

    return NextResponse.json(
      {
        ok: false,
        message: "Please check the highlighted fields and try again.",
        fieldErrors,
      },
      { status: 400 },
    );
  }

  const data = result.data;

  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Too many enquiries have been sent from this connection. Please wait a few minutes or contact us directly.",
      },
      { status: 429 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || `${site.name} <onboarding@resend.dev>`;

  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "The online enquiry form is not connected to an email service yet. Please email info@namilani.com or message us on WhatsApp.",
      },
      { status: 503 },
    );
  }

  const rows: Array<[string, string]> = [
    ["Full name", data.fullName],
    ["Business name", data.businessName || "Not provided"],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Service", data.service],
    ["Budget", data.budget],
    ["Timeline", data.timeline],
    ["Message", data.message],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid #E7ECF2;font-size:12px;color:#64748B;text-transform:uppercase;letter-spacing:0.08em;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:10px 16px;border-bottom:1px solid #E7ECF2;font-size:14px;color:#17243A;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to: contactEmail,
      replyTo: data.email,
      subject: cleanHeader(`New enquiry: ${data.service} — ${data.fullName}`),
      text,
      html: `
        <div style="background:#F8FAFC;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
          <div style="max-width:640px;margin:0 auto;background:#FFFFFF;border-radius:20px;overflow:hidden;border:1px solid #E7ECF2;">
            <div style="background:#17243A;padding:28px 24px;">
              <p style="margin:0;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#F97E91;font-weight:bold;">Namilani Digital</p>
              <h1 style="margin:8px 0 0;font-size:24px;line-height:1.2;color:#FFFFFF;">New project enquiry</h1>
              <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.55);">Build. Grow. Connect.</p>
            </div>
            <table style="width:100%;border-collapse:collapse;">${htmlRows}</table>
            <div style="padding:18px 24px;background:#F8FAFC;font-size:11px;color:#64748B;">
              Reply directly to this email to reach ${escapeHtml(data.fullName)}.
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Contact form email failed:", error.message);
      return NextResponse.json(
        {
          ok: false,
          message:
            "Your enquiry couldn't be sent by email right now. Please try again or contact us directly by email or WhatsApp.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(
      "Contact form email failed:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return NextResponse.json(
      {
        ok: false,
        message:
          "Your enquiry couldn't be sent right now. Please try again or contact us directly by email or WhatsApp.",
      },
      { status: 500 },
    );
  }
}
