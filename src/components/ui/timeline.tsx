import type { ReactNode } from 'react';
import styles from '@/styles/ui/timeline.module.scss';

type TimelineProps = {
  children: ReactNode;
  className?: string;
};

export default function Timeline({ children, className = '' }: TimelineProps) {
  return (
    <div className={`${styles.timeline} ${className}`}>
      {children}
    </div>
  );
}
