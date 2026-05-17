import type {
  ButtonHTMLAttributes,
  ReactNode,
  MouseEventHandler,
  AnchorHTMLAttributes,
} from 'react';
import Link from 'next/link';
import styles from '@/styles/ui/button.module.scss';

export type ButtonProps = {
  children: ReactNode;
  theme?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
  disabled?: boolean;
  onclick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  resetSpacing?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

const isExternalLink = (href: string): boolean => {
  return /^(https?:\/\/|mailto:|tel:)/i.test(href);
};

export const Button = ({
  children,
  theme = 'primary',
  disabled = false,
  onclick,
  href,
  resetSpacing = false,
  ...props
}: ButtonProps) => {
  const buttonClasses = [
    styles.button,
    disabled ? styles.disabled : '',
    resetSpacing ? styles.resetSpacing : '',
    theme ? styles[theme] : 'styles.secondary',
  ]
    .filter(Boolean)
    .join(' ');
  const isExternal = href ? isExternalLink(href) : false;

  if (href && !disabled) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={buttonClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={buttonClasses}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onclick}
      {...props}
    >
      {children}
    </button>
  );
};
