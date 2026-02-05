import{j as e,M as r,a as s}from"./iframe-CYyT-rNd.js";import{useMDXComponents as o}from"./index-Dzbf35yC.js";import{RenderCell as l}from"./ListTable.stories-BPgTg3fI.js";import"./DataTable.stories-JKrH0SZI.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-DQ5rM_kH.js";import"./useI18n-B8acZ0ym.js";import"./Button-B_WU7ehq.js";import"./classNames-BmP9dLUE.js";import"./sprout-UDUY6uO8.js";import"./icons-BJP5nzPh.js";import"./Button.module-C2ELNEem.js";import"./Badge-M4fZ9aOR.js";import"./Tooltip-Bq8n5z5D.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-GWN5S5OT.js";import"./useId-BEfewr8x.js";import"./ProgressCircular-BThLXJeo.js";import"./SortDescending-CVAYxQhu.js";import"./IconButton-DQqeG5o4.js";import"./Menu-BJ4TKxRh.js";import"./useControl-CbxOYg9r.js";import"./Divider-DGcHtPQB.js";import"./list-B1zo5gaH.js";import"./NewTab-CSZjxaIu.js";import"./Skeleton-BcSpZhaC.js";import"./Checkbox-CEdksXS8.js";import"./useValueControl-DkREc4sR.js";import"./HelperText-PF_3nKgd.js";import"./InfoTooltipPrimitive-CcAfk6tw.js";import"./Info-kPGn8DpC.js";import"./List-CKMCLIEK.js";import"./useListGesture-BJWysAy8.js";import"./Popover-p0wTHRSq.js";import"./TextField-3so8vjFm.js";import"./Error-D7GnDcGx.js";import"./InputButton-CVMmk1vr.js";import"./useFieldProps-crQyhd-6.js";import"./useFieldAriaProps-O3JOrChf.js";import"./Field-WnapnPu6.js";import"./FieldLabel-B0tZljJj.js";import"./Radio-6dgqdk9y.js";import"./Message-1sVzd-4h.js";import"./ProgressBar-PgTOB488.js";import"./entity-BJaSSSwx.js";import"./Edit-C5Vhfo4K.js";import"./Map-BB3BkA5L.js";import"./Warning-BO-41SRA.js";import"./index-BKlOZwBU.js";import"./SelectComposition-Cc6wbRHo.js";import"./TagGroup-OrLiB7MT.js";import"./Tag-CPT8lZjs.js";import"./TextOverflow-CbGiWJni.js";import"./useHasOverflow-CqJCJVUE.js";import"./Add-DcwIOkn_.js";import"./Close-IBeLqb5W.js";import"./AlertInline-DZSszTFT.js";import"./SeverityIcon-B1bVDgD2.js";import"./FloatingWrapper-a0YhtIpN.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Table/Docs/Columns/column definition"}),`
`,e.jsx(n.h1,{id:"columns",children:"Columns"}),`
`,e.jsxs(n.p,{children:[`Columns are the building blocks of the DataTable and ListTable components. They define how data is displayed in each row.
The columns are defined with the `,e.jsx(n.code,{children:"columns"})," prop, which is an array of objects. Each object represents a column."]}),`
`,e.jsx(n.h2,{id:"id",children:"id"}),`
`,e.jsx(n.p,{children:`This property is used internally to identify the column. It is optional, and if not provided, the field will be used for it.
If none of them is provided an error will be thrown.`}),`
`,e.jsx(n.h2,{id:"field",children:"field"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"field"})," property accept a string as a key to the data object. It is used to define the data that will be displayed in the column."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { type ColumnDef } from "@qlik/sprout-table";

type ContentType = {
  name: string;
  description: string;
};

