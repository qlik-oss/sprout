import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import { PanelResizeTest, PanelTest } from "./PanelTest";

test.use({
  viewport: { width: 1024, height: 768 },
});

test(`should be accessible`, async ({ mount, page }) => {
  await mount(<PanelTest />);

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("should be able to resize the panel", async ({ mount, page }) => {
  await mount(<PanelResizeTest />);

  const resizeBtn = page.getByRole("button", { name: "Resize panel" });

  await resizeBtn.hover();
  await page.mouse.down();
  await page.mouse.move(200, 130, { steps: 10 });
  await page.mouse.up();

  let newPos = await resizeBtn.boundingBox();
  expect(Math.floor(newPos?.x || 0)).toBe(199);
  expect(Math.floor(newPos?.y || 0)).toBe(9);

  await resizeBtn.hover();
  await page.mouse.down();
  await page.mouse.move(280, 130, { steps: 10 });
  await page.mouse.up();

  newPos = await resizeBtn.boundingBox();
  expect(Math.floor(newPos?.x || 0)).toBe(255); // with padding
  expect(Math.floor(newPos?.y || 0)).toBe(9);
});

test("should support resize with keyboard", async ({ mount, page }) => {
  await mount(<PanelResizeTest />);

  const resizeBtn = page.getByRole("button", { name: "Resize panel" });
  const position = await resizeBtn.boundingBox();
  const x = Math.floor(position?.x || 0);

  await resizeBtn.focus();
  await page.keyboard.down("ArrowRight");
  await page.keyboard.down("ArrowRight");
  await page.keyboard.down("ArrowRight");
  await page.keyboard.down("ArrowRight");
  await page.keyboard.down("ArrowRight");
  await page.keyboard.down("ArrowRight");
  await page.keyboard.down("ArrowRight");
  await page.keyboard.down("ArrowRight");
  await page.keyboard.down("ArrowRight");
  await page.keyboard.down("ArrowRight");

  const newPos = await resizeBtn.boundingBox();
  expect(Math.floor(newPos?.x || 0)).toBeGreaterThan(x + 10 * 10);
});
