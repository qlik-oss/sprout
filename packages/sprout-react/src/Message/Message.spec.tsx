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
    />
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
    />
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
    />
  );

  await expect(component.getByTestId("foo.message-title")).toHaveText("Hello");
  await expect(component.getByTestId("foo.message-description")).toHaveText(
    "World"
  );
  await expect(component.getByTestId("foo.message-actions")).toContainText(
    "Close"
  );
});

test("should render details and toggle them from the button", async ({
  mount,
  page,
}) => {
  await mount(
    <Message title="Hello" message="World" details={<div>Extra details</div>} />
  );

  const toggleButton = page.getByRole("button", { name: "Details" });
  const details = page.getByText("Extra details");

  await expect(toggleButton).toBeVisible();
  await expect(details).not.toBeVisible();

  await toggleButton.click();
  await expect(details).toBeVisible();

  await toggleButton.click();
  await expect(details).not.toBeVisible();
});

test("should constrain illustration width and hide overflow", async ({
  mount,
  page,
}) => {
  const maxWidth = 640;

  await mount(
    <Message
      title="Hello"
      message="World"
      data-testid="message"
      illustration={
        <div
          data-testid="oversized-child"
          style={{ inlineSize: "1200px", blockSize: "80px", background: "red" }}
        />
      }
    />
  );

  const wrapper = page.getByTestId("message.message-illustration");
  const child = page.getByTestId("oversized-child");

  await expect(wrapper).toHaveCSS("overflow", "hidden");

  const wrapperWidth = await wrapper.evaluate(
    (node) => node.getBoundingClientRect().width
  );
  const childWidth = await child.evaluate(
    (node) => node.getBoundingClientRect().width
  );

  expect(wrapperWidth).toBeLessThanOrEqual(maxWidth);
  expect(childWidth).toBeGreaterThan(wrapperWidth);
});

test("should limit content width in vertical layout but allow longer horizontal content", async ({
  mount,
}) => {
  const maxContentWidth = 320;
  const message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui, rem distinctio dolorem fuga quis architecto voluptates numquam praesentium. Aliquid tempora recusandae eaque in quasi earum unde qui minus aperiam doloribus. Impedit et consequuntur eum cupiditate molestias illo, vitae mollitia ipsam quo incidunt eligendi beatae minus excepturi alias. Quas, doloribus.";

  const component = await mount(
    <Message
      title="Hello"
      message={message}
      data-testid="message"
      layout="vertical"
    />
  );

  const verticalContent = component.getByTestId("message.message-content");
  const verticalWidth = await verticalContent.evaluate(
    (node) => node.getBoundingClientRect().width
  );
  expect(verticalWidth).toBeLessThanOrEqual(maxContentWidth);

  await component.update(
    <Message
      title="Hello"
      message={message}
      data-testid="message"
      layout="horizontal"
    />
  );

  const horizontalContent = component.getByTestId("message.message-content");
  const horizontalWidth = await horizontalContent.evaluate(
    (node) => node.getBoundingClientRect().width
  );

  expect(horizontalWidth).toBeGreaterThan(maxContentWidth);
  expect(verticalWidth).toBeLessThan(horizontalWidth);
});
