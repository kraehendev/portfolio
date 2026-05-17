import { getLocale, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import {
  careerDateLocale,
  translateCareerData,
} from '@/lib/translateCareer';
import CareerTimeline from '@/components/sections/careerTimeline';

type CareerSectionProps = {
  className?: string;
};

export default async function CareerSection({
  className = '',
}: CareerSectionProps) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('career');
  const { items, labels } = translateCareerData(locale, t);

  return (
    <CareerTimeline
      className={className}
      items={items}
      labels={labels}
      dateLocale={careerDateLocale(locale)}
    />
  );
}
