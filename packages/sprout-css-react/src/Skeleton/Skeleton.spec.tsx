import { expect, test } from "@playwright/experimental-ct-react";

import { Skeleton, type SkeletonProps } from ".";
import { getAxeReport } from "../PlaywrightUtils";

const VARIANTS: Array<SkeletonProps["variant"]> = [
  "text",
  "circle",
  "rectangle",
  "Button",
  "IconButton",
  "Input",
  "InputField",
];

Object.values(VARIANTS).forEach((variant) => {
  test(`should use variant ${variant}`, async ({ mount, page }) => {
    await mount(
      <div data-testid="wrapper" id="component-testing">
        <Skeleton variant={variant} />
      </div>,
    );

    const component = page.getByTestId("wrapper");
    await expect(component).toBeVisible();
    const accessibilityScanResults = await getAxeReport(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
