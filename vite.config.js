import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The live site is served from https://bahriddinoff01.github.io/ai-travel-planner/,
// so production builds need that sub-path. Dev keeps "/" so localhost URLs stay short.
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === 'build' ? '/ai-travel-planner/' : '/',
}))