import { classNameSummary } from '@/utils';
import type { ReactNode, ElementType } from 'react';

export type HeadingProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export const headingStyles: Record<string, string> = {
  h1: 'text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight',
  h2: 'text-3xl sm:text-4xl font-bold uppercase tracking-tight',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-medium',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium uppercase tracking-widest',
};

export default function Heading({
  children,
  as: Tag = 'h1',
  className = '',
}: HeadingProps) {
  const tagName = typeof Tag === 'string' ? Tag : 'h1';
  const defaultStyle = headingStyles[tagName] || '';
  return (
    <Tag className={classNameSummary([defaultStyle, 'mb-2', className])}>
      {children}
    </Tag>
  );
}
