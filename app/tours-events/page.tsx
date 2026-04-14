'use client';

import { useState } from 'react';
import styles from './page.module.css';

const scheduledTours = [
  {
    title: 'Dawn Chorus Walk — Point Pleasant Park',
    meta: 'Every Saturday · 6:00 AM · 2 hrs',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod libero vel felis tincidunt, at blandit nulla tincidunt. Sed consequat orci in urna faucibus, nec interdum eros varius. Pellentesque habitant morbi tristique senectus et netus.',
  },
  {
    title: 'Harbour Front Shorebird Survey',
    meta: 'Monthly · 7:30 AM · 3 hrs',
    body: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Fusce commodo aliquam arcu. Nam commodo suscipit quam. Quisque id odio. Praesent venenatis metus at tortor pulvinar varius.',
  },
  {
    title: 'Migrant Warbler Hunt — McNabs Island',
    meta: 'May & September · Full Day',
    body: 'Nullam varius, turpis molestie dictum semper, ex augue imperdiet erat, a porta purus nunc quis velit. Donec ac odio tempor orci dapibus ultrices. Sed blandit libero volutpat sed cras ornare arcu.',
  },
];

const personalizedTours = [
  {
    title: 'Spring Identification Workshop',
    meta: 'April 26 · 2:00 PM · Halifax Library',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, ex augue imperdiet erat.',
  },
  {
    title: 'Big Day Challenge 2026',
    meta: 'May 9 · All Day · Province-wide',
    body: 'Fusce fermentum. Nullam varius, turpis molestie dictum semper, ex augue imperdiet erat, a porta purus nunc quis velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
  },
  {
    title: 'Year-end Potluck & Slideshow',
    meta: 'December 12 · 6:00 PM · The Seahorse Tavern',
    body: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
  },
];

type Tab = 'scheduled' | 'personalized';

export default function ToursEventsPage() {
  const [tab, setTab] = useState<Tab>('scheduled');
  const items = tab === 'scheduled' ? scheduledTours : personalizedTours;

  return (
    <main className={styles.body}>
      <div className={styles.glow} />

      <div className={styles.container}>
        <h1 className={styles.heading}>Tours &amp; Events</h1>

        <div className={styles.divider} />

        {/* Toggle */}
        <div className={styles.toggleWrap} role="tablist">
          <button
            role="tab"
            aria-selected={tab === 'scheduled'}
            className={`${styles.toggleBtn} ${tab === 'scheduled' ? styles.toggleBtnActive : ''}`}
            onClick={() => setTab('scheduled')}
          >
            Scheduled Guided Tours
          </button>
          <button
            role="tab"
            aria-selected={tab === 'personalized'}
            className={`${styles.toggleBtn} ${tab === 'personalized' ? styles.toggleBtnActive : ''}`}
            onClick={() => setTab('personalized')}
          >
            Personalized Guided Tours
          </button>
        </div>

        {/* Cards */}
        <div className={styles.panel} key={tab}>
          {items.map((item) => (
            <div key={item.title} className={styles.card}>
              <p className={styles.cardMeta}>{item.meta}</p>
              <h2 className={styles.cardTitle}>{item.title}</h2>
              <p className={styles.cardBody}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
