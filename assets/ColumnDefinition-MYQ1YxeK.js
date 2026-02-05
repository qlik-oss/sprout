import{j as e,M as r,a as s}from"./iframe-BQJExRCF.js";import{useMDXComponents as o}from"./index-BiT2RrsF.js";import{RenderCell as l}from"./ListTable.stories-DkXQI7dE.js";import"./DataTable.stories-BfdWdzUH.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-Bs1NmEfZ.js";import"./useI18n-B99T9obj.js";import"./Button-C7-D-GN_.js";import"./classNames-B0wfWtWT.js";import"./sprout-DxA14K3u.js";import"./icons-CzMI2h-K.js";import"./Button.module-C2ELNEem.js";import"./Badge-B9--3FkB.js";import"./Tooltip-CVFOQrqK.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DAgGzV0n.js";import"./useId-Drz8gmS2.js";import"./ProgressCircular-B4mHH4_Y.js";import"./SortDescending-BWpZ9BF7.js";import"./IconButton-BEI3RZpW.js";import"./Menu-D_upy4ds.js";import"./useControl-XJuj1vyK.js";import"./Divider-Byw016rg.js";import"./list-B1zo5gaH.js";import"./NewTab-BMHt_Vx2.js";import"./Skeleton-C323E7Fo.js";import"./Checkbox-DxL7CNq4.js";import"./useValueControl-CRzMHMlu.js";import"./HelperText-CWubgWiG.js";import"./InfoTooltipPrimitive-BqPdPqRN.js";import"./Info-BfRROe8g.js";import"./List-BPN2kntc.js";import"./useListGesture-B8rp38Ns.js";import"./Popover-CTsqc6Mc.js";import"./TextField-C-5GsH-r.js";import"./Error-B95qseKK.js";import"./InputButton-CeEVJl7G.js";import"./useFieldProps-C0xARZ1e.js";import"./useFieldAriaProps-DaZEG-MV.js";import"./Field-BIldF_Al.js";import"./FieldLabel-BWOyYL3A.js";import"./Radio-CIqNDp5q.js";import"./Message-C0IrDS9-.js";import"./ProgressBar-LweF-ALg.js";import"./entity-CKGoLZWv.js";import"./Edit-Bc7r3LZJ.js";import"./Map-pFYOI1fT.js";import"./Warning-BB_ZpJQH.js";import"./index-BFgiYBXq.js";import"./SelectComposition-cKAmPh1H.js";import"./TagGroup-BsZ4uWAl.js";import"./Tag-DLmRXsBI.js";import"./TextOverflow-D_EYc0DY.js";import"./useHasOverflow-o-wZv5E2.js";import"./Add-CPO6AOva.js";import"./Close-VT6FC74F.js";import"./AlertInline-DLvQ03s1.js";import"./SeverityIcon-CI0epH8x.js";import"./FloatingWrapper-DTdVRmL6.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Table/Docs/Columns/column definition"}),`
`,e.jsx(n.h1,{id:"columns",children:"Columns"}),`
`,e.jsxs(n.p,{children:[`Columns are the building blocks of the DataTable and ListTable components. They define how data is displayed in each row.
The columns are defined with the `,e.jsx(n.code,{children:"columns"})," prop, which is an array of objects. Each object represents a column."]}),`
`,e.jsx(n.h2,{id:"id",children:"id"}),`
`,e.jsx(n.p,{children:`This property is used internally to identify the column. It is optional, and if not provided, the field will be used for it.
If none of them is provided an error will be thrown.`}),`
`,e.jsx(n.h2,{id:"field",children:"field"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"field"})," property accept a string as a key to the data object. It is used to define the data that will be displayed in the column."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { type ColumnDef } from "@qlik/sprout-css-table";

type ContentType = {
  name: string;
  description: string;
};

const columns: ColumnDef<ContentType>[] = [{ field: "name" }, { field: "description" }];
`})}),`
`,e.jsx(n.h2,{id:"valuegetter",children:"valueGetter"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"valueGetter"})," property is an alternative to the ",e.jsx(n.code,{children:"field"})," property. It is a function that takes a row object and returns the value to be displayed in the column."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { type ColumnDef } from "@qlik/sprout-css-table";

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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { type ColumnDef } from "@qlik/sprout-css-table";
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Table } from "@qlik/sprout-css-table";

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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { type ColumnDef, type TableCellParams } from "@qlik/sprout-css-table";

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
`,e.jsx(s,{of:l})]})}function pe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{pe as default};
