import { expect, test } from "@playwright/experimental-ct-react";

import { InlineEdit } from ".";
import { Modal } from "../Modal";
import { getAxeReport } from "../PlaywrightUtils";
import { Select } from "../Select";

const OPTIONS = (
  <>
    <Select.OptGroup label="Basic Colors">
      <Select.Option value="red">Red</Select.Option>
      <Select.Option value="orange">Orange</Select.Option>
      <Select.Option value="green" disabled>
        Green
      </Select.Option>
      <Select.Option value="blue">Blue</Select.Option>
      <Select.Option value="yellow">Yellow</Select.Option>
      <Select.Option value="silver">Silver</Select.Option>
      <Select.Option value="maroon">Maroon</Select.Option>
      <Select.Option value="purple">Purple</Select.Option>
      <Select.Option value="lime">Lime</Select.Option>
      <Select.Option value="brown">Brown</Select.Option>
    </Select.OptGroup>
    <Select.Divider />
    <Select.OptGroup label="Cool Colors">
      <Select.Option value="coral">Coral</Select.Option>
      <Select.Option value="cyan">Cyan</Select.Option>
      <Select.Option value="purple">Purple</Select.Option>
    </Select.OptGroup>
  </>
);

test(`should InlineEdit.Select be accessible`, async ({ mount, page }) => {
  await mount(
    <div id="component-testing">
      <InlineEdit.Select
        aria-label="Edit Color"
        defaultValue="red"
        showEditIcon
      >
        {OPTIONS}
      </InlineEdit.Select>
    </div>,
  );
  const combobox = page.getByRole("combobox");
  const listbox = page.getByRole("listbox");
  const optionRed = page.getByRole("option", { name: "Red" });
  const optionOrange = page.getByRole("option", { name: "Orange" });
  const optionGreen = page.getByRole("option", { name: "Green" });
  const button = page.getByRole("button");

  const text = page.getByText(/Red/);
  await expect(text).toBeVisible();

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  await button.focus();
  await page.keyboard.press("Enter");
  await expect(combobox).toBeVisible();
  await expect(combobox).toBeFocused();
  await expect(listbox).toBeVisible();
  await expect(optionRed).toBeVisible();
  await expect(optionRed).toHaveAttribute("aria-selected", "true");
  await expect(optionOrange).toBeVisible();
  await expect(optionOrange).toHaveAttribute("aria-selected", "false");
  await expect(optionGreen).toBeVisible();
  await expect(optionGreen).toBeDisabled();
  await expect(optionGreen).toHaveAttribute("aria-selected", "false");

  const accessibilityScanResultsClicked = await getAxeReport(page);
  expect(accessibilityScanResultsClicked.violations).toEqual([]);

  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await expect(optionOrange).toHaveAttribute("data-hovered", "true");
  await page.keyboard.press("Enter");
  await expect(combobox).toBeVisible();
  await expect(listbox).not.toBeVisible();
  await expect(combobox).toHaveText("Orange");
  await page.keyboard.press("Escape");
  await expect(combobox).not.toBeVisible();
  await expect(page.getByText(/Orange/)).toBeVisible();

  // now the same with the mouse
  await button.click();
  await expect(combobox).toBeVisible();
  await expect(listbox).toBeVisible();
  await optionRed.click();
  await expect(combobox).toBeVisible();
  await expect(listbox).not.toBeVisible();
  await expect(combobox).toHaveText("Red");
  await page.mouse.click(200, 200);
  await expect(combobox).not.toBeVisible();
  await expect(page.getByText(/Red/)).toBeVisible();
});

test("should be able to see focus state when rendered in a modal", async ({
  mount,
  page,
}) => {
  await mount(
    <Modal visible headerTitle="Test Modal">
      <InlineEdit.Select
        aria-label="Edit Color"
        defaultValue="red"
        showEditIcon
        data-testid="test-select"
      >
        {OPTIONS}
      </InlineEdit.Select>
    </Modal>,
  );

  const view = page.getByTestId("test-select.view");
  const combobox = page.getByRole("combobox");

  await view.click();
  await expect(combobox).toBeVisible();
  await expect(combobox).toBeFocused();
});
