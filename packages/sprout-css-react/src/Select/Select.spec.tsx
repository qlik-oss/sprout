import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import { KEYBOARD_KEYS } from "../Utils/keyboardKeys";
import {
  SearchableSelect,
  SelectDefaultValueFromRef,
  SelectInModal,
  SelectModalOverflow,
  SelectTest,
  SelectTestUpDown,
  WithoutNoValueOption,
} from "./SelectTest";

test(`should be accessible`, async ({ mount, page }) => {
  await mount(<SelectTest />);

  // a11y: check the combobox is found by role
  const combobox = page.getByRole("combobox");
  await expect(combobox).toHaveText("Please select a color");
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
  expect(options.length).toBe(17);

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
  await expect(options[16]).toHaveAttribute("data-hovered", "true");
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
  await expect(options[16]).toHaveAttribute("data-hovered", "true");

  // test the select
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(options[0]).not.toBeVisible();
  await expect(combobox).toHaveText("Gainsboro");
  await expect(combobox).toBeFocused();

  // re open it and try again (test addEventListener is called once)
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  await expect(options[16]).toHaveAttribute("data-hovered", "true");
  await page.keyboard.press(KEYBOARD_KEYS.UP);
  await expect(options[15]).toHaveAttribute("data-hovered", "true");
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(listbox).not.toBeVisible();
  await expect(combobox).toHaveText("Gainsboro");
  await expect(combobox).toBeFocused();

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(combobox).not.toBeFocused();
});

test("should work without novalue option", async ({ mount, page }) => {
  await mount(<WithoutNoValueOption />);

  const select = page.getByRole("combobox");
  await select.focus();
  await expect(select).toHaveText("Please select a color");

  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  const options = await page.getByRole("option").all();
  expect(options.length).toBe(16);
  await expect(options[0]).toHaveAttribute("data-hovered", "true");
  await expect(options[0]).toHaveText("Red");
  await options[0].click();

  const listbox = page.getByRole("listbox");
  await expect(listbox).not.toBeVisible();
  await expect(select).toHaveText("Red");
});

test("should select the text in readOnly mode", async ({ mount, page }) => {
  await mount(<SelectTest readOnly value="red" />);
  const select = page.getByRole("combobox");
  await select.click();
  const selectedText = await select.evaluate(() => {
    const sel = window.getSelection() as { baseNode: HTMLElement } | null;
    if (sel) {
      return sel.baseNode.textContent;
    }
    return null;
  });
  expect(selectedText).toBe("Red");
});

test.describe("corner case", () => {
  test.use({ viewport: { width: 400, height: 350 } });
  test("should open upward / downard", async ({ mount, page }) => {
    await mount(<SelectTestUpDown />);
    const selectDownward = page.getByLabel("Floating should be downward");
    await selectDownward.click();
    const listbox = page.getByRole("listbox");
    await expect(listbox).toBeVisible();
    const listboxRect = await listbox.boundingBox();
    const selectRect = await selectDownward.boundingBox();
    expect(listboxRect).toBeTruthy();
    expect(selectRect).toBeTruthy();
    if (listboxRect && selectRect) {
      expect(listboxRect.y).toBeGreaterThan(selectRect.y);
    }
    let selectedOption = page.getByRole("option", { selected: true });
    await expect(selectedOption).toBeVisible();

    // Since the overlay is used to block interaction with other elements, we need to try click the button like this
    const selectDownwardBox = await selectDownward.boundingBox();
    if (selectDownwardBox) {
      await page.mouse.click(
        selectDownwardBox.x + selectDownwardBox.width / 2,
        selectDownwardBox.y + selectDownwardBox.height / 2,
      );
    }

    // This one should be upward and scroll happens without closing the listbox
    const selectUpward = page.getByLabel("Floating should be upward");
    await selectUpward.click();
    const listboxUpward = page.getByRole("listbox");
    await expect(listboxUpward).toBeVisible();
    const listboxUpwardRect = await listboxUpward.boundingBox();
    const selectUpwardRect = await selectUpward.boundingBox();
    expect(listboxUpwardRect).toBeTruthy();
    expect(selectUpwardRect).toBeTruthy();
    if (listboxUpwardRect && selectUpwardRect) {
      expect(listboxUpwardRect.y).toBeLessThan(selectUpwardRect.y);
    }

    selectedOption = page.getByRole("option", { selected: true });
    await expect(selectedOption).toBeVisible();
  });
});

