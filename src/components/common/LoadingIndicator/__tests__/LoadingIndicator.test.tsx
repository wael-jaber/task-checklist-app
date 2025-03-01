import { render, screen } from '@testing-library/react';
import { LoadingIndicator } from '../LoadingIndicator';
import { describe, test, expect } from 'vitest';

describe('LoadingIndicator Component', () => {
  test('renders with default message', () => {
    render(<LoadingIndicator />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders with custom message', () => {
    render(<LoadingIndicator message="Custom loading message" />);

    expect(screen.getByText('Custom loading message')).toBeInTheDocument();
  });

  test('applies fullScreen prop correctly', () => {
    const { container } = render(<LoadingIndicator fullScreen />);

    // Find the Box component and check its style
    const boxElement = container.firstChild;
    expect(boxElement).toHaveStyle('height: 100vh');
  });

  test('renders CircularProgress component', () => {
    render(<LoadingIndicator />);

    // Check if CircularProgress is rendered (by role)
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
