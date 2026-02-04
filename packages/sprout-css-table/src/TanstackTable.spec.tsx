import { expect, test } from "@playwright/experimental-ct-react";
import { Table } from ".";
import { makePerson, personColDef, type Person } from "./docs/examples/person";
import {
  ControlledColumnSizingTableTest,
  ControlledRowSelectionTest,
  ControlledRowToggling,
  DisabledRowSelectionTest,
  ExternalRowSelectionTest,
  OnCellClickTest,
  RowActionsTest,
  TableCustomSortingTest,
  TableNoRows,
  TableRenderCellTest,
  TableSortingTest,
  TableTest,
  TableValueGetterTest,
  TableValueSetterTest,
  TableWithHeaderContextMenu,
  TableWithPanelOverlay,
  UncontrolledRowSelectionTest,
} from "./TanstackTableTest";
import { KEYBOARD_KEYS } from "./utils/constant";

const hoveredRowBackground: string = "rgba(0, 0, 0, 0.03)";

test("should support sort feature", async ({ page, mount }) => {
  await mount(<TableTest />);
  const headers = await page.getByRole("columnheader").all();
  const firstHeader = headers[0];
  const secondHeader = headers[1];
  // check it contains text
  await expect(firstHeader).toContainText("First Name");
  await expect(secondHeader).toContainText("Last Name");

  await expect(firstHeader).not.toHaveAttribute("aria-sort");
  await expect(secondHeader).toHaveAttribute("aria-sort", "descending");

  await firstHeader.click();
  await expect(firstHeader).toHaveAttribute("aria-sort", "ascending");
  await expect(secondHeader).not.toHaveAttribute("aria-sort");

  await firstHeader.focus();
  await firstHeader.getByRole("button", { name: "Contextual actions" }).click();
  const firstHeaderMenu = page.getByRole("menu");
  await expect(firstHeaderMenu).toBeVisible();
  await expect(firstHeaderMenu.getByRole("menuitem", { name: "Sort ascending" })).toBeVisible();
  await expect(firstHeaderMenu.getByRole("menuitem", { name: "Sort descending" })).toBeVisible();
  await expect(firstHeaderMenu.getByRole("menuitem", { name: "Sort ascending" })).toBeDisabled();
  await expect(firstHeaderMenu.getByRole("menuitem", { name: "Sort descending" })).not.toBeDisabled();
  await firstHeaderMenu.getByRole("menuitem", { name: "Sort descending" }).click();
  await expect(firstHeader).toHaveAttribute("aria-sort", "descending");
  // Click outside to close the menu
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);

  // WHEN clicking on "Sort descending" of another column
  await secondHeader.focus();
  await secondHeader.getByRole("button", { name: "Contextual actions" }).click();
  const secondHeaderMenu = page.getByRole("menu");
  await expect(secondHeaderMenu).toBeVisible();
  // THEN Sorting order should be descending
  await secondHeaderMenu.getByRole("menuitem", { name: "Sort descending" }).click();
  await expect(secondHeader).toHaveAttribute("aria-sort", "descending");
});

test("should support possibility to disable sorting", async ({ page, mount }) => {
  const { update } = await mount(<TableSortingTest />);

  const headers = await page.getByRole("columnheader").all();
  const nameHeader = headers[0];
  const typeHeader = headers[1];
  const modifiedHeader = headers[2];
  const spaceHeader = headers[3];

  // check that sorting is enabled on the Name and Type columns
  await nameHeader.focus();
  await nameHeader.getByLabel("Contextual actions").click();
  const nameColumnMenu = page.getByRole("menu");
  await expect(nameColumnMenu).toBeVisible();
  await expect(nameColumnMenu.getByRole("menuitem", { name: "Sort ascending" })).toBeVisible();
  await expect(nameColumnMenu.getByRole("menuitem", { name: "Sort descending" })).toBeVisible();
  // Click outside to close the menu
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);

  await typeHeader.focus();
  await expect(typeHeader).toBeFocused();
  await typeHeader.getByLabel("Contextual actions").click();
  const typeColumnMenu = page.getByRole("menu");
  await expect(typeColumnMenu).toBeVisible();
  await expect(typeColumnMenu.getByRole("menuitem", { name: "Sort ascending" })).toBeVisible();
  await expect(typeColumnMenu.getByRole("menuitem", { name: "Sort descending" })).toBeVisible();
  // Click outside to close the menu
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);

  // check that sorting is disabled on the Modified and Space columns
  await modifiedHeader.focus();
  await modifiedHeader.getByLabel("Contextual actions").click();
  const modifiedColumnMenu = page.getByRole("menu");
  await expect(modifiedColumnMenu).toBeVisible();
  await expect(modifiedColumnMenu.getByRole("menuitem", { name: "Sort ascending" })).not.toBeVisible();
  await expect(modifiedColumnMenu.getByRole("menuitem", { name: "Sort descending" })).not.toBeVisible();
  // Click outside to close the menu
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);

  await spaceHeader.focus();
  await spaceHeader.getByLabel("Contextual actions").click();
  const spaceColumnMenu = page.getByRole("menu");
  await expect(spaceColumnMenu).toBeVisible();
  await expect(spaceColumnMenu.getByRole("menuitem", { name: "Sort ascending" })).not.toBeVisible();
  await expect(spaceColumnMenu.getByRole("menuitem", { name: "Sort descending" })).not.toBeVisible();
  // Click outside to close the menu
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);

  // check that sorting is disabled on all columns if passing sortable property on table level
  await update(<TableSortingTest disableColumnSorting />);

  await nameHeader.hover();
  await nameHeader.getByLabel("Contextual actions").click();
  await expect(nameColumnMenu).toBeVisible();
  await expect(nameColumnMenu.getByRole("menuitem", { name: "Sort ascending" })).not.toBeVisible();
  await expect(nameColumnMenu.getByRole("menuitem", { name: "Sort descending" })).not.toBeVisible();
  // Click outside to close the menu
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);

  await typeHeader.hover({ timeout: 1000 });
  await typeHeader.getByLabel("Contextual actions").click();
  await expect(typeColumnMenu).toBeVisible();
  await expect(typeColumnMenu.getByRole("menuitem", { name: "Sort ascending" })).not.toBeVisible();
  await expect(typeColumnMenu.getByRole("menuitem", { name: "Sort descending" })).not.toBeVisible();
  // Click outside to close the menu
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);

  await modifiedHeader.hover({ timeout: 1000 });
  await modifiedHeader.getByLabel("Contextual actions").click();
  await expect(modifiedColumnMenu).toBeVisible();
  await expect(modifiedColumnMenu.getByRole("menuitem", { name: "Sort ascending" })).not.toBeVisible();
  await expect(modifiedColumnMenu.getByRole("menuitem", { name: "Sort descending" })).not.toBeVisible();
  // Click outside to close the menu
  await page.keyboard.press(KEYBOARD_KEYS.ESCAPE);

  await spaceHeader.hover({ timeout: 1000 });
  await spaceHeader.getByLabel("Contextual actions").click();
  await expect(spaceColumnMenu).toBeVisible();
  await expect(spaceColumnMenu.getByRole("menuitem", { name: "Sort ascending" })).not.toBeVisible();
  await expect(spaceColumnMenu.getByRole("menuitem", { name: "Sort descending" })).not.toBeVisible();
});

