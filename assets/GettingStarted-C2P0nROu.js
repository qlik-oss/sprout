import{j as e,M as o,a,C as s}from"./iframe-B-fqCePV.js";import{useMDXComponents as r}from"./index-DUhTx2ua.js";import{GettingStarted as m,Playground as p}from"./ListTable.stories-BJERB800.js";import"./DataTable.stories-BOG9nDAL.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-CDWO9Baz.js";import"./useI18n-uzhF32fT.js";import"./Button-DgHw6K-5.js";import"./classNames-BHQ9ieoZ.js";import"./sprout-DqOLOcsj.js";import"./icons-BXG-SLO7.js";import"./Button.module-C2ELNEem.js";import"./Badge-BMzhzV_X.js";import"./Tooltip-DclK_iM1.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-BvkMXfLp.js";import"./useId-DU0uuk5t.js";import"./ProgressCircular-CeNa-NP_.js";import"./SortDescending-CfflnELi.js";import"./IconButton-C1DotWTd.js";import"./Menu-CaarWdBl.js";import"./useControl-DDjCssuD.js";import"./Divider-B2v-xVm0.js";import"./list-B1zo5gaH.js";import"./NewTab-DUTMcy5N.js";import"./Skeleton-CLuWHboh.js";import"./Checkbox-u2f0i23h.js";import"./useValueControl-D8vAvYvZ.js";import"./HelperText-B14iHzzi.js";import"./InfoTooltipPrimitive-D79OSySs.js";import"./Info-C4YmKgXN.js";import"./List-CBd3yLgn.js";import"./useListGesture-CsinPUm2.js";import"./Popover-D19D-oMR.js";import"./TextField-DEQy7r8U.js";import"./Error-BQGw3LDI.js";import"./InputButton-VrXIQIPl.js";import"./useFieldProps-C5tdc_TS.js";import"./useFieldAriaProps-C2PPXi5-.js";import"./Field-BLDSqeK1.js";import"./FieldLabel-8GV8HzVd.js";import"./Radio-DFWUDyFe.js";import"./Message-DGshW5gP.js";import"./ProgressBar-BPq1EUCD.js";import"./entity-HfeGt6TM.js";import"./Edit-yy_oh6IZ.js";import"./Map-FzW2bSYj.js";import"./Warning-GhyyIkan.js";import"./index-mjBA3ntf.js";import"./SelectComposition-DIoBGgJg.js";import"./TagGroup-CMbRkJWe.js";import"./Tag-BBDzpCL8.js";import"./TextOverflow-DtYuM8Q8.js";import"./useHasOverflow-DXWq-MBQ.js";import"./Add-CGQWcTMW.js";import"./Close-R01cAXcl.js";import"./AlertInline-ClMwEsXt.js";import"./SeverityIcon-BvojxLgC.js";import"./FloatingWrapper-Bu-VdDpQ.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Table/Docs/Getting Started"}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.p,{children:`Welcome to the Sprout CSS Table documentation.
Once your React app is ready, you can add the following dependencies:`}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsxs(n.p,{children:["Install the package using your preferred package manager. For example, if you are using ",e.jsx(n.code,{children:"pnpm"}),", run:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm i @qlik/sprout-table
`})}),`
`,e.jsx(n.h2,{id:"importing-components",children:"Importing Components"}),`
`,e.jsxs(n.p,{children:["You can import the components in any ",e.jsx(n.code,{children:"tsx"})," file like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Table } from "@qlik/sprout-table";
`})}),`
`,e.jsx(n.h2,{id:"define-rows",children:"Define rows"}),`
`,e.jsxs(n.p,{children:[`Each row in DataTable and ListTable is an object with key-value pairs that correspond to the column and its value.
In ListTable and DataTable we named it as `,e.jsx(n.code,{children:"rows"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`type MyObject = {
  id: number;
  name: string;
  description: string;
};

const rows: MyObject[] = [
  { id: 1, name: "Qlik Cloud Analytics", description: "Uncover insights" },
  { id: 2, name: "Qlik Talend Cloud", description: "Deliver trusted data" },
  { id: 3, name: "Talend Data Fabric", description: "Unify, integrate and govern disparate data environments" },
  { id: 4, name: "Qlik Sense (on-prem)", description: "Seamless integration of data from multiple systems" },
  { id: 5, name: "Qlik Replicate", description: "Accelerate data ingestion and streaming" },
  { id: 6, name: "Qlik Answers", description: "Gen-AI driven answers from unstructured content" },
];
`})}),`
`,e.jsx(n.h2,{id:"define-columns",children:"Define columns"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { type ColumnDef } from "@qlik/sprout-table";

const columns: ColumnDef<MyObject>[] = [
  { field: "name", headerName: "Product Name", width: 200 },
  { field: "description", headerName: "Description", width: 300 },
];
`})}),`
`,e.jsx(n.h2,{id:"render-the-component",children:"Render the component"}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(s,{of:p})]})}function xe(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{xe as default};
