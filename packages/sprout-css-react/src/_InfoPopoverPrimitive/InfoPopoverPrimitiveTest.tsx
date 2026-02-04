import { useState } from "react";

import { InfoPopoverPrimitive } from "./InfoPopoverPrimitive";

export function InfoPopoverInFormTest() {
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
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        Label text
        <InfoPopoverPrimitive
          data-testid="info-popover-icon"
          data-clicked={clicked}
          content="Info Popover Primitive"
          onClick={() => {
            setClicked((s) => s + 1);
          }}
        />
        <input name="example" />
      </label>

      <button data-testid="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
