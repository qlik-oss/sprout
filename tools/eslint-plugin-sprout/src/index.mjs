import classNamesRule from "./rules/classNames.mjs";
import logicalPropertiesRule from "./rules/logical-properties.mjs";

export default {
  rules: {
    "no-deprecated-classnames": classNamesRule,
    "no-physical-properties": logicalPropertiesRule,
  },
};
