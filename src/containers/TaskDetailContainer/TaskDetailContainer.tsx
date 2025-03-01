import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Paper, IconButton, Tooltip } from '@mui/material';
import { TaskDetails } from '@components/tasks/TaskDetails';
import { TaskEmpty } from '@components/tasks/TaskEmpty';
import { TaskActionMenu } from '@components/tasks/TaskActionMenu';
import { useTaskStore } from '@store/taskStore';
import { useUserStore } from '@store/userStore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const TaskDetailContainer: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const navigate = useNavigate();
  const { currentUser } = useUserStore();
  const { tasks, deleteTask, updateChecklistItem, toggleTaskBlocked, createTask } = useTaskStore();

  // Find the task by ID
  const task = tasks.find(t => t.id === taskId);

  const handleEdit = () => {
    navigate(`/tasks/${taskId}/edit${location.search}`);
  };

  const handleDelete = () => {
    if (taskId) {
      deleteTask(taskId);
      navigate(`/tasks${location.search}`);
    }
  };

  const handleDuplicate = async () => {
    if (task && currentUser) {
      try {
        // Create a duplicate task with same details but new IDs
        const input = {
          title: `${task.title} (Copy)`,
          description: task.description,
          checklist: task.checklist.map(item => ({
            text: item.text,
            status: 'not_started' as const,
            statusText: undefined,
          })),
          imageMarker: task.imageMarker,
        };

        // Use store action to create the duplicate and wait for it to complete
        const newTask = await createTask(currentUser.id, input);
        console.log(newTask);

        navigate(`/tasks/${newTask.id}${location.search}`);
      } catch (error) {
        console.error('Failed to duplicate task:', error);
      }
    }
  };

  const handleToggleBlocked = (blocked: boolean) => {
    if (taskId) {
      toggleTaskBlocked(taskId, blocked);
    }
  };

  const handleChecklistItemStatusChange = (itemId: string, status: string, statusText?: string) => {
    if (taskId) {
      updateChecklistItem(taskId, itemId, status, statusText);
    }
  };

  const handleBack = () => {
    navigate(`/tasks${location.search}`);
  };

  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 2,
          backgroundColor: 'background.paper',
        }}
      >
        <Button startIcon={<ArrowBackIcon />} onClick={handleBack} variant="outlined">
          Back to Tasks
        </Button>

        {task && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Quick actions */}
            <Tooltip title="Edit Task">
              <IconButton onClick={handleEdit} sx={{ mr: 1 }}>
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Duplicate Task">
              <IconButton onClick={handleDuplicate} sx={{ mr: 2 }}>
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>

            {/* More actions menu */}
            <TaskActionMenu
              onToggleBlocked={handleToggleBlocked}
              onDelete={handleDelete}
              isBlocked={task.isBlocked}
            />
          </Box>
        )}
      </Paper>

      {task ? (
        <TaskDetails
          task={task}
          onChecklistItemStatusChange={handleChecklistItemStatusChange}
          readonly={false}
        />
      ) : (
        <TaskEmpty
          message="Task not found"
          showAddButton
          onAddTask={() => navigate(`/tasks/create${window.location.search}`)}
        />
      )}
    </Box>
  );
};
