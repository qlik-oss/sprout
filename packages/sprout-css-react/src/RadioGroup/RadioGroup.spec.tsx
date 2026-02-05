import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import { KEYBOARD_KEYS } from "../Utils/keyboardKeys";
import {
  ControlledRadio,
  ControlledRadioGroupFromTest,
  RadioGroupTest,
  RadioGroupTestA11y,
  RadioTest,
  UncontrolledRadioGroupFormTest,
} from "./RadioGroupTest";

test(`should RadioGroup be accessible`, async ({ mount, page }) => {
  await mount(<RadioGroupTestA11y />);
  const component = page.getByTestId("wrapper");
  const group = page.getByRole("radiogroup");
  const cat = page.getByRole("radio", { name: "Cat" });
  const dog = page.getByRole("radio", { name: "Dog" });
  const horse = page.getByRole("radio", { name: "Horse" });
  const label = page.getByText("Radio Group");
  const helpText = page.getByText("Select one of the options");
  const errorMessage = page.getByText("This is an error message");

  // roles are all ok
  await expect(group).toBeVisible();
  await expect(component).toBeVisible();
  await expect(cat).toBeVisible();
  await expect(dog).toBeVisible();
  await expect(horse).toBeVisible();

  // aria is ok with useFieldAriaProps
  const aria = await group.evaluate((node) => {
    return {
      labelId: node.getAttribute("aria-labelledby"),
      helpId: node.getAttribute("aria-describedby"),
    };
  });
  await expect(label).toHaveAttribute("id", aria.labelId || "typescript-id");
  await expect(helpText).not.toBeVisible();
  await expect(errorMessage).toHaveAttribute(
    "id",
    aria.helpId || "typescript-id",
  );

  // keyboard Tab
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(cat).toBeFocused();
  await expect(cat).not.toBeChecked();
  // keyboard Space
  await page.keyboard.press(KEYBOARD_KEYS.SPACE);
  await expect(cat).toBeChecked();

  // click
  await expect(dog).not.toBeChecked();
  await dog.click();
  await expect(dog).toBeChecked();

  await page.keyboard.press(KEYBOARD_KEYS.RIGHT);
  await expect(horse).toBeChecked();
  await expect(horse).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.LEFT);
  await expect(dog).toBeChecked();
  await expect(dog).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  await expect(horse).toBeChecked();
  await expect(horse).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.UP);
  await expect(dog).toBeChecked();
  await expect(dog).toBeFocused();

  // shift tab move the focus out the radio group so here the body
  await page.keyboard.down(KEYBOARD_KEYS.SHIFT);
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await page.keyboard.up(KEYBOARD_KEYS.SHIFT);
  await expect(dog).not.toBeFocused();
  const isBodyFocused = dog.evaluate(
    () => document.body === document.activeElement,
  );
  expect(isBodyFocused).toBeTruthy();

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  const dogSpan = dog.locator(" + span");

  const bbox = await dogSpan.boundingBox();

  if (bbox) {
    const centerX = bbox.x + bbox.width / 2;
    const centerY = bbox.y + bbox.height / 2;

    await page.mouse.move(centerX, centerY);

    await page.pause();

    await page.mouse.click(centerX, centerY);
  }

  await expect(dog).toBeChecked();
});

test("should test Radio in disabled state", async ({ mount, page }) => {
  await mount(<RadioTest label="Label" disabled />);

  const radio = page.getByRole("radio");
  // THEN Radio should have default cursor
  await expect(radio).toHaveCSS("cursor", "default");
  // AND Radio should be disabled
  await expect(radio).toBeDisabled();
  // WHEN clicking on radio
  await radio.click({ force: true });
  // THEN radio should not be checked
  await expect(radio).not.toBeChecked();
});

test("should allow ReactNode element on the label", async ({ mount }) => {
  const comp = await mount(<RadioGroupTest />);
  await expect(comp).toBeVisible();
  await expect(comp.getByText("Radio group label")).toHaveClass(/heading-xs/);
});

test("should render info icon on Radio when infoIconTooltip prop is provided", async ({
  mount,
  page,
}) => {
  const tooltipText = "This is additional info about the radio option";
  await mount(
    <RadioTest
      label="Radio with info icon"
      helpText="Additional context for this option"
      infoIconTooltip={tooltipText}
    />,
  );

  const radio = page.getByRole("radio", { name: "Radio with info icon" });
  const infoIcon = page.getByTestId("info-tooltip-button");

  await expect(radio).toBeVisible();
  await expect(infoIcon).toBeVisible();

  await infoIcon.hover();

  const tooltip = page.getByTestId("sprout-floating");

  await expect(tooltip).toBeVisible();
  await expect(tooltip).toHaveText(tooltipText);
});

