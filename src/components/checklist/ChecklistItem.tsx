import React from 'react';
import { Box, Typography, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChecklistItem as ChecklistItemType } from '../../types';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ErrorIcon from '@mui/icons-material/Error';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DoneAllIcon from '@mui/icons-material/DoneAll';

interface ChecklistItemProps {
  item: ChecklistItemType;
  onStatusChange: (id: string, status: ChecklistItemType['status']) => void;
}

const ItemContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 0),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StatusIndicator = styled(Box)<{ status: ChecklistItemType['status'] }>(({
  theme,
  status,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'blocked':
        return theme.palette.error.main;
      case 'done':
        return theme.palette.success.main;
      case 'final_installation_done':
        return theme.palette.info.main;
      case 'in_progress':
        return theme.palette.warning.main;
      default:
        return theme.palette.text.disabled;
    }
  };

  return {
    display: 'flex',
    alignItems: 'center',
    color: getStatusColor(),
    marginRight: theme.spacing(1),
  };
});

const ChecklistItem: React.FC<ChecklistItemProps> = ({ item, onStatusChange }) => {
  const handleCheckboxChange = () => {
    const newStatus = item.status === 'done' ? 'not_started' : 'done';
    onStatusChange(item.id, newStatus);
  };

  const getStatusIcon = () => {
    switch (item.status) {
      case 'blocked':
        return <ErrorIcon color="error" />;
      case 'done':
        return <CheckCircleIcon color="success" />;
      case 'final_installation_done':
        return <DoneAllIcon color="info" />;
      case 'in_progress':
        return <HourglassEmptyIcon color="warning" />;
      default:
        return <RadioButtonUncheckedIcon color="disabled" />;
    }
  };

  return (
    <ItemContainer>
      <Checkbox
        checked={item.status === 'done' || item.status === 'final_installation_done'}
        onChange={handleCheckboxChange}
        disabled={item.status === 'blocked'}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="body1">{item.text}</Typography>
        {item.statusText && (
          <Typography variant="body2" color="text.secondary">
            {item.statusText}
          </Typography>
        )}
      </Box>
      <StatusIndicator status={item.status}>{getStatusIcon()}</StatusIndicator>
    </ItemContainer>
  );
};

export default ChecklistItem;
