import type { Locale } from '@/i18n/routing';
import {
  careerData,
  compareCareerGroupsNewestFirst,
  compareCareerProjectsByStartDateDesc,
  type TranslatedCareerGroup,
} from '@/data/career';

type CareerTranslator = (
  key: string,
  values?: Record<string, string | number>,
) => string;

export type CareerUiLabels = {
  today: string;
  timelineStart: string;
  ion2sAccordion: string;
  typeWork: string;
  typeEducation: string;
  typeCertification: string;
};

export function translateCareerData(
  locale: Locale,
  t: CareerTranslator,
): { items: TranslatedCareerGroup[]; labels: CareerUiLabels } {
  const items: TranslatedCareerGroup[] = [...careerData]
    .sort(compareCareerGroupsNewestFirst)
    .map((group) => ({
      key: group.key,
      id: group.id,
      title: t(group.titleKey),
      company: group.company,
      location: group.location,
      startDate: group.startDate,
      endDate: group.endDate,
      description: t(group.descriptionKey),
      technologies: group.technologies,
      type: group.type,
      projects: group.projects
        ? [...group.projects]
            .sort(compareCareerProjectsByStartDateDesc)
            .map((p) => ({
              id: p.id,
              kind: p.kind,
              title: t(p.titleKey),
              description: t(p.descriptionKey),
              startDate: p.startDate,
              endDate: p.endDate,
              technologies: p.technologies,
            }))
        : undefined,
    }));

  return {
    items,
    labels: {
      today: t('today'),
      timelineStart: t('timelineStart'),
      ion2sAccordion: t('ion2sAccordion'),
      typeWork: t('typeWork'),
      typeEducation: t('typeEducation'),
      typeCertification: t('typeCertification'),
    },
  };
}

export function careerDateLocale(locale: Locale): string {
  return locale === 'de' ? 'de-DE' : 'en-GB';
}
