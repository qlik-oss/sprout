import stylelint from "stylelint";

const {
  utils: { report, ruleMessages, validateOptions },
} = stylelint;

const ruleName = "sprout/no-hardcoded-values";

const messages = ruleMessages(ruleName, {
  rejected: (value) => `Expected a token instead of color or size in "${value}"`,
  zindex: (value) => `Expected a token instead of hardcoded value "${value}"`,
});

const meta = {
  url: "https://github.com/qlik-oss/sprout/blob/main/packages/stylelint-config-sprout/src/rules/",
};

const SIZE_OK_PROP = ["width", "height", "min-width", "min-height", "max-width", "max-height"];

const CSS_COLOR_REGEXP = /#[0-9a-f]{3,6}|rgba?\(.*\)|hsla?\(.*\)/;
const CSS_SIZE_REGEXP = /[\d.]+(px|em|rem%)/;

function getValuesFromCalc(value) {
  if (value.startsWith("calc(")) {
    let newValues = [];
    // drop it:
    const splitted = value.replace(");", "").replace("calc(", "").split(" ");
    newValues.push(splitted[0]);
    newValues.push(splitted[splitted.length - 1]);
    return newValues;
  }
  return [value];
}

/** @type {import('stylelint').Rule} */
const ruleFunction = (primary) => {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: primary,
      possible: [true, 2, 1, 0],
    });

    if (!validOptions) return;

    root.walkDecls((declaration) => {
      const { prop, value } = declaration;
      const values = getValuesFromCalc(value);
      const hasHardcodedColor = CSS_COLOR_REGEXP.test(value);
      if (prop === "z-index") {
        values.forEach((val) => {
          if (val.startsWith("var")) {
            return;
          }
          try {
            const parsed = parseInt(val, 10);
            if (parsed !== 0 && parsed !== 1) {
              report({
                result,
                ruleName,
                message: messages.zindex(val),
                node: declaration,
                word: val,
              });
            }
          } catch {
            // eslint-disable-next-line no-undef
            console.log("error parsing z-index", val);
          }
          return;
        });
      } else if (hasHardcodedColor) {
        report({
          result,
          ruleName,
          message: messages.rejected(value),
          node: declaration,
          word: value,
        });
        return;
      }
      values.forEach((val) => {
        const hasHardcodedSize = CSS_SIZE_REGEXP.test(val) && val !== "0px";
        if (hasHardcodedSize && !SIZE_OK_PROP.includes(prop)) {
          report({
            result,
            ruleName,
            message: messages.rejected(val),
            node: declaration,
            word: val,
          });
        }
        return;
      });
    });
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

export default ruleFunction;
