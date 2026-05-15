import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      shared: "/src/shared",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "shared/styles/elements.scss" as *;`,
        loadPaths: ["src"],
      },
    },
  },
});
