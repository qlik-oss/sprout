import { expect, test } from "@playwright/experimental-ct-react";

import {
  ThemeExposeIsTouch,
  ThemeProviderCascade,
  ThemeProviderGlobal,
  ThemeProviderWatchBody,
  ThemeProviderWithManualSetup,
} from "./ThemeProviderTestCase";

test(`should ThemeProvider read global`, async ({ mount }) => {
  const component = await mount(<ThemeProviderGlobal />);
  await expect(component).toHaveAttribute("data-qlik-appearance", "qlik-light");
  await expect(component).toHaveAttribute("data-qlik-density", "comfortable");
});

test(`should ThemeProvider cascade`, async ({ mount, page }) => {
  await mount(<ThemeProviderCascade />);
  const root = page.getByTestId("root");
  const nested = page.getByTestId("nested");
  // test casing. No uppercase letters should be present
  expect(
    await root.evaluate((el) =>
      el.getAttributeNames().some((n) => /[A-Z]/.test(n)),
    ),
  ).toBe(false);
  // test global
  await expect(root).toHaveAttribute("data-qlik-appearance", "qlik-light");
  await expect(nested).toHaveAttribute("data-qlik-appearance", "qlik-light");
  // test context
  await expect(root).toHaveAttribute("data-qlik-density", "dense");
  await expect(nested).toHaveAttribute("data-qlik-density", "dense");
  // test props
  await expect(root).toHaveAttribute("data-qlik-roundness", "soft");
  await expect(nested).toHaveAttribute("data-qlik-roundness", "rounded");
  // test DEFAULT_THEME
  await expect(root).toHaveAttribute("data-qlik-sizing", "mid-sized");
  await expect(nested).toHaveAttribute("data-qlik-sizing", "mid-sized");
});

test("should ThemeProvider work with manual setup", async ({ mount, page }) => {
  await mount(<ThemeProviderWithManualSetup />);
  const deep = await page.getByTestId("deep");
  await expect(deep).toHaveAttribute("data-qlik-appearance", "qlik-dark");
  await expect(deep).toHaveAttribute("data-qlik-density", "dense");
  await expect(deep).toHaveAttribute("data-qlik-sizing", "foo");
  await expect(deep).toHaveAttribute("data-qlik-typography", "source-sans");
});

test(`should ThemeProvider expose isTouch in context`, async ({
  mount,
  page,
}) => {
  const comp = await mount(<ThemeExposeIsTouch isTouch />);
  const div = await page.getByTestId("isTouch");
  await expect(div).toHaveText("true");
  await comp.update(<ThemeExposeIsTouch isTouch={false} />);
  await expect(div).toHaveText("false");
});

test("should ThemeProvider watch body changes", async ({ mount, page }) => {
  await mount(<ThemeProviderWatchBody />);
  const button = page.getByTestId("theme-appearance");

  // initial theme
  await expect(button).toHaveText("qlik-light");

  // change body dataset to qlik-dark
  await button.click();
  await expect(button).toHaveText("qlik-dark");

  // change body dataset back to qlik-light
  await button.click();
  await expect(button).toHaveText("qlik-light");
});
