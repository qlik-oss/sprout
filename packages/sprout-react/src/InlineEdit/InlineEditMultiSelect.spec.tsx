import { expect, test } from "@playwright/experimental-ct-react";

import { InlineEdit } from ".";
import { Modal } from "../Modal";
import { getAxeReport } from "../PlaywrightUtils";
import { Select } from "../Select";

const OPTIONS_WITH_GROUP = (
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

test(`should InlineEdit.MultiSelect be accessible`, async ({ mount, page }) => {
  await mount(
    <div id="component-testing" style={{ inlineSize: 300 }}>
      <InlineEdit.MultiSelect
        aria-label="Edit Colors"
        defaultValue={["red"]}
        showEditIcon
      >
        {OPTIONS_WITH_GROUP}
      </InlineEdit.MultiSelect>
    </div>,
  );

  const combobox = page.getByRole("combobox");
  const listbox = page.getByRole("listbox");
  const optionRed = page.getByRole("option", { name: "Red" });
  const optionOrange = page.getByRole("option", { name: "Orange" });
  const optionGreen = page.getByRole("option", { name: "Green" });
  const tagRed = page.getByTestId("combobox.tag.red");
  const tagOrange = page.getByTestId("combobox.tag.orange");
  const tagGreen = page.getByTestId("combobox.tag.green");
  const button = page.getByRole("button");

  const text = page.getByText(/Red/);
  await expect(text).toBeVisible();

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
  // click on the button

  await button.click();
  await expect(tagRed).toBeVisible();
  await expect(tagOrange).not.toBeVisible();
  await expect(tagGreen).not.toBeVisible();
  await expect(combobox).toBeVisible();
  await expect(combobox).toBeFocused();
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
  await expect(optionOrange).toHaveAttribute("data-hovered", "true");
  await page.keyboard.press("Enter");
  await expect(combobox).toBeVisible();
  await expect(listbox).toBeVisible();
  await expect(tagRed).toBeVisible();
  await expect(tagOrange).toBeVisible();
  await page.keyboard.press("Escape"); // cancel
  await expect(combobox).not.toBeVisible();
  await expect(listbox).not.toBeVisible();
  await expect(page.getByText(/Red/)).toBeVisible();
  await expect(page.getByText(/Orange/)).not.toBeVisible();

  // same with the mouse
  await button.click();
  await expect(combobox).toBeVisible();
  await expect(listbox).toBeVisible();
  await optionRed.click();
  await optionOrange.click();
  await expect(combobox).toBeVisible();
  await expect(listbox).toBeVisible();
  await expect(tagRed).not.toBeVisible();
  await expect(tagOrange).toBeVisible();
  await page.mouse.click(400, 200); //save
  await expect(combobox).not.toBeVisible();
  await expect(page.getByText(/Orange/)).toBeVisible();
  await expect(page.getByText(/Red/)).not.toBeVisible();
});

test("should be able to see focus state when rendered in a modal", async ({
  mount,
  page,
}) => {
  await mount(
    <Modal visible headerTitle="Test Modal">
      <InlineEdit.MultiSelect
        aria-label="Edit Colors"
        defaultValue={["red"]}
        showEditIcon
        data-testid="test-mulitiselect"
      >
        {OPTIONS_WITH_GROUP}
      </InlineEdit.MultiSelect>
    </Modal>,
  );

  const view = page.getByTestId("test-mulitiselect.view");
  const combobox = page.getByRole("combobox");

  await view.click();
  await expect(combobox).toBeVisible();
  await expect(combobox).toBeFocused();
});
