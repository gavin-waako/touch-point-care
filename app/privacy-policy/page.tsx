import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | TouchPoint EHR",
  description: "Learn how TouchPoint EHR handles resident, employee, and organizational data securely.",
};

const policySections = [
  {
    title: "Overview",
    content:
      "TouchPoint EHR is designed to help senior living organizations manage resident information, care coordination, and operational workflows in a secure, thoughtful way. We collect and process only the information needed to support resident care, staff operations, and service delivery.",
  },
  {
    title: "Information we collect",
    content:
      "We may collect information about residents, staff, administrators, and authorized users, including contact information, role details, care-related notes, operational records, and service data that helps care teams coordinate support. We also gather account and technical information needed to secure and maintain access to the platform.",
  },
  {
    title: "How we use information",
    content:
      "Information is used to provide access to the platform, support resident care plans, improve communication across teams, maintain operational visibility, and protect the integrity of the service. We may also use data to improve product quality, troubleshoot issues, and maintain compliance with applicable requirements.",
  },
  {
    title: "Sharing and disclosure",
    content:
      "We do not sell personal information. We may share information with trusted service providers, internal teams, or authorized partners only when necessary for support, security, legal compliance, or service delivery. Access is limited to those who need it to perform their responsibilities.",
  },
  {
    title: "Security",
    content:
      "We use reasonable administrative, technical, and organizational safeguards designed to protect data against unauthorized access, misuse, or loss. No system is perfectly secure, but we remain committed to protecting resident and organizational information with care and diligence.",
  },
  {
    title: "Your rights",
    content:
      "Depending on your role and applicable laws, you may have the right to request access to, correction of, or deletion of personal information associated with your organization’s use of the platform. We encourage users and administrators to contact us to discuss privacy questions or requests.",
  },
  {
    title: "Changes to this policy",
    content:
      "This policy may be updated from time to time to reflect changes in service delivery, compliance requirements, or business operations. Continued use of TouchPoint EHR after updates indicates acceptance of the revised policy.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="TouchPointEHR home">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
          <span className="brand-name">touchpoint<span> EHR™</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="/about">About us</a>
          <a href="/#how-it-works">How it works</a>
          <a href="/#platform">Platform</a>
          <a href="/login">Login</a>
        </nav>
        <a className="header-cta" href="/login">Back to login</a>
      </header>

      <section className="policy-hero">
        <p className="eyebrow"><span className="eyebrow-dot" /> Privacy policy</p>
        <h1>Responsible care, <em>responsible data.</em></h1>
        <p>
          TouchPoint EHR is built to support better care and stronger operations. This privacy policy explains how we handle information in the course of supporting senior living communities and the teams who serve them.
        </p>
      </section>

      <section className="policy-shell" aria-label="Privacy policy content">
        {policySections.map((section) => (
          <article key={section.title} className="policy-section">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </article>
        ))}

        <article className="policy-section contact-block">
          <h2>Contact</h2>
          <p>
            If you have questions about this policy or how your information is handled, please contact the TouchPoint EHR team at <a href="mailto:hello@touchpointehr.com">hello@touchpointehr.com</a>.
          </p>
        </article>
      </section>

      <footer className="site-footer">
        <a className="brand" href="/" aria-label="TouchPoint EHR home">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
          <span className="brand-name">touchpoint<span> EHR™</span></span>
        </a>
        <p>Intelligent software for better care.</p>
        <span>© 2026 TouchPoint EHR. All rights reserved. TouchPoint EHR is a registered trademark of TouchPoint Systems, Inc.</span>
      </footer>
    </main>
  );
}
