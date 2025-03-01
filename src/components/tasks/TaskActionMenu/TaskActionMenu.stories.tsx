import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import { TaskActionMenu } from './TaskActionMenu';

const meta: Meta<typeof TaskActionMenu> = {
  title: 'Tasks/TaskActionMenu',
  component: TaskActionMenu,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <Box sx={{ p: 2, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TaskActionMenu>;

export const AllActions: Story = {
  args: {
    onEdit: () => {
      console.log('Edit task');
    },
    onDelete: () => {
      console.log('Delete task');
    },
    onDuplicate: () => {
      console.log('Duplicate task');
    },
    onToggleBlocked: blocked => {
      console.log(`Set blocked: ${blocked}`);
    },
    isBlocked: false,
  },
};

export const BlockedTask: Story = {
  args: {
    onEdit: () => {
      console.log('Edit task');
    },
    onDelete: () => {
      console.log('Delete task');
    },
    onToggleBlocked: blocked => {
      console.log(`Set blocked: ${blocked}`);
    },
    isBlocked: true,
  },
};

export const LimitedActions: Story = {
  args: {
    onEdit: () => {
      console.log('Edit task');
    },
    onDelete: () => {
      console.log('Delete task');
    },
  },
};

export const Disabled: Story = {
  args: {
    onEdit: () => {
      console.log('Edit task');
    },
    onDelete: () => {
      console.log('Delete task');
    },
    disabled: true,
  },
};
