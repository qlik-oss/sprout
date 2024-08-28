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
    },
    {
      code: "a { color: var(--sprout-common-foreground-color-default); }",
    },
    {
      code: "a { padding: var(--sprout-common-spacing-m) var(--sprout-common-spacing-s); }",
    },
  ],

  reject: [
    {
      code: "a { color: var(--sprout-whatever); }",
      message: 'Unexpected token is undefined in "var(--sprout-whatever)" (sprout/css-variables-exists)',
    },
    {
      // typo at the end of the variable name spacin instead of spacing
      code: "a { padding: var(--sprout-common-spacing-m) var(--sprout-common-spacin-s); }",
      message: 'Unexpected token is undefined in "var(--sprout-common-spacin-s)" (sprout/css-variables-exists)',
    },
  ],
});
