/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  test: {
    environment: "jsdom",
    globals: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@css": path.resolve(__dirname, "./src/assets/alegra/css"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@contextApi": path.resolve(__dirname, "./src/context/contextApi"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@svg": path.resolve(__dirname, "./src/assets/alegra/svg"),
      "@ctypes": path.resolve(__dirname, "./src/@types")
    },
  },
})
