import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { Navigation } from '../Navigation';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

// Mock useMediaQuery to control mobile/desktop view
vi.mock('@mui/material', async () => {
  const actual = await vi.importActual('@mui/material');
  return {
    ...actual,
    useMediaQuery: () => false, // Default to desktop view
  };
});

describe('Navigation Component', () => {
  const mockOnItemClick = vi.fn();

  const customItems = [
    { id: 'home', label: 'Home', icon: <HomeIcon /> },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
  ];

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders default navigation items', () => {
    render(<Navigation onItemClick={mockOnItemClick} />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Tasks')).toBeInTheDocument();
  });

  test('renders custom navigation items', () => {
    render(<Navigation items={customItems} onItemClick={mockOnItemClick} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.queryByText('Dashboard')).not.toBeInTheDocument();
  });

  test('highlights selected item', () => {
    render(
      <Navigation items={customItems} selectedItemId="settings" onItemClick={mockOnItemClick} />
    );

    // Note: Testing for the 'selected' class would be better with a custom renderer
    // or integration test. This is a simplified test.
    const settingsItem = screen.getByText('Settings').closest('li');
    expect(settingsItem?.querySelector('.Mui-selected')).not.toBeNull();
  });

  test('calls onItemClick when navigation item is clicked', () => {
    render(<Navigation items={customItems} onItemClick={mockOnItemClick} />);

    fireEvent.click(screen.getByText('Settings'));

    expect(mockOnItemClick).toHaveBeenCalledWith('settings');
  });
});
