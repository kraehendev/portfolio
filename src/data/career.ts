export type CareerGroupKey = 'ausbildung' | 'ion2s' | 'jobsuche';

export type CareerProjectKind = 'project' | 'certification';

/**
 * Translation paths under the `career` namespace (see `translations/{locale}/career.json`).
 * Referenced from {@link careerData} so each row maps clearly to its copy.
 */
export const careerKeys = {
  groups: {
    jobsuche: {
      title: 'groups.jobsuche.title',
      description: 'groups.jobsuche.description',
    },
    ion2s: {
      title: 'groups.ion2s.title',
      description: 'groups.ion2s.description',
      projects: {
        '13': {
          title: 'groups.ion2s.projects.13.title',
          description: 'groups.ion2s.projects.13.description',
        },
        '12': {
          title: 'groups.ion2s.projects.12.title',
          description: 'groups.ion2s.projects.12.description',
        },
        '10': {
          title: 'groups.ion2s.projects.10.title',
          description: 'groups.ion2s.projects.10.description',
        },
        '7': {
          title: 'groups.ion2s.projects.7.title',
          description: 'groups.ion2s.projects.7.description',
        },
        '9': {
          title: 'groups.ion2s.projects.9.title',
          description: 'groups.ion2s.projects.9.description',
        },
        '6': {
          title: 'groups.ion2s.projects.6.title',
          description: 'groups.ion2s.projects.6.description',
        },
        '11': {
          title: 'groups.ion2s.projects.11.title',
          description: 'groups.ion2s.projects.11.description',
        },
        '5': {
          title: 'groups.ion2s.projects.5.title',
          description: 'groups.ion2s.projects.5.description',
        },
        '4': {
          title: 'groups.ion2s.projects.4.title',
          description: 'groups.ion2s.projects.4.description',
        },
        '2': {
          title: 'groups.ion2s.projects.2.title',
          description: 'groups.ion2s.projects.2.description',
        },
      },
    },
    ausbildung: {
      title: 'groups.ausbildung.title',
      description: 'groups.ausbildung.description',
    },
  },
} as const;

type CareerGroupKeys = typeof careerKeys.groups;
type Ion2sProjectId = keyof CareerGroupKeys['ion2s']['projects'];

export type CareerGroupTranslationKey =
  | CareerGroupKeys['jobsuche']['title']
  | CareerGroupKeys['jobsuche']['description']
  | CareerGroupKeys['ion2s']['title']
  | CareerGroupKeys['ion2s']['description']
  | CareerGroupKeys['ausbildung']['title']
  | CareerGroupKeys['ausbildung']['description'];

export type CareerProjectTranslationKey =
  | CareerGroupKeys['ion2s']['projects'][Ion2sProjectId]['title']
  | CareerGroupKeys['ion2s']['projects'][Ion2sProjectId]['description'];

export type CareerProject = {
  id: string;
  kind: CareerProjectKind;
  titleKey: CareerProjectTranslationKey;
  descriptionKey: CareerProjectTranslationKey;
  startDate: string;
  endDate?: string;
  technologies?: string[];
};

/** Oldest first: ascending `YYYY-MM` startDate, then numeric id for ties. */
export function compareCareerProjectsByStartDate(
  a: Pick<CareerProject, 'startDate' | 'id'>,
  b: Pick<CareerProject, 'startDate' | 'id'>,
): number {
  const byDate = a.startDate.localeCompare(b.startDate);
  if (byDate !== 0) return byDate;
  return a.id.localeCompare(b.id, undefined, { numeric: true });
}

/** Newest first: descending `YYYY-MM` startDate (inverse of {@link compareCareerProjectsByStartDate}). */
export function compareCareerProjectsByStartDateDesc(
  a: Pick<CareerProject, 'startDate' | 'id'>,
  b: Pick<CareerProject, 'startDate' | 'id'>,
): number {
  return -compareCareerProjectsByStartDate(a, b);
}

export type CareerGroup = {
  key: CareerGroupKey;
  id: string;
  titleKey: CareerGroupTranslationKey;
  descriptionKey: CareerGroupTranslationKey;
  company?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  technologies?: string[];
  type: 'work' | 'education' | 'certification';
  projects?: CareerProject[];
};

/**
 * `YYYY-MM` used to order parent timeline rows (newest first).
 * — jobsuche: search start
 * — ion2s: end of tenure (most recent work period)
 * — ausbildung: apprenticeship start
 */
export function getCareerGroupTimelineSortDate(group: CareerGroup): string {
  switch (group.key) {
    case 'jobsuche':
      return group.startDate;
    case 'ion2s':
      return group.endDate ?? group.startDate;
    case 'ausbildung':
      return group.startDate;
    default:
      return group.startDate;
  }
}

/** Parent groups: descending by {@link getCareerGroupTimelineSortDate}, then by key. */
export function compareCareerGroupsNewestFirst(
  a: CareerGroup,
  b: CareerGroup,
): number {
  const cmp = getCareerGroupTimelineSortDate(b).localeCompare(
    getCareerGroupTimelineSortDate(a),
  );
  if (cmp !== 0) return cmp;
  return a.key.localeCompare(b.key);
}

