import { expect, test } from "@playwright/experimental-ct-react";

import {
  InlineEditPrimitiveFunctionTest,
  InlineEditPrimitiveJSXTest,
} from "./InlineEditTest";

test("works when view/edit are JSX elements", async ({ mount, page }) => {
  await mount(<InlineEditPrimitiveJSXTest />);

  const button = page.getByRole("button");
  await button.click();

  const edit = page.getByTestId("edit-input");
  await expect(edit).toBeVisible();

  const saveButton = page.getByRole("button", { name: /save/i });
  await saveButton.click();

  const view = page.getByTestId("view-content");
  await expect(view).toBeVisible();
});

test("works when view/edit are functions returning JSX", async ({
  mount,
  page,
}) => {
  await mount(<InlineEditPrimitiveFunctionTest />);

  const button = page.getByRole("button");
  await button.click();

  const edit = page.getByTestId("edit-input");
  await expect(edit).toBeVisible();

  const saveButton = page.getByRole("button", { name: /save/i });
  await saveButton.click();

  const view = page.getByTestId("view-content");
  await expect(view).toBeVisible();
});
