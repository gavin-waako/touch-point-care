"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Platform = "windows" | "macos" | "linux" | "android" | "ios";
type ButtonVariant = "header" | "dark" | "light";

const platforms: { id: Platform; label: string; icon: string }[] = [
  { id: "windows", label: "Windows", icon: "windows" },
  { id: "macos", label: "macOS", icon: "apple" },
  { id: "linux", label: "Linux", icon: "linux" },
  { id: "android", label: "Android", icon: "android" },
  { id: "ios", label: "iOS", icon: "apple" },
];

function detectPlatform(): Platform | null {
  const browser = navigator as Navigator & {
    userAgentData?: { platform?: string };
  };
  const platform = (browser.userAgentData?.platform || navigator.platform || "").toLowerCase();
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("android")) return "android";
  if (/iphone|ipad|ipod/.test(userAgent) || (platform.includes("mac") && navigator.maxTouchPoints > 1)) return "ios";
  if (platform.includes("win") || userAgent.includes("windows")) return "windows";
  if (platform.includes("mac") || userAgent.includes("mac os")) return "macos";
  if (platform.includes("linux") || userAgent.includes("linux")) return "linux";
  return null;
}

function PlatformIcon({ icon, size = 18 }: { icon: string; size?: number }) {
  return (
    <Image
      src={`https://cdn.simpleicons.org/${icon}/435030`}
      alt=""
      width={size}
      height={size}
      unoptimized
    />
  );
}

export default function DownloadButton({ variant }: { variant: ButtonVariant }) {
  const [isOpen, setIsOpen] = useState(false);
  const [detectedPlatform, setDetectedPlatform] = useState<Platform | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const openDialog = () => {
    const detected = detectPlatform();
    setDetectedPlatform(detected);
    setSelectedPlatform(detected);
    setIsOpen(true);
  };

  const chosenPlatform = platforms.find((platform) => platform.id === selectedPlatform);
  const requestHref = selectedPlatform
    ? `mailto:hello@touchpointehr.com?subject=${encodeURIComponent(`TouchPointEHR ${chosenPlatform?.label} download request`)}`
    : "mailto:hello@touchpointehr.com?subject=TouchPointEHR%20download%20request";

  return (
    <>
      <button
        type="button"
        className={`download-trigger ${variant === "header" ? "header-cta" : `button button-${variant}`}`}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={openDialog}
      >
        Free Download
        <span className="download-platforms" aria-hidden="true">
          <PlatformIcon icon="windows" size={14} />
          <PlatformIcon icon="apple" size={14} />
          <PlatformIcon icon="linux" size={14} />
          <PlatformIcon icon="android" size={14} />
        </span>
        <span aria-hidden="true">↗</span>
      </button>

      {isOpen && (
        <div className="download-dialog-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setIsOpen(false);
        }}>
          <section className="download-dialog" role="dialog" aria-modal="true" aria-labelledby="download-title">
            <div className="download-dialog-heading">
              <div>
                <p className="eyebrow">TouchPointEHR</p>
                <h2 id="download-title">Choose your platform</h2>
              </div>
              <button className="download-dialog-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close download options">×</button>
            </div>

            {detectedPlatform ? (
              <p className="download-detected">
                <span className="live-dot" />
                Detected: <strong>{platforms.find((platform) => platform.id === detectedPlatform)?.label}</strong>
                <span className="download-recommended">Recommended</span>
              </p>
            ) : (
              <p className="download-detected">We couldn’t detect your operating system. Choose it below.</p>
            )}

            <div className="download-platform-list" aria-label="Operating systems">
              {platforms.map((platform) => (
                <button
                  className={`download-platform-option ${selectedPlatform === platform.id ? "is-selected" : ""}`}
                  type="button"
                  key={platform.id}
                  aria-pressed={selectedPlatform === platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                >
                  <PlatformIcon icon={platform.icon} />
                  <span className="download-platform-name">{platform.label}</span>
                  {detectedPlatform === platform.id && <span className="download-recommended">Your device</span>}
                  <span className="download-unavailable">Not available yet</span>
                </button>
              ))}
            </div>

            <p className="download-notice">Installers are not published yet, so no download will start. Request a verified download link for your platform.</p>
            <a className="button button-dark download-request-link" href={requestHref}>
              Request {chosenPlatform ? `${chosenPlatform.label} ` : "a "}download link <span aria-hidden="true">↗</span>
            </a>
          </section>
        </div>
      )}
    </>
  );
}