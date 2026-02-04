import { expect, test } from "@playwright/experimental-ct-react";

import { Checkbox, CheckboxGroup } from ".";
import { getAxeReport } from "../PlaywrightUtils";
import { CheckboxGroupInForm, ControlledCheckboxTest } from "./CheckboxTest";

test(`should Checkbox be accessible`, async ({ mount, page }) => {
  const component = await mount(
    <Checkbox indeterminate label="Label" helpText="helpText" />,
  );

  let checkbox = page.getByRole("checkbox");
  await expect(checkbox).toBeVisible();
  await expect(checkbox).not.toBeChecked();

  // check it is indeterminate
  await expect(checkbox).toHaveAttribute("aria-checked", "mixed");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Space");
  await expect(checkbox).toBeChecked();
  await page.keyboard.press("Space");
  await expect(checkbox).not.toBeChecked();

  // same with mouse
  await component.update(
    <Checkbox indeterminate label="Label" helpText="helpText" />,
  );
  checkbox = page.getByRole("checkbox");
  await expect(checkbox).toBeVisible();
  await expect(checkbox).toHaveAttribute("aria-checked", "mixed");
  await checkbox.click();
  await expect(checkbox).toBeChecked();
  await checkbox.click();
  await expect(checkbox).not.toBeChecked();
});

test("should checkbox work in controlled mode", async ({ mount, page }) => {
  await mount(<ControlledCheckboxTest />);
  const checkbox = page.getByRole("checkbox");
  const textNot = page.getByText("I am not checked");
  const textChecked = page.getByText("I am checked");

  await expect(textNot).toBeVisible();
  await expect(textChecked).not.toBeVisible();

  await expect(checkbox).toBeVisible();
  await expect(checkbox).not.toBeChecked();
  await checkbox.click();

  await expect(checkbox).toBeChecked();
  await expect(textNot).not.toBeVisible();
  await expect(textChecked).toBeVisible();

  await checkbox.click();
  await expect(checkbox).not.toBeChecked();
});

test("should test Checkbox in disabled state", async ({ mount, page }) => {
  await mount(<Checkbox label="Label" disabled />);

  const checkbox = page.getByRole("checkbox");
  // THEN Checkbox should have default cursor
  await expect(checkbox).toHaveCSS("cursor", "default");
  // AND Checbox should be disabled
  await expect(checkbox).toBeDisabled();
  // WHEN clicking on checkbox
  await checkbox.click({ force: true });
  // THEN checkbox should not be checked
  await expect(checkbox).not.toBeChecked();
});

test("should CheckboxGroup be accessible", async ({ mount, page }) => {
  await mount(
    <div id="component-testing">
      <CheckboxGroup label="Label" helpText="helpText">
        <Checkbox label="option 1" />
        <Checkbox label="option 2" />
      </CheckboxGroup>
    </div>,
  );
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
  const group = page.getByRole("group");
  const checkboxes = await page.getByRole("checkbox").all();

  // aria is ok with useFieldAriaProps
  const label = page.getByText("Label");
  const helpText = page.getByText("helpText");
  const aria = await group.evaluate((node) => {
    return {
      labelId: node.getAttribute("aria-labelledby"),
      helpId: node.getAttribute("aria-describedby"),
    };
  });
  await expect(label).toHaveAttribute("id", aria.labelId || "typescript-id");
  await expect(helpText).toHaveAttribute("id", aria.helpId || "typescript-id");

  // checkboxes
  expect(checkboxes).toHaveLength(2);
  await expect(checkboxes[0]).not.toBeChecked();
  await expect(checkboxes[1]).not.toBeChecked();

  await checkboxes[0].click();
  await expect(checkboxes[0]).toBeChecked();
  await expect(checkboxes[1]).not.toBeChecked();

  await checkboxes[1].click();
  await expect(checkboxes[0]).toBeChecked();
  await expect(checkboxes[1]).toBeChecked();

  await checkboxes[0].focus();
  await page.keyboard.press("Space");
  await expect(checkboxes[0]).not.toBeChecked();
  await expect(checkboxes[1]).toBeChecked();
  await page.keyboard.press("Space");
  await expect(checkboxes[0]).toBeChecked();
  await expect(checkboxes[1]).toBeChecked();
});

test("info icon should not submit form when clicked on", async ({
  mount,
  page,
}) => {
  await mount(<CheckboxGroupInForm />);
  const form = page.getByTestId("form");
  const checkboxGroup = page.getByTestId("checkbox-group");
  const tooltipButton = page.getByTestId("info-tooltip-button");
  const tooltipContainer = page.getByTestId("sprout-floating");
  const submitButton = page.getByTestId("submit-button");

  await tooltipButton.click();
  await expect(tooltipContainer).toBeVisible();
  await expect(form).toHaveAttribute("data-submitted", "0");
  await expect(checkboxGroup).toHaveAttribute("data-clicked", "1");

  await submitButton.click();
  await expect(form).toHaveAttribute("data-submitted", "1");
  await expect(checkboxGroup).toHaveAttribute("data-clicked", "1");
});

test("should check if clicked on helper text", async ({ mount, page }) => {
  await mount(<Checkbox label="Label" helpText="helpText" />);
  const checkbox = page.getByRole("checkbox");
  const helpText = page.getByText("helpText");

  await expect(checkbox).not.toBeChecked();
  // The input overlays the help text, so we need to force the click
  // https://playwright.dev/docs/input#forcing-the-click
  await helpText.click({ force: true });
  await expect(checkbox).toBeChecked();
});

test("should render info icon with tooltip when infoIconTooltip prop is provided", async ({
  mount,
  page,
}) => {
  const tooltipText = "This is additional info about the checkbox.";

  await mount(
    <Checkbox
      label="Label"
      helpText="This is some help text for this checkbox"
      infoIconTooltip={tooltipText}
    />,
  );

  const checkbox = page.getByRole("checkbox");
  const infoIconButton = page.getByTestId("info-tooltip-button");
  await expect(checkbox).toBeVisible();
  await expect(infoIconButton).toBeVisible();

  await infoIconButton.hover();

  const tooltip = page.getByRole("tooltip");
  await expect(tooltip).toBeVisible();
  await expect(tooltip).toHaveText(tooltipText);
});
