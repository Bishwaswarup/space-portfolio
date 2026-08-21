import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: change '/space-portfolio/' to match your GitHub repo name,
// e.g. if your repo is github.com/yourname/my-repo, base should be '/my-repo/'
export default defineConfig({
  plugins: [react()],
  base: '/space-portfolio/',
});
