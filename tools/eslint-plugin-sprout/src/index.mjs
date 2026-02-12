import classNamesRule from "./rules/classNames.mjs";
import logicalPropertiesRule from "./rules/logical-properties.mjs";
import noDirectTokenImportRule from "./rules/no-direct-token-import.mjs";

export default {
  rules: {
    "no-deprecated-classnames": classNamesRule,
    "no-physical-properties": logicalPropertiesRule,
    "no-direct-token-import": noDirectTokenImportRule,
  },
};
