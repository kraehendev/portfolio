import Container from '@/components/ui/container';
import SiteLogo from '@/components/layout/siteLogo';
import SiteNavigation from '@/components/layout/siteNavigation';
import LanguageSwitcher from '@/components/layout/languageSwitcher';
import styles from '@/styles/layout/header.module.scss';

export default function Header() {
  return (
    <header className={`${styles.header} lg:hidden`}>
      <Container classes="!p-0">
        <div className={styles.headerContent}>
          <SiteLogo />
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <SiteNavigation />
          </div>
        </div>
      </Container>
    </header>
  );
}
