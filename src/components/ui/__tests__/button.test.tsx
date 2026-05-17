import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders a native button by default', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button.tagName).toBe('BUTTON');
    expect(button).not.toBeDisabled();
  });

  it('renders a disabled button when disabled', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled();
  });

  it('renders an internal Next.js link for relative hrefs', () => {
    render(<Button href="/about">About</Button>);
    const link = screen.getByRole('link', { name: 'About' });
    expect(link).toHaveAttribute('href', '/about');
    expect(link).not.toHaveAttribute('target');
  });

  it('renders an external anchor for absolute URLs', () => {
    render(<Button href="https://example.com">External</Button>);
    const link = screen.getByRole('link', { name: 'External' });
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('ignores href when disabled', () => {
    render(
      <Button href="/about" disabled>
        About
      </Button>,
    );
    expect(screen.getByRole('button', { name: 'About' })).toBeDisabled();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
