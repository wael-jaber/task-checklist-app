import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Task } from '@types';

export interface TaskMarkerProps {
  task: Task;
  onClick: () => void;
}

const TaskMarker: React.FC<TaskMarkerProps> = ({ task, onClick }) => {
  // Only render if the task has an image marker
  if (!task.imageMarker) return null;

  return (
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
        zIndex: 1,
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          width: 20,
          height: 20,
          boxShadow: 4,
        },
      }}
      onClick={onClick}
    />
  );
};

interface TaskMapViewProps {
  tasks: Task[];
  onTaskClick: (taskId: string) => void;
  floorPlanImage: string;
}

export const TaskMapView: React.FC<TaskMapViewProps> = ({ tasks, onTaskClick, floorPlanImage }) => {
  // Filter tasks that have image markers
  const tasksWithMarkers = tasks.filter(task => task.imageMarker);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <Paper
        elevation={2}
        sx={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          borderRadius: 2,
        }}
      >
        {tasksWithMarkers.length === 0 ? (
          <Box
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 400,
            }}
          >
            <Typography variant="subtitle1" color="text.secondary">
              No tasks with location markers found.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Add markers to tasks during creation to see them on the map.
            </Typography>
          </Box>
        ) : (
          <Box sx={{ position: 'relative' }}>
            <img
              src={floorPlanImage}
              alt="Floor Plan"
              style={{ width: '100%', display: 'block' }}
            />

            {/* Render task markers */}
            {tasksWithMarkers.map(task => (
              <TaskMarker key={task.id} task={task} onClick={() => onTaskClick(task.id)} />
            ))}
          </Box>
        )}
      </Paper>
    </Box>
  );
};