// at the moment the API used seems to fail during test.
test("should stay open when at the end of a scrollable Modal", async ({
  mount,
  page,
}) => {
  await mount(<SelectModalOverflow />);

  const select = page.getByLabel("Feedback");
  const listbox = page.getByRole("listbox");
  const option = listbox.getByTestId("myoption");

  await select.scrollIntoViewIfNeeded({ timeout: 100 });
  await select.click();
  await expect(listbox).toBeVisible();
  await expect(option).toBeVisible();
  await expect(option).toHaveAttribute("data-hovered", "true");
});

test("floating listbox should close when Tab is pressed", async ({
  mount,
  page,
}) => {
  await mount(<SelectTest />);
  const select = page.getByRole("combobox");
  const listbox = page.getByRole("listbox");

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(select).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(listbox).toBeVisible();

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(listbox).not.toBeVisible();
  await expect(select).not.toBeFocused();
});

test("floating listbox should close when Shift+Tab is pressed", async ({
  mount,
  page,
}) => {
  await mount(<SelectTest />);
  const select = page.getByRole("combobox");
  const listbox = page.getByRole("listbox");

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(select).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(listbox).toBeVisible();

  // Just pressing "Shift" should do nothing
  await page.keyboard.down(KEYBOARD_KEYS.SHIFT);
  await expect(listbox).toBeVisible();
  await page.keyboard.up(KEYBOARD_KEYS.SHIFT);
  await expect(listbox).toBeVisible();

  await page.keyboard.down(KEYBOARD_KEYS.SHIFT);
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await page.keyboard.up(KEYBOARD_KEYS.SHIFT);
  await expect(listbox).not.toBeVisible();
  await expect(select).not.toBeFocused();
});

test("should support defaultValue from ref", async ({ mount, page }) => {
  await mount(<SelectDefaultValueFromRef />);
  const select = page.getByRole("combobox");
  await expect(select).toHaveText("Blue");
});

test("should support typeahead when open", async ({ mount, page }) => {
  await mount(<SelectTest />);
  const select = page.getByRole("combobox");
  const listbox = page.getByRole("listbox");
  const hiddenInputValue = page.locator('input[type="hidden"]');

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(select).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(listbox).toBeVisible();

  const hovered = page.locator('[role="option"][data-hovered="true"]');

  await page.keyboard.type("g");
  await expect(hovered).toHaveText("Gainsboro");
  await page.waitForTimeout(1000);

  await page.keyboard.type("re");
  await expect(hovered).toHaveText("Red");
  await page.waitForTimeout(1000);

  // Press a key with no exact matches and expect it to hover the closest option alphabetically
  await page.keyboard.type("x");
  await expect(hovered).toHaveText("Yellow");
  await page.waitForTimeout(1000);

  await page.keyboard.type("cora");
  await expect(hovered).toHaveText("Coral");

  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(listbox).not.toBeVisible();
  await expect(select).toHaveText("Coral");
  await expect(hiddenInputValue).toHaveValue("coral");
});

test("should support typeahead when closed", async ({ mount, page }) => {
  await mount(<SelectTest />);
  const select = page.getByRole("combobox");
  const listbox = page.getByRole("listbox");
  const hiddenInputValue = page.locator('input[type="hidden"]');

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(select).toBeFocused();
  await expect(listbox).not.toBeVisible();
  await expect(select).toHaveText("Please select a color");

  await page.keyboard.type("g");
  await expect(select).toHaveText("Gainsboro");
  await page.waitForTimeout(1000);

  await page.keyboard.type("re");
  await expect(select).toHaveText("Red");
  await page.waitForTimeout(1000);

  // Press a key with no exact matches and expect it to select the closest option alphabetically
  await page.keyboard.type("x");
  await expect(select).toHaveText("Yellow");
  await page.waitForTimeout(1000);

  await page.keyboard.type("cora");
  await expect(select).toHaveText("Coral");
  await expect(hiddenInputValue).toHaveValue("coral");
});

