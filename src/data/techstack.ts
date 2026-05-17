import type { SkillBadgeTheme } from '@/components/ui/badgeThemes';
import type { TechstackLogoKey } from '@/components/icons/logo/techstackLogoRegistry';

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
  iconKey?: TechstackLogoKey;
};

export type TechstackCategory = {
  categoryKey: TechstackCategoryKey;
  items: TechstackItem[];
};

export const techstackData: TechstackCategory[] = [
  {
    categoryKey: 'languages',
    items: [
      { label: 'HTML', level: 'primary', iconKey: 'html' },
      { label: 'CSS', level: 'primary', iconKey: 'css' },
      { label: 'SASS', level: 'primary', iconKey: 'sass' },
      { label: 'Typescript', level: 'primary', iconKey: 'typescript' },
      { label: 'JavaScript', level: 'primary', iconKey: 'javascript' },
      { label: 'Node.js', level: 'secondary', iconKey: 'nodejs' },
      { label: 'MySQL', level: 'secondary', iconKey: 'mysql' },
      { label: 'Python', level: 'tertiary', iconKey: 'python' },
      { label: 'PHP', level: 'tertiary', iconKey: 'phpelephant' },
    ],
  },
  {
    categoryKey: 'frameworks',
    items: [
      { label: 'React', level: 'primary', iconKey: 'react' },
      { label: 'Next.js', level: 'primary', iconKey: 'nextjs' },
      { label: 'Remix', level: 'secondary', iconKey: 'remix' },
      { label: 'Tailwind CSS', level: 'tertiary', iconKey: 'tailwind' },
      { label: 'Vue.js', level: 'secondary', iconKey: 'vue' },
      { label: 'Express', level: 'tertiary', iconKey: 'express' },
      {
        label: 'Styled Components',
        level: 'tertiary',
        iconKey: 'styledcomponents',
      },
      { label: 'Jest', level: 'secondary', iconKey: 'jest' },
      { label: 'Cypress', level: 'tertiary', iconKey: 'cypress' },
    ],
  },
  {
    categoryKey: 'cms',
    items: [
      { label: 'Contentful', level: 'primary', iconKey: 'contentful' },
      { label: 'Shopify', level: 'tertiary', iconKey: 'shopify' },
    ],
  },
  {
    categoryKey: 'tools',
    items: [
      { label: 'MongoDB', level: 'tertiary', iconKey: 'mongodb' },
      { label: 'AWS', level: 'tertiary', iconKey: 'aws' },
      { label: 'Docker', level: 'tertiary', iconKey: 'docker' },
      { label: 'Kubernetes', level: 'tertiary', iconKey: 'kubernetes' },
      { label: 'Git', level: 'secondary', iconKey: 'git' },
      { label: 'GitLab', level: 'tertiary', iconKey: 'gitlab' },
      { label: 'Vercel', level: 'tertiary', iconKey: 'vercel' },
      { label: 'Storybook', level: 'secondary', iconKey: 'storybook' },
    ],
  },
  {
    categoryKey: 'methods',
    items: [
      { label: 'Atomic Design', level: 'tertiary', iconKey: 'atom' },
      { label: 'BEM', level: 'secondary', iconKey: 'bem' },
      { label: 'Kanban', level: 'secondary', iconKey: 'kanban' },
      { label: 'Scrum', level: 'secondary', iconKey: 'scrum' },
    ],
  },
];
