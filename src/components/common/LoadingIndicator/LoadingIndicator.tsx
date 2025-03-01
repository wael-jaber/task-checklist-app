import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

export interface LoadingIndicatorProps {
  message?: string;
  fullScreen?: boolean;
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  message = 'Loading...',
  fullScreen = false,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: fullScreen ? '100vh' : '200px',
        width: '100%',
      }}
    >
      <CircularProgress size={40} />
      <Typography variant="body1" sx={{ mt: 2 }}>
        {message}
      </Typography>
    </Box>
  );
};
