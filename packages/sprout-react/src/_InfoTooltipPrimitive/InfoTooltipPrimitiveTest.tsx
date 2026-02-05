import { useState } from "react";

import { InfoTooltipPrimitive } from "./InfoTooltipPrimitive";

export function InfoTooltipInFormTest() {
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
        <InfoTooltipPrimitive
          data-testid="info-icon"
          data-clicked={clicked}
          title="Info Tooltip Primitive"
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
