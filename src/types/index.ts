// User type definition
export interface User {
  id: string;
  name: string;
  createdAt: number;
  lastLogin: number;
}

// Status types for checklist items
export type ChecklistItemStatus =
  | 'not_started'
  | 'in_progress'
  | 'blocked'
  | 'done'
  | 'final_installation_done';

// Checklist item definition
export interface ChecklistItem {
  id: string;
  text: string;
  status: ChecklistItemStatus;
  statusText?: string;
}

// Task definitiion
export interface Task {
  id: string;
  userId: string;
  title: string;
  description?: string;
  isBlocked?: boolean;
  checklist: ChecklistItem[];
  createdAt: number;
  updatedAt: number;
  // image marker stuff
  imageMarker?: {
    src: string;
    x: number;
    y: number;
  };
}

// Input types for creating a new task
export interface CreateTaskInput {
  title: string;
  description?: string;
  checklist: Omit<ChecklistItem, 'id'>[];
  imageMarker?: {
    src: string;
    x: number;
    y: number;
  };
}

// Input types for creating a new checklist iteem
export interface CreateChecklistItemInput {
  text: string;
  status: ChecklistItemStatus;
  statusText?: string;
}
