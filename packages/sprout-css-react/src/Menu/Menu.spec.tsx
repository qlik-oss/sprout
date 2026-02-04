import { expect, test } from "@playwright/experimental-ct-react";

import { Menu } from ".";
import { Button } from "../Button";
import { getAxeReport } from "../PlaywrightUtils";
import { KEYBOARD_KEYS } from "../Utils/keyboardKeys";
import {
  MenuBackdropTest,
  MenuControlledOpenChange,
  MenuControlledOpenState,
  MenuFocusReturnTest,
  MenuRefTest,
} from "./MenuTest";

test("should menu opened on click", async ({ mount, page }) => {
  const menuEl = await mount(
    <div id="component-testing">
      <Menu.Trigger
        menu={
          <>
            <Menu.GroupLabel label="User" />
            <Menu.Item icon={null} label="Profile" disabled />
            <Menu.Item icon={null} label="Logout" />
            <Menu.Item icon={null} label="Reload" />
            <Menu.Item icon={null} label="Share" />
            <Menu.Divider />
            <Menu.Item
              icon={null}
              label="Edit"
              description="Don’t remember what we said about overflow, but this would be it."
              valueLabel="⌘ E"
            />
            <Menu.Item icon={null} label="Delete" />
            <Menu.Divider />
            <Menu.Item icon={null} label="Cut" valueLabel="⌘ X" />
            <Menu.Item icon={null} label="Copy" valueLabel="⌘ C" />
            <Menu.Item icon={null} label="Paste" disabled valueLabel="⌘ V" />
            <Menu.Divider />
            <Menu.Split>
              <Menu.Item label="Open source" />
              <Menu.SecondaryAction />
            </Menu.Split>
          </>
        }
      >
        <Button label="Open Menu" />
      </Menu.Trigger>
    </div>,
  );
  const btn = menuEl.getByText("Open Menu");
  await btn.click();

  const component = page.getByRole("menu");
  await expect(component).toBeVisible();
  await expect(component).toContainText("⌘ X");

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("should menu support selectable selected", async ({ page, mount }) => {
  await mount(
    <Menu.Trigger
      menu={
        <>
          <Menu.Item label="Bold" selectable />
          <Menu.Item label="Italic" selectable selected />
          <Menu.Item label="Underline" selectable />
          <Menu.Divider />
          <Menu.Item label="Small" selectable />
          <Menu.Item label="Medium" selectable />
          <Menu.Item label="Large" selectable />
        </>
      }
    >
      <Button label="Open Menu" />
    </Menu.Trigger>,
  );
  const btn = page.getByRole("button");
  await btn.click();
  const component = page.getByRole("menu");
  await expect(component).toBeVisible();
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("should contextual menu display on right click", async ({
  mount,
  page,
}) => {
  await mount(
    <Menu.Contextual
      menu={
        <>
          <Menu.Item label="Cut" valueLabel="⌘ X" />
          <Menu.Item label="Copy" valueLabel="⌘ C" />
          <Menu.Item label="Paste" disabled />
          <Menu.Trigger
            placement="right"
            menu={
              <>
                <Menu.Item label="Lorem" />
                <Menu.Item label="Ipsum" />
              </>
            }
          >
            <Menu.Item label="Open Submenu" isNested />
          </Menu.Trigger>
        </>
      }
    >
      <div
        style={{ inlineSize: "100%", blockSize: "50vh" }}
        data-testid="contextual"
      >
        <h1>Right click on the area</h1>
      </div>
    </Menu.Contextual>,
  );
  const area = page.getByTestId("contextual");
  await area.click({ button: "right" });
  const component = page.getByRole("menu");
  const items = await component.getByRole("menuitem").all();
  await expect(component).toBeVisible();
  expect(items.length).toBe(4);
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  // close the menu when click outside
  await page.click("body");
  await expect(component).not.toBeVisible();

  // reopen the menu and close by clicking on menuitem
  await area.click({ button: "right" });
  await expect(component).toBeVisible();
  await page.click("text=Cut");
  await expect(component).not.toBeVisible();

  // testing nested menu
  await area.click({ button: "right" });
  await expect(component).toBeVisible();
  await page.getByRole("menuitem", { name: "Open Submenu" }).click();
  const menus = await page.getByRole("menu").all();
  expect(menus.length).toBe(2);
  await expect(page.getByRole("menuitem", { name: "Lorem" })).toBeVisible();
});

test("should manage keyboard navigation", async ({ mount, page }) => {
  await mount(<MenuFocusReturnTest />);
  const btn = page.getByRole("button");
  await btn.click();
  const menu = page.getByRole("menu");
  const allMenuItems = await menu.getByRole("menuitem").all();
  await expect(menu).toBeVisible();
  expect(allMenuItems.length).toBe(3);
  await expect(allMenuItems[0]).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  await expect(allMenuItems[1]).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  await expect(allMenuItems[2]).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.SPACE);
  await expect(menu).not.toBeVisible();
  await expect(btn).toBeFocused();

  // reopen the menu this time to activate the display form and make taht button disappear
  await page.keyboard.press(KEYBOARD_KEYS.SPACE);
  await expect(page.getByRole("menu")).toBeVisible();
  // The behavior is different when opening with click and space !
  await expect(allMenuItems[0]).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  await expect(allMenuItems[1]).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.SPACE);

  await expect(page.getByRole("textbox", { name: "name" })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "name" })).toBeFocused();
});

