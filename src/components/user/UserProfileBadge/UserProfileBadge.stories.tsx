import type { Meta, StoryObj } from '@storybook/react';
import { UserProfileBadge } from './UserProfileBadge';

const meta: Meta<typeof UserProfileBadge> = {
  title: 'User/UserProfileBadge',
  component: UserProfileBadge,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserProfileBadge>;

export const Default: Story = {
  args: {
    userName: 'John Doe',
    onLogout: () => {
      console.log('User logged out');
    },
  },
};

export const ShortName: Story = {
  args: {
    userName: 'Jo',
    onLogout: () => {
      console.log('User logged out');
    },
  },
};

export const LongName: Story = {
  args: {
    userName: 'John Jacob Jingleheimer Schmidt',
    onLogout: () => {
      console.log('User logged out');
    },
  },
};
