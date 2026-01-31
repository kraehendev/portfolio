import type { ReactNode } from 'react';
import { ListItem, type ListItemProps } from './listItem';

export type ListProps = {
  items?: Array<Pick<ListItemProps, 'children' | 'link' | 'className'>>;
  children?: ReactNode;
  className?: string;
};

export const List = ({ items, children, className }: ListProps) => {
  return (
    <div className={className}>
      <ul className="block">
        {items && items.length > 0
          ? items.map((item, index) => <ListItem key={index} {...item} />)
          : children}
      </ul>
    </div>
  );
};
