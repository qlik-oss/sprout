import { expect, test } from "@playwright/experimental-ct-react";

import { Thumbnail } from ".";
import { getAxeReport } from "../PlaywrightUtils";

test(`should Toast text be accessible`, async ({ mount, page }) => {
  await mount(
    <Thumbnail type="icon" id="component-testing">
      <svg data-testid="icon" />
    </Thumbnail>,
  );

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  const icon = page.getByTestId("icon");
  await expect(icon).toBeVisible();
});
