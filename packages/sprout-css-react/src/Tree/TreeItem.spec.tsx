import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import { TreeItem } from "./TreeItem";

test("should be accessible", async ({ page, mount }) => {
  const content = await mount(
    <div id="component-testing">
      <TreeItem id="simple" label="Simple" />
      <TreeItem id="expanded" label="Expanded" expanded />
    </div>,
  );

  const buttons = await content.getByRole("button").all();
  expect(buttons.length).toBe(2); // 1 for each TreeItem (one for the label, one for the expand/collapse icon)

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("should map properties to native attributes", async ({ mount }) => {
  const content = await mount(
    <div id="component-testing">
      <TreeItem id="simple" label="Simple" disabled />
    </div>,
  );

  const button = await content.getByRole("button");
  await expect(button).toBeDisabled();
});

test("should call onexpand on click", async ({ mount }) => {
  let defaultExpanded = false;
  const onExpand = (id: string, expanded: boolean) => {
    defaultExpanded = expanded;
  };
  const content = await mount(
    <div id="component-testing">
      <TreeItem
        id="expandable"
        label="Expandable"
        onExpand={onExpand}
        expanded={defaultExpanded}
      />
    </div>,
  );

  const button = await content.getByRole("button");
  await button.click();
  expect(defaultExpanded).toBe(true);
});
