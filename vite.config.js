import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: If your repository name is different, change the base accordingly.
// For username.github.io (user/organization site), set base: "/"
export default defineConfig({
  base: "/voice-landing/",
  plugins: [react()],
})