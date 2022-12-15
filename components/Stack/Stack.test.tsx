import { render, screen } from '@testing-library/react';
import { Stack } from './';
import '@testing-library/jest-dom'

describe('Stack', () => {
  it('should render children', () => {
    render(
      <Stack>
        <div>Child 1</div>
        <div>Child 2</div>
      </Stack>
    );

    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('should change flex direction when describe is set', () => {
    render(
      <Stack direction='row'>
        <div>Child 1</div>
      </Stack>
    );

    const child = screen.getByText('Child 1');
    const parent = child.parentElement;
    expect(parent).toHaveStyle({ flexDirection: 'row' });
  })
});
