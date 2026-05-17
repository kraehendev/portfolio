import type { ComponentType, ReactNode } from 'react';
import type { IconProps } from '@/utils';
import { classNameSummary } from '@/utils';
import {
  type BadgeTheme,
  badgeThemeClasses,
} from '@/components/ui/badgeThemes';

export type BadgeProps = {
  children: ReactNode;
  theme?: BadgeTheme;
  icon?: ComponentType<IconProps>;
  className?: string;
};

export default function Badge({
  children,
  theme = 'default',
  icon: Icon,
  className = '',
}: BadgeProps) {
  const isChip = Boolean(Icon);

  return (
    <span
      className={classNameSummary([
        badgeThemeClasses[theme],
        isChip
          ? 'inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-medium normal-case tracking-normal'
          : 'inline-block rounded-full px-[0.55rem] py-[0.2rem] text-[0.6875rem] font-semibold uppercase tracking-wider',
        className,
      ])}
    >
      {Icon ? (
        <span className="inline-flex shrink-0 items-center justify-center" aria-hidden>
          <Icon size={24} />
        </span>
      ) : null}
      {children}
    </span>
  );
}

export type { BadgeTheme } from '@/components/ui/badgeThemes';
