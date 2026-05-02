import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import PayPalButton from './components/PayPalButton';

export const metadata = {
  title: { absolute: 'HaliFlocks: Join The Flock' },
  description: 'A hub for the growing birder community of Halifax and beyond.',
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
          <p className={styles.sub}>a hub for the growing birder community of Halifax and beyond</p>
        </div>

        <div className={styles.divider} />

        <section className={styles.defSection}>

          <div className={styles.defEntry}>
            <h2 className={styles.defHeadword}>HaliFlocks</h2>
            <div className={styles.defHeader}>
              <span className={styles.partOfSpeech}>proper noun</span>
              <span className={styles.pronunciation}>HAL-ih-flo:ks</span>
            </div>
            <div className={styles.defBody}>
              <p>HaliFlocks is a reference to the many breathtaking birding opportunities in this awesome city and surrounding region. These opportunities are being realized by a growing community of people flocking around an interest in birds.</p>
              <p>Hali-flocks can also be thought of as an abbreviated reference to the well-known fact that Haligonians flock! More and more people in Halifax are taking part in the age-old custom of birding and having fun witnessing bird behaviour together. While birding solo comes with its own gratification, birding together comes with a special feeling of collective learning. In HaliFlocks tours, you will meet passionately educated guides with encyclopedic knowledge on many of the birds you will encounter.</p>
            </div>
          </div>

          <div className={styles.defSep} />

          <div className={styles.defEntry}>
            <h2 className={styles.defHeadword}>Birding</h2>
            <div className={styles.defHeader}>
              <span className={styles.partOfSpeech}>verb</span>
            </div>
            <ol className={styles.defList}>
              <li>the act of pursuing observations of avian species, successfully or unsuccessfully,</li>
              <li>getting a significant amount of joy out of seeing a bird in its natural habitat, occasionally taking note of specific appearances or behaviours.</li>
              <li><strong>an activity that you can take part in by joining HaliFlocks</strong></li>
            </ol>
            <p className={styles.defNote}>Birding can be enjoyed in your backyards, everyday routines, roaming rambles, and guided tours!</p>
            <div className={styles.defSep} />
            <div className={styles.defBody}>
              <p>Not everyone identifies as being from Halifax or a Haligonian. Halifax Regional Municipality is made up of a diverse range of communities, each with own history, associations, and assets. HaliFlocks seeks to explore respectfully the many distinct communities that make up the area now called Halifax.</p>
              <p>With respect for the varied histories of Halifax communities that we have so much to learn from, HaliFlocks gathers around the important lessons that we can learn from nature. By considering what can be learned by those that came before us, birding can foster an appreciation for historical annual migrations, bird adaptation, and cohabitation.</p>
              <p>HaliFlocks is a migratory group and will at times even chart birding expeditions across Nova Scotia (we haven&rsquo;t come up with a play on words for Nova Scotia yet). Visit the <Link href="/tours-events" className={styles.defLink}>Bird Tours tab</Link> to learn more about how to attend HaliFlocks tours.</p>
            </div>
          </div>

        </section>

      </div>

      <section id="support" className={styles.supportSection}>
        <PayPalButton />
      </section>

      <footer className={styles.footer}>
        Halifax, Nova Scotia &mdash; Est. 2025
      </footer>

    </main>
  );
}
