import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import { KEYBOARD_KEYS } from "../Utils/keyboardKeys";
import {
  MultiSelectInModal,
  MultiSelectTest,
  MultiSelectWithCreateOption,
  MultiSelectWithFilterProps,
  OptionTick,
  WithCustomDataTestId,
  WithoutNoValueOption,
} from "./MultiSelectTest";

test(`should be accessible`, async ({ mount, page }) => {
  await mount(<MultiSelectTest />);

  // a11y: check the combobox is found by role
  const combobox = page.getByRole("combobox");
  await expect(combobox).toHaveAttribute("placeholder", "Please select colors");
  const id =
    (await combobox.evaluate((node) => node.getAttribute("id"))) || "noid";

  // a11y: check the listbox will exist by role
  const listbox = page.getByRole("listbox");
  await expect(combobox).toBeVisible();
  await expect(listbox).not.toBeVisible();

  await combobox.click();
  // a11y: check the listbox has aria-labelledby -> combobox id
  await expect(listbox).toBeVisible();
  await expect(listbox).toHaveAttribute("aria-labelledby", id);

  // count options
  const options = await page.getByRole("option").all();
  expect(options.length).toBe(18);

  // count divider
  /* https://github.com/dequelabs/axe-core/issues/3938
    Divider are not considered accessible by axe-core so we made them hidden*/
  // const divider = await page.getByRole("separator").all();
  // expect(divider.length).toBe(2);

  // a11y: axe-core
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  // a11y: the first element should have the focus
  await expect(combobox).toBeFocused();
  await expect(options[0]).toHaveAttribute("data-hovered", "true");
  let optionId = await options[0].evaluate(
    (node) => node.getAttribute("id") || "",
  );
  await expect(combobox).toHaveAttribute("aria-activedescendant", optionId);
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  await expect(options[0]).toHaveAttribute("data-hovered", "false");
  await expect(options[1]).toHaveAttribute("data-hovered", "true");
  optionId = await options[1].evaluate((node) => node.getAttribute("id") || "");
  await expect(combobox).toHaveAttribute("aria-activedescendant", optionId);

  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  await expect(options[2]).toHaveAttribute("data-hovered", "true");
  await expect(options[3]).toBeDisabled();
  // test jump over the disabled
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  await expect(options[4]).toHaveAttribute("data-hovered", "true");
  await page.keyboard.press(KEYBOARD_KEYS.END);
  await expect(options[17]).toHaveAttribute("data-hovered", "true");
  await page.keyboard.press(KEYBOARD_KEYS.HOME);
  await expect(options[0]).toHaveAttribute("data-hovered", "true");

  // test PageDown and PageUp
  await page.keyboard.press(KEYBOARD_KEYS.PAGE_DOWN);
  await expect(options[11]).toHaveAttribute("data-hovered", "true");
  await expect(options[11]).toHaveText("Coral");
  await page.keyboard.press(KEYBOARD_KEYS.PAGE_UP);
  await expect(options[0]).toHaveAttribute("data-hovered", "true");

  // test the loop
  await page.keyboard.press(KEYBOARD_KEYS.UP);
  await expect(options[17]).toHaveAttribute("data-hovered", "true");

  // test the select
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(options[17]).toHaveAttribute("aria-selected", "true");
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(options[0]).not.toBeVisible();
  // Check tag value
  await expect(page.getByTestId("combobox.tag.sage")).toBeVisible();
  await expect(page.getByTestId("combobox.tag.sage")).toHaveText(
    "Lorem ipsum dolor sit, am…",
  );
  await expect(combobox).toBeFocused();

  // re open it and try again (test addEventListener is called once)
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  await expect(options[17]).toHaveAttribute("data-hovered", "true");
  await page.keyboard.press(KEYBOARD_KEYS.UP);
  await expect(options[16]).toHaveAttribute("data-hovered", "true");
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(listbox).not.toBeVisible();
  // Check tag value
  await expect(page.getByTestId("combobox.tag.sage")).toBeVisible();
  await expect(page.getByTestId("combobox.tag.sage")).toHaveText(
    "Lorem ipsum dolor sit, am…",
  );
  await expect(combobox).toBeFocused();

  // re open it and select multiple values
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  // Select 2 entries above
  await page.keyboard.press(KEYBOARD_KEYS.UP);
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await page.keyboard.press(KEYBOARD_KEYS.UP);
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  // Hide
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  // Check tag value
  await expect(page.getByTestId("combobox.tag.sage")).toBeVisible();
  await expect(page.getByTestId("combobox.tag.sage")).toHaveText(
    "Lorem ipsum dolor sit, am…",
  );
  await expect(page.getByTestId("combobox.tag.pink")).toBeVisible();
  await expect(page.getByTestId("combobox.tag.pink")).toHaveText("Gainsboro");
  await expect(page.getByTestId("combobox.tag.cornsilk")).toBeVisible();
  await expect(page.getByTestId("combobox.tag.cornsilk")).toHaveText(
    "Cornsilk",
  );

  // re open it and unselect middle value
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  // Hide
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  // Check tag value
  await expect(page.getByTestId("combobox.tag.sage")).toBeVisible();
  await expect(page.getByTestId("combobox.tag.sage")).toHaveText(
    "Lorem ipsum dolor sit, am…",
  );
  await expect(page.getByTestId("combobox.tag.cornsilk")).toBeVisible();
  await expect(page.getByTestId("combobox.tag.cornsilk")).toHaveText(
    "Cornsilk",
  );

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(combobox).not.toBeFocused();
});

