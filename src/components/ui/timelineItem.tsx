'use client';

import type { CareerGroup, TranslatedCareerGroup } from '@/data/career';
import type { CareerUiLabels } from '@/lib/translateCareer';
import Accordion from '@/components/ui/accordion';
import Badge, { type BadgeTheme } from '@/components/ui/badge';
import Tag from '@/components/ui/tag';
import Waypoint from '@/components/icons/waypoint';
import styles from '@/styles/ui/timelineItem.module.scss';

const typeBadgeTheme: Record<CareerGroup['type'], BadgeTheme> = {
  work: 'secondary',
  education: 'primary',
  certification: 'tertiary',
};

type TimelineItemProps = {
  item: TranslatedCareerGroup;
  isLast?: boolean;
  todayLabel: string;
  dateLocale: string;
  ion2sAccordionLabel: string;
  typeLabels: Pick<
    CareerUiLabels,
    'typeWork' | 'typeEducation' | 'typeCertification'
  >;
};

export default function TimelineItem({
  item,
  isLast = false,
  todayLabel,
  dateLocale,
  ion2sAccordionLabel,
  typeLabels,
}: TimelineItemProps) {
  const projects = item.projects;

  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year, 10), parseInt(month, 10) - 1);
    return date.toLocaleDateString(dateLocale, {
      month: 'short',
      year: 'numeric',
    });
  };

  const formatRange = (start: string, end?: string) =>
    `${formatDate(start)} – ${end ? formatDate(end) : todayLabel}`;

  const getTypeLabel = (type: CareerGroup['type']) => {
    switch (type) {
      case 'work':
        return typeLabels.typeWork;
      case 'education':
        return typeLabels.typeEducation;
      case 'certification':
        return typeLabels.typeCertification;
      default:
        return '';
    }
  };

  const typeLabel =
    item.key === 'ion2s' ? typeLabels.typeWork : getTypeLabel(item.type);

  return (
    <div
      className={`${styles.timelineItem} ${isLast ? styles.lastCareerItem : ''}`}
    >
      <div className={styles.timelineMarker}>
        <div className={styles.markerIcon} aria-hidden>
          <Waypoint className={styles.markerSvg} />
        </div>
        <div className={styles.line} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>{item.title}</h3>
            {(item.company || item.location) && (
              <div className={styles.company}>
                {item.company}
                {item.company && item.location && (
                  <>
                    <span className={styles.separator}>•</span>
                    <span>{item.location}</span>
                  </>
                )}
                {!item.company && item.location && <span>{item.location}</span>}
              </div>
            )}
          </div>
          <div className={styles.dateWrapper}>
            <Badge theme={typeBadgeTheme[item.type]}>{typeLabel}</Badge>
            <div className={styles.date}>
              {formatDate(item.startDate)} -{' '}
              {item.endDate ? formatDate(item.endDate) : todayLabel}
            </div>
          </div>
        </div>
        <p className={styles.description}>{item.description}</p>
        {projects && projects.length > 0 && (
          <div className={styles.accordionSlot}>
            <Accordion
              idPrefix={item.id}
              ariaLabel={ion2sAccordionLabel}
              items={projects.map((p) => ({
                id: p.id,
                title: p.title,
                summary: formatRange(p.startDate, p.endDate),
                badge:
                  p.kind === 'certification'
                    ? typeLabels.typeCertification
                    : undefined,
                body: p.description,
                tags: p.technologies,
                variant: p.kind === 'certification' ? 'accent' : 'default',
              }))}
            />
          </div>
        )}
        {item.technologies &&
          item.technologies.length > 0 &&
          !projects?.length && (
            <div className={styles.technologies}>
              {item.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}
