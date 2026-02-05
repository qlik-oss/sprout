import { expect, test } from "@playwright/experimental-ct-react";

import { AlertModal } from ".";
import { Button } from "../Button";
import { getAxeReport } from "../PlaywrightUtils";

test("should not have overflow with small content", async ({ page, mount }) => {
  await mount(
    <AlertModal
      id="component-testing"
      title="Default AlertModal"
      variant="information"
      visible
      footerRight={<Button variant="primary" label="Ok" onClick={() => {}} />}
    >
      This is a description
    </AlertModal>,
  );
  const modal = page.getByRole("alertdialog");
  await expect(modal).toBeVisible();

  // axe-core
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});
