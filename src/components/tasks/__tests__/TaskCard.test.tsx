import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { TaskCard } from '../TaskCard';

describe('TaskCard Component', () => {
  const mockOnChecklistItemStatusChange = vi.fn();
  const mockOnClick = vi.fn();

  const sampleTask = {
    id: '123',
    userId: 'user1',
    title: 'Test Task',
    isBlocked: false,
    checklist: [
      { id: 'item1', text: 'Item 1', status: 'not_started' },
      { id: 'item2', text: 'Item 2', status: 'done' },
    ],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders task title', () => {
    render(
      <TaskCard task={sampleTask} onChecklistItemStatusChange={mockOnChecklistItemStatusChange} />
    );

    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  test('shows blocked status when task is blocked', () => {
    const blockedTask = { ...sampleTask, isBlocked: true };

    render(
      <TaskCard task={blockedTask} onChecklistItemStatusChange={mockOnChecklistItemStatusChange} />
    );

    expect(screen.getByText('Ticket progress is blocked')).toBeInTheDocument();
  });

  test('expands checklist when expand button is clicked', () => {
    render(
      <TaskCard task={sampleTask} onChecklistItemStatusChange={mockOnChecklistItemStatusChange} />
    );

    // Checklist items should not be visible initially
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();

    // Click on expand button
    fireEvent.click(screen.getByLabelText('show more'));

    // Checklist items should now be visible
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  test('calls onClick when card is clicked', () => {
    render(
      <TaskCard
        task={sampleTask}
        onChecklistItemStatusChange={mockOnChecklistItemStatusChange}
        onClick={mockOnClick}
      />
    );

    // Find the card element and click it
    const cardElement = screen.getByText('Test Task').closest('.MuiCard-root');
    if (cardElement) fireEvent.click(cardElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
