import type { ComponentType } from 'react';
import Grid from '@/components/ui/grid';
import IconLabel from '@/components/ui/iconLabel';
import type { IconProps } from '@/utils';

type TechstackItem = {
  label: string;
  level?: 'expert' | 'intermediate' | 'beginner';
  icon?: ComponentType<IconProps>;
};

type TechstackSectionProps = {
  items: TechstackItem[];
  className?: string;
};

export default function TechstackSection({
  items,
  className = '',
}: TechstackSectionProps) {
  const levelClasses: Record<NonNullable<TechstackItem['level']>, string> = {
    expert: 'bg-[#8b7355]/30 text-foreground',
    intermediate: 'bg-[#a68b6f]/30 text-foreground',
    beginner: 'bg-[#c4a882]/30 text-foreground',
  };

  return (
    <div className={className}>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="md:w-[30%]">
          <div className="text-sm font-semibold uppercase tracking-wide text-foreground/70">
            Level
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            {(
              [
                { level: 'expert', label: 'Expert' },
                { level: 'intermediate', label: 'Intermediate' },
                { level: 'beginner', label: 'Beginner' },
              ] as const
            ).map(({ level, label }) => (
              <li key={level} className="flex items-center gap-2">
                <span
                  className={`inline-flex h-3 w-3 rounded ${levelClasses[level]}`}
                />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-[70%]">
          <Grid cols={{ base: 4, md: 6, lg: 8 }} gap={4}>
            {items.map((item) => (
              <IconLabel
                key={item.label}
                label={item.label}
                icon={item.icon}
                iconWrapperClassName={
                  item.level ? levelClasses[item.level] : 'bg-[var(--bento-card-bg)]/50'
                }
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