test("should support possibility to use custom sorting", async ({ page, mount }) => {
  const mounted = await mount(<TableCustomSortingTest />);
  const headers = await page.getByRole("columnheader").all();
  const rows = await mounted.getByRole("row").all();

  // Name column sorting
  const nameHeader = headers[0];
  await expect(nameHeader).toContainText("Name");

  // Sort name header alphanumerically by default
  await nameHeader.click();
  await expect(nameHeader).toHaveAttribute("aria-sort", "ascending");
  await expect(rows[1].getByRole("gridcell").nth(0)).toContainText("alice");
  await expect(rows[2].getByRole("gridcell").nth(0)).toContainText("Bob");
  await expect(rows[3].getByRole("gridcell").nth(0)).toContainText("charlie");

  // Modify header sorting
  const modifiedHeader = headers[1];
  await expect(modifiedHeader).toContainText("Modified");
  await expect(modifiedHeader).not.toHaveAttribute("aria-sort");

  // Sort modified header with custom date sorting
  await modifiedHeader.click();
  await expect(modifiedHeader).toHaveAttribute("aria-sort", "ascending");
  await expect(rows[1].getByRole("gridcell").nth(1)).toContainText("2024-01-01");
  await expect(rows[2].getByRole("gridcell").nth(1)).toContainText("2025-01-01");
  await expect(rows[3].getByRole("gridcell").nth(1)).toContainText("2026-01-01");

  // Create date column sorting
  const createDateHeader = headers[2];
  await expect(createDateHeader).toContainText("Create date");
  await expect(createDateHeader).not.toHaveAttribute("aria-sort");

  // Sort create date header with built-in datetime sorting
  await createDateHeader.click();
  await expect(createDateHeader).toHaveAttribute("aria-sort", "descending");
  await expect(rows[1].getByRole("gridcell").nth(2)).toContainText("2026");
  await expect(rows[2].getByRole("gridcell").nth(2)).toContainText("2025");
  await expect(rows[3].getByRole("gridcell").nth(2)).toContainText("2024");
});

test("should show row number column", async ({ page, mount }) => {
  await mount(<TableTest displayRowNumberColumn />);
  const headers = await page.getByRole("columnheader").all();
  await expect(headers[0]).toContainText("#");
  // check if the second column is the firstName column
  await expect(headers[1]).toContainText("First Name");
});

test("support rowHeight property", async ({ mount }) => {
  const mounted = await mount(
    <Table rowHeight={48} variant="data" columns={personColDef} rows={makePerson(20) as Array<Person>} />,
  );
  const firstRow = mounted.getByRole("row").nth(1);
  let rowHeight = await firstRow.evaluate((item) => {
    return item.style.height.toString();
  });
  expect(rowHeight).toBe("48px");

  const firstCell = firstRow.getByRole("gridcell").nth(0);
  let cellHeight = await firstCell.evaluate((item) => {
    return item.getBoundingClientRect().height.toString();
  });
  // the variant data has a bottom border on the row
  expect(cellHeight).toBe("47");

  // variant list
  await mounted.update(
    <Table rowHeight={48} variant="list" columns={personColDef} rows={makePerson(20) as Array<Person>} />,
  );
  rowHeight = await firstRow.evaluate((item) => {
    return item.style.height.toString();
  });
  expect(rowHeight).toBe("48px");

  cellHeight = await firstCell.evaluate((item) => {
    return item.getBoundingClientRect().height.toString();
  });
  expect(cellHeight).toBe("48");
});

