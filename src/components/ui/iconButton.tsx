import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import { Icon, type IconProps as SpriteIconProps } from '@/components/ui/icon';

const baseClassName =
  'relative z-[1] flex flex-col cursor-pointer items-center justify-center rounded-md border-none bg-transparent p-2 text-foreground transition-colors duration-200 ease-in-out hover:bg-[var(--elevated-surface-bg)] active:scale-95';

export type IconButtonProps = {
  label: ReactNode;
  iconPath?: SpriteIconProps['path'];
  iconSlug: SpriteIconProps['slug'];
  iconSize?: SpriteIconProps['size'];
  iconClassName?: SpriteIconProps['className'];
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    {
      label,
      iconPath,
      iconSlug,
      iconSize,
      iconClassName,
      className,
      type = 'button',
      ...props
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={`${baseClassName}${className ? ` ${className}` : ''}`}
        {...props}
      >
        <Icon
          path={iconPath}
          slug={iconSlug}
          size={iconSize}
          className={iconClassName}
        />
        {label}
      </button>
    );
  },
);
