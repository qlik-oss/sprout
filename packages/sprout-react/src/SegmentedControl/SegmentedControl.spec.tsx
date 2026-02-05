import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import {
  ControlledSegmentedControlTest,
  SegmentedControlTest,
} from "./SegmentedControlTest";

test("SegmentedControl should be accessible", async ({ mount, page }) => {
  await mount(<SegmentedControlTest />);
  const component = page.getByTestId("wrapper");
  const group = page.getByRole("radiogroup");
  const favorited = page.getByRole("radio", { name: "Favorited" });
  const trending = page.getByRole("radio", { name: "Trending" });
  const trendingSpan = trending.locator(" + span");
  const recommended = page.getByRole("radio", { name: "Recommended" });
  const forYou = page.getByRole("radio", { name: "For You" });

  // roles are all ok
  await expect(group).toBeVisible();
  await expect(component).toBeVisible();
  await expect(favorited).toBeVisible();
  await expect(trending).toBeVisible();
  await expect(recommended).toBeVisible();
  await expect(forYou).toBeVisible();
  await expect(forYou).toBeDisabled();

  // keyboard Tab
  await page.keyboard.press("Tab");
  await expect(favorited).toBeFocused();
  await expect(favorited).not.toBeChecked();
  // keyboard Space
  await page.keyboard.press("Space");
  await expect(favorited).toBeChecked();

  // click
  await expect(trending).not.toBeChecked();
  await trendingSpan.click();
  await expect(trending).toBeChecked();

  await page.keyboard.press("ArrowRight");
  await expect(recommended).toBeChecked();
  await expect(recommended).toBeFocused();
  await page.keyboard.press("ArrowLeft");
  await expect(trending).toBeChecked();
  await expect(trending).toBeFocused();
  await page.keyboard.press("ArrowDown");
  await expect(recommended).toBeChecked();
  await expect(recommended).toBeFocused();
  await page.keyboard.press("ArrowUp");
  await expect(trending).toBeChecked();
  await expect(trending).toBeFocused();

  // shift tab move the focus out the radio group so here the body
  await page.keyboard.down("Shift");
  await page.keyboard.press("Tab");
  await page.keyboard.up("Shift");
  await expect(favorited).not.toBeFocused();
  const isBodyFocused = favorited.evaluate(
    () => document.body === document.activeElement,
  );
  expect(isBodyFocused).toBeTruthy();

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  const favoritedSpan = favorited.locator(" + span");

  const bbox = await favoritedSpan.boundingBox();

  if (bbox) {
    const centerX = bbox.x + bbox.width / 2;
    const centerY = bbox.y + bbox.height / 2;

    await page.mouse.move(centerX, centerY);

    await page.pause();

    await page.mouse.click(centerX, centerY);
  }

  await expect(favorited).toBeChecked();
});

test("Controlled SegmentedControl should reflect prop changes", async ({
  mount,
  page,
}) => {
  await mount(<ControlledSegmentedControlTest />);
  const favorited = page.getByRole("radio", { name: "Favorited" });
  const trending = page.getByRole("radio", { name: "Trending" });
  const trendingSpan = trending.locator(" + span");
  const recommended = page.getByRole("radio", { name: "Recommended" });

  await expect(favorited).toBeChecked();
  await trendingSpan.click();
  await expect(trending).toBeChecked();

  await page.keyboard.press("ArrowRight");
  await expect(recommended).toBeChecked();
});

test("should render label if passed", async ({ mount, page }) => {
  await mount(<SegmentedControlTest label="Field Label" />);

  const group = page.getByRole("radiogroup");
  const label = page.locator('label:has-text("Field Label")');

  await expect(group).toBeVisible();
  await expect(label).toBeVisible();

  const labelId = await label.getAttribute("id");

  expect(labelId).toBeTruthy();
  await expect(label).toHaveAttribute("id");
  await expect(group).toHaveAttribute("aria-labelledby", String(labelId));
});
