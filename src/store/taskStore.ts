// src/store/taskStore.ts (updated for RxDB)
import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { Task, CreateTaskInput, ChecklistItem, ChecklistItemStatus } from '../types';
import {
  findTasksByUserId,
  createTask as dbCreateTask,
  updateTask as dbUpdateTask,
  deleteTask as dbDeleteTask,
} from '../db/sync';

export type TaskFilterStatus = 'all' | 'active' | 'completed' | 'blocked';

interface TaskState {
  tasks: Task[];
  selectedTaskId: string | null;
  filterStatus: TaskFilterStatus;
  searchQuery: string;
  isLoading: boolean;
  error: string | null;

  // Actions
  fetchTasks: (userId: string) => Promise<void>;
  getTaskById: (id: string) => Task | undefined;
  createTask: (userId: string, input: CreateTaskInput) => Promise<Task>;
  updateTask: (id: string, updates: Partial<Task>) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  selectTask: (taskId: string | null) => void;
  updateChecklistItem: (
    taskId: string,
    itemId: string,
    status: string,
    statusText?: string
  ) => Promise<void>;
  setFilterStatus: (status: TaskFilterStatus) => void;
  setSearchQuery: (query: string) => void;
  toggleTaskBlocked: (taskId: string, blocked: boolean) => Promise<void>;
}

export const useTaskStore = create<TaskState>((set, get) => ({
  tasks: [],
  selectedTaskId: null,
  filterStatus: 'all',
  searchQuery: '',
  isLoading: false,
  error: null,

  fetchTasks: async (userId: string) => {
    set({ isLoading: true, error: null });

    try {
      const tasks = await findTasksByUserId(userId);
      set({ tasks, isLoading: false });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error fetching tasks';
      set({ error: errorMessage, isLoading: false });
    }
  },

  getTaskById: (id: string) => {
    return get().tasks.find(task => task.id === id);
  },

  createTask: async (userId: string, input: CreateTaskInput) => {
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
        isCompleted,
        checklist,
        imageMarker: input.imageMarker,
        createdAt: timestamp,
        updatedAt: timestamp,
      };

      // Save to database
      const savedTask = await dbCreateTask(newTask);

      // Update local state
      set(state => ({
        tasks: [...state.tasks, savedTask],
        isLoading: false,
      }));

      return savedTask;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error creating task';
      set({ error: errorMessage, isLoading: false });
      throw error;
    }
  },

  updateTask: async (id: string, updates: Partial<Task>) => {
    set({ isLoading: true, error: null });

    try {
      const task = get().tasks.find(task => task.id === id);

      if (!task) {
        throw new Error('Task not found');
      }

      const updatedTask: Task = {
        ...task,
        ...updates,
        updatedAt: Date.now(),
      };

      // Save to database
      await dbUpdateTask(updatedTask);

      // Update local state
      set(state => ({
        tasks: state.tasks.map(t => (t.id === id ? updatedTask : t)),
        isLoading: false,
      }));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error updating task';
      set({ error: errorMessage, isLoading: false });
    }
  },

  deleteTask: async (id: string) => {
    set({ isLoading: true, error: null });

    try {
      // Delete from database
      await dbDeleteTask(id);

      // Update local state
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
      const errorMessage = error instanceof Error ? error.message : 'Unknown error deleting task';
      set({ error: errorMessage, isLoading: false });
    }
  },

  selectTask: (taskId: string | null) => {
    set({ selectedTaskId: taskId });
  },

  updateChecklistItem: async (
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

      const validStatus = status as ChecklistItemStatus;

      const updatedChecklist = task.checklist.map(item =>
        item.id === itemId
          ? {
              ...item,
              status: validStatus,
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

      const updatedTask: Task = {
        ...task,
        checklist: updatedChecklist,
        isBlocked: hasBlockedItems,
        isCompleted,
        updatedAt: Date.now(),
      };

      // Save to database
      await dbUpdateTask(updatedTask);

      // Update local state
      set(state => ({
        tasks: state.tasks.map(t => (t.id === taskId ? updatedTask : t)),
        isLoading: false,
      }));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error updating checklist item';
      set({ error: errorMessage, isLoading: false });
    }
  },

  setFilterStatus: (status: TaskFilterStatus) => {
    set({ filterStatus: status });
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },

  toggleTaskBlocked: async (taskId: string, blocked: boolean) => {
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

      const updatedTask: Task = {
        ...task,
        isBlocked: blocked,
        isCompleted: blocked ? false : isCompleted,
        updatedAt: Date.now(),
      };

      // Save to database
      await dbUpdateTask(updatedTask);

      // Update local state
      set(state => ({
        tasks: state.tasks.map(t => (t.id === taskId ? updatedTask : t)),
        isLoading: false,
      }));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error toggling task blocked status';
      set({ error: errorMessage, isLoading: false });
    }
  },
}));