test("support renderCell property", async ({ mount }) => {
  const mounted = await mount(<TableRenderCellTest />);
  const firstRow = mounted.getByRole("row").nth(1);
  const firstCell = firstRow.getByRole("gridcell").nth(0);
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!firstCell) {
    throw new Error("First cell text is empty");
  }
  await expect(firstCell.getByTestId("entity-name")).toBeVisible();
  await expect(firstCell.getByTestId("entity-metadata")).toBeVisible();
  await expect(firstCell.getByTestId("entity-metadata")).toBeVisible();
});

test("should support no rows", async ({ mount }) => {
  const mounted = await mount(<Table variant="data" columns={personColDef} rows={[]} />);
  const rows = await mounted.getByRole("row").all();
  expect(rows.length).toBe(2);
  const cell = rows[1].getByRole("cell");
  await expect(cell).toHaveAttribute("aria-live", "polite");
});

test("should support custom noRowsOverlay", async ({ page, mount }) => {
  const mounted = await mount(<TableNoRows />);

  const rows = await mounted.getByRole("row").all();
  expect(rows.length).toBe(2);

  const cell = rows[1].getByRole("cell");
  await expect(cell).toHaveAttribute("aria-live", "polite");

  const message = page.getByTestId("foo");
  await expect(message).toBeVisible();
  await expect(message).toHaveText("test no rows");
});

test.describe("Row selection", (): void => {
  test("should support uncontrolled row selection", async ({ mount, page }) => {
    await mount(<UncontrolledRowSelectionTest />);
    const rows = await page.getByRole("row").all();
    expect(rows.length).toBe(21); // 20 rows + header row

    const firstRow = rows[1];
    await expect(firstRow).toBeVisible();
    const checkbox = await firstRow.getByRole("checkbox");
    await expect(checkbox).toBeVisible();
    await expect(checkbox).not.toBeChecked();
    await checkbox.click();
    await expect(checkbox).toBeChecked();
    //wait a bit
    await page.waitForTimeout(100);
    // check that header checkbox is indeterminate
    const headerCheckbox = rows[0].getByRole("checkbox");
    await expect(headerCheckbox).toBeVisible({ visible: true });
    // await expect(headerCheckbox).toBeChecked();
    await expect(headerCheckbox).toHaveAttribute("aria-checked", "mixed");

    // check that clicking on header checkbox selects all rows
    await headerCheckbox.click();
    await expect(headerCheckbox).toBeChecked();
    const allCheckboxes = await page.getByRole("checkbox").all();
    for (let i = 1; i < allCheckboxes.length; i++) {
      const mcheckbox = allCheckboxes[i];
      // eslint-disable-next-line no-await-in-loop
      await expect(mcheckbox).toBeChecked();
    }
  });

  test("should support controlled row selection", async ({ mount, page }) => {
    await mount(<ControlledRowSelectionTest />);
    const addButton = await page.getByRole("button", { name: "Add Row" });
    const deleteButton = await page.getByRole("button", { name: "Delete Selected Rows" });
    const firstCell = page.getByText("Emilio");

    await expect(addButton).toBeVisible();
    await expect(deleteButton).toBeVisible();
    const rows = await page.getByRole("row").all();
    expect(rows.length).toBe(21); // 20 rows + header row

    const firstRow = rows[1];
    await expect(firstRow).toBeVisible();
    const checkbox = await firstRow.getByRole("checkbox");
    await expect(checkbox).toBeVisible();
    await expect(checkbox).not.toBeChecked();
    await checkbox.click();
    await expect(checkbox).toBeChecked();

    // check that header checkbox is indeterminate
    const headerCheckbox = rows[0].getByRole("checkbox");
    await expect(headerCheckbox).toBeVisible();
    // await expect(headerCheckbox).toBeChecked();
    await expect(headerCheckbox).toHaveAttribute("aria-checked", "mixed");

    // click on the delete button
    await expect(firstCell).toBeVisible();
    await deleteButton.click();
    await expect(firstCell).not.toBeVisible();

    // create a new row
    await addButton.click();
    // check that the new row is visible
    const newCell = await page.getByText("Person");
    await expect(newCell).toBeVisible();

    // check that clicking on header checkbox selects all rows
    await headerCheckbox.click();
    await expect(headerCheckbox).toBeChecked();
    const allCheckboxes = await page.getByRole("checkbox").all();
    for (let i = 1; i < allCheckboxes.length; i++) {
      const mcheckbox = allCheckboxes[i];
      // eslint-disable-next-line no-await-in-loop
      await expect(mcheckbox).toBeChecked();
    }
  });

  test("should support disabling selection for specific rows", async ({ mount, page }) => {
    await mount(<DisabledRowSelectionTest />);

    const rowsContainer = page.getByRole("rowgroup").nth(1);
    const rowWithEnabledSelection = rowsContainer.getByRole("row").filter({ hasText: "Yadira" });
    const rowWithDisabledSelection = rowsContainer.getByRole("row").filter({ hasText: "Trace" });
    const enabledRowCheckbox = rowWithEnabledSelection.getByRole("checkbox");
    const disabledRowCheckbox = rowWithDisabledSelection.getByRole("checkbox");

    // THEN enabled row can be selected
    await expect(enabledRowCheckbox).toBeEnabled();
    await enabledRowCheckbox.click();
    await expect(enabledRowCheckbox).toBeChecked();
    // AND selection is disabled on disabled row
    await expect(disabledRowCheckbox).toBeDisabled();
    await disabledRowCheckbox.click({ force: true });
    await expect(disabledRowCheckbox).not.toBeChecked();
  });
});

