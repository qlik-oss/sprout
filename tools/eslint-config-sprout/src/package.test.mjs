import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pkgPath = resolve(__dirname, "../package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));

describe("package.json exports", () => {
  it("should point to index.mjs as the main entry", () => {
    const mainEntry = pkg.main;

    expect(mainEntry).toBeTruthy();
    expect(String(mainEntry).endsWith("index.mjs")).toBe(true);
  });

  it("should export index.mjs on root", () => {
    expect(pkg.exports).toBeTruthy();

    const rootExport = pkg.exports["."];
    const rootTarget = rootExport.import;

    expect(rootTarget).toBeTruthy();
    expect(String(rootTarget)).toBe("./src/index.mjs");
  });

  it("should export react.mjs on `./react`", () => {
    expect(pkg.exports).toBeTruthy();

    const reactSub = pkg.exports["./react"];
    const reactTarget = reactSub.import;

    expect(reactTarget).toBeTruthy();
    expect(String(reactTarget)).toBe("./src/react.mjs");
  });
});
