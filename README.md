# Namilani Digital

Premium multi-page website for **Namilani Digital** — _Build. Grow. Connect._

The site presents the studio's services, selected work, process, starting prices, and a working enquiry form. It is built to be deployed on Vercel and maintained without a CMS.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4
- Motion for animation
- Lucide icons
- React Hook Form + Zod
- Resend for enquiry email delivery

## Requirements

- Node.js `>=20.9.0`
- npm 10+

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open <http://localhost:3000>.

### Scripts

```bash
npm run dev        # development server
npm run build      # production build
npm run start      # run the production build
npm run lint       # ESLint
npm run typecheck  # TypeScript, no emit
```

## Environment variables

Copy `.env.example` to `.env.local`. Never commit `.env.local`.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production | Canonical site URL used by metadata, sitemap, robots, and Open Graph. |
| `CONTACT_EMAIL` | Recommended | Inbox that receives enquiry emails. Defaults to `info@namilani.com`. |
| `RESEND_API_KEY` | For email | Resend API key. Without it the form returns an honest unconfigured message. |
| `CONTACT_FROM_EMAIL` | For email | Verified Resend sender, e.g. `Namilani Digital <website@namilani.com>`. |
| `NEXT_PUBLIC_FACEBOOK_URL` | Optional | Shows the footer social link when set. |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Optional | Shows the footer social link when set. |
| `NEXT_PUBLIC_LINKEDIN_URL` | Optional | Shows the footer social link when set. |
| `NEXT_PUBLIC_TIKTOK_URL` | Optional | Shows the footer social link when set. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Optional | Overrides the default WhatsApp number. Digits only. |

### Contact form email setup

1. Create a [Resend](https://resend.com) account and API key.
2. Verify the sending domain (`namilani.com`) in Resend.
3. Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` in the deployment environment.
4. Set `CONTACT_EMAIL` to the inbox that should receive enquiries.
5. Submit a test enquiry from the deployed site.

If Resend is not configured, the API responds with HTTP `503` and the UI points visitors to email and WhatsApp. It never reports a false success.

The API also includes:

- Server-side Zod validation
- Honeypot and minimum-completion-time checks
- Best-effort in-memory rate limiting
- HTML escaping for values placed in the notification email

For high-traffic deployments, replace the in-memory limiter with a shared store such as Upstash Redis.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | Services overview |
| `/services/web-design` | Website Design & Development |
| `/services/seo` | SEO Services |
| `/services/social-media` | Social Media Management |
| `/services/graphic-design` | Graphic Design & Branding |
| `/services/hosting` | Web Hosting & Domain Services |
| `/portfolio` | Portfolio listing |
| `/portfolio/[slug]` | Project detail (8 generated routes) |
| `/contact` | Contact and enquiry form |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/api/contact` | Enquiry form endpoint (POST only) |
| `/sitemap.xml` | Generated sitemap |
| `/robots.txt` | Generated robots rules |
| `/manifest.webmanifest` | Web app manifest |

## Content and brand notes

- The approved logo lives at `public/logo/namilani-logo.png` and is used unchanged. Optimised favicons, app icons, and an Open Graph image are generated derivatives in `app/` and `public/brand/`, `public/og/`.
- Prices shown are starting prices: websites from KES 25,000, SEO from KES 5,000, hosting from KES 2,500, social media from KES 5,000 excluding ad spend, and 15 social graphics for KES 3,000. Final scope and billing terms are confirmed in a written quotation.
- Portfolio projects use supplied names and clearly labelled preview visuals. No live links, outcomes, testimonials, awards, or invented metrics are published.
- Social links stay hidden until real profile URLs are configured.
- Brand colours and typography are defined as design tokens in `app/globals.css`.

## Project structure

```text
app/                 routes, metadata files, sitemap, robots, manifest, API
components/
  animations/        motion providers and reveal components
  forms/             contact form
  home/              homepage sections
  layout/            navbar, mobile menu, footer, floating actions
  portfolio/         project cards and placeholder visuals
  seo/               JSON-LD helper
  services/          service cards and detail template
  ui/                shared design-system components
lib/                 site config, content data, validation, metadata helpers
public/              logo, generated brand icons, OG image, image placeholders
```

## Deployment

The project is ready for Vercel:

1. Import the repository into Vercel.
2. Add the environment variables listed above.
3. Deploy.
4. Point the `namilani.com` domain at the project and verify HTTPS.
5. Submit `https://namilani.com/sitemap.xml` in Google Search Console.

Run `npm run lint`, `npm run typecheck`, and `npm run build` before deploying changes.

## Accessibility and performance

- Semantic landmarks, skip link, visible focus styles, and reduced-motion support.
- Keyboard-accessible mobile navigation and service dropdown.
- Responsive layouts from small phones to wide desktops.
- Static generation for content pages, with the contact endpoint rendered on demand.
- `next/image` for the logo and generated icons.

## Ownership

Private and proprietary to Namilani Digital. All rights reserved.
