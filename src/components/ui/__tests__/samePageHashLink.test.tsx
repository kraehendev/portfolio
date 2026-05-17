import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SamePageHashLink from '@/components/ui/samePageHashLink';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/en'),
}));

describe('SamePageHashLink', () => {
  beforeEach(() => {
    jest.spyOn(window.history, 'pushState').mockImplementation(() => {});
    jest.spyOn(document, 'getElementById').mockReturnValue({
      scrollIntoView: jest.fn(),
    } as unknown as HTMLElement);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders a link with the given href and children', () => {
    render(
      <SamePageHashLink href="/en#about">About section</SamePageHashLink>,
    );
    const link = screen.getByRole('link', { name: 'About section' });
    expect(link).toHaveAttribute('href', '/en#about');
  });

  it('handles same-page hash clicks and forwards onClick', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(
      <SamePageHashLink href="/en#about" onClick={onClick}>
        About
      </SamePageHashLink>,
    );

    await user.click(screen.getByRole('link', { name: 'About' }));

    expect(document.getElementById).toHaveBeenCalledWith('about');
    expect(window.history.pushState).toHaveBeenCalledWith(
      null,
      '',
      '/en#about',
    );
    expect(onClick).toHaveBeenCalled();
  });
});
