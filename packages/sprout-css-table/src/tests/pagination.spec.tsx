import { expect, test } from "@playwright/experimental-ct-react";
import { PaginationSpec } from "./pagination";

test("should support pagination feature", async ({ page, mount }) => {
  await mount(<PaginationSpec />);
  const table = page.getByRole("grid");
  const body = table.getByRole("rowgroup").nth(1);
  const row = await body.getByRole("row");
  let rows = await row.all();
  expect(rows.length).toBe(21);

  // scroll to the bottom of the table body
  await body.evaluate((bodyEl) => {
    // eslint-disable-next-line no-param-reassign
    bodyEl.scrollTop = bodyEl.scrollHeight;
  });
  // wait for the new rows to be loaded
  await page.waitForTimeout(100);
  rows = await row.all();
  expect(rows.length).toBeLessThanOrEqual(42);
  expect(rows.length).toBeGreaterThanOrEqual(41);

  await body.evaluate((bodyEl) => {
    // eslint-disable-next-line no-param-reassign
    bodyEl.scrollTop = bodyEl.scrollHeight;
  });

  // wait for the new rows to be loaded
  await page.waitForTimeout(100);
  rows = await row.all();
  expect(rows.length).toBeLessThanOrEqual(52);
  expect(rows.length).toBeGreaterThanOrEqual(51);
});
