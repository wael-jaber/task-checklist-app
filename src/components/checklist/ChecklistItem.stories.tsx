// src/stories/ChecklistItem.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import ChecklistItem from './ChecklistItem';

const meta: Meta<typeof ChecklistItem> = {
  title: 'Checklist/ChecklistItem',
  component: ChecklistItem,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ChecklistItem>;

export const NotStarted: Story = {
  args: {
    item: {
      id: '1',
      text: 'Check item 1',
      status: 'not_started',
    },
    onStatusChange: (id, status) => {
      console.log(`Item ${id} status changed to ${status}`);
    },
  },
};

export const InProgress: Story = {
  args: {
    item: {
      id: '2',
      text: 'Electrical connection, general, 3-pin',
      status: 'in_progress',
      statusText: 'Installation in progress',
    },
    onStatusChange: (id, status) => {
      console.log(`Item ${id} status changed to ${status}`);
    },
  },
};

export const Blocked: Story = {
  args: {
    item: {
      id: '3',
      text: 'Electrical connection, general, 3-pin. Electrical',
      status: 'blocked',
      statusText: 'Blocked: Part installation done',
    },
    onStatusChange: (id, status) => {
      console.log(`Item ${id} status changed to ${status}`);
    },
  },
};

export const Done: Story = {
  args: {
    item: {
      id: '4',
      text: 'Electrical connection, general, 3-pin',
      status: 'done',
      statusText: 'Done: Part installation done',
    },
    onStatusChange: (id, status) => {
      console.log(`Item ${id} status changed to ${status}`);
    },
  },
};
