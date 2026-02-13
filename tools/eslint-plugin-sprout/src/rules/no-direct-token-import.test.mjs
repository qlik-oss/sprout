/**
 * @fileoverview Tests for no-direct-token-import rule
 */

import rule from "./no-direct-token-import.mjs";
import { VitestRuleTester as RuleTester } from "./rule-tester.js";

const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
  },
});

ruleTester.run("no-direct-token-import", rule, {
  valid: [
    // Unrelated imports should be fine
    {
      code: `import React from "react";`,
    },
    {
      code: `import "@qlik/sprout-css-modules/dist/sprout.css";`,
    },
    {
      code: `import tokens from "@qlik/design-tokens";`,
    },
    {
      code: `import "@qlik/design-tokens/other-path.css";`,
    },
  ],

  invalid: [
    // Bare side-effect import
    {
      code: `import "@qlik/design-tokens/generated/tokens/css/sprout-tokens.css";`,
      output: ``,
      errors: [
        {
          messageId: "forbidden",
          data: {
            source: "@qlik/design-tokens/generated/tokens/css/sprout-tokens.css",
          },
        },
      ],
    },
    // Default import
    {
      code: `import tokens from "@qlik/design-tokens/generated/tokens/css/sprout-tokens.css";`,
      output: ``,
      errors: [
        {
          messageId: "forbidden",
        },
      ],
    },
    // Keeps surrounding imports intact
    {
      code: `import React from "react";
import "@qlik/design-tokens/generated/tokens/css/sprout-tokens.css";
import something from "something";`,
      output: `import React from "react";
import something from "something";`,
      errors: [
        {
          messageId: "forbidden",
        },
      ],
    },
  ],
});
