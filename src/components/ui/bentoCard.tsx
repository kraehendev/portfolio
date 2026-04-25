import type { ReactNode } from 'react';
import styles from '@/styles/ui/bentoCard.module.scss';
import { classNameSummary } from '@/utils';

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
};

export default function BentoCard({
  children,
  className = '',
  colSpan = 1,
  rowSpan = 1,
}: BentoCardProps) {
  const colSpanClass = colSpan === 2 ? styles.colSpan2 : '';
  const rowSpanClass = rowSpan === 2 ? styles.rowSpan2 : '';

  return (
    <div
      className={classNameSummary([
        styles.bentoCard,
        colSpanClass,
        rowSpanClass,
        className,
      ])}
    >
      {children}
    </div>
  );
}
