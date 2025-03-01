// src/hooks/useNetworkStatus.ts
import { useState, useEffect } from 'react';

interface NetworkStatus {
  online: boolean;
  wasOffline: boolean;
}

export const useNetworkStatus = (): NetworkStatus => {
  const [status, setStatus] = useState<NetworkStatus>({
    online: navigator.onLine,
    wasOffline: false,
  });

  useEffect(() => {
    const handleOnline = (): void => {
      setStatus(prev => ({
        online: true,
        wasOffline: !prev.online, // If we were offline before, flag that we were offline
      }));
    };

    const handleOffline = (): void => {
      setStatus({ online: false, wasOffline: false });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return status;
};
