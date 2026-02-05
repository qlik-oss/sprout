import { expect, test } from "@playwright/experimental-ct-react";
import { TableFillParentContainer, TableFlexContainerAsyncTest, TableFlexParentContainerHeight } from "./AutoSizerTest";

test("should take the full height of a flex container when data is loading asynchronously", async ({ mount, page }) => {
  await mount(<TableFlexContainerAsyncTest />);

  const container = await page.locator("#container");
  const containerHeight = await container.evaluate((el) => el.clientHeight);
  expect(containerHeight).toBe(720);

  const header = page.locator("#header");
  const headerHeight = await header.evaluate((el) => el.clientHeight);
  expect(headerHeight).toBe(100);

  const footer = page.locator("#footer");
  const footerHeight = await footer.evaluate((el) => el.clientHeight);
  expect(footerHeight).toBe(100);

  const tableContainer = page.getByRole("grid");
  const tableContainerHeight = await tableContainer.evaluate((el) => el.clientHeight);
  expect(tableContainerHeight).toBe(containerHeight - headerHeight - footerHeight);
});

test("should fill the height of the parent container", async ({ mount, page }) => {
  await mount(<TableFillParentContainer />);
  const container = await page.locator("[data-testid='container']");
  const containerHeight = await container.evaluate((el) => el.clientHeight);
  expect(containerHeight).toBe(300);
  const table = page.getByRole("grid");
  const tableHeight = await table.evaluate((el) => el.clientHeight);
  expect(tableHeight).toBe(containerHeight);
});

test("should table take needed space in flex column", async ({ mount, page }) => {
  const component = await mount(<TableFlexParentContainerHeight />);
  const table = page.getByRole("grid");
  const tableHeight = await table.evaluate((el) => el.clientHeight);
  expect(tableHeight).toBe(389);

  // now let's rerender with a max-height on the container
  await component.update(<TableFlexParentContainerHeight style={{ maxBlockSize: 200 }} />);
  await page.waitForTimeout(10);
  const tableHeightWithMaxHeight = await table.evaluate((el) => el.clientHeight);
  expect(tableHeightWithMaxHeight).toBeLessThanOrEqual(200);

  // now let's rerender with a min-height on the container
  await component.update(<TableFlexParentContainerHeight style={{ minBlockSize: 400 }} />);
  await page.waitForTimeout(10);
  const tableHeightWithMinHeight = await table.evaluate((el) => el.clientHeight);
  expect(tableHeightWithMinHeight).toBeGreaterThanOrEqual(400);
});
