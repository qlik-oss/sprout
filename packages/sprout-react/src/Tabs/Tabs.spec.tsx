import { expect, test } from "@playwright/experimental-ct-react";
import type { Page } from "@playwright/test";

import { Tabs, type TabsContainerProps } from ".";
import { TabTests } from "./TabsTest";

const Sizes: Array<TabsContainerProps["size"]> = ["s", "m"];

async function expectTabWidth(
  page: Page,
  size: TabsContainerProps["size"],
  retry = 0,
): Promise<boolean> {
  if (retry >= 10) {
    return false;
  }
  const tracker = page.getByTestId("tab-tracker");
  let width = await tracker.evaluate((el) => el.getBoundingClientRect().width);
  width = Math.floor(width);
  let result = false;
  if (size === "m") {
    if (width === 74) {
      result = true;
    } else {
      await page.waitForTimeout(100);
      result = await expectTabWidth(page, size, retry + 1);
    }
  }
  if (size === "s") {
    if (width === 63) {
      result = true;
    } else {
      await page.waitForTimeout(100);
      result = await expectTabWidth(page, size, retry + 1);
    }
  }
  return result;
}

Object.values(Sizes).forEach((size) => {
  test(`should display tabs in ${size} size`, async ({ mount, page }) => {
    await mount(<TabTests size={size} defaultActiveKey="Assets" />);
    await expectTabWidth(page, size);
  });
});

test(`should display only icons if useIconButton`, async ({ mount, page }) => {
  await mount(<TabTests useIconButton defaultActiveKey="Assets" />);
  const component = page.getByRole("tab", { name: "Settings" });
  await expect(component).toBeVisible();
  expect(await component.textContent()).toBe("");
});

test(`should change tab if I click on it`, async ({ mount, page }) => {
  await mount(<TabTests defaultActiveKey="Assets" />);

  // check the displayed panel
  await expect(page.getByRole("tabpanel")).toBeVisible();
  expect(await page.getByRole("tabpanel").textContent()).toContain(
    "Tab content for Assets",
  );
  const tab = page.getByRole("tab", { name: "Settings" });
  await tab.click();
  const panel = page.getByRole("tabpanel");
  await expect(panel).toBeVisible();
  const content = await panel.textContent();
  expect(content).toContain("Tab content for Settings");

  await expect(page.getByRole("tab", { name: "Settings" })).toHaveAttribute(
    "aria-selected",
    "true",
  );
});

test(`should be usable with keyboard`, async ({ mount, page }) => {
  await mount(<TabTests defaultActiveKey="Assets" />);
  // html structure
  const panel = page.getByRole("tabpanel");
  const list = page.getByRole("tablist");
  const tabs = await page.getByRole("tab").all();

  await expect(panel).toBeVisible();
  await expect(list).toBeVisible();
  expect(tabs.length).toBe(4);
  const [assets, settings, focusable, users] = tabs;
  await expect(users).toBeDisabled();
  await expect(assets).toHaveAttribute("aria-selected", "true");

  // keyboard navigation on tabs
  await assets.focus();
  await page.keyboard.press("ArrowRight");
  await expect(settings).toBeFocused();
  await page.keyboard.press("ArrowLeft");
  await expect(assets).toBeFocused();
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press("ArrowRight");
  await expect(focusable).toBeFocused();
  await page.keyboard.press("Home");
  await expect(assets).toBeFocused();
  await page.keyboard.press("End");
  await expect(focusable).toBeFocused();

  // keyboard navigation activation
  await page.keyboard.press("Space");
  await expect(panel).toBeVisible();
  await expect(panel).toContainText(
    "This panel content has some focusable elements",
  );
  await expect(focusable).toHaveAttribute("aria-selected", "true");

  // keyboard navigation tabpanel
  await expect(panel).toHaveAttribute("tabindex", "-1");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("button", { name: "Focusable button" }),
  ).toBeFocused();
  await assets.click();
  await expect(panel).toHaveText("Tab content for Assets");
  await expect(panel).toHaveAttribute("tabindex", "0");
  await page.keyboard.press("Tab");
  await expect(panel).toBeFocused();

  // Keyboard navigation loop over tabs
  await focusable.focus();
  await page.keyboard.press("ArrowRight");
  await expect(assets).toBeFocused();
  await page.keyboard.press("ArrowLeft");
  await expect(focusable).toBeFocused();
});

test("should respect the wrappers height", async ({ mount, page }) => {
  await mount(
    <div style={{ blockSize: "500px", inlineSize: "500px" }}>
      <Tabs.Container defaultActiveKey="Test-1" height="100%">
        <Tabs.List showTrack>
          <Tabs.Tab aria-controls="Test-1" title="Test-1" />
          <Tabs.Tab aria-controls="Test-2" title="Test-2" />
          <Tabs.Tab aria-controls="Test-3" title="Test-3" />
        </Tabs.List>
        <Tabs.Panel id="Test-1">
          {Array.from({ length: 50 }, (_, i) => (
            <p key={i}>Test 1 - Item {i + 1}</p>
          ))}
        </Tabs.Panel>
        <Tabs.Panel id="Test-2">
          {Array.from({ length: 50 }, (_, i) => (
            <p key={i}>Test 2 - Item {i + 1}</p>
          ))}
        </Tabs.Panel>
        <Tabs.Panel id="Test-3">
          {Array.from({ length: 50 }, (_, i) => (
            <p key={i}>Test 3 - Item {i + 1}</p>
          ))}
        </Tabs.Panel>
      </Tabs.Container>
    </div>,
  );

  const navElement = page.getByRole("navigation");
  const navHeight = await navElement.evaluate(
    (element) => window.getComputedStyle(element).height,
  );
  expect(navHeight).toBe("500px");
});
