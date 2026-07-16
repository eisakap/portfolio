"use client";

import { CanToggleElement } from "@playhtml/react";

/**
 * A shared, clickable hanging lamp powered by playhtml's `can-toggle`
 * capability. Clicking it turns the light on/off, and the state is synced +
 * persisted across every visitor in real time (thanks to `shared` + a stable
 * `id`). The `can-toggle` capability wires the click handler itself, so we must
 * NOT add our own onClick — we only read `data.on` to render the glow. Keyboard
 * activation is added separately via onKeyDown so it doesn't double-toggle.
 *
 * Sizing is controlled via the *ClassName props so the same lamp can be small
 * (a corner accent) or large (a hero centerpiece).
 */
export function PlayhtmlLamp({
  id = "portfolio-lamp",
  src = "/noguchi-hanging-lamp.png",
  className = "",
  cordClassName = "h-16 w-px sm:h-24",
  imgClassName = "h-32 w-auto sm:h-44",
  glowClassName = "top-[3.5rem] size-40 sm:top-20 sm:size-52",
}: {
  id?: string;
  src?: string;
  className?: string;
  cordClassName?: string;
  imgClassName?: string;
  glowClassName?: string;
}) {
  return (
    <CanToggleElement shared>
      {({ data, setData }) => {
        const on =
          typeof data === "object" && data !== null
            ? Boolean((data as { on?: boolean }).on)
            : Boolean(data);

        return (
          <div
            id={id}
            role="button"
            tabIndex={0}
            aria-pressed={on}
            aria-label={on ? "Turn the lamp off" : "Turn the lamp on"}
            title={on ? "Click to turn off" : "Click to turn on"}
            onKeyDown={(e) => {
              // Click is handled by the can-toggle capability; only handle keys.
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setData({ on: !on });
              }
            }}
            className={`group relative flex cursor-pointer select-none flex-col items-center outline-none ${className}`}
          >
            {/* cord */}
            <span
              aria-hidden
              className={`bg-[#141414]/25 ${cordClassName}`}
            />

            {/* warm glow pool behind the shade, only when on */}
            <span
              aria-hidden
              className={`pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 rounded-full blur-2xl transition-opacity duration-500 ${glowClassName}`}
              style={{
                background:
                  "radial-gradient(circle, rgba(247,220,156,0.85), rgba(247,220,156,0) 70%)",
                opacity: on ? 1 : 0,
              }}
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              draggable={false}
              className={`w-auto transition-[filter] duration-300 ${imgClassName}`}
              style={{
                filter: on
                  ? "brightness(1.18) saturate(1.5) drop-shadow(0 0 55px rgba(247,220,156,0.9))"
                  : "brightness(0.92)",
              }}
            />
          </div>
        );
      }}
    </CanToggleElement>
  );
}
