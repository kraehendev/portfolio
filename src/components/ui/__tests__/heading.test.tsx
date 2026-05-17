import { render, screen } from '@testing-library/react';
import Heading, { headingStyles } from '@/components/ui/heading';

describe('Heading', () => {
  it('renders as h1 by default with heading styles', () => {
    render(<Heading>Title</Heading>);
    const heading = screen.getByRole('heading', { level: 1, name: 'Title' });
    expect(heading.tagName).toBe('H1');
    expect(heading).toHaveClass(headingStyles.h1.split(' ')[0]);
    expect(heading).toHaveClass('mb-8');
  });

  it('renders the requested semantic level', () => {
    render(<Heading as="h3">Section</Heading>);
    const heading = screen.getByRole('heading', { level: 3, name: 'Section' });
    expect(heading.tagName).toBe('H3');
    expect(heading).toHaveClass(headingStyles.h3.split(' ')[0]);
  });

  it('forwards id and merges custom className', () => {
    render(
      <Heading id="intro" className="custom">
        Intro
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'Intro' });
    expect(heading).toHaveAttribute('id', 'intro');
    expect(heading).toHaveClass('custom');
  });
});
