import { expect, test } from "@playwright/experimental-ct-react";

import { Avatar } from ".";
import { getAxeReport } from "../PlaywrightUtils";

test(`should img be accessible img`, async ({ mount, page }) => {
  const component = await mount(
    <Avatar
      id="component-testing"
      img={{ src: "https://nohost/img/123", alt: "alternative text" }}
    />,
  );

  const img = component.getByRole("img");
  await expect(img).toBeVisible();
  await expect(img).toHaveAttribute("alt", "alternative text");

  // a11y check
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});

test(`should text becomes an accessible img`, async ({ mount, page }) => {
  await mount(<Avatar id="component-testing" text="AB" />);
  const img = page.getByRole("img");
  await expect(img).toBeVisible();
  await expect(img).toHaveAttribute("aria-label", "Avatar");

  // a11y check
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});

test(`should icon becomes an accessible img`, async ({ mount, page }) => {
  await mount(<Avatar id="component-testing" icon={<svg />} />);

  const img = page.getByRole("img");
  await expect(img).toBeVisible();
  // await expect(img).toHaveAttribute("aria-label", "Avatar");

  // a11y check
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("should not shrink", async ({ mount, page }) => {
  await mount(
    <div style={{ inlineSize: "10px" }}>
      <Avatar text="AB" />
    </div>,
  );
  const avatar = page.getByText("AB");
  await expect(avatar).toBeVisible();
  const box = await avatar.boundingBox();
  expect(box?.width).toBe(32);
});
