import React from 'react';
import { Alert, AlertTitle, Box } from '@mui/material';

export interface AuthMessageProps {
  type: 'success' | 'error' | 'info';
  title?: string;
  message: string;
}

export const AuthMessage: React.FC<AuthMessageProps> = ({ type, title, message }) => {
  return (
    <Box sx={{ my: 2 }}>
      <Alert severity={type} sx={{ width: '100%' }}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </Box>
  );
};