/** Locale-resolved shape for the timeline UI */
export type TranslatedCareerProject = {
  id: string;
  kind: CareerProjectKind;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  technologies?: string[];
};

export type TranslatedCareerGroup = {
  key: CareerGroupKey;
  id: string;
  title: string;
  company?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies?: string[];
  type: CareerGroup['type'];
  projects?: TranslatedCareerProject[];
};

export const careerData: CareerGroup[] = [
  {
    key: 'jobsuche',
    id: 'job-search',
    titleKey: careerKeys.groups.jobsuche.title,
    descriptionKey: careerKeys.groups.jobsuche.description,
    startDate: '2025-09',
    type: 'work',
  },
  {
    key: 'ion2s',
    id: 'ion2s',
    titleKey: careerKeys.groups.ion2s.title,
    descriptionKey: careerKeys.groups.ion2s.description,
    location: 'Darmstadt',
    startDate: '2018-08',
    endDate: '2025-08',
    type: 'work',
    projects: [
      {
        id: '13',
        kind: 'project',
        titleKey: careerKeys.groups.ion2s.projects['13'].title,
        descriptionKey: careerKeys.groups.ion2s.projects['13'].description,
        startDate: '2024-05',
        endDate: '2025-08',
        technologies: [
          'React',
          'Remix',
          'Chakra UI',
          'Typescript',
          'SCSS',
          'Contentful',
          'GraphQL',
          'ZOD',
        ],
      },
      {
        id: '12',
        kind: 'project',
        titleKey: careerKeys.groups.ion2s.projects['12'].title,
        descriptionKey: careerKeys.groups.ion2s.projects['12'].description,
        startDate: '2023-11',
        endDate: '2025-06',
        technologies: [
          'Next.js',
          'React',
          'i18n',
          'SCSS',
          'Contentful',
          'Typescript',
        ],
      },
      {
        id: '10',
        kind: 'project',
        titleKey: careerKeys.groups.ion2s.projects['10'].title,
        descriptionKey: careerKeys.groups.ion2s.projects['10'].description,
        startDate: '2023-11',
        endDate: '2023-12',
        technologies: ['HTML', 'SCSS', 'Bootstrap', 'Typo3', 'jQuery'],
      },
      {
        id: '7',
        kind: 'project',
        titleKey: careerKeys.groups.ion2s.projects['7'].title,
        descriptionKey: careerKeys.groups.ion2s.projects['7'].description,
        startDate: '2022-10',
        endDate: '2023-05',
        technologies: [
          'Next.js',
          'React',
          'Typescript',
          'SCSS',
          'Contentful',
          'styled-components',
          'Storybook',
          'Jest',
          'Cypress',
          'Atomic Design',
        ],
      },
      {
        id: '9',
        kind: 'project',
        titleKey: careerKeys.groups.ion2s.projects['9'].title,
        descriptionKey: careerKeys.groups.ion2s.projects['9'].description,
        startDate: '2022-06',
        endDate: '2023-10',
        technologies: ['Nuxt.js', 'Vue.js', 'Typescript', 'SCSS', 'Contentful'],
      },
      {
        id: '6',
        kind: 'project',
        titleKey: careerKeys.groups.ion2s.projects['6'].title,
        descriptionKey: careerKeys.groups.ion2s.projects['6'].description,
        startDate: '2022-06',
        endDate: '2023-10',
        technologies: ['Angular.js', 'Bootstrap', 'Typo3', 'jQuery'],
      },
      {
        id: '11',
        kind: 'certification',
        titleKey: careerKeys.groups.ion2s.projects['11'].title,
        descriptionKey: careerKeys.groups.ion2s.projects['11'].description,
        startDate: '2022-05',
        endDate: '2024-05',
        technologies: ['Contentful'],
      },
      {
        id: '5',
        kind: 'project',
        titleKey: careerKeys.groups.ion2s.projects['5'].title,
        descriptionKey: careerKeys.groups.ion2s.projects['5'].description,
        startDate: '2022-01',
        endDate: '2022-06',
        technologies: ['Nuxt.js', 'Vue.js', 'Typescript', 'SCSS', 'Contentful'],
      },
      {
        id: '4',
        kind: 'project',
        titleKey: careerKeys.groups.ion2s.projects['4'].title,
        descriptionKey: careerKeys.groups.ion2s.projects['4'].description,
        startDate: '2020-03',
        endDate: '2021-12',
        technologies: ['HTML', 'SCSS', 'Vue.js', 'Typescript'],
      },
      {
        id: '2',
        kind: 'project',
        titleKey: careerKeys.groups.ion2s.projects['2'].title,
        descriptionKey: careerKeys.groups.ion2s.projects['2'].description,
        startDate: '2018-08',
        endDate: '2020-08',
        technologies: ['Angular.js', 'Bootstrap', 'Typo3', 'jQuery', 'Smarty'],
      },
    ],
  },
  {
    key: 'ausbildung',
    id: 'education',
    titleKey: careerKeys.groups.ausbildung.title,
    descriptionKey: careerKeys.groups.ausbildung.description,
    company: 'WSE GmbH',
    location: 'Lutherstadt Eisleben',
    startDate: '2018-06',
    endDate: '2015-07',
    type: 'education',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
];
