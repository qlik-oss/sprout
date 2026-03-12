import{j as e,M as l,a as n,C as c}from"./iframe-ZO3EpHUh.js";import{useMDXComponents as s}from"./index-BuQoUgKa.js";import{RowSingleSelection as a,RowMultipleSelection as i}from"./ListTable.stories-BlgUANB5.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-CVd5IU1r.js";import"./useI18n-CNj_Vmmx.js";import"./Button-DwNMLHHD.js";import"./classNames--9J8KLdq.js";import"./sprout-JWClaPEx.js";import"./Button.module-CmtyAZAy.js";import"./common-bQH3ZR03.js";import"./Badge-CIU99cFr.js";import"./Tooltip-CjNQJJZv.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-CTOYJqpW.js";import"./useId-peRdP77j.js";import"./ProgressCircular-Bbm1pjbl.js";import"./sort-descending-DuwJD51Q.js";import"./IconButton-CM9e8KDm.js";import"./Menu-CLctAJeW.js";import"./useControl-B2Bmxigf.js";import"./Divider-Bbj5__gU.js";import"./list-B1zo5gaH.js";import"./new-tab-CfvnCP2A.js";import"./Skeleton-Ch8F1EEZ.js";import"./Popover-BDw3NIcl.js";import"./padding-nVQxVZeA.js";import"./TextField-DZIgwTux.js";import"./useValueControl-B3H3Rg3H.js";import"./error-Lg61ZlTl.js";import"./InputButton-Binv3ZHd.js";import"./useFieldProps-DqU5TkBR.js";import"./useFieldAriaProps-B_vYltrV.js";import"./Field-uEq3IPbz.js";import"./FieldLabel-DyqdK2ie.js";import"./info-DvsPKJb0.js";import"./InfoTooltipPrimitive-CX2r-Osw.js";import"./HelperText-BqjFHr21.js";import"./Checkbox-Gl5nFt4x.js";import"./List-Dc9_b6lv.js";import"./useListGesture-B9iOauyS.js";import"./Radio-DsR-8wzh.js";import"./show-Do692Dy4.js";import"./Message-CWQJdgS-.js";import"./ProgressBar-sErTAQHo.js";import"./entity-CgxVnWro.js";function r(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Table/Docs/Rows/Row Selection"}),`
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
