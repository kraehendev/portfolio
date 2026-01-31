import { careerData } from '@/data/career';
import Timeline from '@/components/molecules/timeline';
import TimelineItem from '@/components/molecules/timelineItem';

type CareerSectionProps = {
  className?: string;
};

export default function CareerSection({ className = '' }: CareerSectionProps) {
  return (
    <div className={className}>
      <Timeline>
        {careerData.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLast={index === careerData.length - 1}
          />
        ))}
      </Timeline>
    </div>
  );
}
