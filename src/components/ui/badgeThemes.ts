/** Reusable badge color themes (e.g. tech stack skill tiers). */
export type BadgeTheme = 'default' | 'primary' | 'secondary' | 'tertiary';

export type SkillBadgeTheme = Extract<
  BadgeTheme,
  'primary' | 'secondary' | 'tertiary'
>;

export const SKILL_BADGE_THEMES: SkillBadgeTheme[] = [
  'primary',
  'secondary',
  'tertiary',
];

const skillLevelRank = Object.fromEntries(
  SKILL_BADGE_THEMES.map((theme, index) => [theme, index]),
) as Record<SkillBadgeTheme, number>;

/** Sort best → worst (primary first), then alphabetically by label. */
export function compareBySkillLevel<
  T extends { level: SkillBadgeTheme; label: string },
>(a: T, b: T): number {
  const byLevel = skillLevelRank[a.level] - skillLevelRank[b.level];
  return byLevel !== 0 ? byLevel : a.label.localeCompare(b.label);
}

export const badgeThemeClasses: Record<BadgeTheme, string> = {
  default:
    'bg-[rgba(196,168,130,0.2)] text-[#dccbb0] ring-1 ring-inset ring-[rgba(196,168,130,0.35)]',
  primary:
    'bg-emerald-500/20 text-emerald-100 ring-1 ring-inset ring-emerald-400/40',
  secondary:
    'bg-sky-500/20 text-sky-100 ring-1 ring-inset ring-sky-400/40',
  tertiary:
    'bg-amber-500/20 text-amber-100 ring-1 ring-inset ring-amber-400/40',
};
