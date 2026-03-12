import{j as e,M as l,a as n,C as c}from"./iframe-Bp0nu8X6.js";import{useMDXComponents as s}from"./index-CC_VpkT-.js";import{RowSingleSelection as a,RowMultipleSelection as i}from"./ListTable.stories-CIPH3HVb.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-DNTipomW.js";import"./useI18n-D2jaKmf9.js";import"./Button-CBkOB6z4.js";import"./classNames-BUd7eP-S.js";import"./sprout-rpr_484f.js";import"./Button.module-BRCMjQTg.js";import"./common-bQH3ZR03.js";import"./Badge-Br2oOa7d.js";import"./Tooltip-B3oqGcOh.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-D5e_-V2O.js";import"./useId-C38y77Da.js";import"./ProgressCircular-DO25q9z0.js";import"./sort-descending-Denwaaa7.js";import"./IconButton-Bu152FGZ.js";import"./Menu-Co2VX3TG.js";import"./useControl-CS67YHbK.js";import"./Divider-B3J7iNd7.js";import"./list-B1zo5gaH.js";import"./new-tab-uRDDQ1v4.js";import"./Skeleton-B__PZKef.js";import"./Popover-wxpNpCGf.js";import"./padding-Z5rKYLph.js";import"./TextField-BXk7dWee.js";import"./useValueControl-DAQoJtS1.js";import"./error-BcSU3HuT.js";import"./InputButton-BmHhXOBc.js";import"./useFieldProps-Cvv95kAj.js";import"./useFieldAriaProps-lqPBO4h4.js";import"./Field-4fYLnCC7.js";import"./FieldLabel-DBAKdsPr.js";import"./info-DGMlSu_6.js";import"./InfoTooltipPrimitive-C8AQG5h1.js";import"./HelperText-NWZ1zrXV.js";import"./Checkbox-Djd4-Wye.js";import"./List-Dh5d5DNB.js";import"./useListGesture-CvQX60jh.js";import"./Radio-CN8Ey4gw.js";import"./show-BUDxgafp.js";import"./Message-DGkKaG0R.js";import"./ProgressBar-DPn0IQrz.js";import"./entity-DMCVQWE7.js";function r(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Table/Docs/Rows/Row Selection"}),`
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
`,e.jsx(c,{of:i})]})}function te(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}export{te as default};
