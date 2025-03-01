import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { TaskEmpty } from '../TaskEmpty';

describe('TaskEmpty Component', () => {
  const mockOnAddTask = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders default message', () => {
    render(<TaskEmpty />);

    expect(screen.getByText('No task selected')).toBeInTheDocument();
  });

  test('renders custom message', () => {
    render(<TaskEmpty message="Custom empty message" />);

    expect(screen.getByText('Custom empty message')).toBeInTheDocument();
  });

  test('renders add button when showAddButton is true', () => {
    render(<TaskEmpty showAddButton={true} onAddTask={mockOnAddTask} />);

    expect(screen.getByText('Create New Task')).toBeInTheDocument();
  });

  test('does not render add button when showAddButton is false', () => {
    render(<TaskEmpty showAddButton={false} onAddTask={mockOnAddTask} />);

    expect(screen.queryByText('Create New Task')).not.toBeInTheDocument();
  });

  test('renders custom button label', () => {
    render(
      <TaskEmpty showAddButton={true} onAddTask={mockOnAddTask} addButtonLabel="Custom Button" />
    );

    expect(screen.getByText('Custom Button')).toBeInTheDocument();
  });

  test('calls onAddTask when add button is clicked', () => {
    render(<TaskEmpty showAddButton={true} onAddTask={mockOnAddTask} />);

    fireEvent.click(screen.getByText('Create New Task'));

    expect(mockOnAddTask).toHaveBeenCalledTimes(1);
  });
});
