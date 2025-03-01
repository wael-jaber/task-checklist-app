import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { AppLayout } from '../AppLayout';

describe('AppLayout Component', () => {
  test('renders the app title', () => {
    render(<AppLayout>Content</AppLayout>);

    expect(screen.getByText('Task Checklist App')).toBeInTheDocument();
  });

  test('renders custom title when provided', () => {
    render(<AppLayout title="Custom Title">Content</AppLayout>);

    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  test('renders children content', () => {
    render(
      <AppLayout>
        <div data-testid="test-content">Test Content</div>
      </AppLayout>
    );

    expect(screen.getByTestId('test-content')).toBeInTheDocument();
  });

  test('renders UserProfileBadge when userName is provided', () => {
    render(
      <AppLayout userName="John Doe" onLogout={() => {}}>
        Content
      </AppLayout>
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  test('does not render UserProfileBadge when userName is not provided', () => {
    render(<AppLayout>Content</AppLayout>);

    // This assumes the logout text is only visible when the UserProfileBadge is rendered
    // and its menu is opened
    expect(screen.queryByText('Logout')).not.toBeInTheDocument();
  });

  test('calls onLogout when logout is clicked', () => {
    const mockOnLogout = vi.fn();
    render(
      <AppLayout userName="John Doe" onLogout={mockOnLogout}>
        Content
      </AppLayout>
    );

    // Open the user menu
    fireEvent.click(screen.getByLabelText('account menu'));

    // Click the logout button
    fireEvent.click(screen.getByText('Logout'));

    expect(mockOnLogout).toHaveBeenCalledTimes(1);
  });
});
