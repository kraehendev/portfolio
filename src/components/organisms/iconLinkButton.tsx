import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  MouseEventHandler,
} from 'react';
import { Button, ButtonProps } from '../atoms/button';
import styles from '../../styles/molecules/iconLinkButton.module.scss';
import AnimatedLinkLabel from '../molecules/animatedLinkLabel';
import { isExternalLink } from '@/utils';

type IconLinkButtonProps = {
  label: string;
  href: string;
  theme?: ButtonProps['theme'];
  disabled?: boolean;
  onclick?: MouseEventHandler<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export default function IconLinkButton({
  label,
  href,
  theme = 'primary',
  disabled = false,
  onclick,
  ...props
}: IconLinkButtonProps) {

  return (
    <div className={styles.wrapper}>
      <Button
        href={href}
        theme={theme}
        disabled={disabled}
        onclick={onclick}
        resetSpacing={true}
        {...props}
      >
        <AnimatedLinkLabel label={label} isExternal={isExternalLink(href)} />
      </Button>
    </div>
  );
};
