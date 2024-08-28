import stylelint from "stylelint";

import noCssVariablesExists from "./rules/css-variables-exists.mjs";
import noHardcodedValues from "./rules/no-hardcoded-values.mjs";

const rules = [noHardcodedValues, noCssVariablesExists];

export default rules.map((r) => stylelint.createPlugin(r.ruleName, r));
