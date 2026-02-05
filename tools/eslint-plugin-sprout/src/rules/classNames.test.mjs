/**
 * @fileoverview Check if the import of d3 is not on d3-*
 * @author Jean-Michel FRANCOIS
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import rule from "./classNames.mjs";
import { VitestRuleTester as RuleTester } from "./rule-tester.js";

const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

ruleTester.run("classNames", rule, {
  valid: [
    {
      code: "<foo className={classNames('flex-row')} />",
    },
    {
      code: "<foo className={sprout.classNames('flex-row')} />",
    },
    {
      code: "<foo className={foo('row')} />",
    },
    {
      code: "<foo className={classNames({ 'flex-row': condition, 'items-center': true })} />",
    },
    {
      code: "<foo className={classNames({ [dynamicKey]: true, 'flex-row': condition })} />",
    },
  ],

  invalid: [
    {
      code: "<foo className={sprout.classNames('flex_row')} />",
      output: "<foo className={sprout.classNames('flex-row')} />",
      errors: [
        {
          message: "'flex_row' is deprecated. You should use 'flex-row' instead.",
          type: "CallExpression",
        },
      ],
    },
    {
      code: `classNames(
        ...CONTENT_PROPS_TOKEN,
        "border_b_default",
      )`,
      output: `classNames(
        ...CONTENT_PROPS_TOKEN,
        "border-b-default",
      )`,
      errors: [
        {
          message: "'border_b_default' is deprecated. You should use 'border-b-default' instead.",
          type: "CallExpression",
        },
      ],
    },
    {
      code: "<foo className={classNames('row', 'flex_col')} />",
      output: "<foo className={classNames('flex-row', 'flex-col')} />",
      errors: [
        {
          message: "'row' is deprecated. You should use 'flex-row' instead.",
          type: "CallExpression",
        },
        {
          message: "'flex_col' is deprecated. You should use 'flex-col' instead.",
          type: "CallExpression",
        },
      ],
    },
    {
      code: "<foo className={classNames({ 'flex_col': condition, 'border_box': true })} />",
      output: "<foo className={classNames({ 'flex-col': condition, 'border-box': true })} />",
      errors: [
        {
          message: "'flex_col' is deprecated. You should use 'flex-col' instead.",
          type: "CallExpression",
        },
        {
          message: "'border_box' is deprecated. You should use 'border-box' instead.",
          type: "CallExpression",
        },
      ],
    },
    {
      code: "<foo className={classNames({ flex_col: condition, border_box: true })} />",
      output: '<foo className={classNames({ "flex-col": condition, "border-box": true })} />',
      errors: [
        {
          message: "'flex_col' is deprecated. You should use 'flex-col' instead.",
          type: "CallExpression",
        },
        {
          message: "'border_box' is deprecated. You should use 'border-box' instead.",
          type: "CallExpression",
        },
      ],
    },
  ],
});
