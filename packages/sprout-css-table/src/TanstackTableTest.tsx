import { Button, classNames, Menu, Panel, TextField } from "@qlik/sprout-css-react";
import { useCallback, useMemo, useState, type CSSProperties } from "react";
import { Table, TableInlineEdit, type ColumnDef, type TableProps } from ".";
import {
  entityAllFields,
  entityCustomSorting,
  entityDisabledColumnResizing,
  entityDisabledSorting,
  entityRenderCell,
  makeEntity,
  type Entity,
} from "./docs/examples/entity";
import { makePerson, personColDef, type Person } from "./docs/examples/person";
import type { ColumnSizingState, SortingState } from "./props";

const data = makePerson(20);

export function TableTest(props: Partial<TableProps<Person>>) {
  const initialSorting: SortingState = [
    {
      id: "lastName",
      desc: true,
    },
  ];
  const localData = useMemo<Array<Person>>(() => [...data], []);

  return <Table variant="data" rows={localData} columns={personColDef} defaultSorting={initialSorting} {...props} />;
}

export function TableSortingTest(props: Partial<TableProps<Entity>>) {
  return <Table variant="data" columns={entityDisabledSorting} rows={makeEntity(20) as Array<Entity>} {...props} />;
}

export function TableCustomSortingTest(props: Partial<TableProps<Entity>>) {
  const rows = [
    {
      id: "1",
      name: "charlie",
      type: "Application Qlik Sense",
      modified: "2025-01-01",
      modifiedBy: "Alice",
      space: "Automotive",
      createDate: new Date("2025-01-01").getTime(),
    },
    {
      id: "2",
      name: "alice",
      type: "Application Qlik Sense",
      modified: "2024-01-01",
      modifiedBy: "Bob",
      space: "Finance",
      createDate: new Date("2024-01-01").getTime(),
    },
    {
      id: "3",
      name: "Bob",
      type: "Application Qlik Sense",
      modified: "2026-01-01",
      modifiedBy: "Charlie",
      space: "Healthcare",
      createDate: new Date("2026-01-01").getTime(),
    },
  ];
  return <Table variant="data" columns={entityCustomSorting} rows={rows as Array<Entity>} {...props} />;
}

export function TableRenderCellTest() {
  return <Table rowHeight={48} variant="data" columns={entityRenderCell} rows={makeEntity(20) as Array<Entity>} />;
}

const noRowsOverlay = () => <div data-testid="foo">test no rows</div>;

export function TableNoRows() {
  return <Table variant="list" columns={personColDef} rows={[]} noRowsOverlay={noRowsOverlay} />;
}

export function UncontrolledRowSelectionTest() {
  return (
    <Table
      variant="data"
      columns={personColDef}
      rows={makePerson(20) as Array<Person>}
      rowSelectionMode="multiple"
      displayRowNumberColumn
    />
  );
}

export function ExternalRowSelectionTest() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const [rows, setRows] = useState<Array<Person>>(makePerson(20) as Array<Person>);
  const [queryFilter, setQueryFilter] = useState<string>("");

  // Intermediate function between table and state to simulate external management of row selection
  const handleRowSelection = useCallback((rowSelectionState: Record<string, boolean>) => {
    setSelected(rowSelectionState);
  }, []);

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      return (
        !queryFilter ||
        row.firstName.toLowerCase().includes(queryFilter.toLowerCase()) ||
        row.lastName.toLowerCase().includes(queryFilter.toLowerCase())
      );
    });
  }, [rows, queryFilter]);

  return (
    <div className={classNames("w-full", "p-xl", "border_box")} style={{ blockSize: 400 }}>
      <div className={classNames("flex", "flex-row", "w-full", "justify-between")}>
        <div className={classNames("flex", "flex-row", "justify-start", "mb-m")}>
          <TextField
            name="search"
            placeholder="Search..."
            aria-label="Search"
            value={queryFilter}
            onChange={(e) => {
              setQueryFilter(e.target.value);
            }}
          />
        </div>
        <div className={classNames("flex", "flex-row", "justify-end", "mb-m")}>
          <Button
            variant="primary"
            label="Add Row"
            onClick={() => {
              const newRow: Person = {
                uuid: `123-${rows.length + 1}`,
                visits: 0,
                status: "single",
                progress: Math.floor(Math.random() * 100),
                firstName: "New",
                lastName: "Person",
                age: 30,
                jobArea: "Engineering",
                jobDescriptor: "Chief",
                jobType: "Architect",
                jobTitle: "Ingeneering Manager",
              };
              setRows((prevRows) => [newRow, ...prevRows]);
            }}
          />
          <Button
            variant="secondary"
            label="Delete Selected Rows"
            onClick={() => {
              setRows((prevRows) => prevRows.filter((row) => !selected[row.uuid]));
              handleRowSelection({});
            }}
          />
        </div>
        <div>Number of selected rows : {Object.keys(selected).length}</div>
      </div>

      <Table
        variant="data"
        columns={personColDef}
        rows={filteredRows}
        getRowId={(row) => row.uuid}
        onRowSelectionChange={handleRowSelection}
        rowSelection={selected}
        rowSelectionMode="multiple"
      />
    </div>
  );
}

