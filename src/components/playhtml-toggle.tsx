"use client";

import { withSharedState } from "@playhtml/react";

/**
 * Optional demo component to confirm playhtml is wired up.
 *
 * It renders a square whose on/off state is shared and persisted across
 * every visitor in real time. Drop <PlayhtmlToggle /> anywhere inside the
 * app (the PlayProvider in the root layout supplies the connection) and
 * open the page in two tabs to watch the state sync.
 *
 * Safe to delete once you've confirmed playhtml is working.
 */
export const PlayhtmlToggle = withSharedState(
  { defaultData: { on: false } },
  ({ data, setData }) => {
    return (
      <button
        type="button"
        aria-pressed={data.on}
        onClick={() => setData({ on: !data.on })}
        style={{
          width: 64,
          height: 64,
          borderRadius: 12,
          border: "none",
          cursor: "pointer",
          background: data.on ? "#16a34a" : "#dc2626",
          transition: "background 150ms ease",
        }}
      />
    );
  }
);
