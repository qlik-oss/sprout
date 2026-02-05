import { expect, test } from "@playwright/experimental-ct-react";

import { TabsWithTrackerTest } from "./TabsTest";

test(`should display tracker correctly`, async ({ mount, page }) => {
  await mount(<TabsWithTrackerTest />);
  const tracker = page.getByTestId("tab-tracker");
  const assetsTab = page.getByRole("tab", { name: "Assets" });
  const newAssetsTab = page.getByRole("tab", { name: "New Assets" });
  await expect(tracker).toBeVisible();
  await expect(assetsTab).toBeVisible();
  let width = await tracker.evaluate((el) => el.getBoundingClientRect().width);
  width = Math.floor(width);
  expect(width).toBe(86);

  // change the width of the container should not trigger a change on the tab tracker
  const setLargeWidthButton = page.getByTestId("set-large-width");
  await setLargeWidthButton.click();
  width = await tracker.evaluate((el) => el.getBoundingClientRect().width);
  width = Math.floor(width);
  expect(width).toBe(86);

  // change the title of the active tab should update the tracker width
  const changeTabTitleButton = page.getByTestId("change-tab-title");
  await changeTabTitleButton.click();
  await expect(newAssetsTab).toBeVisible();
  // wait for the tracker to update
  await page.waitForTimeout(20);
  width = await tracker.evaluate((el) => el.getBoundingClientRect().width);
  width = Math.floor(width);
  expect(width).toBe(115);
});
