import { describe, expect, test } from "vitest";

import config from "./index.mjs";

describe("base ESLint config", () => {
  test("should contain plugins", () => {
    const plugins = config.map((obj) => obj.plugins).filter(Boolean);
    const pluginNames = plugins.flatMap((p) => Object.keys(p));

    expect(pluginNames).toContain("import-x");
    expect(pluginNames).toContain("@typescript-eslint");
  });

  test("should have specific rules", () => {
    const specificRules = config[config.length - 1];
    const rules = specificRules.rules;

    expect(rules["no-console"]).toBe("error");
    expect(rules["@typescript-eslint/consistent-type-definitions"]).toEqual(["error", "type"]);
    expect(rules["@typescript-eslint/array-type"]).toEqual(["error", { default: "generic" }]);
  });
});
