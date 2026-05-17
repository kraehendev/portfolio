import type { ComponentType } from 'react';
import type { IconProps } from '@/utils';

export const techstackLogoKeys = [
  'atom',
  'aws',
  'bem',
  'contentful',
  'css',
  'cypress',
  'docker',
  'express',
  'git',
  'gitlab',
  'html',
  'javascript',
  'jest',
  'kanban',
  'kubernetes',
  'mongodb',
  'mysql',
  'nextjs',
  'nodejs',
  'phpelephant',
  'python',
  'react',
  'remix',
  'sass',
  'scrum',
  'shopify',
  'storybook',
  'styledcomponents',
  'tailwind',
  'typescript',
  'vercel',
  'vue',
] as const;

export type TechstackLogoKey = (typeof techstackLogoKeys)[number];

const loaders: Record<
  TechstackLogoKey,
  () => Promise<{ default: ComponentType<IconProps> }>
> = {
  atom: () => import('@/components/icons/logo/atom'),
  aws: () => import('@/components/icons/logo/aws'),
  bem: () => import('@/components/icons/logo/bem'),
  contentful: () => import('@/components/icons/logo/contentful'),
  css: () => import('@/components/icons/logo/css'),
  cypress: () => import('@/components/icons/logo/cypress'),
  docker: () => import('@/components/icons/logo/docker'),
  express: () => import('@/components/icons/logo/express'),
  git: () => import('@/components/icons/logo/git'),
  gitlab: () => import('@/components/icons/logo/gitlab'),
  html: () => import('@/components/icons/logo/html'),
  javascript: () => import('@/components/icons/logo/javascript'),
  jest: () => import('@/components/icons/logo/jest'),
  kanban: () => import('@/components/icons/logo/kanban'),
  kubernetes: () => import('@/components/icons/logo/kubernetes'),
  mongodb: () => import('@/components/icons/logo/mongodb'),
  mysql: () => import('@/components/icons/logo/mysql'),
  nextjs: () => import('@/components/icons/logo/nextjs'),
  nodejs: () => import('@/components/icons/logo/nodejs'),
  phpelephant: () => import('@/components/icons/logo/phpelephant'),
  python: () => import('@/components/icons/logo/python'),
  react: () => import('@/components/icons/logo/react'),
  remix: () => import('@/components/icons/logo/remix'),
  sass: () => import('@/components/icons/logo/sass'),
  scrum: () => import('@/components/icons/logo/scrum'),
  shopify: () => import('@/components/icons/logo/shopify'),
  storybook: () => import('@/components/icons/logo/storybook'),
  styledcomponents: () => import('@/components/icons/logo/styledcomponents'),
  tailwind: () => import('@/components/icons/logo/tailwind'),
  typescript: () => import('@/components/icons/logo/typescript'),
  vercel: () => import('@/components/icons/logo/vercel'),
  vue: () => import('@/components/icons/logo/vue'),
};

export async function loadTechstackLogo(
  key: TechstackLogoKey,
): Promise<ComponentType<IconProps>> {
  const mod = await loaders[key]();
  return mod.default;
}