test("should loop around to bottom of list after pressing up", async ({
  mount,
  page,
}) => {
  await page.setViewportSize({ width: 400, height: 200 });

  await mount(<SelectModalOverflow defaultValue="1" />);

  const select = page.getByLabel("Feedback");
  const listbox = page.getByRole("listbox");
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(select).toBeFocused();
  await expect(listbox).not.toBeVisible();
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(listbox).toBeVisible();

  // Get initial scroll position
  const initialScrollTop = await listbox.evaluate((el) => el.scrollTop);

  // Navigate to last item by looping
  await page.keyboard.press(KEYBOARD_KEYS.UP);

  // Check scroll position after navigation to last item
  await page.waitForTimeout(1000);
  const scrollAfterUp = await listbox.evaluate((el) => el.scrollTop);
  const listboxHeight = await listbox.evaluate((el) => el.clientHeight);
  const scrollHeight = await listbox.evaluate((el) => el.scrollHeight);

  // The scroll position should have changed (scrolled toward bottom to show last item)
  expect(scrollAfterUp).toBeGreaterThan(initialScrollTop);

  // Verify we're scrolled closer to bottom than top
  const maxScroll = scrollHeight - listboxHeight;
  expect(scrollAfterUp).toBeGreaterThan(maxScroll * 0.5);

  const focusedOption = page.locator('[data-hovered="true"]');
  await expect(focusedOption).toBeVisible();
});

test("listbox should be on top of the modal (z-index/stacking)", async ({
  mount,
  page,
}) => {
  await mount(<SelectInModal />);

  const select = page.getByLabel("Feedback");
  const listbox = page.getByRole("listbox");
  const option = listbox.getByTestId("myoption");

  await select.click();
  await expect(listbox).toBeVisible();
  await expect(option).toBeVisible();
});

test("when open other elements should not be interactable", async ({
  mount,
  page,
}) => {
  await mount(<SelectInModal />);

  const modal = page.getByRole("dialog");
  const select = page.getByLabel("Feedback");
  const listbox = page.getByRole("listbox");
  const closeButton = page.getByTestId("modal.header.close");

  await expect(modal).toBeVisible();
  await expect(closeButton).toBeVisible();

  await select.click();
  await expect(listbox).toBeVisible();

  // Since the overlay is used to block interaction with other elements, we need to try click the button like this
  const box = await closeButton.boundingBox();
  if (box) {
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
  }

  await expect(listbox).not.toBeVisible();
  await expect(modal).toBeVisible();
});

