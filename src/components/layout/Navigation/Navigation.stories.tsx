import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsIcon from '@mui/icons-material/Settings';
import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Layout/Navigation',
  component: Navigation,
  tags: ['autodocs'],

  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    selectedItemId: 'home',
    onItemClick: itemId => {
      console.log(`Clicked on item: ${itemId}`);
    },
  },
  render: args => (
    <Box sx={{ height: '100vh', display: 'flex' }}>
      <Navigation {...args} />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <h1>Content Area</h1>
        <p>Navigation is on the left</p>
      </Box>
    </Box>
  ),
};

export const CustomItems: Story = {
  args: {
    selectedItemId: 'projects',
    items: [
      { id: 'home', label: 'Dashboard', icon: <FolderIcon /> },
      { id: 'projects', label: 'Projects', icon: <FolderIcon /> },
      { id: 'settings', label: 'Settings', icon: <SettingsIcon />, divider: true },
    ],
    onItemClick: itemId => {
      console.log(`Clicked on item: ${itemId}`);
    },
  },
  render: args => (
    <Box sx={{ height: '100vh', display: 'flex' }}>
      <Navigation {...args} />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <h1>Content Area</h1>
        <p>Custom navigation items</p>
      </Box>
    </Box>
  ),
};
