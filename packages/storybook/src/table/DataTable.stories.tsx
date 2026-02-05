/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unstable-nested-components */

import { EditIcon, MapIcon } from "@qlik/sprout-icons/react";
import Warning from "@qlik/sprout-icons/react/Warning";
import { Button, classNames, InlineEdit, Menu, Message, Select, TextField } from "@qlik/sprout-react";
import type { StoryObj } from "@storybook/react-vite";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { Table, TableInlineEdit, type ColumnDef, type SortingState, type TableProps } from "@qlik/sprout-table";
import { entityAllFields, makeEntity, type Entity } from "./examples/entity";
import { makePerson, personColDef, type Person } from "./examples/person";
import {
  ColumnSelectionArgTypes,
  ColumnSizingArgTypes,
  DataTableRownumberArgTypes,
  hideArg,
  HideArgTypes,
  RowSelectionArgTypes,
  RowTogglingArgTypes,
  SortArgTypes,
  TableArgTypes,
} from "./TanstackTable.argTypes";

const JOB_AREAS = makePerson(1000).reduce<Array<string>>((acc, person) => {
  if (!acc.includes(person.jobArea)) {
    acc.push(person.jobArea);
  }
  return acc;
}, []);

const JOB_AREAS_OPTIONS = JOB_AREAS.map((area) => (
  <Select.Option key={area} value={area}>
    {area}
  </Select.Option>
));

export default {
  title: "Table/Data",
};

function EmptyIllustration() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="100" fill="none" viewBox="0 0 160 100">
      <g>
        <path
          stroke="var(--sprout-illustration-color-palette-0, #595959)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M25.223 14.688 9 39.528l57.033 22.306 16.983-27.882-57.793-19.264Z"
        />
        <path
          stroke="var(--sprout-illustration-color-palette-0, #595959)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M131 18 83 33.97l17.744 29.403 49.681-21.74L131 18ZM130.417 17.73 73.384 1 25.223 14.688M73.384 1v29.718"
        />
        <path
          stroke="var(--sprout-illustration-color-palette-0, #595959)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M25.223 45.875V72.99l57.793 26.107V33.953M83.017 99.097l49.681-24.841V49.723"
        />
        <path
          stroke="var(--sprout-illustration-color-palette-2, #009844)"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m41.91 62.725 19.502 8.08V64.53l-19.501-7.67v5.866Z"
        />
      </g>
    </svg>
  );
}

export const Playground: StoryObj<TableProps<Person>> = {
  name: "Playground",
  render: (props: TableProps<Person>) => {
    const defaultSorting: SortingState = [
      {
        id: "lastName",
        desc: true,
      },
    ];

    return (
      <div className={classNames("w-full", "p-xl", "border_box")} style={{ blockSize: 400 }}>
        <Table {...props} defaultSorting={defaultSorting} />
      </div>
    );
  },
  args: {
    variant: "data",
    displayRowNumberColumn: true,
    rowSelectionMode: "multiple",
    rows: makePerson(100),
    columns: personColDef,
  },
  argTypes: {
    ...TableArgTypes,
    ...DataTableRownumberArgTypes,
    ...RowSelectionArgTypes,
    ...RowTogglingArgTypes,
    ...SortArgTypes,
    ...HideArgTypes,
    ...ColumnSelectionArgTypes,
    ...ColumnSizingArgTypes,
    variant: hideArg,
    rows: hideArg,
    columns: hideArg,
  },
};

export const RowHeight: StoryObj<TableProps<Person>> = {
  name: "rowHeight",
  render: (props: TableProps<Person>) => {
    return (
      <div className={classNames("w-full", "p-xl", "border_box")} style={{ blockSize: 400 }}>
        <Table {...props} />
      </div>
    );
  },
  args: {
    variant: "data",
    rowHeight: 48,
    rows: makePerson(10) as Array<Person>,
    columns: personColDef,
  },
  argTypes: {
    variant: hideArg,
    rows: hideArg,
    columns: hideArg,
  },
};

