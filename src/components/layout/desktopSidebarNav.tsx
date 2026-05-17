'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { iconRegistry } from '@/components/icons/iconRegistry';
import PlaneTopView from '@/components/icons/planetopview';
import { navigationData, NAV_SECTION_IDS } from '@/data/navigation';
import { useActiveScrollSection } from '@/hooks/useActiveScrollSection';
import { handleSamePageHashClick } from '@/utils';

const PLANE_ICON_SIZE = 22;
const PLANE_HALF = PLANE_ICON_SIZE / 2;

const linkBaseClass =
  'flex items-center gap-3 border-l-[3px] border-transparent py-3 pl-3 pr-2 text-left text-base xl:text-lg text-foreground no-underline transition-colors duration-200 hover:bg-[var(--elevated-surface-bg)] motion-reduce:transition-none';

const linkActiveClass =
  'border-l-foreground bg-[var(--elevated-surface-bg)] font-semibold';

const planeMotionClass =
  'pointer-events-none absolute left-1 top-0 z-10 hidden w-8 justify-center transition-transform duration-500 ease-out will-change-transform motion-reduce:transition-none xl:flex';

const planeRotateClass =
  'origin-center transition-transform duration-500 ease-out will-change-transform motion-reduce:transition-none';

export default function DesktopSidebarNav() {
  const pathname = usePathname();
  const t = useTranslations();
  const activeSectionId = useActiveScrollSection(NAV_SECTION_IDS);

  const scrollRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [planeY, setPlaneY] = useState(0);
  const [planePointsDown, setPlanePointsDown] = useState(true);
  const prevScrollYRef = useRef(0);

  useEffect(() => {
    if (pathname !== '/') {
      return;
    }
    prevScrollYRef.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const prev = prevScrollYRef.current;

      if (y > prev + 3) {
        setPlanePointsDown(true);
      } else if (y < prev - 3) {
        setPlanePointsDown(false);
      }
      prevScrollYRef.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useLayoutEffect(() => {
    const scroll = scrollRef.current;
    const ul = ulRef.current;
    if (!scroll || !ul) {
      return;
    }

    const measure = () => {
      if (pathname !== '/') {
        setPlaneY(0);
        return;
      }
      const idx = Math.max(0, NAV_SECTION_IDS.indexOf(activeSectionId));
      const li = liRefs.current[idx];
      if (!li) {
        setPlaneY(0);
        return;
      }
      setPlaneY(ul.offsetTop + li.offsetTop + li.offsetHeight / 2 - PLANE_HALF);
    };

    const ro = new ResizeObserver(measure);
    ro.observe(ul);
    ro.observe(scroll);
    measure();
    return () => ro.disconnect();
  }, [activeSectionId, pathname]);

  return (
    <nav
      className="flex min-h-0 flex-1 flex-col overflow-hidden"
      aria-label={t('navigation.main')}
    >
      <div ref={scrollRef} className="relative min-h-0 flex-1 overflow-y-auto">
        {pathname === '/' ? (
          <div
            className={planeMotionClass}
            aria-hidden
            style={{ transform: `translateY(${planeY}px)` }}
          >
            <div
              className={`${planeRotateClass} ${planePointsDown ? 'rotate-180' : ''}`}
            >
              <PlaneTopView
                className="text-foreground"
                size={PLANE_ICON_SIZE}
              />
            </div>
          </div>
        ) : null}
        <ul
          ref={ulRef}
          className="relative m-0 flex min-h-0 list-none flex-col gap-0 p-0 pl-2 xl:pl-10"
        >
          {navigationData.map((item, i) => {
            const Icon = iconRegistry[item.iconKey];
            const sectionId = item.href.replace(/^\/?#/, '');
            const isActive = pathname === '/' && activeSectionId === sectionId;
            return (
              <li
                key={item.href}
                ref={(el) => {
                  liRefs.current[i] = el;
                }}
                className="m-0"
              >
                <Link
                  href={item.href}
                  className={`${linkBaseClass} ${isActive ? linkActiveClass : ''}`}
                  onClick={(event) =>
                    handleSamePageHashClick(event, item.href, pathname)
                  }
                >
                  <Icon className="shrink-0 text-foreground" size={22} />
                  <span className="min-w-0 flex-1 break-words leading-snug">
                    {t(item.translationKey)}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
