import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Accordion from '@/components/ui/accordion';

const items = [
  {
    id: 'one',
    title: 'First',
    summary: '2020 – 2021',
    badge: 'Work',
    body: 'First body',
    tags: ['React'],
  },
  {
    id: 'two',
    title: 'Second',
    body: 'Second body',
    variant: 'accent' as const,
  },
];

describe('Accordion', () => {
  it('returns null when there are no items', () => {
    const { container } = render(
      <Accordion items={[]} idPrefix="test" ariaLabel="Test accordion" />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('opens the first item by default and exposes accessibility attributes', () => {
    render(
      <Accordion items={items} idPrefix="career" ariaLabel="Projects" />,
    );

    const firstTrigger = screen.getByRole('button', { name: /First/i });
    const secondTrigger = screen.getByRole('button', { name: /Second/i });

    expect(firstTrigger).toHaveAttribute('aria-expanded', 'true');
    expect(firstTrigger).toHaveAttribute(
      'aria-controls',
      'career-panel-one',
    );
    expect(screen.getByText('First body')).toBeVisible();
    expect(secondTrigger).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByText('Second body')).not.toBeVisible();
  });

  it('toggles panels on trigger click', async () => {
    const user = userEvent.setup();
    render(
      <Accordion items={items} idPrefix="career" ariaLabel="Projects" />,
    );

    const firstTrigger = screen.getByRole('button', { name: /First/i });
    const secondTrigger = screen.getByRole('button', { name: /Second/i });

    await user.click(firstTrigger);
    expect(firstTrigger).toHaveAttribute('aria-expanded', 'false');

    await user.click(secondTrigger);
    expect(secondTrigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Second body')).toBeVisible();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
