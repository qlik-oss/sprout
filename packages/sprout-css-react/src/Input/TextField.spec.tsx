import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import {
  ControlledSearchTextFieldTest,
  ControlledTextFieldFormTest,
  ControlledTextFieldTest,
  SearchTextFieldTest,
  TextFieldTest,
  UncontrolledTextFieldFormTest,
} from "./TextFieldTest";

test(`should TextField be accessible`, async ({ mount, page }) => {
  await mount(<TextFieldTest label="Label" helpText="helpText" />);
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
  const label = page.getByText("Label");
  const helpText = page.getByText("helpText");

  const textbox = page.getByRole("textbox");
  await expect(textbox).toBeVisible();

  // aria is ok with useFieldAriaProps
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
    <TextFieldTest disabled label="Label" helpText="helpText" />,
  );
  const textbox = page.getByRole("textbox");
  await expect(textbox).toBeDisabled();

  await component.update(
    <TextFieldTest readOnly label="Label" helpText="helpText" />,
  );
  await expect(textbox).toHaveAttribute("readonly");

  await component.update(
    <TextFieldTest hasError label="Label" helpText="helpText" />,
  );
  await expect(textbox).toHaveAttribute("aria-invalid", "true");
});

test("Inline textfield should support errorMessages", async ({
  mount,
  page,
}) => {
  const output = await mount(
    <div>
      <TextFieldTest useField aria-label="label" data-testid="input" />
      <button type="button">button</button>
    </div>,
  );
  const errorMessages = ["Error message 1"];
  const input = page.getByTestId("input");
  await input.click();
  await page.keyboard.press("F");
  await expect(input).toHaveValue("F");

  await output.update(
    <div>
      <TextFieldTest
        useField
        aria-label="label"
        data-testid="input"
        errorMessages={errorMessages}
      />
      <button type="button">button</button>
    </div>,
  );
  await expect(input).toHaveValue("F");
  await expect(input).toBeFocused();
  await expect(page.getByText("Error message 1")).toBeVisible();
});

test("Textfield should show counter when maxCharacterCount property is set", async ({
  mount,
  page,
}) => {
  const output = await mount(
    <div>
      <TextFieldTest
        useField
        aria-label="label"
        data-testid="input"
        value="0123456789"
        maxCharacterCount={10}
      />
    </div>,
  );
  await expect(page.getByText("10 / 10")).toBeVisible();

  await output.update(
    <div>
      <TextFieldTest
        useField
        aria-label="label"
        data-testid="input"
        value="0123456789"
        maxCharacterCount={9}
      />
    </div>,
  );

  await expect(page.getByText("10 / 9")).toBeVisible();
  await expect(page.getByTestId("input-error-icon")).toBeVisible();
});

test("should support optional and infoIconTooltip", async ({ mount, page }) => {
  await mount(
    <TextFieldTest label="Label" infoIconTooltip="Info tooltip" optional />,
  );
  const infoIcon = page.getByTestId("info-tooltip-button");
  const tooltip = page.getByRole("tooltip");
  await expect(infoIcon).toBeVisible();
  await infoIcon.hover();
  await expect(tooltip).toBeVisible();
  await expect(tooltip).toHaveText("Info tooltip");
  const optionalText = page.getByText("(optional)");
  await expect(optionalText).toBeVisible();
});

test("should support infoIconPopover", async ({ mount, page }) => {
  await mount(
    <TextFieldTest label="Label" infoIconPopover="Info popover" optional />,
  );
  const infoIcon = page.getByTestId("info-popover-button");
  const popover = page.getByRole("dialog");
  await expect(infoIcon).toBeVisible();
  await infoIcon.click();
  await expect(popover).toBeVisible();
  await expect(popover).toHaveText("Info popover");
});

test("should return clear as reason on search input", async ({
  mount,
  page,
}) => {
  await mount(<SearchTextFieldTest />);

  const input = page.getByRole("textbox");
  const btn = page.getByRole("button");
  const reason = page.getByTestId("reason");
  await input.focus();
  await page.keyboard.type("Hello World");
  await btn.click();
  await expect(reason).toHaveText("clear");
  await expect(input).toHaveValue("");
});

