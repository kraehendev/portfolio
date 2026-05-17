import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import styles from '@/styles/layout/header.module.scss';

export default async function SiteLogo() {
  const t = await getTranslations();

  return (
    <Link href="/" className={styles.logo}>
      <span className={styles.logoText}>{t('siteLogo')}</span>
    </Link>
  );
}
