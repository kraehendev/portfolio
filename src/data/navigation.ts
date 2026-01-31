import type { ComponentType } from 'react';
import type { IconProps } from '@/utils';
import User from '@/components/icons/user';
import Code from '@/components/icons/code';
import Camera from '@/components/icons/camera';
import Mail from '@/components/icons/mail';

export type NavigationItem = {
  href: string;
  translationKey: string;
  icon: ComponentType<IconProps>;
};

/**
 * Navigation configuration
 * To change icons, simply import a different icon component and replace it here
 */
export const navigationData: NavigationItem[] = [
  {
    href: '/aboutme',
    translationKey: 'navigation.me',
    icon: User,
  },
  {
    href: '/techstack',
    translationKey: 'navigation.tech',
    icon: Code,
  },
  {
    href: '/career',
    translationKey: 'navigation.career',
    icon: Mail,
  },
  {
    href: '/contact',
    translationKey: 'navigation.contact',
    icon: Mail,
  },
  {
    href: '/media',
    translationKey: 'navigation.photosVideos',
    icon: Camera,
  },
];
