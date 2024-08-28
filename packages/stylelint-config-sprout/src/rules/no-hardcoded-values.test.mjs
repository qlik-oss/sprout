import { testRule } from "stylelint-test-rule-node";
import plugins from "../plugin.mjs";
import rule from "./no-hardcoded-values.mjs";

testRule({
  ruleName: rule.ruleName,
  plugins,

  config: true,

  accept: [
    {
      code: "a { color: var(--sprout-whatever); }",
    },
    {
      code: "a { padding: var(--sprout-whatever); }",
    },
    {
      code: "div { width: 100px; min-width: 100px; max-width: 100px; }",
    },
    {
      code: "div { height: 100px; min-height: 100px; max-height: 100px; }",
    },
  ],

  reject: [
    {
      code: "a { color: #fff; }",
      message: 'Expected a token instead of color or size in "#fff" (sprout/no-hardcoded-values)',
    },
    {
      code: "a { padding: 10px; }",
      message: 'Expected a token instead of color or size in "10px" (sprout/no-hardcoded-values)',
    },
  ],
});
