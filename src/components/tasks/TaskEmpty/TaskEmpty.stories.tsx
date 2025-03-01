import type { Meta, StoryObj } from '@storybook/react';
import { TaskEmpty } from './TaskEmpty';

const meta: Meta<typeof TaskEmpty> = {
  title: 'Tasks/TaskEmpty',
  component: TaskEmpty,
  tags: ['autodocs'],

  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof TaskEmpty>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    message: 'No tasks found',
  },
};

export const WithAddButton: Story = {
  args: {
    message: 'No tasks found',
    showAddButton: true,
    onAddTask: () => {
      console.log('Add task clicked');
    },
  },
};

export const CustomButtonLabel: Story = {
  args: {
    message: 'Your task list is empty',
    showAddButton: true,
    addButtonLabel: 'Create Your First Task',
    onAddTask: () => {
      console.log('Add task clicked');
    },
  },
};
