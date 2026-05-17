'use client';

import type { ComponentType } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import FlagDe from '@/components/icons/flagDe';
import FlagEn from '@/components/icons/flagEn';
import type { IconProps } from '@/utils';
import { routing, type Locale } from '@/i18n/routing';
import { writeLocaleCookie } from '@/lib/localeCookie';

const FLAG_SIZE = 28;

const localeFlags: Record<Locale, ComponentType<IconProps>> = {
  de: FlagDe,
  en: FlagEn,
};

const groupClassName =
  'inline-flex items-center gap-1.5 rounded-md bg-[var(--elevated-surface-bg)] p-1';

const optionBaseClassName =
  'flex cursor-pointer items-center justify-center rounded p-2 opacity-60 transition-[opacity,box-shadow,transform] duration-200 hover:opacity-100 disabled:cursor-wait disabled:opacity-40';

const optionActiveClassName = 'bg-background/80 opacity-100';

type LanguageSwitcherProps = {
  className?: string;
};

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations('language');
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale || isPending) {
      return;
    }

    writeLocaleCookie(nextLocale);

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div
      role="group"
      aria-label={t('switch')}
      className={`${groupClassName}${className ? ` ${className}` : ''}`}
    >
      {routing.locales.map((code) => {
        const isActive = code === locale;
        const Flag = localeFlags[code];

        return (
          <button
            key={code}
            type="button"
            className={`${optionBaseClassName}${isActive ? ` ${optionActiveClassName}` : ''}`}
            aria-pressed={isActive}
            aria-label={t(code)}
            disabled={isPending}
            onClick={() => switchLocale(code)}
          >
            <Flag size={FLAG_SIZE} className="block overflow-hidden rounded-sm" />
          </button>
        );
      })}
    </div>
  );
}
