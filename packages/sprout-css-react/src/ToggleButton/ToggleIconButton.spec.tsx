import { expect, test } from "@playwright/experimental-ct-react";
import Delete from "@qlik/sprout-icons/react/Delete";

import { ButtonGroup } from "../ButtonGroup";
import { getAxeReport } from "../PlaywrightUtils";
import { ToggleIconButton } from "./ToggleIconButton";

test("should be accessible", async ({ page, mount }) => {
  const content = await mount(
    <div id="component-testing">
      <ToggleIconButton id="foo" label="Default" icon={<Delete />} />
      <ToggleIconButton label="Toggled" toggled icon={<Delete />} />
      <ButtonGroup>
        <ToggleIconButton label="InGroup" icon={<Delete />} />
        <ToggleIconButton label="InGroup toggled" toggled icon={<Delete />} />
      </ButtonGroup>
    </div>,
  );

  const buttons = await content.getByRole("button").all();
  expect(buttons.length).toBe(4);

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  const [button] = buttons;

  expect(await button.getAttribute("id")).toBe("foo");

  // should toggle on click
  expect(await button.getAttribute("aria-pressed")).toBe("false");
  await button.click();
  expect(await button.getAttribute("aria-pressed")).toBe("true");

  // should display tooltip on hover
  await button.hover();
  const tooltip = page.locator("css=#foo");
  await expect(tooltip).toBeVisible();
});
