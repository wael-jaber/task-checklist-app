import React from 'react';
import { Box, Paper, Typography, Divider, Chip, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorIcon from '@mui/icons-material/Error';
import { Task } from '@types';
import { ChecklistGroup } from '@components/checklist/ChecklistGroup';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export interface TaskDetailsProps {
  task: Task;
  onEdit?: () => void;
  onDelete?: () => void;
  onChecklistItemStatusChange?: (itemId: string, status: string, statusText?: string) => void;
  readonly?: boolean;
}

export const TaskDetails: React.FC<TaskDetailsProps> = ({
  task,
  onEdit,
  onDelete,
  onChecklistItemStatusChange,
  readonly = false,
}) => {
  const handleChecklistItemChange = (itemId: string, status: string, statusText?: string) => {
    if (onChecklistItemStatusChange) {
      onChecklistItemStatusChange(itemId, status, statusText);
    }
  };

  const formattedDate = new Date(task.updatedAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}
      >
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="h5" component="h2">
              {task.title}
            </Typography>
            {task.isBlocked && (
              <Chip
                icon={<ErrorIcon />}
                label="Blocked"
                color="error"
                size="small"
                sx={{ ml: 2 }}
              />
            )}
            {!task.isBlocked && task.isCompleted && (
              <Chip
                icon={<CheckCircleIcon />}
                label="Completed"
                color="success"
                size="small"
                sx={{ ml: 2 }}
              />
            )}
          </Box>
          <Typography variant="body2" color="text.secondary">
            Last updated: {formattedDate}
          </Typography>
        </Box>

        {!readonly && (
          <Box>
            {onEdit && (
              <Tooltip title="Edit Task">
                <IconButton onClick={onEdit} size="small" sx={{ mr: 1 }}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            )}
            {onDelete && (
              <Tooltip title="Delete Task">
                <IconButton onClick={onDelete} size="small" color="error">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        )}
      </Box>

      {task.description && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
            Description
          </Typography>
          <Typography variant="body1">{task.description}</Typography>
        </Box>
      )}

      <Divider sx={{ my: 3 }} />

      <ChecklistGroup
        title="Checklist"
        items={task.checklist}
        onItemChange={handleChecklistItemChange}
        editable={false}
      />

      {task.imageMarker && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
            Location
          </Typography>
          <Box sx={{ position: 'relative', maxWidth: '100%', mt: 1 }}>
            <img
              src={task.imageMarker.src}
              alt="Task location"
              style={{ width: '100%', borderRadius: 8 }}
            />
            <Box
              sx={{
                position: 'absolute',
                left: `${task.imageMarker.x}%`,
                top: `${task.imageMarker.y}%`,
                width: 16,
                height: 16,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                border: '2px solid white',
                transform: 'translate(-50%, -50%)',
                boxShadow: 2,
              }}
            />
          </Box>
        </Box>
      )}
    </Paper>
  );
};
