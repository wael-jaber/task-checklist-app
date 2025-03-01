import type { Meta, StoryObj } from '@storybook/react';
import { AuthMessage } from './AuthMessage';

const meta: Meta<typeof AuthMessage> = {
  title: 'User/AuthMessage',
  tags: ['autodocs'],

  component: AuthMessage,
};

export default meta;
type Story = StoryObj<typeof AuthMessage>;

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Login Successful',
    message: 'Welcome back! You have been successfully logged in.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Authentication Failed',
    message: "We couldn't find an account with that name. Please try again.",
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    message: 'Enter your name to access your tasks and checklists.',
  },
};
