import type { ReactNode } from 'react';

type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

export default function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p className={`text-md text-foreground mt-2 ${className}`}>{children}</p>
  );
};
