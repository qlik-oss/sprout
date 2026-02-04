import { expect, test } from "@playwright/experimental-ct-react";

import { Toast } from ".";
import { getAxeReport } from "../PlaywrightUtils";

test(`should Toast text be accessible`, async ({ mount, page }) => {
  await mount(
    <Toast.Container placement="top" id="component-testing">
      <Toast.Content message="Toast" onClose={() => {}} />
    </Toast.Container>,
  );

  const text = page.getByText("Toast");
  await expect(text).toBeVisible();

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  await page.getByRole("button").click();
  await expect(text).not.toBeVisible();
});
