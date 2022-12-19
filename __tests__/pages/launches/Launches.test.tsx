import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Launches from '../../../pages/launches';

const mockLaunches: Launch[] = [
  {
    mission_name: 'Mission 1',
    rocket: {
      rocket_name: 'Rocket 1',
    },
    launch_site: {
      site_name: 'Site 1',
    },
    launch_date_utc: '2021-01-01T00:00:00.000Z',
    upcoming: true,
  },
];

describe('Launches', () => {
  it('should render the launches', async () => {
    render(<Launches launches={mockLaunches} />);
    expect(await screen.findByText('Mission 1')).toBeInTheDocument();
  });
});