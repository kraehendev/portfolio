'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const footerLinkBaseClass =
  'block border-l-[3px] border-transparent py-2 pl-3 pr-2 text-left text-foreground no-underline transition-colors duration-200 hover:bg-[var(--elevated-surface-bg)] motion-reduce:transition-none';

const footerLinkActiveClass =
  'border-l-foreground bg-[var(--elevated-surface-bg)] font-semibold';

type FooterProps = {
  className?: string;
  /** Close parent overlay (e.g. mobile drawer) after navigation */
  onLinkClick?: () => void;
};

const footerLinks = [
  { href: '/legal', translationKey: 'legalNotice' as const },
  { href: '/privacy', translationKey: 'privacyPolicy' as const },
];

export default function Footer({ className = '', onLinkClick }: FooterProps) {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <footer
      className={`site-footer-band shrink-0 px-2 text-foreground lg:-mx-3 lg:px-3 ${className}`}
    >
      <p className="mb-3 text-xs text-foreground/90">{t('footer.copyright')}</p>
      <ul className="m-0 flex list-none flex-col gap-0 p-0">
        {footerLinks.map(({ href, translationKey }) => {
          const isActive = pathname === href;
          return (
            <li key={href} className="m-0">
              <Link
                href={href}
                className={`${footerLinkBaseClass} ${isActive ? footerLinkActiveClass : ''}`}
                onClick={onLinkClick}
                aria-current={isActive ? 'page' : undefined}
              >
                {t(translationKey)}
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
