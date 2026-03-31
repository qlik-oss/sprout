import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,l as r,n as i,s as a}from"./iframe-B0xl5hqz.js";import{t as o}from"./mdx-react-shim-C5WuC5zb.js";import{t as s}from"./DataTable.stories-BafCGHBW.js";import{RenderCell as c,t as l}from"./ListTable.stories-yabvCW8q.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{title:`table/Columns/column definition`}),`
`,(0,f.jsx)(n.h1,{id:`columns`,children:`Columns`}),`
`,(0,f.jsxs)(n.p,{children:[`Columns are the building blocks of the DataTable and ListTable components. They define how data is displayed in each row.
The columns are defined with the `,(0,f.jsx)(n.code,{children:`columns`}),` prop, which is an array of objects. Each object represents a column.`]}),`
`,(0,f.jsx)(n.h2,{id:`id`,children:`id`}),`
`,(0,f.jsx)(n.p,{children:`This property is used internally to identify the column. It is optional, and if not provided, the field will be used for it.
If none of them is provided an error will be thrown.`}),`
`,(0,f.jsx)(n.h2,{id:`field`,children:`field`}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`field`}),` property accept a string as a key to the data object. It is used to define the data that will be displayed in the column.`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { type ColumnDef } from "@qlik/sprout-react-table";

type ContentType = {
  name: string;
  description: string;
};

const columns: ColumnDef<ContentType>[] = [
  { field: "name" },
  { field: "description" },
];
`})}),`
`,(0,f.jsx)(n.h2,{id:`valuegetter`,children:`valueGetter`}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`valueGetter`}),` property is an alternative to the `,(0,f.jsx)(n.code,{children:`field`}),` property. It is a function that takes a row object and returns the value to be displayed in the column.`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { type ColumnDef } from "@qlik/sprout-react-table";

type ContentType = {
  firstName: string;
  lastName: string;
};

const columns: ColumnDef<ContentType>[] = [
  {
    headerName: "Full name",
    valueGetter: (row) => \`\${row.firstName} \${row.lastName}\`,
  },
];
`})}),`
`,(0,f.jsx)(n.p,{children:`That API is drop and forget you should never have to use it directly just provide it.`}),`
`,(0,f.jsx)(n.h2,{id:`valuesetter`,children:`valueSetter`}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`valueSetter`}),` property is used to define a function that will be useful in the context of editing.
You will receive the row object along the column definition and will need to create a new value.`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { type ColumnDef } from "@qlik/sprout-react-table";

type ContentType = {
  address: {
    street: string;
    city: string;
    country: string;
  };
};

