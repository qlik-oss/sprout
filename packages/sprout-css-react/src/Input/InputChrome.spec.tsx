import { expect, test } from "@playwright/experimental-ct-react";

import { Input } from "./Input";

test.describe("Input height on Chrome", () => {
  test("has 32px height by default", async ({ mount }) => {
    const component = await mount(<Input />);
    const height = await component.evaluate(
      (el) => (el as HTMLElement).offsetHeight,
    );
    expect(height).toBe(32);
  });
  test("has 24px height by default", async ({ mount }) => {
    const component = await mount(<Input designSize="small" />);
    const height = await component.evaluate(
      (el) => (el as HTMLElement).offsetHeight,
    );
    expect(height).toBe(24);
  });
});