test("should return clear as reason on controlled search input", async ({
  mount,
  page,
}) => {
  await mount(<ControlledSearchTextFieldTest />);

  const input = page.getByRole("textbox");
  const btn = page.getByRole("button");
  const reason = page.getByTestId("reason");
  await input.focus();
  await page.keyboard.type("Hello World");
  await btn.click();
  await expect(reason).toHaveText("clear");
  await expect(input).toHaveValue("");
});

test.describe("TextField with uncontrolled prop", () => {
  test("should respect the default value", async ({ mount, page }) => {
    await mount(
      <TextFieldTest
        label="Uncontrolled"
        defaultValue="Initial"
        onChange={() => {}}
      />,
    );

    const input = page.getByRole("textbox");
    await expect(input).toHaveValue("Initial");

    await input.focus();
    await page.keyboard.type("123");
    await page.keyboard.press("Tab");
    await expect(input).not.toBeFocused();

    await expect(input).toHaveValue("Initial123");
  });

  test("should append user input to defaultValue when onChange is provided", async ({
    mount,
    page,
  }) => {
    await mount(
      <TextFieldTest
        label="Uncontrolled"
        defaultValue="Initial"
        onChange={() => {}}
      />,
    );
    const input = page.getByRole("textbox");
    await expect(input).toHaveValue("Initial");

    await input.focus();
    await page.keyboard.type("123");

    await page.keyboard.press("Tab");
    await expect(input).not.toBeFocused();

    await expect(input).toHaveValue("Initial123");

    const actualDomValue = await input.evaluate(
      (element) => (element as HTMLInputElement).value,
    );
    expect(actualDomValue).toBe("Initial123");
  });

  test("should reset to default value on submit in a form", async ({
    mount,
    page,
  }) => {
    await mount(
      <UncontrolledTextFieldFormTest
        label="Uncontrolled"
        defaultValue="Initial"
      />,
    );
    const input = page.getByRole("textbox");

    await expect(input).toHaveValue("Initial");
    await input.focus();
    await page.keyboard.type("123");
    await expect(input).toHaveValue("Initial123");
    await page.keyboard.press("Tab");

    await input.focus();
    await input.fill("");
    await expect(input).toHaveValue("");

    const button = page.getByRole("button");
    await button.click();
    await expect(input).toHaveValue("Initial");
  });
});

test.describe("TextField with controlled prop", () => {
  test("should update value with internal state", async ({ mount, page }) => {
    await mount(<ControlledTextFieldTest label="Controlled" value="Initial" />);

    const input = page.getByRole("textbox");
    await expect(input).toHaveValue("Initial");

    await input.focus();
    await input.fill("Updated");
    await page.keyboard.press("Tab");
    await expect(input).not.toBeFocused();

    await expect(input).toHaveValue("Updated");
  });

  test("should not change value when onChange is missing", async ({
    mount,
    page,
  }) => {
    await mount(
      <TextFieldTest label="Controlled" value="Initial" onChange={undefined} />,
    );

    const input = page.getByRole("textbox");
    await expect(input).toHaveValue("Initial");

    await input.focus();
    await input.fill("Updated");
    await page.keyboard.press("Tab");
    await expect(input).not.toBeFocused();

    await expect(input).toHaveValue("Initial");
  });

  test("should not reset natively on submit in a form", async ({
    mount,
    page,
  }) => {
    await mount(
      <ControlledTextFieldFormTest label="Controlled" value="Initial" />,
    );
    const input = page.getByRole("textbox");

    await expect(input).toHaveValue("Initial");
    await input.focus();
    await input.fill("Updated");
    await expect(input).toHaveValue("Updated");
    await page.keyboard.press("Tab");

    await input.focus();
    await input.fill("");
    await expect(input).toHaveValue("");

    const button = page.getByRole("button");
    await button.click();
    await expect(input).toHaveValue("");
  });
});
