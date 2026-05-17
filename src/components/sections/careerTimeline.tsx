'use client';

import Airport from '@/components/icons/airport';
import Timeline from '@/components/ui/timeline';
import TimelineItem from '@/components/ui/timelineItem';
import type { CareerUiLabels } from '@/lib/translateCareer';
import type { TranslatedCareerGroup } from '@/data/career';
import itemStyles from '@/styles/ui/timelineItem.module.scss';

type CareerTimelineProps = {
  items: TranslatedCareerGroup[];
  labels: CareerUiLabels;
  dateLocale: string;
  className?: string;
};

export default function CareerTimeline({
  items,
  labels,
  dateLocale,
  className = '',
}: CareerTimelineProps) {
  return (
    <div className={className}>
      <Timeline>
        {items.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLast={index === items.length - 1}
            todayLabel={labels.today}
            dateLocale={dateLocale}
            ion2sAccordionLabel={labels.ion2sAccordion}
            typeLabels={labels}
          />
        ))}
        <div className={itemStyles.startCapRow}>
          <span className="sr-only">{labels.timelineStart}</span>
          <div className={itemStyles.startCapMarker}>
            <div
              className={itemStyles.markerIcon}
              data-timeline-waypoint
              aria-hidden
            >
              <Airport className={itemStyles.markerSvg} />
            </div>
          </div>
          <div className={itemStyles.startCapSpacer} aria-hidden />
        </div>
      </Timeline>
    </div>
  );
}
