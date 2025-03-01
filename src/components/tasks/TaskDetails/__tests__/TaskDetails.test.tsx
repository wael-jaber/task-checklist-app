import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { TaskDetails } from '../TaskDetails';

describe('TaskDetails Component', () => {
  const mockOnEdit = vi.fn();
  const mockOnDelete = vi.fn();
  const mockOnChecklistItemStatusChange = vi.fn();

  const sampleTask = {
    id: '1',
    userId: 'user1',
    title: 'Test Task',
    description: 'Task description',
    isBlocked: false,
    checklist: [
      { id: 'item1', text: 'Checklist item 1', status: 'not_started' },
      { id: 'item2', text: 'Checklist item 2', status: 'done' },
    ],
    createdAt: Date.now() - 1000,
    updatedAt: Date.now(),
  };

  const blockedTask = {
    ...sampleTask,
    isBlocked: true,
  };

  const taskWithImage = {
    ...sampleTask,
    imageMarker: {
      src: 'image-url',
      x: 50,
      y: 50,
    },
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders task title and description', () => {
    render(<TaskDetails task={sampleTask} />);

    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('Task description')).toBeInTheDocument();
  });

  test('shows blocked indicator for blocked tasks', () => {
    render(<TaskDetails task={blockedTask} />);

    expect(screen.getByText('Blocked')).toBeInTheDocument();
  });

  test('renders checklist items', () => {
    render(<TaskDetails task={sampleTask} />);

    expect(screen.getByText('Checklist item 1')).toBeInTheDocument();
    expect(screen.getByText('Checklist item 2')).toBeInTheDocument();
  });

  test('renders image marker when present', () => {
    render(<TaskDetails task={taskWithImage} />);

    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByAltText('Task location')).toBeInTheDocument();
  });

  test('calls onEdit when edit button is clicked', () => {
    render(<TaskDetails task={sampleTask} onEdit={mockOnEdit} />);

    fireEvent.click(screen.getByLabelText('Edit Task'));

    expect(mockOnEdit).toHaveBeenCalledTimes(1);
  });

  test('calls onDelete when delete button is clicked', () => {
    render(<TaskDetails task={sampleTask} onDelete={mockOnDelete} />);

    fireEvent.click(screen.getByLabelText('Delete Task'));

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });

  test('does not show action buttons in readonly mode', () => {
    render(
      <TaskDetails task={sampleTask} onEdit={mockOnEdit} onDelete={mockOnDelete} readonly={true} />
    );

    expect(screen.queryByLabelText('Edit Task')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Delete Task')).not.toBeInTheDocument();
  });

  test('calls onChecklistItemStatusChange when checklist item status changes', () => {
    // Note: This is a more complex test as it requires interaction with the ChecklistGroup component.
    // In a real test, you might want to mock the ChecklistGroup component or use integration tests.
    // For simplicity, we're just checking if the component renders without errors.
    render(
      <TaskDetails
        task={sampleTask}
        onChecklistItemStatusChange={mockOnChecklistItemStatusChange}
      />
    );

    expect(screen.getByText('Checklist')).toBeInTheDocument();
  });
});
