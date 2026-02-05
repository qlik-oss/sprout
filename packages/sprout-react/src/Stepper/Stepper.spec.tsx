import { expect, test } from "@playwright/experimental-ct-react";

import { Stepper } from ".";
import { getAxeReport } from "../PlaywrightUtils";

test(`Stepper be is accessible`, async ({ page, mount }) => {
  await mount(
    <div id="component-testing">
      <Stepper.Container orientation="horizontal" currentStepIndex={1}>
        <Stepper.Step text="First" onClick={() => {}} />
        <Stepper.Step text="Second" />
        <Stepper.Step text="Third" />
        <Stepper.Step text="Last" />
      </Stepper.Container>
      ,
    </div>,
  );

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  const ol = await page.getByRole("list");
  const li = await page.getByRole("listitem").all();
  const btn = await li[0].getByRole("button");

  await expect(ol).toBeVisible();
  expect(li.length).toBe(4);
  await expect(li[0]).toHaveAttribute("aria-current", "false");
  await expect(li[1]).toHaveAttribute("aria-current", "step");
  await expect(li[2]).toHaveAttribute("aria-current", "false");
  await expect(li[3]).toHaveAttribute("aria-current", "false");

  await expect(ol).toHaveAttribute("data-orientation", "horizontal");

  await expect(btn).toBeVisible();
});
