'use client';

import { usePathname } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { navigationData } from '@/data/navigation';
import styles from '../../styles/organisms/navigation.module.scss';
import { useTranslations } from 'next-intl';

export const ConditionalNavigation = () => {
  const pathname = usePathname();
  const t = useTranslations();

  // Only show navigation on home page
  if (pathname !== '/') {
    return null;
  }

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        {navigationData.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.href} className={styles.navItem}>
              <Link href={item.href} className={styles.navLink}>
                <Icon className={styles.backgroundIcon} size={60} />
                <span className={styles.navLabel}>
                  {t(item.translationKey)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
