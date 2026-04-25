import type { ReactNode } from 'react';
import { classNameSummary } from '@/utils';
import styles from '@/styles/sections/pageItem.module.scss';

export default function PageItem({
  children,
  backgroundColor,
}: {
  children: ReactNode;
  backgroundColor?: string;
}) {
  return (
    <div
      className={classNameSummary([
        styles.pageItem,
        backgroundColor ? styles[backgroundColor] : undefined,
      ])}
    >
      {children}
    </div>
  );
}
