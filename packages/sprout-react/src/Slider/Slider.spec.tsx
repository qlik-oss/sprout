import { expect, test } from "@playwright/experimental-ct-react";

import { getAxeReport } from "../PlaywrightUtils";
import { KEYBOARD_KEYS } from "../Utils/keyboardKeys";
import {
  ControlledRangeSliderTest,
  ControlledSingleSliderTest,
  RangeSliderTest,
  SingleSliderTest,
} from "./SliderTest";

test("Slider.Single should be accessible", async ({ mount, page }) => {
  await mount(<SingleSliderTest defaultValue={50} />);

  // Aria attributes
  const component = page.getByTestId("wrapper");
  const group = component.getByRole("group");
  const slider = component.getByRole("slider");
  const label = page.getByText("Max Budget");
  const labelId = await label.evaluate((el) => el.id);

  await expect(slider).toBeVisible();
  await expect(label).toBeVisible();
  await expect(group).toHaveAttribute("role", "group");
  // group should have aria-labelledby that matches the label
  await expect(group).toHaveAttribute("aria-labelledby", labelId);

  // input should have aria-valuenow, aria-valuemin, aria-valuemax, aria-labelledby that includes the labelId and aria-orientation="horizontal"
  await expect(slider).toHaveAttribute("aria-valuenow");
  await expect(slider).toHaveAttribute("aria-valuemin");
  await expect(slider).toHaveAttribute("aria-valuemax");
  await expect(slider).toHaveAttribute(
    "aria-labelledby",
    `${labelId}-0 ${labelId}`,
  );
  await expect(slider).toHaveAttribute("aria-orientation", "horizontal");

  // Keyboard navigation

  // using the Tab key should focus the slider grip
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(slider).toBeFocused();
  expect(await slider.getAttribute("aria-valuenow")).toBe("50");

  // using the right arrow key should increase the value
  await page.keyboard.press(KEYBOARD_KEYS.RIGHT);
  await page.keyboard.press(KEYBOARD_KEYS.RIGHT);
  expect(await slider.getAttribute("aria-valuenow")).toBe("52");

  // using the left arrow key should decrease the value
  await page.keyboard.press(KEYBOARD_KEYS.LEFT);
  expect(await slider.getAttribute("aria-valuenow")).toBe("51");

  // using the up arrow key should increase the value
  await page.keyboard.press(KEYBOARD_KEYS.UP);
  expect(await slider.getAttribute("aria-valuenow")).toBe("52");

  // using the down arrow key should decrease the value
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  expect(await slider.getAttribute("aria-valuenow")).toBe("50");

  // using the Home key should set the value to the minimum
  await page.keyboard.press(KEYBOARD_KEYS.HOME);
  expect(await slider.getAttribute("aria-valuenow")).toBe("0");

  // using the End key should set the value to the maximum
  await page.keyboard.press(KEYBOARD_KEYS.END);
  expect(await slider.getAttribute("aria-valuenow")).toBe("100");

  // using the PageDown key should decrease the value by an larger amount than the step
  await page.keyboard.press(KEYBOARD_KEYS.PAGE_DOWN);
  await page.keyboard.press(KEYBOARD_KEYS.PAGE_DOWN);
  await page.keyboard.press(KEYBOARD_KEYS.PAGE_DOWN);
  expect(await slider.getAttribute("aria-valuenow")).toBe("70");

  // using the PageUp key should increase the value by an larger amount than the step
  await page.keyboard.press(KEYBOARD_KEYS.PAGE_UP);
  expect(await slider.getAttribute("aria-valuenow")).toBe("80");

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Slider.Range should be accessible", async ({ mount, page }) => {
  await mount(<RangeSliderTest />);

  // Aria attributes
  const component = page.getByTestId("wrapper");
  const group = component.getByRole("group");
  const [slider1, slider2] = await component.getByRole("slider").all();
  const label = page.getByText("Price Range");
  const labelId = await label.evaluate((el) => el.id);

  await expect(slider1).toBeVisible();
  await expect(slider2).toBeVisible();
  await expect(label).toBeVisible();
  await expect(group).toHaveAttribute("role", "group");
  // group should have aria-labelledby that matches the label
  await expect(group).toHaveAttribute("aria-labelledby", labelId);

  // input should have aria-valuemin, aria-valuemax and aria-orientation="horizontal"
  await expect(slider1).toHaveAttribute("aria-valuemin");
  await expect(slider1).toHaveAttribute("aria-valuemax");
  await expect(slider2).toHaveAttribute("aria-valuemin");
  await expect(slider2).toHaveAttribute("aria-valuemax");

  const min1 = await slider1.getAttribute("aria-valuemin");
  const max1 = await slider1.getAttribute("aria-valuemax");
  const min2 = await slider2.getAttribute("aria-valuemin");
  const max2 = await slider2.getAttribute("aria-valuemax");

  expect(min1).toBe(min2);
  expect(max1).toBe(max2);

  await expect(slider1).toHaveAttribute("aria-orientation", "horizontal");
  await expect(slider2).toHaveAttribute("aria-orientation", "horizontal");

  // both grips should have aria-labelledby that matches the label aria-valuenow which should be different for each grip
  await expect(slider1).toHaveAttribute(
    "aria-labelledby",
    `${labelId}-0 ${labelId}`,
  );
  await expect(slider2).toHaveAttribute(
    "aria-labelledby",
    `${labelId}-1 ${labelId}`,
  );

  const value1 = await slider1.getAttribute("aria-valuenow");
  const value2 = await slider2.getAttribute("aria-valuenow");
  expect(Number(value1)).not.toBe(Number(value2));
  expect(Number(value1)).toBe(0);
  expect(Number(value2)).toBe(100);

  // Keyboard navigation

  // using the Tab key should focus the first slider grip
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(slider1).toBeFocused();

  expect(await slider1.getAttribute("aria-valuenow")).toBe("0");

  // using the right arrow key should increase the value of the first grip
  await page.keyboard.press(KEYBOARD_KEYS.RIGHT);
  await page.keyboard.press(KEYBOARD_KEYS.RIGHT);
  expect(await slider1.getAttribute("aria-valuenow")).toBe("2");

  // using the left arrow key should decrease the value of the first grip
  await page.keyboard.press(KEYBOARD_KEYS.LEFT);
  expect(await slider1.getAttribute("aria-valuenow")).toBe("1");

  // using the up arrow key should increase the value of the first grip
  await page.keyboard.press(KEYBOARD_KEYS.UP);
  await page.keyboard.press(KEYBOARD_KEYS.UP);
  await page.keyboard.press(KEYBOARD_KEYS.UP);
  expect(await slider1.getAttribute("aria-valuenow")).toBe("4");

  // using the down arrow key should decrease the value of the first grip
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  expect(await slider1.getAttribute("aria-valuenow")).toBe("3");

  // using the Home key should set the value of the first grip to the minimum
  await page.keyboard.press(KEYBOARD_KEYS.HOME);
  expect(await slider1.getAttribute("aria-valuenow")).toBe("0");

  // using the End key should set the value of the first grip to the maximum
  await page.keyboard.press(KEYBOARD_KEYS.END);
  expect(await slider1.getAttribute("aria-valuenow")).toBe("100");

  // using the PageDown key on the first grip should decrease the value by an larger amount than the step
  await page.keyboard.press(KEYBOARD_KEYS.PAGE_DOWN);
  await page.keyboard.press(KEYBOARD_KEYS.PAGE_DOWN);
  await page.keyboard.press(KEYBOARD_KEYS.PAGE_DOWN);
  await page.keyboard.press(KEYBOARD_KEYS.PAGE_DOWN);
  await page.keyboard.press(KEYBOARD_KEYS.PAGE_DOWN);
  expect(await slider1.getAttribute("aria-valuenow")).toBe("50");

  // using the PageUp key on the first grip should decrease the value by an larger amount than the step
  await page.keyboard.press(KEYBOARD_KEYS.PAGE_UP);
  expect(await slider1.getAttribute("aria-valuenow")).toBe("60");
  const lastKnownValue1 = await slider1.getAttribute("aria-valuenow");

  // using the Tab key should focus the second grip
  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(slider2).toBeFocused();

  // using the left arrow key should decrease the value of the second grip
  await page.keyboard.press(KEYBOARD_KEYS.LEFT);
  await page.keyboard.press(KEYBOARD_KEYS.LEFT);
  expect(await slider2.getAttribute("aria-valuenow")).toBe("98");

  // using the right arrow key should increase the value of the second grip
  await page.keyboard.press(KEYBOARD_KEYS.RIGHT);
  expect(await slider2.getAttribute("aria-valuenow")).toBe("99");

  // using the down arrow key should decrease the value of the second grip
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  await page.keyboard.press(KEYBOARD_KEYS.DOWN);
  expect(await slider2.getAttribute("aria-valuenow")).toBe("96");

  // using the up arrow key should increase the value of the second grip
  await page.keyboard.press(KEYBOARD_KEYS.UP);
  expect(await slider2.getAttribute("aria-valuenow")).toBe("97");

  // using the Home key should set the value of the second grip to the minimum but not less than the first grip
  await page.keyboard.press(KEYBOARD_KEYS.HOME);
  expect(await slider2.getAttribute("aria-valuenow")).toBe(lastKnownValue1);

  // using the End key should set the value of the second grip to the maximum
  await page.keyboard.press(KEYBOARD_KEYS.END);
  expect(await slider2.getAttribute("aria-valuenow")).toBe("100");

  // using the PageDown key on the second grip should decrease the value by an larger amount than the step but not less than the first grip
  await page.keyboard.press(KEYBOARD_KEYS.PAGE_DOWN);
  await page.keyboard.press(KEYBOARD_KEYS.PAGE_DOWN);
  await page.keyboard.press(KEYBOARD_KEYS.PAGE_DOWN);
  expect(await slider2.getAttribute("aria-valuenow")).toBe("70");

  // using the PageUp key on the second grip should increase the value by an larger amount than the step but not more than the first grip
  await page.keyboard.press(KEYBOARD_KEYS.PAGE_UP);
  expect(await slider2.getAttribute("aria-valuenow")).toBe("80");

  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Slider.Single should support controlled usage", async ({
  mount,
  page,
}) => {
  await mount(<ControlledSingleSliderTest />);

  const slider = page.getByRole("slider");

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await page.keyboard.press(KEYBOARD_KEYS.RIGHT);

  await expect(page.getByTestId("value")).toHaveText("51");

  expect(await slider.getAttribute("aria-valuenow")).toBe("51");
});

test("Slider.Range should support controlled usage", async ({
  mount,
  page,
}) => {
  await mount(<ControlledRangeSliderTest />);
  const [slider1, slider2] = await page.getByRole("slider").all();

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(slider1).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.RIGHT);
  await page.keyboard.press(KEYBOARD_KEYS.RIGHT);
  expect(await slider1.getAttribute("aria-valuenow")).toBe("22");

  await expect(page.getByTestId("value")).toHaveText("22 - 80");

  await page.keyboard.press(KEYBOARD_KEYS.TAB);
  await expect(slider2).toBeFocused();
  await page.keyboard.press(KEYBOARD_KEYS.LEFT);
  await page.keyboard.press(KEYBOARD_KEYS.LEFT);
  expect(await slider2.getAttribute("aria-valuenow")).toBe("78");

  await expect(page.getByTestId("value")).toHaveText("22 - 78");
});
