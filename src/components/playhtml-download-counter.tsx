"use client";

import { useEffect, useState } from "react";
import { usePageData } from "@playhtml/react";
import { Download, Info, ShieldAlert, X } from "lucide-react";

import { cn } from "@/lib/utils";

const CORAL = "from-[#ff8163] to-[#ed3a29]";

const BUTTON_CLASS = cn(
  "group inline-flex h-14 items-center gap-3 rounded-full bg-gradient-to-br px-8 text-base font-semibold tracking-tight text-white shadow-[0_18px_50px_-16px_rgba(237,58,41,0.6)] transition hover:shadow-[0_22px_60px_-14px_rgba(237,58,41,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed3a29]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f2] active:scale-[0.98]",
  CORAL,
);

// Small inline chip mimicking a Windows dialog button/label.
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="mx-0.5 inline-flex items-center rounded-md border border-[#141414]/15 bg-white px-1.5 py-0.5 font-medium text-[#141414] shadow-sm">
      {children}
    </span>
  );
}

/**
 * Download button with a live shared counter (playhtml `usePageData`) and a
 * SmartScreen help modal. Clicking the button increments the shared count and
 * opens the modal; the actual .exe download happens from "Continue to download".
 * Loaded browser-only since @playhtml/react touches `document` at import time.
 */
export function LooprDownload({ href }: { href: string }) {
  const [count, setCount] = usePageData<number>("loopr-download-count", 0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    // prevent background scroll while modal is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <button type="button" onClick={() => { setCount(count + 1); setOpen(true); }} className={BUTTON_CLASS}>
          <Download
            className="size-5 transition-transform group-hover:translate-y-0.5"
            aria-hidden
          />
          Download for Windows
        </button>
        <p className="text-sm text-[#141414]/50">
          <span className="font-semibold text-[#ed3a29]">
            {count.toLocaleString()}
          </span>{" "}
          {count === 1 ? "download" : "downloads"} and counting
        </p>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="loopr-dl-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* overlay */}
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default bg-[#141414]/45 backdrop-blur-sm"
          />

          {/* card */}
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[#141414]/10 bg-[#f7f5f2] p-7 text-left shadow-[0_40px_120px_-30px_rgba(20,20,20,0.55)] sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-[#ff8163]/25 to-transparent blur-3xl"
            />
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-[#141414]/50 transition hover:bg-[#141414]/5 hover:text-[#141414] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141414]/20"
            >
              <X className="size-4" aria-hidden />
            </button>

            <span
              className={cn(
                "relative flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-sm",
                CORAL,
              )}
            >
              <ShieldAlert className="size-6" aria-hidden />
            </span>

            <h2
              id="loopr-dl-title"
              className="relative mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[#141414]"
            >
              One quick heads up
            </h2>

            <p className="relative mt-3 text-[15px] leading-relaxed text-[#6b6560]">
              Loopr is a new app and isn&apos;t code-signed yet, so Windows may
              show a blue or red{" "}
              <span className="font-medium text-[#141414]">
                &ldquo;Windows protected your PC&rdquo;
              </span>{" "}
              SmartScreen message. It&apos;s safe to continue:
            </p>

            <ol className="relative mt-4 space-y-2.5 text-[15px] leading-relaxed text-[#6b6560]">
              <li className="flex gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#141414]/8 text-xs font-semibold text-[#141414]">
                  1
                </span>
                <span>
                  Click <Chip>More info</Chip> on the warning.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#141414]/8 text-xs font-semibold text-[#141414]">
                  2
                </span>
                <span>
                  Then click <Chip>Run anyway</Chip> to install Loopr.
                </span>
              </li>
            </ol>

            <p className="relative mt-4 flex items-start gap-2 rounded-2xl border border-[#141414]/10 bg-white/50 p-3 text-[13px] leading-relaxed text-[#6b6560]">
              <Info className="mt-0.5 size-4 shrink-0 text-[#ed3a29]" aria-hidden />
              <span>
                Still stuck? Right-click <Chip>Loopr-Setup.exe</Chip>, choose
                Properties, then tick <Chip>Unblock</Chip> and Apply.
              </span>
            </p>

            <a
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                "relative mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br text-sm font-semibold text-white shadow-[0_16px_44px_-16px_rgba(237,58,41,0.6)] transition hover:shadow-[0_20px_54px_-14px_rgba(237,58,41,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed3a29]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f2] active:scale-[0.99]",
                CORAL,
              )}
            >
              <Download className="size-4" aria-hidden />
              Continue to download
            </a>
          </div>
        </div>
      )}
    </>
  );
}
