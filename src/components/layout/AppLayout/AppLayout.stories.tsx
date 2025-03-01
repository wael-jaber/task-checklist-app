import type { Meta, StoryObj } from '@storybook/react';
import { AppLayout } from './AppLayout';
import { Box, Typography, Paper } from '@mui/material';

const meta: Meta<typeof AppLayout> = {
  title: 'Layout/AppLayout',
  component: AppLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AppLayout>;

export const LoggedOut: Story = {
  args: {
    children: (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Main Content Area
        </Typography>
        <Paper sx={{ p: 2 }}>
          <Typography>This is the main content of the page.</Typography>
        </Paper>
      </Box>
    ),
  },
};

export const LoggedIn: Story = {
  args: {
    userName: 'John Doe',
    onLogout: () => console.log('User logged out'),
    children: (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Authenticated Content
        </Typography>
        <Paper sx={{ p: 2 }}>
          <Typography>This content is visible to authenticated users.</Typography>
        </Paper>
      </Box>
    ),
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Construction Tasks',
    userName: 'Jane Smith',
    onLogout: () => console.log('User logged out'),
    children: (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Custom Title Demo
        </Typography>
        <Paper sx={{ p: 2 }}>
          <Typography>The app bar shows a custom title.</Typography>
        </Paper>
      </Box>
    ),
  },
};
