import { render, screen } from '@testing-library/react';
import { AuthMessage } from '../AuthMessage';
import { describe, test, expect } from 'vitest';

describe('AuthMessage Component', () => {
  test('renders success message correctly', () => {
    render(<AuthMessage type="success" title="Success Title" message="Success message" />);

    expect(screen.getByText('Success Title')).toBeInTheDocument();
    expect(screen.getByText('Success message')).toBeInTheDocument();
  });

  test('renders error message correctly', () => {
    render(<AuthMessage type="error" message="Error message" />);

    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  test('renders info message correctly', () => {
    render(<AuthMessage type="info" message="Info message" />);

    expect(screen.getByText('Info message')).toBeInTheDocument();
  });

  test('renders without title', () => {
    render(<AuthMessage type="success" message="Message without title" />);

    expect(screen.getByText('Message without title')).toBeInTheDocument();
    // Assuming the AlertTitle component isn't rendered when no title is provided
  });
});
