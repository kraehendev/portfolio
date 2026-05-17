import type { ReactNode } from 'react';

type SiteLayoutProps = {
  sidebar: ReactNode;
  children: ReactNode;
};

const shellClassName =
  'flex min-h-screen min-w-0 flex-1 flex-col lg:flex-row lg:items-stretch';

const sidebarClassName =
  'hidden min-h-0 min-w-0 lg:flex lg:h-screen lg:basis-[20%] lg:shrink-0 lg:grow-0 lg:flex-col lg:gap-5 lg:sticky lg:top-0 lg:z-[100] lg:overflow-hidden lg:border-r lg:border-[var(--elevated-surface-border)] lg:bg-background lg:px-3 lg:pt-4 lg:shadow-[2px_0_8px_var(--elevated-surface-shadow)]';

const mainClassName =
  'flex min-w-0 flex-1 flex-col lg:min-h-screen lg:basis-[80%] lg:shrink-0 lg:grow-0';

export default function SiteLayout({ sidebar, children }: SiteLayoutProps) {
  return (
    <div className={shellClassName}>
      <aside className={sidebarClassName}>{sidebar}</aside>
      <div className={mainClassName}>{children}</div>
    </div>
  );
}
