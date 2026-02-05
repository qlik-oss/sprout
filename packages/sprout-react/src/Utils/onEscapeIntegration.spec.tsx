import { expect, test } from "@playwright/experimental-ct-react";

import { Button } from "../Button";
import { Menu } from "../Menu";
import { Modal } from "../Modal";
import { Select } from "../Select";
import { KEYBOARD_KEYS } from "./keyboardKeys";

test(`should close on escape`, async ({ mount, page }) => {
  await mount(
    <div>
      <p>Hello world</p>
      <Modal headerTitle="Integration" defaultVisible>
        <div>
          <Menu.Trigger
            menu={
              <>
                <Menu.GroupLabel label="User" />
                <Menu.Item label="Reload" />
                <Menu.Item label="Share" />
                <Menu.Sub
                  label="Settings"
                  menu={
                    <>
                      <Menu.Item label="Text" />
                      <Menu.Item label="Video" />
                      <Menu.Sub
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
                <Menu.Divider />
                <Menu.Item
                  label="Edit"
                  description="Don’t remember what we said about overflow, but this would be it."
                  valueLabel="⌘ E"
                />
                <Menu.Item label="Delete" />
                <Menu.Divider />
                <Menu.Item label="Cut" valueLabel="⌘ X" />
                <Menu.Item label="Copy" valueLabel="⌘ C" />
                <Menu.Item label="Paste" disabled valueLabel="⌘ V" />
              </>
            }
          >
            <Button label="Open Menu" />
          </Menu.Trigger>
          <Select.Multi
            data-testid="select-vegetables"
            label="Vegetables"
            placeholder="Select vegetables"
            labelClear="Clear input"
          >
            <Select.OptGroup label="Legumes">
              <Select.Option value="beans" data-testid="select-beans">
                Beans
              </Select.Option>
              <Select.Option value="peas" data-testid="select-peas">
                Peas
              </Select.Option>
              <Select.Option value="lentils" data-testid="select-lentils">
                Lentils
              </Select.Option>
            </Select.OptGroup>
          </Select.Multi>
        </div>
      </Modal>
    </div>,
  );
  const hello = await page.getByText("Hello world");
  const modal = await page.getByRole("dialog");
  const menuBtn = await page.getByRole("button", { name: "Open Menu" });
  const multiSelect = await page.getByRole("combobox");
  const listbox = page.getByRole("listbox");

  await expect(modal).toBeVisible();
  await expect(menuBtn).toBeVisible();

  await menuBtn.click();
  const menu = await page.getByRole("menu");
  await expect(menu).toBeVisible();

  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(menu).not.toBeVisible();
  await expect(modal).toBeVisible();

  await multiSelect.click();
  await expect(listbox).toBeVisible();
  await expect(multiSelect).toBeFocused();

  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(listbox).not.toBeVisible();
  await expect(modal).toBeVisible();

  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);
  await expect(modal).not.toBeVisible();
  await expect(hello).toBeVisible();
});
