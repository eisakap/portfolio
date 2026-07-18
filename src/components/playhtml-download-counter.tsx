"use client";

import { withSharedState } from "@playhtml/react";
import { Download } from "lucide-react";

import { cn } from "@/lib/utils";

const CORAL = "from-[#ff8163] to-[#ed3a29]";

const BUTTON_CLASS = cn(
  "group inline-flex h-14 items-center gap-3 rounded-full bg-gradient-to-br px-8 text-base font-semibold tracking-tight text-white shadow-[0_18px_50px_-16px_rgba(237,58,41,0.6)] transition hover:shadow-[0_22px_60px_-14px_rgba(237,58,41,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed3a29]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f2] active:scale-[0.98]",
  CORAL,
);

/**
 * Download button with a live, shared download counter (playhtml
 * `withSharedState`). Every click increments a count that's synced + persisted
 * across all visitors, then the actual .exe download proceeds. Loaded
 * browser-only since @playhtml/react touches `document` at import time.
 */
export const LooprDownloadButton = withSharedState(
  {
    defaultData: { count: 0 },
    id: "loopr-download-count",
    // render immediately with the default count instead of hiding pre-sync
    loading: { behavior: "none" },
  },
  ({ data, setData }, { href }: { href: string }) => {
    const count = data?.count ?? 0;
    return (
      <div className="flex flex-col items-center gap-3">
        <a
          href={href}
          onClick={() => setData({ count: count + 1 })}
          className={BUTTON_CLASS}
        >
          <Download
            className="size-5 transition-transform group-hover:translate-y-0.5"
            aria-hidden
          />
          Download for Windows
        </a>
        <p className="text-sm text-[#141414]/50">
          <span className="font-semibold text-[#ed3a29]">
            {count.toLocaleString()}
          </span>{" "}
          {count === 1 ? "download" : "downloads"} and counting
        </p>
      </div>
    );
  },
);
