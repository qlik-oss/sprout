import { expect, test } from "@playwright/experimental-ct-react";

import { InlineEdit } from ".";
import { Modal } from "../Modal";
import { getAxeReport } from "../PlaywrightUtils";
import { KEYBOARD_KEYS } from "../Utils/keyboardKeys";
import {
  InlineEditHorizontalRowTest,
  InlineEditTextFieldOverflowTest,
} from "./InlineEditTest";

test(`should InlineEdit.TextField be accessible`, async ({ mount, page }) => {
  await mount(
    <InlineEdit.TextField
      aria-label="Edit color"
      id="component-testing"
      defaultValue="value"
    />
  );

  const text = page.getByText("value");
  await expect(text).toBeVisible();

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
  // click on the button

  const button = page.getByRole("button");
  await button.click();

  const accessibilityScanResultsClicked = await getAxeReport(page);
  expect(accessibilityScanResultsClicked.violations).toEqual([]);
});

test("should let me edit the content", async ({ mount, page }) => {
  await mount(
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        boxSizing: "border-box",
        padding: "var(--sprout-common-spacing-xl)",
        inlineSize: "300px",
      }}
    >
      <InlineEdit.TextField
        aria-label="Edit color"
        id="component-testing"
        defaultValue="value"
        showFormButtons
      />
    </div>
  );

  const button = page.getByRole("button");
  const input = page.getByRole("textbox");
  const submitButton = page.getByLabel("Save");

  await button.click();
  await expect(input).toBeVisible();
  await expect(input).toBeFocused();
  await input.fill("new value");
  await expect(input).toHaveValue("new value");
  await submitButton.click();

  await expect(button).toBeVisible();
  await expect(button).toHaveText("new value");

  // now with the keyboard
  await button.focus();
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(input).toBeVisible();
  await expect(input).toBeFocused();
  await input.fill("new value with keyboard");
  await expect(input).toHaveValue("new value with keyboard");
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(input).not.toBeVisible();
  await expect(button).toBeVisible();
  await expect(button).toHaveText("new value with keyboard");

  // try to cancel it
  await button.focus();
  await expect(button).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(input).toBeVisible();
  await input.fill("new value to cancel");
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(input).not.toBeVisible();
  await expect(button).toHaveText("value");
  await expect(button).toBeVisible();
  await expect(button).toBeFocused();
  // cancel use the defaultValue to reset the value
  await expect(button).toHaveText("value");
});

test("should close and cancel when go outside", async ({ mount, page }) => {
  await mount(
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        boxSizing: "border-box",
        padding: "var(--sprout-common-spacing-xl)",
        inlineSize: "300px",
      }}
    >
      <div data-testid="outside">outside</div>
      <InlineEdit.TextField
        aria-label="Edit color"
        defaultValue="value"
        showFormButtons
        errorMessages={["foo"]}
        blurAction="cancel"
      />
      <button type="button" data-testid="test-button">
        click me
      </button>
    </div>
  );

  const view = page.getByTestId("view");
  const outside = page.getByTestId("outside");
  const input = page.getByRole("textbox");
  const error = page.getByRole("status");
  const button = page.getByTestId("test-button");
  const cancelButton = page.getByRole("button", { name: "Cancel" });
  const submitButton = page.getByRole("button", { name: "Save" });

  await view.click();
  await expect(input).toBeVisible();
  await input.fill("new value to cancel");
  const pos = await outside.boundingBox();
  await page.mouse.click(pos?.x || 0 + 10, pos?.y || 0 + 10);
  await expect(input).not.toBeVisible();
  await expect(view).toHaveText("value");

  //check if not close when click the error message
  await view.click();
  await expect(input).toBeVisible();
  await input.fill("new value to cancel");
  await error.click();
  await expect(input).toBeVisible();
  await expect(input).toHaveValue("new value to cancel");

  await outside.click();
  await expect(input).not.toBeVisible();
  await expect(view).toHaveText("value");

  // check tab navigation which should cancel
  await view.focus();
  await expect(view).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(button).toBeFocused();
  await view.click();
  await expect(input).toBeFocused();
  await input.fill("new value to cancel");
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(cancelButton).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(submitButton).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(input).not.toBeVisible();
  await expect(view).toBeFocused();
  await expect(view).toHaveText("value");
});

