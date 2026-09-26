"use client";

import { useEffect, useState } from "react";

const youtubeVideoId = "M7lc1UVf-VE";

export default function VideoButton() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <button className="text-link video-trigger" type="button" onClick={() => setIsOpen(true)} aria-haspopup="dialog" aria-expanded={isOpen}>
        Watch video demo <span aria-hidden="true">▶</span>
      </button>
      {isOpen && (
        <div className="download-dialog-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setIsOpen(false);
        }}>
          <section className="video-dialog" role="dialog" aria-modal="true" aria-labelledby="video-dialog-title">
            <div className="video-dialog-heading">
              <h2 id="video-dialog-title">Video demo</h2>
              <button className="download-dialog-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close video">×</button>
            </div>
            <div className="video-frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&controls=1&mute=1&playsinline=1&rel=0`}
                title="YouTube video demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      )}
    </>
  );
}