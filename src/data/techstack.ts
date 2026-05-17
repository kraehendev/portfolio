import type { ComponentType } from 'react';
import type { SkillBadgeTheme } from '@/components/ui/badgeThemes';
import type { IconProps } from '@/utils';
import Atom from '@/components/icons/logo/atom';
import Aws from '@/components/icons/logo/aws';
import Bem from '@/components/icons/logo/bem';
import Contentful from '@/components/icons/logo/contentful';
import Css from '@/components/icons/logo/css';
import Cypress from '@/components/icons/logo/cypress';
import Docker from '@/components/icons/logo/docker';
import Express from '@/components/icons/logo/express';
import Git from '@/components/icons/logo/git';
import GitLab from '@/components/icons/logo/gitlab';
import Html from '@/components/icons/logo/html';
import Javascript from '@/components/icons/logo/javascript';
import Jest from '@/components/icons/logo/jest';
import Kanban from '@/components/icons/logo/kanban';
import Kubernetes from '@/components/icons/logo/kubernetes';
import MongoDB from '@/components/icons/logo/mongodb';
import MySql from '@/components/icons/logo/mysql';
import Nextjs from '@/components/icons/logo/nextjs';
import Nodejs from '@/components/icons/logo/nodejs';
import PhpElephant from '@/components/icons/logo/phpelephant';
import Python from '@/components/icons/logo/python';
import React from '@/components/icons/logo/react';
import Remix from '@/components/icons/logo/remix';
import Sass from '@/components/icons/logo/sass';
import Scrum from '@/components/icons/logo/scrum';
import Shopify from '@/components/icons/logo/shopify';
import Storybook from '@/components/icons/logo/storybook';
import StyledComponents from '@/components/icons/logo/styledcomponents';
import Tailwind from '@/components/icons/logo/tailwind';
import Typescript from '@/components/icons/logo/typescript';
import Vercel from '@/components/icons/logo/vercel';
import Vue from '@/components/icons/logo/vue';

export type TechstackLevel = SkillBadgeTheme;

export type TechstackCategoryKey =
  | 'languages'
  | 'frameworks'
  | 'cms'
  | 'tools'
  | 'methods';

export type TechstackItem = {
  label: string;
  level: TechstackLevel;
  icon?: ComponentType<IconProps>;
};

export type TechstackCategory = {
  categoryKey: TechstackCategoryKey;
  items: TechstackItem[];
};

export const techstackData: TechstackCategory[] = [
  {
    categoryKey: 'languages',
    items: [
      { label: 'HTML', level: 'primary', icon: Html },
      { label: 'CSS', level: 'primary', icon: Css },
      { label: 'SASS', level: 'primary', icon: Sass },
      { label: 'Typescript', level: 'primary', icon: Typescript },
      { label: 'JavaScript', level: 'primary', icon: Javascript },
      { label: 'Node.js', level: 'secondary', icon: Nodejs },
      { label: 'MySQL', level: 'secondary', icon: MySql },
      { label: 'Python', level: 'tertiary', icon: Python },
      { label: 'PHP', level: 'tertiary', icon: PhpElephant },
    ],
  },
  {
    categoryKey: 'frameworks',
    items: [
      { label: 'React', level: 'primary', icon: React },
      { label: 'Next.js', level: 'primary', icon: Nextjs },
      { label: 'Remix', level: 'secondary', icon: Remix },
      { label: 'Tailwind CSS', level: 'tertiary', icon: Tailwind },
      { label: 'Vue.js', level: 'secondary', icon: Vue },
      { label: 'Express', level: 'tertiary', icon: Express },
      { label: 'Styled Components', level: 'tertiary', icon: StyledComponents },
      { label: 'Jest', level: 'secondary', icon: Jest },
      { label: 'Cypress', level: 'tertiary', icon: Cypress },
    ],
  },
  {
    categoryKey: 'cms',
    items: [
      { label: 'Contentful', level: 'primary', icon: Contentful },
      { label: 'Shopify', level: 'tertiary', icon: Shopify },
    ],
  },
  {
    categoryKey: 'tools',
    items: [
      { label: 'MongoDB', level: 'tertiary', icon: MongoDB },
      { label: 'AWS', level: 'tertiary', icon: Aws },
      { label: 'Docker', level: 'tertiary', icon: Docker },
      { label: 'Kubernetes', level: 'tertiary', icon: Kubernetes },
      { label: 'Git', level: 'secondary', icon: Git },
      { label: 'GitLab', level: 'tertiary', icon: GitLab },
      { label: 'Vercel', level: 'tertiary', icon: Vercel },
      { label: 'Storybook', level: 'secondary', icon: Storybook },
    ],
  },
  {
    categoryKey: 'methods',
    items: [
      { label: 'Atomic Design', level: 'tertiary', icon: Atom },
      { label: 'BEM', level: 'secondary', icon: Bem },
      { label: 'Kanban', level: 'secondary', icon: Kanban },
      { label: 'Scrum', level: 'secondary', icon: Scrum },
    ],
  },
];
