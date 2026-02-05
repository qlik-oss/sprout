import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import { BreadcrumbTest } from "./BreadcrumbTest";

test("should be a11y", async ({ page, mount }) => {
  await mount(
    <div id="component-testing">
      <BreadcrumbTest />
    </div>,
  );
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  const nav = await page.getByRole("navigation");
  const list = await page.getByRole("list");
  const allLinks = await page.getByRole("link").all();
  const listTag = await list.evaluate((node) => node.tagName);

  expect(allLinks.length).toBe(3);
  // cf a11y documentation
  await expect(nav).toHaveAttribute("aria-label", "breadcrumb");
  await expect(allLinks[2]).toHaveAttribute("aria-current", "page");
  expect(listTag).toBe("OL");
});
