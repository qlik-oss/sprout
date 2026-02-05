import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import { Message } from "./Message";

test("should be accessible", async ({ mount, page }) => {
  const component = await mount(
    <Message
      id="component-testing"
      title="Hello"
      message="World"
      actions={<button type="button">Close</button>}
    />,
  );

  // axe core
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
  await expect(component).not.toHaveAttribute("role", "status");
  await expect(component).not.toHaveAttribute("aria-live", "polite");
  await component.update(
    <Message
      title="Please wait"
      message="we are working hard for you"
      progress={{ "aria-label": "wait", percent: 50 }}
    />,
  );
  await expect(component).toHaveAttribute("role", "status");
  await expect(component).toHaveAttribute("aria-live", "polite");
});

test("should set custom data-testid", async ({ mount }) => {
  const component = await mount(
    <Message
      title="Hello"
      message="World"
      actions={<button type="button">Close</button>}
      data-testid="foo"
    />,
  );

  await expect(component.getByTestId("foo.message-title")).toHaveText("Hello");
  await expect(component.getByTestId("foo.message-description")).toHaveText(
    "World",
  );
  await expect(component.getByTestId("foo.message-actions")).toContainText(
    "Close",
  );
});
