'use client';

import { useLocale } from 'next-intl';
import { careerData } from '@/data/career';
import Timeline from '@/components/molecules/timeline';
import TimelineItem from '@/components/molecules/timelineItem';
import type { CareerItem } from '@/data/career';

type CareerSectionProps = {
  className?: string;
};

type TranslatedCareerItem = Omit<CareerItem, 'title' | 'description'> & {
  title: string;
  description: string;
};

export default function CareerSection({ className = '' }: CareerSectionProps) {
  const locale = useLocale() as 'de' | 'en';

  const translatedCareerData: TranslatedCareerItem[] = careerData.map((item) => ({
    ...item,
    title: item.title[locale],
    description: item.description[locale],
  }));

  return (
    <div className={className}>
      <Timeline>
        {translatedCareerData.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLast={index === translatedCareerData.length - 1}
          />
        ))}
      </Timeline>
    </div>
  );
}
