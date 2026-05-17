'use client';

import { useEffect, useState } from 'react';
import Badge from '@/components/ui/badge';
import Tag from '@/components/ui/tag';
import styles from '@/styles/ui/accordion.module.scss';

export type AccordionItemData = {
  id: string;
  title: string;
  /** Secondary line in the trigger (e.g. a date range). */
  summary?: string;
  /** Optional pill shown next to the summary. */
  badge?: string;
  /** Main panel copy. */
  body: string;
  /** Optional chips below the body. */
  tags?: string[];
  /** Highlights the row trigger (e.g. certification-style border). */
  variant?: 'default' | 'accent';
};

type AccordionProps = {
  items: AccordionItemData[];
  /** Prefix for stable `id` / `aria-controls` (must be unique on the page). */
  idPrefix: string;
  ariaLabel: string;
  className?: string;
};

function Chevron({ expanded }: { expanded: boolean }) {
  return (
    <span className={styles.chevronWrap} aria-hidden>
      <svg
        className={`${styles.chevron} ${expanded ? styles.chevronExpanded : ''}`}
        viewBox="0 0 24 24"
        width={20}
        height={20}
      >
        <path
          d="M6 9l6 6 6-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Accordion({
  items,
  idPrefix,
  ariaLabel,
  className = '',
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(() => items[0]?.id ?? null);

  const itemIds = items.map((i) => i.id).join(',');

  useEffect(() => {
    if (!items.length) {
      setOpenId(null);
      return;
    }
    setOpenId((prev) =>
      prev && items.some((p) => p.id === prev) ? prev : items[0].id,
    );
  }, [itemIds, items.length]);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  if (!items.length) return null;

  const rootClass = [styles.root, className].filter(Boolean).join(' ');

  return (
    <div className={rootClass} role="group" aria-label={ariaLabel}>
      {items.map((entry) => {
        const isOpen = openId === entry.id;
        const panelId = `${idPrefix}-panel-${entry.id}`;
        const triggerId = `${idPrefix}-trigger-${entry.id}`;
        return (
          <div
            key={entry.id}
            className={`${styles.item} ${
              entry.variant === 'accent' ? styles.itemAccent : ''
            }`}
          >
            <button
              type="button"
              id={triggerId}
              className={styles.trigger}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(entry.id)}
            >
              <Chevron expanded={isOpen} />
              <span className={styles.triggerBody}>
                <span className={styles.title}>{entry.title}</span>
                {(entry.summary || entry.badge) && (
                  <span className={styles.triggerMeta}>
                    {entry.summary && (
                      <span className={styles.summary}>{entry.summary}</span>
                    )}
                    {entry.badge && <Badge>{entry.badge}</Badge>}
                  </span>
                )}
              </span>
            </button>
            <div
              id={panelId}
              aria-labelledby={triggerId}
              className={styles.panel}
              hidden={!isOpen}
            >
              <p className={styles.panelText}>{entry.body}</p>
              {entry.tags && entry.tags.length > 0 && (
                <div className={styles.tags}>
                  {entry.tags.map((label) => (
                    <Tag key={label}>{label}</Tag>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
