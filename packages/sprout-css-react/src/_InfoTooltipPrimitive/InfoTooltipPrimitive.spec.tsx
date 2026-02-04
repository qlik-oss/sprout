import { expect, test } from "@playwright/experimental-ct-react";

import { InfoTooltipInFormTest } from "./InfoTooltipPrimitiveTest";

test("clicking the tooltip inside a label does not submit the form", async ({
  mount,
  page,
}) => {
  await mount(<InfoTooltipInFormTest />);
  const form = page.getByTestId("form");
  const tooltipButton = page.getByTestId("info-tooltip-button");
  const submitButton = page.getByTestId("submit-button");

  await tooltipButton.click();

  await expect(form).toHaveAttribute("data-submitted", "0");
  await expect(tooltipButton).toHaveAttribute("data-clicked", "1");

  await submitButton.click();
  await expect(form).toHaveAttribute("data-submitted", "1");
  await expect(tooltipButton).toHaveAttribute("data-clicked", "1");
});
