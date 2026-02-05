import { expect, test } from "@playwright/experimental-ct-react";

import { InlineEdit } from ".";
import { Modal } from "../Modal";
import { getAxeReport } from "../PlaywrightUtils";
import { KEYBOARD_KEYS } from "../Utils/keyboardKeys";

test(`should InlineEdit.TextField be accessible`, async ({ mount, page }) => {
  await mount(
    <InlineEdit.TextField
      aria-label="Edit color"
      id="component-testing"
      defaultValue="value"
    />,
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
    </div>,
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
    </div>,
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
    </div>,
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
    </Modal>,
  );

  const view = page.getByTestId("test-textfield.view");
  const input = page.getByRole("textbox");

  await view.click();
  await expect(input).toBeVisible();
  await expect(input).toBeFocused();
});
