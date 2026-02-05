import { expect, test } from "@playwright/experimental-ct-react";

import { TableHTML } from ".";

import { getAxeReport } from "../utils/getAxeReport";
import { TableColumnSize, TableContextHeight, TableDataTest, TableTest } from "./TableTest";

test("should Table be accessible", async ({ mount, page }) => {
  await mount(<TableTest />);
  const accessibilityScanResults = await getAxeReport(page);
  expect(accessibilityScanResults.violations).toEqual([]);

  const table = page.getByRole("grid");
  const row = table.getByRole("row");
  const rowgroup = table.getByRole("rowgroup");
  const head = await rowgroup.first();
  const body = await rowgroup.nth(1);
  const header = head.getByRole("row");
  const columnheader = header.getByRole("columnheader");
  const gridcell = row.getByRole("gridcell");
  const allRows = await row.all();

  await expect(table).toBeVisible();
  await expect(head).toBeVisible();
  await expect(body).toBeVisible();
  expect(await rowgroup.all()).toHaveLength(2); // 1 table head + 1 table body
  expect(allRows).toHaveLength(3); // 1 header + 2 rows
  expect(await columnheader.all()).toHaveLength(6);
  expect(await gridcell.all()).toHaveLength(12);
  const height = await allRows[2].evaluate((node) => {
    return node.getBoundingClientRect().height;
  });
  expect(height).toBe(40);
});

const CELL_MIN_WIDTH = 16;
const COLUMN_COUNT = 6;
const MIN_TABLE_WIDTH = CELL_MIN_WIDTH * COLUMN_COUNT + 2; // add borders width

test("should manage overflow from the container", async ({ mount, page }) => {
  const currentTableWidth = 200 + (COLUMN_COUNT - 1) * 150 + 2;
  const component = await mount(<TableTest width={currentTableWidth} firstColumnWidth={200} columnWidth={150} />);
  const table = page.getByRole("grid");
  const cells = page.getByRole("gridcell");
  const header = page.getByRole("columnheader");

  const allHeaders = await header.all();
  expect(allHeaders).toHaveLength(COLUMN_COUNT);

  // test overflow of the table according to the parent container
  let tableBB = await table.boundingBox();
  expect(tableBB?.width).toBe(currentTableWidth);
  let overflowX = await page.evaluate(() => {
    const tableElement = document.querySelector("#component-testing > div > div");
    return tableElement ? tableElement.scrollWidth > tableElement.clientWidth : false;
  });
  expect(overflowX).toBe(false);
  // test cell and header have the same width (table columns are aligned)
  let cell = cells.first();
  let cellBB = await cell.boundingBox();
  expect(cellBB?.width).toBeGreaterThan(CELL_MIN_WIDTH);
  let firstHeader = await header.first();
  let firstHeaderBB = await firstHeader.boundingBox();
  expect(firstHeaderBB?.width).toBe(cellBB?.width);
  const secondCell = cells.nth(1);
  const secondCellBB = await secondCell.boundingBox();
  expect(secondCellBB?.width).toBeGreaterThan(CELL_MIN_WIDTH);
  expect(Math.floor(cellBB?.width || 0)).toBeGreaterThan(Math.floor(secondCellBB?.width || 0));

  // now let's go under the minimum width to check overflow is ok
  await component.update(<TableTest width={MIN_TABLE_WIDTH - 50} columnWidth={CELL_MIN_WIDTH} />);
  tableBB = await table.boundingBox();
  expect(tableBB?.width).toBe(MIN_TABLE_WIDTH - 50);
  overflowX = await page.evaluate(() => {
    const tableElement = document.querySelector("#component-testing > div > div");
    return tableElement ? tableElement.scrollWidth > tableElement.clientWidth : false;
  });
  expect(overflowX).toBe(true);
  // test cell and header have the same width (table columns are aligned)
  cell = cells.first();
  cellBB = await cell.boundingBox();
  expect(cellBB?.width).toBe(CELL_MIN_WIDTH);
  firstHeader = await header.first();
  firstHeaderBB = await firstHeader.boundingBox();
  expect(firstHeaderBB?.width).toBe(cellBB?.width);

  // let's go at the minimum width
  await component.update(<TableTest width={MIN_TABLE_WIDTH} columnWidth={CELL_MIN_WIDTH} />);
  tableBB = await table.boundingBox();
  expect(tableBB?.width).toBe(MIN_TABLE_WIDTH);
  overflowX = await page.evaluate(() => {
    const tableElement = document.querySelector("#component-testing > div > div");
    return tableElement ? tableElement.scrollWidth > tableElement.clientWidth : false;
  });
  expect(overflowX).toBe(false);
  // test cell and header have the same width (table columns are aligned)
  cell = cells.first();
  cellBB = await cell.boundingBox();
  expect(cellBB?.width).toBe(CELL_MIN_WIDTH);
  firstHeader = await header.first();
  firstHeaderBB = await firstHeader.boundingBox();
  expect(firstHeaderBB?.width).toBe(cellBB?.width);
});

