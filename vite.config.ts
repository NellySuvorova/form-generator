import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const ROOT = path.join(__dirname, './src')

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      interfaces: path.resolve(ROOT, 'interfaces'),
      utils: path.resolve(ROOT, 'utils'),
      components: path.resolve(ROOT, 'components'),
      controllers: path.resolve(ROOT, 'controllers'),
      shared: path.resolve(ROOT, 'shared'),
    },
  },
})
