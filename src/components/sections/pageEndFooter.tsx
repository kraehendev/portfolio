import { getTranslations } from 'next-intl/server';

export default async function PageEndFooter() {
  const t = await getTranslations();

  return (
    <footer className="site-footer-band shrink-0 px-4 text-center">
      <p className="m-0 text-base text-foreground/55">{t('pageEnd.madeWith')}</p>
    </footer>
  );
}
