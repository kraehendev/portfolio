import { render, screen } from '@testing-library/react';
import LinkBadge from '@/components/ui/linkBadge';
import type { IconProps } from '@/utils';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/en'),
}));

function MockIcon({ size }: IconProps) {
  return <svg data-testid="link-badge-icon" width={size} height={size} />;
}

describe('LinkBadge', () => {
  it('renders an internal hash link without opening a new tab', () => {
    render(
      <LinkBadge href="/en#contact" icon={MockIcon}>
        Contact
      </LinkBadge>,
    );

    const link = screen.getByRole('link', { name: 'Contact' });
    expect(link).toHaveAttribute('href', '/en#contact');
    expect(link).not.toHaveAttribute('target');
    expect(screen.getByTestId('link-badge-icon')).toBeInTheDocument();
  });

  it('opens external http links in a new tab', () => {
    render(
      <LinkBadge
        href="https://github.com/example"
        icon={MockIcon}
        ariaLabel="GitHub profile"
      >
        GitHub
      </LinkBadge>,
    );

    const link = screen.getByRole('link', { name: 'GitHub profile' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