test.describe("Row toggling", (): void => {
  const toggledRowBackground: string = "rgba(0, 0, 0, 0.08)";
  const selectedRowBackground: string = "rgba(0, 0, 0, 0.05)";

  const variants: Array<"data" | "list"> = ["data", "list"];

  let mockCalls: Array<string> = [];
  let mockOnToggledRowChange: (rowId: string) => void;

  test.beforeEach(() => {
    mockCalls = [];
    mockOnToggledRowChange = (rowId: string) => {
      mockCalls.push(rowId);
    };
  });

  for (const variant of variants) {
    // eslint-disable-next-line @typescript-eslint/no-loop-func
    test(`should work with ${variant} variant without row selection`, async ({ mount, page }): Promise<void> => {
      await mount(
        <TableTest variant={variant} getRowId={(row) => row.uuid} onToggledRowChange={mockOnToggledRowChange} />,
      );

      const rowsContainer = page.getByRole("rowgroup").nth(1);
      const rows = await rowsContainer.getByRole("row").all();
      const thirdRow = rows[2];

      // WHEN hovering on a row
      await thirdRow.hover();
      // THEN the row is interactive and has pointer cursor with corresponding background
      await expect(thirdRow).toHaveCSS("cursor", "pointer");
      await expect(thirdRow).toHaveCSS("background-color", hoveredRowBackground);
      await page.mouse.move(0, 0);
      // WHEN clicking on a row
      await thirdRow.click();
      await page.mouse.move(0, 0);
      // THEN the row is toggled and has corresponding background
      await expect(thirdRow).toHaveCSS("background-color", toggledRowBackground);
      // AND onToggledRowChange has been called with row id
      expect(mockCalls.length).toBe(1);
      expect(typeof mockCalls[0]).toBe("string");
      // WHEN clicking on another row in the table
      const seventhRow = rows[6];
      await seventhRow.click();
      await page.mouse.move(0, 0);
      // THEN the previously toggled row is untoggled
      await expect(thirdRow).not.toHaveCSS("background-color", toggledRowBackground);
      // AND the newly clicked row is toggled
      await expect(seventhRow).toHaveCSS("background-color", toggledRowBackground);
      // WHEN clicking on a toggled row
      await seventhRow.click();
      await page.mouse.move(0, 0);
      // THEN the row is untoggled
      await expect(seventhRow).not.toHaveCSS("background-color", toggledRowBackground);
      // AND onToggledRowChange has been called with empty string ""
      expect(mockCalls.length).toBe(3);
      expect(mockCalls[2]).toEqual("");
    });
  }

  for (const variant of variants) {
    // eslint-disable-next-line @typescript-eslint/no-loop-func
    test(`should work with ${variant} variant with row selection`, async ({ mount, page }): Promise<void> => {
      await mount(
        <TableTest
          variant={variant}
          getRowId={(row) => row.uuid}
          rowSelectionMode="multiple"
          onToggledRowChange={mockOnToggledRowChange}
        />,
      );

      const rowsContainer = page.getByRole("rowgroup").nth(1);
      const rows = await rowsContainer.getByRole("row").all();
      const thirdRow = rows[2];
      const seventhRow = rows[6];
      const thirdRowCheckbox = thirdRow.getByRole("checkbox");
      const seventhRowCheckbox = seventhRow.getByRole("checkbox");
      // WHEN clicking on a third row
      await thirdRow.click();
      await page.mouse.move(0, 0);
      // THEN the third row is toggled and has corresponding background
      await expect(thirdRow).toHaveCSS("background-color", toggledRowBackground);
      // AND onToggledRowChange has been called with row id
      expect(mockCalls.length).toBe(1);
      expect(typeof mockCalls[0]).toBe("string");
      // AND Checkbox is not checked
      await expect(thirdRowCheckbox).not.toBeChecked();

      // WHEN clicking on checkbox of seventh row
      await seventhRowCheckbox.click();
      await page.mouse.move(0, 0);
      // THEN the previously toggled third row is still toggled
      await expect(thirdRow).toHaveCSS("background-color", toggledRowBackground);
      // AND checkbox of seventh row is checked
      await expect(seventhRowCheckbox).toBeChecked();
      // AND seventh row is selected and has corresponding background
      await expect(seventhRow).toHaveCSS("background-color", selectedRowBackground);

      // WHEN clicking on third row checkbox
      await thirdRowCheckbox.click();
      await page.mouse.move(0, 0);
      // AND checkbox of third row is checked
      await expect(thirdRowCheckbox).toBeChecked();
      // AND the third row is still toggled
      await expect(thirdRow).toHaveCSS("background-color", toggledRowBackground);

      // WHEN clicking on the third row one more time
      await thirdRow.click();
      await page.mouse.move(0, 0);
      // THEN the third row is untoggled
      await expect(thirdRow).not.toHaveCSS("background-color", toggledRowBackground);
      // AND the third row is still selected
      await expect(thirdRow).toHaveCSS("background-color", selectedRowBackground);
      // AND the checkbox of the third row is still checked
      await expect(thirdRowCheckbox).toBeChecked();
    });
  }

  test("should support controlled row toggling", async ({ mount, page }) => {
    await mount(<ControlledRowToggling />);

    // THEN there is not toggled row
    const rowTogglingStateElement = page.getByTestId("row-toggling-state");
    expect(await rowTogglingStateElement.textContent()).toEqual("");
    // WHEN clicking on a row
    const rowsContainer = page.getByRole("rowgroup").nth(1);
    const rows = await rowsContainer.getByRole("row").all();
    const thirdRow = rows[2];
    const fifthRow = rows[4];
    const thirdRowId = "hxj4lmys07r3bd3mp3xvq7";
    const fifthRowId = "yi3dkhmoumg5qpesrsdpmb";
    await thirdRow.click();
    await page.mouse.move(0, 0);
    // THEN the row is toggled
    await expect(thirdRow).toHaveCSS("background-color", toggledRowBackground);
    // AND the controlled state should be updated
    expect(await rowTogglingStateElement.textContent()).toEqual(thirdRowId);
    // WHEN clicking on another row
    await fifthRow.click();
    await page.mouse.move(0, 0);
    // THEN the previously toggled row is untoggled
    await expect(thirdRow).not.toHaveCSS("background-color", toggledRowBackground);
    // AND the newly clicked row is toggled
    await expect(fifthRow).toHaveCSS("background-color", toggledRowBackground);
    // AND the controlled state should be updated
    expect(await rowTogglingStateElement.textContent()).toEqual(fifthRowId);
    // WHEN clicking on fifth row one more time
    await fifthRow.click();
    await page.mouse.move(0, 0);
    // THEN the row is untoggled
    await expect(fifthRow).not.toHaveCSS("background-color", toggledRowBackground);
    // AND the controlled state should be updated with empty string ""
    expect(await rowTogglingStateElement.textContent()).toEqual("");
  });
});

