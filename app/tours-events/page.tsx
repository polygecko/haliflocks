import styles from './page.module.css';
import EventTabs from './EventTabs';
import PhotoCarousel from '@/app/components/PhotoCarousel';
import { getEvents } from '@/lib/events';

export const metadata = {
  title: 'Tours & Events',
};

export default async function ToursEventsPage() {
  const events = await getEvents();
  const scheduled = events.filter((e) => e.type === 'scheduled');
  const personalized = events.filter((e) => e.type === 'personalized');

  return (
    <main className={styles.body}>
      <div className={styles.glow} />

      <div className={styles.container}>
        <h1 className={styles.heading}>Tours &amp; Events</h1>

        <div className={styles.divider} />

        <PhotoCarousel />

        <section className={styles.intro}>
          <p>HaliFlocks tours are designed to be low barrier for all participants. Tours are enjoyable for people of all levels of experience, age, and background.</p>
          <ul>
            <li>Dress for the weather and wear comfortable shoes</li>
            <li>Be ready to roam around and be patient</li>
            <li>Bring a pair of binoculars if you have one — there will also be some binoculars and monoculars available to borrow at the tour</li>
          </ul>
          <p className={styles.introHighlight}>No registration is required.</p>
          <p>HaliFlocks tours and events mainly take place in Halifax and the surrounding region. HRM and the wider region is a birding hotspot featuring a diverse array of environments that welcome a proportionately diverse range of bird species.</p>
          <p>HaliFlocks is migratory by nature and will also embark on birding opportunities across Nova Scotia. These longer distance birding opportunities will explore special birding hotspots.</p>
          <p><strong>Rain Policy:</strong> Weekly tours in the Halifax Public Gardens follow a rain or shine policy, but do not take place during thunder and lightning.</p>
          <p>Special tour rain dates, unless otherwise stated, will be the day following the scheduled tour. Come back to the website or view the HaliFlocks Instagram Story for updates on tour scheduling and status.</p>
        </section>

        <section className={styles.birdWeek}>
          <div className={styles.birdWeekHeader}>
            <p className={styles.birdWeekLabel}>Featured Event</p>
            <h2 className={styles.birdWeekTitle}>Halifax Bird Week 2026</h2>
            <p className={styles.birdWeekDates}>May 24–30, 2026</p>
          </div>
          <a
            href="https://forms.gle/72sYLK6MHMcwKRo1A"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.birdWeekImageLink}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Website%20Pics%20113A96E8.jpg"
              alt="Halifax Bird Week 2026"
              className={styles.birdWeekImage}
            />
            <span className={styles.birdWeekImageOverlay}>Register Now</span>
          </a>
          <p className={styles.birdWeekBody}>
            Seven days of guided bird walks and educational events across all of Halifax Regional Municipality — welcoming birders of every level. HaliFlocks is proud to participate in this city-wide celebration of birds organized by Bird Friendly Halifax.
          </p>
          <div className={styles.birdWeekActions}>
            <a
              href="https://forms.gle/72sYLK6MHMcwKRo1A"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.birdWeekCta}
            >
              Register for Halifax Bird Week →
            </a>
            <a
              href="https://naturens.ca/events/2026halifaxbirdweek/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.birdWeekCtaSecondary}
            >
              More info about Halifax Bird Week →
            </a>
          </div>
        </section>

        <EventTabs scheduled={scheduled} personalized={personalized} />
      </div>
    </main>
  );
}
