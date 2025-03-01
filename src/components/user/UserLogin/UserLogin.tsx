import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Box,
  Typography,
  Container,
  Divider,
  Paper,
} from '@mui/material';
import { Button } from '@components/common/Button';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';

export interface UserLoginProps {
  onLogin: (userName: string) => void;
  isLoading?: boolean;
}

export const UserLogin: React.FC<UserLoginProps> = ({ onLogin, isLoading = false }) => {
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName.trim()) {
      setError('Please enter your name');
      return;
    }

    onLogin(userName.trim());
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 4,
            width: '100%',
            borderRadius: 2,
          }}
        >
          <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold' }}>
            Task Checklist App
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
            Manage tasks with customizable checklists
          </Typography>
        </Paper>

        <Card sx={{ width: '100%', borderRadius: 2 }}>
          <CardHeader
            title="Sign In"
            subheader="Enter your name to continue"
            sx={{
              pb: 1,
              '& .MuiCardHeader-title': {
                fontSize: '1.5rem',
                fontWeight: 'bold',
              },
            }}
          />
          <Divider />
          <CardContent sx={{ pt: 3 }}>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label="Your Name"
                name="userName"
                autoComplete="name"
                autoFocus
                value={userName}
                onChange={e => {
                  setUserName(e.target.value);
                  if (e.target.value.trim()) setError('');
                }}
                error={!!error}
                helperText={error}
                disabled={isLoading}
                InputProps={{
                  startAdornment: <PersonIcon color="action" sx={{ mr: 1 }} />,
                }}
              />
              <Button
                type="submit"
                fullWidth
                icon={<LoginIcon />}
                label="Continue"
                sx={{ mt: 3, mb: 2 }}
                disabled={isLoading || !userName.trim()}
              />
              <Typography variant="body2" color="text.secondary" align="center">
                No account is needed. Just enter your name to get started.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
