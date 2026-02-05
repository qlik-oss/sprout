import { expect, test } from "@playwright/experimental-ct-react";

import { IconButton } from ".";
import { getAxeReport } from "../PlaywrightUtils";
import { Tooltip } from "../Tooltip";

const ButtonSize = ["small", "default"];

Object.values(ButtonSize).forEach((size) => {
  test(`should loading state be visible on size ${size}`, async ({
    mount,
    page,
  }) => {
    await mount(
      <div
        data-testid="wrapper"
        style={{
          display: "flex",
          flexDirection: "row",
          boxSizing: "border-box",
          padding: "var(--sprout-common-spacing-xs)",
          inlineSize: "300px",
        }}
        id="component-testing"
      >
        <IconButton
          label="Label"
          loading
          size={size === "small" ? "small" : undefined}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M9 7V2H7v5H2v2h5v5h2V9h5V7H9Z" />
            </svg>
          }
          onClick={() => {}}
        />
      </div>,
    );
    const component = page.getByRole("button");
    await expect(component).toBeVisible();
    await expect(component).toBeDisabled();
    const loader = page.getByTestId("progress-circular");
    await expect(loader).toBeVisible();
    await expect(loader).toHaveAttribute("aria-busy", "true");

    const loaderBox = await loader.boundingBox();
    const expectedSize = size === "small" ? 12 : 16;
    expect(loaderBox?.width).toBe(expectedSize);
    expect(loaderBox?.height).toBe(expectedSize);
    const accessibilityScanResults = await getAxeReport(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test("should display label when hovering over button", async ({
  mount,
  page,
}) => {
  await mount(
    <div
      data-testid="wrapper"
      style={{
        inlineSize: "300px",
        display: "flex",
        flexDirection: "row",
        boxSizing: "border-box",
        padding: "var(--sprout-common-spacing-xs)",
      }}
    >
      <IconButton
        label="Label"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M9 7V2H7v5H2v2h5v5h2V9h5V7H9Z" />
          </svg>
        }
        onClick={() => {}}
      />
    </div>,
  );

  const component = page.getByRole("button");
  await expect(component).toBeVisible();
  await component.hover();
  const tooltip = page.getByRole("tooltip");
  // this one is slow
  await expect(tooltip).toBeVisible();
  await expect(tooltip).toHaveText("Label");
});

test("should be accessible when using with aria-label", async ({
  mount,
  page,
}) => {
  await mount(
    <div
      data-testid="wrapper"
      style={{
        inlineSize: "300px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        padding: "var(--sprout-common-spacing-xs)",
      }}
      id="component-testing"
    >
      <IconButton
        aria-label="Label"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M9 7V2H7v5H2v2h5v5h2V9h5V7H9Z" />
          </svg>
        }
        onClick={() => {}}
      />
    </div>,
  );

  const component = page.getByRole("button");
  await expect(component).toBeVisible();
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
  await expect(component).toHaveAttribute("aria-label", "Label");
});

test("should support ref forwarding with aria-label", async ({
  mount,
  page,
}) => {
  await mount(
    <div
      data-testid="wrapper"
      style={{
        inlineSize: "300px",
        display: "flex",
        flexDirection: "row",
        boxSizing: "border-box",
        padding: "var(--sprout-common-spacing-xs)",
      }}
      id="component-testing"
    >
      <Tooltip title="Custom label" placement="right">
        <IconButton
          aria-label="Label"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M9 7V2H7v5H2v2h5v5h2V9h5V7H9Z" />
            </svg>
          }
          onClick={() => {}}
        />
      </Tooltip>
    </div>,
  );

  const component = page.getByRole("button");
  await expect(component).toBeVisible();
  await expect(component).toHaveAttribute("aria-label", "Label");
  await component.hover();
  const tooltip = page.getByRole("tooltip");
  await expect(tooltip).toBeVisible();
  await expect(tooltip).toHaveText("Custom label");
});
