import React, { useState } from 'react';
import { Box, Typography, IconButton, Menu, MenuItem, Avatar } from '@mui/material';

export interface UserProfileBadgeProps {
  userName: string;
  onLogout: () => void;
}

export const UserProfileBadge: React.FC<UserProfileBadgeProps> = ({ userName, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    onLogout();
    handleClose();
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="body1" sx={{ mr: 2 }}>
        {userName}
      </Typography>
      <IconButton
        size="large"
        aria-label="account menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main' }}>
          {userName.charAt(0).toUpperCase()}
        </Avatar>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};