test("should Message display a default value", async ({ mount }) => {
  const row = await mount(<TableHTML.Message />);
  await expect(row).toBeVisible();
  await expect(row).toHaveAttribute("role", "row");
  const cell = row.getByRole("cell");
  await expect(cell).toBeVisible();
  await expect(cell).toHaveText("There are no rows");
  await expect(cell).toHaveAttribute("aria-live", "polite");
});

test("should display resizing indicator in header cell", async ({ mount, page }) => {
  await mount(<TableTest width={MIN_TABLE_WIDTH * 2} firstColumnWidth={200} columnWidth={150} resizable />);

  const headers = await page.getByRole("columnheader").all();

  // column resizing indicator is shown when hovering over the header border
  const resizingIndicator = await headers[1].getByTestId("table.header.resize-column");
  await resizingIndicator.hover();
  await expect(resizingIndicator).toHaveCSS("cursor", "col-resize");
});

test("dls-374: should height applied to body content when virtualized", async ({ mount, page }) => {
  await mount(<TableContextHeight />);
  const bodyContent = page.locator('[role="rowgroup"]:nth-child(2) > div');
  await expect(bodyContent).toBeVisible();
  let bodyContentBB = await bodyContent.boundingBox();
  expect(bodyContentBB?.height).toBe(50); //

  // change content height
  await page.getByRole("button", { name: "Increase content height" }).click();
  bodyContentBB = await bodyContent.boundingBox();
  expect(bodyContentBB?.height).toBe(100);
});

test("should support min/max width and flex value", async ({ mount, page }) => {
  // overflow in X
  await mount(<TableColumnSize totalWidth="500px" />);
  const table = page.getByRole("grid");
  const headers = await page.getByRole("columnheader").all();
  const widths = await Promise.all<Array<Promise<number>>>(
    headers.map((header) => header.evaluate((el) => (el as HTMLElement).offsetWidth)),
  );

  // I need to total width of the table which is in overflow
  const tableWidth = await table.evaluate((el) => (el as HTMLElement).scrollWidth);

  const styles: Array<CSSStyleDeclaration> = [];
  styles[0] = await headers[0].evaluate((el) => el.style);
  styles[1] = await headers[1].evaluate((el) => el.style);
  styles[2] = await headers[2].evaluate((el) => el.style);

  // minWidth=100 maxWidth=300
  expect(styles[0].width).toBe("150px");
  expect(styles[0].minWidth).toBe("50px");
  expect(styles[0].maxWidth).toBe("300px");
  expect(widths[0]).toBeGreaterThanOrEqual(100);
  expect(widths[0]).toBeLessThanOrEqual(300);
  expect(widths[0]).toBe(150);

  // flex=50%
  expect(styles[1].width).toBe("50px");
  expect(styles[0].minWidth).toBe("50px");
  expect(styles[1].maxWidth).toBe("");
  expect(widths[1]).toBeGreaterThanOrEqual(50);
  expect(widths[1]).toBeLessThanOrEqual(tableWidth / 2);
  expect(widths[1]).toBe(50);

  // minWidth=400
  expect(styles[2].width).toBe("150px");
  expect(styles[2].minWidth).toBe("400px");
  expect(styles[2].maxWidth).toBe("");
  expect(widths[2]).toBe(400);

  // check all widths

  const totalWidth = widths.reduce((acc, width) => acc + width, 0);
  expect(totalWidth + 2).toBe(tableWidth + 2);
});

test("DLS-442: should remove the padding when no horizontal scroll", async ({ mount, page }) => {
  await mount(<TableDataTest />);

  const scroller = page.locator("#component-testing > div > div");
  const table = page.getByRole("grid");
  const tableContainer = table.locator("..");

  // Expect the table to have horizontal scroll
  const hasInitialHorizontalScroll = await scroller.evaluate((el) => el.scrollWidth > el.clientWidth);
  expect(hasInitialHorizontalScroll).toBe(true);
  await expect(table).toHaveCSS("padding-bottom", "12px");
  const containerHeight = await scroller.evaluate((el) => el.clientHeight);
  const tableHeight = await tableContainer.evaluate((el) => el.clientHeight);
  expect(containerHeight).toBe(368); // height minus padding
  expect(tableHeight).toBe(containerHeight);

  // hide the first 3 columns
  for (let i = 0; i < 3; i++) {
    const firstHeader = page.getByRole("columnheader").first();
    // eslint-disable-next-line no-await-in-loop
    await firstHeader.hover();
    // eslint-disable-next-line no-await-in-loop
    await firstHeader.getByRole("button").first().click();

    // eslint-disable-next-line no-await-in-loop
    await page.getByRole("menuitem", { name: "Hide column" }).click();
  }

  // Expect the table to have no horizontal scroll
  const hasHorizontalScroll = await scroller.evaluate((el) => el.scrollWidth > el.clientWidth);
  expect(hasHorizontalScroll).toBe(false);
  await page.evaluate(() => window.dispatchEvent(new Event("resize")));
  await expect(table).toHaveCSS("padding-bottom", "0px");
});
