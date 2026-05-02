import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <main className={styles.body}>
      <div className={styles.glow} />

      <div className={styles.container}>
        <h1 className={styles.heading}>Contact</h1>
        <div className={styles.divider} />

        <p className={styles.lead}>
          We&apos;d love to hear from you — whether you&apos;re interested in a guided tour,
          have questions about an upcoming event, or just want to connect with the community.
        </p>

        <div className={styles.cta}>
          <a href="mailto:tours@haliflocks.ca" className={styles.btnContact}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
              <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
              <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            tours@haliflocks.ca
          </a>

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

        <div className={styles.photo}>
          <Image
            src="/photography/PublicGardens (1).jpg"
            alt="Public Gardens, Halifax"
            width={520}
            height={340}
            className={styles.photoImg}
          />
        </div>
      </div>
    </main>
  );
}