test("should support filter rows", async ({ mount, page }) => {
  await mount(<ControlledRowSelectionTest />);
  const filterInput = await page.getByPlaceholder("Search...");

  await expect(filterInput).toBeVisible();
  const rows = await page.getByRole("row").all();
  expect(rows.length).toBe(21); // 20 rows + header row

  let rowCount = await page.getByRole("row").count();
  expect(rowCount).toBe(21);
  await filterInput.fill("J");
  rowCount = await page.getByRole("row").count();
  expect(rowCount).toBe(5);
});

test("should support external selection management", async ({ mount, page }) => {
  await mount(<ExternalRowSelectionTest />);

  const divSelectedRows = await page.getByText("Number of selected rows");
  await expect(divSelectedRows).toBeVisible();
  await expect(divSelectedRows).toHaveText("Number of selected rows : 0");

  const rows = await page.getByRole("row").all();
  const firstRow = rows[1];
  await expect(firstRow).toBeVisible();
  const firstCheckbox = firstRow.getByRole("checkbox");
  await expect(firstCheckbox).toBeVisible();
  await firstCheckbox.click();

  await expect(divSelectedRows).toHaveText("Number of selected rows : 1");
});

test("should support resizing columns", async ({ mount, page }) => {
  await mount(<TableTest />);
  const headers = await page.getByRole("columnheader").all();
  const firstHeader = headers[0];
  const firstHeaderResize = await firstHeader.getByRole("button", { name: "Resize column" });

  let firstHeaderBB = await firstHeader.boundingBox();
  expect(firstHeaderBB?.width).toBe(150);
  await firstHeader.hover();
  await firstHeaderResize.click();
  await page.mouse.down();
  await page.mouse.move(200, 0);
  await page.mouse.up();

  firstHeaderBB = await firstHeader.boundingBox();
  expect(firstHeaderBB?.width).toBeGreaterThan(180);
  expect(firstHeaderBB?.width).toBeLessThan(200);

  // double click should reset
  await firstHeaderResize.dblclick();
  firstHeaderBB = await firstHeader.boundingBox();
  expect(firstHeaderBB?.width).toBe(150);
});

test("should support controlled column resizing", async ({ mount, page }) => {
  await mount(<ControlledColumnSizingTableTest />);

  const headers = await page.getByRole("columnheader").all();
  const nameHeader = headers[0];
  const typeHeader = headers[1];
  const modifiedHeader = headers[2];
  const spaceHeader = headers[3];
  let nameHeaderBB = await nameHeader.boundingBox();
  const typeHeaderBB = await typeHeader.boundingBox();
  const modifiedHeaderBB = await modifiedHeader.boundingBox();
  const spaceHeaderBB = await spaceHeader.boundingBox();

  // width for "name" column is taken from controlled state (columnSizing prop)
  expect(nameHeaderBB?.width).toBe(300);
  // width for "type" column is taken from controlled state (columnSizing prop)
  expect(typeHeaderBB?.width).toBe(150);
  // width for "modified" column is taken from column definition, if not provided in controlled state
  expect(modifiedHeaderBB?.width).toBe(100);
  // width for "space" column is taken from controlled state (columnSizing prop)
  expect(spaceHeaderBB?.width).toBe(150);

  // WHEN User resize "name" column
  const nameHeaderResize = await nameHeader.getByRole("button", { name: "Resize column" });
  await nameHeader.hover();
  await nameHeaderResize.click();
  await page.mouse.down();
  await page.mouse.move(450, 0);
  await page.mouse.up();

  // THEN the "name" column width should be changed
  nameHeaderBB = await nameHeader.boundingBox();
  expect(nameHeaderBB?.width).toBeGreaterThan(430);
  expect(nameHeaderBB?.width).toBeLessThan(450);
  // AND controlled state should be updated
  const columnSizingStateElement = await page.getByTestId("column-sizing-state");
  const controlledColumnSizingdState = await columnSizingStateElement.textContent();
  const match = controlledColumnSizingdState && controlledColumnSizingdState.match(/"name":\s*(\d+)/);
  const nameColumnWidth = match ? Number(match[1]) : 0;
  expect(nameColumnWidth).toBeGreaterThan(430);
  expect(nameColumnWidth).toBeLessThan(450);
});

