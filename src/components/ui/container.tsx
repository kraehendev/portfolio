import type { ReactNode } from 'react';

type ContainerProps = {
  children?: ReactNode;
  classes?: string;
};

export default function Container({ children, classes = '' }: ContainerProps) {
  return (
    <div className={`w-full max-w-[1920px] mx-auto p-4 lg:px-16 ${classes}`}>
      {children}
    </div>
  );
}
