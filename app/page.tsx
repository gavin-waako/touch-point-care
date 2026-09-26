import DownloadButton from "./DownloadButton";
import VideoButton from "./VideoButton";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TouchPointEHR home">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
          <span className="brand-name">touchpoint<span> EHR™</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#platform">Platform</a>
          <a href="#how-it-works">How it works</a>
          <a href="/about">About us</a>
        </nav>
        <DownloadButton variant="header" />
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> EHR for senior living</p>
          <h1>Smarter, AI-Driven,<em>Care for Senior Living.</em></h1>
          <p className="hero-description">An EHR platform designed for the next generation of senior living residents and the teams who support them.</p>
          <div className="hero-actions">
            <DownloadButton variant="dark" />
            <VideoButton />
          </div>
          <div className="hero-note">
            <div className="avatar-stack" aria-hidden="true"><span>J</span><span>M</span><span>A</span></div>
            <p><strong>Designed for senior living</strong><br />Built around residents and care teams.</p>
          </div>
        </div>
        <div className="hero-visual" aria-label="Caregiver sharing a moment with a senior living resident">
          <div className="image-wash" />
          <div className="visual-label"><span className="live-dot" /> A more informed care experience</div>
          <div className="care-note">
            <div className="care-note-icon" aria-hidden="true">♥</div>
            <div><strong>Intelligent care coordination for patients.</strong><span>Important details, in one place.</span></div>
            <span className="note-arrow" aria-hidden="true">↗</span>
          </div>
          <span className="visual-caption">A clearer view of every resident’s care.</span>
        </div>
      </section>

      <section className="trust-strip" aria-label="TouchPoint benefits">
        <p>Healthcare software that integrates care, billing, and operations.<br /><strong>Purposely-built to grow your business.</strong></p>
        <div className="trust-stat"><strong>Hospitals & ER Departments</strong><span>care coordination</span></div>
        <div className="trust-stat"><strong>Nursing Homes</strong><span>communication</span></div>
        <div className="trust-stat"><strong>Assisted Living Facilities</strong><span>operational insight</span></div>
      </section>

      <section className="platform-section" id="platform">
        <div className="section-heading">
          <p className="eyebrow">Introducing a new EHR experience</p>
          <h2>Smarter care.<br /><em>Built for living.</em></h2>
          <p>Purposeful tools help teams coordinate resident wellness, work with real-time information, and spend less time managing disconnected tasks.</p>
        </div>
        <div className="feature-list">
          <article className="feature-row">
            <span className="feature-number">01</span>
            <div><h3>A complete resident picture</h3><p>Keep essential resident information and care details together, giving your team the context to support each person with confidence.</p></div>
            <span className="feature-symbol" aria-hidden="true">↗</span>
          </article>
          <article className="feature-row">
            <span className="feature-number">02</span>
            <div><h3>Personalized wellness coordination</h3><p>Recognize when a resident’s needs change and coordinate timely follow-up across the people involved in their care.</p></div>
            <span className="feature-symbol" aria-hidden="true">↗</span>
          </article>
          <article className="feature-row">
            <span className="feature-number">03</span>
            <div><h3>Actionable reporting dashboards</h3><p>Give local teams and leaders a clearer view of operations, shared priorities, and the information that can guide better decisions.</p></div>
            <span className="feature-symbol" aria-hidden="true">↗</span>
          </article>
        </div>
      </section>

      <section className="workflow-section" id="how-it-works">
        <div className="workflow-image" role="img" aria-label="Senior living care team working together" />
        <div className="workflow-copy">
          <p className="eyebrow">Personalized wellness coordination</p>
          <h2>Actionable,<br /><em>Reporting Dashboards.</em></h2>
          <p>Bring resident information and team communication closer together, so care teams can respond to changing needs with clarity.</p>
          <a className="text-link" href="mailto:hello@touchpointehr.com">Explore EHR for senior living <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="closing-cta" id="about">
        <div><p className="eyebrow">The trusted software for senior living care</p><h2>Support better care<br />with <em>better insights.</em></h2></div>
        <DownloadButton variant="light" />
      </section>

      <footer className="site-footer">
        <a className="brand" href="#top" aria-label="TouchPoint EHR home">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
          <span className="brand-name">touchpoint<span> EHR™</span></span>
        </a>
        <p>Intelligent software for better care.</p>
        <span>© 2026 TouchPoint EHR. All rights reserved. TouchPoint EHR is a registered trademark of TouchPoint Systems, Inc.</span>
      </footer>
    </main>
  );
}
