import{j as e,M as o,a,C as s}from"./iframe-CYyT-rNd.js";import{useMDXComponents as r}from"./index-Dzbf35yC.js";import{GettingStarted as m,Playground as p}from"./ListTable.stories-BPgTg3fI.js";import"./DataTable.stories-JKrH0SZI.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-DQ5rM_kH.js";import"./useI18n-B8acZ0ym.js";import"./Button-B_WU7ehq.js";import"./classNames-BmP9dLUE.js";import"./sprout-UDUY6uO8.js";import"./icons-BJP5nzPh.js";import"./Button.module-C2ELNEem.js";import"./Badge-M4fZ9aOR.js";import"./Tooltip-Bq8n5z5D.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-GWN5S5OT.js";import"./useId-BEfewr8x.js";import"./ProgressCircular-BThLXJeo.js";import"./SortDescending-CVAYxQhu.js";import"./IconButton-DQqeG5o4.js";import"./Menu-BJ4TKxRh.js";import"./useControl-CbxOYg9r.js";import"./Divider-DGcHtPQB.js";import"./list-B1zo5gaH.js";import"./NewTab-CSZjxaIu.js";import"./Skeleton-BcSpZhaC.js";import"./Checkbox-CEdksXS8.js";import"./useValueControl-DkREc4sR.js";import"./HelperText-PF_3nKgd.js";import"./InfoTooltipPrimitive-CcAfk6tw.js";import"./Info-kPGn8DpC.js";import"./List-CKMCLIEK.js";import"./useListGesture-BJWysAy8.js";import"./Popover-p0wTHRSq.js";import"./TextField-3so8vjFm.js";import"./Error-D7GnDcGx.js";import"./InputButton-CVMmk1vr.js";import"./useFieldProps-crQyhd-6.js";import"./useFieldAriaProps-O3JOrChf.js";import"./Field-WnapnPu6.js";import"./FieldLabel-B0tZljJj.js";import"./Radio-6dgqdk9y.js";import"./Message-1sVzd-4h.js";import"./ProgressBar-PgTOB488.js";import"./entity-BJaSSSwx.js";import"./Edit-C5Vhfo4K.js";import"./Map-BB3BkA5L.js";import"./Warning-BO-41SRA.js";import"./index-BKlOZwBU.js";import"./SelectComposition-Cc6wbRHo.js";import"./TagGroup-OrLiB7MT.js";import"./Tag-CPT8lZjs.js";import"./TextOverflow-CbGiWJni.js";import"./useHasOverflow-CqJCJVUE.js";import"./Add-DcwIOkn_.js";import"./Close-IBeLqb5W.js";import"./AlertInline-DZSszTFT.js";import"./SeverityIcon-B1bVDgD2.js";import"./FloatingWrapper-a0YhtIpN.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Table/Docs/Getting Started"}),`
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
