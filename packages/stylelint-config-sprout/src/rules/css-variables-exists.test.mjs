import { testRule } from "stylelint-test-rule-node";
import plugins from "../plugin.mjs";
import rule from "./css-variables-exists.mjs";

testRule({
  ruleName: rule.ruleName,
  plugins,

  config: true,

  accept: [
    {
      code: "a { color: #fff; }",
      code: "a { color: var(--sprout-common-foreground-color-default); }",
    },
  ],

  reject: [
    {
      code: "a { color: var(--sprout-whatever); }",
      message: 'Unexpected token is undefined in "var(--sprout-whatever)" (sprout/css-variables-exists)',
    },
  ],
});
