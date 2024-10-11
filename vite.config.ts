import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  define: {
    "process.env": process.env,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/_mantine.scss";`,
      },
    },
  },
  server: {
    host: "localhost",
    port: 5173,
  },
});
