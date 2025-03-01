import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export interface TaskListHeaderProps {
  title: string;
  onAddTask?: () => void;
  addButtonLabel?: string;
}

export const TaskListHeader: React.FC<TaskListHeaderProps> = ({
  title,
  onAddTask,
  addButtonLabel = 'Add Task',
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 4,
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 2, sm: 0 },
      }}
    >
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
      {onAddTask && (
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={onAddTask}>
          {addButtonLabel}
        </Button>
      )}
    </Box>
  );
};
