import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Indiamart-Lead-Manager/', // Set this to your repo name
  plugins: [react()],
});
