import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { PageLayout } from '../PageLayout';

// Mock the Navigation component
vi.mock('../../Navigation', () => ({
  Navigation: ({ onItemClick, selectedItemId }) => (
    <div data-testid="mock-navigation">
      <button onClick={() => onItemClick('home')}>Home</button>
      <button onClick={() => onItemClick('tasks')}>Tasks</button>
      <div>Selected: {selectedItemId}</div>
    </div>
  ),
}));

// Mock the AppLayout component
vi.mock('../../AppLayout', () => ({
  AppLayout: ({ children, userName, onLogout, title }) => (
    <div data-testid="mock-app-layout">
      <div>Title: {title}</div>
      {userName && <div>User: {userName}</div>}
      {onLogout && <button onClick={onLogout}>Logout</button>}
      <div>{children}</div>
    </div>
  ),
}));

describe('PageLayout Component', () => {
  const mockOnNavigationItemClick = vi.fn();
  const mockOnLogout = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders Navigation and AppLayout components', () => {
    render(
      <PageLayout
        userName="John Doe"
        title="Test Title"
        selectedNavigationItemId="home"
        onNavigationItemClick={mockOnNavigationItemClick}
        onLogout={mockOnLogout}
      >
        <div>Test Content</div>
      </PageLayout>
    );

    expect(screen.getByTestId('mock-navigation')).toBeInTheDocument();
    expect(screen.getByTestId('mock-app-layout')).toBeInTheDocument();
  });

  test('passes correct props to AppLayout', () => {
    render(
      <PageLayout
        userName="John Doe"
        title="Test Title"
        selectedNavigationItemId="home"
        onNavigationItemClick={mockOnNavigationItemClick}
        onLogout={mockOnLogout}
      >
        <div>Test Content</div>
      </PageLayout>
    );

    expect(screen.getByText('Title: Test Title')).toBeInTheDocument();
    expect(screen.getByText('User: John Doe')).toBeInTheDocument();
  });

  test('renders children content', () => {
    render(
      <PageLayout
        userName="John Doe"
        selectedNavigationItemId="home"
        onNavigationItemClick={mockOnNavigationItemClick}
      >
        <div>Test Content</div>
      </PageLayout>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('handles navigation item clicks', () => {
    render(
      <PageLayout
        userName="John Doe"
        selectedNavigationItemId="home"
        onNavigationItemClick={mockOnNavigationItemClick}
      >
        <div>Test Content</div>
      </PageLayout>
    );

    fireEvent.click(screen.getByText('Tasks'));

    expect(mockOnNavigationItemClick).toHaveBeenCalledWith('tasks');
  });

  test('handles logout', () => {
    render(
      <PageLayout
        userName="John Doe"
        selectedNavigationItemId="home"
        onNavigationItemClick={mockOnNavigationItemClick}
        onLogout={mockOnLogout}
      >
        <div>Test Content</div>
      </PageLayout>
    );

    fireEvent.click(screen.getByText('Logout'));

    expect(mockOnLogout).toHaveBeenCalledTimes(1);
  });
});
