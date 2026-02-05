import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import { KEYBOARD_KEYS } from "../Utils/keyboardKeys";
import {
  ControlledSwitch,
  ControlledSwitchFormTest,
  UncontrolledSwitchFormTest,
  UncontrolledSwitchTest,
} from "./SwitchTest";

test(`should Switch and label be accessible`, async ({ mount, page }) => {
  const component = await mount(<UncontrolledSwitchTest label="foo" />);
  const checkbox = await page.getByRole("switch");

  await expect(component).toBeVisible();
  await expect(checkbox).toBeVisible();

  // HTML Structure
  await expect(checkbox).toHaveAttribute("role", "switch");
  await expect(checkbox).toHaveAttribute("type", "checkbox");
  await expect(checkbox).not.toBeChecked();

  // Mouse usage
  await component.click();
  await expect(checkbox).toBeChecked();
  await component.click();
  await expect(checkbox).not.toBeChecked();

  // Keyboard Navigation
  await checkbox.focus();
  await checkbox.press(KEYBOARD_KEYS.ENTER);
  await expect(checkbox).toBeChecked();
  await checkbox.press(KEYBOARD_KEYS.ENTER);
  await expect(checkbox).not.toBeChecked();
  await checkbox.press(KEYBOARD_KEYS.SPACE);
  await expect(checkbox).toBeChecked();
  await checkbox.press(KEYBOARD_KEYS.SPACE);
  await expect(checkbox).not.toBeChecked();

  // axe core
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});

test(`should Switch and aria-label be accessible`, async ({ mount, page }) => {
  const component = await mount(<UncontrolledSwitchTest aria-label="foo" />);
  const checkbox = await page.getByRole("switch");

  await expect(component).toBeVisible();
  await expect(checkbox).toBeVisible();

  // HTML Structure
  await expect(checkbox).toHaveAttribute("role", "switch");
  await expect(checkbox).toHaveAttribute("type", "checkbox");
  await expect(checkbox).not.toBeChecked();

  // Mouse usage
  await component.click();
  await expect(checkbox).toBeChecked();
  await component.click();
  await expect(checkbox).not.toBeChecked();

  // Keyboard Navigation
  await checkbox.focus();
  await checkbox.press(KEYBOARD_KEYS.ENTER);
  await expect(checkbox).toBeChecked();
  await checkbox.press(KEYBOARD_KEYS.ENTER);
  await expect(checkbox).not.toBeChecked();
  await checkbox.press(KEYBOARD_KEYS.SPACE);
  await expect(checkbox).toBeChecked();
  await checkbox.press(KEYBOARD_KEYS.SPACE);
  await expect(checkbox).not.toBeChecked();

  // axe core
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("should display helpText with label", async ({ mount, page }) => {
  const component = await mount(
    <UncontrolledSwitchTest label="foo" helpText="This is a help text" />,
  );
  const checkbox = page.getByRole("switch");
  const label = page.locator("label", { hasText: "foo" });
  const helpText = page.getByText("This is a help text");

  await expect(component).toBeVisible();
  await expect(checkbox).toBeVisible();
  await expect(label).toBeVisible();
  await expect(helpText).toBeVisible();
});

test("should not display helpText without label", async ({ mount, page }) => {
  const component = await mount(
    <UncontrolledSwitchTest
      helpText="This is a help text without a label"
      aria-label="foo"
    />,
  );
  const checkbox = page.getByRole("switch");
  const helpText = page.getByText("This is a help text");

  await expect(component).toBeVisible();
  await expect(checkbox).toBeVisible();
  await expect(checkbox).toHaveAttribute("aria-label", "foo");
  await expect(helpText).not.toBeVisible();
});

test.describe("Switch with uncontrolled props", () => {
  test("should respect defaultChecked", async ({ mount, page }) => {
    await mount(<UncontrolledSwitchTest defaultChecked label="Uncontrolled" />);
    const checkbox = page.getByRole("switch");

    await expect(checkbox).toBeChecked();

    await page.keyboard.press(KEYBOARD_KEYS.TAB);
    await expect(checkbox).toBeFocused();
    await page.keyboard.press(KEYBOARD_KEYS.SPACE);

    await expect(checkbox).not.toBeChecked();
  });

  test("should not be checked on mount and checked on interaction", async ({
    mount,
    page,
  }) => {
    await mount(
      <UncontrolledSwitchTest defaultChecked={false} label="Uncontrolled" />,
    );
    const checkbox = page.getByRole("switch");

    await expect(checkbox).not.toBeChecked();

    await page.keyboard.press(KEYBOARD_KEYS.TAB);
    await expect(checkbox).toBeFocused();
    await page.keyboard.press(KEYBOARD_KEYS.SPACE);

    await expect(checkbox).toBeChecked();
  });

  test("should reset on form submit", async ({ mount, page }) => {
    await mount(<UncontrolledSwitchFormTest />);

    const checkbox = page.getByRole("switch");

    await expect(checkbox).not.toBeChecked();

    await checkbox.focus();
    await page.keyboard.press(KEYBOARD_KEYS.ENTER);
    await expect(checkbox).toBeChecked();

    const submitButton = page.getByRole("button");
    await submitButton.click();

    await expect(checkbox).not.toBeChecked();
  });
});

test.describe("Switch with controlled props", () => {
  test("should update value with internal state", async ({ mount, page }) => {
    await mount(<ControlledSwitch label="Controlled" />);
    const checkbox = page.getByRole("switch");

    await expect(checkbox).not.toBeChecked();

    await checkbox.focus();
    await checkbox.press(KEYBOARD_KEYS.ENTER);
    await expect(checkbox).toBeChecked();

    await checkbox.press(KEYBOARD_KEYS.ENTER);
    await expect(checkbox).not.toBeChecked();
  });

  test("should not reset natively on submit in a form", async ({
    mount,
    page,
  }) => {
    await mount(<ControlledSwitchFormTest />);
    const checkbox = page.getByRole("switch");

    await expect(checkbox).not.toBeChecked();

    await checkbox.focus();
    await checkbox.press(KEYBOARD_KEYS.ENTER);
    await expect(checkbox).toBeChecked();

    const submitButton = page.getByRole("button");
    await submitButton.click();

    await expect(checkbox).not.toBeChecked();
  });
});
