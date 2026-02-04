import rule from "./logical-properties.mjs";
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

/**
 * Test case format:
 * 1. `code`   – the input code to be tested.
 * 2. `output` – the expected code after autofix (if applicable).
 * 3. `errors` – the expected error(s) reported by the rule.
 *
 * @see https://eslint.org/docs/latest/integrate/nodejs-api#ruletester
 *
 */

ruleTester.run("logical-properties/no-physical-properties", rule, {
  valid: [
    {
      code: "function Component() { return <div style={{ blockSize: '100px' }} />;}",
    },
    {
      code: "function Component() { return <div style={{ inlineSize: '50%', marginInlineEnd: '8px' }} />;}",
    },
    {
      code: "function Component() { return <div style={{ paddingBlockStart: 12, paddingBlockEnd: 24 }} />;}",
    },
    {
      code: "function Component() { return <div style={{ borderInlineStartWidth: 2, borderInlineEndColor: 'red' }} />;}",
    },
    {
      code: "function Component() { return <div style={{ insetBlockStart: 0, insetInlineEnd: 0 }} />;}",
    },
  ],
  invalid: [
    // height -> blockSize
    {
      code: "function Component() { return <div style={{ height: '100px' }} />;}",
      output: "function Component() { return <div style={{ blockSize: '100px' }} />;}",
      errors: ["Use logical property 'blockSize' instead of physical property 'height'."],
    },
    // height + marginLeft
    {
      code: "function Component() { return <div style={{ height: '100px', marginLeft: '10px' }} />;}",
      output: "function Component() { return <div style={{ blockSize: '100px', marginInlineStart: '10px' }} />;}",
      errors: [
        "Use logical property 'blockSize' instead of physical property 'height'.",
        "Use logical property 'marginInlineStart' instead of physical property 'marginLeft'.",
      ],
    },
    // width -> inlineSize
    {
      code: "function Component() { return <div style={{ width: '75%' }} />;}",
      output: "function Component() { return <div style={{ inlineSize: '75%' }} />;}",
      errors: ["Use logical property 'inlineSize' instead of physical property 'width'."],
    },
    // marginRight -> marginInlineEnd
    {
      code: "function Component() { return <div style={{ marginRight: '1rem' }} />;}",
      output: "function Component() { return <div style={{ marginInlineEnd: '1rem' }} />;}",
      errors: ["Use logical property 'marginInlineEnd' instead of physical property 'marginRight'."],
    },
    // paddingTop -> paddingBlockStart
    {
      code: "function Component() { return <div style={{ paddingTop: 10 }} />;}",
      output: "function Component() { return <div style={{ paddingBlockStart: 10 }} />;}",
      errors: ["Use logical property 'paddingBlockStart' instead of physical property 'paddingTop'."],
    },
    // borderLeftWidth -> borderInlineStartWidth
    {
      code: "function Component() { return <div style={{ borderLeftWidth: 3 }} />;}",
      output: "function Component() { return <div style={{ borderInlineStartWidth: 3 }} />;}",
      errors: ["Use logical property 'borderInlineStartWidth' instead of physical property 'borderLeftWidth'."],
    },
    // left/top positioning -> insetInlineStart / insetBlockStart
    {
      code: "function Component() { return <div style={{ position: 'absolute', left: 0, top: 0 }} />;}",
      output:
        "function Component() { return <div style={{ position: 'absolute', insetInlineStart: 0, insetBlockStart: 0 }} />;}",
      errors: [
        "Use logical property 'insetInlineStart' instead of physical property 'left'.",
        "Use logical property 'insetBlockStart' instead of physical property 'top'.",
      ],
    },
    // Multiple fixes combined
    {
      code: "function Component() { return <div style={{ width: '10rem', marginLeft: '2ch', paddingBottom: '4px' }} />;}",
      output:
        "function Component() { return <div style={{ inlineSize: '10rem', marginInlineStart: '2ch', paddingBlockEnd: '4px' }} />;}",
      errors: [
        "Use logical property 'inlineSize' instead of physical property 'width'.",
        "Use logical property 'marginInlineStart' instead of physical property 'marginLeft'.",
        "Use logical property 'paddingBlockEnd' instead of physical property 'paddingBottom'.",
      ],
    },
  ],
});