test("should support ref on the trigger", async ({ mount, page }) => {
  await mount(<MenuRefTest />);
  const btn = page.getByRole("button");
  const input = page.getByRole("textbox");
  const menu = page.getByRole("menu");

  await btn.focus();
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(menu).toBeVisible();
  const allMenuItems = await menu.getByRole("menuitem").all();
  expect(allMenuItems.length).toBe(1);
  await expect(allMenuItems[0]).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.SPACE);
  await expect(menu).not.toBeVisible();
  await expect(input).toBeVisible();
  await expect(input).toBeFocused();
  await input.fill("new value");
  await expect(input).toHaveValue("new value");

  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(btn).toBeVisible();
  await expect(btn).toBeFocused();
});

test("should propagate className to the wrapper", async ({ mount, page }) => {
  const component = await mount(
    <Menu.Contextual wrapperClassName="custom-class">
      <div
        style={{ inlineSize: "100%", blockSize: "50vh" }}
        data-testid="contextual"
      >
        foo
      </div>
    </Menu.Contextual>,
  );
  await expect(component).toHaveClass("custom-class");
  await expect(page.getByTestId("contextual")).toBeVisible();
});

test('secondary action should have "open in new tab" icon and label', async ({
  mount,
  page,
}) => {
  await mount(
    <Menu.Trigger
      menu={
        <Menu.Split>
          <Menu.Item
            label="Open source"
            onClick={() => {
              window.location.href =
                "/iframe.html?path=/story/components-menu--secondary-action";
            }}
          />
          <Menu.SecondaryAction
            onClick={() => {
              window
                .open(
                  "/?path=/story/components-menu--secondary-action",
                  "_blank",
                )
                ?.focus();
            }}
          />
        </Menu.Split>
      }
    >
      <Button label="Open Menu" />
    </Menu.Trigger>,
  );
  const btn = page.getByRole("button");
  await btn.click();
  const menu = page.getByRole("menu");
  const allMenuItems = await menu.getByRole("menuitem").all();

  expect(allMenuItems.length).toBe(2);
  await expect(menu).toBeVisible();
  await expect(allMenuItems[1]).toBeVisible();
  await allMenuItems[1].hover();
  const tooltip = page.getByRole("tooltip");
  await expect(tooltip).toBeVisible();
  await expect(tooltip).toHaveText("Opens in a new tab");
});

