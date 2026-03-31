/// <reference types="vitest" />

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: "unit",
          environment: "jsdom", // or 'happy-dom'
          include: ["**/*.test.js"],
          globals: true,
          css: {
            include: /.*/,
            modules: {
              classNameStrategy: "non-scoped", // or 'scoped' if you need scoped class names in tests
            },
          },
        },
      },
    ],
  },
});
