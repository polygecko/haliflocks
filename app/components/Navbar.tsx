'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';

const links = [
  { label: 'Home',    href: '/',        live: true  },
  { label: 'Tours & Events', href: '/tours-events', live: true  },
  { label: 'Games',   href: '/games',   live: false },
  { label: 'Contact', href: '/contact', live: true  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.brand}>HaliFlocks</a>

      {/* Mobile hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Nav links */}
      <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
        {links.map(({ label, href, live }) => (
          <li key={label}>
            {live ? (
              <a href={href} className={styles.link} onClick={() => setOpen(false)}>
                {label}
              </a>
            ) : (
              <span className={`${styles.link} ${styles.linkDisabled}`}>
                {label}
                <span className={styles.tooltip}>Coming soon</span>
              </span>
            )}
          </li>
        ))}
        <li>
          <a href="/#support" className={`${styles.link} ${styles.supportLink}`} onClick={() => setOpen(false)}>
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
}