const columns: ColumnDef<ContentType>[] = [
  {
    id: "address.street",
    headerName: "Street",
    valueGetter: (row) => row.address.street,
    valueSetter: (row, value) => {
      return { ...row, address: { ...row.address, street: value } };
    },
    //...
  },
];
`})}),`
`,(0,f.jsxs)(n.p,{children:[`Once you are more confortable with renderCell you can start reading a more advanced use case to discover how to use renderCell with `,(0,f.jsx)(n.code,{children:`valueSetter`}),` in the `,(0,f.jsx)(n.a,{href:`?path=/docs/docs-editing-inlineedit--docs`,children:`InlineEditing`}),` example.`]}),`
`,(0,f.jsx)(n.h2,{id:`headername-required`,children:`headerName (required)`}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`headerName`}),` property is used to define the header text for the column. It is optional, and if not provided, the field name will be used as the header.`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`const columns: ColumnDef<ContentType>[] = [
  { field: "name", headerName: "Product Name" },
  { field: "description", headerName: "Description" },
];
`})}),`
`,(0,f.jsx)(n.h2,{id:`headercontextmenu`,children:`headerContextMenu`}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`headerContextMenu`}),` property is used to define the context menu for the column header. It is optional, and if not provided, no context menu will be displayed.`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`const columns: ColumnDef<ContentType>[] = [
  {
    field: "name",
    headerName: "Product Name",
    headerContextMenu: () => (
      <>
        <Menu.Item icon={<EditIcon />} label="Edit column" onClick={() => {}} />
        <Menu.Item
          icon={<TrashIcon />}
          label="Delete column"
          onClick={() => {}}
        />
      </>
    ),
  },
];
`})}),`
`,(0,f.jsx)(n.h2,{id:`width--minwidth--maxwidth--flex`,children:`width / minWidth / maxWidth / flex`}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`minWidth`}),` and `,(0,f.jsx)(n.code,{children:`maxWidth`}),` properties are used to define the minimum and maximum width of the column in pixels. They are optional.`]}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`width`}),` property is used to define the initial width of the column as by default it can be changed by the user using the resizing feature. If not provided the default width will be `,(0,f.jsx)(n.code,{children:`150`}),`.`]}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`flex`}),` property is used to define the flex ratio of the column. It is optional, and if not provided, the column will not be flexible. If a column has a `,(0,f.jsx)(n.code,{children:`flex`}),` property, it will take the remaining space in the table after all other columns have been sized.
This property is used only once at the initial render of the table, and it is not recalculated on resize.`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`const columns: ColumnDef<ContentType>[] = [
  { field: "name", headerName: "Product Name", flex: 1 },
  {
    field: "description",
    headerName: "Description",
    minWidth: 300,
    maxWidth: 500,
    width: 400,
  },
];
`})}),`
`,(0,f.jsx)(n.h2,{id:`resizable`,children:`resizable`}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`resizable`}),` property is used to define whether the resizing should be enabled on a column. It is optional, and if not provided, the resizing will be enabled by default.
Note that it is possible to disable resizing for all columns by passing `,(0,f.jsx)(n.code,{children:`disableColumnResize=true`}),` as Table prop`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`const columns: ColumnDef<ContentType>[] = [
  { field: "name", headerName: "Product Name", width: 200 },
  {
    field: "description",
    headerName: "Description",
    width: 300,
    resizable: false,
  },
];
`})}),`
`,(0,f.jsx)(n.h2,{id:`sortable`,children:`sortable`}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`sortable`}),` property is used to define whether the sorting should be enabled on a column. It is optional, and if not provided, the sorting will be enabled
by default.
Note that it is possible to disable sorting for all columns by passing `,(0,f.jsx)(n.code,{children:`disableColumnSorting=true`}),` as Table prop`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`const columns: ColumnDef<ContentType>[] = [
  { field: "name", headerName: "Product Name", width: 200, sortable: false },
  {
    field: "description",
    headerName: "Description",
    width: 300,
    sortable: false,
  },
];
`})}),`
`,(0,f.jsx)(n.h2,{id:`hideable`,children:`hideable`}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`hideable`}),` property is used to define whether the hide option should be available on a column. It is optional, and if not provided, the hide option will be enabled
by default.`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`const columns: ColumnDef<ContentType>[] = [
  { field: "name", headerName: "Product Name", width: 200, hideable: false },
  {
    field: "description",
    headerName: "Description",
    width: 300,
    hideable: false,
  },
];
`})}),`
`,(0,f.jsxs)(n.p,{children:[`Note that it is possible to disable sorting for all columns by passing `,(0,f.jsx)(n.code,{children:`disableColumnHiding=true`}),` as Table prop`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-react-table";

return <Table rows={rows} columns={columns} disableColumnHiding />;
`})}),`
`,(0,f.jsx)(n.h2,{id:`status-icon`,children:`status icon`}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`statusIcon`}),` property is used to add a status icon to the left of the column name. Use this for conveying statuses that are true across the entire column, like errors or warnings.`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`const columns: ColumnDef<ContentType>[] = [
  { field: "name", headerName: "Product Name", width: 200, sortable: false },
  {
    field: "description",
    headerName: "Description",
    width: 300,
    statusIcon: <Warning />,
  },
];
`})}),`
`,(0,f.jsx)(n.h2,{id:`rendercell`,children:`renderCell`}),`
`,(0,f.jsx)(n.p,{children:`It is an API that is part of the column definition.`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-ts`,children:`import { type ColumnDef, type TableCellParams } from "@qlik/sprout-react-table";

export const entityRenderCell: ColumnDef<ContentType>[] = [
  {
    field: "name",
    headerName: "Name",
    width: 300,
    renderCell: ({ row, colDef, value }: TableCellParams<ContentType>) => {
      return (
        <div className={classNames("flex", "col", "px_m")}>
          <div className={classNames("font_label_s", "text_default")}>{row.name}</div>
          <div className={classNames("font_label_xs", "text_weak")}>
            {row.type} - {row.modifiedBy}
          </div>
        </div>
      );
    },
  },
  {
    field: "space",
    headerName: "Space"
  },
];

`})}),`
`,(0,f.jsx)(i,{of:c})]})}function d(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=n(),o(),r(),s(),l()}))();export{d as default};