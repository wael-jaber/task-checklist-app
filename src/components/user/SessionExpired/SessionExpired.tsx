import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';
import { AuthMessage } from '../AuthMessage';
import { useNavigate } from 'react-router-dom';

export interface SessionExpiredProps {
  reason?: 'expired' | 'required' | 'error';
}

export const SessionExpired: React.FC<SessionExpiredProps> = ({ reason = 'expired' }) => {
  const navigate = useNavigate();

  const getMessage = () => {
    switch (reason) {
      case 'expired':
        return {
          title: 'Session Expired',
          message: 'Your session has expired. Please log in again to continue.',
        };
      case 'required':
        return {
          title: 'Authentication Required',
          message: 'You need to be logged in to access this page.',
        };
      case 'error':
        return {
          title: 'Authentication Error',
          message: 'There was a problem with your authentication. Please log in again.',
        };
      default:
        return {
          title: 'Session Error',
          message: 'There was a problem with your session. Please log in again.',
        };
    }
  };

  const { title, message } = getMessage();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        p: 3,
      }}
    >
      <AuthMessage type="error" title={title} message={message} />

      <Paper
        elevation={3}
        sx={{
          mt: 4,
          p: 4,
          width: '100%',
          maxWidth: 'sm',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Please log in again
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/login')}
          sx={{ mt: 2 }}
        >
          Go to Login
        </Button>
      </Paper>
    </Box>
  );
};
