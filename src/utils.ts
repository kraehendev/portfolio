export type IconProps = {
  className?: string;
  size?: number;
};

export function isExternalLink(href?: string): boolean {
  return href ? /^(https?:\/\/|mailto:|tel:)/i.test(href) : false;
}

export function classNameSummary(classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getHashIdFromHref(href: string): string | null {
  const i = href.indexOf('#');
  if (i === -1) {
    return null;
  }
  const id = href.slice(i + 1);
  return id || null;
}

export function getPathFromHashHref(href: string): string {
  const i = href.indexOf('#');
  if (i === -1) {
    return href;
  }
  const path = href.slice(0, i);
  return path === '' ? '/' : path;
}

export function isSamePageHashHref(href: string, pathname: string): boolean {
  return getHashIdFromHref(href) !== null && getPathFromHashHref(href) === pathname;
}

export function scrollToHashId(id: string): void {
  document.getElementById(id)?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth',
  });
}

/** Scroll to a same-page section; re-clicking the active hash still scrolls. */
export function handleSamePageHashClick(
  event: { preventDefault(): void },
  href: string,
  pathname: string,
): void {
  const id = getHashIdFromHref(href);
  if (!id || !isSamePageHashHref(href, pathname)) {
    return;
  }

  event.preventDefault();
  scrollToHashId(id);

  const targetHash = `#${id}`;
  if (window.location.hash !== targetHash) {
    window.history.pushState(null, '', `${pathname}${targetHash}`);
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }
}
