"use client";

import { useState } from "react";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <main className="auth-simple-page">
      <div className="auth-card">
        <div className="auth-brand">TouchPoint EHR</div>

        <div className="auth-mode-toggle" aria-label="Authentication mode">
          <button
            type="button"
            className={isRegister ? "" : "is-active"}
            onClick={() => setIsRegister(false)}
          >
            Log in
          </button>
          <button
            type="button"
            className={isRegister ? "is-active" : ""}
            onClick={() => setIsRegister(true)}
          >
            Register
          </button>
        </div>

        {isRegister ? (
          <form className="auth-form" action="#" method="post">
            <div className="auth-field">
              <label htmlFor="organization-name">Organization name</label>
              <input id="organization-name" type="text" name="organization" placeholder="Organization name" />
            </div>

            <div className="auth-field">
              <label htmlFor="admin-name">Admin name</label>
              <input id="admin-name" type="text" name="admin" placeholder="Admin name" />
            </div>

            <div className="auth-field">
              <label htmlFor="register-email">Email</label>
              <input id="register-email" type="email" name="register-email" placeholder="Email" />
            </div>

            <button type="button" className="auth-primary-button">NEXT</button>
          </form>
        ) : (
          <form className="auth-form" action="#" method="post">
            <div className="auth-field">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" name="username" placeholder="Username" />
            </div>

            <div className="auth-field">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" name="password" placeholder="Password" />
            </div>

            <div className="auth-submit-row">
              <button type="button" className="auth-primary-button">NEXT</button>
            </div>

            <label className="remember-row" htmlFor="remember-org">
              <input id="remember-org" type="checkbox" name="remember" />
              <span>Remember my organization</span>
            </label>
          </form>
        )}
      </div>

      <footer className="auth-links" aria-label="Legal links">
        <span>CLV: 4.4.64</span>
        <a href="#">Login Assistance</a>
        <a href="/privacy-policy">Privacy Policy</a>
      </footer>

      <p className="auth-legal">© 2026 TouchPoint EHR. All rights reserved. TouchPoint EHR is a registered trademark of TouchPoint Systems, Inc.</p>
    </main>
  );
}
