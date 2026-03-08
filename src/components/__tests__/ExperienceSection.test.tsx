import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExperienceSection } from '../ExperienceSection';
import { ExperienceItem } from '../../types/resume';

const mockExperience: ExperienceItem[] = [
  {
    company: 'Acme Corp',
    title: 'Senior Engineer',
    startDate: 'Jan 2020',
    endDate: 'Present',
    location: 'New York, NY',
    highlights: ['Built scalable systems', 'Led a team of 5'],
  },
];

describe('ExperienceSection', () => {
  it('renders the section title', () => {
    render(<ExperienceSection experience={mockExperience} />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('renders company name', () => {
    render(<ExperienceSection experience={mockExperience} />);
    expect(screen.getByText('Acme Corp')).toBeInTheDocument();
  });

  it('renders job title', () => {
    render(<ExperienceSection experience={mockExperience} />);
    expect(screen.getByText('Senior Engineer')).toBeInTheDocument();
  });

  it('renders highlights', () => {
    render(<ExperienceSection experience={mockExperience} />);
    expect(screen.getByText('Built scalable systems')).toBeInTheDocument();
    expect(screen.getByText('Led a team of 5')).toBeInTheDocument();
  });
});
