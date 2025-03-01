import React from 'react';
import { Box, Typography, Divider, Alert } from '@mui/material';
import { TaskCard } from '../TaskCard';
import { Task } from '@types';

export interface TaskListProps {
  tasks: Task[];
  title?: string;
  emptyMessage?: string;
  onTaskClick?: (taskId: string) => void;
  onChecklistItemStatusChange?: (taskId: string, itemId: string, status: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  title = 'Tasks',
  emptyMessage = 'No tasks found',
  onTaskClick,
  onChecklistItemStatusChange,
}) => {
  // Handle checklist item status change
  const handleChecklistItemStatusChange = (taskId: string, itemId: string, status: string) => {
    if (onChecklistItemStatusChange) {
      onChecklistItemStatusChange(taskId, itemId, status);
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        {tasks.length > 0 && (
          <Typography variant="body2" color="text.secondary">
            {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
          </Typography>
        )}
      </Box>

      <Divider sx={{ mb: 3 }} />

      {tasks.length === 0 ? (
        <Alert severity="info">{emptyMessage}</Alert>
      ) : (
        <Box>
          {tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onChecklistItemStatusChange={handleChecklistItemStatusChange}
              onClick={onTaskClick ? () => onTaskClick(task.id) : undefined}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
