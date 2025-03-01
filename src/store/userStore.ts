import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../types';
import { findUserByName, createUser, updateUser } from '../db/sync';

interface UserState {
  currentUser: User | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  login: (name: string) => Promise<void>;
  logout: () => void;
  getCurrentUser: () => User | null;
}

export const useUserStore = create<UserState>((set, get) => ({
  currentUser: null,
  isLoading: false,
  error: null,

  login: async (name: string) => {
    set({ isLoading: true, error: null });

    try {
      const timestamp = Date.now();
      let user = await findUserByName(name);

      if (user) {
        // Update existing user
        user = {
          ...user,
          lastLogin: timestamp,
        };
        user = await updateUser(user);
      } else {
        // Create new user
        const newUser: User = {
          id: uuidv4(),
          name: name.trim(),
          createdAt: timestamp,
          lastLogin: timestamp,
        };
        user = await createUser(newUser);
      }

      set({ currentUser: user, isLoading: false });

      // Also store in localStorage for quick access on page refresh
      localStorage.setItem('currentUser', JSON.stringify(user));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error during login';
      set({ error: errorMessage, isLoading: false });
    }
  },

  logout: () => {
    set({ currentUser: null });
    localStorage.removeItem('currentUser');
  },

  getCurrentUser: () => {
    // If we don't have a current user in state, try to get it from localStorage
    const { currentUser } = get();
    if (!currentUser) {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        try {
          return JSON.parse(storedUser) as User;
        } catch (e) {
          console.error(e);
          // Invalid JSON in localStorage
          localStorage.removeItem('currentUser');
        }
      }
    }
    return currentUser;
  },
}));

// Initialize the store with the user from localStorage on app start
const initUserStore = (): void => {
  const storedUser = localStorage.getItem('currentUser');
  if (storedUser) {
    try {
      const user = JSON.parse(storedUser) as User;
      useUserStore.setState({ currentUser: user });
    } catch (e) {
      console.error(e);

      // Invalid JSON in localStorage
      localStorage.removeItem('currentUser');
    }
  }
};

initUserStore();
