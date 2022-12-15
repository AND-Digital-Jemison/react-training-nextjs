import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { LaunchMissionDetails } from './';

describe('LaunchMissionDetails', () => {
  it('should render children when provided', () => {
    render(
      <LaunchMissionDetails>
        <p>Test</p>
      </LaunchMissionDetails>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
