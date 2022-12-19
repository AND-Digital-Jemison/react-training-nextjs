import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LaunchMission } from './LaunchMission';

const mockLaunch: Launch = {
  mission_name: 'Mission Name',
  rocket: {
    rocket_name: 'Rocket Name',
  },
  launch_site: {
    site_name: 'Site Name',
  },
  launch_date_utc: '2021-01-01T00:00:00.000Z',
  upcoming: true,
};

describe('LaunchMission', () => {
  beforeEach(() => {
    render(
      <LaunchMission {...mockLaunch} />
    );
  });

  it('should render a mission name', () => {
    expect(screen.getByText('Mission Name')).toBeInTheDocument();
  });

  it('should render a rocket name', () => {
    expect(screen.getByText('Rocket Name')).toBeInTheDocument();
  });

  it('should render a site name', () => {
    expect(screen.getByText('Site Name')).toBeInTheDocument();
  });

  it('should render a date', () => {
    expect(screen.getByText('1 January 2021')).toBeInTheDocument();
  });
});
