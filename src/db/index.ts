import { createRxDatabase, addRxPlugin, RxDatabase, RxCollection } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election';
import { schemas, UserDocType, TaskDocType } from './schema';

// Define database collections interface
export interface DatabaseCollections {
  users: RxCollection<UserDocType>;
  tasks: RxCollection<TaskDocType>;
}

// Define database type
export type Database = RxDatabase<DatabaseCollections>;

// Add plugins
addRxPlugin(RxDBLeaderElectionPlugin);

// Database instance
let dbPromise: Promise<Database> | null = null;

// Initialize database
export const getDatabase = async (): Promise<Database> => {
  if (dbPromise) return dbPromise;

  dbPromise = createRxDatabase<DatabaseCollections>({
    name: 'taskchecklistdb',
    storage: getRxStorageDexie(),
  }).then(async db => {
    // Create collections
    await db.addCollections({
      users: {
        schema: schemas.users,
      },
      tasks: {
        schema: schemas.tasks,
      },
    });

    return db;
  });

  return dbPromise;
};

// Clean up database
export const closeDatabase = async (): Promise<void> => {
  if (!dbPromise) return;

  const db = await dbPromise;
  await db.destroy();
  dbPromise = null;
};
