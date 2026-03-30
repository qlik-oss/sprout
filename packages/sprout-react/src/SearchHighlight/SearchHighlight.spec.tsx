import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import { SearchHighlight } from "./SearchHighlight";

test("should be accessible", async ({ mount, page }) => {
  await mount(
    <div id="component-testing">
      <SearchHighlight query="hello">Hello world</SearchHighlight>
    </div>
  );

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("should match when query has trailing space", async ({ mount, page }) => {
  await mount(
    <div id="component-testing">
      <SearchHighlight query="hello ">Hello world</SearchHighlight>
    </div>
  );

  const marks = page.locator("[role='mark']");
  await expect(marks).toHaveCount(1);
  await expect(marks.first()).toHaveText("Hello");
});
