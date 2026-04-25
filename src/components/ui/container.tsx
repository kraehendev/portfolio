import type { ReactNode } from 'react';

type ContainerProps = {
  children?: ReactNode;
  classes?: string;
  maxWidthClass?: string;
  narrow?: boolean;
};

export default function Container({
  children,
  classes = '',
  maxWidthClass = 'lg:max-w-[1200px] min-[2560px]:max-w-[1400px]',
  narrow = false,
}: ContainerProps) {
  const resolvedMaxWidthClass = narrow
    ? 'lg:max-w-[800px] min-[2560px]:max-w-[800px]'
    : maxWidthClass;
  return (
    <div className={`mx-auto w-full p-4 ${resolvedMaxWidthClass} ${classes}`}>
      {children}
    </div>
  );
}
