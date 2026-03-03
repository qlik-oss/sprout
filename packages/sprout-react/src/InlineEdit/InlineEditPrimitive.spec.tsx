import { expect, test } from "@playwright/experimental-ct-react";

import {
  InlineEditPrimitiveFunctionTest,
  InlineEditPrimitiveJSXTest,
  InlineEditPrimitiveOverflowTest,
} from "./InlineEditTest";

test("works when view/edit are JSX elements", async ({ mount, page }) => {
  await mount(<InlineEditPrimitiveJSXTest />);

  const button = page.getByRole("button");
  await button.click();

  const edit = page.getByTestId("edit-input");
  await expect(edit).toBeVisible();

  const saveButton = page.getByRole("button", { name: /save/i });
  await saveButton.click();

  const view = page.getByTestId("view-content");
  await expect(view).toBeVisible();
});

test("works when view/edit are functions returning JSX", async ({
  mount,
  page,
}) => {
  await mount(<InlineEditPrimitiveFunctionTest />);

  const button = page.getByRole("button");
  await button.click();

  const edit = page.getByTestId("edit-input");
  await expect(edit).toBeVisible();

  const saveButton = page.getByRole("button", { name: /save/i });
  await saveButton.click();

  const view = page.getByTestId("view-content");
  await expect(view).toBeVisible();
});

test("should close when scrolled horizontally", async ({ mount, page }) => {
  await mount(<InlineEditPrimitiveOverflowTest />);

  const view = page.getByTestId("test-primitive-scroll.view");
  const editInput = page.getByTestId("edit-input");
  const scrollContainer = page.locator("#component-testing");

  // expect overflow to be scrollable
  await expect(scrollContainer).toHaveCSS("overflow", "auto");

  // Open the primitive
  await view.click();
  await expect(editInput).toBeVisible();

  // Wait for scroll listener to be attached (100ms delay in InlineEditPrimitive)
  await page.waitForTimeout(150);

  // Scroll horizontally
  await scrollContainer.evaluate((element) => {
    element.dispatchEvent(new Event("scroll", { bubbles: true }));
  });

  // Verify the edit closes
  await expect(editInput).not.toBeVisible();
});

test("should close when scrolled vertically", async ({ mount, page }) => {
  await mount(<InlineEditPrimitiveOverflowTest />);

  const view = page.getByTestId("test-primitive-scroll.view");
  const editInput = page.getByTestId("edit-input");
  const scrollContainer = page.locator("#component-testing");

  // Open the primitive
  await view.click();
  await expect(editInput).toBeVisible();

  // Wait for scroll listener to be attached (100ms delay in InlineEditPrimitive)
  await page.waitForTimeout(150);

  // Scroll vertically
  await scrollContainer.evaluate((element) => {
    element.dispatchEvent(new Event("scroll", { bubbles: true }));
  });

  // Verify the edit closes
  await expect(editInput).not.toBeVisible();
});
