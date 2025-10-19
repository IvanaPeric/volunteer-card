import { render, screen, fireEvent } from '@testing-library/react';
import VolunteerCard from './VolunteerCard';
import { Volunteer } from '../types/Volunteer';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('VolunteerCard', () => {
  const volunteer: Volunteer = {
    id: 1,
    ngo: 'Test NGO',
    location: 'Test City',
    field: 'Education',
    description: 'Help teach children.',
    applyUrl: 'https://example.com/apply',
    imageUrl: 'https://example.com/image.jpg',
    saved: false,
  };

  it('renders volunteer info and image', () => {
    render(
      <MemoryRouter>
        <VolunteerCard volunteer={volunteer} onSave={() => {}} />
      </MemoryRouter>
    );
    expect(screen.getByText('Test NGO')).toBeInTheDocument();
    expect(screen.getByText('Test City')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Help teach children.')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('calls onSave when star button is clicked', () => {
    const onSave = vi.fn();
    render(
      <MemoryRouter>
        <VolunteerCard volunteer={volunteer} onSave={onSave} />
      </MemoryRouter>
    );
    const starButton = screen.getByLabelText('Save');
    fireEvent.click(starButton);
    expect(onSave).toHaveBeenCalledWith(1);
  });

  it('shows filled star when saved', () => {
    render(
      <MemoryRouter>
        <VolunteerCard volunteer={{ ...volunteer, saved: true }} onSave={() => {}} />
      </MemoryRouter>
    );
    // Should have aria-label 'Unsave' when saved
    expect(screen.getByLabelText('Unsave')).toBeInTheDocument();
  });
});
