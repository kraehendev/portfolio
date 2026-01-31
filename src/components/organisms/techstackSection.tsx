import type { ComponentType } from 'react';
import Grid from '@/components/molecules/grid';
import IconLabel from '@/components/molecules/iconLabel';
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
    expert: 'bg-emerald-400/20 text-emerald-100',
    intermediate: 'bg-sky-400/20 text-sky-100',
    beginner: 'bg-amber-400/20 text-amber-100',
  };

  return (
    <div className={className}>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="md:w-[30%]">
          <div className="text-sm font-semibold uppercase tracking-wide text-white/70">
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
                  item.level ? levelClasses[item.level] : 'bg-white/10'
                }
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
