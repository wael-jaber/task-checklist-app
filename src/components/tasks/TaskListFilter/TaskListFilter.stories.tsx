import type { Meta, StoryObj } from '@storybook/react';
import { TaskListFilter } from '../TaskListFilter';

const meta: Meta<typeof TaskListFilter> = {
  title: 'Tasks/TaskListFilter',
  tags: ['autodocs'],

  component: TaskListFilter,
};

export default meta;
type Story = StoryObj<typeof TaskListFilter>;

export const Default: Story = {
  args: {
    onSearchChange: text => {
      console.log(`Search text: ${text}`);
    },
    onStatusChange: status => {
      console.log(`Status filter: ${status}`);
    },
  },
};

export const WithPresetValues: Story = {
  args: {
    searchValue: 'light',
    statusValue: 'blocked',
    onSearchChange: text => {
      console.log(`Search text: ${text}`);
    },
    onStatusChange: status => {
      console.log(`Status filter: ${status}`);
    },
  },
};
