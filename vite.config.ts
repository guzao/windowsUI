import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    WindiCSS()
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'),
    }
  }
})