test("should work without novalue option", async ({ mount, page }) => {
  await mount(<WithoutNoValueOption />);

  const combobox = page.getByRole("combobox");
  await combobox.focus();
  await expect(combobox).toHaveAttribute("placeholder", "Please select colors");

  const options = await page.getByRole("option").all();
  expect(options.length).toBe(17);
  await expect(options[0]).toHaveAttribute("data-hovered", "true");
  await expect(options[0]).toHaveText("Red");
  await options[0].click();
  // Hide
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);

  const listbox = page.getByRole("listbox");
  await expect(listbox).not.toBeVisible();

  await expect(page.getByTestId("combobox.tag.red")).toBeVisible();
  await expect(page.getByTestId("combobox.tag.red")).toHaveText("Red");
});

test("should set custom data-testid", async ({ mount, page }) => {
  await mount(<WithCustomDataTestId />);

  const combobox = page.getByRole("combobox");
  await combobox.focus();

  await expect(page.getByTestId("my_multiselect.combobox")).toBeVisible();

  const options = await page.getByRole("option").all();
  await options[0].click();

  await expect(page.getByTestId("my_multiselect.listbox")).toBeVisible();
  await expect(
    page.getByTestId("my_multiselect.combobox.tag.red"),
  ).toBeVisible();

  // Hide
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(page.getByTestId("my_multiselect.listbox")).not.toBeVisible();
});

test("should show/hide list on drop down icon click", async ({
  mount,
  page,
}) => {
  await mount(<MultiSelectTest />);

  const combobox = page.getByRole("combobox");
  const box = (await combobox.boundingBox()) as {
    x: number;
    y: number;
    width: number;
    height: number;
  };

  // Show list on dropdown click
  const x = box.x + box.width + 5;
  const y = box.y + box.height * 0.5;
  await page.mouse.click(x, y);
  await expect(page.getByTestId("listbox")).toBeVisible();
  await expect(combobox).toBeFocused();

  // Hide list on dropdown click
  await page.mouse.click(x, y);
  await expect(page.getByTestId("listbox")).not.toBeVisible();
  await expect(combobox).not.toBeFocused();
});

