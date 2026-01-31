import type { ReactNode } from 'react';

type GapValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;

type FlexGroupProps = {
  children: ReactNode;
  gap?: GapValue;
  className?: string;
};

export const FlexGroup = ({
  children,
  gap = 2,
  className = '',
}: FlexGroupProps) => {
  return (
    <div className={`flex items-center gap-${gap} ${className}`.trim()}>
      {children}
    </div>
  );
};
