// src/stories/TaskCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { TaskCard } from './TaskCard';
import { v4 as uuidv4 } from 'uuid';

const meta: Meta<typeof TaskCard> = {
  title: 'Tasks/TaskCard',
  component: TaskCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof TaskCard>;

// Sample task data
const sampleTask = {
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
};

// Blocked task
const blockedTask = {
  ...sampleTask,
  id: uuidv4(),
  title: 'Blocked Task Example',
  isBlocked: true,
  checklist: [
    ...sampleTask.checklist,
    {
      id: uuidv4(),
      text: 'Electrical connection, general, 3-pin. Electrical',
      status: 'blocked' as const,
      statusText: 'Blocked: Part installation done',
    },
  ],
};

export const Default: Story = {
  args: {
    task: sampleTask,
    onChecklistItemStatusChange: (taskId, itemId, status) => {
      console.log(`Task ${taskId}, Item ${itemId} status changed to ${status}`);
    },
  },
};

export const Blocked: Story = {
  args: {
    task: blockedTask,
    onChecklistItemStatusChange: (taskId, itemId, status) => {
      console.log(`Task ${taskId}, Item ${itemId} status changed to ${status}`);
    },
  },
};
