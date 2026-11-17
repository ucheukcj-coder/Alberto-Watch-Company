import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/Alberto-Watch-Company/" : "/",
  plugins: [react()],
}));