import { expect, test } from "@playwright/experimental-ct-react";

import { InfoPopoverInFormTest } from "./InfoPopoverPrimitiveTest";

test("clicking the tooltip inside a label shows popover and does not submit the form", async ({
  mount,
  page,
}) => {
  await mount(<InfoPopoverInFormTest />);
  const form = page.getByTestId("form");
  const popoverButton = page.getByTestId("info-popover-button");
  const submitButton = page.getByTestId("submit-button");

  await popoverButton.click();

  // THEN Popover content should be rendered
  const popoverContent = page.getByText("Info Popover Primitive");
  await expect(popoverContent).toBeVisible();

  // AND form should not be submitted when clicking the info button
  await expect(form).toHaveAttribute("data-submitted", "0");
  await expect(popoverButton).toHaveAttribute("data-clicked", "1");

  // WHEN clicking submit button
  // THEN the form should be submitted
  await submitButton.click();
  await expect(form).toHaveAttribute("data-submitted", "1");
  await expect(popoverButton).toHaveAttribute("data-clicked", "1");
});
