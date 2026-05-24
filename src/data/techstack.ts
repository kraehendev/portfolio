import {
  TECHSTACK_SKILL_LEVELS,
  type TechstackSkillLevel,
} from '@/components/ui/badgeThemes';
import type { TechstackLogoKey } from '@/components/icons/logo/techstackLogoRegistry';

export { TECHSTACK_SKILL_LEVELS, type TechstackSkillLevel };

const skillLevelRank = Object.fromEntries(
  TECHSTACK_SKILL_LEVELS.map((level, index) => [level, index]),
) as Record<TechstackSkillLevel, number>;

/** Sort best → weakest skill level, then alphabetically by label. */
export function compareTechstackItems(
  a: TechstackItem,
  b: TechstackItem,
): number {
  const byLevel = skillLevelRank[a.level] - skillLevelRank[b.level];
  return byLevel !== 0 ? byLevel : a.label.localeCompare(b.label);
}

export type TechstackCategoryKey =
  | 'languages'
  | 'frameworks'
  | 'cms'
  | 'tools'
  | 'methods';

export type TechstackItem = {
  label: string;
  level: TechstackSkillLevel;
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
      { label: 'HTML', level: 'expert', iconKey: 'html' },
      { label: 'CSS', level: 'expert', iconKey: 'css' },
      { label: 'SASS', level: 'expert', iconKey: 'sass' },
      { label: 'Typescript', level: 'expert', iconKey: 'typescript' },
      { label: 'JavaScript', level: 'expert', iconKey: 'javascript' },
      { label: 'Node.js', level: 'intermediate', iconKey: 'nodejs' },
      { label: 'MySQL', level: 'intermediate', iconKey: 'mysql' },
      { label: 'GraphQL', level: 'intermediate', iconKey: 'graphql' },
      { label: 'Python', level: 'beginner', iconKey: 'python' },
      { label: 'PHP', level: 'beginner', iconKey: 'phpelephant' },
    ],
  },
  {
    categoryKey: 'frameworks',
    items: [
      { label: 'React', level: 'expert', iconKey: 'react' },
      { label: 'Next.js', level: 'expert', iconKey: 'nextjs' },
      { label: 'Remix', level: 'intermediate', iconKey: 'remix' },
      { label: 'Tailwind CSS', level: 'beginner', iconKey: 'tailwind' },
      { label: 'Vue.js', level: 'intermediate', iconKey: 'vue' },
      { label: 'Express', level: 'beginner', iconKey: 'express' },
      {
        label: 'Styled Components',
        level: 'beginner',
        iconKey: 'styledcomponents',
      },
      { label: 'Jest', level: 'intermediate', iconKey: 'jest' },
      { label: 'Cypress', level: 'beginner', iconKey: 'cypress' },
    ],
  },
  {
    categoryKey: 'cms',
    items: [
      { label: 'Contentful', level: 'expert', iconKey: 'contentful' },
      { label: 'Shopify', level: 'beginner', iconKey: 'shopify' },
    ],
  },
  {
    categoryKey: 'tools',
    items: [
      { label: 'MongoDB', level: 'beginner', iconKey: 'mongodb' },
      { label: 'AWS', level: 'beginner', iconKey: 'aws' },
      { label: 'Docker', level: 'beginner', iconKey: 'docker' },
      { label: 'Kubernetes', level: 'beginner', iconKey: 'kubernetes' },
      { label: 'Git', level: 'intermediate', iconKey: 'git' },
      { label: 'GitLab', level: 'beginner', iconKey: 'gitlab' },
      { label: 'Vercel', level: 'beginner', iconKey: 'vercel' },
      { label: 'Storybook', level: 'intermediate', iconKey: 'storybook' },
    ],
  },
  {
    categoryKey: 'methods',
    items: [
      { label: 'Atomic Design', level: 'beginner', iconKey: 'atom' },
      { label: 'BEM', level: 'intermediate', iconKey: 'bem' },
      { label: 'Kanban', level: 'intermediate', iconKey: 'kanban' },
      { label: 'Scrum', level: 'intermediate', iconKey: 'scrum' },
    ],
  },
];
