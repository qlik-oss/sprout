/* eslint-disable no-await-in-loop */
import { expect, test } from "@playwright/experimental-ct-react";
import { UseMediaTest } from "./UseMediaTest";

test("should be a responsive grid", async ({ mount, page }) => {
  await mount(<UseMediaTest />);
  const grid = page.getByTestId("grid");

  // Check small viewport
  await page.setViewportSize({ width: 500, height: 800 });
  await expect(grid).toHaveAttribute("data-viewport", "s");
  await expect(grid).toHaveClass(/grid_cols_16/);
  await expect(grid).toHaveAttribute("data-get", JSON.stringify({ test: "small" }));
  for (let i = 1; i <= 5; i++) {
    const col = grid.getByText(`col ${i}`);
    await expect(col).toHaveClass(/col_span_16/);
  }

  // Check medium viewport
  await page.setViewportSize({ width: 800, height: 800 });
  await expect(grid).toHaveAttribute("data-viewport", "m");
  await expect(grid).toHaveClass(/grid_cols_16/);
  await expect(grid).toHaveAttribute("data-get", JSON.stringify({ test: "medium" }));
  for (let i = 1; i <= 5; i++) {
    const col = grid.getByText(`col ${i}`);
    await expect(col).toHaveClass(/col_span_8/);
  }

  // Check large viewport
  await page.setViewportSize({ width: 1200, height: 800 });
  await expect(grid).toHaveAttribute("data-viewport", "l");
  await expect(grid).toHaveClass(/grid_cols_16/);
  await expect(grid).toHaveAttribute("data-get", JSON.stringify({ test: "large" }));
  for (let i = 1; i <= 5; i++) {
    const col = grid.getByText(`col ${i}`);
    await expect(col).toHaveClass(/col_span_4/);
  }
});
