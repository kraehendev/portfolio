import Link from 'next/link';
import Container from '@/components/ui/container';
import SiteNavigation from '@/components/layout/siteNavigation';
import styles from '@/styles/layout/header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container classes="!p-0">
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>Florian Kühne</span>
          </Link>
          <SiteNavigation />
        </div>
      </Container>
    </header>
  );
}
