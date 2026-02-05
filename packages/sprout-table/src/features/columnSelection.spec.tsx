import { expect, test } from "@playwright/experimental-ct-react";
import { TableColumnSelection } from "./columnSelectionTest";

test("should support columnSelection=single", async ({ mount }) => {
  const mounted = await mount(
    <TableColumnSelection
      columnSelectionMode="single"
      defaultSorting={[
        {
          id: "type",
          desc: true,
        },
      ]}
    />,
  );
  const state = await mounted.getByTestId("selection-state");
  const headers = await mounted.getByRole("columnheader").all();
  const firstHeader = headers[0];
  const secondHeader = headers[1];
  const firstRadio = firstHeader.getByRole("radio");
  const secondRadio = secondHeader.getByRole("radio");

  await expect(state).toBeEmpty(); // no column selected by default
  await expect(firstHeader).toContainText("Name");
  await expect(secondHeader).toContainText("Type");

  await expect(firstRadio).not.toBeChecked();
  await expect(secondRadio).not.toBeChecked();

  await expect(firstHeader).toHaveAttribute("aria-sort", "none");
  await expect(secondHeader).toHaveAttribute("aria-sort", "descending");

  await firstHeader.click();
  await expect(firstRadio).toBeChecked();
  await expect(state).toHaveText("name");
  // should not change the sorting
  await expect(firstHeader).toHaveAttribute("aria-sort", "none");
  await expect(secondRadio).not.toBeChecked();
  await expect(secondHeader).toHaveAttribute("aria-sort", "descending");

  // but if we click again it should change the sort order
  await firstHeader.click();
  await expect(state).toHaveText("name");
  await expect(firstRadio).toBeChecked();
  await expect(firstHeader).toHaveAttribute("aria-sort", "ascending");

  // click on the second header should unselect the first one
  await secondHeader.click();
  await expect(state).toHaveText("type");
  await expect(firstRadio).not.toBeChecked();
  await expect(secondRadio).toBeChecked();
  await expect(firstHeader).toHaveAttribute("aria-sort", "ascending");
  await expect(secondHeader).toHaveAttribute("aria-sort", "none");
});

test("should support columnSelection=multiple", async ({ mount }) => {
  const mounted = await mount(
    <TableColumnSelection
      columnSelectionMode="multiple"
      defaultSorting={[
        {
          id: "type",
          desc: true,
        },
      ]}
    />,
  );
  const state = await mounted.getByTestId("selections-state");
  const headers = await mounted.getByRole("columnheader").all();
  const firstHeader = headers[0];
  const secondHeader = headers[1];
  const firstCheckbox = firstHeader.getByRole("checkbox");
  const secondCheckbox = secondHeader.getByRole("checkbox");

  await expect(state).toHaveText("[]"); // no column selected by default
  await expect(firstHeader).toContainText("Name");
  await expect(secondHeader).toContainText("Type");

  await expect(firstCheckbox).not.toBeChecked();
  await expect(secondCheckbox).not.toBeChecked();

  await expect(firstHeader).toHaveAttribute("aria-sort", "none");
  await expect(secondHeader).toHaveAttribute("aria-sort", "descending");

  await firstHeader.click();
  await expect(state).toHaveText('["name"]');
  await expect(firstCheckbox).toBeChecked();
  // should not change the sorting
  await expect(firstHeader).toHaveAttribute("aria-sort", "none");
  await expect(secondCheckbox).not.toBeChecked();
  await expect(secondHeader).toHaveAttribute("aria-sort", "descending");

  // if we click again it should just uncheck the checkbox and not change the sort order
  await firstHeader.click();
  await expect(state).toHaveText("[]");
  await expect(firstCheckbox).not.toBeChecked();
  await expect(firstHeader).toHaveAttribute("aria-sort", "none");

  // now let's click on the second header
  await secondHeader.click();
  await expect(state).toHaveText('["type"]');
  await expect(secondCheckbox).toBeChecked();
  // it was already sorted and it's still sorted
  await expect(secondHeader).toHaveAttribute("aria-sort", "descending");

  await firstHeader.click();
  await expect(state).toHaveText('["type","name"]');
  await expect(firstCheckbox).toBeChecked();
  await expect(secondCheckbox).toBeChecked();
});
