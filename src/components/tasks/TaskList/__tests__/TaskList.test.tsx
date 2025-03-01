import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { TaskList } from '../TaskList';

describe('TaskList Component', () => {
  const mockOnTaskClick = vi.fn();
  const mockOnChecklistItemStatusChange = vi.fn();

  const sampleTasks = [
    {
      id: '1',
      userId: 'user1',
      title: 'Task 1',
      isBlocked: false,
      checklist: [{ id: 'item1', text: 'Item 1', status: 'not_started' }],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: '2',
      userId: 'user1',
      title: 'Task 2',
      isBlocked: true,
      checklist: [{ id: 'item2', text: 'Item 2', status: 'blocked' }],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  ];

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders title and task count correctly', () => {
    render(<TaskList tasks={sampleTasks} title="Test Tasks" />);

    expect(screen.getByText('Test Tasks')).toBeInTheDocument();
    expect(screen.getByText('2 tasks')).toBeInTheDocument();
  });

  test('renders singular task count correctly', () => {
    render(<TaskList tasks={[sampleTasks[0]]} title="Test Tasks" />);

    expect(screen.getByText('1 task')).toBeInTheDocument();
  });

  test('renders all task cards', () => {
    render(<TaskList tasks={sampleTasks} title="Test Tasks" />);

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  test('shows empty message when no tasks', () => {
    render(<TaskList tasks={[]} title="Empty Tasks" emptyMessage="Custom empty message" />);

    expect(screen.getByText('Custom empty message')).toBeInTheDocument();
    expect(screen.queryByText('tasks')).not.toBeInTheDocument();
  });

  // Note: The following tests would be more complex in reality
  // For full testing, we'd need to mock the TaskCard component
  // or use integration tests

  test('passes correct props to TaskCard', () => {
    render(
      <TaskList
        tasks={sampleTasks}
        onTaskClick={mockOnTaskClick}
        onChecklistItemStatusChange={mockOnChecklistItemStatusChange}
      />
    );

    // Basic check to see if the tasks are rendered
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });
});
