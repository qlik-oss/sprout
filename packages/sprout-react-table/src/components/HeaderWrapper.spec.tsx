import { expect, test } from "@playwright/experimental-ct-react";

import { Table2Cols, TableSeveralCols } from "./HeaderWrapperTest";

test("allows hiding when multiple user columns are visible", async ({
  mount,
  page,
}) => {
  await mount(<TableSeveralCols />);

  const initialColumnHeaderCount = page.getByRole("columnheader");
  await expect(initialColumnHeaderCount).toHaveCount(11);

  const header = page.getByTestId("table.header.firstName");
  await header.hover();
  const contextualMenuButton = header.getByRole("button", {
    name: "Contextual actions",
  });
  await contextualMenuButton.click();

  const menu = page.getByRole("menu");
  await expect(menu).toBeVisible();
  const hideAction = menu.getByRole("menuitem", { name: "Hide column" });
  await expect(hideAction).toBeVisible();
  await hideAction.click();

  await expect(initialColumnHeaderCount).toHaveCount(10);
});

test("prevents hiding the last visible user column", async ({
  mount,
  page,
}) => {
  await mount(<Table2Cols />);

  const initialColumnHeaderCount = page.getByRole("columnheader");
  await expect(initialColumnHeaderCount).toHaveCount(2);

  const lastNameHeader = page.getByTestId("table.header.lastName");
  await lastNameHeader.hover();
  const contextualMenuButton = lastNameHeader.getByRole("button", {
    name: "Contextual actions",
  });
  await contextualMenuButton.click();

  // We can hide when there are 2 user columns visible
  const menu = page.getByRole("menu");
  await expect(menu).toBeVisible();
  const hideAction = menu.getByRole("menuitem", { name: "Hide column" });
  await expect(hideAction).toBeVisible();
  await hideAction.click();

  await expect(initialColumnHeaderCount).toHaveCount(1);

  // Try to hide the last user column

  const firstNameHeader = page.getByTestId("table.header.firstName");
  await firstNameHeader.hover();
  const contextualMenuButton2 = firstNameHeader.getByRole("button", {
    name: "Contextual actions",
  });
  await contextualMenuButton2.click();

  const menu2 = page.getByRole("menu");
  await expect(menu2).toBeVisible();
  const hideAction2 = menu2.getByRole("menuitem", { name: "Hide column" });
  await expect(hideAction2).not.toBeVisible();

  await expect(initialColumnHeaderCount).toHaveCount(1);
});
