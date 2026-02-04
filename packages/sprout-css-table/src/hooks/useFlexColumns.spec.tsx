import { expect, test } from "@playwright/experimental-ct-react";

import { TableFlexColumnSize, TableWithHiddenFlexColumn } from "../TanstackTableTest";
import { TABLE_BORDERS_WIDTH } from "../primitives/constant";

test("should flex manage hidden columns", async ({ page, mount }) => {
  await mount(<TableWithHiddenFlexColumn />);
  await page.waitForTimeout(100); // wait for resize observer

  const headers = await page.getByRole("columnheader");
  const allHeaders = await headers.all();
  expect(allHeaders.length).toBe(3);
  await expect(allHeaders[0]).toContainText("Name");
  await expect(allHeaders[1]).toContainText("Type");
  await expect(allHeaders[2]).toContainText("Modified");
  // now let's mesure the width of the first header
  const firstHeaderBox = await allHeaders[0].boundingBox();
  const secondHeaderBox = await allHeaders[1].boundingBox();
  const thirdHeaderBox = await allHeaders[2].boundingBox();

  expect(secondHeaderBox?.width).toBe(200);
  expect(thirdHeaderBox?.width).toBe(300);
  expect(firstHeaderBox?.width).toBe(298);
});

test("should handle column size using fixed with and flex properties", async ({ mount, page }) => {
  const totalWidth = 802;
  const innerWidth = totalWidth - TABLE_BORDERS_WIDTH;
  await mount(<TableFlexColumnSize totalWidth={totalWidth} />);

  // outer width include borders
  const tableContainer = page.getByRole("grid");
  const tableContainerOffsetWidth = await tableContainer.evaluate((el) => (el as HTMLElement).offsetWidth);
  expect(tableContainerOffsetWidth).toBe(totalWidth);

  // inner width exclude borders
  const tableContainerInnerWidth = await tableContainer.evaluate((el) => (el as HTMLElement).clientWidth);
  expect(tableContainerInnerWidth).toBe(innerWidth);

  // columns widths
  const headers = await page.getByRole("columnheader").all();
  const headerWidths = await Promise.all<Array<Promise<number>>>(
    headers.map((header) => header.evaluate((el) => (el as HTMLElement).offsetWidth)),
  );
  expect(headerWidths[0]).toBe(innerWidth / 4); // flex 1
  expect(headerWidths[1]).toBe(innerWidth / 2); // flex 2
  expect(headerWidths[2]).toBe(200); // width 200
});
