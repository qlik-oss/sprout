import{j as e,M as r,a as s}from"./iframe-CxjlquLv.js";import{useMDXComponents as o}from"./index-CopXJ1Hs.js";import{RenderCell as l}from"./ListTable.stories-B_hDrE_A.js";import"./DataTable.stories-BziaPIZM.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-VGXBNFHL.js";import"./useI18n-DzUau43H.js";import"./Button-DovarDo_.js";import"./classNames-OYhIMgh8.js";import"./sprout-BMjCkMv3.js";import"./icons-LhMznsFI.js";import"./Button.module-CmdpHks8.js";import"./Badge-CT3AYSwq.js";import"./Tooltip-BF9waJvZ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BEoUSBug.js";import"./useId-BK-xxnhR.js";import"./ProgressCircular-54Bo0zt0.js";import"./SortDescending-mZ0sHp6G.js";import"./IconButton-Dn95SqkZ.js";import"./Menu-BRV3ljPm.js";import"./useControl-BQvv0ErP.js";import"./Divider-7ZQA3_Ws.js";import"./list-B1zo5gaH.js";import"./NewTab-thqnkD83.js";import"./Skeleton-CHWVn6Ej.js";import"./Checkbox-D56eS5Zk.js";import"./useValueControl-z08PllWD.js";import"./HelperText-CEBD_W8W.js";import"./InfoTooltipPrimitive-e-SBoNBf.js";import"./Info-CmHBCOIz.js";import"./List-BVLqhIS2.js";import"./useListGesture-anBwufDx.js";import"./Popover-D095V7L6.js";import"./TextField-B4G6cpkZ.js";import"./Error-Cwyymijo.js";import"./InputButton-DFNinxRI.js";import"./useFieldProps-Cz5SVI77.js";import"./useFieldAriaProps-D_SD2qVI.js";import"./Field-lZWJhm0y.js";import"./FieldLabel-DnVlDuiw.js";import"./Radio-D-_kQXgp.js";import"./Message-DpCaJ6e8.js";import"./ProgressBar-CX2aaVFM.js";import"./entity-Cdgo7zpI.js";import"./Edit-CBUd60Nh.js";import"./Map-BEEFfX2w.js";import"./Warning-x2bCUA0M.js";import"./index-BLW33H7p.js";import"./SelectComposition-BpZ2JkqS.js";import"./TagGroup-DuRTMnnk.js";import"./Tag-BMD7KwwB.js";import"./TextOverflow-qrd-zg5J.js";import"./useHasOverflow-BuWth_t2.js";import"./Add-DmDJ4n-J.js";import"./Close-PE5EsNbf.js";import"./AlertInline-K94GNLTd.js";import"./SeverityIcon-BEUSi72k.js";import"./FloatingWrapper-DnCS5VAc.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Table/Docs/Columns/column definition"}),`
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
