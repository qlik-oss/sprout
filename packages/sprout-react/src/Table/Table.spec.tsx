import { expect, test } from "@playwright/experimental-ct-react";

import { Table } from ".";
import { getAxeReport } from "../PlaywrightUtils";
import { TableContextHeight, TableTest } from "./TableTest";

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

test("should be responsive without width attribute but just the container", async ({
  mount,
  page,
}) => {
  const component = await mount(
    <TableTest
      width={MIN_TABLE_WIDTH * 2}
      firstColumnWidth={200}
      columnWidth={150}
    />,
  );
  const table = page.getByRole("grid");
  const cells = page.getByRole("gridcell");
  const header = page.getByRole("columnheader");

  const allHeaders = await header.all();
  expect(allHeaders).toHaveLength(COLUMN_COUNT);

  // test overflow of the table according to the parent container
  let tableBB = await table.boundingBox();
  expect(tableBB?.width).toBe(MIN_TABLE_WIDTH * 2);
  let overflowX = await page.evaluate(() => {
    const tableElement = document.querySelector(
      "#component-testing > div > div",
    );
    return tableElement
      ? tableElement.scrollWidth > tableElement.clientWidth
      : false;
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
  expect(cellBB?.width).toBeGreaterThan(secondCellBB?.width || 0);

  // now let's go under the minimum width to check overflow is ok
  await component.update(
    <TableTest
      width={MIN_TABLE_WIDTH - 50}
      firstColumnWidth={200}
      columnWidth={150}
    />,
  );
  tableBB = await table.boundingBox();
  expect(tableBB?.width).toBe(MIN_TABLE_WIDTH - 50);
  overflowX = await page.evaluate(() => {
    const tableElement = document.querySelector(
      "#component-testing > div > div",
    );
    return tableElement
      ? tableElement.scrollWidth > tableElement.clientWidth
      : false;
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
  await component.update(
    <TableTest
      width={MIN_TABLE_WIDTH}
      firstColumnWidth={200}
      columnWidth={150}
    />,
  );
  tableBB = await table.boundingBox();
  expect(tableBB?.width).toBe(MIN_TABLE_WIDTH);
  overflowX = await page.evaluate(() => {
    const tableElement = document.querySelector(
      "#component-testing > div > div",
    );
    return tableElement
      ? tableElement.scrollWidth > tableElement.clientWidth
      : false;
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
  const row = await mount(<Table.Message />);
  await expect(row).toBeVisible();
  await expect(row).toHaveAttribute("role", "row");
  const cell = row.getByRole("cell");
  await expect(cell).toBeVisible();
  await expect(cell).toHaveText("There are no rows");
  await expect(cell).toHaveAttribute("aria-live", "polite");
});

test("should display resizing indicator in header cell", async ({
  mount,
  page,
}) => {
  await mount(
    <TableTest
      width={MIN_TABLE_WIDTH * 2}
      firstColumnWidth={200}
      columnWidth={150}
      enableResizing
    />,
  );

  const headers = await page.getByRole("columnheader").all();

  // column resizing indicator is shown when hovering over the header border
  const resizingIndicator = await headers[1].getByTestId(
    "table.header.resize-column",
  );
  await resizingIndicator.hover();
  await expect(resizingIndicator).toHaveCSS("cursor", "col-resize");
});

test("dls-374: should height applied to body content when virtualized", async ({
  mount,
  page,
}) => {
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
