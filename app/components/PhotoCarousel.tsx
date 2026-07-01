'use client';

import { useState, useEffect } from 'react';
import styles from './PhotoCarousel.module.css';

const images = [
  '/photography/03C0C230-BCE0-46A1-825A-45413408AB2E.JPG',
  '/photography/794914DB-1822-40F7-B2E1-6E0BFF60A070.jpg',
  '/photography/IMG_3415.jpg',
  '/photography/IMG_3846.jpeg',
  '/photography/IMG_6558 (1).jpg',
  '/photography/IMG_6559 (1).jpg',
  '/photography/IMG_6945.jpeg',
  '/photography/IMG_6969.jpeg',
  '/photography/IMG_7051.jpeg',
  '/photography/IMG_8674.jpeg',
  '/photography/IMG_8860.jpeg',
  '/photography/PublicGardens (1).jpg',
  '/photography/att.KKxSDhRVm9j2dHAZR8lL2Eq0bK8s4RrUtSgl_rN_S8w.jpg',
  '/photography/mostsmiles.jpeg',
  '/photography/website-pic-0202.jpeg',
  '/photography/website-pic-0342.jpg',
  '/photography/website-pic-0421.jpg',
  '/photography/website-pic-0441.jpg',
  '/photography/website-pic-1284.jpeg',
  '/photography/website-pic-1289.jpeg',
  '/photography/website-pic-9095.jpg',
  '/photography/website-pics-1.jpg',
  '/photography/website-pics-0299.jpg',
  '/photography/website-pics-img-0111.jpeg',
  '/photography/website-pics-img-0151.jpeg',
  '/photography/website-pics-img-0323.jpeg',
  '/photography/website-pics-image-1.jpg',
  '/photography/website-pics-image.jpg',
  '/photography/website-pics.jpg',
];

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.carousel}>
      {images.map((src, i) => (
        <div
          key={src}
          className={`${styles.slide} ${i === current ? styles.visible : ''}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={encodeURI(src)}
            alt="HaliFlocks birding photography"
            className={styles.img}
          />
        </div>
      ))}
      <div className={styles.dots}>
        {images.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
