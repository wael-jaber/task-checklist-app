import React, { useState } from 'react';
import {
  Box,
  Menu,
  MenuItem,
  IconButton,
  TextField,
  Button,
  Typography,
  ListItemIcon,
} from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { ChecklistItemStatus } from '@types';

export interface StatusOption {
  value: ChecklistItemStatus;
  label: string;
  icon: React.ReactNode;
  showTextInput?: boolean;
}

export interface ChecklistItemStatusSelectorProps {
  status: ChecklistItemStatus;
  statusText?: string;
  onStatusChange: (status: ChecklistItemStatus, statusText?: string) => void;
}

export const ChecklistItemStatusSelector: React.FC<ChecklistItemStatusSelectorProps> = ({
  status,
  statusText,
  onStatusChange,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [newStatus, setNewStatus] = useState<ChecklistItemStatus>(status);
  const [newStatusText, setNewStatusText] = useState(statusText || '');
  const [showTextInput, setShowTextInput] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setNewStatus(status);
    setNewStatusText(statusText || '');
    setShowTextInput(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatusSelect = (option: StatusOption) => {
    setNewStatus(option.value);
    if (option.showTextInput) {
      setShowTextInput(true);
    } else {
      handleStatusChange(option.value);
    }
  };

  const handleStatusChange = (newStatus: ChecklistItemStatus, text?: string) => {
    onStatusChange(newStatus, text);
    handleClose();
  };

  const handleTextSubmit = () => {
    handleStatusChange(newStatus, newStatusText);
  };

  const statusOptions: StatusOption[] = [
    {
      value: 'not_started',
      label: 'Not Started',
      icon: <RadioButtonUncheckedIcon color="disabled" />,
    },
    {
      value: 'in_progress',
      label: 'In Progress',
      icon: <HourglassEmptyIcon color="warning" />,
      showTextInput: true,
    },
    {
      value: 'blocked',
      label: 'Blocked',
      icon: <ErrorIcon color="error" />,
      showTextInput: true,
    },
    {
      value: 'done',
      label: 'Done',
      icon: <CheckCircleIcon color="success" />,
      showTextInput: true,
    },
    {
      value: 'final_installation_done',
      label: 'Final Installation Done',
      icon: <DoneAllIcon color="info" />,
    },
  ];

  const getStatusIcon = () => {
    const option = statusOptions.find(opt => opt.value === status);
    return option ? option.icon : statusOptions[0].icon;
  };

  const getStatusLabel = () => {
    const option = statusOptions.find(opt => opt.value === status);
    return option ? option.label : 'Not Started';
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-label="change status"
        aria-controls="status-menu"
        aria-haspopup="true"
      >
        {getStatusIcon()}
      </IconButton>

      <Menu
        id="status-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {showTextInput ? (
          <Box sx={{ p: 2, width: 300 }}>
            <Typography variant="subtitle2" gutterBottom>
              Add details for {getStatusLabel()}
            </Typography>
            <TextField
              fullWidth
              size="small"
              label="Status details"
              value={newStatusText}
              onChange={e => setNewStatusText(e.target.value)}
              variant="outlined"
              sx={{ mb: 2 }}
              autoFocus
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
              <Button size="small" onClick={() => setShowTextInput(false)}>
                Back
              </Button>
              <Button size="small" variant="contained" onClick={handleTextSubmit}>
                Save
              </Button>
            </Box>
          </Box>
        ) : (
          statusOptions.map(option => (
            <MenuItem
              key={option.value}
              onClick={() => handleStatusSelect(option)}
              selected={status === option.value}
            >
              <ListItemIcon>{option.icon}</ListItemIcon>
              {option.label}
            </MenuItem>
          ))
        )}
      </Menu>
    </>
  );
};