test("submenu should open on hover", async ({ mount, page }) => {
  await mount(
    <Menu.Trigger
      menu={
        <>
          <Menu.GroupLabel label="User" />
          <Menu.Item label="Profile" disabled />
          <Menu.Item label="Logout" />
          <Menu.Item label="Reload" />
          <Menu.Item label="Share" />
          <Menu.Sub
            data-testid="sprout-menu-sub-Settings"
            label="Settings"
            menu={
              <>
                <Menu.Item label="Text" />
                <Menu.Item label="Video" />
                <Menu.Sub
                  data-testid="sprout-menu-sub-Image"
                  label="Image"
                  menu={
                    <>
                      <Menu.Item label=".png" />
                      <Menu.Item label=".jpg" />
                      <Menu.Item label=".svg" />
                      <Menu.Item label=".gif" />
                    </>
                  }
                />
              </>
            }
          />
        </>
      }
    >
      <Button label="Open Menu" />
    </Menu.Trigger>,
  );

  const btn = page.getByRole("button");
  await btn.click();
  const menu = page.getByRole("menu");
  await expect(menu).toBeVisible();
  const allMenuItems = await menu.getByRole("menuitem").all();
  expect(allMenuItems.length).toBe(5);

  const settings = menu.getByRole("menuitem", { name: "Settings" });
  await settings.hover();
  const subMenu = page.getByTestId("sprout-menu-sub-Settings");
  await expect(subMenu).toBeVisible();
  const subMenuItems = await subMenu.getByRole("menuitem").all();
  expect(subMenuItems.length).toBe(3);

  const image = subMenu.getByRole("menuitem", { name: "Image" });
  await image.hover();
  const subSubMenu = page.getByTestId("sprout-menu-sub-Image");
  await expect(subSubMenu).toBeVisible();
  const subSubMenuItems = await subSubMenu.getByRole("menuitem").all();
  expect(subSubMenuItems.length).toBe(4);
});

test("should be able to navigate with keyboard between submenu and parent menu", async ({
  mount,
  page,
}) => {
  await mount(
    <Menu.Trigger
      menu={
        <>
          <Menu.Sub
            data-testid="sprout-menu-sub-Submenu1"
            label="Submenu 1"
            menu={
              <>
                <Menu.Item label="Subitem 1-1" />
                <Menu.Item label="Subitem 1-2" />
              </>
            }
          />
          <Menu.Sub
            data-testid="sprout-menu-sub-Submenu2"
            label="Submenu 2"
            menu={
              <>
                <Menu.Item label="Subitem 2-1" />
                <Menu.Item label="Subitem 2-2" />
              </>
            }
          />
        </>
      }
    >
      <Button label="Open Menu" />
    </Menu.Trigger>,
  );

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);

  const firstSubmenuTrigger = page.getByRole("menuitem", { name: "Submenu 1" });
  const secondSubmenuTrigger = page.getByRole("menuitem", {
    name: "Submenu 2",
  });
  await expect(firstSubmenuTrigger).toBeVisible();
  await expect(secondSubmenuTrigger).toBeVisible();
  const submenu1Popover = page.getByTestId("sprout-menu-sub-Submenu1");
  const submenu2Popover = page.getByTestId("sprout-menu-sub-Submenu2");

  // Open with Right Arrow Key
  await expect(firstSubmenuTrigger).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.RIGHT);
  await expect(submenu1Popover).toBeVisible();
  const firstSubmenuItem = submenu1Popover.getByRole("menuitem", {
    name: "Subitem 1-1",
  });
  await expect(firstSubmenuItem).toBeFocused();

  // Close with Left Arrow Key
  await page.keyboard.press(KEYBOARD_KEYS.LEFT);
  await expect(submenu1Popover).not.toBeVisible();

  // Navigate to second submenu and open it with Space Key
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  await expect(secondSubmenuTrigger).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.SPACE);
  await expect(submenu2Popover).toBeVisible();
  const secondSubmenuItem = submenu2Popover.getByRole("menuitem", {
    name: "Subitem 2-1",
  });
  await expect(secondSubmenuItem).toBeFocused();

  // Close with Left Arrow Key
  await page.keyboard.press(KEYBOARD_KEYS.LEFT);
  await expect(submenu2Popover).not.toBeVisible();

  // Navigate back to first submenu and open it with Enter Key
  await page.keyboard.press(KEYBOARD_KEYS.UP);
  await expect(firstSubmenuTrigger).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(submenu1Popover).toBeVisible();
});

