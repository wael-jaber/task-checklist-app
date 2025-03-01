import type { Meta, StoryObj } from '@storybook/react';
import { ImageMarker } from './ImageMarker';

const meta: Meta<typeof ImageMarker> = {
  title: 'Tasks/ImageMarker',
  component: ImageMarker,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ImageMarker>;

export const NoMarker: Story = {
  args: {
    src: 'https://placehold.co/600x400/png',
    onChange: marker => {
      console.log('Marker position:', marker);
    },
  },
};

export const WithInitialMarker: Story = {
  args: {
    src: 'https://placehold.co/600x400/png',
    initialMarker: { x: 50, y: 50 },
    onChange: marker => {
      console.log('Marker position:', marker);
    },
  },
};

export const ReadOnly: Story = {
  args: {
    src: 'https://placehold.co/600x400/png',
    initialMarker: { x: 30, y: 70 },
    disabled: true,
  },
};
