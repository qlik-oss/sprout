/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["src/**/*.vitest.ts*"],
    environment: "jsdom", // or 'happy-dom'
    globals: true,
    css: {
      include: /.*/,
      modules: {
        classNameStrategy: "non-scoped", // or 'scoped' if you need scoped class names in tests
      },
    },
  },
});
