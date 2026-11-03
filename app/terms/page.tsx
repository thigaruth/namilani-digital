import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service | Namilani Digital",
  description:
    "Terms governing the use of the Namilani Digital website and the general basis on which our digital services are discussed and provided.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The general terms that apply when you use the Namilani Digital website or engage us to discuss a project."
        breadcrumbs={[{ label: "Terms of Service" }]}
        image="/hero/about-hero.jpg"
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="mb-10 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Last updated: 3 November 2026
            </p>

            <div className="prose-namilani">
              <p>
                These terms govern your use of the Namilani Digital website. By using the website
                or submitting an enquiry, you agree to these terms. If you do not agree, please do
                not use the website.
              </p>

              <h2>About this website</h2>
              <p>
                This website provides information about Namilani Digital and the services we offer.
                Content is provided for general information and does not constitute a binding offer,
                professional advice, or a guarantee of any particular result.
              </p>

              <h2>Services and quotations</h2>
              <p>
                Prices shown on this website are starting points or indicative prices. Final
                pricing, deliverables, timelines, payment arrangements, and other project terms are
                confirmed in a written quotation, proposal, or agreement. A project is only
                confirmed once both parties accept the applicable terms.
              </p>
              <p>
                Billing periods, hosting specifications, and package inclusions are not implied by
                the website. They are confirmed in the relevant package terms or quotation.
              </p>

              <h2>Search and marketing outcomes</h2>
              <p>
                Search engine rankings, traffic, engagement, and other marketing outcomes depend on
                many factors outside our control. We do not promise guaranteed rankings, specific
                traffic volumes, or specific commercial results unless expressly stated in a written
                agreement.
              </p>

              <h2>Intellectual property</h2>
              <p>
                Unless otherwise stated, the content, design, branding, and materials on this
                website belong to Namilani Digital and may not be copied, reproduced, or used
                without permission. Project deliverables and ownership rights are governed by the
                relevant project agreement.
              </p>

              <h2>Acceptable use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use this website for unlawful or fraudulent purposes.</li>
                <li>Attempt to gain unauthorised access to the website or its systems.</li>
                <li>Interfere with the operation, security, or availability of the website.</li>
                <li>Submit false, misleading, abusive, or harmful information through our forms.</li>
              </ul>

              <h2>Third-party links</h2>
              <p>
                This website may link to third-party websites or services, including WhatsApp and
                email providers. We are not responsible for the content, availability, or privacy
                practices of those third parties.
              </p>

              <h2>Availability and changes</h2>
              <p>
                We aim to keep the website available and accurate, but we do not guarantee that it
                will always be uninterrupted, error-free, or complete. We may update, suspend, or
                change the website and its content at any time.
              </p>

              <h2>Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, Namilani Digital will not be liable for
                indirect, incidental, special, or consequential loss arising from your use of this
                website or reliance on its general information. Nothing in these terms limits any
                liability that cannot lawfully be limited.
              </p>

              <h2>Privacy</h2>
              <p>
                Our handling of personal information is described in our{" "}
                <a href="/privacy-policy">Privacy Policy</a>.
              </p>

              <h2>Governing law</h2>
              <p>
                These terms are governed by the laws of Kenya. Any dispute relating to the use of
                this website is subject to the jurisdiction of the Kenyan courts, unless otherwise
                required by applicable law.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about these terms can be sent to{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
                <a href={`tel:${site.phoneInternational}`}>{site.phoneDisplay}</a>. Location:{" "}
                {site.location}.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
