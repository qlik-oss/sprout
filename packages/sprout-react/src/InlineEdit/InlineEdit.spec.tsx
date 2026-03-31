import { expect, test } from "@playwright/experimental-ct-react";

import { KEYBOARD_KEYS } from "../Utils/keyboardKeys";
import { InlineEditModalFocusTest } from "./InlineEditTest";

test("should focus next inline edit when pressing tab", async ({
  mount,
  page,
}) => {
  await mount(<InlineEditModalFocusTest />);

  const modal = page.getByRole("dialog");
  const textFieldView = page.getByTestId("test-textfield-modal.view");
  const selectFieldView = page.getByTestId("test-select-modal.view");
  const multiselectView = page.getByTestId("test-multiselect-modal.view");

  await expect(modal).toBeVisible();

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(textFieldView).toBeFocused();

  // Once tabbing out of edit mode, it should not save changes and should focus the next field

  // 1. TextField
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  const textFieldInput = page.getByRole("textbox");
  await expect(textFieldInput).toBeVisible();
  await textFieldInput.fill("new value");
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(textFieldView).toHaveText("Edit me");
  await expect(selectFieldView).toBeFocused();

  // 2. Select
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  const selectListbox = page.getByRole("listbox");
  await expect(selectListbox).toBeVisible();
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(multiselectView).toBeFocused();
  await expect(selectFieldView).toHaveText("Red");

  // 3. MultiSelect
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  const multiselectListbox = page.getByRole("listbox");
  await expect(multiselectListbox).toBeVisible();
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(multiselectView).toHaveText("Red");
});

test("should exit edit mode when pressing escape", async ({ mount, page }) => {
  await mount(<InlineEditModalFocusTest />);

  const modal = page.getByRole("dialog");
  const textFieldView = page.getByTestId("test-textfield-modal.view");
  const selectFieldView = page.getByTestId("test-select-modal.view");
  const multiselectView = page.getByTestId("test-multiselect-modal.view");

  await expect(modal).toBeVisible();

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(textFieldView).toBeFocused();

  // 1. TextField
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  const textFieldInput = page.getByRole("textbox");
  await expect(textFieldInput).toBeVisible();
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(textFieldView).toHaveText("Edit me");

  // 2. Select
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  const selectListbox = page.getByRole("listbox");
  await expect(selectListbox).toBeVisible();
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(selectFieldView).toHaveText("Red");

  // 3. MultiSelect
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  const multiselectListbox = page.getByRole("listbox");
  await expect(multiselectListbox).toBeVisible();
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(multiselectView).toHaveText("Red");
});
