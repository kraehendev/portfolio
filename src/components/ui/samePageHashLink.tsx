'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { handleSamePageHashClick } from '@/utils';

type SamePageHashLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export default function SamePageHashLink({
  href,
  children,
  onClick,
  ...props
}: SamePageHashLinkProps) {
  const pathname = usePathname();

  return (
    <a
      href={href}
      {...props}
      onClick={(event) => {
        handleSamePageHashClick(event, href, pathname);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
