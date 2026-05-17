'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

const MIN_VISIBLE_RATIO = 0.5;

function viewportHeightPx(): number {
  return (
    window.visualViewport?.height ??
    document.documentElement.clientHeight ??
    window.innerHeight
  );
}

function visiblePortion(
  el: HTMLElement,
  viewportBottom: number,
): { visiblePx: number; ratio: number } {
  const rect = el.getBoundingClientRect();
  const height = Math.max(rect.height, 1);
  const visibleTop = Math.max(rect.top, 0);
  const visibleBottom = Math.min(rect.bottom, viewportBottom);
  const visiblePx = Math.max(0, visibleBottom - visibleTop);
  return { visiblePx, ratio: visiblePx / height };
}

type Scored = { id: string; index: number; visiblePx: number; ratio: number };

export function useActiveScrollSection(sectionIds: readonly string[]): string {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState(() => sectionIds[0] ?? '');
  const sectionIdsRef = useRef(sectionIds);

  useEffect(() => {
    sectionIdsRef.current = sectionIds;
  }, [sectionIds]);

  useEffect(() => {
    const ids = sectionIdsRef.current;
    if (ids.length === 0) {
      return;
    }

    if (pathname !== '/') {
      setActiveId(ids[0] ?? '');
      return;
    }

    let rafId = 0;

    const tick = () => {
      const list = sectionIdsRef.current;
      const vh = viewportHeightPx();
      const scored: Scored[] = [];

      list.forEach((sid, index) => {
        const el = document.getElementById(sid);
        if (!el) {
          return;
        }
        const { visiblePx, ratio } = visiblePortion(el, vh);
        scored.push({ id: sid, index, visiblePx, ratio });
      });

      if (scored.length === 0) {
        setActiveId(list[0] ?? '');
        return;
      }

      const majority = scored.filter((s) => s.ratio > MIN_VISIBLE_RATIO);

      const pickBest = (candidates: Scored[]): Scored =>
        candidates.reduce((best, s) => {
          if (s.visiblePx !== best.visiblePx) {
            return s.visiblePx > best.visiblePx ? s : best;
          }
          if (s.ratio !== best.ratio) {
            return s.ratio > best.ratio ? s : best;
          }
          return s.index < best.index ? s : best;
        });

      const chosen =
        majority.length > 0 ? pickBest(majority) : pickBest(scored);

      setActiveId(chosen.id);
    };

    const scheduleTick = () => {
      if (rafId !== 0) {
        return;
      }
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        tick();
      });
    };

    tick();
    window.requestAnimationFrame(tick);
    window.addEventListener('scroll', scheduleTick, { passive: true });
    window.addEventListener('resize', scheduleTick);
    return () => {
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', scheduleTick);
      window.removeEventListener('resize', scheduleTick);
    };
  }, [pathname]);

  return activeId;
}
