import { render, screen } from '@testing-library/react';
import { PageTitle } from './';

describe('PageTitle', () => {
  it('should render the title', () => {
    render(<PageTitle title='Test title' />);
    expect(screen.getByText('Test title')).toBeInTheDocument();
  });
});
