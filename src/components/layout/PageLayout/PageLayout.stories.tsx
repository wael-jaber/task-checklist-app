import type { Meta, StoryObj } from '@storybook/react';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsIcon from '@mui/icons-material/Settings';
import { PageLayout } from './PageLayout';
import { Box, Typography, Paper } from '@mui/material';

const meta: Meta<typeof PageLayout> = {
  title: 'Layout/PageLayout',
  component: PageLayout,
  tags: ['autodocs'],

  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof PageLayout>;

export const Default: Story = {
  args: {
    userName: 'John Doe',
    title: 'Dashboard',
    selectedNavigationItemId: 'home',
    onNavigationItemClick: itemId => {
      console.log(`Navigation to: ${itemId}`);
    },
    onLogout: () => {
      console.log('Logout clicked');
    },
    children: (
      <Box>
        <Typography variant="h4" gutterBottom>
          Main Content
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Typography>This is the main content area of the page.</Typography>
        </Paper>
      </Box>
    ),
  },
};

export const CustomNavigation: Story = {
  args: {
    userName: 'Jane Smith',
    title: 'Projects',
    selectedNavigationItemId: 'projects',
    navigationItems: [
      { id: 'dashboard', label: 'Dashboard', icon: <FolderIcon /> },
      { id: 'projects', label: 'Projects', icon: <FolderIcon /> },
      { id: 'settings', label: 'Settings', icon: <SettingsIcon />, divider: true },
    ],
    onNavigationItemClick: itemId => {
      console.log(`Navigation to: ${itemId}`);
    },
    onLogout: () => {
      console.log('Logout clicked');
    },
    children: (
      <Box>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Typography>Custom navigation items with Projects selected.</Typography>
        </Paper>
      </Box>
    ),
  },
};
