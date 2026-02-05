import { expect, test } from "@playwright/experimental-ct-react";

import { Popover } from ".";
import { Button } from "../Button";
import { List, ListItem } from "../List";
import { getAxeReport } from "../PlaywrightUtils";
import { KEYBOARD_KEYS } from "../Utils/keyboardKeys";
import { AnchorPositionAPI, PopoverPlacement } from "./PopoverTest";

test("should render open", async ({ mount, page }) => {
  await mount(
    <Popover
      open
      placement="right"
      content={<p>This is the place where the popover content will appear.</p>}
    >
      <button type="button">left</button>
    </Popover>,
  );
  const component = page.getByRole("dialog");
  await expect(component).toBeVisible();
});

test(`should be accessible`, async ({ mount, page }) => {
  await mount(
    <Popover
      placement="right"
      content={<p>This is the place where the popover content will appear.</p>}
    >
      <button type="button">left</button>
    </Popover>,
  );

  const btn = page.getByRole("button");
  await btn.click();

  const component = page.getByRole("dialog");
  await expect(component).toHaveAttribute("tabindex", "0");
  await expect(component).toBeVisible();

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("should handle focus", async ({ mount, page }) => {
  await mount(
    <div>
      <button type="button" data-testid="nothing">
        do nothing
      </button>
      <Popover
        placement="right"
        content={
          <p>This is the place where the popover content will appear.</p>
        }
      >
        <button type="button" data-testid="nofocusable">
          non focusable content
        </button>
      </Popover>
      <Popover
        placement="right"
        content={
          <div>
            <input type="text" id="input" />
            <button type="button" id="button">
              btn
            </button>
          </div>
        }
      >
        <button type="button" data-testid="focusable">
          focusable content
        </button>
      </Popover>
    </div>,
  );

  const nofocusableBtn = page.getByTestId("nofocusable");
  const focusableBtn = page.getByTestId("focusable");
  await nofocusableBtn.focus();
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);

  const popover = page.getByRole("dialog");
  await expect(popover).toBeFocused();
  // there is no focusable element in it so
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(popover).toBeFocused();

  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(popover).not.toBeVisible();
  await expect(nofocusableBtn).toBeFocused();

  await focusableBtn.focus();
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(popover).toBeVisible();
  await expect(popover).not.toBeFocused();
  await expect(popover.getByRole("textbox")).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(popover.getByRole("button")).toBeFocused();
  // test focus trap
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(popover.getByRole("textbox")).toBeFocused();
  // test focus trap shift tab
  await page.keyboard.down(KEYBOARD_KEYS.SHIFT);
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await page.keyboard.up(KEYBOARD_KEYS.SHIFT);
  await expect(popover.getByRole("button")).toBeFocused();

  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(popover).not.toBeVisible();
  await expect(focusableBtn).toBeFocused();
});

test("should focus on the first item when re-opening a custom dropdown", async ({
  mount,
  page,
}) => {
  await mount(
    <Popover
      minWidth="reference"
      content={
        <List>
          <ListItem onClick={() => {}}>Item 1</ListItem>
          <ListItem onClick={() => {}}>Item 1</ListItem>
        </List>
      }
    >
      <Button label="My trigger" asDropdown />
    </Popover>,
  );

  const popover = page.getByRole("dialog");
  const firstItemButton = popover.locator("li button").first();

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(popover).toBeVisible();
  await expect(firstItemButton).toBeFocused();

  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(popover).not.toBeVisible();

  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(popover).toBeVisible();
  await expect(firstItemButton).toBeFocused();
});

test("should handle anchorPosition API", async ({ mount, page }) => {
  await mount(<AnchorPositionAPI />);

  const popover = page.getByRole("dialog");
  const trigger = page.getByRole("button", { name: "OpenMenu" });
  const deleteBtn = page.getByRole("menuitem", { name: "Delete" });
  const yesBtn = page.getByRole("button", { name: "Yes" });

  await expect(popover).not.toBeVisible();
  await expect(yesBtn).not.toBeVisible();

  await trigger.click();
  await expect(deleteBtn).toBeVisible();
  await deleteBtn.click();

  await expect(popover).toBeVisible();
  await expect(yesBtn).toBeVisible();
  await expect(popover).toHaveAttribute("tabindex", "0");
  await expect(yesBtn).toBeFocused();
  // click outside to close
  await page.click("body", { position: { x: 0, y: 0 } });
  await expect(popover).not.toBeVisible();
});

test("should not open if open is false when triggering (rapid clicks)", async ({
  mount,
  page,
}) => {
  await mount(
    <Popover
      id="popover"
      open={false}
      content={
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
        </List>
      }
    >
      <Button label="My trigger" id="trigger-button" />
    </Popover>,
  );

  const triggerButton = page.getByRole("button");

  for (let i = 0; i < 6; i++) {
    // eslint-disable-next-line no-await-in-loop
    await triggerButton.click();
  }

  await page.evaluate(async () => {
    const button = document.getElementById("trigger-button");
    const state = button?.getAttribute("data-state");
    if (state !== "closed") {
      throw new Error(`Expected closed, but got ${state}`);
    }
  });
});

test("should not goes over the viewport", async ({ mount, page }) => {
  const component = await mount(<PopoverPlacement placement="bottom" />);
  await page.setViewportSize({ width: 400, height: 400 });
  const dialog = page.getByRole("dialog");
  const button = page.getByRole("button");
  let box = await dialog.boundingBox();
  const btnBox = await button.boundingBox();
  if (!btnBox) {
    throw new Error("Button bounding box not found");
  }
  expect(box).toBeDefined();
  if (box) {
    expect(box.x + box.width).toBeLessThanOrEqual(400);
    expect(box.y + box.height).toBeLessThanOrEqual(400);
    expect(box.x).toBe(0);
  }

  // now check with placementUpdate=dropdown it should goes down (mainAxis)
  await component.update(
    <PopoverPlacement placement="top" placementUpdate="dropdown" />,
  );
  box = await dialog.boundingBox();
  expect(box).toBeDefined();
  if (box) {
    expect(box.x + box.width).toBeLessThanOrEqual(400);
    expect(box.y).toBeGreaterThanOrEqual(0);
    expect(box.x).toBe(0);
  }

  // now check with placementUpdate={true} it should goes right (crossAxis) as the content height > viewport height
  await component.update(
    <PopoverPlacement
      placement="top"
      placementUpdate
      demoContentHeight={500}
      viewportPadding={20}
    />,
  );
  box = await dialog.boundingBox();
  expect(box).toBeDefined();
  if (box) {
    expect(box.x + box.width).toBeLessThanOrEqual(400);
    expect(box.y).toBeGreaterThanOrEqual(0);
    expect(box.x).toBe(Math.round(btnBox.x + btnBox.width) + 4);
  }
});
