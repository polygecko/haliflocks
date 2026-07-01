'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styles from '../page.module.css';
import { openAlertBanner } from './AlertBanner';

const CLICKS_REQUIRED = 5;
const CLICK_WINDOW_MS = 1500;

export default function HomeLogo() {
  const clicks = useRef({ count: 0, last: 0 });

  const handleClick = () => {
    const now = Date.now();
    const state = clicks.current;
    state.count = now - state.last < CLICK_WINDOW_MS ? state.count + 1 : 1;
    state.last = now;
    if (state.count >= CLICKS_REQUIRED) {
      state.count = 0;
      openAlertBanner();
    }
  };

  return (
    <div className={styles.logoWrap} onClick={handleClick}>
      <Image
        src="/images/uploads/haliflocks_logo_circle.png"
        alt="HaliFlocks"
        width={360}
        height={360}
        priority
        className={styles.logo}
      />
    </div>
  );
}