test("should check if clicked on helper text", async ({ mount, page }) => {
  await mount(
    <RadioTest
      label="Label"
      helpText="helpText"
      infoIconTooltip="This is additional info about the radio option"
    />,
  );
  const radio = page.getByRole("radio");
  const helpText = page.getByText("helpText");

  await expect(radio).not.toBeChecked();
  // The input overlays the help text, so we need to force the click
  // https://playwright.dev/docs/input#forcing-the-click
  await helpText.click({ force: true });
  await expect(radio).toBeChecked();
});

test.describe("RadioGroup with uncontrolled prop", () => {
  test("Radio should be checked on mount", async ({ mount, page }) => {
    await mount(
      <RadioTest
        label="Uncontrolled radio"
        defaultChecked
        onChange={() => {}}
      />,
    );

    const radio = page.getByRole("radio", { name: "Uncontrolled radio" });
    await expect(radio).toBeVisible();
    await expect(radio).toBeChecked();
  });

  test("Radio should not be checked on mount and checked on interaction", async ({
    mount,
    page,
  }) => {
    await mount(
      <RadioTest
        label="Uncontrolled radio"
        defaultChecked={false}
        onChange={() => {}}
      />,
    );

    const radio = page.getByRole("radio", { name: "Uncontrolled radio" });
    await expect(radio).toBeVisible();
    await expect(radio).not.toBeChecked();

    await radio.focus();
    await expect(radio).toBeFocused();
    await page.keyboard.press(KEYBOARD_KEYS.SPACE);
    await expect(radio).toBeChecked();
  });

  test("RadioGroup should reset on form submit", async ({ mount, page }) => {
    await mount(<UncontrolledRadioGroupFormTest />);
    const radioGroup = page.getByRole("radiogroup");
    const radios = await page.getByRole("radio").all();

    await expect(radioGroup).toBeVisible();
    await Promise.all(radios.map((radio) => expect(radio).not.toBeChecked()));

    await radios[0].focus();
    await page.keyboard.press(KEYBOARD_KEYS.DOWN);
    await page.keyboard.press(KEYBOARD_KEYS.DOWN);
    await expect(radios[2]).toBeFocused();
    await page.keyboard.press(KEYBOARD_KEYS.SPACE);
    await expect(radios[2]).toBeChecked();

    const submitButton = page.getByRole("button");
    await page.keyboard.press(KEYBOARD_KEYS.TAB);
    await expect(submitButton).toBeFocused();
    await page.keyboard.press(KEYBOARD_KEYS.ENTER);

    await Promise.all(radios.map((radio) => expect(radio).not.toBeChecked()));
  });
});

test.describe("RadioGroup with controlled prop", () => {
  test("Radio should update value with internal state", async ({
    mount,
    page,
  }) => {
    await mount(<ControlledRadio />);
    const radio = page.getByRole("radio");
    await expect(radio).toBeVisible();
    await expect(radio).toHaveValue("controlled-radio");
    await expect(radio).not.toBeChecked();

    await radio.focus();
    await expect(radio).toBeFocused();
    await page.keyboard.press(KEYBOARD_KEYS.SPACE);
    await page.keyboard.press(KEYBOARD_KEYS.TAB);
    await expect(radio).not.toBeFocused();
    await expect(radio).toBeChecked();
  });

  test("RadioGroup should reset natively on submit in a form but not internal state", async ({
    mount,
    page,
  }) => {
    await mount(<ControlledRadioGroupFromTest />);
    const radioGroup = page.getByRole("radiogroup");
    const radios = await page.getByRole("radio").all();

    await expect(radioGroup).toBeVisible();
    await Promise.all(radios.map((radio) => expect(radio).not.toBeChecked()));

    await page.keyboard.press(KEYBOARD_KEYS.TAB);
    await expect(radios[0]).toBeFocused();
    await page.keyboard.press(KEYBOARD_KEYS.DOWN);
    await page.keyboard.press(KEYBOARD_KEYS.SPACE);
    await expect(radios[1]).toBeChecked();

    const submitButton = page.getByRole("button");
    await page.keyboard.press(KEYBOARD_KEYS.TAB);
    await expect(submitButton).toBeFocused();
    await page.keyboard.press(KEYBOARD_KEYS.ENTER);

    const selectedValue = page.getByRole("code");
    await expect(selectedValue).toHaveText("option2");

    await Promise.all(radios.map((radio) => expect(radio).not.toBeChecked()));
  });
});
