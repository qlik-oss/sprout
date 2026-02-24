import{j as e,M as l,a as n,C as c}from"./iframe-CxjlquLv.js";import{useMDXComponents as s}from"./index-CopXJ1Hs.js";import{RowSingleSelection as a,RowMultipleSelection as i}from"./ListTable.stories-B_hDrE_A.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-VGXBNFHL.js";import"./useI18n-DzUau43H.js";import"./Button-DovarDo_.js";import"./classNames-OYhIMgh8.js";import"./sprout-BMjCkMv3.js";import"./icons-LhMznsFI.js";import"./Button.module-CmdpHks8.js";import"./Badge-CT3AYSwq.js";import"./Tooltip-BF9waJvZ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BEoUSBug.js";import"./useId-BK-xxnhR.js";import"./ProgressCircular-54Bo0zt0.js";import"./SortDescending-mZ0sHp6G.js";import"./IconButton-Dn95SqkZ.js";import"./Menu-BRV3ljPm.js";import"./useControl-BQvv0ErP.js";import"./Divider-7ZQA3_Ws.js";import"./list-B1zo5gaH.js";import"./NewTab-thqnkD83.js";import"./Skeleton-CHWVn6Ej.js";import"./Checkbox-D56eS5Zk.js";import"./useValueControl-z08PllWD.js";import"./HelperText-CEBD_W8W.js";import"./InfoTooltipPrimitive-e-SBoNBf.js";import"./Info-CmHBCOIz.js";import"./List-BVLqhIS2.js";import"./useListGesture-anBwufDx.js";import"./Popover-D095V7L6.js";import"./TextField-B4G6cpkZ.js";import"./Error-Cwyymijo.js";import"./InputButton-DFNinxRI.js";import"./useFieldProps-Cz5SVI77.js";import"./useFieldAriaProps-D_SD2qVI.js";import"./Field-lZWJhm0y.js";import"./FieldLabel-DnVlDuiw.js";import"./Radio-D-_kQXgp.js";import"./Message-DpCaJ6e8.js";import"./ProgressBar-CX2aaVFM.js";import"./entity-Cdgo7zpI.js";function r(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Table/Docs/Rows/Row Selection"}),`
`,e.jsx(o.h1,{id:"row-selection",children:"Row Selection"}),`
`,e.jsx(o.p,{children:`Row selection is a usual interaction pattern in tables, allowing users to select one or multiple rows for further actions.
It can be to pick an item so the user can filter and find it easily, or to perform bulk actions like deleting or exporting selected rows.`}),`
`,e.jsxs(o.p,{children:["Here we have a difference in behavior between the ",e.jsx(o.code,{children:"List"})," and ",e.jsx(o.code,{children:"Data"})," table variants, which is important to understand when implementing row selection in your tables."]}),`
`,e.jsx(o.p,{children:"In terms of state management the feature can be used using the Uncontrolled or Controlled mode but you have to know in the end there is an internal state that is used to manage the selection of rows."}),`
`,e.jsx(o.h2,{id:"list-single-row-selection",children:"List Single Row Selection"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"rowSelectionMode"})," prop can be set to ",e.jsx(o.code,{children:'"single"'}),` to allow only one row to be selected at a time. This is useful for scenarios where only one item can be acted upon, such as viewing details or editing a single record.
The user can then click anywhere on the row to select it. `,e.jsx("br",{})]}),`
`,e.jsxs(o.p,{children:[e.jsx("strong",{children:"ℹ️ Note:"})," If ",e.jsx(o.a,{href:"/docs/docs-rows-row-toggling--docs",children:"Row Toggling"}),` is enabled, it will require the user to
click the radio button to select the row.`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Table } from "@qlik/sprout-table";
import { rows, columns } from "./data";

<Table variant="list" columns={columns} rows={rows} rowSelectionMode="single" />;
`})}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(o.h2,{id:"list-multiple-row-selection",children:"List Multiple Row Selection"}),`
`,e.jsxs(o.p,{children:["For scenarios where users need to select multiple rows, set the ",e.jsx(o.code,{children:"rowSelectionMode"})," prop to ",e.jsx(o.code,{children:'"multiple"'}),`. This allows users to select several rows at once, which is useful for bulk actions like deletion or export.
The user can then click anywhere on the row to select it, and a checkbox will appear in the selection column header to select all rows. `,e.jsx("br",{})]}),`
`,e.jsxs(o.p,{children:[e.jsx("strong",{children:"ℹ️ Note:"})," If ",e.jsx(o.a,{href:"/docs/docs-rows-row-toggling--docs",children:"Row Toggling"}),` is enabled, it will require the user to
click the checkbox to select the row.`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Table } from "@qlik/sprout-table";
import { rows, columns } from "./data";

<Table variant="list" columns={columns} rows={rows} rowSelectionMode="multiple" />;
`})}),`
`,e.jsx(o.h2,{id:"disable-selection-for-specific-rows",children:"Disable selection for specific rows"}),`
`,e.jsxs(o.p,{children:["Use ",e.jsx(o.code,{children:"isRowSelectable"}),` prop to disable selection for specific rows. It is a function which is called with row object
and should return a `,e.jsx(o.code,{children:"boolean"})," value"]}),`
`,e.jsxs(o.p,{children:[e.jsx("strong",{children:"ℹ️ Note:"})," The ",e.jsx(o.code,{children:"rowSelectionMode"})," prop should be also defined"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Table } from "@qlik/sprout-table";
import { rows, columns } from "./data";

return (
  <Table
    variant="list"
    columns={columns}
    rows={rows}
    rowSelectionMode="multiple"
    isRowSelectable={(row) => row.engines.length > 5}
  />
);
`})}),`
`,e.jsx(n,{of:i}),`
`,e.jsxs(o.p,{children:["In some cases you may not want the user to be able to select all rows at once. You can opt-out by using the property ",e.jsx(o.code,{children:"rowSelectAll={false}"})]}),`
`,e.jsx(o.h2,{id:"api",children:"API"}),`
`,e.jsx(c,{of:i})]})}function ee(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}export{ee as default};
