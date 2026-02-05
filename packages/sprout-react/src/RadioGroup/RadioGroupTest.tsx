import { type FormEvent, useState } from "react";

import { classNames } from "../classNames";
import { Radio, type RadioProps } from "./Radio";
import { RadioGroup } from "./RadioGroup";

const radioGroupProps = {
  name: "radio-group",
  label: "Radio Group",
  helpText: "Select one of the options",
  errorMessages: ["This is an error message"],
  options: [
    { label: "Cat", value: "cat" },
    { label: "Dog", value: "dog" },
    { label: "Horse", value: "horse" },
    { label: "Dodo", value: "dodo", disabled: true },
  ],
};

export function RadioGroupTestA11y() {
  return (
    <div
      className={classNames("p-m", "w_fit-content")}
      data-testid="wrapper"
      id="component-testing"
    >
      <RadioGroup {...radioGroupProps} />
    </div>
  );
}

export function RadioGroupTest() {
  return (
    <div id="component-testing">
      <RadioGroup
        label={
          <h4 className={classNames("font-heading-xs")}>Radio group label </h4>
        }
        options={[
          {
            label: "Option 1",
            value: "option1",
          },
          {
            label: "Option 2",
            value: "option2",
          },
        ]}
      />
    </div>
  );
}

export function RadioTest(props: RadioProps) {
  return (
    <div id="component-testing">
      <Radio {...props} />
    </div>
  );
}

export function UncontrolledRadioGroupFormTest() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
  };
  return (
    <div id="component-testing">
      <form onSubmit={onSubmit}>
        <RadioGroup
          label="Uncontrolled Radio Group"
          name="uncontrolled-radio-group"
        >
          <Radio
            label="Option 1"
            value="option1"
            name="uncontrolled-radio-group"
          />
          <Radio
            label="Option 2"
            value="option2"
            name="uncontrolled-radio-group"
          />
          <Radio
            label="Option 3"
            value="option3"
            name="uncontrolled-radio-group"
          />
        </RadioGroup>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export function ControlledRadio(props: RadioProps) {
  const [checked, setChecked] = useState<RadioProps["checked"]>(false);
  return (
    <div id="component-testing">
      <Radio
        {...props}
        label="Controlled Radio"
        value="controlled-radio"
        name="controlled-radio"
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
        }}
      />
    </div>
  );
}

export function ControlledRadioGroupFromTest() {
  const [selectedValue, setSelectedValue] = useState<string | undefined>();
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    // not resetting selectedValue to undefined for testing purposes
    // setSelectedValue(undefined);
  };
  return (
    <div id="component-testing">
      <form onSubmit={onSubmit}>
        <RadioGroup
          label="Controlled Radio Group"
          name="controlled-radio-group"
        >
          <Radio
            label="Option 1"
            value="option1"
            checked={selectedValue === "option1"}
            name="controlled-radio-group"
            onChange={(event) => {
              setSelectedValue(event.target.value);
            }}
          />
          <Radio
            label="Option 2"
            value="option2"
            checked={selectedValue === "option2"}
            name="controlled-radio-group"
            onChange={(event) => {
              setSelectedValue(event.target.value);
            }}
          />
          <Radio
            label="Option 3"
            value="option3"
            checked={selectedValue === "option3"}
            name="controlled-radio-group"
            onChange={(event) => {
              setSelectedValue(event.target.value);
            }}
          />
        </RadioGroup>
        <button type="submit">Submit</button>
      </form>

      <p>
        Selected value: <code>{selectedValue}</code>
      </p>
    </div>
  );
}