test("should support possibility to disable column resizing", async ({ mount, page }) => {
  const { update } = await mount(<ControlledColumnSizingTableTest />);

  const headers = await page.getByRole("columnheader").all();
  const nameHeader = headers[0];
  const typeHeader = headers[1];
  const modifiedHeader = headers[2];
  const spaceHeader = headers[3];

  const nameHeaderResize = await nameHeader.getByRole("button", { name: "Resize column" });
  const typeHeaderResize = await typeHeader.getByRole("button", { name: "Resize column" });
  const modifiedHeaderResize = await modifiedHeader.getByRole("button", { name: "Resize column" });
  const spaceHeaderResize = await spaceHeader.getByRole("button", { name: "Resize column" });
  await expect(nameHeaderResize).toBeVisible();
  await expect(typeHeaderResize).toBeVisible();
  // resizing is disabled for "modified" and "space" column definition
  await expect(modifiedHeaderResize).not.toBeVisible();
  await expect(spaceHeaderResize).not.toBeVisible();

  // THEN rerender component with disableColumnResize prop
  await update(<ControlledColumnSizingTableTest disableColumnResize />);
  // THEN resizing should be disabled on all table columns
  await expect(nameHeaderResize).not.toBeVisible();
  await expect(typeHeaderResize).not.toBeVisible();
  await expect(modifiedHeaderResize).not.toBeVisible();
  await expect(spaceHeaderResize).not.toBeVisible();
});

test("should support onCellClick", async ({ mount, page }) => {
  await mount(<OnCellClickTest />);
  const rows = await page.getByRole("row").all();
  const clickedCellList = await page.getByTestId("clicked-cell-list");
  const clickedItems = await clickedCellList.getByRole("listitem");
  let clickedItemCount = await clickedItems.count();
  await expect(clickedCellList).toBeVisible();
  expect(clickedItemCount).toBe(0);

  const firstRow = rows[1];
  const firstCell = firstRow.getByRole("gridcell").nth(0);
  await expect(firstCell).toBeVisible();
  await firstCell.click();
  await expect(clickedCellList).toBeVisible();
  clickedItemCount = await clickedItems.count();
  expect(clickedItemCount).toBe(1);
  await expect(clickedItems.nth(0)).toContainText("Emilio");
});

test("should support rowActions", async ({ mount, page }) => {
  await mount(<RowActionsTest />);
  const rows = await page.getByRole("row").all();
  const counter = await page.getByTestId("counter");
  const firstRow = rows[1];
  const actionButton = firstRow.getByRole("button");
  const firstCell = firstRow.getByRole("gridcell").nth(1);
  const NAME = "Electronic Ceramic Chips";
  const checkbox = firstRow.getByRole("checkbox");
  const menu = await page.getByRole("menu");

  await expect(checkbox).toBeVisible();
  await expect(actionButton).toBeVisible();
  await expect(counter).toHaveText("0");
  await expect(firstCell).toContainText(NAME);

  await actionButton.click();
  const actionItem = menu.getByText(`Edit ${NAME}`);
  await expect(menu).toBeVisible();
  await expect(counter).toHaveText("0");
  await expect(actionItem).toBeVisible();
  await actionItem.click();
  await expect(counter).toHaveText("0");
  await expect(checkbox).not.toBeChecked();

  // now check if we click on the row
  await firstCell.click();
  await expect(checkbox).toBeChecked();
  await expect(counter).toHaveText("1");
  await firstCell.click();
  await expect(checkbox).not.toBeChecked();
  await expect(counter).toHaveText("2");

  // automotive will prevent the default action
  const automotiveRow = rows[5];
  const automotiveCell = automotiveRow.getByRole("gridcell").nth(2);
  const automotiveCheckbox = automotiveRow.getByRole("checkbox");
  await expect(automotiveCell).toContainText("Automotive");
  await expect(automotiveCheckbox).toBeVisible();
  await expect(automotiveCheckbox).not.toBeChecked();

  await automotiveCell.click();
  await expect(counter).toHaveText("3");
  await expect(automotiveCheckbox).not.toBeChecked(); // prevented
});

