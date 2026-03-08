import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SummarySection } from '../SummarySection';

describe('SummarySection', () => {
  it('renders the summary text', () => {
    render(<SummarySection summary="A talented software architect." />);
    expect(screen.getByText('A talented software architect.')).toBeInTheDocument();
  });

  it('renders the section title', () => {
    render(<SummarySection summary="Summary goes here." />);
    expect(screen.getByText('Summary')).toBeInTheDocument();
  });
});
