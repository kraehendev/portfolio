import type { ReactNode } from 'react';

type BoxProps = {
  children: ReactNode;
  className?: string;
};

export default function Box({ children, className = '' }: BoxProps) {
  return (
    <div
      className={`bg-neutral-900/80 rounded-lg p-6 ${className}`}
    >
      {children}
    </div>
  );
}
