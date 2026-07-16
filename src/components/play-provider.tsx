"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ComponentType } from "react";

/**
 * Client-side wrapper around playhtml's PlayProvider.
 *
 * `@playhtml/react` touches `document` at import time, which crashes during
 * server-side rendering (the "use client" directive is not enough — Next.js
 * still evaluates client modules on the server). To avoid that, we import the
 * package lazily inside a browser-only effect.
 *
 * Before the import resolves we render the children unwrapped, so:
 *   - the page is still fully server-rendered (good for SEO), and
 *   - the first client render matches the server HTML (no hydration mismatch).
 * Once playhtml loads in the browser, we re-render with the real provider.
 *
 * The `pathname` prop is forwarded from Next.js' App Router so playhtml
 * rebuilds its rooms and re-scans the DOM on client-side route changes.
 */
export function PlayhtmlProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Provider, setProvider] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    let active = true;
    import("@playhtml/react").then((mod) => {
      if (active) {
        // store the component in state; wrap in a function so React doesn't
        // treat the component itself as a state updater.
        setProvider(() => mod.PlayProvider);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  if (!Provider) {
    return <>{children}</>;
  }

  return (
    <Provider
      pathname={pathname}
      initOptions={{
        // room defaults to window.location.pathname + search.
        // Enable live cursors across the whole site:
        cursors: {
          enabled: true,
          room: "domain",
        },
      }}
    >
      {children}
    </Provider>
  );
}
