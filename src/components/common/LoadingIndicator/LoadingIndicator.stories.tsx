import type { Meta, StoryObj } from '@storybook/react';
import { LoadingIndicator } from './LoadingIndicator';

const meta: Meta<typeof LoadingIndicator> = {
  title: 'Common/LoadingIndicator',
  tags: ['autodocs'],

  component: LoadingIndicator,
};

export default meta;
type Story = StoryObj<typeof LoadingIndicator>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    message: 'Authenticating...',
  },
};

export const FullScreen: Story = {
  args: {
    fullScreen: true,
    message: 'Loading your profile...',
  },
  parameters: {
    layout: 'fullscreen',
  },
};
