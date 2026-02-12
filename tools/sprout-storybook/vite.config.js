import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      formats: ["es"],
      fileName: "sprout-css-storybook",
      entry: "src/sprout-css-storybook.ts",
    },
  },
  plugins: [
    cssInjectedByJsPlugin(),
    dts({
      tsconfigPath: "./tsconfig.json",
    }),
  ],
});