test("should be open submenus when hovering between items quickly", async ({
  mount,
  page,
}) => {
  await mount(
    <Menu.Trigger
      menu={
        <>
          <Menu.Sub
            data-testid="sprout-menu-sub-Submenu1"
            label="Submenu 1"
            menu={
              <>
                <Menu.Item label="Subitem 1-1" />
                <Menu.Item label="Subitem 1-2" />
              </>
            }
          />
          <Menu.Sub
            data-testid="sprout-menu-sub-Submenu2"
            label="Submenu 2"
            menu={
              <>
                <Menu.Item label="Subitem 2-1" />
                <Menu.Item label="Subitem 2-2" />
              </>
            }
          />
          <Menu.Sub
            data-testid="sprout-menu-sub-Submenu3"
            label="Submenu 3"
            menu={
              <>
                <Menu.Item label="Subitem 3-1" />
                <Menu.Item label="Subitem 3-2" />
              </>
            }
          />
        </>
      }
    >
      <Button label="Open Menu" />
    </Menu.Trigger>,
  );

  const btn = page.getByRole("button");
  await btn.click();
  const menu = page.getByRole("menu");
  await expect(menu).toBeVisible();

  const submenu1Trigger = menu.getByRole("menuitem", { name: "Submenu 1" });
  const submenu1Popover = page.getByTestId("sprout-menu-sub-Submenu1");
  const submenu2Trigger = menu.getByRole("menuitem", { name: "Submenu 2" });
  const submenu2Popover = page.getByTestId("sprout-menu-sub-Submenu2");
  const submenu3Trigger = menu.getByRole("menuitem", { name: "Submenu 3" });
  const submenu3Popover = page.getByTestId("sprout-menu-sub-Submenu3");

  await submenu1Trigger.hover();
  await expect(submenu1Popover).toBeVisible();
  await submenu2Trigger.hover();
  await expect(submenu2Popover).toBeVisible();
  await submenu3Trigger.hover();
  await expect(submenu3Popover).toBeVisible();
  await submenu2Trigger.hover();
  await expect(submenu2Popover).toBeVisible();
  await submenu1Trigger.hover();
  await expect(submenu1Popover).toBeVisible();
  await submenu3Trigger.hover();
  await expect(submenu3Popover).toBeVisible();
});

test("should respect open state when controlled", async ({ mount, page }) => {
  await mount(<MenuControlledOpenState />);

  const externalButton = page.getByRole("button", {
    name: "External trigger",
    exact: true,
  });
  const menu = page.getByRole("menu");

  await externalButton.click();
  await expect(menu).toBeVisible();

  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(menu).toBeVisible();

  await page.mouse.click(0, 0);
  await expect(menu).toBeVisible();
});

test("should call onOpenChange once per actual open or close", async ({
  mount,
  page,
}) => {
  await mount(<MenuControlledOpenChange />);

  const trigger = page.getByRole("button", { name: "Trigger", exact: true });
  const externalButton = page.getByRole("button", {
    name: "External trigger",
    exact: true,
  });
  const callCount = page.getByTestId("call-count");

  await expect(callCount).toContainText("0");

  await trigger.click();
  await expect(callCount).toContainText("1");

  await page.mouse.click(0, 0);
  await expect(callCount).toContainText("2");

  await externalButton.click();
  await expect(callCount).toContainText("3");

  await page.mouse.click(0, 0);
  await expect(callCount).toContainText("3");

  await externalButton.click();
  await expect(callCount).toContainText("4");
});

test("backdrop should block interaction with background elements", async ({
  mount,
  page,
}) => {
  await mount(<MenuBackdropTest />);

  const trigger = page.getByRole("button", { name: "Open Menu", exact: true });
  const externalButton = page.getByRole("button", {
    name: "External Button",
    exact: true,
  });
  const menu = page.getByRole("menu");

  await trigger.click();
  await expect(menu).toBeVisible();

  // Try to hover the external button, should not work because of the backdrop
  await expect(
    externalButton.hover({ trial: true, timeout: 500 }),
  ).rejects.toThrow();
  await expect(menu).toBeVisible();

  // Try to click the external button, should not work because of the backdrop
  await expect(
    externalButton.click({ trial: true, timeout: 500 }),
  ).rejects.toThrow();
  await expect(menu).toBeVisible();

  // Click outside the menu to close it
  await page.mouse.click(0, 0);
  await expect(menu).not.toBeVisible();
});

