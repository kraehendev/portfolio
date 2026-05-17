import { getTranslations } from 'next-intl/server';
import Badge from '@/components/ui/badge';
import Heading from '@/components/ui/heading';
import {
  compareBySkillLevel,
  SKILL_BADGE_THEMES,
} from '@/components/ui/badgeThemes';
import type { TechstackCategory } from '@/data/techstack';

type TechstackSectionProps = {
  categories: TechstackCategory[];
  className?: string;
};

export default async function TechstackSection({
  categories,
  className = '',
}: TechstackSectionProps) {
  const t = await getTranslations('techstack');

  return (
    <div className={className}>
      <div className="mb-8 rounded-lg border border-[var(--elevated-surface-border)] bg-[var(--elevated-surface-bg)]/60 p-4">
        <div className="text-sm font-semibold uppercase tracking-wide text-foreground/70">
          {t('levelLegend')}
        </div>
        <ul className="mt-3 flex flex-wrap gap-2">
          {SKILL_BADGE_THEMES.map((theme) => (
            <li key={theme}>
              <Badge theme={theme}>{t(`levels.${theme}`)}</Badge>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
        {categories.map((category) => (
          <section
            key={category.categoryKey}
            aria-labelledby={`techstack-${category.categoryKey}`}
            className="rounded-lg border border-dashed border-[var(--elevated-surface-border)] p-6"
          >
            <Heading
              as="h3"
              id={`techstack-${category.categoryKey}`}
              className="mb-4 text-foreground/90"
            >
              {t(`categories.${category.categoryKey}`)}
            </Heading>
            <div className="flex flex-wrap gap-2">
              {[...category.items].sort(compareBySkillLevel).map((item) => (
                <Badge key={item.label} theme={item.level} icon={item.icon}>
                  {item.label}
                </Badge>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
