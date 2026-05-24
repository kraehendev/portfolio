import {
  compareBySkillLevel,
  skillLevelToBadgeTheme,
} from '@/components/ui/badgeThemes';

describe('skillLevelToBadgeTheme', () => {
  it('maps portfolio skill tiers to badge color themes', () => {
    expect(skillLevelToBadgeTheme('expert')).toBe('primary');
    expect(skillLevelToBadgeTheme('intermediate')).toBe('secondary');
    expect(skillLevelToBadgeTheme('beginner')).toBe('tertiary');
  });
});

describe('compareBySkillLevel', () => {
  it('sorts by skill level (primary before secondary before tertiary)', () => {
    const items = [
      { level: 'tertiary' as const, label: 'Zebra' },
      { level: 'primary' as const, label: 'Alpha' },
      { level: 'secondary' as const, label: 'Beta' },
    ];

    expect([...items].sort(compareBySkillLevel)).toEqual([
      { level: 'primary', label: 'Alpha' },
      { level: 'secondary', label: 'Beta' },
      { level: 'tertiary', label: 'Zebra' },
    ]);
  });

  it('sorts alphabetically when skill level matches', () => {
    const items = [
      { level: 'primary' as const, label: 'Zebra' },
      { level: 'primary' as const, label: 'Alpha' },
    ];

    expect([...items].sort(compareBySkillLevel)).toEqual([
      { level: 'primary', label: 'Alpha' },
      { level: 'primary', label: 'Zebra' },
    ]);
  });
});
