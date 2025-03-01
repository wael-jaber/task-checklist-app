import { RxJsonSchema } from 'rxdb';
import { ChecklistItemStatus } from '../types';

// Define the schema types
export type UserDocType = {
  id: string;
  name: string;
  createdAt: number;
  lastLogin: number;
};

export type ChecklistItemDocType = {
  id: string;
  text: string;
  status: ChecklistItemStatus;
  statusText?: string;
};

export type TaskDocType = {
  id: string;
  userId: string;
  title: string;
  description: string;
  isBlocked: boolean;
  isCompleted: boolean;
  checklist: ChecklistItemDocType[];
  createdAt: number;
  updatedAt: number;
  imageMarker?: {
    src: string;
    x: number;
    y: number;
  };
};

// User schema
const userSchemaLiteral: RxJsonSchema<UserDocType> = {
  title: 'user schema',
  version: 0,
  type: 'object',
  primaryKey: 'id',
  properties: {
    id: {
      type: 'string',
      maxLength: 100,
    },
    name: {
      type: 'string',
    },
    createdAt: {
      type: 'number',
    },
    lastLogin: {
      type: 'number',
    },
  },
  required: ['id', 'name', 'createdAt', 'lastLogin'],
};

// Checklist item schema
const checklistItemSchemaLiteral: RxJsonSchema<ChecklistItemDocType> = {
  title: 'checklist item schema',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 100,
    },
    text: {
      type: 'string',
    },
    status: {
      type: 'string',
      enum: ['not_started', 'in_progress', 'blocked', 'done', 'final_installation_done'],
    },
    statusText: {
      type: 'string',
    },
  },
  required: ['id', 'text', 'status'],
  primaryKey: 'id',
};

// Task schema
const taskSchemaLiteral: RxJsonSchema<TaskDocType> = {
  title: 'task schema',
  version: 0,
  type: 'object',
  primaryKey: 'id',
  properties: {
    id: {
      type: 'string',
      maxLength: 100,
    },
    userId: {
      type: 'string',
      maxLength: 100,
    },
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    isBlocked: {
      type: 'boolean',
    },
    isCompleted: {
      type: 'boolean',
    },
    checklist: {
      type: 'array',
      items: checklistItemSchemaLiteral,
    },
    createdAt: {
      type: 'number',
    },
    updatedAt: {
      type: 'number',
    },
    imageMarker: {
      type: 'object',
      properties: {
        src: {
          type: 'string',
        },
        x: {
          type: 'number',
        },
        y: {
          type: 'number',
        },
      },
    },
  },
  required: ['id', 'userId', 'title', 'checklist', 'createdAt', 'updatedAt'],
};

export const schemas = {
  users: userSchemaLiteral,
  tasks: taskSchemaLiteral,
};
