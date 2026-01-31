import type { ReactNode } from 'react';
import Container from '@/components/atoms/container';
import Airplane from '@/components/icons/airplane';
import Cloud from '@/components/icons/cloud';
import Moon from '@/components/icons/moon';
import Sun from '@/components/icons/sun';
import styles from '@/styles/organisms/header.module.scss';

type HeaderProps = {
  children?: ReactNode;
  className?: string;
};

export default function Header({ children, className = '' }: HeaderProps) {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.skyContainer}>
        <div className={styles.celestialBody}>
          <Moon className={styles.moon} size={80} />
          <Sun className={styles.sun} size={90} />
        </div>
        <div className={styles.cloud1}>
          <Cloud className={styles.cloudIcon} size={120} />
        </div>
        <div className={styles.cloud2}>
          <Cloud className={styles.cloudIcon} size={80} />
        </div>
        <div className={styles.cloud3}>
          <Cloud className={styles.cloudIcon} size={100} />
        </div>
        <div className={styles.cloud4}>
          <Cloud className={styles.cloudIcon} size={60} />
        </div>
        <div className={styles.airplaneTop}>
          <Airplane
            className={styles.airplaneIcon}
            size={96}
            accentColor="#ff1010"
          />
        </div>
        <div className={styles.airplaneMiddle}>
          <Airplane
            className={styles.airplaneIcon}
            size={96}
            accentColor="#00235e"
          />
        </div>
        <div className={styles.airplaneBottom}>
          <Airplane
            className={styles.airplaneIcon}
            size={72}
            accentColor="#ff5919"
          />
        </div>
      </div>
      <Container>{children}</Container>
    </header>
  );
}
