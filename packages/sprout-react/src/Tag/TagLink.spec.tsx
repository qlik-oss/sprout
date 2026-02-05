import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import { TagButton, TagLink } from "./TagLink";

test("should TagLink wrap the tag in a link", async ({ mount, page }) => {
  const component = await mount(
    <TagLink href="#" text="Tag" id="component-testing" />,
  );

  await expect(component).toBeVisible();
  const link = page.getByRole("link");

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  await expect(link).toBeVisible();
  await expect(link).toHaveText("Tag");
});

test("should TagButton wrap the tag in a button", async ({ mount, page }) => {
  const component = await mount(
    <TagButton onClick={() => {}} text="Tag" id="component-testing" />,
  );

  await expect(component).toBeVisible();
  const button = page.getByRole("button");

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  await expect(button).toBeVisible();
  await expect(button).toHaveText("Tag");
});