test("should only close when interacting with items inside the menu", async ({
  mount,
  page,
}) => {
  await mount(
    <Menu.Trigger
      menu={
        <>
          <Menu.GroupLabel label="User" />
          <Menu.Item icon={null} label="Profile" disabled />
          <Menu.Item icon={null} label="Logout" />
          <Menu.Item icon={null} label="Reload" />
          <Menu.Item icon={null} label="Share" />
          <Menu.Divider />
          <Menu.Item
            icon={null}
            label="Edit"
            description="Don’t remember what we said about overflow, but this would be it."
            valueLabel="⌘ E"
          />
          <Menu.Item icon={null} label="Delete" />
          <Menu.Divider />
          <Menu.Item icon={null} label="Cut" valueLabel="⌘ X" />
          <Menu.Item icon={null} label="Copy" valueLabel="⌘ C" />
          <Menu.Item icon={null} label="Paste" disabled valueLabel="⌘ V" />
          <Menu.Divider />
          <Menu.Sub
            data-testid="sprout-menu-sub-Settings"
            label="Settings"
            menu={
              <>
                <Menu.Item label="Text" />
                <Menu.Item label="Video" />
                <Menu.Sub
                  data-testid="sprout-menu-sub-Image"
                  label="Image"
                  menu={
                    <>
                      <Menu.Item label=".png" />
                      <Menu.Item label=".jpg" />
                      <Menu.Divider />
                      <Menu.Item label=".svg" />
                      <Menu.Item label=".gif" />
                    </>
                  }
                />
              </>
            }
          />
          <Menu.Split>
            <Menu.Item label="Open source" />
            <Menu.SecondaryAction />
          </Menu.Split>
        </>
      }
    >
      <Button label="Open Menu" />
    </Menu.Trigger>,
  );

  const btn = page.getByRole("button", { name: "Open Menu", exact: true });
  await btn.click();
  const menu = page.getByRole("menu");
  await expect(menu).toBeVisible();

  const logOutItem = menu.getByRole("menuitem", { name: "Logout" });
  await logOutItem.click();
  await expect(menu).not.toBeVisible();

  await btn.click();
  await expect(menu).toBeVisible();

  // Click on disabled item should not close the menu
  const disabledItem = menu.getByRole("menuitem", { name: "Profile" });
  await expect(
    disabledItem.click({ trial: true, timeout: 500 }),
  ).rejects.toThrow();
  await expect(menu).toBeVisible();

  // Click on the group label should not close the menu
  const groupLabel = menu.getByText("User");
  await groupLabel.click();
  await expect(menu).toBeVisible();

  // Click on a divider should not close the menu
  const firstDivider = menu.getByRole("separator");
  await expect(
    firstDivider.click({ trial: true, timeout: 500 }),
  ).rejects.toThrow();
  await expect(menu).toBeVisible();

  // Click on submenu item should not close the menu
  const settingsItem = menu.getByRole("menuitem", { name: "Settings" });
  await settingsItem.click();
  const subMenu = page.getByTestId("sprout-menu-sub-Settings");
  await settingsItem.hover();
  await expect(subMenu).toBeVisible();

  const imageItem = subMenu.getByRole("menuitem", { name: "Image" });
  await imageItem.hover();
  const subSubMenu = page.getByTestId("sprout-menu-sub-Image");
  await expect(subSubMenu).toBeVisible();

  // Click on divider inside submenu should not close the menu
  const subMenuDivider = subSubMenu.getByRole("separator");
  await expect(
    subMenuDivider.click({ trial: true, timeout: 500 }),
  ).rejects.toThrow();
  await expect(subSubMenu).toBeVisible();

  // Click on submenu item should close all menus
  const pngItem = subSubMenu.getByRole("menuitem", { name: ".png" });
  await pngItem.click();
  await expect(menu).not.toBeVisible();
  await expect(subMenu).not.toBeVisible();
  await expect(subSubMenu).not.toBeVisible();
});

