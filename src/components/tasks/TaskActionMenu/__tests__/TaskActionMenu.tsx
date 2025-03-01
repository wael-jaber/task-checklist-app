import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { TaskActionMenu } from '../TaskActionMenu';

describe('TaskActionMenu Component', () => {
  const mockOnEdit = vi.fn();
  const mockOnDelete = vi.fn();
  const mockOnDuplicate = vi.fn();
  const mockOnToggleBlocked = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders menu button', () => {
    render(<TaskActionMenu />);

    expect(screen.getByLabelText('task actions')).toBeInTheDocument();
  });

  test('opens menu when button is clicked', () => {
    render(<TaskActionMenu onEdit={mockOnEdit} onDelete={mockOnDelete} />);

    // Menu should be initially closed
    expect(screen.queryByText('Edit Task')).not.toBeInTheDocument();

    // Click to open menu
    fireEvent.click(screen.getByLabelText('task actions'));

    // Menu should now be open
    expect(screen.getByText('Edit Task')).toBeInTheDocument();
    expect(screen.getByText('Delete Task')).toBeInTheDocument();
  });

  test('calls onEdit when Edit Task is clicked', () => {
    render(<TaskActionMenu onEdit={mockOnEdit} />);

    // Open menu
    fireEvent.click(screen.getByLabelText('task actions'));

    // Click Edit Task
    fireEvent.click(screen.getByText('Edit Task'));

    expect(mockOnEdit).toHaveBeenCalledTimes(1);
  });

  test('calls onDelete when Delete Task is clicked', () => {
    render(<TaskActionMenu onDelete={mockOnDelete} />);

    // Open menu
    fireEvent.click(screen.getByLabelText('task actions'));

    // Click Delete Task
    fireEvent.click(screen.getByText('Delete Task'));

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });

  test('calls onDuplicate when Duplicate Task is clicked', () => {
    render(<TaskActionMenu onDuplicate={mockOnDuplicate} />);

    // Open menu
    fireEvent.click(screen.getByLabelText('task actions'));

    // Click Duplicate Task
    fireEvent.click(screen.getByText('Duplicate Task'));

    expect(mockOnDuplicate).toHaveBeenCalledTimes(1);
  });

  test('calls onToggleBlocked with correct value when blocking/unblocking', () => {
    render(<TaskActionMenu onToggleBlocked={mockOnToggleBlocked} isBlocked={false} />);

    // Open menu
    fireEvent.click(screen.getByLabelText('task actions'));

    // Click to block
    fireEvent.click(screen.getByText('Mark as Blocked'));

    expect(mockOnToggleBlocked).toHaveBeenCalledWith(true);

    mockOnToggleBlocked.mockClear();

    // Test unblocking
    render(<TaskActionMenu onToggleBlocked={mockOnToggleBlocked} isBlocked={true} />);

    // Open menu
    fireEvent.click(screen.getByLabelText('task actions'));

    // Click to unblock
    fireEvent.click(screen.getByText('Mark as Unblocked'));

    expect(mockOnToggleBlocked).toHaveBeenCalledWith(false);
  });

  test('menu button is disabled when disabled prop is true', () => {
    render(<TaskActionMenu disabled={true} />);

    expect(screen.getByLabelText('task actions')).toBeDisabled();
  });
});
