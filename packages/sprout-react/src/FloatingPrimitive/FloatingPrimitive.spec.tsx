import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import { FloatingPrimitive } from "./FloatingPrimitive";
import {
  FloatingPrimitiveAnchorEl,
  MultipleFloatingPrimites,
} from "./FloatingPrimitiveTest";

test(`should FloatingPrimitive with children open on click`, async ({
  mount,
  page,
}) => {
  await mount(
    <FloatingPrimitive
      content={<div data-testid="floating-content">content</div>}
    >
      <button type="button">click me</button>
    </FloatingPrimitive>,
  );

  const content = page.getByTestId("floating-content");
  await expect(content).not.toBeVisible();
  await page.getByRole("button").click();
  await expect(content).toBeVisible();
  const rect = await content.evaluate((node) => {
    const newRect = node.getBoundingClientRect();
    return { left: newRect.left, top: newRect.top };
  });
  expect(rect).toEqual({ left: 8, top: 33 });

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});

test(`should FloatingPrimitive open using anchorPos`, async ({
  mount,
  page,
}) => {
  await mount(
    <FloatingPrimitive
      content={<div data-testid="floating-content">content</div>}
      initialOpen
      anchorPosition={{ left: 20, top: 20 }}
    />,
  );
  const content = page.getByTestId("floating-content");
  await expect(content).toBeVisible();
  const rect = await content.evaluate((node) => {
    const newRect = node.getBoundingClientRect();
    return { left: newRect.left, top: newRect.top };
  });
  expect(rect).toEqual({ left: 20, top: 20 });
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});

test(`should FloatingPrimitive open using anchorEl`, async ({
  mount,
  page,
}) => {
  const component = await mount(
    <FloatingPrimitiveAnchorEl
      wrapBtn
      placement="top-start"
      content={<div data-testid="floating-content">content</div>}
    />,
  );
  const content = page.getByTestId("floating-content");
  await expect(content).not.toBeVisible();
  await page.getByRole("button").click();
  await expect(content).toBeVisible();
  let rect = await content.evaluate((node) => {
    const newRect = node.getBoundingClientRect();
    return { left: newRect.left, top: newRect.top };
  });
  expect(rect).toEqual({ left: 28, top: 6 });
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
  await component.update(
    <FloatingPrimitiveAnchorEl
      placement="bottom-start"
      content={<div data-testid="floating-content">content</div>}
    />,
  );
  await expect(content).not.toBeVisible();
  await page.getByRole("button").click();

  rect = await content.evaluate((node) => {
    const newRect = node.getBoundingClientRect();
    return { left: newRect.left, top: newRect.top };
  });
  expect(rect).toEqual({ left: 8, top: 33 });
});

test(`should FloatingPrimitive close while scrolling on ancestor`, async ({
  mount,
  page,
}) => {
  await mount(
    <div
      style={{
        blockSize: 400,
        inlineSize: "100%",
        overflow: "auto",
        paddingBlockStart: 100,
      }}
    >
      <div style={{ blockSize: 800, inlineSize: "100%" }}>
        <FloatingPrimitive
          hideBackdrop
          disableScrollLock
          content={<div data-testid="floating-content">content</div>}
        >
          <button type="button">click me</button>
        </FloatingPrimitive>
      </div>
    </div>,
  );

  const content = page.getByTestId("floating-content");
  const button = page.getByRole("button");
  await expect(content).not.toBeVisible();
  await button.click();
  await expect(content).toBeVisible();
  await page.mouse.wheel(0, 100);
  await expect(button).toBeVisible();
  await expect(content).not.toBeVisible();
});

test("renders overlay only when open", async ({ mount, page }) => {
  await mount(
    <FloatingPrimitive
      content={<div data-testid="floating-content">content</div>}
    >
      <button type="button">click me</button>
    </FloatingPrimitive>,
  );

  const content = page.getByTestId("floating-content");
  const overlay = page.getByTestId("sprout-floating-overlay");

  await expect(content).not.toBeVisible();
  await expect(overlay).not.toBeVisible();

  await page.getByRole("button").click();

  await expect(content).toBeVisible();
  await expect(overlay).toBeVisible();
});

test("locks page scroll when `disableScrollLock` is false or undefined", async ({
  mount,
  page,
}) => {
  await mount(
    <div
      data-testid="overflow-container"
      style={{ blockSize: 500, overflow: "auto" }}
    >
      <div style={{ blockSize: 800 }}>
        <FloatingPrimitive
          content={<div data-testid="floating-content">content</div>}
        >
          <button type="button">click me</button>
        </FloatingPrimitive>
      </div>
    </div>,
  );

  const container = page.getByTestId("overflow-container");
  const content = page.getByTestId("floating-content");
  const overlay = page.getByTestId("sprout-floating-overlay");

  const isOverflowed = await container.evaluate(
    (el) => el.scrollHeight > el.clientHeight,
  );
  expect(isOverflowed).toBe(true);

  const beforeBodyOverflow = await page.evaluate(
    () => getComputedStyle(document.body).overflow,
  );
  expect(beforeBodyOverflow).not.toBe("hidden");

  await page.getByRole("button").click();

  await expect(overlay).toBeVisible();
  await expect(content).toBeVisible();

  const afterBodyOverflow = await page.evaluate(
    () => getComputedStyle(document.body).overflow,
  );
  expect(afterBodyOverflow).toBe("hidden");

  const beforeScrollY = await page.evaluate(() => window.scrollY);
  await page.mouse.wheel(0, 200);
  const afterScrollY = await page.evaluate(() => window.scrollY);
  expect(afterScrollY).toBe(beforeScrollY);
});

test("should close one by one if multiple are open with overlay", async ({
  mount,
  page,
}) => {
  await mount(<MultipleFloatingPrimites />);
  const fp1 = page.getByTestId("fp-1");
  const fp2 = page.getByTestId("fp-2");
  const fp3 = page.getByTestId("fp-3");
  const fp4 = page.getByTestId("fp-4");

  await expect(fp1).toBeVisible();
  await expect(fp2).toBeVisible();
  await expect(fp3).toBeVisible();
  await expect(fp4).toBeVisible();

  await page.mouse.click(200, 200);
  await expect(fp4).not.toBeVisible();

  await page.mouse.click(200, 200);
  await expect(fp3).not.toBeVisible();

  await page.mouse.click(200, 200);
  await expect(fp2).not.toBeVisible();

  await page.mouse.click(200, 200);
  await expect(fp1).not.toBeVisible();
});

test("should close all if multiple are open without overlay", async ({
  mount,
  page,
}) => {
  await mount(<MultipleFloatingPrimites hideBackdrop disableScrollLock />);
  const fp1 = page.getByTestId("fp-1");
  const fp2 = page.getByTestId("fp-2");
  const fp3 = page.getByTestId("fp-3");
  const fp4 = page.getByTestId("fp-4");

  await expect(fp1).toBeVisible();
  await expect(fp2).toBeVisible();
  await expect(fp3).toBeVisible();
  await expect(fp4).toBeVisible();

  await page.mouse.click(200, 200);
  await expect(fp1).not.toBeVisible();
  await expect(fp2).not.toBeVisible();
  await expect(fp3).not.toBeVisible();
  await expect(fp4).not.toBeVisible();
});
