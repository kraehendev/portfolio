import type { ComponentType } from 'react';
import type { IconProps } from '@/utils';
import { classNameSummary } from '@/utils';

type IconLabelProps = {
  label: string;
  icon?: ComponentType<IconProps>;
  className?: string;
  iconWrapperClassName?: string;
};

export default function IconLabel({
  label,
  icon: Icon,
  className = '',
  iconWrapperClassName = '',
}: IconLabelProps) {
  return (
    <div
      className={classNameSummary([
        'flex flex-col items-center text-center gap-3',
        className,
      ])}
    >
      {Icon ? (
        <span
          className={classNameSummary([
            'inline-flex items-center justify-center rounded p-2',
            iconWrapperClassName,
          ])}
        >
          <Icon size={48} />
        </span>
      ) : null}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
