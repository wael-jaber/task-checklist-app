import type { Meta, StoryObj } from '@storybook/react';
import { UserLogin } from './UserLogin';

const meta: Meta<typeof UserLogin> = {
  title: 'User/UserLogin',
  component: UserLogin,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof UserLogin>;

export const Default: Story = {
  args: {
    onLogin: name => {
      console.log(`Login attempt with name: ${name}`);
    },
  },
};

export const Loading: Story = {
  args: {
    onLogin: name => {
      console.log(`Login attempt with name: ${name}`);
    },
    isLoading: true,
  },
};
