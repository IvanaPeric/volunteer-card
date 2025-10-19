import { render, screen } from '@testing-library/react';
import DashboardHeader from './DashboardHeader';
import '@testing-library/jest-dom';

describe('DashboardHeader', () => {
  it('renders the logo and info button', () => {
    render(<DashboardHeader />);
    // Logo is present (by aria-hidden or sr-only text)
    expect(screen.getByText('Volunteer Card Logo')).toBeInTheDocument();
    // Info button is present
    expect(screen.getByTitle('Project Details')).toBeInTheDocument();
  });
});
