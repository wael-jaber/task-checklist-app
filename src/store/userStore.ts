import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { User } from '@types';

interface UserState {
  currentUser: User | null;
  users: User[];
  isLoading: boolean;
  error: string | null;

  // Actions
  login: (name: string) => void;
  logout: () => void;
  getCurrentUser: () => User | null;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      currentUser: null,
      users: [],
      isLoading: false,
      error: null,

      login: (name: string) => {
        set({ isLoading: true, error: null });

        try {
          const { users } = get();

          // Try to find user by name (case insensitive)
          let user = users.find(u => u.name.toLowerCase() === name.toLowerCase());

          const timestamp = Date.now();

          if (user) {
            // Update existing user's last login
            user = {
              ...user,
              lastLogin: timestamp,
            };

            // Update users array
            const updatedUsers = users.map(u => (u.id === user?.id ? user : u));

            set({
              currentUser: user,
              users: updatedUsers,
              isLoading: false,
            });
          } else {
            // Create new user
            const newUser: User = {
              id: uuidv4(),
              name: name.trim(),
              createdAt: timestamp,
              lastLogin: timestamp,
            };

            set({
              currentUser: newUser,
              users: [...users, newUser],
              isLoading: false,
            });
          }
        } catch (error) {
          set({
            error: (error as Error).message,
            isLoading: false,
          });
        }
      },

      logout: () => {
        set({ currentUser: null });
      },

      getCurrentUser: () => {
        return get().currentUser;
      },
    }),
    {
      name: 'user-storage',
      partialize: state => ({
        users: state.users,
        currentUser: state.currentUser,
      }),
    }
  )
);