const columns: ColumnDef<ContentType>[] = [{ field: "name" }, { field: "description" }];
`})}),`
`,e.jsx(n.h2,{id:"valuegetter",children:"valueGetter"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"valueGetter"})," property is an alternative to the ",e.jsx(n.code,{children:"field"})," property. It is a function that takes a row object and returns the value to be displayed in the column."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { type ColumnDef } from "@qlik/sprout-table";

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
`,e.jsx(n.p,{children:"That API is drop and forget you should never have to use it directly just provide it."}),`
`,e.jsx(n.h2,{id:"valuesetter",children:"valueSetter"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"valueSetter"}),` property is used to define a function that will be useful in the context of editing.
You will receive the row object along the column definition and will need to create a new value.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { type ColumnDef } from "@qlik/sprout-table";
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
`,e.jsxs(n.p,{children:["Once you are more confortable with renderCell you can start reading a more advanced use case to discover how to use renderCell with ",e.jsx(n.code,{children:"valueSetter"})," in the ",e.jsx(n.a,{href:"?path=/docs/docs-editing-inlineedit--docs",children:"InlineEditing"})," example."]}),`
`,e.jsx(n.h2,{id:"headername-required",children:"headerName (required)"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"headerName"})," property is used to define the header text for the column. It is optional, and if not provided, the field name will be used as the header."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const columns: ColumnDef<ContentType>[] = [
  { field: "name", headerName: "Product Name" },
  { field: "description", headerName: "Description" },
];
`})}),`
`,e.jsx(n.h2,{id:"headercontextmenu",children:"headerContextMenu"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"headerContextMenu"})," property is used to define the context menu for the column header. It is optional, and if not provided, no context menu will be displayed."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const columns: ColumnDef<ContentType>[] = [
  {
    field: "name",
    headerName: "Product Name",
    headerContextMenu: () => (
      <>
        <Menu.Item icon={<EditIcon />} label="Edit column" onClick={() => {}} />
        <Menu.Item icon={<TrashIcon />} label="Delete column" onClick={() => {}} />
      </>
    ),
  },
];
`})}),`
`,e.jsx(n.h2,{id:"width--minwidth--maxwidth--flex",children:"width / minWidth / maxWidth / flex"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"minWidth"})," and ",e.jsx(n.code,{children:"maxWidth"})," properties are used to define the minimum and maximum width of the column in pixels. They are optional."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"width"})," property is used to define the initial width of the column as by default it can be changed by the user using the resizing feature. If not provided the default width will be ",e.jsx(n.code,{children:"150"}),"."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"flex"})," property is used to define the flex ratio of the column. It is optional, and if not provided, the column will not be flexible. If a column has a ",e.jsx(n.code,{children:"flex"}),` property, it will take the remaining space in the table after all other columns have been sized.
This property is used only once at the initial render of the table, and it is not recalculated on resize.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const columns: ColumnDef<ContentType>[] = [
  { field: "name", headerName: "Product Name", flex: 1 },
  { field: "description", headerName: "Description", minWidth: 300, maxWidth: 500, width: 400 },
];
`})}),`
`,e.jsx(n.h2,{id:"resizable",children:"resizable"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"resizable"}),` property is used to define whether the resizing should be enabled on a column. It is optional, and if not provided, the resizing will be enabled by default.
Note that it is possible to disable resizing for all columns by passing `,e.jsx(n.code,{children:"disableColumnResize=true"})," as Table prop"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const columns: ColumnDef<ContentType>[] = [
  { field: "name", headerName: "Product Name", width: 200 },
  { field: "description", headerName: "Description", width: 300, resizable: false },
];
`})}),`
`,e.jsx(n.h2,{id:"sortable",children:"sortable"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"sortable"}),` property is used to define whether the sorting should be enabled on a column. It is optional, and if not provided, the sorting will be enabled
by default.
Note that it is possible to disable sorting for all columns by passing `,e.jsx(n.code,{children:"disableColumnSorting=true"})," as Table prop"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const columns: ColumnDef<ContentType>[] = [
  { field: "name", headerName: "Product Name", width: 200, sortable: false },
  { field: "description", headerName: "Description", width: 300, sortable: false },
];
`})}),`
`,e.jsx(n.h2,{id:"hideable",children:"hideable"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"hideable"}),` property is used to define whether the hide option should be available on a column. It is optional, and if not provided, the hide option will be enabled
by default.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const columns: ColumnDef<ContentType>[] = [
  { field: "name", headerName: "Product Name", width: 200, hideable: false },
  { field: "description", headerName: "Description", width: 300, hideable: false },
];
`})}),`
`,e.jsxs(n.p,{children:["Note that it is possible to disable sorting for all columns by passing ",e.jsx(n.code,{children:"disableColumnHiding=true"})," as Table prop"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Table } from "@qlik/sprout-table";

return <Table rows={rows} columns={columns} disableColumnHiding />;
`})}),`
`,e.jsx(n.h2,{id:"status-icon",children:"status icon"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"statusIcon"})," property is used to add a status icon to the left of the column name. Use this for conveying statuses that are true across the entire column, like errors or warnings."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const columns: ColumnDef<ContentType>[] = [
  { field: "name", headerName: "Product Name", width: 200, sortable: false },
  { field: "description", headerName: "Description", width: 300, statusIcon: <Warning /> },
];
`})}),`
`,e.jsx(n.h2,{id:"rendercell",children:"renderCell"}),`
`,e.jsx(n.p,{children:"It is an API that is part of the column definition."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { type ColumnDef, type TableCellParams } from "@qlik/sprout-table";

export const entityRenderCell: ColumnDef<ContentType>[] = [
  {
    field: "name",
    headerName: "Name",
    width: 300,
    renderCell: ({ row, colDef, value }: TableCellParams<ContentType>) => {
      return (
        <div className={classNames("flex", "flex-col", "px-m")}>
          <div className={classNames("font-label-s", "text-default")}>{row.name}</div>
          <div className={classNames("font-label-xs", "text-weak")}>
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
`,e.jsx(s,{of:l})]})}function pe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{pe as default};
