import { type FormEvent, useState } from "react";

import { TextField, type TextFieldProps } from "./TextField";

export function TextFieldTest(props: TextFieldProps) {
  return (
    <div id="component-testing">
      <TextField {...props} />
    </div>
  );
}

export function SearchTextFieldTest() {
  const [reason, setReason] = useState<string | undefined>();
  return (
    <div id="component-testing">
      <TextField
        type="search"
        onChange={(ev, ereason) => {
          setReason(ereason);
        }}
      />
      <span data-testid="reason">{reason}</span>
    </div>
  );
}

export function ControlledSearchTextFieldTest() {
  const [value, setValue] = useState<string>("");
  const [reason, setReason] = useState<string | undefined>();
  return (
    <div id="component-testing">
      <TextField
        type="search"
        value={value}
        onChange={(ev, ereason) => {
          setValue(ev.target.value);
          setReason(ereason);
        }}
      />
      <span data-testid="reason">{reason}</span>
    </div>
  );
}

export function UncontrolledTextFieldFormTest(props: TextFieldProps) {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
  };
  return (
    <div id="component-testing">
      <form onSubmit={onSubmit}>
        <TextField {...props} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export function ControlledTextFieldTest({ value, ...props }: TextFieldProps) {
  const [local, setLocal] = useState<typeof value>(value);
  return (
    <div id="component-testing">
      <TextField
        {...props}
        value={local}
        onChange={(event) => {
          setLocal(event.target.value);
        }}
      />
    </div>
  );
}

export function ControlledTextFieldFormTest({
  value,
  ...props
}: TextFieldProps) {
  const [local, setLocal] = useState<typeof value>(value);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
  };
  return (
    <div id="component-testing">
      <form onSubmit={onSubmit}>
        <TextField
          {...props}
          value={local}
          onChange={(event) => {
            setLocal(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
