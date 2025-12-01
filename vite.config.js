// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Config general de Vite + config de Vitest
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Para poder renderizar componentes de React en las pruebas
    globals: true,        // Para poder usar describe, it, expect 
    setupFiles: './src/setupTests.js', // Archivo donde metemos jest-dom
  },
})
