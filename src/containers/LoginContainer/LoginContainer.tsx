import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { AuthMessage } from '@components/user/AuthMessage';
import { UserLogin } from '@components/user/UserLogin';
import { useUserStore } from '@store/userStore';

export const LoginContainer: React.FC = () => {
  const navigate = useNavigate();
  const { login, isLoading, error } = useUserStore();
  const [message, setMessage] = useState<{
    type: 'success' | 'error' | 'info';
    text: string;
  } | null>(null);

  const handleLogin = (userName: string) => {
    // Clear any previous messages
    setMessage(null);

    try {
      login(userName);

      // Show success message briefly before redirecting
      setMessage({
        type: 'success',
        text: `Welcome, ${userName}! You're being redirected to your dashboard.`,
      });

      // Delay navigation slightly to show the success message
      setTimeout(() => {
        navigate('/');
      }, 1200);
    } catch (err) {
      console.error(err);

      setMessage({
        type: 'error',
        text: 'Login failed. Please try again.',
      });
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {message && (
        <Box
          sx={{
            position: 'absolute',
            top: 20,
            left: 0,
            right: 0,
            mx: 'auto',
            width: 'fit-content',
          }}
        >
          <AuthMessage type={message.type} message={message.text} />
        </Box>
      )}

      <UserLogin onLogin={handleLogin} isLoading={isLoading} error={error || undefined} />
    </Box>
  );
};
