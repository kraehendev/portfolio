import type { ComponentType } from 'react';
import type { IconProps } from '@/utils';
import AdobeXD from '@/components/icons/logo/adobexd';
import Atom from '@/components/icons/logo/atom';
import Aws from '@/components/icons/logo/aws';
import Bem from '@/components/icons/logo/bem';
import Contentful from '@/components/icons/logo/contentful';
import Css from '@/components/icons/logo/css';
import Cypress from '@/components/icons/logo/cypress';
import Docker from '@/components/icons/logo/docker';
import Express from '@/components/icons/logo/express';
import Figma from '@/components/icons/logo/figma';
import Git from '@/components/icons/logo/git';
import GitLab from '@/components/icons/logo/gitlab';
import Go from '@/components/icons/logo/go';
import Html from '@/components/icons/logo/html';
import Javascript from '@/components/icons/logo/javascript';
import Jest from '@/components/icons/logo/jest';
import Joomla from '@/components/icons/logo/joomla';
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
import Typo3 from '@/components/icons/logo/typo3';
import Vercel from '@/components/icons/logo/vercel';
import Vue from '@/components/icons/logo/vue';
import Wordpress from '@/components/icons/logo/wordpress';

type TechstackItem = {
  label: string;
  level: 'expert' | 'intermediate' | 'beginner';
  icon?: ComponentType<IconProps>;
};

export const techstackData: { title: string; items: TechstackItem[] }[] = [
  {
    title: 'Sprachen',
    items: [
      { label: 'HTML', level: 'expert', icon: Html },
      { label: 'CSS', level: 'expert', icon: Css },
      { label: 'SASS', level: 'expert', icon: Sass },
      { label: 'Typescript', level: 'expert', icon: Typescript },
      { label: 'JavaScript', level: 'expert', icon: Javascript },
      { label: 'Node.js', level: 'intermediate', icon: Nodejs },
      { label: 'MySQL', level: 'intermediate', icon: MySql },
      { label: 'Python', level: 'beginner', icon: Python },
      { label: 'PHP', level: 'beginner', icon: PhpElephant },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { label: 'React', level: 'expert', icon: React },
      { label: 'Next.js', level: 'expert', icon: Nextjs },
      { label: 'Remix', level: 'intermediate', icon: Remix },
      { label: 'Tailwind CSS', level: 'beginner', icon: Tailwind },
      { label: 'Vue.js', level: 'intermediate', icon: Vue },
      { label: 'Express', level: 'beginner', icon: Express },
      { label: 'Styled Components', level: 'beginner', icon: StyledComponents },
      { label: 'Jest', level: 'intermediate', icon: Jest },
      { label: 'Cypress', level: 'beginner', icon: Cypress },
    ],
  },
  {
    title: 'CMS',
    items: [
      { label: 'Contentful', level: 'expert', icon: Contentful },
      { label: 'Shopify', level: 'beginner', icon: Shopify },
    ],
  },
  {
    title: 'Tools',
    items: [
      { label: 'MongoDB', level: 'beginner', icon: MongoDB },
      { label: 'AWS', level: 'beginner', icon: Aws },
      { label: 'Docker', level: 'beginner', icon: Docker },
      { label: 'Kubernetes', level: 'beginner', icon: Kubernetes },
      { label: 'Git', level: 'intermediate', icon: Git },
      { label: 'GitLab', level: 'beginner', icon: GitLab },
      { label: 'Vercel', level: 'beginner', icon: Vercel },
      { label: 'Storybook', level: 'intermediate', icon: Storybook },
    ],
  },
  {
    title: 'Methoden',
    items: [
      { label: 'Atomic Design', level: 'beginner', icon: Atom },
      { label: 'BEM', level: 'intermediate', icon: Bem },
      { label: 'Kanban', level: 'intermediate', icon: Kanban },
      { label: 'Scrum', level: 'intermediate', icon: Scrum },
    ],
  },
];
