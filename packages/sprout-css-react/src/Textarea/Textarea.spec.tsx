import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import { Textarea } from "./Textarea";
import { TextareaTest } from "./TextareaTest";

test("should Textarea be accessible", async ({ mount, page }) => {
  await mount(<TextareaTest label="Label" helpText="helpText" />);

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  const textbox = page.getByRole("textbox");

  // aria is ok with useFieldAriaProps
  const label = page.getByText("Label");
  const helpText = page.getByText("helpText");
  const aria = await textbox.evaluate((node) => {
    return {
      labelId: node.getAttribute("aria-labelledby"),
      helpId: node.getAttribute("aria-describedby"),
    };
  });
  await expect(label).toHaveAttribute("id", aria.labelId || "typescript-id");
  await expect(helpText).toHaveAttribute("id", aria.helpId || "typescript-id");

  await textbox.focus();
  await page.keyboard.type("Hello World");
  await expect(textbox).toHaveValue("Hello World");
  await page.keyboard.press("Tab");
  await expect(textbox).not.toBeFocused();
});

test("should map properties to native attributes", async ({ mount, page }) => {
  const component = await mount(
    <TextareaTest disabled label="Label" helpText="helpText" />,
  );
  const textbox = page.getByRole("textbox");
  await expect(textbox).toBeDisabled();

  await component.update(
    <TextareaTest readOnly label="Label" helpText="helpText" />,
  );
  await expect(textbox).toHaveAttribute("readonly");

  await component.update(
    <TextareaTest hasError label="Label" helpText="helpText" />,
  );
  await expect(textbox).toHaveAttribute("aria-invalid", "true");
});

test("should support resizable property", async ({ mount, page }) => {
  await mount(
    <div style={{ display: "flex", inlineSize: "300px", blockSize: "300px" }}>
      <Textarea
        label="Label"
        helpText="helpText"
        resizable
        defaultValue="text demo"
      />
    </div>,
  );
  const textbox = page.getByRole("textbox");
  await expect(textbox).toHaveCSS("resize", "none");
  // check the parent
  const parent = textbox.locator("..");
  await expect(parent).toHaveCSS("resize", "both");
  // get coordiantes of the bottom right corner of the textbox
  const bb = await parent.boundingBox();
  if (!bb) throw new Error("Bounding box not found");

  // Simulate dragging the resize handle
  const resizeHandleX = bb.x + bb.width - 5; // Adjust to the bottom-right corner
  const resizeHandleY = bb.y + bb.height - 5;

  await page.mouse.move(resizeHandleX, resizeHandleY);
  await page.mouse.down();
  await page.mouse.move(resizeHandleX - 33, resizeHandleY + 44); // Drag diagonally
  await page.mouse.up();

  // check inline style of the textbox
  await expect(parent).toHaveCSS("width", `${bb.width - 33}px`);
  await expect(parent).toHaveCSS("height", `${bb.height + 44}px`);

  // should not be able to overflow
  await page.mouse.down();
  await page.mouse.move(resizeHandleX + 200, resizeHandleY + 300); // Drag diagonally
  await page.mouse.up();

  await expect(parent).toHaveCSS("width", "300px");
  await expect(parent).toHaveCSS("height", "260px");
});
test("should show character count when maxCharacterCount property is set", async ({
  mount,
  page,
}) => {
  await mount(
    <div style={{ display: "flex", inlineSize: "300px", blockSize: "300px" }}>
      <TextareaTest
        label="Label"
        helpText="helpText"
        maxCharacterCount={9}
        resizable
      />
    </div>,
  );
  const textbox = page.getByRole("textbox");
  await textbox.focus();
  await page.keyboard.type("0123456789");
  await expect(page.getByText("10 / 9")).toBeVisible();
  await expect(page.getByTestId("textarea-error-icon")).toBeVisible();
});
