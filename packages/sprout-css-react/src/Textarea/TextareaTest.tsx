import { useState } from "react";

import { Textarea, type TextareaProps } from ".";

export function TextareaTest(props: TextareaProps) {
  const [value, setValue] = useState("");
  let controlledProps: TextareaProps = {};
  // eslint-disable-next-line react/destructuring-assignment
  if (!props.defaultValue) {
    controlledProps = {
      value,
      onChange: (e) => {
        setValue(e.target.value);
      },
    };
  }
  return (
    <div id="component-testing">
      <Textarea {...props} {...controlledProps} />
    </div>
  );
}