test('should save on blur/click outside with the props "blurAction" set to "save"', async ({
  mount,
  page,
}) => {
  await mount(
    <div
      style={{
        inlineSize: "300px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        padding: "var(--sprout-common-spacing-xl)",
      }}
    >
      <InlineEdit.TextField
        aria-label="Edit color"
        defaultValue="value"
        blurAction="save"
        data-testid="test-textfield"
      />
      <button type="button" data-testid="test-button">
        click me
      </button>
    </div>
  );

  const view = page.getByTestId("test-textfield.view");
  const input = page.getByRole("textbox");
  const button = page.getByTestId("test-button");

  await view.click();
  await expect(input).toBeVisible();
  await input.fill("new value to save");
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(input).not.toBeVisible();
  await expect(view).toHaveText("new value to save");

  await view.click();
  await expect(input).toBeVisible();
  await input.fill("new value bis to save");
  const pos = await button.boundingBox();
  const x = Math.floor(pos?.x || 0) + Math.floor(pos?.width || 100) / 2;
  const y = Math.floor(pos?.y || 0) + Math.floor(pos?.height || 10 / 2);
  await page.mouse.click(x, y);
  await expect(input).not.toBeVisible();
  await expect(view).toHaveText("new value bis to save");

  // check if escape still cancel and enter save

  await view.click();
  await expect(input).toBeVisible();
  await input.fill("new value");
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(input).not.toBeVisible();
  // it uses  the defaultValue
  await expect(view).toHaveText("value");

  await view.click();
  await expect(input).toBeVisible();
  await input.fill("new value");
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(input).not.toBeVisible();
  await expect(view).toHaveText("new value");
});

test("should be able to see focus state when rendered in a modal", async ({
  mount,
  page,
}) => {
  await mount(
    <Modal visible headerTitle="Test Modal">
      <InlineEdit.TextField
        aria-label="Edit value"
        defaultValue="value"
        data-testid="test-textfield"
      />
    </Modal>
  );

  const view = page.getByTestId("test-textfield.view");
  const input = page.getByRole("textbox");

  await view.click();
  await expect(input).toBeVisible();
  await expect(input).toBeFocused();
});

test("should close when scrolled horizontally", async ({ mount, page }) => {
  await mount(<InlineEditTextFieldOverflowTest />);

  const view = page.getByTestId("test-textfield-scroll.view");
  const input = page.getByRole("textbox");
  const scrollContainer = page.locator("#component-testing");

  // expect overflow to be scrollable
  await expect(scrollContainer).toHaveCSS("overflow", "auto");

  // Open the textfield
  await view.click();
  await expect(input).toBeVisible();

  // Wait for scroll listener to be attached (100ms delay in InlineEditPrimitive)
  await page.waitForTimeout(150);

  // Scroll horizontally
  await scrollContainer.evaluate((element) => {
    element.dispatchEvent(new Event("scroll", { bubbles: true }));
  });

  // Verify the input closes
  await expect(input).not.toBeVisible();
});

test("should close when scrolled vertically", async ({ mount, page }) => {
  await mount(<InlineEditTextFieldOverflowTest />);

  const view = page.getByTestId("test-textfield-scroll.view");
  const input = page.getByRole("textbox");
  const scrollContainer = page.locator("#component-testing");

  // Open the textfield
  await view.click();
  await expect(input).toBeVisible();

  // Wait for scroll listener to be attached (100ms delay in InlineEditPrimitive)
  await page.waitForTimeout(150);

  // Scroll vertically
  await scrollContainer.evaluate((element) => {
    element.dispatchEvent(new Event("scroll", { bubbles: true }));
  });

  // Verify the input closes
  await expect(input).not.toBeVisible();
});

test("should scroll field into view when clicking on barely visible field", async ({
  mount,
  page,
}) => {
  await mount(<InlineEditHorizontalRowTest />);

  const field1View = page.getByTestId("inline-edit-field-1.view");
  const scrollContainer = page.locator("#component-testing");

  await scrollContainer.evaluate((el) => {
    const element = el as HTMLElement;
    element.scrollLeft = element.scrollWidth;
  });

  // Verify the field 1 text is not in viewport
  const field1Span = field1View.locator("span").first();
  await expect(field1Span).not.toBeInViewport();

  // click on the very end of the field 1 which should be barely visible
  await page.mouse.click(20, 60);
  // expect the field 1 to be scrolled into view
  await expect(field1Span).toBeInViewport();
});

test("should not close when reaching end of container with long content", async ({
  mount,
  page,
}) => {
  await mount(<InlineEditTextFieldOverflowTest />);

  const view = page.getByTestId("test-textfield-scroll.view");
  const input = page.getByRole("textbox");
  await view.click();
  await expect(input).toBeVisible();
  await expect(input).toBeFocused();

  // Wait for scroll listener to be attached (100ms delay in InlineEditPrimitive)
  await page.waitForTimeout(150);

  await input.fill(
    "this is a very long value that should force horizontal scrolling inside the text field component"
  );

  await input.evaluate((element) => {
    const inputElement = element as HTMLInputElement;
    inputElement.scrollLeft = inputElement.scrollWidth;
    inputElement.dispatchEvent(new Event("scroll", { bubbles: true }));
  });

  await expect(input).toBeVisible();
  await expect(input).toBeFocused();
});
