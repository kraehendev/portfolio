'use client';

import { useEffect, useRef, useState } from 'react';
import Cloud from '@/components/icons/cloud';
import Moon from '@/components/icons/moon';
import Airplane from '@/components/icons/airplane';
import styles from '@/styles/sections/heroSection.module.scss';

const clouds = [
  { className: styles.cloud1, size: 120, faint: false, mobile: true },
  { className: styles.cloud2, size: 80, faint: false, mobile: true },
  { className: styles.cloud3, size: 100, faint: false, mobile: true },
  { className: styles.cloud4, size: 60, faint: false, mobile: true },
  { className: styles.cloud5, size: 88, faint: true, mobile: false },
  { className: styles.cloud6, size: 72, faint: false, mobile: false },
  { className: styles.cloud7, size: 96, faint: true, mobile: false },
  { className: styles.cloud8, size: 64, faint: false, mobile: false },
  { className: styles.cloud9, size: 56, faint: true, mobile: false },
] as const;

export default function HeroDecor() {
  const decorRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = decorRef.current;
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPaused(!entry.isIntersecting);
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={decorRef}
      className={styles.decor}
      data-paused={paused ? 'true' : 'false'}
      aria-hidden
    >
      <div className={`${styles.moon} ${styles.hideBelowLg}`}>
        <Moon size={88} />
      </div>
      {clouds.map((cloud) => (
        <div
          key={cloud.className}
          className={`${cloud.className} ${cloud.mobile ? '' : styles.hideBelowLg}`}
        >
          <Cloud
            className={cloud.faint ? styles.cloudIconFaint : styles.cloudIcon}
            size={cloud.size}
          />
        </div>
      ))}
      <div className={styles.airplaneTop}>
        <Airplane
          className={styles.airplaneIcon}
          size={96}
          accentColor="#ff1010"
          logoColor="#ffffff"
          showContrail
        />
      </div>
      <div className={`${styles.airplaneMiddleTop} [--airplane-body:#ffffff]`}>
        <Airplane
          className={styles.airplaneIcon}
          size={72}
          accentColor="#ffffff"
          verticalStripes
          stripeColor="#da0073"
          logoBorderColor="#000000"
          showContrail
        />
      </div>
      <div className={styles.airplaneMiddleBottom}>
        <Airplane
          className={styles.airplaneIcon}
          size={96}
          accentColor="#00235e"
          logoColor="#ffb700"
          logoBorderColor="#000000"
          showContrail
          mirrored
        />
      </div>
      <div className={`${styles.airplaneBottom} ${styles.hideBelowLg}`}>
        <Airplane
          className={styles.airplaneIcon}
          size={84}
          accentColor="#ff5919"
          showContrail
        />
      </div>
    </div>
  );
}
