import type { IconRegistryKey } from '@/components/icons/iconRegistry';

export type NavigationItem = {
  /** Same-page anchor on `/` — pathname stays `/`, only the hash changes */
  href: string;
  translationKey: string;
  iconKey: IconRegistryKey;
};

export const navigationData: NavigationItem[] = [
  {
    href: '/#welcome',
    translationKey: 'navigation.welcome',
    iconKey: 'home',
  },
  {
    href: '/#techstack',
    translationKey: 'navigation.tech',
    iconKey: 'code',
  },
  {
    href: '/#about',
    translationKey: 'navigation.me',
    iconKey: 'user',
  },
  {
    href: '/#career',
    translationKey: 'navigation.career',
    iconKey: 'briefcase',
  },
  {
    href: '/#contact',
    translationKey: 'navigation.contact',
    iconKey: 'mail',
  },
];

/** Section ids for scroll-spy / sidebar plane (order matches `navigationData`). */
export const NAV_SECTION_IDS: readonly string[] = navigationData.map((item) =>
  item.href.replace(/^\/?#/, ''),
);
