'use client';

import { useState } from 'react';
import styles from './page.module.css';
import type { CMSEvent } from '@/lib/events';

interface Props {
  scheduled: CMSEvent[];
  personalized: CMSEvent[];
}

type Tab = 'scheduled' | 'personalized';

export default function EventTabs({ scheduled, personalized }: Props) {
  const [tab, setTab] = useState<Tab>('scheduled');
  const items = tab === 'scheduled' ? scheduled : personalized;

  return (
    <>
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
        {items.length === 0 ? (
          <p className={styles.empty}>No events scheduled yet — check back soon!</p>
        ) : (
          items.map((item) => (
            <div key={item.slug} className={styles.card}>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.cardImage}
                />
              )}
              <p className={styles.cardMeta}>{item.meta}</p>
              <h2 className={styles.cardTitle}>{item.title}</h2>
              <div
                className={styles.cardBody}
                dangerouslySetInnerHTML={{ __html: item.bodyHtml }}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
}
