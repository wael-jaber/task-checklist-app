// src/components/__tests__/ChecklistItem.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { ChecklistItem } from '../ChecklistItem';

describe('ChecklistItem Component', () => {
  const mockOnStatusChange = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders item text correctly', () => {
    render(
      <ChecklistItem
        item={{ id: '1', text: 'Sample task', status: 'not_started' }}
        onStatusChange={mockOnStatusChange}
      />
    );

    expect(screen.getByText('Sample task')).toBeInTheDocument();
  });

  test('shows status text when provided', () => {
    render(
      <ChecklistItem
        item={{
          id: '1',
          text: 'Sample task',
          status: 'blocked',
          statusText: 'Waiting for parts',
        }}
        onStatusChange={mockOnStatusChange}
      />
    );

    expect(screen.getByText('Waiting for parts')).toBeInTheDocument();
  });

  test('checkbox is checked when status is done', () => {
    render(
      <ChecklistItem
        item={{ id: '1', text: 'Sample task', status: 'done' }}
        onStatusChange={mockOnStatusChange}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  test('calls onStatusChange when checkbox is clicked', () => {
    render(
      <ChecklistItem
        item={{ id: '1', text: 'Sample task', status: 'not_started' }}
        onStatusChange={mockOnStatusChange}
      />
    );

    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockOnStatusChange).toHaveBeenCalledWith('1', 'done');
  });
});
