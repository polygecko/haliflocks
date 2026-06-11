'use client';

import { useState, useSyncExternalStore } from 'react';
import type { RareBird } from '@/lib/rareBirds';
import { EBIRD_REGION } from '@/lib/rareBirds';
import styles from './RareBirdBanner.module.css';

const TOGGLE_EVENT = 'haliflocks:rareBirdAlert:toggle';
const MOBILE_QUERY = '(max-width: 600px)';

// Whether the banner is open, as an in-memory session flag shared across the
// layout via a tiny external store. The side tab is desktop-only, so the
// default differs by viewport: on mobile (no tab) the banner starts *open* and
// is simply dismissible; on desktop it starts *closed* and is opened via the
// tab. Once the user explicitly toggles it, that choice wins on either size.
let userToggled: boolean | null = null;

function isBannerOpen(): boolean {
  if (userToggled !== null) return userToggled;
  return window.matchMedia(MOBILE_QUERY).matches;
}

function setBannerOpen(next: boolean): void {
  userToggled = next;
  window.dispatchEvent(new Event(TOGGLE_EVENT));
}

function subscribe(callback: () => void): () => void {
  window.addEventListener(TOGGLE_EVENT, callback);
  const mq = window.matchMedia(MOBILE_QUERY);
  mq.addEventListener('change', callback);
  return () => {
    window.removeEventListener(TOGGLE_EVENT, callback);
    mq.removeEventListener('change', callback);
  };
}

/** Human-friendly day label: "today", "yesterday", or "Jun 10". */
function whenLabel(obsDt: string): string {
  const seen = new Date(obsDt.replace(' ', 'T'));
  if (isNaN(seen.getTime())) return obsDt;

  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  const startOfSeen = new Date(seen);
  startOfSeen.setHours(0, 0, 0, 0);

  const dayDiff = Math.round(
    (startOfToday.getTime() - startOfSeen.getTime()) / 86_400_000
  );
  if (dayDiff <= 0) return 'today';
  if (dayDiff === 1) return 'yesterday';
  if (dayDiff < 7) return `${dayDiff} days ago`;
  return seen.toLocaleDateString('en-CA', { month: 'short', day: 'numeric' });
}

export default function RareBirdBannerClient({ birds }: { birds: RareBird[] }) {
  // Server (and initial client) snapshot is "closed", so the banner is absent
  // from the SSR HTML and only appears once the user opens it via the tab.
  const open = useSyncExternalStore(subscribe, isBannerOpen, () => false);

  // Collapsed shows just the latest sighting; expanded reveals the rest. Resets
  // each time the banner is reopened (the component unmounts while closed).
  const [expanded, setExpanded] = useState(false);

  if (!birds.length) return null;

  const others = birds.length - 1;
  const visible = expanded ? birds : birds.slice(0, 1);

  return (
    <>
      {/* Persistent side tab — the entry point that opens the banner, mirroring
          the "Support HaliFlocks" tab on the same edge. */}
      <button
        type="button"
        className={styles.tab}
        onClick={() => setBannerOpen(!open)}
        aria-expanded={open}
        aria-controls="rare-bird-alert"
        aria-label={open ? 'Hide rare bird alert' : 'Show rare bird alert'}
      >
        Rare Bird Alert
      </button>

      {open && (
        <aside
          id="rare-bird-alert"
          className={styles.banner}
          role="region"
          aria-label="Rare bird alert"
        >
          <div className={styles.header}>
            <span className={styles.flag}>
              <span className={styles.flagTop}>
                <span aria-hidden="true">🦅</span>
                <span className={styles.flagText}>Rare bird alert</span>
              </span>
              <a
                className={styles.attribution}
                href="https://ebird.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Data from eBird
              </a>
            </span>

            <button
              className={styles.close}
              onClick={() => setBannerOpen(false)}
              aria-label="Dismiss rare bird alert"
            >
              ×
            </button>
          </div>

          <ul id="rare-bird-list" className={styles.list}>
            {visible.map((bird) => (
              <li key={bird.checklistUrl}>
                <a
                  className={styles.sighting}
                  href={bird.checklistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong className={styles.species}>{bird.comName}</strong>
                  <span className={styles.detail}>
                    {bird.howMany && bird.howMany > 1 ? `${bird.howMany} · ` : ''}
                    {bird.locName} · {whenLabel(bird.obsDt)}
                    {bird.confirmed ? '' : ' · unconfirmed'}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {others > 0 && (
            <div className={styles.footer}>
              <button
                type="button"
                className={styles.expand}
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                aria-controls="rare-bird-list"
              >
                {expanded
                  ? 'Show less'
                  : `Show ${others} more ${others === 1 ? 'sighting' : 'sightings'}`}
              </button>
              <a
                className={styles.viewAll}
                href={`https://ebird.org/region/${EBIRD_REGION}/recent`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View all on eBird
              </a>
            </div>
          )}
        </aside>
      )}
    </>
  );
}
