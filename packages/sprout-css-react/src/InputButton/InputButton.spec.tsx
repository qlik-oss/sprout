// eslint-disable-next-line @typescript-eslint/no-redeclare
import type { MouseEvent } from "react";

import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import { Tooltip } from "../Tooltip";
import { InputButton } from "./InputButton";
import { InputButtonTest } from "./InputButtonTest";

const inputButtonSize = ["xs", "s"];

Object.values(inputButtonSize).forEach((size) => {
  test(`loading state should be visible on size ${size}`, async ({
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
        <InputButton
          aria-label="Label"
          onClick={() => {}}
          loading
          size={size === "s" ? "s" : undefined}
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
    const expectedSize = 12;
    expect(loaderBox?.width).toBe(expectedSize);
    expect(loaderBox?.height).toBe(expectedSize);
    const accessibilityScanResults = await getAxeReport(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test("should display label when hovering over input button", async ({
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
      <Tooltip title="Title" placement="right">
        <InputButton aria-label="Label" onClick={() => {}} />
      </Tooltip>
    </div>,
  );

  const component = page.getByRole("button");
  await expect(component).toBeVisible();
  await component.hover();
  const tooltip = page.getByRole("tooltip");
  await expect(tooltip).toBeVisible();
  await expect(tooltip).toHaveText("Title");
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
        display: "flex",
        flexDirection: "row",
        boxSizing: "border-box",
        padding: "var(--sprout-common-spacing-xs)",
      }}
      id="component-testing"
    >
      <InputButton aria-label="Aria Label" onClick={() => {}} />
    </div>,
  );

  const component = page.getByRole("button");
  await expect(component).toBeVisible();
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
  await expect(component).toHaveAttribute("aria-label", "Aria Label");
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
      <Tooltip title="Title" placement="right">
        <InputButton aria-label="Aria Label" onClick={() => {}} />
      </Tooltip>
    </div>,
  );

  const component = page.getByRole("button");
  await expect(component).toBeVisible();
  await expect(component).toHaveAttribute("aria-label", "Aria Label");
  await component.hover();
  const tooltip = page.getByRole("tooltip");
  await expect(tooltip).toBeVisible();
  await expect(tooltip).toHaveText("Title");
});

test("should return button as event target", async ({ mount, page }) => {
  let type;
  await mount(
    <InputButtonTest
      onClick={() => {}}
      aria-label="clear"
      onMouseDown={(t) => {
        type = t;
      }}
    />,
  );

  // Simulate a onMouseDown event
  await page.mouse.move(15, 15);
  await page.mouse.down();
  await page.mouse.up();

  expect(type).toBe("button");
});

test("should return event on click", async ({ mount, page }) => {
  let eventReceived: MouseEvent<HTMLButtonElement> | undefined;
  await mount(
    <InputButton
      onClick={(event) => {
        eventReceived = event;
      }}
      aria-label="clear"
    />,
  );

  const component = page.getByRole("button");
  await component.click();

  expect(eventReceived).toBeDefined();
  expect(eventReceived?.type).toBe("click");
});
