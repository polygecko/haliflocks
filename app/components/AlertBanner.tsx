'use client';

import { useEffect, useRef, useSyncExternalStore } from 'react';
import styles from './AlertBanner.module.css';

const TOGGLE_EVENT = 'haliflocks:alertBanner:toggle';
const STORAGE_KEY = 'haliflocks:alertBanner:open';

// Edit this message when there's something day-of to announce (e.g. a
// cancellation). Trigger it live by clicking the homepage logo 5x fast, or
// call openAlertBanner() directly. Persisted in localStorage so it survives
// page navigation/reloads (the nav uses full <a> links, not client routing)
// until someone dismisses it.
const REASON = "Today's tour has been cancelled due to weather.";

function todayLabel(): string {
  return new Date().toLocaleDateString('en-CA', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function isOpen(): boolean {
  return localStorage.getItem(STORAGE_KEY) === '1';
}

export function openAlertBanner(): void {
  localStorage.setItem(STORAGE_KEY, '1');
  window.dispatchEvent(new Event(TOGGLE_EVENT));
}

function closeAlertBanner(): void {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(TOGGLE_EVENT));
}

function subscribe(callback: () => void): () => void {
  window.addEventListener(TOGGLE_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(TOGGLE_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

export default function AlertBanner() {
  const isBannerOpen = useSyncExternalStore(subscribe, isOpen, () => false);
  const ref = useRef<HTMLDivElement>(null);

  // Reports its own height into a CSS variable so the fixed navbar and page
  // content can shift down to make room, without hardcoding a pixel value.
  useEffect(() => {
    const root = document.documentElement;
    if (!isBannerOpen) {
      root.style.setProperty('--banner-height', '0px');
      return;
    }
    const el = ref.current;
    if (!el) return;
    const update = () => root.style.setProperty('--banner-height', `${el.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [isBannerOpen]);

  if (!isBannerOpen) return null;

  return (
    <div ref={ref} className={styles.banner} role="alert">
      <span className={styles.message}>⚠️ {todayLabel()}: {REASON}</span>
      <button
        type="button"
        className={styles.close}
        onClick={closeAlertBanner}
        aria-label="Dismiss alert"
      >
        ×
      </button>
    </div>
  );
}
