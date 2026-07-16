"use client";

import { CanMoveElement } from "@playhtml/react";

/**
 * A draggable "magnet" — playhtml's `can-move`. Drag it around; its position is
 * shared + persisted across every visitor. With no `bounds` it can roam the
 * whole page. Loaded browser-only since @playhtml/react touches `document` at
 * import time.
 */
export function PlayhtmlMagnet({
  id = "studdle-magnet",
  src = "/studdle_magnet.png",
  bounds,
  className = "",
}: {
  id?: string;
  src?: string;
  bounds?: string;
  className?: string;
}) {
  // Only constrain visibility when bounds are set; unbounded = free roam.
  const boundProps = bounds
    ? { bounds, boundsMinVisible: 0.6, boundsMinVisiblePx: 40 }
    : {};

  return (
    <CanMoveElement shared {...boundProps}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id={id}
        src={src}
        alt="Studdle — drag me around"
        title="drag me!"
        draggable={false}
        style={{ cursor: "grab", touchAction: "none" }}
        className={`select-none drop-shadow-[0_10px_30px_-10px_rgba(80,40,180,0.45)] ${className}`}
      />
    </CanMoveElement>
  );
}
