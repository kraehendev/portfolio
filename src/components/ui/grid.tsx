import type { ElementType, ReactNode } from 'react';

export type GridProps = {
  children?: ReactNode;
  className?: string;
  as?: ElementType;
  cols?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
  };
  gap?: number;
};

const toColClass = (prefix: string, value?: number) => {
  if (!value) return '';
  const variant = prefix ? `${prefix}:` : '';
  return `${variant}grid-cols-${value}`;
};

export default function Grid({
  children,
  className,
  as: Tag = 'div',
  cols,
  gap = 4,
}: GridProps) {
  const gridClasses = [
    'grid',
    toColClass('', cols?.base ?? 1) || 'grid-cols-1',
    toColClass('sm', cols?.sm),
    toColClass('md', cols?.md),
    toColClass('lg', cols?.lg),
    toColClass('xl', cols?.xl),
    toColClass('2xl', cols?.xxl),
    `gap-${gap}`,
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return <Tag className={gridClasses}>{children}</Tag>;
}
