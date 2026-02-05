import { expect, test } from "@playwright/experimental-ct-react";

import { AlertInline } from ".";
import { getAxeReport } from "../PlaywrightUtils";

test(`should be accessible`, async ({ mount, page }) => {
  const component = await mount(
    <AlertInline
      id="component-testing"
      content="Alert content"
      severity="info"
    />,
  );
  await expect(component).toBeVisible();

  // axe core
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  // HTML structure
  await expect(component).toHaveAttribute("role", "status");
  await expect(component).toHaveAttribute("aria-live", "polite");
});

test("should support role and aria-live props", async ({ mount }) => {
  const component = await mount(
    <AlertInline
      id="component-testing"
      role="alert"
      aria-live="assertive"
      content="Alert content"
      severity="info"
    />,
  );
  await expect(component).toHaveAttribute("role", "alert");
  await expect(component).toHaveAttribute("aria-live", "assertive");
});
