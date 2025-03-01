import type { Meta, StoryObj } from '@storybook/react';
import { TaskListHeader } from '../TaskListHeader';

const meta: Meta<typeof TaskListHeader> = {
  title: 'Tasks/TaskListHeader',
  tags: ['autodocs'],

  component: TaskListHeader,
};

export default meta;
type Story = StoryObj<typeof TaskListHeader>;

export const Default: Story = {
  args: {
    title: 'My Tasks',

    onAddTask: () => {
      console.log('Add task button clicked');
    },
  },
};

export const WithCustomButtonLabel: Story = {
  args: {
    title: 'Project Tasks',
    addButtonLabel: 'Create New Task',
    onAddTask: () => {
      console.log('Add task button clicked');
    },
  },
};

export const WithoutAddButton: Story = {
  args: {
    title: 'Completed Tasks',
  },
};
