import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AssignmentIcon from '@mui/icons-material/Assignment';

export interface TaskEmptyProps {
  message?: string;
  showAddButton?: boolean;
  onAddTask?: () => void;
  addButtonLabel?: string;
}

export const TaskEmpty: React.FC<TaskEmptyProps> = ({
  message = 'No task selected',
  showAddButton = false,
  onAddTask,
  addButtonLabel = 'Create New Task',
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 300,
        bgcolor: 'background.default',
        border: '1px dashed',
        borderColor: 'divider',
      }}
    >
      <AssignmentIcon sx={{ fontSize: 64, color: 'text.disabled', mb: 2 }} />

      <Typography variant="h6" color="text.secondary" align="center" gutterBottom>
        {message}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mb: 3, maxWidth: 400 }}
      >
        Select a task from the list or create a new task to get started.
      </Typography>

      {showAddButton && onAddTask && (
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={onAddTask}>
          {addButtonLabel}
        </Button>
      )}
    </Paper>
  );
};
