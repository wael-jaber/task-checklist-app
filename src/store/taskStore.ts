import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { Task, CreateTaskInput, ChecklistItem } from '@types';

export type TaskFilterStatus = 'all' | 'active' | 'completed' | 'blocked';

interface TaskState {
  tasks: Task[];
  selectedTaskId: string | null;
  filterStatus: TaskFilterStatus;
  searchQuery: string;
  isLoading: boolean;
  error: string | null;

  // Actions
  fetchTasks: (userId: string) => void;
  getTaskById: (id: string) => Task | undefined;
  createTask: (userId: string, input: CreateTaskInput) => Task;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  selectTask: (taskId: string | null) => void;
  updateChecklistItem: (
    taskId: string,
    itemId: string,
    status: string,
    statusText?: string
  ) => void;
  setFilterStatus: (status: TaskFilterStatus) => void;
  setSearchQuery: (query: string) => void;
  toggleTaskBlocked: (taskId: string, blocked: boolean) => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set, get) => ({
      tasks: [],
      selectedTaskId: null,
      filterStatus: 'all',
      searchQuery: '',
      isLoading: false,
      error: null,

      fetchTasks: (userId: string) => {
        console.log(userId);

        set({ isLoading: true, error: null });

        try {
          // In a real app, this would fetch from an API or database
          // For now, we're just using the tasks already in the store

          // Filter tasks by userId
          // const filteredTasks = get().tasks.filter(task => task.userId === userId);

          // Apply any additional filtering here if needed

          set({ isLoading: false });
        } catch (error) {
          set({ error: (error as Error).message, isLoading: false });
        }
      },

      getTaskById: (id: string) => {
        return get().tasks.find(task => task.id === id);
      },

      createTask: (userId: string, input: CreateTaskInput) => {
        set({ isLoading: true, error: null });

        try {
          const timestamp = Date.now();

          // Create checklist items with IDs
          const checklist: ChecklistItem[] = input.checklist.map(item => ({
            id: uuidv4(),
            text: item.text,
            status: item.status,
            statusText: item.statusText,
          }));

          // Check initial status
          const hasBlockedItems = checklist.some(item => item.status === 'blocked');
          const allItemsCompleted = checklist.every(
            item => item.status === 'done' || item.status === 'final_installation_done'
          );
          const isCompleted = hasBlockedItems ? false : allItemsCompleted;

          const newTask: Task = {
            id: uuidv4(),
            userId,
            title: input.title,
            description: input.description || '',
            isBlocked: hasBlockedItems,
            isCompleted: isCompleted,
            checklist,
            imageMarker: input.imageMarker,
            createdAt: timestamp,
            updatedAt: timestamp,
          };

          set(state => ({
            tasks: [...state.tasks, newTask],
            isLoading: false,
          }));

          return newTask;
        } catch (error) {
          set({ error: (error as Error).message, isLoading: false });
          throw error;
        }
      },

      updateTask: (id: string, updates: Partial<Task>) => {
        set({ isLoading: true, error: null });

        try {
          const task = get().tasks.find(task => task.id === id);

          if (!task) {
            throw new Error('Task not found');
          }

          const updatedTask = {
            ...task,
            ...updates,
            updatedAt: Date.now(),
          };

          set(state => ({
            tasks: state.tasks.map(t => (t.id === id ? updatedTask : t)),
            isLoading: false,
          }));
        } catch (error) {
          set({ error: (error as Error).message, isLoading: false });
        }
      },

      deleteTask: (id: string) => {
        set({ isLoading: true, error: null });

        try {
          set(state => {
            // If the deleted task was selected, clear the selection
            const newSelectedTaskId = state.selectedTaskId === id ? null : state.selectedTaskId;

            return {
              tasks: state.tasks.filter(t => t.id !== id),
              selectedTaskId: newSelectedTaskId,
              isLoading: false,
            };
          });
        } catch (error) {
          set({ error: (error as Error).message, isLoading: false });
        }
      },

      selectTask: (taskId: string | null) => {
        set({ selectedTaskId: taskId });
      },

      updateChecklistItem: (
        taskId: string,
        itemId: string,
        status: string,
        statusText?: string
      ) => {
        set({ isLoading: true, error: null });

        try {
          const task = get().tasks.find(task => task.id === taskId);

          if (!task) {
            throw new Error('Task not found');
          }

          const updatedChecklist = task.checklist.map(item =>
            item.id === itemId
              ? {
                  ...item,
                  status: status as ChecklistItem['status'],
                  statusText: statusText,
                }
              : item
          );

          // Check if any items are blocked
          const hasBlockedItems = updatedChecklist.some(item => item.status === 'blocked');

          // Check if all items are completed
          const allItemsCompleted = updatedChecklist.every(
            item => item.status === 'done' || item.status === 'final_installation_done'
          );

          // A task can't be both completed and blocked
          // If blocked, it's not completed regardless of checklist status
          const isCompleted = hasBlockedItems ? false : allItemsCompleted;

          const updatedTask = {
            ...task,
            checklist: updatedChecklist,
            isBlocked: hasBlockedItems,
            isCompleted: isCompleted,
            updatedAt: Date.now(),
          };

          set(state => ({
            tasks: state.tasks.map(t => (t.id === taskId ? updatedTask : t)),
            isLoading: false,
          }));
        } catch (error) {
          set({ error: (error as Error).message, isLoading: false });
        }
      },

      setFilterStatus: (status: TaskFilterStatus) => {
        set({ filterStatus: status });
      },

      setSearchQuery: (query: string) => {
        set({ searchQuery: query });
      },

      toggleTaskBlocked: (taskId: string, blocked: boolean) => {
        set({ isLoading: true, error: null });

        try {
          const task = get().tasks.find(task => task.id === taskId);

          if (!task) {
            throw new Error('Task not found');
          }

          // If marking as blocked, it can't be completed
          // If unblocking, we need to check if all items are done to determine completion
          let isCompleted = false;

          if (!blocked) {
            // If unblocking, recalculate completion status
            isCompleted = task.checklist.every(
              item => item.status === 'done' || item.status === 'final_installation_done'
            );
          }

          const updatedTask = {
            ...task,
            isBlocked: blocked,
            isCompleted: blocked ? false : isCompleted,
            updatedAt: Date.now(),
          };

          set(state => ({
            tasks: state.tasks.map(t => (t.id === taskId ? updatedTask : t)),
            isLoading: false,
          }));
        } catch (error) {
          set({ error: (error as Error).message, isLoading: false });
        }
      },
    }),
    {
      name: 'task-storage',
      partialize: state => ({
        tasks: state.tasks,
      }),
    }
  )
);
