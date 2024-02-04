import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // To avoid import it, describe... from vitest
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, 'src/tests/vitest.config.ts')],
    include: ['src/tests/**/*.[jt]s?(x)'],
    env: {
      IS_REACT_ACT_ENVIRONMENT: 'true',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
