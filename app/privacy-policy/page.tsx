import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | Namilani Digital",
  description:
    "Read how Namilani Digital collects, uses, and protects the information you share through our website and enquiry form.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Namilani Digital handles the information you share with us through this website and our enquiry form."
        breadcrumbs={[{ label: "Privacy Policy" }]}
        image="/hero/about-hero.jpg"
      />

      <section className="bg-paper py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="mb-10 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Last updated: 3 November 2026
            </p>

            <div className="prose-namilani">
              <p>
                Namilani Digital respects your privacy. This policy explains what information we
                collect when you use this website or contact us, why we collect it, how we use it,
                and the choices available to you.
              </p>

              <h2>Information we collect</h2>
              <p>When you submit the enquiry form, we may collect:</p>
              <ul>
                <li>Your full name and business name.</li>
                <li>Your email address and phone number.</li>
                <li>The service, estimated budget, and preferred timeline you select.</li>
                <li>The project details and any other information you include in your message.</li>
              </ul>
              <p>
                Our hosting and email providers may also process standard technical information,
                such as server logs and IP addresses, for security and service operation. We do not
                currently use advertising cookies or third-party analytics on this website.
              </p>

              <h2>How we use your information</h2>
              <ul>
                <li>To respond to your enquiry and discuss your project.</li>
                <li>To prepare a quotation or proposal where appropriate.</li>
                <li>To provide services that we have agreed to deliver.</li>
                <li>To keep records and meet legal or accounting obligations.</li>
                <li>To protect the website, our systems, and our users from abuse or fraud.</li>
              </ul>

              <h2>Legal basis for processing</h2>
              <p>
                We process enquiry information with your consent when you submit the form, and where
                necessary for our legitimate interests in responding to business enquiries and
                operating our services. Where you engage us for a project, we may also process
                information to perform that agreement.
              </p>

              <h2>Sharing your information</h2>
              <p>
                We do not sell your personal information. We may share information with service
                providers who help us operate the website and respond to enquiries, including email
                delivery and hosting providers. These providers are expected to protect the
                information they process on our behalf. We may also disclose information where
                required by law or to protect our legal rights.
              </p>

              <h2>Retention</h2>
              <p>
                We keep enquiry information only for as long as reasonably necessary to respond to
                the enquiry, maintain business records, and meet legal obligations. When information
                is no longer needed, we take reasonable steps to delete or anonymise it.
              </p>

              <h2>Your rights</h2>
              <p>
                Subject to applicable law, including the Kenya Data Protection Act, 2019, you may
                have the right to request access to the personal information we hold about you,
                request correction or deletion, object to certain processing, or request restriction
                of processing. You may also have the right to complain to the Office of the Data
                Protection Commissioner in Kenya.
              </p>
              <p>
                To make a request, contact us at{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>. We may need to verify your
                identity before acting on a request.
              </p>

              <h2>Security</h2>
              <p>
                We take reasonable technical and organisational measures to protect the information
                you share with us. No method of transmission or storage is completely secure, so we
                cannot guarantee absolute security.
              </p>

              <h2>International processing</h2>
              <p>
                Our service providers may process information in countries outside Kenya. Where this
                happens, we expect appropriate safeguards to be used in line with applicable data
                protection requirements.
              </p>

              <h2>Children</h2>
              <p>
                This website and our services are intended for businesses and professional users.
                They are not directed at children, and we do not knowingly collect personal
                information from children.
              </p>

              <h2>Changes to this policy</h2>
              <p>
                We may update this policy from time to time. Changes will be reflected on this page
                with an updated date. Please review the policy when you use the website.
              </p>

              <h2>Contact</h2>
              <p>
                For privacy questions, contact Namilani Digital at{" "}
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
