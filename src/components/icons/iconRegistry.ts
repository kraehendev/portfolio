import type { ComponentType } from 'react';
import type { IconProps } from '@/utils';

import Briefcase from './briefcase';
import Burger from './burger';
import Close from './close';
import Code from './code';
import Home from './home';
import Mail from './mail';
import User from './user';

export const iconRegistry = {
  briefcase: Briefcase,
  burger: Burger,
  close: Close,
  code: Code,
  home: Home,
  mail: Mail,
  user: User,
} as const satisfies Record<string, ComponentType<IconProps>>;

export type IconRegistryKey = keyof typeof iconRegistry;