export const NoRows: StoryObj<TableProps<Entity>> = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (props: TableProps<Entity>) => {
    return (
      <div className={classNames("w-full", "p-xl", "border_box")} style={{ blockSize: 400 }}>
        <Table {...props} />
      </div>
    );
  },

  args: {
    variant: "data",
    displayRowNumberColumn: false,
    rowSelectionMode: "multiple",
    rows: [], // No rows to display
    columns: entityAllFields,
  },
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
    columns: {
      table: {
        disable: true,
      },
    },
  },
};

export const NoRowsOverlay: StoryObj<TableProps<Entity>> = {
  name: "noRowsOverlay",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (props: TableProps<Entity>) => {
    return (
      <div className={classNames("w-full", "p-xl", "border_box")} style={{ blockSize: 400 }}>
        <Table {...props} />
      </div>
    );
  },
  args: {
    variant: "data",
    displayRowNumberColumn: false,
    rowSelectionMode: "multiple",
    rows: [], // No rows to display
    columns: entityAllFields,
    noRowsOverlay: () => (
      <Message
        title="Empty table reason"
        message="Description of why table is empty, replace illustration with best fit"
        illustration={<EmptyIllustration />}
      />
    ),
  },
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
    columns: {
      table: {
        disable: true,
      },
    },
  },
};

export const RowsCrud: StoryObj<TableProps<Person>> = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (props: TableProps<Person>) => {
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    const [rows, setRows] = useState<Array<Person>>(props.rows as Array<Person>);
    const [queryFilter, setQueryFilter] = useState<string>("");

    useEffect(() => {
      setRows(props.rows as Array<Person>);
    }, [props.rows]);

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
                  jobArea: JOB_AREAS[Math.floor(Math.random() * JOB_AREAS.length)],
                  jobDescriptor: "Chief",
                  jobType: "Administrator",
                  jobTitle: "Ingeneering Manager",
                };
                setRows((prevRows) => [newRow, ...prevRows]);
              }}
            />
            <Button
              variant="secondary"
              label="Delete Selected Row"
              onClick={() => {
                setRows((prevRows) => prevRows.filter((row) => !selected[row.uuid]));
                setSelected({});
              }}
            />
          </div>
        </div>

        <Table
          {...props}
          rows={filteredRows}
          getRowId={(row) => row.uuid}
          onRowSelectionChange={setSelected}
          rowSelection={selected}
        />
      </div>
    );
  },
  args: {
    variant: "data",
    displayRowNumberColumn: false,
    rowSelectionMode: "multiple",
    rows: makePerson(30) as Array<Person>,
    columns: personColDef,
  },
};

type CustomContextType = {
  onRowChange: (row: Person) => void;
  isForm?: (row: Person) => boolean;
};