export function ControlledRowSelectionTest() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [rows, setRows] = useState<Array<Person>>(makePerson(20) as Array<Person>);
  const [queryFilter, setQueryFilter] = useState<string>("");

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      return (
        !queryFilter ||
        row.firstName.toLowerCase().includes(queryFilter.toLowerCase()) ||
        row.lastName.toLowerCase().includes(queryFilter.toLowerCase())
      );
    });
  }, [rows, queryFilter]);
  return (
    <div className={classNames("w-full", "p-xl", "border_box")} style={{ blockSize: 400 }}>
      <div className={classNames("flex", "flex-row", "w-full", "justify-between")}>
        <div className={classNames("flex", "flex-row", "justify-start", "mb-m")}>
          <TextField
            name="search"
            placeholder="Search..."
            aria-label="Search"
            value={queryFilter}
            onChange={(e) => {
              setQueryFilter(e.target.value);
            }}
          />
        </div>
        <div className={classNames("flex", "flex-row", "justify-end", "mb-m")}>
          <Button
            variant="primary"
            label="Add Row"
            onClick={() => {
              const newRow: Person = {
                uuid: `123-${rows.length + 1}`,
                visits: 0,
                status: "single",
                progress: Math.floor(Math.random() * 100),
                firstName: "New",
                lastName: "Person",
                age: 30,
                jobArea: "Engineering",
                jobDescriptor: "Chief",
                jobType: "Architect",
                jobTitle: "Ingeneering Manager",
              };
              setRows((prevRows) => [newRow, ...prevRows]);
            }}
          />
          <Button
            variant="secondary"
            label="Delete Selected Rows"
            onClick={() => {
              setRows((prevRows) => prevRows.filter((row) => !selected[row.uuid]));
              setSelected({});
            }}
          />
        </div>
      </div>

      <Table
        variant="data"
        columns={personColDef}
        rows={filteredRows}
        getRowId={(row) => row.uuid}
        onRowSelectionChange={setSelected}
        rowSelection={selected}
        rowSelectionMode="multiple"
      />
    </div>
  );
}

export function DisabledRowSelectionTest() {
  const isRowSelectable = useCallback((row: Person) => row.firstName !== "Trace", []);

  return (
    <Table
      variant="data"
      rows={makePerson(20)}
      columns={personColDef}
      rowSelectionMode="multiple"
      isRowSelectable={isRowSelectable}
      defaultSorting={[
        {
          id: "firstName",
          desc: true,
        },
      ]}
    />
  );
}

export function OnCellClickTest() {
  const rows = useMemo(() => makePerson(20) as Array<Person>, []);

  const [clickedCell, setClickedCell] = useState<Record<string, number>>({});
  return (
    <div>
      <ul style={{ blockSize: 200, overflowBlock: "auto" }} data-testid="clicked-cell-list">
        {Object.entries(clickedCell).map(([key, count]) => (
          <li key={key} data-testid={key}>
            {key}: {count}
          </li>
        ))}
      </ul>
      <Table
        variant="data"
        columns={personColDef}
        rows={rows}
        getRowId={(row) => row.uuid}
        onCellClick={(e, param) => {
          setClickedCell((prev) => ({
            ...prev,
            [`${param.row.uuid}-${param.value}`]: (prev[`${param.row.uuid}-${param.value}`] || 0) + 1,
          }));
        }}
      />
    </div>
  );
}

export function RowActionsTest() {
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={classNames("w-full", "p-xl", "border_box")}>
      <span data-testid="counter">{count}</span>
      <span data-testid="item-clicked">{isClicked ? "Clicked" : "Not clicked"}</span>

      <Table
        variant="list"
        rowSelectionMode="multiple"
        rows={makeEntity(10)}
        columns={entityRenderCell}
        // eslint-disable-next-line react/no-unstable-nested-components
        rowActions={(row) => (
          <Menu.Item
            onClick={() => {
              setIsClicked(true);
            }}
          >
            Edit {row.name}
          </Menu.Item>
        )}
        onRowClick={(e, row) => {
          setCount((prev) => prev + 1);
          if (row.space === "Automotive") {
            e.preventDefault();
          }
        }}
      />
    </div>
  );
}

export function TableWithHeaderContextMenu() {
  return (
    <Table
      variant="data"
      columns={personColDef.map((col) => ({
        ...col,
        // eslint-disable-next-line react/no-unstable-nested-components
        headerContextMenu: () => (
          <>
            <Menu.Item label="Edit Column" icon={<span>Edit</span>} onClick={() => {}} />
            <Menu.Item label="Delete Column" icon={<span>Delete</span>} onClick={() => {}} />
          </>
        ),
      }))}
      rows={makePerson(20) as Array<Person>}
    />
  );
}

