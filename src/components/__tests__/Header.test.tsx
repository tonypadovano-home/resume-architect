import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';
import { ContactInfo } from '../../types/resume';

const mockContact: ContactInfo = {
  name: 'Jane Doe',
  title: 'Software Architect',
  email: 'jane@example.com',
  phone: '555-0100',
  location: 'New York, NY',
};

describe('Header', () => {
  it('renders the contact name', () => {
    render(<Header contact={mockContact} />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });

  it('renders the contact title', () => {
    render(<Header contact={mockContact} />);
    expect(screen.getByText('Software Architect')).toBeInTheDocument();
  });

  it('renders email and phone', () => {
    render(<Header contact={mockContact} />);
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    expect(screen.getByText('555-0100')).toBeInTheDocument();
  });

  it('does not render optional links when not provided', () => {
    render(<Header contact={mockContact} />);
    expect(screen.queryByText(/linkedin/i)).not.toBeInTheDocument();
  });

  it('renders linkedin when provided', () => {
    const contactWithLinkedIn = { ...mockContact, linkedin: 'linkedin.com/in/janedoe' };
    render(<Header contact={contactWithLinkedIn} />);
    expect(screen.getByText('linkedin.com/in/janedoe')).toBeInTheDocument();
  });
});
