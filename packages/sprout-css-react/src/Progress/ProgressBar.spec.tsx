import { expect, test } from "@playwright/experimental-ct-react";

import { ProgressBar } from ".";
import { getAxeReport } from "../PlaywrightUtils";

test(`should ProgressBar be accessible`, async ({ mount, page }) => {
  // infinite use case
  const output = await mount(
    <ProgressBar aria-label="WIP" id="component-testing" />,
  );
  const component = page.getByRole("status");
  const progressbar = page.getByRole("progressbar");

  // test HTML structure
  await expect(component).toBeVisible();
  await expect(progressbar).not.toBeVisible();
  await expect(component).toHaveAttribute("aria-busy", "true");

  // axe-core tests
  let accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  // using displayed label and percent
  await output.update(
    <ProgressBar percent={30} label="in progress" id="component-testing" />,
  );
  await expect(component).not.toBeVisible();
  await expect(progressbar).toBeVisible();
  await expect(progressbar).toHaveText("in progress");
  await expect(progressbar).toHaveAttribute("aria-valuenow", "30");

  accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  //using
  await output.update(
    <ProgressBar percent={30} tooltip="in progress" id="component-testing" />,
  );
  await expect(component).not.toBeVisible();
  await expect(progressbar).toBeVisible();
  await expect(progressbar).toHaveAttribute("aria-label", "in progress");

  accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});