test("should support searching functionality", async ({ mount, page }) => {
  await mount(<SearchableSelect />);

  const combobox = page.getByRole("combobox");
  // WHEN clicking on the combobox
  await combobox.click();

  // THEN the search input should be focused
  const searchInput = page.getByRole("searchbox");
  await expect(searchInput).toBeFocused();
  // WHEN typing in the search input
  await searchInput.fill("re");
  // THEN the options should be filtered
  let options = await page.getByRole("option").all();
  expect(options.length).toBe(3);
  await expect(options[0]).toHaveText("Red");
  await expect(options[1]).toHaveText("Green");
  await expect(options[2]).toHaveText("Chartreuse");
  // WHEN selecting an option
  await options[0].click();
  // THEN the combobox should be updated
  await expect(combobox).toHaveText("Red");
  // AND the listbox should be closed
  const listbox = page.getByRole("listbox");
  await expect(listbox).not.toBeVisible();

  // WHEN opening the combobox one more time
  await combobox.click();
  // THEN the search input should be empty
  await expect(searchInput).toHaveValue("");
  // AND all options should be visible again
  options = await page.getByRole("option").all();
  expect(options.length).toBe(17);
  // WHEN entering a search value that yields no results
  await searchInput.fill("non existing option");
  // THEN no options should be displayed
  options = await page.getByRole("option").all();
  expect(options.length).toBe(0);
  // AND a no results message should be rendered
  const noResults = page.getByText("No results found");
  await expect(noResults).toBeVisible();
  // WHEN pressing Escape
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  // THEN the listbox should be closed
  await expect(listbox).not.toBeVisible();

  // WHEN opening the combobox one more time
  await combobox.click();
  // THEN the search input should be empty
  await expect(searchInput).toHaveValue("");
  // AND all options should be visible again
  options = await page.getByRole("option").all();
  expect(options.length).toBe(17);
  // AND option with value "Red" should be focused
  const focusedOption = page.locator('[role="option"][data-hovered="true"]');
  await expect(focusedOption).toHaveText("Red");
  // WHEN navigating using keyboard and pressing Arrow Down
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  // THEN the next option should be focused
  await expect(options[2]).toHaveAttribute("data-hovered", "true");
  // WHEN navigating using keyboard and pressing Arrow Up few times
  await page.keyboard.press(KEYBOARD_KEYS.UP);
  await page.keyboard.press(KEYBOARD_KEYS.UP);
  await page.keyboard.press(KEYBOARD_KEYS.UP);
  // THEN it should loop over to bottom of the list and focus the last option
  await expect(options[16]).toHaveAttribute("data-hovered", "true");
  // WHEN pressing Enter
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  // THEN the combobox should be updated
  await expect(combobox).toHaveText("Gainsboro");
  // AND the listbox should be closed
  await expect(listbox).not.toBeVisible();
  // AND the combobox should be focused
  await expect(combobox).toBeFocused();
  // WHEN pressing Tab
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  // THEN the combobox should not be focused
  await expect(combobox).not.toBeFocused();
});

test("should close select on ESCAPE keypress in a modal and not propagate the event", async ({
  mount,
  page,
}) => {
  await mount(<SelectInModal />);

  const modal = page.getByRole("dialog");
  const select = page.getByLabel("Feedback");
  const listbox = page.getByRole("listbox");

  await expect(modal).toBeVisible();
  await expect(select).toBeVisible();

  await select.click();
  await expect(listbox).toBeVisible();

  // Press ESCAPE
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);

  // The select listbox should be closed
  await expect(listbox).not.toBeVisible();
  // The modal should still be open
  await expect(modal).toBeVisible();
});

test("should hide description of selected option when selectedValueDisplay is label", async ({
  mount,
  page,
}) => {
  await mount(
    <div id="component-testing">
      <SelectTest selectedValueDisplay="label" />
    </div>,
  );

  const combobox = page.getByRole("combobox");
  await expect(combobox).toBeVisible();
  await expect(combobox).toHaveText("Please select a color");

  await combobox.click();

  const listbox = page.getByRole("listbox");
  await expect(listbox).toBeVisible();

  const redOption = listbox.getByText("Red");
  await expect(redOption).toBeVisible();
  await redOption.click();

  await expect(listbox).not.toBeVisible();
  await expect(combobox).toBeVisible();
  const selectedValue = combobox.getByTestId("selected-value");
  await expect(selectedValue).toBeVisible();
  await expect(selectedValue).toHaveText("Red");

  await combobox.click();
  await expect(listbox).toBeVisible();

  const chartreuseOption = listbox.getByText("Chartreuse");
  await expect(chartreuseOption).toBeVisible();
  await chartreuseOption.click();

  await expect(listbox).not.toBeVisible();
  await expect(combobox).toBeVisible();

  // Verify only the label is visible, description is hidden
  const label = selectedValue.locator('[data-part="label"]');
  const description = selectedValue.locator('[data-part="description"]');
  await expect(label).toHaveText("Chartreuse");
  await expect(description).toBeAttached();
  await expect(description).not.toBeVisible();
});
