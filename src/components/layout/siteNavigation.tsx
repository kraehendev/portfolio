'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { iconRegistry } from '@/components/icons/iconRegistry';
import { navigationData, NAV_SECTION_IDS } from '@/data/navigation';
import { IconButton } from '@/components/ui/iconButton';
import { isHashNavActive, useLocationHash } from '@/hooks/useLocationHash';
import { useActiveScrollSection } from '@/hooks/useActiveScrollSection';
import { handleSamePageHashClick } from '@/utils';
import Footer from '@/components/layout/footer';
import LanguageSwitcher from '@/components/layout/languageSwitcher';

const NAV_ID = 'site-navigation';

const BODY_NAV_OPEN = 'site-nav-open';

const drawerPanelClass =
  'fixed top-0 right-0 z-[1200] flex h-screen w-[90vw] flex-col overflow-hidden border-l border-[var(--elevated-surface-border)] bg-background shadow-[-2px_0_8px_var(--elevated-surface-shadow)] transition-[transform,visibility] duration-300 ease-out motion-reduce:transition-none';

const navClosedClass = 'invisible pointer-events-none translate-x-full';
const navOpenClass = 'visible pointer-events-auto translate-x-0';

const mobileNavLinkBaseClass =
  'flex items-center gap-4 border-l-[3px] border-transparent py-4 pl-6 pr-6 text-foreground no-underline transition-colors duration-200 hover:bg-[var(--elevated-surface-bg)]';

const mobileNavLinkActiveClass =
  'border-l-foreground bg-[var(--elevated-surface-bg)] font-semibold';

export default function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  const pathname = usePathname();
  const hash = useLocationHash();
  const activeSectionId = useActiveScrollSection(NAV_SECTION_IDS);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(BODY_NAV_OPEN);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove(BODY_NAV_OPEN);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove(BODY_NAV_OPEN);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div>
      <IconButton
        label={t('navigation.menu')}
        iconSlug="burger"
        iconSize={24}
        onClick={toggleMenu}
        aria-label={t('navigation.openMenu')}
        aria-expanded={isOpen}
        aria-controls={NAV_ID}
      />
      {isOpen ? (
        <div
          className="fixed inset-0 z-[1050] bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden
        />
      ) : null}
      <div
        id={NAV_ID}
        className={`${drawerPanelClass} ${isOpen ? navOpenClass : navClosedClass}`}
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
      >
        <div className="flex shrink-0 justify-end p-2">
          <IconButton
            label={t('navigation.close')}
            iconSlug="close"
            iconSize={24}
            onClick={closeMenu}
            aria-label={t('navigation.closeMenu')}
            aria-controls={NAV_ID}
          />
        </div>
        <nav
          className="flex min-h-0 flex-1 flex-col overflow-y-auto"
          aria-label={t('navigation.main')}
        >
          <ul className="m-0 flex list-none flex-col py-4 px-0">
            {navigationData.map((item) => {
              const Icon = iconRegistry[item.iconKey];
              const sectionId = item.href.replace(/^\/?#/, '');
              const isActive =
                pathname === '/' &&
                (activeSectionId === sectionId ||
                  isHashNavActive(pathname, hash, item.href));
              return (
                <li key={item.href} className="m-0">
                  <Link
                    href={item.href}
                    className={`${mobileNavLinkBaseClass} ${isActive ? mobileNavLinkActiveClass : ''}`}
                    onClick={(event) => {
                      handleSamePageHashClick(event, item.href, pathname);
                      closeMenu();
                    }}
                  >
                    <Icon className="shrink-0 text-foreground" size={24} />
                    <span className="flex-1">{t(item.translationKey)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="shrink-0 border-t border-[var(--elevated-surface-border)] px-4 py-3">
          <LanguageSwitcher />
        </div>
        <Footer onLinkClick={closeMenu} />
      </div>
    </div>
  );
}
