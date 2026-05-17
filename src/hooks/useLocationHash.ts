'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function useLocationHash(): string {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const sync = () =>
      setHash(typeof window !== 'undefined' ? window.location.hash : '');
    sync();
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate', sync);
    return () => {
      window.removeEventListener('hashchange', sync);
      window.removeEventListener('popstate', sync);
    };
  }, [pathname]);

  return hash;
}

export function isHashNavActive(
  pathname: string,
  locationHash: string,
  href: string,
): boolean {
  const i = href.indexOf('#');
  if (i === -1) {
    return pathname === href;
  }
  const basePath = href.slice(0, i) || '/';
  const fragment = href.slice(i);
  return pathname === basePath && locationHash === fragment;
}
