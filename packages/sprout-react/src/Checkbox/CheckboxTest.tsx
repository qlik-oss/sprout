import { type ChangeEvent, useState } from "react";

import { Checkbox, CheckboxGroup, type CheckboxProps } from ".";
import { Button } from "../Button";

export function ControlledCheckboxTest(props: CheckboxProps) {
  const [checked, setChecked] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <Checkbox {...props} checked={checked} onChange={handleChange} />
      <p>{checked ? "I am checked" : "I am not checked"}</p>
    </>
  );
}

export function CheckboxGroupInForm() {
  const [submitted, setSubmitted] = useState(0);
  const [clicked, setClicked] = useState(0);

  return (
    <form
      data-testid="form"
      data-submitted={submitted}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted((s) => s + 1);
      }}
    >
      <CheckboxGroup
        label="Checkbox group"
        data-testid="checkbox-group"
        data-clicked={clicked}
        infoIconTooltip="This is a checkbox group"
        onClick={() => {
          setClicked((s) => s + 1);
        }}
      >
        <Checkbox
          data-testid="terms"
          label="I agree to the terms and conditions"
        />
        <Checkbox
          data-testid="newsletter"
          label="I want to subscribe the newsletter"
        />
      </CheckboxGroup>

      <Button data-testid="submit-button" type="submit" label="Submit" />
    </form>
  );
}
