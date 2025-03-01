import type { Meta, StoryObj } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import { TaskList } from '../TaskList';

const meta: Meta<typeof TaskList> = {
  title: 'Tasks/TaskList',
  component: TaskList,
  tags: ['autodocs'],

  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof TaskList>;

// Sample task data
const sampleTasks = [
  {
    id: uuidv4(),
    userId: 'user123',
    title: 'Light Bulb 150S',
    isBlocked: false,
    checklist: [
      {
        id: uuidv4(),
        text: 'Check item 1',
        status: 'not_started' as const,
      },
      {
        id: uuidv4(),
        text: 'Electrical connection, general, 3-pin',
        status: 'done' as const,
        statusText: 'Done: Part installation done',
      },
      {
        id: uuidv4(),
        text: 'Check item 3',
        status: 'final_installation_done' as const,
      },
    ],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: uuidv4(),
    userId: 'user123',
    title: 'Electrical connection, general, 3-pin',
    isBlocked: true,
    checklist: [
      {
        id: uuidv4(),
        text: 'L3.1 LED surface-mounted wall light',
        status: 'not_started' as const,
      },
      {
        id: uuidv4(),
        text: 'Electrical connection, general, 3-pin',
        status: 'blocked' as const,
        statusText: 'Blocked: Part installation done',
      },
    ],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
];

export const WithTasks: Story = {
  args: {
    tasks: sampleTasks,
    title: 'My Tasks',
    onTaskClick: taskId => {
      console.log(`Task clicked: ${taskId}`);
    },
    onChecklistItemStatusChange: (taskId, itemId, status) => {
      console.log(`Task ${taskId}, Item ${itemId} status changed to ${status}`);
    },
  },
};

export const Empty: Story = {
  args: {
    tasks: [],
    title: 'My Tasks',
    emptyMessage: 'You have no tasks. Create a new task to get started!',
  },
};

export const CustomTitle: Story = {
  args: {
    tasks: sampleTasks,
    title: 'Critical Tasks',
  },
};
