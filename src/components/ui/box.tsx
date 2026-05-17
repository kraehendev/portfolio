import type { ReactNode } from 'react';

type BoxProps = {
  children: ReactNode;
  className?: string;
};

export default function Box({ children, className = '' }: BoxProps) {
  return (
    <div
      className={`bg-[var(--elevated-surface-bg)]/80 rounded-lg p-6 border border-[var(--elevated-surface-border)] ${className}`}
    >
      {children}
    </div>
  );
}
