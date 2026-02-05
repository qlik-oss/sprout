import { expect, test } from "@playwright/experimental-ct-react";

import { LinkTest } from "./LinkTest";

test(`should link support a11y rules`, async ({ page, mount }) => {
  await mount(<LinkTest />);
  const allLinks = await page.getByRole("link").all();
  const count = await page.getByTestId("count");
  await expect(count).toHaveText("0");
  // means they all have the role link
  expect(allLinks.length).toBe(5);
  // test if tab will take the focus on the first link
  await expect(allLinks[0]).not.toBeFocused();
  await page.keyboard.press("Tab");
  await expect(allLinks[0]).toBeFocused();
  // as second link is disabled next tab will go to third link
  await expect(allLinks[1]).toBeDisabled();
  await expect(allLinks[1]).toHaveAttribute("aria-disabled", "true");
  await page.keyboard.press("Tab");
  await expect(allLinks[2]).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(count).toHaveText("1");

  // enforce security with target attribute
  await expect(allLinks[2]).toHaveAttribute("target", "_blank");
  await expect(allLinks[2]).toHaveAttribute("rel", "noopener noreferrer");

  // expect line-height to be aligned with text and to not change the height of its parent
  // without line-height inherits from parent, the height of the parent will be 20px
  const height = await allLinks[4].evaluate((el) => el.clientHeight);
  expect(height).toBe(18);
});
