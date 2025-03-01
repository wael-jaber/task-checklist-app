import React, { useEffect, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useNetworkStatus } from '@hooks/useNetworkStatus';

export const NetworkStatus: React.FC = () => {
  const { online, wasOffline } = useNetworkStatus();
  const [showOffline, setShowOffline] = useState<boolean>(false);
  const [showReconnected, setShowReconnected] = useState<boolean>(false);

  useEffect(() => {
    if (!online) {
      setShowOffline(true);
    } else if (wasOffline) {
      setShowReconnected(true);

      // If we're back online and were previously offline,
      // this would be a good place to trigger data sync
    }
  }, [online, wasOffline]);

  return (
    <>
      <Snackbar
        open={showOffline}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={null} // Don't auto-hide when offline
      >
        <Alert severity="warning" variant="filled" onClose={() => setShowOffline(false)}>
          You are offline. Changes will be saved locally.
        </Alert>
      </Snackbar>

      <Snackbar
        open={showReconnected}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={5000}
        onClose={() => setShowReconnected(false)}
      >
        <Alert severity="success" variant="filled">
          You're back online! Your changes have been synchronized.
        </Alert>
      </Snackbar>
    </>
  );
};
