import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import { Badge } from "./Badge";

test("should be accessible", async ({ mount, page }) => {
  const component = await mount(<Badge id="component-testing" />);
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  // express a status that may change
  await component.update(
    <Badge
      id="component-testing"
      variant="alphanumeric"
      text="1"
      role="status"
      aria-live="polite"
    />,
  );
  const updatedAccessibilityScanResults = await getAxeReport(page);
  expect(updatedAccessibilityScanResults.violations).toEqual([]);

  await expect(component).toHaveRole("status");
  await expect(component).toHaveAttribute("aria-live", "polite");
});
