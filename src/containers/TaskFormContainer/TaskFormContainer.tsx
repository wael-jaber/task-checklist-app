import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { TaskForm } from '@components/tasks/TaskForm';
import { useTaskStore } from '@store/taskStore';
import { useUserStore } from '@store/userStore';
import { ChecklistItem, CreateTaskInput } from '@types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { v4 as uuidv4 } from 'uuid';
import floorPlan from '../../assets/floor-plan.png';

export const TaskFormContainer: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const navigate = useNavigate();
  const { currentUser } = useUserStore();
  const { tasks, createTask, updateTask } = useTaskStore();

  // Find task if in edit mode
  const task = taskId ? tasks.find(t => t.id === taskId) : undefined;

  const handleSubmit = async (values: CreateTaskInput) => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    if (task && taskId) {
      // Update existing task
      // Convert checklist items to include IDs if they don't have them
      const updatedChecklist: ChecklistItem[] = values.checklist.map(item => {
        // We need to cast here because 'id' doesn't exist on the input type
        const existingItem = task.checklist.find(existing => existing.text === item.text);

        return {
          id: existingItem?.id || uuidv4(), // Use existing ID or create a new one
          text: item.text,
          status: item.status,
          statusText: item.statusText,
        };
      });

      updateTask(taskId, {
        title: values.title,
        description: values.description,
        checklist: updatedChecklist,
        imageMarker: values.imageMarker,
      });
      navigate(`/tasks/${taskId}${window.location.search}`);
    } else {
      // Create new task
      const newTask = await createTask(currentUser.id, values);
      navigate(`/tasks/${newTask.id}${window.location.search}`);
    }
  };

  const handleCancel = () => {
    if (taskId) {
      navigate(`/tasks/${taskId}${window.location.search}`);
    } else {
      navigate(`/tasks${window.location.search}`);
    }
  };

  return (
    <Box>
      <Button startIcon={<ArrowBackIcon />} onClick={handleCancel} sx={{ mb: 3 }}>
        Back to Tasks
      </Button>

      <TaskForm
        initialValues={task}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        floorPlanImage={floorPlan}
      />
    </Box>
  );
};
