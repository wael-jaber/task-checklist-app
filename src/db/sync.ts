import { getDatabase } from './index';
import { User, Task, ChecklistItem } from '../types';
import { UserDocType, TaskDocType } from './schema';
import { RxDocument } from 'rxdb';

// Convert our application type to RxDB document type
const userToDoc = (user: User): UserDocType => ({
  id: user.id,
  name: user.name,
  createdAt: user.createdAt,
  lastLogin: user.lastLogin,
});

const taskToDoc = (task: Task): TaskDocType => ({
  id: task.id,
  userId: task.userId,
  title: task.title,
  description: task.description || '',
  isBlocked: task.isBlocked || false,
  isCompleted: task.isCompleted || false,
  checklist: task.checklist,
  createdAt: task.createdAt,
  updatedAt: task.updatedAt,
  imageMarker: task.imageMarker,
});

// Convert RxDB document to our application type
const docToUser = (doc: RxDocument<UserDocType>): User => ({
  id: doc.id,
  name: doc.name,
  createdAt: doc.createdAt,
  lastLogin: doc.lastLogin,
});

const docToTask = (doc: RxDocument<TaskDocType>): Task => ({
  id: doc.id,
  userId: doc.userId,
  title: doc.title,
  description: doc.description,
  isBlocked: doc.isBlocked,
  isCompleted: doc.isCompleted,
  checklist: doc.checklist as ChecklistItem[],
  createdAt: doc.createdAt,
  updatedAt: doc.updatedAt,
  imageMarker: doc.imageMarker,
});

// User CRUD operations
export const findUserByName = async (name: string): Promise<User | null> => {
  const db = await getDatabase();
  const users = await db.users
    .find({
      selector: {
        name: {
          $eq: name,
        },
      },
    })
    .exec();

  if (users.length === 0) return null;
  return docToUser(users[0]);
};

export const createUser = async (user: User): Promise<User> => {
  const db = await getDatabase();
  const doc = await db.users.insert(userToDoc(user));
  return docToUser(doc);
};

export const updateUser = async (user: User): Promise<User> => {
  const db = await getDatabase();
  const doc = await db.users.upsert(userToDoc(user));
  return docToUser(doc);
};

// Task CRUD operations
export const findTasksByUserId = async (userId: string): Promise<Task[]> => {
  const db = await getDatabase();
  const tasks = await db.tasks
    .find({
      selector: {
        userId: {
          $eq: userId,
        },
      },
    })
    .exec();

  return tasks.map(docToTask);
};

export const findTaskById = async (id: string): Promise<Task | null> => {
  const db = await getDatabase();
  const task = await db.tasks.findOne(id).exec();

  if (!task) return null;
  return docToTask(task);
};

export const createTask = async (task: Task): Promise<Task> => {
  const db = await getDatabase();
  const doc = await db.tasks.insert(taskToDoc(task));
  return docToTask(doc);
};

export const updateTask = async (task: Task): Promise<Task> => {
  const db = await getDatabase();
  const doc = await db.tasks.upsert(taskToDoc(task));
  return docToTask(doc);
};

export const deleteTask = async (id: string): Promise<void> => {
  const db = await getDatabase();
  const task = await db.tasks.findOne(id).exec();
  if (task) {
    await task.remove();
  }
};
