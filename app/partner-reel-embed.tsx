"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

const EMBED_SCRIPT_SRC = "https://www.instagram.com/embed.js";

let embedScriptPromise: Promise<void> | null = null;

function loadInstagramEmbedScript() {
  if (embedScriptPromise) return embedScriptPromise;

  embedScriptPromise = new Promise((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${EMBED_SCRIPT_SRC}"]`,
    );
    if (existing) {
      if (window.instgrm) {
        resolve();
      } else {
        existing.addEventListener("load", () => resolve());
      }
      return;
    }

    const script = document.createElement("script");
    script.src = EMBED_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });

  return embedScriptPromise;
}

export function PartnerReelEmbed({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  useEffect(() => {
    let cancelled = false;
    loadInstagramEmbedScript().then(() => {
      if (!cancelled) window.instgrm?.Embeds.process();
    });
    return () => {
      cancelled = true;
    };
  }, [href]);

  return (
    <div className="partner-reel-embed">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={href}
        data-instgrm-version="14"
      >
        <a href={href} target="_blank" rel="noreferrer">
          Ver {title} no Instagram ↗
        </a>
      </blockquote>
    </div>
  );
}