test("should hide list on click outside", async ({ mount, page }) => {
  await mount(
    <div
      style={{
        inlineSize: "200px",
        display: "flex",
        flexDirection: "row",
        boxSizing: "border-box",
      }}
    >
      <MultiSelectTest />
    </div>,
  );
  const combobox = page.getByRole("combobox");
  const box = (await combobox.boundingBox()) as {
    x: number;
    y: number;
    width: number;
    height: number;
  };

  // Show list on dropdown click
  const x = box.x + box.width + 5;
  const y = box.y + box.height * 0.5;
  await page.mouse.click(x, y);
  await expect(page.getByTestId("listbox")).toBeVisible();
  await expect(combobox).toBeFocused();

  // Hide list on dropdown click
  await page.mouse.click(x + 100, y);
  await expect(page.getByTestId("listbox")).not.toBeVisible();
  await expect(combobox).not.toBeFocused();
});

test("should map properties to native attributes", async ({ mount, page }) => {
  await mount(<MultiSelectTest disabled />);
  const combobox = page.getByRole("combobox");
  await expect(combobox).toBeDisabled();
});

test("should clear tags", async ({ mount, page }) => {
  await mount(<MultiSelectTest />);

  const combobox = page.getByRole("combobox");
  await combobox.focus();

  // Select 2 entries
  await page.keyboard.press(KEYBOARD_KEYS.DOWN, { delay: 100 });
  await page.keyboard.press(KEYBOARD_KEYS.ENTER, { delay: 100 });
  await page.keyboard.press(KEYBOARD_KEYS.DOWN, { delay: 100 });
  await page.keyboard.press(KEYBOARD_KEYS.ENTER, { delay: 100 });

  // Check tag value
  await expect(page.getByTestId("combobox.tag.red")).toBeVisible();
  await expect(page.getByTestId("combobox.tag.red")).toHaveText("Red");
  await expect(page.getByTestId("combobox.tag.orange")).toBeVisible();
  await expect(page.getByTestId("combobox.tag.orange")).toHaveText("Orange");

  // Clear tags
  const button = await page.getByLabel("clear");
  const buttonBox = await button.boundingBox();

  if (buttonBox) {
    // Click twice. First to close the list, second to clear the tags
    await page.mouse.click(
      buttonBox.x + buttonBox.width / 2,
      buttonBox.y + buttonBox.height / 2,
    );
    await page.mouse.click(
      buttonBox.x + buttonBox.width / 2,
      buttonBox.y + buttonBox.height / 2,
    );
  }

  // Check list is still again
  const listbox = page.getByRole("listbox");
  await expect(listbox).toBeVisible();

  // Check tags are cleared
  await expect(page.getByTestId("combobox.tag.red")).not.toBeVisible();
  await expect(page.getByTestId("combobox.tag.orange")).not.toBeVisible();

  // Now do the same with list closed once tags are selected

  // Select 2 entries
  await page.keyboard.press(KEYBOARD_KEYS.DOWN, { delay: 100 });
  await page.keyboard.press(KEYBOARD_KEYS.ENTER, { delay: 100 });
  await page.keyboard.press(KEYBOARD_KEYS.DOWN, { delay: 100 });
  await page.keyboard.press(KEYBOARD_KEYS.ENTER, { delay: 100 });

  // Hide list
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(listbox).not.toBeVisible();

  // Check tag value
  await expect(page.getByTestId("combobox.tag.red")).toBeVisible();
  await expect(page.getByTestId("combobox.tag.red")).toHaveText("Red");
  await expect(page.getByTestId("combobox.tag.orange")).toBeVisible();
  await expect(page.getByTestId("combobox.tag.orange")).toHaveText("Orange");

  // Clear tags
  await button.click();

  // Check tags are cleared
  await expect(page.getByTestId("combobox.tag.red")).not.toBeVisible();
  await expect(page.getByTestId("combobox.tag.orange")).not.toBeVisible();

  // Check list is shown again
  await expect(listbox).toBeVisible();
});

test("should clear input text on outside click", async ({ mount, page }) => {
  await mount(
    <div
      style={{
        inlineSize: "200px",
        display: "flex",
        flexDirection: "row",
        boxSizing: "border-box",
      }}
    >
      <MultiSelectTest />
    </div>,
  );
  const combobox = page.getByRole("combobox");
  await combobox.focus();

  await page.keyboard.type("search");
  await expect(combobox).toHaveValue("search");

  // Click outside the component
  await page.mouse.click(300, 50);

  await expect(combobox).toHaveValue("");
});

