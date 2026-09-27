"use client";

import { useState } from "react";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <main className="login-page">
      <header className="site-header login-header">
        <a className="brand" href="/" aria-label="TouchPointEHR home">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
          <span className="brand-name">touchpoint<span> EHR™</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="/#platform">Platform</a>
          <a href="/#how-it-works">How it works</a>
          <a href="/about">About us</a>
        </nav>
        <a className="header-cta" href="/">Back to home</a>
      </header>

      <section className="login-shell" aria-label="TouchPoint EHR login and registration">
        <div className="login-visual">
          <div className="login-visual-content">
            <p className="eyebrow"><span className="eyebrow-dot" /> Trusted care operations</p>
            <h1>Welcome to your <em>care command center.</em></h1>
            <p>Unified resident information, smarter workflows, and better communication for senior living teams.</p>
            <ul className="login-benefits" aria-label="Key platform benefits">
              <li>Resident records that stay connected.</li>
              <li>Care teams aligned around daily priorities.</li>
              <li>Insights for better decisions and stronger communities.</li>
            </ul>
          </div>
        </div>

        <div className="login-panel">
          <div className="auth-toggle" aria-label="Authentication mode">
            <button
              type="button"
              className={`auth-tab ${!isRegister ? "is-active" : ""}`}
              onClick={() => setIsRegister(false)}
            >
              Log in
            </button>
            <button
              type="button"
              className={`auth-tab ${isRegister ? "is-active" : ""}`}
              onClick={() => setIsRegister(true)}
            >
              Register
            </button>
          </div>

          <div className="auth-form-stack">
            {!isRegister ? (
              <form className="auth-form" action="#" method="post">
                <div className="form-heading">
                  <p className="eyebrow">Access your workspace</p>
                  <h2>Log in</h2>
                </div>

                <label>
                  <span>Email address</span>
                  <input type="email" name="email" placeholder="name@organization.com" />
                </label>

                <label>
                  <span>Password</span>
                  <input type="password" name="password" placeholder="Enter your password" />
                </label>

                <div className="form-row">
                  <label className="checkbox-row" htmlFor="remember-me">
                    <input id="remember-me" type="checkbox" name="remember" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-link">Forgot password?</a>
                </div>

                <button type="button" className="button button-dark login-submit">Log in</button>
                <p className="auth-meta">Need a new workspace? Select “Register” to begin.</p>
              </form>
            ) : (
              <form className="auth-form alt-form" action="#" method="post">
                <div className="form-heading">
                  <p className="eyebrow">Start your organization</p>
                  <h2>Register</h2>
                </div>

                <label>
                  <span>Organization name</span>
                  <input type="text" name="organization" placeholder="Your senior living community" />
                </label>

                <label>
                  <span>Admin name</span>
                  <input type="text" name="admin" placeholder="Full name" />
                </label>

                <label>
                  <span>Work email</span>
                  <input type="email" name="register-email" placeholder="admin@organization.com" />
                </label>

                <button type="button" className="button button-dark login-submit">Create organization</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
