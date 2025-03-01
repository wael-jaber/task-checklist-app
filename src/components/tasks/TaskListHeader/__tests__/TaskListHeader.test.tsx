import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { TaskListHeader } from '../TaskListHeader';

describe('TaskListHeader Component', () => {
  const mockOnAddTask = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders title correctly', () => {
    render(<TaskListHeader title="My Tasks" />);

    expect(screen.getByText('My Tasks')).toBeInTheDocument();
  });

  test('renders add button when onAddTask is provided', () => {
    render(<TaskListHeader title="My Tasks" onAddTask={mockOnAddTask} />);

    expect(screen.getByText('Add Task')).toBeInTheDocument();
  });

  test('does not render add button when onAddTask is not provided', () => {
    render(<TaskListHeader title="My Tasks" />);

    expect(screen.queryByText('Add Task')).not.toBeInTheDocument();
  });

  test('renders custom add button label', () => {
    render(
      <TaskListHeader title="My Tasks" onAddTask={mockOnAddTask} addButtonLabel="Create New" />
    );

    expect(screen.getByText('Create New')).toBeInTheDocument();
  });

  test('calls onAddTask when add button is clicked', () => {
    render(<TaskListHeader title="My Tasks" onAddTask={mockOnAddTask} />);

    fireEvent.click(screen.getByText('Add Task'));

    expect(mockOnAddTask).toHaveBeenCalledTimes(1);
  });
});