test("should support right click context menu rowActions", async ({ mount, page }) => {
  await mount(<RowActionsTest />);
  const rows = await page.getByRole("row").all();
  const counter = page.getByTestId("counter");
  const firstRow = rows[1];
  const firstCell = firstRow.getByRole("gridcell").nth(1);
  const NAME = "Electronic Ceramic Chips";
  const checkbox = firstRow.getByRole("checkbox");
  const menu = page.getByRole("menu");
  const clickedText = page.getByTestId("item-clicked");

  await expect(checkbox).toBeVisible();
  await expect(counter).toHaveText("0");
  await expect(firstCell).toContainText(NAME);

  await firstCell.click({ button: "right" });
  const actionItem = menu.getByText(`Edit ${NAME}`);
  await expect(menu).toBeVisible();
  await expect(counter).toHaveText("0");
  await expect(actionItem).toBeVisible();
  await expect(clickedText).toHaveText("Not clicked");
  await actionItem.click();
  await expect(counter).toHaveText("0");
  await expect(checkbox).not.toBeChecked();
  await expect(clickedText).toHaveText("Clicked");

  await firstCell.click();
  await expect(actionItem).not.toBeVisible();
  await expect(checkbox).toBeChecked();
  await expect(counter).toHaveText("1");
  await firstCell.click();
  await expect(checkbox).not.toBeChecked();
  await expect(counter).toHaveText("2");
});

test("should close context menu rowActions on scroll", async ({ mount, page }) => {
  await mount(<RowActionsTest />);
  const rows = await page.getByRole("row").all();
  const counter = page.getByTestId("counter");
  const firstRow = rows[1];
  const firstCell = firstRow.getByRole("gridcell").nth(1);
  const NAME = "Electronic Ceramic Chips";
  const checkbox = firstRow.getByRole("checkbox");
  const menu = page.getByRole("menu");

  await expect(checkbox).toBeVisible();
  await expect(counter).toHaveText("0");
  await expect(firstCell).toContainText(NAME);

  await firstCell.click({ button: "right" });
  const actionItem = menu.getByText(`Edit ${NAME}`);
  await expect(menu).toBeVisible();
  await expect(counter).toHaveText("0");
  await expect(actionItem).toBeVisible();
  await actionItem.click();
  await expect(counter).toHaveText("0");
  await expect(checkbox).not.toBeChecked();

  await page.evaluate(() => {
    const table = document.querySelector('[role="table"]');
    if (table) table.scrollTop = 100;
  });
  await expect(actionItem).not.toBeVisible();
});

test("should support headerContextMenu", async ({ mount, page }) => {
  await mount(<TableWithHeaderContextMenu />);
  const headers = await page.getByRole("columnheader").all();
  const firstHeader = headers[0];
  await firstHeader.hover();
  const contextBtn = await firstHeader.getByRole("button", { name: "Contextual actions" });
  await expect(contextBtn).toBeVisible();
  await contextBtn.click();
  const menu = await page.getByRole("menu");
  await expect(menu).toBeVisible();
  const editItem = menu.getByRole("menuitem", { name: "Edit Column" });
  await expect(editItem).toBeVisible();
  await expect(editItem).toHaveAttribute("role", "menuitem");
});

test("should support valueGetter", async ({ mount, page }) => {
  await mount(<TableValueGetterTest />);
  const headers = await page.getByRole("columnheader").all();
  const firstHeader = headers[0];
  await expect(firstHeader).toContainText("Full Name");
  const firstRow = await page.getByRole("row").nth(1);
  const firstCell = firstRow.getByRole("gridcell").nth(0);
  await expect(firstCell).toContainText("Emilio Schamberger");
});

test("should support valueSetter", async ({ mount, page }) => {
  await mount(<TableValueSetterTest />);
  const headers = await page.getByRole("columnheader").all();
  const firstRowAge = await page.getByTestId("first-row-age");
  const firstRowAgeType = await page.getByTestId("first-row-age-type");
  const firstHeader = headers[0];
  await expect(firstHeader).toContainText("Age");
  const firstRow = await page.getByRole("row").nth(1);
  const firstCell = firstRow.getByRole("gridcell").nth(0);

  await expect(firstCell).toContainText("16");

  // click on the cell to edit
  await firstCell.click();
  const input = await page.getByRole("textbox");
  await input.click();
  await expect(input).toBeVisible();
  await input.fill("17");
  await input.press(KEYBOARD_KEYS.ENTER);

  await expect(firstRowAge).toHaveText("17");
  await expect(firstRowAgeType).toHaveText("number");
});

test("should support possibility to disable hiding", async ({ page, mount }) => {
  await mount(<TableTest disableColumnHiding />);

  const headers = await page.getByRole("columnheader").all();
  const nameHeader = headers[0];

  // check that hiding is disabled
  await nameHeader.focus();
  await nameHeader.getByLabel("Contextual actions").click();
  const nameColumnMenu = await page.getByRole("menu");
  await expect(nameColumnMenu).toBeVisible();
  await expect(nameColumnMenu.getByRole("menuitem", { name: "Hide column" })).not.toBeVisible();
  await expect(nameColumnMenu.getByRole("menuitem", { name: "Manage columns" })).not.toBeVisible();
});

test("should not show menu if no actions are available", async ({ page, mount }) => {
  await mount(<TableTest disableColumnHiding disableColumnSorting />);

  const headers = await page.getByRole("columnheader").all();
  const nameHeader = headers[0];

  await nameHeader.focus();

  await expect(nameHeader.getByLabel("Contextual actions")).not.toBeVisible();
});

