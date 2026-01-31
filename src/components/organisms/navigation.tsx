import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { navigationData } from '@/data/navigation';
import styles from '../../styles/organisms/navigation.module.scss';

export const Navigation = async () => {
  const t = await getTranslations();

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
