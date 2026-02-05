import { type FormEvent, useState } from "react";

import { Switch, type SwitchProps } from "./Switch";

export function UncontrolledSwitchTest(props: SwitchProps) {
  return (
    <div id="component-testing">
      <Switch {...props} />
    </div>
  );
}

export function UncontrolledSwitchFormTest() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
  };
  return (
    <div id="component-testing">
      <form onSubmit={onSubmit}>
        <Switch label="Uncontrolled" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export function ControlledSwitch(props: SwitchProps) {
  const [checked, setChecked] = useState<SwitchProps["checked"]>(false);
  return (
    <div id="component-testing">
      <Switch
        {...props}
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
        }}
      />
    </div>
  );
}

export function ControlledSwitchFormTest() {
  const [checked, setChecked] = useState(false);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    // not resetting checked to false for testing purposes
    // setChecked(false);
  };
  return (
    <div id="component-testing">
      <form onSubmit={onSubmit}>
        <Switch
          label="Controlled"
          checked={checked}
          onChange={(event) => {
            setChecked(event.target.checked);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
