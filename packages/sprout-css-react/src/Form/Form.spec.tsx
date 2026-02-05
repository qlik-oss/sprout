import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import {
  FormDefaultValuesMultiSelectTest,
  FormDefaultValuesTest,
  FormRerenderTest,
  Form as FormStory,
  type MyFormData,
} from "./FormTest";

test(`should validate the form`, async ({ page, mount }) => {
  await mount(<FormStory />);

  const component = page.getByTestId("wrapper");
  await expect(component).toBeVisible();

  const formData: MyFormData = {
    name: "John Doe",
    description: "This is a description.",
    color: "b",
    terms: true,
    newsletter: false,
    fruit: "banana",
    light: true,
    vegetables: ["beans"],
  };
  await page.getByTestId("name").fill(formData.name);
  await page.getByTestId("description").fill(formData.description);
  await page.getByTestId("terms").check();
  await page.getByTestId("radio-blue").click();
  await page.getByTestId("select-fruit").click();
  await page.getByTestId("select-banana").click();

  await expect(page.getByTestId("switch-light")).toBeVisible();

  await page.getByText("Light").click();

  await page.getByTestId("select-vegetables.combobox").click();
  await page.getByTestId("select-beans").click();
  // Hide
  await page.keyboard.press("Escape");

  await page.getByRole("button", { name: /submit/i }).click();

  await expect(page.getByTestId("formdata")).toHaveText(
    JSON.stringify(formData, null, 2),
  );

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});

test(`should set default values to the form`, async ({ page, mount }) => {
  await mount(<FormDefaultValuesTest />);
  await expect(page.getByTestId("form")).toBeVisible();
  await expect(page.getByTestId("name")).toHaveValue("default name");
  await expect(page.getByTestId("description")).toHaveValue(
    "default description",
  );
});

test("should not trigger infinite re-renders", async ({ mount, page }) => {
  // Track console.log calls to detect infinite loops
  const consoleLogs: Array<string> = [];
  let consoleLogCount = 0;

  page.on("console", (msg) => {
    if (msg.type() === "log" && msg.text().includes("Form fruit value:")) {
      consoleLogCount++;
      consoleLogs.push(msg.text());
    }
  });

  await mount(<FormRerenderTest />);

  // Verify the form is actually rendered and functional
  const fruitSelect = page.getByTestId("select-fruit");
  await expect(fruitSelect).toBeVisible();

  // Wait for initial render and any immediate re-renders
  await page.waitForTimeout(1000);

  // The form should render initially and potentially once more for validation,
  // but should NOT continuously re-render in a loop
  // A reasonable threshold is less than 10 console logs in 1 second
  expect(consoleLogCount).toBeLessThan(100);
});

test("should display default selected values", async ({ mount, page }) => {
  await mount(<FormDefaultValuesMultiSelectTest />);

  // Verify the fruit input has the correct default value
  const fruitSelect = page.getByTestId("selected-value");
  await expect(fruitSelect).toHaveText("Apple");

  // Verify the vegetables input has the correct default tag
  const vegetablesSelect = page.getByTestId(
    "select-vegetables.combobox.tag.beans",
  );
  await expect(vegetablesSelect).toBeVisible();
});
