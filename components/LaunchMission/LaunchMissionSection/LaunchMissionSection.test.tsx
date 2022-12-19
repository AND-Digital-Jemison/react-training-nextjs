import { render, screen } from '@testing-library/react';
import { LaunchMissionSection } from './';

const mockLaunchMissionSection = {
  title: 'Title',
  description: 'Description',
};

describe('LaunchMissionSection', () => {

  beforeEach(() => {
    render(<LaunchMissionSection {...mockLaunchMissionSection} />)
  });

  it('should show a title', () => {
    expect(screen.getByText('Title')).toBeInTheDocument();
  })
  it('should show a description', () => {
    expect(screen.getByText('Description')).toBeInTheDocument();
  })
});