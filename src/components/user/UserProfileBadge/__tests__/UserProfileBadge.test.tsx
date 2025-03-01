import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { UserProfileBadge } from '../UserProfileBadge';

describe('UserProfileBadge Component', () => {
  const mockOnLogout = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders user name correctly', () => {
    render(<UserProfileBadge userName="John Doe" onLogout={mockOnLogout} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  test('shows first letter of name in avatar', () => {
    render(<UserProfileBadge userName="John Doe" onLogout={mockOnLogout} />);

    expect(screen.getByText('J')).toBeInTheDocument();
  });

  test('opens menu when clicking avatar button', () => {
    render(<UserProfileBadge userName="John Doe" onLogout={mockOnLogout} />);

    const logoutMenuItem = screen.getByText('Logout');

    // Ensure it is hidden
    expect(window.getComputedStyle(logoutMenuItem).visibility).toBe('hidden');

    // Click on avatar button
    fireEvent.click(screen.getByLabelText('account menu'));

    // Ensure it is now visible
    expect(window.getComputedStyle(logoutMenuItem).visibility).toBe('visible');
  });

  test('calls onLogout when logout menu item is clicked', () => {
    render(<UserProfileBadge userName="John Doe" onLogout={mockOnLogout} />);

    // Open menu
    fireEvent.click(screen.getByLabelText('account menu'));

    // Click logout
    fireEvent.click(screen.getByText('Logout'));

    expect(mockOnLogout).toHaveBeenCalledTimes(1);
  });
});
