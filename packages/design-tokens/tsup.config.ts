import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/*"],
  outDir: "lib",
  splitting: true,
  sourcemap: true,
  clean: true,
  // Generate type declarations
  dts: true,
  format: "esm",
  // Modern output
  target: "es2022",
});
