import stylelint from "stylelint";
import { TOKENS } from "../tokens.mjs";

const {
  utils: { report, ruleMessages, validateOptions },
} = stylelint;

const ruleName = "sprout/css-variables-exists";

const messages = ruleMessages(ruleName, {
  rejected: (value) => `Unexpected token is undefined in "${value}"`,
});

const CSS_VARIABLES = TOKENS.map((t) => `var(${t})`);

const meta = {
  url: "https://github.com/qlik-oss/sprout/blob/main/packages/stylelint-config-sprout/src/rules",
};

const VAR_REGEXP = /var\(--sprout-[a-z0-9-]+\)/;

function checkVariable(value) {
  const match = value.match(VAR_REGEXP);
  if (match) {
    return CSS_VARIABLES.includes(match[0]);
  }
  // this is not sprout variable
  return true;
}

/** @type {import('stylelint').Rule} */
const ruleFunction = (primary, secondaryOptions, context) => {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: primary,
      possible: [true, 2, 1, 0],
    });

    if (!validOptions) return;

    root.walkDecls((declaration) => {
      const { prop, value } = declaration;
      const splitted = value.split(" ");
      splitted.forEach((v) => {
        if (!checkVariable(v)) {
          report({
            result,
            ruleName,
            message: messages.rejected(v),
            node: declaration,
            word: v,
          });
        }
      });
    });
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

export default ruleFunction;
