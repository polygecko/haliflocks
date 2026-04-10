import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'HaliFlocks — Coming Soon',
  description: 'A Halifax birding community. Coming soon.',
};

export default function Home() {
  return (
    <main className={styles.body}>

      {/* Background chevron pattern */}
      <div className={styles.bgPattern}>
        <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="chevrons" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <polyline points="0,40 40,0 80,40" fill="none" stroke="#F5C200" strokeWidth="2.5" />
              <polyline points="0,80 40,40 80,80" fill="none" stroke="#F5C200" strokeWidth="2.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#chevrons)" />
        </svg>
      </div>

      {/* Glow */}
      <div className={styles.glow} />

      {/* Flying birds */}
      <div className={styles.birds}>
        <svg viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 Q10 0 20 10 Q30 0 40 10" stroke="#FFF3B0" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <svg viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 Q10 0 20 10 Q30 0 40 10" stroke="#FFF3B0" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <svg viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 Q10 0 20 10 Q30 0 40 10" stroke="#FFF3B0" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Main content */}
      <div className={styles.container}>

        <div className={styles.logoWrap}>
          <Image
            src="/final-logo-transparent.png"
            alt="HaliFlocks"
            width={360}
            height={360}
            priority
            className={styles.logo}
          />
        </div>

        <div className={styles.wordmark}>
          <p className={styles.sub}>Halifax Birding Community</p>
        </div>

        <div className={styles.divider} />

        <div className={styles.message}>
          <p>
            Something <strong>wonderful</strong> is taking flight.<br />
            Our site is on its way — in the meantime, follow us on Instagram
            for bird sightings, events, and community updates.
          </p>
        </div>

        <div className={styles.cta}>
          <a
            href="https://www.instagram.com/haliflocks/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnInstagram}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#1A4FA0" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" stroke="#1A4FA0" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="#1A4FA0" />
            </svg>
            Follow us on Instagram
          </a>
        </div>

      </div>

      <footer className={styles.footer}>
        Halifax, Nova Scotia &mdash; Est. 2025
      </footer>

    </main>
  );
}