const customContext = createContext<CustomContextType>({ onRowChange: () => {}, isForm: () => true });
const useTablePerson = (data: Array<Person>) => {
  const [rows, setRows] = useState<Array<Person>>(data);
  useEffect(() => {
    setRows(data);
  }, [data]);
  const onRowChange = (row: Person) => {
    const updatedRows = (myrows: Array<Person>) =>
      myrows.map((r) => {
        if (r.uuid === row.uuid) {
          return { ...row };
        }
        return r;
      });
    setRows(updatedRows);
  };
  return { rows, onRowChange };
};
export const Form: StoryObj<TableProps<Person>> = {
  tags: ["!dev"], // hide it for now, the spec and the code are not ready for that
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (props: TableProps<Person>) => {
    const { rows, onRowChange } = useTablePerson(props.rows as Array<Person>);
    return (
      <customContext.Provider value={{ onRowChange }}>
        <div className={classNames("flex", "flex-col", "border_box", "size-full", "gap-xl", "pr-m")}>
          <form className={classNames("w-full", "border_box")} style={{ blockSize: 400 }}>
            <Table {...props} rows={rows} getRowId={(row) => row.uuid} />
          </form>
          <pre
            className={classNames("flex", "overflow-hidden", "bg-inverse", "text-inverse", "p-xl", "overflow-auto")}
            style={{ blockSize: 250 }}
          >
            {JSON.stringify(rows, null, 2)}
          </pre>
        </div>
      </customContext.Provider>
    );
  },
  args: {
    variant: "data",
    rows: makePerson(30) as Array<Person>,
    rowHeight: 38,
    columns: [
      {
        field: "firstName",
        headerName: "First Name",
        renderCell: ({ row, colDef }) => {
          const context = useContext(customContext);
          return (
            <div className={classNames("flex", "p-xs", "w-full")}>
              <TextField
                name={`${row.uuid}.${colDef.field}`}
                defaultValue={row.firstName}
                aria-label={colDef.headerName}
                onBlur={(e) => {
                  context.onRowChange({ ...row, firstName: e.target.value });
                }}
              />
            </div>
          );
        },
      },
      {
        field: "lastName",
        headerName: "Last Name",
        renderCell: ({ row, colDef }) => {
          const context = useContext(customContext);
          return (
            <div className={classNames("flex", "p-xs", "w-full")}>
              <TextField
                name={`${row.uuid}.${colDef.field}`}
                defaultValue={row.lastName}
                aria-label={colDef.headerName}
                onBlur={(e) => {
                  context.onRowChange({ ...row, lastName: e.target.value });
                }}
              />
            </div>
          );
        },
      },
      {
        field: "age",
        headerName: "Age",
        width: 50,
        renderCell: ({ row, colDef }) => {
          const context = useContext(customContext);
          return (
            <div className={classNames("flex", "p-xs")}>
              <TextField
                type="number"
                name={`${row.uuid}.${colDef.field}`}
                defaultValue={row.age}
                aria-label={colDef.headerName}
                onBlur={(e) => {
                  context.onRowChange({ ...row, age: parseInt(e.target.value, 10) });
                }}
              />
            </div>
          );
        },
      },
      {
        field: "jobArea",
        headerName: "Job Area",
        renderCell: ({ row, colDef }) => {
          const context = useContext(customContext);
          return (
            <div className={classNames("flex", "p-xs", "w-full")}>
              <Select.Select
                name={`${row.uuid}.${colDef.field}`}
                defaultValue={row.jobArea}
                aria-label={colDef.headerName}
                onChange={(e) => {
                  context.onRowChange({ ...row, jobArea: e.target.value || "" });
                }}
              >
                {JOB_AREAS_OPTIONS}
              </Select.Select>
            </div>
          );
        },
      },
    ],
  },
};

export const HeaderContextMenu: StoryObj<TableProps<Person>> = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (props: TableProps<Person>) => {
    return (
      <div className={classNames("w-full", "p-xl", "border_box")} style={{ blockSize: 400 }}>
        <Table {...props} />
      </div>
    );
  },
  args: {
    variant: "data",
    displayRowNumberColumn: false,
    rowSelectionMode: "multiple",
    rows: makePerson(30) as Array<Person>,
    columns: [
      ...personColDef.map((col) => {
        return {
          ...col,
          headerContextMenu: () => (
            <>
              <Menu.Item
                icon={<EditIcon />}
                label="Edit"
                onClick={() => {
                  // Handle edit job area
                }}
              />
              <Menu.Item
                icon={<MapIcon />}
                label="Map it"
                onClick={() => {
                  // Handle delete job area
                }}
              />
            </>
          ),
        };
      }),
    ],
  },
  argTypes: {
    ...DataTableRownumberArgTypes,
    ...RowSelectionArgTypes,
    ...SortArgTypes,
    ...HideArgTypes,
  },
};

const TableInlineEditContext = TableInlineEdit.createContext<Person>();
const InlineEditString = TableInlineEdit.getEditString<Person>(TableInlineEditContext);

function InlineEditNumber({ row, colDef }: { row: Person; colDef: ColumnDef<Person> }) {
  const context = useContext(TableInlineEditContext);

  const field = colDef.field as keyof Person;
  const [state, setState] = useState<number>(row[field] as number);

  useEffect(() => {
    setState(row[field] as number);
  }, [field, row]);
  const view = useMemo(() => {
    function View() {
      return <span className={classNames("text-default", "font-label-s")}>{state}</span>;
    }
    View.displayName = "InlineEditNumber.View";
    return View;
  }, [state]);
  const edit = useMemo(() => {
    function Edit() {
      return (
        <TextField
          value={state}
          type="number"
          onChange={(e) => {
            setState(parseInt(e.target.value, 10));
          }}
        />
      );
    }
    Edit.displayName = "InlineEditNumber.Edit";
    return Edit;
  }, [state, setState]);

  return (
    <div className={classNames("px-s", "border_box", "w-full", "relative")}>
      <InlineEdit.Primitive
        view={view}
        edit={edit}
        onCancel={() => {
          setState(row[field] as number);
        }}
        onSave={() => {
          context.onRowChange({ ...row, [field]: state });
        }}
      />
    </div>
  );
}

