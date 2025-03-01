import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { TaskEmpty } from '@components/tasks/TaskEmpty';
import { useTaskStore } from '@store/taskStore';
import { useUserStore } from '@store/userStore';

export const DashboardContainer: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useUserStore();
  const { tasks, fetchTasks } = useTaskStore();

  // Fetch tasks from database when component mounts
  useEffect(() => {
    if (currentUser) {
      fetchTasks(currentUser.id);
    }
  }, [currentUser, fetchTasks]);

  // Get user's tasks
  const userTasks = currentUser ? tasks.filter(task => task.userId === currentUser.id) : [];

  const handleAddTask = () => {
    navigate('/tasks/create');
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Welcome, {currentUser?.name}!
        </Typography>
        <Typography variant="body1">
          This is your task management dashboard. You can create, manage, and track your tasks from
          here.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Task Overview
            </Typography>

            {userTasks.length > 0 ? (
              <Box>
                <Typography>You have {userTasks.length} tasks in your list.</Typography>
                <Typography>
                  {userTasks.filter(task => task.isCompleted).length} completed
                </Typography>
                <Typography>{userTasks.filter(task => task.isBlocked).length} blocked</Typography>
                {/* Additional stats could go here */}
              </Box>
            ) : (
              <TaskEmpty
                message="No tasks found. Create your first task to get started."
                showAddButton
                onAddTask={handleAddTask}
              />
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            {userTasks.length > 0 ? (
              <Box>
                <Typography>
                  Your latest task: {userTasks.sort((a, b) => b.createdAt - a.createdAt)[0]?.title}
                </Typography>
                {/* Additional activity info could go here */}
              </Box>
            ) : (
              <Typography>No recent activity to display.</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