test("should show list clicking between tags and input", async ({
  mount,
  page,
}) => {
  await mount(
    <div
      style={{
        inlineSize: "200px",
        display: "flex",
        flexDirection: "row",
        boxSizing: "border-box",
      }}
    >
      <MultiSelectTest defaultValue={["blue", "red", "yellow"]} />
    </div>,
  );

  const tag = page.getByTestId("combobox.tag.red");

  // Click on empty space
  const box = (await tag.boundingBox()) as {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  const x = box.x + box.width + 5;
  const y = box.y + box.height * 0.5;
  await page.mouse.click(x, y);

  // List should be visible
  await expect(page.getByTestId("listbox")).toBeVisible();
});

test("should show the list if hidden on tag removal", async ({
  mount,
  page,
}) => {
  await mount(<MultiSelectTest defaultValue={["blue"]} />);

  const combobox = page.getByRole("combobox");

  // Remove blue tag
  const button = await page.getByLabel("remove");
  await button.click();

  // List should be visible and combobox focused
  await expect(page.getByTestId("listbox")).toBeVisible();
  await expect(combobox).toBeFocused();
});

test("should not hide the list if shown on tag removal", async ({
  mount,
  page,
}) => {
  await mount(<MultiSelectTest defaultValue={["blue"]} />);

  const combobox = page.getByRole("combobox");
  await combobox.focus();

  // Must click combobox first to close list
  const comboboxBox = await combobox.boundingBox();
  if (comboboxBox) {
    await page.mouse.click(
      comboboxBox.x + comboboxBox.width / 2,
      comboboxBox.y + comboboxBox.height / 2,
    );
  }

  // Remove blue tag
  const button = await page.getByLabel("remove");
  await button.click();

  // List should be visible and combobox focused
  await expect(page.getByTestId("listbox")).toBeVisible();
  await expect(combobox).toBeFocused();
});

test("should show the list if not shown on search input", async ({
  mount,
  page,
}) => {
  await mount(<MultiSelectTest defaultValue={["blue"]} />);

  const combobox = page.getByRole("combobox");
  await combobox.focus();

  // Hide the list
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(page.getByTestId("listbox")).not.toBeVisible();

  // List should be visible and combobox focused
  await page.keyboard.type("search");

  // List should be visible and combobox focused
  await expect(page.getByTestId("listbox")).toBeVisible();
  await expect(combobox).toBeFocused();
});

test("should filter the list on search input", async ({ mount, page }) => {
  await mount(<MultiSelectTest />);

  const combobox = page.getByRole("combobox");
  await combobox.focus();

  // Search for "ora"
  await page.keyboard.type("ora");

  // Check orange and coral are visible
  let options = await page.getByRole("option").all();
  expect(options.length).toBe(2);
  await expect(options[0]).toHaveText("Orange");
  await expect(options[1]).toHaveText("Coral");

  // Clear the search
  await page.keyboard.press("Backspace");
  await page.keyboard.press("Backspace");
  await page.keyboard.press("Backspace");

  await expect(options[1]).toHaveText("Red");

  //issue: we have recursion error when the filter match label and description concatenated.
  await page.keyboard.type("Chartreusenice");
  options = await page.getByRole("option").all();
  expect(options.length).toBe(0);
});

test("should display No results found message on empty search result", async ({
  mount,
  page,
}) => {
  await mount(<MultiSelectTest />);

  const combobox = page.getByRole("combobox");
  await combobox.focus();

  // Search for "xyz"
  await page.keyboard.type("xyz");

  // Check list is empty but displayed
  const options = await page.getByRole("option").all();
  expect(options.length).toBe(0);

  const groups = await page.getByRole("group").all();
  expect(groups.length).toBe(0);

  const listbox = page.getByRole("listbox");
  await expect(listbox).toBeVisible();
  // THEN Empty list with No results found message is displayed
  await expect(listbox.getByText("No results found")).toBeVisible();
});

test("should hover proper item on search", async ({ mount, page }) => {
  await mount(
    <WithoutNoValueOption defaultValue={["pink", "purple", "maroon"]} />,
  );

  const combobox = page.getByRole("combobox");
  await combobox.focus();

  // Search for "ora"
  await page.keyboard.type("ora");

  // Check Orange and Coral are visible
  let options = await page.getByRole("option").all();
  expect(options.length).toBe(2);
  await expect(options[0]).toHaveText("Orange");
  await expect(options[0]).toHaveAttribute("data-hovered", "true");
  await expect(options[1]).toHaveText("Coral");
  await expect(options[1]).toHaveAttribute("data-hovered", "false");

  // Search for "or"
  await page.keyboard.press("Backspace");

  // Check Orange, Coral, Cornsilk and Gainsboro are visible
  // Hovered element should be the one selected = Gainsboro
  options = await page.getByRole("option").all();
  expect(options.length).toBe(6);
  await expect(options[0]).toHaveText("Orange");
  await expect(options[0]).toHaveAttribute("data-hovered", "false");
  await expect(options[1]).toHaveText("Coral");
  await expect(options[1]).toHaveAttribute("data-hovered", "false");
  await expect(options[2]).toHaveAttribute("data-option", "chartreuse");
  await expect(options[2]).toHaveAttribute("data-hovered", "false");
  await expect(options[3]).toHaveText("Cornsilk");
  await expect(options[3]).toHaveAttribute("data-hovered", "false");
  await expect(options[4]).toHaveText("Gainsboro");
  await expect(options[4]).toHaveAttribute("data-hovered", "true");
  await expect(options[5]).toHaveText(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, pariatur?",
  );
  await expect(options[5]).toHaveAttribute("data-hovered", "false");

  // Search for "o"
  await page.keyboard.press("Backspace");

  // Check None, Orange, Yellow, Maroon, Brown, Coral, Cornsilk, Gainsboro are visible
  // Hovered element should be the first one selected = Maroon
  options = await page.getByRole("option").all();
  expect(options.length).toBe(9);
  await expect(options[0]).toHaveText("Orange");
  await expect(options[0]).toHaveAttribute("data-hovered", "false");
  await expect(options[1]).toHaveText("Yellow");
  await expect(options[1]).toHaveAttribute("data-hovered", "false");
  await expect(options[2]).toHaveText("Maroon");
  await expect(options[2]).toHaveAttribute("data-hovered", "true");
  await expect(options[3]).toHaveText("Brown");
  await expect(options[3]).toHaveAttribute("data-hovered", "false");
  await expect(options[4]).toHaveText("Coral");
  await expect(options[4]).toHaveAttribute("data-hovered", "false");
  await expect(options[5]).toHaveAttribute("data-option", "chartreuse");
  await expect(options[5]).toHaveAttribute("data-hovered", "false");
  await expect(options[6]).toHaveText("Cornsilk");
  await expect(options[6]).toHaveAttribute("data-hovered", "false");
  await expect(options[7]).toHaveText("Gainsboro");
  await expect(options[7]).toHaveAttribute("data-hovered", "false");
  await expect(options[8]).toHaveText(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, pariatur?",
  );
  await expect(options[8]).toHaveAttribute("data-hovered", "false");
});

test("should support async rendering of options and get labels", async ({
  page,
  mount,
}) => {
  await mount(<OptionTick />);
  const combobox = page.getByTestId("my_multiselect.combobox");
  await expect(combobox).toBeVisible();
  await expect(combobox.getByText("Red", { exact: true })).not.toBeVisible();
  await expect(combobox.getByText("Blue", { exact: true })).not.toBeVisible();
  // let the next expect wait a bit more
  await expect(combobox.getByText("Red", { exact: true })).toBeVisible();
  await expect(combobox.getByText("Blue", { exact: true })).toBeVisible();
});

test("when hovering on truncated selected tag, tooltip should be visible", async ({
  mount,
  page,
}) => {
  await mount(<MultiSelectTest defaultValue={["sage"]} />);

  const tooltip = page.getByRole("tooltip");
  const tag = page.getByTestId("combobox.tag.sage");
  const tagText = tag.locator("span[data-state]");
  await tagText.hover();
  await expect(tagText).toContainText("Lorem ipsum dolor sit, am…");
  await expect(tooltip).toBeVisible();
  await expect(tagText).toHaveAttribute("data-state", "open");
  await expect(tooltip).toHaveText(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, pariatur?",
  );
});

test("when hovering non truncated selected tag, tooltip should not be visible", async ({
  mount,
  page,
}) => {
  await mount(<MultiSelectTest defaultValue={["blue"]} />);

  const tooltip = page.getByRole("tooltip");
  const tag = page.getByTestId("combobox.tag.blue");
  const tagText = tag.locator("span").getByText("Blue");
  await tagText.hover();
  await expect(tooltip).not.toBeVisible();
});

test("should support onFilterChange", async ({ mount, page }) => {
  await mount(<MultiSelectWithFilterProps />);

  const combobox = page.getByRole("combobox");
  const filter = page.getByTestId("filter");
  await combobox.focus();

  // Search for "ora"
  await page.keyboard.type("ora");

  await expect(filter).toHaveText("ora");

  // Check Orange and Coral are visible
  const options = await page.getByRole("option").all();
  expect(options.length).toBe(2);
  await expect(options[0]).toHaveText("Orange");
  await expect(options[1]).toHaveText("Coral");
});

test("should support OptionCreate", async ({ mount, page }) => {
  await mount(<MultiSelectWithCreateOption />);

  const combobox = page.getByRole("combobox");
  await combobox.focus();

  // Search for "ora"
  await page.keyboard.type("ora");

  // Check Orange and Coral are visible
  const createOption = page.getByTestId("create-option");
  await expect(createOption).toBeVisible();
  const options = await page.getByRole("option").all();
  expect(options.length).toBe(3);
  await expect(options[0]).toHaveText("Orange");
  await expect(options[1]).toHaveText("Coral");
  await expect(options[2]).toHaveText("Create ora");

  // Select the create option
  await options[2].click();

  // Check the value is set

  const tag = page.getByTestId("combobox.tag.ora");
  await expect(tag).toBeVisible();
  await expect(tag).toHaveText("ora");
});

test("when open other elements should not be interactable", async ({
  mount,
  page,
}) => {
  await mount(<MultiSelectInModal />);

  const modal = page.getByRole("dialog");
  const select = page.getByTestId("select");
  const multiSelect = page.getByTestId("multiselect.combobox");
  const multiSelectListbox = page.getByTestId("multiselect.listbox");

  await expect(modal).toBeVisible();
  await expect(select).toBeVisible();
  await expect(multiSelect).toBeVisible();

  await multiSelect.click();
  await expect(multiSelectListbox).toBeVisible();

  // Select should not be interactable because of the overlay from MultiSelect
  const selectBox = await select.boundingBox();
  if (selectBox) {
    await page.mouse.move(selectBox.x + selectBox.width / 2, selectBox.y + 10);
  }
  const selectIsHovered = await select.evaluate((element) =>
    element.matches(":hover"),
  );
  expect(selectIsHovered).toBeFalsy();

  if (selectBox) {
    await page.mouse.click(selectBox.x + selectBox.width / 2, selectBox.y + 10);
  }
  await expect(multiSelectListbox).not.toBeVisible();
  await expect(modal).toBeVisible();
});

test("should close select on ESCAPE keypress in a modal and not propagate the event", async ({
  mount,
  page,
}) => {
  await mount(<MultiSelectInModal />);

  const modal = page.getByRole("dialog");
  const multiSelect = page.getByTestId("multiselect.combobox");
  const listbox = page.getByTestId("multiselect.listbox");

  await expect(modal).toBeVisible();
  await expect(multiSelect).toBeVisible();

  await multiSelect.click();
  await expect(listbox).toBeVisible();

  // Press ESCAPE
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);

  // The multi select listbox should be closed
  await expect(listbox).not.toBeVisible();
  // The modal should still be open
  await expect(modal).toBeVisible();
});
