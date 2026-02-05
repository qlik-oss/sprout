import { expect, test } from "@playwright/experimental-ct-react";

import { ButtonGroup } from ".";
import { Button } from "../Button";
import { getAxeReport } from "../PlaywrightUtils";

test(`should link support a11y rules`, async ({ page, mount }) => {
  const component = await mount(
    <ButtonGroup id="component-testing">
      <Button label="First" />
      <Button label="Second" />
      <Button label="Third" />
      <Button label="Last" />
    </ButtonGroup>,
  );
  const buttons = await page.getByRole("button").all();

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  expect(buttons.length).toBe(4);
  await expect(component).toHaveAttribute("role", "group");
});
