import type { CareerItem } from '@/data/career';
import styles from '@/styles/molecules/timelineItem.module.scss';

type TranslatedCareerItem = Omit<CareerItem, 'title' | 'description'> & {
  title: string;
  description: string;
};

type TimelineItemProps = {
  item: TranslatedCareerItem;
  isLast?: boolean;
};

export default function TimelineItem({ item, isLast = false }: TimelineItemProps) {
  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('de-DE', { month: 'short', year: 'numeric' });
  };

  const getTypeLabel = (type: CareerItem['type']) => {
    switch (type) {
      case 'work':
        return 'Arbeit';
      case 'education':
        return 'Ausbildung';
      case 'certification':
        return 'Zertifizierung';
      default:
        return '';
    }
  };

  return (
    <div className={`${styles.timelineItem} ${isLast ? styles.last : ''}`}>
      <div className={styles.timelineMarker}>
        <div className={`${styles.dot} ${styles[item.type]}`} />
        {!isLast && <div className={styles.line} />}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>{item.title}</h3>
            <div className={styles.company}>
              {item.company}
              {item.location && (
                <>
                  <span className={styles.separator}>•</span>
                  <span>{item.location}</span>
                </>
              )}
            </div>
          </div>
          <div className={styles.dateWrapper}>
            <span className={`${styles.badge} ${styles[item.type]}`}>
              {getTypeLabel(item.type)}
            </span>
            <div className={styles.date}>
              {formatDate(item.startDate)} -{' '}
              {item.endDate ? formatDate(item.endDate) : 'Heute'}
            </div>
          </div>
        </div>
        <p className={styles.description}>{item.description}</p>
        {item.technologies && item.technologies.length > 0 && (
          <div className={styles.technologies}>
            {item.technologies.map((tech) => (
              <span key={tech} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
