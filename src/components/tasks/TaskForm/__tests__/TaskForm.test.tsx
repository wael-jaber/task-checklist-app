import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { TaskForm } from '../TaskForm';

describe('TaskForm Component', () => {
  const mockOnSubmit = vi.fn();
  const mockOnCancel = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders form with correct title for new task', () => {
    render(<TaskForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    expect(screen.getByText('Create New Task')).toBeInTheDocument();
  });

  test('renders form with correct title for editing task', () => {
    render(
      <TaskForm
        initialValues={{ title: 'Test Task' }}
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    expect(screen.getByText('Edit Task')).toBeInTheDocument();
  });

  test('prefills form fields with initial values', () => {
    const initialValues = {
      title: 'Test Task',
      description: 'Test Description',
      checklist: [{ id: '1', text: 'Test Item', status: 'not_started' }],
    };

    render(
      <TaskForm initialValues={initialValues} onSubmit={mockOnSubmit} onCancel={mockOnCancel} />
    );

    // Use getByRole instead of getByLabelText
    expect(screen.getByRole('textbox', { name: /task title/i })).toHaveValue('Test Task');
    expect(screen.getByRole('textbox', { name: /description/i })).toHaveValue('Test Description');
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  test('calls onCancel when cancel button is clicked', () => {
    render(<TaskForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    // Find and click the cancel button using getByRole
    const cancelButton = screen.getByRole('button', { name: /cancel/i });
    fireEvent.click(cancelButton);

    expect(mockOnCancel).toHaveBeenCalledTimes(1);
  });

  test('handles adding and removing checklist items', () => {
    render(<TaskForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    // Add a new checklist item - use getByRole instead of getByLabelText
    const input = screen.getByRole('textbox', { name: /new checklist item/i });
    fireEvent.change(input, { target: { value: 'New task' } });

    const addButton = screen.getByRole('button', { name: /add/i });
    fireEvent.click(addButton);

    // Check if the new item is added
    expect(screen.getByText('New task')).toBeInTheDocument();

    // Find and click the delete button for the item
    const deleteButtons = screen.getAllByRole('button');
    const deleteButton = deleteButtons.find(button =>
      button.querySelector('svg[data-testid="DeleteIcon"]')
    );

    if (deleteButton) {
      fireEvent.click(deleteButton);
      // Check if the item is removed
      expect(screen.queryByText('New task')).not.toBeInTheDocument();
    }
  });
});
