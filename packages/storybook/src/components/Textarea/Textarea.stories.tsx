import {
  Textarea,
  type TextareaProps,
  classNames,
} from "@qlik/sprout-css-react";
import type { Meta } from "@storybook/react-vite";

import { TextareaArgTypes } from "./Textarea.argTypes";

export default {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {},
} as Meta;

const errorMessages = ["Error message 1"];
const longErrorMessage = [
  "A very very very very very very very very long error message",
];
const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.`;
const disableSnap = { chromatic: { disableSnapshot: true } };

export function VisualTest(props: Partial<TextareaProps>) {
  return (
    <div
      className={classNames(
        "flex",
        "flex-col",
        "border-box",
        "w-fit",
        "p-s",
        "w-xs",
      )}
    >
      <Textarea
        id="Textarea1"
        label="Default"
        helpText="help me"
        placeholder="Give me a value"
        defaultValue="This is the textarea's value"
        {...props}
      />
      <Textarea
        id="Textarea-resizable"
        label="Resizable"
        placeholder="Textarea resizable"
        resizable
        {...props}
      />
      <Textarea
        id="Textarea-disabled"
        label="Disabled"
        placeholder="Disabled Textarea"
        disabled
        {...props}
      />
      <Textarea
        id="Textarea-readonly"
        label="Readonly"
        placeholder="Readonly Textarea"
        readOnly
        {...props}
      />
      <Textarea
        id="Textarea-error-message"
        label="Error"
        placeholder="Textarea in error with message"
        defaultValue={LOREM_IPSUM}
        errorMessages={errorMessages}
        {...props}
      />
      <Textarea
        id="Textarea-error"
        label="Error"
        placeholder="Textarea in error"
        hasError
        resizable
        {...props}
      />
      <Textarea
        id="Textarea-max-character-count"
        label="Character Count Empty"
        maxCharacterCount={56}
        value=""
        resizable
        {...props}
      />
      <Textarea
        id="Textarea-max-character-count"
        label="Character count above max limit"
        maxCharacterCount={56}
        value={LOREM_IPSUM}
        resizable
        {...props}
      />
      <Textarea
        id="Textarea-max-character-count-help-text"
        helpText="Max character count and helpText"
        label="Character Count and Label"
        maxCharacterCount={56}
        value=""
        resizable
        {...props}
      />
      <Textarea
        id="Textarea-max-character-count-error-message"
        errorMessages={longErrorMessage}
        label="Character count and error message"
        maxCharacterCount={56}
        value=""
        resizable
        {...props}
      />
    </div>
  );
}

VisualTest.args = {};
VisualTest.argTypes = TextareaArgTypes;

export function Playground(props: TextareaProps) {
  return (
    <div className={classNames("flex", "flex-col", "border-box", "p-s", "w-s")}>
      <Textarea {...props} />
    </div>
  );
}
Playground.args = {
  label: "Label",
  id: "Textarea",
  placeholder: "Placeholder",
  defaultValue: "Value",
  helpText: "help me",
  rows: 4,
  resizable: false,
};
Playground.argTypes = VisualTest.argTypes;
Playground.parameters = disableSnap;
