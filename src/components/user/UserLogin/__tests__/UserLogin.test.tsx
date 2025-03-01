// src/components/__tests__/UserLogin.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { UserLogin } from '../UserLogin';

describe('UserLogin Component', () => {
  const mockOnLogin = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders login form correctly', () => {
    render(<UserLogin onLogin={mockOnLogin} />);

    expect(screen.getByText('Task Checklist App')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /continue/i })).toBeInTheDocument();
  });

  test('calls onLogin with the entered name', () => {
    render(<UserLogin onLogin={mockOnLogin} />);

    // Enter a name
    fireEvent.change(screen.getByLabelText(/your name/i), {
      target: { value: 'John Doe' },
    });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /continue/i }));

    expect(mockOnLogin).toHaveBeenCalledWith('John Doe');
  });

  test('trims whitespace from entered name', () => {
    render(<UserLogin onLogin={mockOnLogin} />);

    // Enter a name with whitespace
    fireEvent.change(screen.getByLabelText(/your name/i), {
      target: { value: '  Jane Smith  ' },
    });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /continue/i }));

    expect(mockOnLogin).toHaveBeenCalledWith('Jane Smith');
  });

  test('disables form when loading', () => {
    render(<UserLogin onLogin={mockOnLogin} isLoading={true} />);

    expect(screen.getByLabelText(/your name/i)).toBeDisabled();
    expect(screen.getByRole('button', { name: /continue/i })).toBeDisabled();
  });
});
