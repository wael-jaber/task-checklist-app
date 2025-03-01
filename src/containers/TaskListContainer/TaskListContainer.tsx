import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { TaskCard } from '@components/tasks/TaskCard';
import { TaskEmpty } from '@components/tasks/TaskEmpty';
import { TaskList } from '@components/tasks/TaskList';
import { TaskListFilter } from '@components/tasks/TaskListFilter';
import { TaskListHeader } from '@components/tasks/TaskListHeader';
import { TaskMapView } from '@components/tasks/TaskMapView';
import { ViewMode, TaskViewToggle } from '@components/tasks/TaskViewToggle';
import { useTaskStore } from '@store/taskStore';
import { useUserStore } from '@store/userStore';
import { Task } from '@types';
import floorPlan from '../../assets/floor-plan.png';

export const TaskListContainer: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
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
    createTask,
  } = useTaskStore();

  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  // Initialize view mode from URL parameter or default to 'list'
  const [viewMode, setViewMode] = useState<ViewMode>(
    (searchParams.get('view') as ViewMode) || 'list'
  );

  // Update search params when view mode changes
  useEffect(() => {
    setSearchParams({ view: viewMode });
  }, [viewMode, setSearchParams]);

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
    navigate(`/tasks/create${window.location.search}`);
  };

  const handleTaskClick = (taskId: string) => {
    // Preserve the current view mode when navigating to task details
    navigate(`/tasks/${taskId}${window.location.search}`);
  };

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
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
    navigate(`/tasks/${taskId}/edit${window.location.search}`);
  };

  const handleDeleteTask = (taskId: string) => {
    deleteTask(taskId);
  };

  const handleDuplicateTask = async (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
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

        // Navigate to the new task with its ID, preserving search params
        navigate(`/tasks/${newTask.id}${window.location.search}`);
      } catch (error) {
        console.error('Failed to duplicate task:', error);
      }
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

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          mb: 2,
        }}
      >
        <TaskViewToggle viewMode={viewMode} onChange={handleViewModeChange} />

        <Box sx={{ flexGrow: 1, ml: 2 }}>
          <TaskListFilter
            onSearchChange={setSearchQuery}
            onStatusChange={setFilterStatus}
            searchValue={searchQuery}
            statusValue={filterStatus}
          />
        </Box>
      </Box>

      {filteredTasks.length > 0 ? (
        viewMode === 'list' ? (
          <TaskList
            tasks={filteredTasks}
            title=""
            onTaskClick={handleTaskClick}
            onChecklistItemStatusChange={handleChecklistItemStatusChange}
            renderTask={renderTask}
          />
        ) : (
          <TaskMapView
            tasks={filteredTasks}
            onTaskClick={handleTaskClick}
            floorPlanImage={floorPlan}
          />
        )
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
