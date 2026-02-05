/* eslint-disable no-undef */
import { describe, expect, test } from "vitest";
import { page, userEvent } from "vitest/browser";
import patterns from "./patterns.module.css";

describe("patterns utility", () => {
  test("focusable pattern", async () => {
    document.body.innerHTML = `
      <div id="app">
        <div class="${patterns["focusable-target"]}" data-testid="focusable-target">
          <button
            type="button"
            aria-label="focus me"
            data-testid="focusable-trigger"
            class="${patterns["focusable-trigger"]}"
          />
          Content that can be focused in a way that is accessible
          <a href="#">A link</a>
          <input type="text" placeholder="An input" />
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <button data-testid="another-button" type="button">Another button</button>
        </div>
      </div>
    `;
    const button = page.getByTestId("focusable-trigger");
    const target = page.getByTestId("focusable-target");

    await expect(target).toBeVisible();
    await expect(button).toHaveStyle({ position: "absolute", background: "rgba(0, 0, 0, 0)" });

    // // now check any interactive element goes with z-index 1
    await expect(page.getByTestId("another-button")).toHaveStyle({ zIndex: "1" });
    await expect(page.getByRole("textbox")).toHaveStyle({ zIndex: "1" });
    await expect(page.getByRole("combobox")).toHaveStyle({ zIndex: "1" });
    await expect(page.getByRole("link")).toHaveStyle({ zIndex: "1" });
  });
  test("disclosure pattern", async () => {
    document.body.innerHTML = `
<div class="${patterns["disclosure-trigger"]} ${patterns["focusable-target"]}" data-testid="disclosure-trigger" style="display: flex; flex-direction: row;">
  <button
    type="button"
    data-testid="focusable-trigger"
    aria-label="label of the current main action"
    class="${patterns["focusable-trigger"]}"
  />
  <p>disclosure_target</p>
  <div class="${patterns["disclosure-target"]}" data-testid="disclosure-target" style="display: flex; flex-direction: row;">
    <button type="button">Copy</button>
    <button type="button">Paste</button>
  </div>
</div>
`;
    const disclosureTrigger = page.getByTestId("focusable-trigger");
    const disclosureTarget = page.getByTestId("disclosure-target");

    // hover the disclosure trigger
    await expect(disclosureTarget).toHaveStyle({ opacity: "0" });
    await userEvent.hover(disclosureTrigger);
    await expect(disclosureTarget).toHaveStyle({ opacity: "1" });
  });
});
