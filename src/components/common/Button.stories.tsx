// src/stories/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import AddIcon from '@mui/icons-material/Add';

// Meta information for the component
const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Basic primary button
export const Primary: Story = {
  args: {
    label: 'Click Me',
    color: 'primary',
  },
};

// Button with icon
export const WithIcon: Story = {
  args: {
    label: 'Add Item',
    icon: <AddIcon />,
    color: 'primary',
  },
};

// Full width button for mobile views
export const FullWidth: Story = {
  args: {
    label: 'Submit',
    fullWidth: true,
  },
};

// Secondary outlined button for less important actions
export const SecondaryOutlined: Story = {
  args: {
    label: 'Cancel',
    variant: 'outlined',
    color: 'secondary',
  },
};
