import React, { useEffect } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import AppRoutes from './routes';
import { getDatabase } from './db';
import { NetworkStatus } from '@components/common/NetworkStatus';

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App: React.FC = () => {
  // Initialize database when app starts
  useEffect(() => {
    const initDb = async (): Promise<void> => {
      try {
        await getDatabase();
      } catch (error) {
        console.error(
          'Failed to initialize database:',
          error instanceof Error ? error.message : 'Unknown error'
        );
      }
    };

    initDb();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: '100vw',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <AppRoutes />
        <NetworkStatus />
      </Box>
    </ThemeProvider>
  );
};

export default App;
