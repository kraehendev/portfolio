import Container from '../atoms/container';
import styles from '../../styles/organisms/footer.module.scss';
import AnimatedLink from './animatedLink';
import { getTranslations } from 'next-intl/server';
import Lantern from '../atoms/lantern';

export default async function Footer() {
  const t = await getTranslations();

  return (
    <footer className={`${styles.footer}`}>
      <Lantern position="left" />
      <div className={styles.footerBackground}></div>
      <Container>
        <div className="flex justify-between items-center">
          <p>© 2026 Florian Kuehne</p>
          <ul className="flex flex-col md:flex-row gap-2">
            <li className="p-4">
              <AnimatedLink href="/legal" label={t('legalNotice')} />
            </li>
            <li className="p-4">
              <AnimatedLink href="/privacy" label={t('privacyPolicy')} />
            </li>
          </ul>
          <div>
            <ul></ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
