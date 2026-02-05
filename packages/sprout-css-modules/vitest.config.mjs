/// <reference types="vitest" />

import { playwright } from "@vitest/browser-playwright";
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
      {
        test: {
          name: "browser",
          include: ["**/*.spec.js"],
          globals: true,
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [
              {
                browser: "chromium", // or 'chromium', 'firefox', 'webkit'
              },
            ],
          },
        },
      },
    ],
  },
});
