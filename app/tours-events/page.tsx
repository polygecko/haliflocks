import styles from './page.module.css';
import EventTabs from './EventTabs';
import { getEvents } from '@/lib/events';

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

        <EventTabs scheduled={scheduled} personalized={personalized} />
      </div>
    </main>
  );
}
