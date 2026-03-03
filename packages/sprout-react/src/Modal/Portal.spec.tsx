import { expect, test } from "@playwright/experimental-ct-react";

import { Portal } from "./Portal";

test("should Portal apply theme", async ({ mount, page }) => {
  await mount(
    <Portal>
      <div data-testid="test-element">foo</div>
    </Portal>,
  );
  const el = page.getByTestId("test-element");
  const parent = el.locator("..");
  await expect(parent).toHaveAttribute("data-qlik-theme", "qlik-light");
});
