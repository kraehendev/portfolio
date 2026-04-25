import type { ReactNode } from 'react';
import styles from '@/styles/ui/bentoGrid.module.scss';

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

export default function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div className={`${styles.bentoGrid} ${className}`}>{children}</div>
  );
}
