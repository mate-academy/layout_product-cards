// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src', // <-- папка с index.html
  server: {
    open: true // браузер откроется автоматически
  },
  css: {
    preprocessorOptions: {
      scss: {
        // можно добавить глобальные переменные, если нужно
        additionalData: `@import "./variables.scss";`
      }
    }
  }
})
