import { isExternalLink } from '@/utils';
import AnimatedLinkLabel from '@/components/molecules/animatedLinkLabel';
import Link from 'next/link';
import styles from '../../styles/organisms/animatedLink.module.scss';

export default function AnimatedLink({ href, label }: { href: string, label: string }) {
  const isExternal = isExternalLink(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AnimatedLinkLabel label={label} isExternal={isExternal} inline />
      </a>
    );
  }

  return (
    <Link href={href} className={styles.link}>
      <AnimatedLinkLabel label={label} isExternal={isExternal} inline />
    </Link>
  );
}