export function TableValueGetterTest() {
  return (
    <Table
      height={200}
      variant="data"
      columns={[{ id: "fullName", headerName: "Full Name", valueGetter: (row) => `${row.firstName} ${row.lastName}` }]}
      rows={makePerson(20) as Array<Person>}
    />
  );
}

const TableInlineEditContext = TableInlineEdit.createContext<Person>();
const InlineEditString = TableInlineEdit.getEditString<Person>(TableInlineEditContext);

export function TableValueSetterTest() {
  const [rows, setRows] = useState<Array<Person>>(makePerson(20) as Array<Person>);
  const onRowChange = useCallback((row: Person) => {
    setRows((prevRows) => prevRows.map((r) => (r.uuid === row.uuid ? { ...r, ...row } : r)));
  }, []);
  const contextValue = useMemo(
    () => ({
      onRowChange,
    }),
    [onRowChange],
  );
  return (
    <div style={{ blockSize: 400 }}>
      <span data-testid="first-row-age">{rows[0].age}</span>
      <span data-testid="first-row-age-type">{typeof rows[0].age}</span>
      <TableInlineEditContext.Provider value={contextValue}>
        <Table
          variant="data"
          columns={[
            {
              id: "age",
              headerName: "Age",
              valueGetter: (row) => row.age.toString(),
              valueSetter: (row, value) => {
                return { ...row, age: parseInt(value as string, 10) };
              },
              renderCell: (props) => <InlineEditString {...props} />,
            },
          ]}
          rows={rows}
        />
      </TableInlineEditContext.Provider>
    </div>
  );
}

export function TableLoading() {
  return <Table variant="list" rows={[]} columns={entityAllFields} />;
}

const ENTITY_WITH_HIDDEN_FLEX_COLUMN: Array<ColumnDef<Entity>> = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "type", headerName: "Type", width: 200 },
  { field: "modified", headerName: "Modified", width: 300 },
  { field: "space", headerName: "Space", flex: 1 },
];

export function TableWithHiddenFlexColumn() {
  return (
    <div style={{ inlineSize: 800, blockSize: 400 }}>
      <Table
        variant="list"
        columns={ENTITY_WITH_HIDDEN_FLEX_COLUMN}
        rows={makeEntity(10) as Array<Entity>}
        defaultColumnVisibility={{ space: false }}
      />
    </div>
  );
}

export function TableFlexColumnSize({ totalWidth }: { totalWidth: CSSProperties["width"] }) {
  const columns: Array<ColumnDef<Person>> = [
    {
      field: "firstName",
      headerName: "First Name",
      headerDescription: "String",
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      headerDescription: "String",
      flex: 2,
    },
    {
      field: "age",
      headerName: "Age",
      headerDescription: "Age",
      width: 200,
    },
  ];

  return (
    <div id="component-testing" style={{ inlineSize: totalWidth, blockSize: 400 }}>
      <Table variant="data" rowHeight={48} rows={makePerson(10)} columns={columns} />
    </div>
  );
}

export function TableWithPanelOverlay() {
  return (
    <div style={{ inlineSize: "100vw", blockSize: "100vh" }}>
      <div className={classNames("flex", "flex-row", "w-3xl", "border-r-default")} style={{ blockSize: 400 }}>
        <div className={classNames("flex", "flex-row", "grow-1")}>
          <Panel.Container overlay>
            <div className={classNames("p-xl")}>
              <Table variant="list" columns={entityAllFields} rows={makeEntity(10) as Array<Entity>} />
            </div>
            <Panel.Right>
              <div className={classNames("w-m")}>Hello world</div>
            </Panel.Right>
          </Panel.Container>
        </div>
      </div>
    </div>
  );
}

export function ControlledColumnSizingTableTest({ disableColumnResize }: { disableColumnResize?: boolean }) {
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({ name: 300, type: 150, space: 150 });

  return (
    <div>
      <pre data-testid="column-sizing-state">{JSON.stringify(columnSizing)}</pre>
      <Table
        variant="data"
        rows={makeEntity(20)}
        columns={entityDisabledColumnResizing}
        columnSizing={columnSizing}
        onColumnSizingChange={setColumnSizing}
        disableColumnResize={disableColumnResize}
      />
    </div>
  );
}

export function ControlledRowToggling() {
  const [toggledRowId, setToggledRowId] = useState<string>("");

  return (
    <div>
      <pre data-testid="row-toggling-state">{String(toggledRowId)}</pre>
      <Table
        variant="data"
        getRowId={(row) => row.uuid}
        rows={makePerson(20)}
        columns={personColDef}
        toggledRowId={toggledRowId}
        onToggledRowChange={setToggledRowId}
      />
    </div>
  );
}
