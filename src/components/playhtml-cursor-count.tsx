"use client";

import { usePlayContext } from "@playhtml/react";

/**
 * Live "N people here now" counter. Reads the number of connected visitors
 * from playhtml's cursor presence (populated because cursors are enabled in
 * the PlayProvider). Everyone here also sees each other's cursors move in
 * real time. Loaded browser-only (see usage) since @playhtml/react touches
 * `document` at import time.
 */
export function PlayhtmlCursorCount() {
  const { cursors, isLoading } = usePlayContext();
  const count = Math.max(cursors?.allColors?.length ?? 0, 1);

  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium text-[#141414]/60">
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
      </span>
      {isLoading ? "connecting…" : `${count} ${count === 1 ? "person" : "people"} here now`}
    </span>
  );
}
