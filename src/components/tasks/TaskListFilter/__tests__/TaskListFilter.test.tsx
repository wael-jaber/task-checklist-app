import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { TaskListFilter } from '../TaskListFilter';

describe('TaskListFilter Component', () => {
  const mockOnSearchChange = vi.fn();
  const mockOnStatusChange = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders search field and status filter', () => {
    render(
      <TaskListFilter onSearchChange={mockOnSearchChange} onStatusChange={mockOnStatusChange} />
    );

    expect(screen.getByPlaceholderText('Search tasks...')).toBeInTheDocument();
    expect(screen.getByLabelText('Status')).toBeInTheDocument();
  });

  test('initializes with provided values', () => {
    render(
      <TaskListFilter
        onSearchChange={mockOnSearchChange}
        onStatusChange={mockOnStatusChange}
        searchValue="test search"
        statusValue="blocked"
      />
    );

    expect(screen.getByPlaceholderText('Search tasks...')).toHaveValue('test search');
    expect(screen.getByRole('combobox')).toHaveTextContent('Blocked');
  });

  test('calls onSearchChange when search input changes', () => {
    render(
      <TaskListFilter onSearchChange={mockOnSearchChange} onStatusChange={mockOnStatusChange} />
    );

    const searchInput = screen.getByPlaceholderText('Search tasks...');
    fireEvent.change(searchInput, { target: { value: 'new search' } });

    expect(mockOnSearchChange).toHaveBeenCalledWith('new search');
  });

  test('calls onStatusChange when status changes', () => {
    render(
      <TaskListFilter onSearchChange={mockOnSearchChange} onStatusChange={mockOnStatusChange} />
    );

    // Open the select dropdown
    const statusSelect = screen.getByLabelText('Status');
    fireEvent.mouseDown(statusSelect);

    // Click on an option
    const option = screen.getByText('Blocked');
    fireEvent.click(option);

    expect(mockOnStatusChange).toHaveBeenCalledWith('blocked');
  });
});
