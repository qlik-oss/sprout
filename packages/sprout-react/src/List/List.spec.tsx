import { expect, test } from "@playwright/experimental-ct-react";

import { ListTest } from "./ListTest";

test(`should support a11y rules without useGesture`, async ({
  page,
  mount,
}) => {
  const component = await mount(<ListTest data-testid="foo" />);

  // HTML structure
  const list = await page.getByRole("list");
  const allItems = await component.getByRole("listitem").all();
  const allButtons = allItems.map((item) => item.getByRole("button"));
  await expect(list).toBeVisible();
  expect(allItems.length).toBe(7);
  expect(allButtons.length).toBe(7);

  await expect(allButtons[1]).toBeDisabled();
  await expect(allButtons[0]).not.toBeFocused();
  await expect(allButtons[2]).not.toBeFocused();

  await expect(allItems[2]).toHaveAttribute("data-selected", "true");

  await allButtons[0].click();
  await expect(allButtons[0]).toBeFocused();

  //   await page.keyboard.press("Tab");
  //   await expect(allButtons[2]).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(allButtons[2]).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(allButtons[3]).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(allItems[3]).toHaveAttribute("data-selected", "true");

  // lets open the menu
  await page.keyboard.press("Tab");
  await expect(allButtons[5]).toBeFocused();
  await expect(allItems[5]).not.toHaveAttribute("data-selected", "true");
  await page.keyboard.press("Space");
  await expect(allItems[5]).toHaveAttribute("data-selected", "true");
  const menu = await page.getByRole("menu");
  await expect(menu).toBeVisible();
  await page.mouse.click(0, 0); // click outside to close the menu
  await allButtons[0].click();
  await expect(menu).not.toBeVisible();
  await expect(allItems[0]).toHaveAttribute("data-selected", "true");

  // let's see if we add an checkbox inside the list if takes the focus
  await allButtons[6].click();
  await expect(allButtons[6]).toBeFocused();
  // this is a test to see if we can hover the checkbox
  // it fails to get hover it if the absolute button `.item_interactive` stay on top of it
  await page.getByRole("checkbox").hover();
});

test(`should support a11y rules with useGesture`, async ({ page, mount }) => {
  await mount(<ListTest useGesture />);

  // HTML structure
  const list = await page.getByRole("list");
  const allItems = await page.getByRole("listitem").all();
  const allButtons = allItems.map((item) => item.getByRole("button"));
  await expect(list).toBeVisible();

  await expect(allButtons[1]).toBeDisabled();
  await expect(allButtons[0]).not.toBeFocused();
  await expect(allButtons[2]).not.toBeFocused();
  await expect(allItems[2]).toHaveAttribute("data-selected", "true");

  await page.keyboard.press("Tab");
  await expect(allButtons[2]).toBeFocused();
  await page.keyboard.press("ArrowDown");
  await expect(allButtons[3]).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(allItems[3]).toHaveAttribute("data-selected", "true");
  await page.keyboard.press("Home");
  await expect(allButtons[0]).toBeFocused();
  await page.keyboard.press("End");
  await expect(allButtons[6]).toBeFocused();

  // lets open the menu
  await allButtons[5].focus();
  await page.keyboard.press("Space");
  await expect(allItems[5]).toHaveAttribute("data-selected", "true");
  const menu = await page.getByRole("menu");
  await expect(menu).toBeVisible();
  await page.mouse.click(0, 0); // click outside to close the menu
  await allButtons[0].click();
  await expect(menu).not.toBeVisible();
  await expect(allItems[0]).toHaveAttribute("data-selected", "true");
});
