/// <reference path="../.astro/types.d.ts" />

interface Window {
  /** Set by BaseLayout when analytics is enabled; records a custom GoatCounter event. */
  trackEvent?: (path: string, title?: string) => void;
  /** GoatCounter's counter API, present once gc.zgo.at/count.js has loaded. */
  goatcounter?: { count: (opts: { path: string; title?: string; event?: boolean }) => void };
}
