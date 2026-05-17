import type { ComponentType, ReactNode } from 'react';
import type { IconProps } from '@/utils';
import { classNameSummary } from '@/utils';
import SamePageHashLink from '@/components/ui/samePageHashLink';
import {
  CONTACT_BADGE_ICON_SIZE,
  contactBadgeClasses,
  contactBadgeThemeClasses,
} from '@/components/ui/contactBadgeStyles';

export type LinkBadgeProps = {
  href: string;
  children: ReactNode;
  icon: ComponentType<IconProps>;
  className?: string;
  ariaLabel?: string;
};

export default function LinkBadge({
  href,
  children,
  icon: Icon,
  className = '',
  ariaLabel,
}: LinkBadgeProps) {
  const opensInNewTab = /^https?:\/\//i.test(href);

  return (
    <SamePageHashLink
      href={href}
      className={classNameSummary([
        contactBadgeThemeClasses,
        contactBadgeClasses,
        className,
      ])}
      target={opensInNewTab ? '_blank' : undefined}
      rel={opensInNewTab ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
    >
      <span
        className="inline-flex shrink-0 items-center justify-center"
        aria-hidden
      >
        <Icon size={CONTACT_BADGE_ICON_SIZE} />
      </span>
      {children}
    </SamePageHashLink>
  );
}
