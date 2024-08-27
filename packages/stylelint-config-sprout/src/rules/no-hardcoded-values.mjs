import stylelint from "stylelint";

const {
  utils: { report, ruleMessages, validateOptions },
} = stylelint;

const ruleName = "sprout/no-hardcoded-values";

const messages = ruleMessages(ruleName, {
  rejected: (value) => `Expected a token instead of color or size in "${value}"`,
});

const meta = {
  url: "https://github.com/qlik-oss/sprout/blob/main/packages/stylelint-config-sprout/src/rules/",
};

function isVar(value) {
  const splited = value.split(" ");
  if (splited.length > 1) {
    return splited.every((v) => isVar(v));
  }
  return value.startsWith("var(--");
}

const SIZE_OK_PROP = ["width", "height", "min-width", "min-height", "max-width", "max-height"];

const CSS_COLOR_REGEXP = /#[0-9a-f]{3,6}|rgba?\(.*\)|hsla?\(.*\)/;
const CSS_SIZE_REGEXP = /[\d.]+(px|em|rem%)/;

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
      const hasHardcodedColor = CSS_COLOR_REGEXP.test(value);
      const hasHardcodedSize = CSS_SIZE_REGEXP.test(value) && value !== "0px";
      if (hasHardcodedColor) {
        report({
          result,
          ruleName,
          message: messages.rejected(value),
          node: declaration,
          word: value,
        });
        return;
      }
      if (hasHardcodedSize && !SIZE_OK_PROP.includes(prop)) {
        report({
          result,
          ruleName,
          message: messages.rejected(value),
          node: declaration,
          word: value,
        });
        return;
      }
    });
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

export default ruleFunction;
