import type { ReactNode } from 'react';

export type TagProps = {
  children: ReactNode;
};

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-block rounded-md border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.08)] px-3 py-1.5 text-[0.8125rem] text-[rgba(255,255,255,0.9)]">
      {children}
    </span>
  );
}
