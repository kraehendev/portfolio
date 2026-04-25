import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { navigationData } from '@/data/navigation';
import Container from '@/components/ui/container';
import MobileNavigation from '@/components/layout/mobileNavigation';
import styles from '@/styles/layout/header.module.scss';
import Cloud from '@/components/icons/cloud';
import Airplane from '@/components/icons/airplane';

export default async function Header() {
  const t = await getTranslations();

  return (
    <header className={styles.header}>
      <Container classes="!p-0">
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>Florian Kuehne</span>
          </Link>
          <nav className={styles.navigation}>
            <ul className={styles.navList}>
              {navigationData.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href} className={styles.navItem}>
                    <Link href={item.href} className={styles.navLink}>
                      <Icon className={styles.navIcon} size={20} />
                      <span className={styles.navLabel}>
                        {t(item.translationKey)}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
