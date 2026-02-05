import { expect, test } from "@playwright/experimental-ct-react";

import { Button } from ".";

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
          inlineSize: "300px",
          display: "flex",
          flexDirection: "row",
          boxSizing: "border-box",
          padding: "var(--sprout-common-spacing-xs)",
          border: "var(--sprout-common-border-default)",
        }}
      >
        <Button
          size={size === "small" ? size : undefined}
          label="Label"
          loading
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
  });
});

test("should add title when label is too long", async ({ mount, page }) => {
  const label = "This is a long label that should be truncated";
  await mount(
    <div
      data-testid="wrapper"
      style={{
        inlineSize: "300px",
        display: "flex",
        flexDirection: "row",
        boxSizing: "border-box",
        padding: "var(--sprout-common-spacing-xs)",
        border: "var(--sprout-common-border-default)",
      }}
    >
      <Button label={label} onClick={() => {}} />
    </div>,
  );
  const component = page.getByRole("button");
  await expect(component).toHaveAttribute("title", label);
});
