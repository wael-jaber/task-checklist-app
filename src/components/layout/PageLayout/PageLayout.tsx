import React, { ReactNode } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { AppLayout } from '../AppLayout';
import { Navigation, NavigationItem } from '../Navigation';

export interface PageLayoutProps {
  children: ReactNode;
  userName?: string;
  onLogout?: () => void;
  title?: string;
  navigationItems?: NavigationItem[];
  selectedNavigationItemId?: string;
  onNavigationItemClick: (itemId: string) => void;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  userName,
  onLogout,
  title,
  navigationItems,
  selectedNavigationItemId,
  onNavigationItemClick,
}) => {
  const drawerWidth = 240;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Navigation
        items={navigationItems}
        selectedItemId={selectedNavigationItemId}
        onItemClick={onNavigationItemClick}
        width={drawerWidth}
      />

      <Box component="main" sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
        <AppLayout userName={userName} onLogout={onLogout} title={title}>
          <Box component="div" sx={{ p: 2 }}>
            {children}
          </Box>
        </AppLayout>
      </Box>
    </Box>
  );
};
