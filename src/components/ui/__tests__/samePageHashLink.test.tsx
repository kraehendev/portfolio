import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SamePageHashLink from '@/components/ui/samePageHashLink';
import * as utils from '@/utils';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/en'),
}));

describe('SamePageHashLink', () => {
  beforeEach(() => {
    jest.spyOn(utils, 'handleSamePageHashClick').mockImplementation(() => {});
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

  it('delegates clicks to handleSamePageHashClick and forwards onClick', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(
      <SamePageHashLink href="/en#about" onClick={onClick}>
        About
      </SamePageHashLink>,
    );

    await user.click(screen.getByRole('link', { name: 'About' }));

    expect(utils.handleSamePageHashClick).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'click' }),
      '/en#about',
      '/en',
    );
    expect(onClick).toHaveBeenCalled();
  });
});