test("submenu should render to the right of the parent menu when there is space", async ({
  mount,
  page,
}) => {
  await mount(
    <Menu.Trigger
      data-testid="sprout-menu"
      menu={
        <>
          <Menu.Sub
            data-testid="sprout-menu-sub"
            label="Settings"
            menu={
              <>
                <Menu.Item label="Text" />
                <Menu.Item label="Video" />
                <Menu.Item label="Audio" />
                <Menu.Divider />
                <Menu.Item label="Documents" />
                <Menu.Item label="Downloads" />
              </>
            }
          />
          <Menu.Item label="Profile" />
          <Menu.Item label="Logout" />
          <Menu.Item label="Reload" />
          <Menu.Item label="Share" />
        </>
      }
    >
      <Button label="Open Menu" />
    </Menu.Trigger>,
  );

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  const menu = page.getByTestId("sprout-menu");
  const settings = menu.getByRole("menuitem", { name: "Settings" });
  await expect(settings).toBeVisible();
  const subMenu = page.getByTestId("sprout-menu-sub");
  await expect(menu).toBeVisible();
  await expect(settings).toBeFocused();

  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  await expect(subMenu).toBeVisible();

  const menuBox = await menu.boundingBox();
  const subMenuBox = await subMenu.boundingBox();

  if (!menuBox || !subMenuBox) {
    throw new Error("Could not measure bounding boxes for menu or submenu");
  }

  expect(subMenuBox.x).toBeGreaterThanOrEqual(menuBox.x + menuBox.width);
});

test("should open contextual menu on right click, close current menu, and open new one on subsequent right click", async ({
  mount,
  page,
}) => {
  await mount(
    <Menu.Contextual
      menu={
        <>
          <Menu.Item label="Cut" valueLabel="⌘ X" />
          <Menu.Item label="Copy" valueLabel="⌘ C" />
          <Menu.Item label="Paste" disabled />
        </>
      }
    >
      <div
        style={{ inlineSize: "100%", blockSize: "50vh" }}
        data-testid="contextual"
      >
        <Button label="Right click on me" />
      </div>
    </Menu.Contextual>,
  );

  const button = page.getByRole("button", { name: "Right click on me" });
  const menu = page.getByRole("menu");

  // 1. Open contextual menu on right-click
  await button.click({ button: "right" });
  await expect(menu).toBeVisible();
  const items = await menu.getByRole("menuitem").all();
  expect(items.length).toBe(3);

  const firstMenuPosition = await menu.boundingBox();

  // 2. Close the current menu and 3. Open a new one on subsequent right-click at different position
  await page.click("body", { button: "right", position: { x: 200, y: 100 } });
  await expect(menu).toBeVisible();

  const secondMenuPosition = await menu.boundingBox();

  // Verify menu opened at a different position (proving it closed and reopened)
  expect(firstMenuPosition?.x).not.toBe(secondMenuPosition?.x);
  expect(firstMenuPosition?.y).not.toBe(secondMenuPosition?.y);

  // Verify menu still has correct items
  const itemsAfterReopen = await menu.getByRole("menuitem").all();
  expect(itemsAfterReopen.length).toBe(3);
});

test("should ignore subsequent right click outside when `closeOnRightClickOutside` is false", async ({
  mount,
  page,
}) => {
  await mount(
    <Menu.Contextual
      closeOnRightClickOutside={false}
      menu={
        <>
          <Menu.Item label="Cut" valueLabel="⌘ X" />
          <Menu.Item label="Copy" valueLabel="⌘ C" />
          <Menu.Item label="Paste" disabled />
        </>
      }
    >
      <div
        style={{ inlineSize: "100%", blockSize: "50vh" }}
        data-testid="contextual"
      >
        <Button label="Right click on me" />
      </div>
    </Menu.Contextual>,
  );

  const button = page.getByRole("button", { name: "Right click on me" });
  const menu = page.getByRole("menu");

  // First right-click opens
  await button.click({ button: "right" });
  await expect(menu).toBeVisible();

  const firstMenuPosition = await menu.boundingBox();

  // Second right-click outside should be ignored
  await page.click("body", { button: "right", position: { x: 200, y: 100 } });
  await expect(menu).toBeVisible();

  const secondMenuPosition = await menu.boundingBox();

  // Verify menu position has not changed
  expect(secondMenuPosition?.x).toBe(firstMenuPosition?.x);
  expect(secondMenuPosition?.y).toBe(firstMenuPosition?.y);
});

test("should close menu on right click outside when `closeOnRightClickOutside` is true", async ({
  mount,
  page,
}) => {
  await mount(
    <Menu.Trigger
      closeOnRightClickOutside
      menu={
        <>
          <Menu.Item label="Cut" />
          <Menu.Item label="Copy" />
        </>
      }
    >
      <Button label="Open Menu" />
    </Menu.Trigger>,
  );

  const trigger = page.getByRole("button", { name: "Open Menu" });
  await trigger.click();
  const menu = page.getByRole("menu");
  await expect(menu).toBeVisible();

  await page.click("body", { button: "right" });
  await expect(menu).not.toBeVisible();
});

