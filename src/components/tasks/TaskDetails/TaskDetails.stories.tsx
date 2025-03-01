import type { Meta, StoryObj } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import { TaskDetails } from './TaskDetails';

const meta: Meta<typeof TaskDetails> = {
  title: 'Tasks/TaskDetails',
  component: TaskDetails,
  tags: ['autodocs'],

  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof TaskDetails>;

// Sample task data
const sampleTask = {
  id: uuidv4(),
  userId: 'user123',
  title: 'Light Bulb 150S Installation',
  description:
    'Replace the existing light bulb with an energy-efficient LED model. Ensure proper wiring connections and test the fixture after installation.',
  isBlocked: false,
  checklist: [
    {
      id: uuidv4(),
      text: 'Turn off power at circuit breaker',
      status: 'done' as const,
    },
    {
      id: uuidv4(),
      text: 'Remove old bulb and fixture',
      status: 'done' as const,
    },
    {
      id: uuidv4(),
      text: 'Electrical connection, general, 3-pin',
      status: 'in_progress' as const,
      statusText: 'Waiting for parts',
    },
    {
      id: uuidv4(),
      text: 'Install new fixture',
      status: 'not_started' as const,
    },
    {
      id: uuidv4(),
      text: 'Test light functionality',
      status: 'not_started' as const,
    },
  ],
  createdAt: Date.now() - 86400000, // 1 day ago
  updatedAt: Date.now() - 3600000, // 1 hour ago
};

const blockedTask = {
  ...sampleTask,
  id: uuidv4(),
  title: 'Wall Light Installation',
  isBlocked: true,
  checklist: [
    ...sampleTask.checklist.slice(0, 2),
    {
      id: uuidv4(),
      text: 'Electrical connection, general, 3-pin',
      status: 'blocked' as const,
      statusText: 'Missing parts, waiting for delivery',
    },
    ...sampleTask.checklist.slice(3),
  ],
};

const taskWithImage = {
  ...sampleTask,
  id: uuidv4(),
  imageMarker: {
    src: 'https://via.placeholder.com/800x600/eee/999?text=Floor+Plan',
    x: 35,
    y: 45,
  },
};

export const Default: Story = {
  args: {
    task: sampleTask,
    onEdit: () => {
      console.log('Edit task');
    },
    onDelete: () => {
      console.log('Delete task');
    },
    onChecklistItemStatusChange: (itemId, status) => {
      console.log(`Item ${itemId} status changed to ${status}`);
    },
  },
};

export const BlockedTask: Story = {
  args: {
    task: blockedTask,
    onEdit: () => {
      console.log('Edit blocked task');
    },
    onDelete: () => {
      console.log('Delete blocked task');
    },
    onChecklistItemStatusChange: (itemId, status) => {
      console.log(`Item ${itemId} status changed to ${status}`);
    },
  },
};

export const WithImageMarker: Story = {
  args: {
    task: taskWithImage,
    onEdit: () => {
      console.log('Edit task with image');
    },
    onDelete: () => {
      console.log('Delete task with image');
    },
    onChecklistItemStatusChange: (itemId, status) => {
      console.log(`Item ${itemId} status changed to ${status}`);
    },
  },
};

export const ReadOnly: Story = {
  args: {
    task: sampleTask,
    readonly: true,
  },
};
