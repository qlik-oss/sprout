import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import { ProgressCircular } from "./ProgressCircular";

test(`should be accessible without percent`, async ({ page, mount }) => {
  const component = await mount(<ProgressCircular id="component-testing" />);
  await expect(component).toBeVisible();

  // axe-core tests
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  // HTML structure
  await expect(component).toHaveAttribute("role", "status");
  await expect(component).toHaveAttribute("aria-busy", "true");
});

test(`should be accessible with percent`, async ({ page, mount }) => {
  const component = await mount(
    <ProgressCircular id="component-testing" percent={30} />,
  );
  await expect(component).toBeVisible();

  // axe-core tests
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  // HTML structure
  await expect(component).toHaveAttribute("role", "progressbar");
  await expect(component).toHaveAttribute("aria-valuenow", "30");
});