test("should close submenu when clicking on another submenu trigger", async ({
  mount,
  page,
}) => {
  await mount(
    <Menu.Trigger
      menu={
        <>
          <Menu.Sub
            data-testid="sprout-menu-sub-Submenu1"
            label="Submenu 1"
            menu={
              <>
                <Menu.Item label="Subitem 1-1" />
                <Menu.Item label="Subitem 1-2" />
              </>
            }
          />
          <Menu.Sub
            data-testid="sprout-menu-sub-Submenu2"
            label="Submenu 2"
            menu={
              <>
                <Menu.Item label="Subitem 2-1" />
                <Menu.Item label="Subitem 2-2" />
              </>
            }
          />
        </>
      }
    >
      <Button label="Open Menu" />
    </Menu.Trigger>,
  );

  const btn = page.getByRole("button", { name: "Open Menu", exact: true });
  await btn.click();
  const menu = page.getByRole("menu");
  await expect(menu).toBeVisible();

  const submenu1Trigger = menu.getByRole("menuitem", { name: "Submenu 1" });
  const submenu1Popover = page.getByTestId("sprout-menu-sub-Submenu1");
  const submenu2Trigger = menu.getByRole("menuitem", { name: "Submenu 2" });
  const submenu2Popover = page.getByTestId("sprout-menu-sub-Submenu2");

  await submenu1Trigger.click();
  await expect(submenu1Popover).toBeVisible();

  await submenu2Trigger.click();
  await expect(submenu2Popover).toBeVisible();
  await expect(submenu1Popover).not.toBeVisible();
});

test("should close menu and focus trigger on Tab key press", async ({
  mount,
  page,
}) => {
  await mount(
    <Menu.Trigger
      menu={
        <>
          <Menu.Item label="Cut" />
          <Menu.Item label="Copy" />
          <Menu.Item label="Paste" />
        </>
      }
    >
      <Button label="Open Menu" />
    </Menu.Trigger>,
  );

  const trigger = page.getByRole("button", { name: "Open Menu" });
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(trigger).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  const menu = page.getByRole("menu");
  await expect(menu).toBeVisible();

  const firstItem = menu.getByRole("menuitem", { name: "Cut" });
  await expect(firstItem).toBeFocused();

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(menu).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test("should close submenu and focus parent menu item on Tab key press", async ({
  mount,
  page,
}) => {
  await mount(
    <Menu.Trigger
      menu={
        <>
          <Menu.Sub
            data-testid="sprout-menu-sub-Settings"
            label="Settings"
            menu={
              <>
                <Menu.Sub
                  data-testid="sprout-menu-sub-Settings-video"
                  label="Settings video"
                  menu={
                    <>
                      <Menu.Item label="Video format" />
                      <Menu.Item label="Video encoding" />
                    </>
                  }
                />
                <Menu.Item label="Text" />
                <Menu.Item label="Video" />
              </>
            }
          />
          <Menu.Item label="Profile" />
        </>
      }
    >
      <Button label="Open Menu" />
    </Menu.Trigger>,
  );

  const trigger = page.getByRole("button", { name: "Open Menu" });
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(trigger).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);
  const menu = page.getByRole("menu");
  await expect(menu).toBeVisible();

  const settingsItem = menu.getByRole("menuitem", { name: "Settings" });
  await expect(settingsItem).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);

  const subMenu = page.getByTestId("sprout-menu-sub-Settings");
  await expect(subMenu).toBeVisible();

  const settingsVideoItem = subMenu.getByRole("menuitem", {
    name: "Settings video",
  });
  await expect(settingsVideoItem).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.ENTER);

  const subMenuVideo = page.getByTestId("sprout-menu-sub-Settings-video");
  await expect(subMenuVideo).toBeVisible();

  const firstSubSubItem = subMenuVideo.getByRole("menuitem", {
    name: "Video format",
  });
  await expect(firstSubSubItem).toBeFocused();

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(subMenuVideo).not.toBeVisible();
  await expect(subMenu).not.toBeVisible();
  await expect(menu).not.toBeVisible();
  await expect(trigger).toBeFocused();
});
