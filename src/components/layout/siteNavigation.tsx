'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { navigationData } from '@/data/navigation';
import Burger from '@/components/icons/burger';
import Close from '@/components/icons/close';
import styles from '@/styles/layout/header.module.scss';

const NAV_ID = 'site-navigation';

const BODY_NAV_OPEN = 'site-nav-open';

export default function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  const pathname = usePathname();

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
    <>
      <button
        type="button"
        className={styles.mobileMenuButton}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls={NAV_ID}
      >
        <Burger className={styles.mobileMenuIcon} size={24} />
      </button>
      {isOpen ? (
        <div
          className={styles.mobileMenuOverlay}
          onClick={closeMenu}
          aria-hidden
        />
      ) : null}
      <nav
        id={NAV_ID}
        className={`${styles.siteNavigation} ${isOpen ? styles.siteNavigationOpen : ''}`}
        aria-label={t('navigation.main')}
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
      >
        <div>
          <button
            type="button"
            className={styles.mobileMenuCloseButton}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <Close className={styles.mobileMenuIcon} size={24} />
          </button>
        </div>
        <ul className={styles.mobileNavList}>
          {navigationData.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className={styles.mobileNavItem}>
                <Link
                  href={item.href}
                  className={`${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  <Icon className={styles.mobileNavIcon} size={24} />
                  <span className={styles.mobileNavLabel}>
                    {t(item.translationKey)}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
