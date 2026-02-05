import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import { Tag } from "./Tag";

test(`should Tag text be accessible`, async ({ mount, page }) => {
  await mount(<Tag text="Tag" id="component-testing" />);

  const text = page.getByText("Tag");
  await expect(text).toBeVisible();

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});

test(`should Tag text move content in tooltip if too long`, async ({
  mount,
  page,
}) => {
  await mount(
    <Tag text="Tag text is really too long" id="component-testing" />,
  );

  const tooltip = page.getByRole("tooltip");
  const text = page.getByText("Tag text is r");
  await text.hover();
  await expect(tooltip).toBeVisible;
});

test("should display ellipsis when text exceeds character limit", async ({
  mount,
  page,
}) => {
  const longText = "Tag text is really too long";
  await mount(<Tag text={longText} id="component-testing" />);

  const displayedText = page.getByText("Tag text is really too lo…");
  await expect(displayedText).toBeVisible();
  await displayedText.hover();
  const tooltip = page.getByRole("tooltip");
  await expect(tooltip).toBeVisible();
  const tooltipText = page.getByText(longText);
  await expect(tooltipText).toBeVisible();
  const ariaLabel = await displayedText.getAttribute("aria-label");
  expect(ariaLabel).toBe(longText);
});

test("should Tag with onRemove display a remove button", async ({
  mount,
  page,
}) => {
  await mount(<Tag text="Tag" onRemove={() => {}} />);
  const text = page.getByText("remove");

  const removeButton = page.getByRole("button");
  await expect(removeButton).toBeVisible();
  await removeButton.hover();
  await expect(text).toBeVisible();
});
