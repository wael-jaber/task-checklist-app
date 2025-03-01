import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/task-checklist-app/',
  resolve: {
    alias: {
      '@components': '/src/components',
      '@containers': '/src/containers',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@routes': '/src/routes',
      '@store': '/src/store',
      '@utils': '/src/utils',
      '@db': '/src/db',
      '@types': '/src/types',
    },
  },
});
