import { render, screen } from '@testing-library/react';
import Badge from '@/components/ui/badge';
import { badgeThemeClasses } from '@/components/ui/badgeThemes';
import type { IconProps } from '@/utils';

function MockIcon({ size }: IconProps) {
  return <svg data-testid="mock-icon" width={size} height={size} />;
}

describe('Badge', () => {
  it('renders children with the default theme', () => {
    render(<Badge>Label</Badge>);
    const badge = screen.getByText('Label');
    expect(badge.tagName).toBe('SPAN');
    expect(badge).toHaveClass(badgeThemeClasses.default.split(' ')[0]);
  });

  it('applies the selected theme', () => {
    render(<Badge theme="primary">Skill</Badge>);
    expect(screen.getByText('Skill')).toHaveClass(
      badgeThemeClasses.primary.split(' ')[0],
    );
  });

  it('renders chip layout when an icon is provided', () => {
    render(<Badge icon={MockIcon}>With icon</Badge>);
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
    expect(screen.getByText('With icon')).toHaveClass('inline-flex');
  });
});