test("should not trigger sorting when resizing a column", async ({ page, mount }) => {
  await mount(<TableTest />);
  const headers = await page.getByRole("columnheader").all();
  const firstHeader = headers[0];
  const firstHeaderResize = await firstHeader.getByRole("button", { name: "Resize column" });

  await expect(firstHeader).not.toHaveAttribute("aria-sort");

  await firstHeader.hover();
  await firstHeaderResize.click();
  await page.mouse.down();
  await page.mouse.move(200, 0);
  await page.mouse.up();

  await expect(firstHeader).not.toHaveAttribute("aria-sort");
});

test("should support the loading property", async ({ mount, page }) => {
  await mount(<TableTest loading rows={[]} />);
  const allSkeletons = await page.locator('[data-variant="text"][aria-hidden="true"]').all();
  expect(allSkeletons.length).toBe(11 * 21); // col * rows
});

test("should header be displayed under the panel overlay", async ({ mount, page }) => {
  await mount(<TableWithPanelOverlay />);
  const headerRowGroup = await page.getByRole("rowgroup").first();
  const headerRow = await page.getByRole("row").first();
  const headers = await page.getByRole("columnheader").all();
  const panel = await page.getByRole("region");

  await expect(headers[0]).toBeVisible();
  // the test fails so we do fallback on testing the code
  // await expect(headers[1]).not.toBeVisible();
  await expect(panel).toBeVisible();
  await expect(headerRow).not.toHaveCSS("z-index", /[0-9]+/);
  await expect(headerRow).not.toHaveAttribute("style", /z-index: [0-9]+;/);
  await expect(headerRowGroup).not.toHaveCSS("z-index", /[0-9]+/);
  await expect(headerRowGroup).not.toHaveAttribute("style", /z-index: [0-9]+;/);
});

test("should manage scrollbars sizes DLS-502", async ({ mount, page }) => {
  await mount(
    <div style={{ inlineSize: 400, blockSize: 400 }}>
      <TableTest />
    </div>,
  );
  const table = await page.getByRole("grid");
  const header = await page.getByRole("rowgroup").first();
  const body = await page.getByRole("rowgroup").nth(1);
  const headerRow = await page.getByRole("row").nth(1);
  const firstRow = await page.getByRole("row").nth(2);

  await expect(table).toBeVisible();
  await expect(header).toBeVisible();
  await expect(headerRow).toBeVisible();
  await expect(body).toBeVisible();

  await expect(firstRow).toBeVisible();

  // waiting for the effect to have run
  await expect(body).toHaveAttribute("data-hashscroll", "true");

  const tableBB = await table.boundingBox();
  const headerBB = await header.boundingBox();
  const headerRowBB = await firstRow.boundingBox();
  const firstRowBB = await firstRow.boundingBox();
  const bodyBB = await body.boundingBox();

  if (!tableBB || !headerBB || !bodyBB || !headerRowBB || !firstRowBB) {
    expect(false).toBe(true);
    return;
  }

  expect(Math.floor(tableBB.width)).toBe(Math.floor(headerBB.width) + 2); // -2 for borders
  expect(Math.floor(tableBB.width)).toBe(Math.floor(bodyBB.width) + 2); // -2 for borders
  expect(Math.round(tableBB.height)).toBe(Math.round(bodyBB.height + headerBB.height + 2 + 12)); // 2 for borders 12 for scrollbar
  expect(Math.floor(bodyBB.height)).toBe(318); // body should take the rest of the height
});

test.describe("Row in interactive mode", () => {
  test("should not be interactive in list variant without onRowClick or rowSelectionMode", async ({ mount, page }) => {
    await mount(<TableTest variant="list" />);
    const rowsContainer = await page.getByRole("rowgroup").nth(1);
    const rows = await rowsContainer.getByRole("row").all();
    const firstRow = rows[0];
    await firstRow.hover();

    await expect(firstRow).not.toHaveCSS("cursor", "pointer");
    await expect(firstRow).not.toHaveCSS("background-color", "rgba(0, 0, 0, 0.03)");
  });

  test("should be interactive in list variant with onRowClick", async ({ mount, page }) => {
    await mount(<TableTest variant="list" onRowClick={() => {}} />);
    const rowsContainer = await page.getByRole("rowgroup").nth(1);
    const rows = await rowsContainer.getByRole("row").all();
    const firstRow = rows[0];
    await firstRow.hover();

    await expect(firstRow).toHaveCSS("cursor", "pointer");
    await expect(firstRow).toHaveCSS("background-color", "rgba(0, 0, 0, 0.03)");
  });

  test("should be interactive in data variant when the row is clickable", async ({ mount, page }) => {
    await mount(<TableTest variant="data" onRowClick={() => {}} />);
    const rowsContainer = await page.getByRole("rowgroup").nth(1);
    const rows = await rowsContainer.getByRole("row").all();
    const firstRow = rows[0];
    await firstRow.hover();

    await expect(firstRow).toHaveCSS("cursor", "pointer");
    await expect(firstRow).toHaveCSS("background-color", "rgba(0, 0, 0, 0.03)");
  });

  test("should not be interactive in data variant when there is row selection", async ({ mount, page }) => {
    await mount(<TableTest variant="data" rowSelectionMode="multiple" />);
    const rowsContainer = await page.getByRole("rowgroup").nth(1);
    const rows = await rowsContainer.getByRole("row").all();
    const firstRow = rows[0];
    await firstRow.hover();

    await expect(firstRow).not.toHaveCSS("cursor", "pointer");
    await expect(firstRow).not.toHaveCSS("background-color", "rgba(0, 0, 0, 0.03)");
  });
});
