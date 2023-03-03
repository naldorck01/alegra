import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@css": path.resolve(__dirname, "./src/assets/alegra/css"),
      "@svg": path.resolve(__dirname, "./src/assets/alegra/svg"),
      "@components": path.resolve(__dirname, "./src/components")
    },
  },
})
