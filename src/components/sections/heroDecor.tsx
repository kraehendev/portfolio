import Cloud from '@/components/icons/cloud';
import Moon from '@/components/icons/moon';
import Airplane from '@/components/icons/airplane';
import styles from '@/styles/sections/heroSection.module.scss';

const clouds = [
  { className: styles.cloud1, size: 120, faint: false },
  { className: styles.cloud2, size: 80, faint: false },
  { className: styles.cloud3, size: 100, faint: false },
  { className: styles.cloud4, size: 60, faint: false },
  { className: styles.cloud5, size: 88, faint: true },
  { className: styles.cloud6, size: 72, faint: false },
  { className: styles.cloud7, size: 96, faint: true },
  { className: styles.cloud8, size: 64, faint: false },
  { className: styles.cloud9, size: 56, faint: true },
] as const;

export default function HeroDecor() {
  return (
    <div className={styles.decor} aria-hidden>
      <div className={styles.moon}>
        <Moon size={88} />
      </div>
      {clouds.map((cloud) => (
        <div key={cloud.className} className={cloud.className}>
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
      <div className={styles.airplaneBottom}>
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
