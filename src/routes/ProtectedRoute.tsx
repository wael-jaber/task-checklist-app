import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';
import { SessionExpired } from '@components/user/SessionExpired';
import { useUserStore } from '@store/userStore';

export interface ProtectedRouteProps {
  sessionExpiredReason?: 'expired' | 'required' | 'error';
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ sessionExpiredReason }) => {
  const { currentUser, isLoading } = useUserStore();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!currentUser) {
    return sessionExpiredReason ? (
      <SessionExpired reason={sessionExpiredReason} />
    ) : (
      <Navigate to="/login" replace />
    );
  }

  return <Outlet />;
};
