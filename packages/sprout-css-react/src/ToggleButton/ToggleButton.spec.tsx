import { expect, test } from "@playwright/experimental-ct-react";

import { ButtonGroup } from "../ButtonGroup";
import { getAxeReport } from "../PlaywrightUtils";
import { ToggleButton } from "./ToggleButton";

test("should be accessible", async ({ page, mount }) => {
  const content = await mount(
    <div id="component-testing">
      <ToggleButton label="Default" />
      <ToggleButton label="Toggled" toggled />
      <ButtonGroup>
        <ToggleButton label="InGroup" />
        <ToggleButton label="InGroup toggled" toggled />
      </ButtonGroup>
    </div>,
  );

  const buttons = await content.getByRole("button").all();
  expect(buttons.length).toBe(4);

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  // should toggle on click
  await expect(buttons[0]).toHaveAttribute("aria-pressed", "false");
  await buttons[0].click();
  await expect(buttons[0]).toHaveAttribute("aria-pressed", "true");

  await expect(buttons[1]).toHaveAttribute("aria-pressed", "true");
});
