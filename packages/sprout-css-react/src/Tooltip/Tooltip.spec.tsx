import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import {
  ControlledClickTooltip,
  MultipleTooltipsTest,
  TooltipOverflowTest,
  TooltipSimpleTest,
  TooltipTest,
  TooltipWithRefTest,
} from "./TooltipTest";

type RectangleData = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const TITLE = [
  "this is a tooltip",
  "Sed nisi aliquam nibh Cursus malesuada et pharetra sodales",
];

test(`should manage placement and arrow when on corners with`, async ({
  mount,
  page,
}) => {
  await mount(<TooltipSimpleTest />);

  const component = page.getByRole("button");
  const tooltip = page.getByRole("tooltip"); // wait for tooltip to appear
  await expect(component).toBeVisible();
  await expect(tooltip).not.toBeVisible();

  await component.hover(); // hover to show tooltip
  await expect(tooltip).toBeVisible();
  const arrow = tooltip.locator("css=svg");
  // get the position of the arrow on screen
  const arrowRect: RectangleData = await arrow.evaluate((node) => {
    return node.getBoundingClientRect();
  });
  // should be on the bottom of the button
  expect(Math.floor(arrowRect.x)).toBeLessThanOrEqual(50);
  expect(Math.floor(arrowRect.x)).toBeGreaterThanOrEqual(25);
  expect(Math.floor(arrowRect.y)).toBe(41);
});

test("should manage overflow", async ({ mount, page }) => {
  await mount(<TooltipOverflowTest title={TITLE[1]} />);
  const component = page.getByRole("button");
  await expect(component).toBeVisible();
  await component.hover(); // hover to show tooltip
  const tooltip = page.getByRole("tooltip"); // wait for tooltip to appear
  const tooltipRect: RectangleData = await tooltip.evaluate((node) => {
    return node.getBoundingClientRect();
  });
  expect(Math.floor(tooltipRect.x)).toBe(8); // last change comes from box-sizing: border-box
  expect(Math.floor(tooltipRect.y)).toBe(70); // depends on the height of the root box
  expect(Math.floor(tooltipRect.width)).toBe(256); // === max-width
  expect(Math.floor(tooltipRect.height)).toBe(40); // depends on the content
});

test(`should be accessible`, async ({ mount, page }) => {
  await mount(<TooltipOverflowTest title={TITLE[0]} />);

  const component = page.getByRole("button");
  await expect(component).toBeVisible();
  await component.hover(); // hover to show tooltip
  const tooltip = page.getByRole("tooltip"); // wait for tooltip to appear
  await page.waitForTimeout(700);
  await expect(tooltip).toBeVisible();
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  await page.keyboard.press("Escape");
  await expect(tooltip).not.toBeVisible();
});

test("should forwardRef", async ({ mount, page }) => {
  await mount(<TooltipWithRefTest />);
  const button = page.getByRole("button");
  await expect(button).toHaveText("Hello world");
});

test("should not be displayed if title is not provided", async ({
  mount,
  page,
}) => {
  await mount(<TooltipOverflowTest title={undefined} />);

  const component = page.getByRole("button");
  await expect(component).toBeVisible();
  await component.hover(); // hover to show tooltip
  const tooltip = page.getByRole("tooltip"); // wait for tooltip to appear
  await expect(tooltip).not.toBeVisible();
});

test("should respect controlled open state", async ({ mount, page }) => {
  await mount(<ControlledClickTooltip />);

  const button = page.getByRole("button");
  const tooltip = page.getByRole("tooltip");
  await expect(button).toBeVisible();
  await expect(tooltip).toBeVisible();
  await expect(tooltip).toHaveText("This should be visible if open is true");
  await expect(tooltip).toHaveAttribute("data-displayed", "true");

  await button.hover();
  await expect(tooltip).toBeVisible();

  // move mouse away from hovered button
  await page.mouse.move(0, 0);
  await expect(tooltip).toBeVisible();

  await button.click();
  await expect(tooltip).not.toBeVisible();

  await button.hover();
  await expect(tooltip).not.toBeVisible();
});

test("should have an initial delay on first hover and cooldown", async ({
  mount,
  page,
}) => {
  await mount(<MultipleTooltipsTest />);

  const button1 = page.getByRole("button", { name: "button-1" });
  const button2 = page.getByRole("button", { name: "button-2" });
  const tooltip = page.getByRole("tooltip");

  await expect(button1).toBeVisible();
  await expect(button2).toBeVisible();
  await expect(tooltip).not.toBeVisible();

  await button1.hover();
  await expect(tooltip).not.toBeVisible({ timeout: 250 });
  await expect(tooltip).toBeVisible({ timeout: 700 });

  await button2.hover();
  await expect(tooltip).toBeVisible({ timeout: 400 });

  await page.mouse.move(0, 0);
  await page.waitForTimeout(2000);

  await expect(tooltip).not.toBeVisible();
  await button2.hover();
  await expect(tooltip).not.toBeVisible({ timeout: 250 });
  await expect(tooltip).toBeVisible({ timeout: 700 });
});

test("should disappear on unhover after delay", async ({ mount, page }) => {
  await mount(<TooltipTest title={TITLE[0]} />);

  const button = page.getByRole("button");
  const tooltip = page.getByRole("tooltip");

  await expect(button).toBeVisible();
  await expect(tooltip).not.toBeVisible();

  await button.hover();
  await expect(tooltip).toBeVisible({ timeout: 700 });

  await page.mouse.move(0, 0);
  await button.hover();
  await page.mouse.move(0, 0);
  await expect(tooltip).not.toBeVisible({ timeout: 700 });
});
