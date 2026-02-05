import { expect, test } from "@playwright/experimental-ct-react";

import { UseStyleOverrideTest } from "./UseStyleOverrideTest";

test("should override styles using useStyleOverride hook", async ({ mount }) => {
  const content = await mount(<UseStyleOverrideTest />);
  await expect(content).toBeVisible();
  await expect(content).toHaveText("useStyleOverride hook");
  await expect(content).toHaveCSS("background-color", "rgb(0, 122, 204)");
  await expect(content).toHaveCSS("color", "rgb(255, 255, 255)");
});
