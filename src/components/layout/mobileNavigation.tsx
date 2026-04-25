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

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();
  const pathname = usePathname();

  // Ensure we only render portal on client
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuContent = isOpen && mounted ? (
    <>
      <div className={styles.mobileMenuOverlay} onClick={closeMenu} />
      <nav className={styles.mobileNavigation}>
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
  ) : null;

  return (
    <>
      <button
        className={styles.mobileMenuButton}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <Close className={styles.mobileMenuIcon} size={24} />
        ) : (
          <Burger className={styles.mobileMenuIcon} size={24} />
        )}
      </button>
      {mounted && menuContent && createPortal(menuContent, document.body)}
    </>
  );
}
