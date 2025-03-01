import React, { ReactNode } from 'react';
import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';
import { UserProfileBadge } from '@components/user/UserProfileBadge';

export interface AppLayoutProps {
  children: ReactNode;
  userName?: string;
  onLogout?: () => void;
  title?: string;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  userName,
  onLogout = () => {},
  title = 'Task Checklist App',
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ paddingLeft: '25px' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {userName && <UserProfileBadge userName={userName} onLogout={onLogout} />}
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ py: 4, flexGrow: 1 }}>
        {children}
      </Container>
      <Box component="footer" sx={{ py: 2, textAlign: 'center', bgcolor: 'background.paper' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Task Checklist App
        </Typography>
      </Box>
    </Box>
  );
};
