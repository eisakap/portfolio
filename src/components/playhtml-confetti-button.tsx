"use client";

import { useContext, useEffect } from "react";
import { PartyPopper } from "lucide-react";
import { PlayContext } from "@playhtml/react";

const CONFETTI_EVENT = "confetti";

// Lazily load canvas-confetti from CDN the first time it's needed (no build dep).
let confettiPromise: Promise<((opts?: object) => void) | null> | null = null;
function loadConfetti() {
  if (typeof window === "undefined") return Promise.resolve(null);
  const w = window as unknown as { confetti?: (opts?: object) => void };
  if (w.confetti) return Promise.resolve(w.confetti);
  if (!confettiPromise) {
    confettiPromise = new Promise((resolve) => {
      const s = document.createElement("script");
      s.src =
        "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js";
      s.async = true;
      s.onload = () => resolve(w.confetti ?? null);
      s.onerror = () => resolve(null);
      document.head.appendChild(s);
    });
  }
  return confettiPromise;
}

function fireConfetti() {
  loadConfetti().then((confetti) => {
    if (!confetti) return;
    confetti({ particleCount: 130, spread: 78, startVelocity: 42, origin: { y: 0.12 } });
    setTimeout(
      () => confetti({ particleCount: 60, spread: 100, scalar: 0.85, origin: { y: 0.1 } }),
      160,
    );
  });
}

/**
 * A small confetti button for the navbar. When anyone clicks it, a shared
 * playhtml event is dispatched so *every* visitor on the page sees the confetti
 * at once. The default (provider-missing) context throws, so we guard on
 * `isProviderMissing` and fall back to a local burst. Loaded browser-only since
 * @playhtml/react touches `document` at import time.
 */
export function PlayhtmlConfettiButton() {
  const ctx = useContext(PlayContext);

  useEffect(() => {
    if (ctx.isProviderMissing) return;
    const listenerId = ctx.registerPlayEventListener(CONFETTI_EVENT, {
      onEvent: () => fireConfetti(),
    });
    return () => ctx.removePlayEventListener(CONFETTI_EVENT, listenerId);
  }, [ctx]);

  return (
    <button
      type="button"
      aria-label="Throw confetti for everyone here"
      title="Throw confetti 🎉"
      onClick={() => {
        if (ctx.isProviderMissing) {
          fireConfetti();
        } else {
          // Broadcasts to everyone (including us) via the registered listener.
          ctx.dispatchPlayEvent({ type: CONFETTI_EVENT });
        }
      }}
      className="group inline-flex size-9 items-center justify-center rounded-full border border-violet-500/25 bg-gradient-to-br from-violet-500/15 to-fuchsia-500/15 text-violet-700 shadow-[0_8px_24px_-14px_rgba(124,58,237,0.5)] backdrop-blur-md transition hover:scale-105 hover:border-violet-500/45 hover:from-violet-500/25 hover:to-fuchsia-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f2] active:scale-95"
    >
      <PartyPopper className="size-4 transition-transform group-hover:-rotate-12" aria-hidden />
    </button>
  );
}
