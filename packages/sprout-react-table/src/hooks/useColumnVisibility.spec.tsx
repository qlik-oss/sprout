import { expect, test } from "@playwright/experimental-ct-react";

import { TableTest } from "../TanstackTableTest";

const MENU_NAMES = {
  manageColumns: "Manage columns",
  contextualActions: "Contextual actions",
};

test("should support column visibility feature", async ({ page, mount }) => {
  await mount(<TableTest />);
  const headers = await page.getByRole("columnheader");
  let allHeaders = await headers.all();
  const firstHeader = allHeaders[0];
  await firstHeader.focus();
  await firstHeader
    .getByRole("button", { name: MENU_NAMES.contextualActions })
    .click();

  // check if the menu is open
  const menu = await page.getByRole("menu");
  await expect(menu).toBeVisible();
  await menu.getByRole("menuitem", { name: MENU_NAMES.manageColumns }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  const checkboxes = await page.getByRole("checkbox").all();
  expect(checkboxes.length).toBe(12);

  // test if we uncheck the first column
  await checkboxes[1].click();
  expect(await page.getByRole("columnheader").count()).toBe(10);
  allHeaders = await headers.all();
  await expect(allHeaders[0]).toContainText("Last Name");
  await checkboxes[1].click();
  allHeaders = await headers.all();
  await expect(allHeaders[0]).toContainText("First Name");

  // test if we uncheck all columns
  await checkboxes[0].click();
  // we should keep the first one checked
  await expect(checkboxes[0]).not.toBeChecked();
  await expect(checkboxes[1]).toBeChecked();
  await expect(checkboxes[2]).not.toBeChecked();
  await expect(checkboxes[3]).not.toBeChecked();
  await expect(checkboxes[4]).not.toBeChecked();
  await expect(checkboxes[5]).not.toBeChecked();
  await expect(checkboxes[6]).not.toBeChecked();

  await checkboxes[0].click();
  await expect(checkboxes[0]).toBeChecked();
  await expect(checkboxes[1]).toBeChecked();
  await expect(checkboxes[2]).toBeChecked();
  await expect(checkboxes[3]).toBeChecked();
  await expect(checkboxes[4]).toBeChecked();
  await expect(checkboxes[5]).toBeChecked();
  await expect(checkboxes[6]).toBeChecked();
});

test("should ColumnVisibilityMenu be displayed within the viewport", async ({
  page,
  mount,
}) => {
  await mount(
    <div style={{ inlineSize: 300, marginInlineStart: 200, blockSize: 200 }}>
      <TableTest />
    </div>
  );

  const headers = await page.getByRole("columnheader");
  const allHeaders = await headers.all();
  const firstHeader = allHeaders[0];
  await firstHeader.focus();
  await firstHeader
    .getByRole("button", { name: MENU_NAMES.contextualActions })
    .click();
  const headerBox = await firstHeader.boundingBox();
  const firstHeaderBox = await firstHeader.boundingBox();

  // check if the menu is open
  const menu = await page.getByRole("menu");
  await expect(menu).toBeVisible();
  await menu.getByRole("menuitem", { name: MENU_NAMES.manageColumns }).click();

  // get the bounding box of the dialog
  const dialog = await page.getByRole("dialog");
  const menuBox = await dialog.boundingBox();
  // check if the dialog is within the viewport
  const viewport = page.viewportSize();
  if (!viewport || !menuBox || !headerBox || !firstHeaderBox) {
    expect(viewport).toBeDefined();
    expect(menuBox).toBeDefined();
    expect(headerBox).toBeDefined();
    expect(firstHeaderBox).toBeDefined();
    return;
  }
  expect(menuBox.x + menuBox.width).toBeLessThanOrEqual(viewport.width);
  expect(menuBox.y + menuBox.height).toBeLessThanOrEqual(viewport.height);
  expect(menuBox.x).toBeGreaterThanOrEqual(headerBox.x);
  expect(menuBox.x).toBeGreaterThanOrEqual(firstHeaderBox.x);
  expect(menuBox.x).toBeLessThanOrEqual(
    firstHeaderBox.x + firstHeaderBox.width
  );
});

test("should ColumnVisibilityMenu support scrolling with many columns", async ({
  page,
  mount,
}) => {
  await page.setViewportSize({ width: 1280, height: 350 });

  await mount(<TableTest />);

  const headers = await page.getByRole("columnheader").all();
  const firstHeader = headers[0];
  await firstHeader.focus();
  await firstHeader
    .getByRole("button", { name: MENU_NAMES.contextualActions })
    .click();

  // WHEN Opening the Column visibility menu
  const menu = page.getByRole("menu");
  await expect(menu).toBeVisible();
  await menu.getByRole("menuitem", { name: MENU_NAMES.manageColumns }).click();
  // THEN Column visibility menu should be displayed
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  // AND all columns checkboxes should be displayed, including "Select all"
  const checkboxes = dialog.getByRole("checkbox");
  const checkboxesCount = await checkboxes.count();
  expect(checkboxesCount).toBe(12);
  // AND the last checkbox should not be visible without scrolling
  const lastCheckbox = checkboxes.last();
  await expect(lastCheckbox).not.toBeInViewport();
  // AND columns container should be scrollable
  const scrollContainer = dialog.getByTestId(
    "column-visibility-menu-list-container"
  );
  const isScrollable = await scrollContainer.evaluate((el) => {
    return el.scrollHeight > el.clientHeight;
  });
  expect(isScrollable).toBe(true);
  // AND scrollbar thumb should be at the top position
  const initialScrollTop = await scrollContainer.evaluate((el) => el.scrollTop);
  expect(initialScrollTop).toBe(0);

  // WHEN Scrolling down to the middle of the container
  await scrollContainer.evaluate((el) => {
    el.scroll({ top: el.scrollHeight / 2 });
  });
  // THEN Scroll position should be updated
  const scrollTopAfterScroll = await scrollContainer.evaluate(
    (el) => el.scrollTop
  );
  expect(scrollTopAfterScroll).toBeGreaterThan(initialScrollTop);
  expect(scrollTopAfterScroll).toBeGreaterThan(50);

  // WHEN Scrolling to the bottom of the container
  await scrollContainer.evaluate((el) => {
    el.scroll({ top: el.scrollHeight });
  });
  // THEN Scroll position should be at the bottom
  const scrollTopAtBottom = await scrollContainer.evaluate(
    (el) => el.scrollTop
  );
  expect(scrollTopAtBottom).toBeGreaterThan(scrollTopAfterScroll);
  // AND the last column checkbox should now be in viewport
  await expect(lastCheckbox).toBeInViewport();
  // THEN Click the last checkbox to ensure it's interactive
  await lastCheckbox.click();
  await expect(lastCheckbox).not.toBeChecked();
});
