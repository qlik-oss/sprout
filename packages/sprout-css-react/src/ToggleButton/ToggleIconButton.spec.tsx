import { expect, test } from "@playwright/experimental-ct-react";
import BinOutline from "@qlik/sprout-icons/react/BinOutline";

import { ButtonGroup } from "../ButtonGroup";
import { getAxeReport } from "../PlaywrightUtils";
import { ToggleIconButton } from "./ToggleIconButton";

test("should be accessible", async ({ page, mount }) => {
  const content = await mount(
    <div id="component-testing">
      <ToggleIconButton id="foo" label="Default" icon={<BinOutline />} />
      <ToggleIconButton label="Toggled" toggled icon={<BinOutline />} />
      <ButtonGroup>
        <ToggleIconButton label="InGroup" icon={<BinOutline />} />
        <ToggleIconButton
          label="InGroup toggled"
          toggled
          icon={<BinOutline />}
        />
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