export const InlineEditTable: StoryObj<TableProps<Person>> = {
  name: "InlineEdit in Table",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: ({ rows: initialRows, ...props }: TableProps<Person>) => {
    const [rows, setRows] = useState<Array<Person>>(initialRows as Array<Person>);
    const onRowChange = useCallback(
      (row: Person) => {
        setRows((prevRows) => prevRows.map((r) => (r.uuid === row.uuid ? { ...r, ...row } : r)));
      },
      [setRows],
    );
    return (
      <TableInlineEditContext.Provider
        value={{
          onRowChange,
        }}
      >
        <div className={classNames("w-full", "p-xl", "border_box")} style={{ blockSize: 300 }}>
          <Table {...props} rows={rows} getRowId={(row) => row.uuid} />
        </div>
      </TableInlineEditContext.Provider>
    );
  },
  args: {
    variant: "data",
    rows: makePerson(30) as Array<Person>,
    columns: [
      {
        field: "firstName",
        headerName: "First Name",
        renderCell: (props) => {
          return <InlineEditString {...props} />;
        },
      },
      {
        field: "lastName",
        headerName: "Last Name",
        renderCell: (props) => {
          return <InlineEditString {...props} />;
        },
      },
      {
        field: "age",
        headerName: "Age",
        renderCell: (props) => {
          return <InlineEditNumber {...props} />;
        },
      },
      {
        field: "visits",
        headerName: "Visits",
        renderCell: (props) => {
          return <InlineEditNumber {...props} />;
        },
      },
      {
        field: "status",
        headerName: "Status",
        renderCell: (props) => {
          return (
            <InlineEditString variant="Select" {...props}>
              <Select.Option value="single">Single</Select.Option>
              <Select.Option value="married">Married</Select.Option>
              <Select.Option value="complicated">It s complicated</Select.Option>
              <Select.Option value="relationship">In a relationship</Select.Option>
            </InlineEditString>
          );
        },
      },
      {
        field: "veryLongContent",
        headerName: "Very Long Content",
        renderCell: (props) => {
          return <InlineEditString {...props} />;
        },
      },
      {
        field: "jobArea",
        headerName: "Job Area",
        renderCell: (props) => {
          return <InlineEditString {...props} />;
        },
      },
      {
        field: "jobDescriptor",
        headerName: "Job descriptor",
        renderCell: (props) => {
          return <InlineEditString {...props} />;
        },
      },
      {
        field: "jobTitle",
        headerName: "Job Title",
        renderCell: (props) => {
          return <InlineEditString {...props} />;
        },
      },
      {
        field: "jobType",
        headerName: "Job Type",
        renderCell: (props) => {
          return (
            <InlineEditString variant="Select" {...props}>
              <Select.Option value="Administrator">Administrator</Select.Option>
              <Select.Option value="Agent">Agent</Select.Option>
              <Select.Option value="Analyst">Analyst</Select.Option>
              <Select.Option value="Architect">Architect</Select.Option>
              <Select.Option value="Assistant">Assistant</Select.Option>
              <Select.Option value="Designer">Designer</Select.Option>
              <Select.Option value="Developer">Developer</Select.Option>
              <Select.Option value="Executive">Executive</Select.Option>
              <Select.Option value="Facilitator">Facilitator</Select.Option>
              <Select.Option value="Manager">Manager</Select.Option>
              <Select.Option value="Other">Other</Select.Option>
            </InlineEditString>
          );
        },
      },
    ],
  },
};

export const ValueGetter: StoryObj<TableProps<Person>> = {
  name: "valueGetter",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (props: TableProps<Person>) => {
    return (
      <div className={classNames("w-full", "p-xl", "border_box")} style={{ blockSize: 400 }}>
        <Table {...props} />
      </div>
    );
  },
  args: {
    variant: "data",
    rows: makePerson(30) as Array<Person>,
    columns: [
      {
        id: "fullname",
        headerName: "Full Name",
        valueGetter: (row) => `${row.firstName} ${row.lastName}`,
      },
    ],
  },
};

