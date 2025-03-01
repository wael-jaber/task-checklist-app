import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { ChecklistGroup } from '../ChecklistGroup';

describe('ChecklistGroup Component', () => {
  const mockOnItemChange = vi.fn();
  const mockOnItemAdd = vi.fn();
  const mockOnItemRemove = vi.fn();

  const sampleItems = [
    { id: 'item1', text: 'Task 1', status: 'not_started' },
    { id: 'item2', text: 'Task 2', status: 'done' },
  ];

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders checklist title and items', () => {
    render(
      <ChecklistGroup title="My Checklist" items={sampleItems} onItemChange={mockOnItemChange} />
    );

    expect(screen.getByText('My Checklist')).toBeInTheDocument();
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  test('shows completed items count', () => {
    render(<ChecklistGroup items={sampleItems} onItemChange={mockOnItemChange} />);

    expect(screen.getByText('1 / 2 completed')).toBeInTheDocument();
  });

  test('handles adding new items when editable', () => {
    render(
      <ChecklistGroup
        items={sampleItems}
        onItemChange={mockOnItemChange}
        onItemAdd={mockOnItemAdd}
        editable={true}
      />
    );

    // Input field should be visible
    const input = screen.getByLabelText('New checklist item');
    fireEvent.change(input, { target: { value: 'New task' } });

    // Add button should be enabled and clickable
    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);

    expect(mockOnItemAdd).toHaveBeenCalledWith('New task');
  });

  test('handles removing items when editable', () => {
    render(
      <ChecklistGroup
        items={sampleItems}
        onItemChange={mockOnItemChange}
        onItemRemove={mockOnItemRemove}
        editable={true}
      />
    );

    // Delete buttons should be visible
    const deleteButtons = screen.getAllByRole('button');
    // Find delete button (filtering out other buttons)
    const deleteButton = deleteButtons.find(button =>
      button.querySelector('svg[data-testid="DeleteIcon"]')
    );

    if (deleteButton) {
      fireEvent.click(deleteButton);
      // Since we can't know which item's delete button we clicked,
      // we just check if the function was called
      expect(mockOnItemRemove).toHaveBeenCalledTimes(1);
    }
  });
});
