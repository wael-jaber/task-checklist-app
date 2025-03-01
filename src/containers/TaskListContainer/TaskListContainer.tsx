import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { TaskList } from '@components/tasks/TaskList';
import { TaskListHeader } from '@components/tasks/TaskListHeader';
import { TaskListFilter } from '@components/tasks/TaskListFilter';
import { useTaskStore } from '@store/taskStore';
import { useUserStore } from '@store/userStore';
import { Task } from '@types';
import { TaskCard } from '@components/tasks/TaskCard';
import { TaskEmpty } from '@components/tasks/TaskEmpty';

export const TaskListContainer: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useUserStore();
  const {
    tasks,
    filterStatus,
    searchQuery,
    setFilterStatus,
    setSearchQuery,
    updateChecklistItem,
    deleteTask,
    toggleTaskBlocked,
  } = useTaskStore();

  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  // Apply filters to tasks
  useEffect(() => {
    if (!currentUser) return;

    let filtered = tasks.filter(task => task.userId === currentUser.id);

    // Apply status filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter(task => {
        switch (filterStatus) {
          case 'active':
            return !task.isBlocked && !task.isCompleted;
          case 'completed':
            return task.isCompleted;
          case 'blocked':
            return task.isBlocked;
          default:
            return true;
        }
      });
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        task =>
          task.title.toLowerCase().includes(query) ||
          (task.description && task.description.toLowerCase().includes(query)) ||
          task.checklist.some(item => item.text.toLowerCase().includes(query))
      );
    }

    setFilteredTasks(filtered);
  }, [tasks, filterStatus, searchQuery, currentUser]);

  const handleAddTask = () => {
    navigate('/tasks/create');
  };

  const handleTaskClick = (taskId: string) => {
    navigate(`/tasks/${taskId}`);
  };

  const handleChecklistItemStatusChange = (
    taskId: string,
    itemId: string,
    status: string,
    statusText?: string
  ) => {
    updateChecklistItem(taskId, itemId, status, statusText);
  };

  const handleEditTask = (taskId: string) => {
    navigate(`/tasks/${taskId}/edit`);
  };

  const handleDeleteTask = (taskId: string) => {
    deleteTask(taskId);
  };

  const handleDuplicateTask = async (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (task && currentUser) {
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

      // Use store action to create the duplicate
      const newTask = await useTaskStore.getState().createTask(currentUser.id, input);

      // Optionally navigate to the new task
      navigate(`/tasks/${newTask.id}`);
    }
  };

  const handleToggleBlockedStatus = (taskId: string, blocked: boolean) => {
    toggleTaskBlocked(taskId, blocked);
  };

  // Create custom renderTask function that includes all action handlers
  const renderTask = (task: Task) => (
    <TaskCard
      key={task.id}
      task={task}
      onChecklistItemStatusChange={handleChecklistItemStatusChange}
      onClick={() => handleTaskClick(task.id)}
      onEdit={() => handleEditTask(task.id)}
      onDelete={() => handleDeleteTask(task.id)}
      onDuplicate={() => handleDuplicateTask(task.id)}
      onToggleBlocked={blocked => handleToggleBlockedStatus(task.id, blocked)}
    />
  );

  return (
    <Box>
      <TaskListHeader title="My Tasks" onAddTask={handleAddTask} />

      <TaskListFilter
        onSearchChange={setSearchQuery}
        onStatusChange={setFilterStatus}
        searchValue={searchQuery}
        statusValue={filterStatus}
      />

      {filteredTasks.length > 0 ? (
        <TaskList
          tasks={filteredTasks}
          title=""
          onTaskClick={handleTaskClick}
          onChecklistItemStatusChange={handleChecklistItemStatusChange}
          renderTask={renderTask}
        />
      ) : (
        <TaskEmpty
          message={
            searchQuery || filterStatus !== 'all'
              ? 'No tasks found matching your filters.'
              : "You don't have any tasks yet."
          }
          showAddButton={!(searchQuery || filterStatus !== 'all')}
          onAddTask={handleAddTask}
          addButtonLabel="Create Your First Task"
        />
      )}
    </Box>
  );
};