export const StatusIconColumn: StoryObj<TableProps<Person>> = {
  name: "statusIcon in Column",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (props: TableProps<Person>) => {
    return (
      <div className={classNames("w-full", "p-xl", "border_box")} style={{ blockSize: 400 }}>
        <Table {...props} />
      </div>
    );
  },
  args: {
    variant: "data",
    displayRowNumberColumn: false,
    rowSelectionMode: "multiple",
    rows: makePerson(20) as Array<Person>,
    columns: [
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
        flex: 1,
        statusIcon: <Warning />,
      },
      {
        field: "age",
        headerName: "Age",
        headerDescription: "Age",
        flex: 1,
      },
      {
        field: "visits",
        headerName: "Visits",
        headerDescription: "Number",
        flex: 1,
      },
    ],
  },
  argTypes: {
    ...DataTableRownumberArgTypes,
    ...RowSelectionArgTypes,
    ...SortArgTypes,
    ...HideArgTypes,
  },
};

export const FlexColumns: StoryObj<TableProps<Person>> = {
  name: "Flex columns",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (props: TableProps<Person>) => {
    return (
      <div className={classNames("flex", "grow-1", "border_box")}>
        <Table {...props} />
      </div>
    );
  },
  args: {
    variant: "data",
    displayRowNumberColumn: false,
    rowSelectionMode: "multiple",
    rows: makePerson(16) as Array<Person>,
    columns: [
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
        flex: 1,
        statusIcon: <Warning />,
      },
      {
        field: "age",
        headerName: "Age",
        headerDescription: "Age",
        flex: 1,
      },
      {
        field: "visits",
        headerName: "Visits",
        headerDescription: "Number",
        flex: 1,
      },
    ],
  },
  argTypes: {
    ...DataTableRownumberArgTypes,
    ...RowSelectionArgTypes,
    ...SortArgTypes,
    ...HideArgTypes,
  },
};

export const loading: StoryObj<TableProps<Entity>> = {
  name: "loading",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (props: TableProps<Entity>) => {
    return (
      <div className={classNames("flex", "grow-1", "border_box")} style={{ blockSize: 300 }}>
        <Table {...props} />
      </div>
    );
  },
  args: {
    variant: "data",
    loading: true,
    displayRowNumberColumn: true,
    rowSelectionMode: "multiple",
    columns: entityAllFields,
  },
  argTypes: {
    ...DataTableRownumberArgTypes,
    ...RowSelectionArgTypes,
    ...SortArgTypes,
    ...HideArgTypes,
  },
};

export const ColumnSelection: StoryObj<TableProps<Entity>> = {
  name: "columnSelection",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (
    props: Pick<
      TableProps<Entity>,
      | "columnSelectionMode"
      | "columnSelection"
      | "columnsSelection"
      | "defaultColumnSelection"
      | "defaultColumnsSelection"
    >,
  ) => {
    return (
      <div className={classNames("w-full", "p-xl", "border_box")} style={{ blockSize: 400 }}>
        <Table variant="data" rows={makeEntity(10)} columns={entityAllFields} {...props} />
      </div>
    );
  },
  argTypes: ColumnSelectionArgTypes,
  args: {
    columnSelectionMode: "multiple",
    defaultColumnSelection: "firstName",
    defaultColumnsSelection: ["lastName"],
  },
};

export const RowToggling: StoryObj<TableProps<Entity>> = {
  name: "Row toggling",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (props: Pick<TableProps<Entity>, "defaultToggledRowId" | "toggledRowId" | "onToggledRowChange">) => {
    return (
      <div className={classNames("w-full", "p-xl", "border_box")} style={{ blockSize: 400 }}>
        <Table variant="data" rows={makeEntity(10)} columns={entityAllFields} {...props} />
      </div>
    );
  },
  argTypes: {
    ...RowSelectionArgTypes,
    ...RowTogglingArgTypes,
    variant: hideArg,
    rows: hideArg,
    columns: hideArg,
  },
  args: {
    getRowId: (row) => row.id,
    defaultToggledRowId: "34b40266-50ef-469f-8d12-b33526fbe46e",
  },
};
