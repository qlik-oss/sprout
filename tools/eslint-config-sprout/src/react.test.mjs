import { describe, expect, test } from "vitest";

import reactConfig from "./react.mjs";

describe("React ESLint config", () => {
  test("should contain plugins", () => {
    const plugins = reactConfig.map((obj) => obj.plugins).filter(Boolean);
    const pluginNames = plugins.flatMap((p) => Object.keys(p));

    expect(pluginNames).toContain("react");
    expect(pluginNames).toContain("react-hooks");
    expect(pluginNames).toContain("jsx-a11y");
    expect(pluginNames).toContain("sprout");
  });

  test("should have specific rules", () => {
    const specificRules = reactConfig[reactConfig.length - 1];
    const rules = specificRules.rules;

    expect(rules["react/prop-types"]).toBe("off");
    expect(rules["react/function-component-definition"]).toEqual([
      "error",
      {
        namedComponents: "function-declaration",
        unnamedComponents: ["arrow-function", "function-expression"],
      },
    ]);
    expect(rules["react/display-name"]).toBe("error");
  });
});
