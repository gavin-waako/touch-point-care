import type { Metadata } from "next";
import Image from "next/image";
import DownloadButton from "../DownloadButton";

export const metadata: Metadata = {
  title: "About Us | TouchPoint EHR",
  description: "Meet TouchPointEHR founder Gavin Waako and learn about the story behind our senior living EHR.",
};

export default function AboutPage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="TouchPointEHR home">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
          <span className="brand-name">touchpoint<span> EHR™</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="/#platform">Platform</a>
          <a href="/#how-it-works">How it works</a>
          <a href="/about" aria-current="page">About us</a>
          <a href="/login">Login</a>
        </nav>
        <DownloadButton variant="header" />
      </header>

      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Our story</p>
          <h1>Better care starts with <em>understanding people.</em></h1>
          <p>TouchPointEHR is being built to help senior living teams bring resident information, care coordination, and everyday decisions closer together.</p>
          <a className="text-link" href="#founder">Meet our founder <span aria-hidden="true">↓</span></a>
        </div>
        <div className="about-hero-aside" aria-hidden="true">
          <span>01</span>
          <p>Technology should make room for the human work at the heart of care.</p>
        </div>
      </section>

      <section className="founder-section" id="founder">
        <figure className="founder-portrait">
          <div className="founder-portrait-image">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85"
              alt="Illustrative portrait placeholder, not a photo of Gavin Waako"
              width={700}
              height={840}
              unoptimized
            />
          </div>
          <figcaption>Illustrative portrait placeholder. Replace with Gavin Waako’s approved photo.</figcaption>
        </figure>
        <div className="founder-story">
          <p className="eyebrow">CEO, Founder &amp; software engineer</p>
          <h2>Meet Gavin<br /><em>Waako.</em></h2>
          <p className="founder-intro">Gavin came to the United States in January 2025 from Uganda as an international student, and studied Computer Science at MassBay Community College.</p>
          <p>That journey informs the perspective he brings to building TouchPointEHR: technology is most useful when it is accessible, practical, and shaped around the people who rely on it.</p>
          <p>He founded TouchPointEHR to focus that perspective on senior living, supporting care teams with tools for a clearer, more connected view of each resident.</p>
        </div>
      </section>

      <section className="about-principles">
        <div className="about-principles-heading">
          <p className="eyebrow">What guides us</p>
          <h2>Built around the<br /><em>work of caring.</em></h2>
        </div>
        <div className="about-principles-list">
          <article><span>01</span><div><h3>People before process</h3><p>Care technology should support real relationships and the daily work teams do for residents.</p></div></article>
          <article><span>02</span><div><h3>Clarity over complexity</h3><p>Useful information should be easier to find, understand, and put to work.</p></div></article>
          <article><span>03</span><div><h3>Designed for senior living</h3><p>Communities have their own rhythms and needs. Their software should be built with that context in mind.</p></div></article>
        </div>
      </section>

      <section className="closing-cta">
        <div><p className="eyebrow">A more connected care experience</p><h2>Let’s move senior living<br />care <em>forward.</em></h2></div>
        <DownloadButton variant="light" />
      </section>

      <footer className="site-footer">
        <a className="brand" href="/" aria-label="TouchPointEHR home">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
          <span className="brand-name">touchpoint<span> EHR™</span></span>
        </a>
        <p>Intelligent software for better care.</p>
        <span>© 2026 TouchPoint EHR. All rights reserved. TouchPoint EHR is a registered trademark of TouchPoint Systems, Inc.</span>
      </footer>
    </main>
  );
}