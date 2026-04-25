import type { ReactNode } from 'react';
import Link from 'next/link';

export type ListItemProps = {
  children: ReactNode;
  link?: string;
  className?: string;
};

export const ListItem = ({ children, link, className }: ListItemProps) => {
  const content = (
    <span className={`block px-4 py-3 shadow-sm  ${className ?? ''}`}>
      {children}
    </span>
  );

  return (
    <li>
      {link ? (
        <Link
          href={link}
          className="block text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300"
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </li>
  );
};
