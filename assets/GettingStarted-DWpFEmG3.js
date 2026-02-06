import{j as e,M as o,a,C as s}from"./iframe-DO7qjpir.js";import{useMDXComponents as r}from"./index-DM3CO3rl.js";import{GettingStarted as m,Playground as p}from"./ListTable.stories-GRaxQmDA.js";import"./DataTable.stories-C0yE2YLO.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-CdimE1K6.js";import"./useI18n-CbD-mhn-.js";import"./Button-DWGkri9_.js";import"./classNames-C2xvgHQf.js";import"./sprout-nCaIAc8k.js";import"./icons-B7D59aOJ.js";import"./Button.module-C2ELNEem.js";import"./Badge-BbHESnbh.js";import"./Tooltip-Bnp9G-JS.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-C_aUAXE9.js";import"./useId-B9UV2KOW.js";import"./ProgressCircular-CpbimHqB.js";import"./SortDescending-Bd_E1WmM.js";import"./IconButton-GXyV3m9d.js";import"./Menu-u-ysB1YM.js";import"./useControl-U2hc2GWS.js";import"./Divider-BpSmZpjh.js";import"./list-B1zo5gaH.js";import"./NewTab-DA06V-wx.js";import"./Skeleton-BQx9Bath.js";import"./Checkbox-CzZgz8P2.js";import"./useValueControl-DIvBSOg5.js";import"./HelperText-BAW71J19.js";import"./InfoTooltipPrimitive-CE8VNDL8.js";import"./Info-CoVbxZIf.js";import"./List-D7yjk9tW.js";import"./useListGesture-CyFtzgkM.js";import"./Popover-DkNNB74y.js";import"./TextField-BvJMgdQD.js";import"./Error-DM57iPud.js";import"./InputButton-BUj9u-fS.js";import"./useFieldProps-dIMY5Lzn.js";import"./useFieldAriaProps-B-bf9GJL.js";import"./Field-Uh2AYJyc.js";import"./FieldLabel-B6hPS730.js";import"./Radio-6TYluTmb.js";import"./Message-CS0lUUIB.js";import"./ProgressBar-Y0MhEBtq.js";import"./entity-Bx7QGl0Y.js";import"./Edit-CColNq1n.js";import"./Map-B14QatVO.js";import"./Warning-CK4OS6kN.js";import"./index-DP0pgwhw.js";import"./SelectComposition-y0uB8bOb.js";import"./TagGroup-D2w3taRT.js";import"./Tag-CmC6rlue.js";import"./TextOverflow-DyfDSdhu.js";import"./useHasOverflow-CKe90G_4.js";import"./Add-BuQFhIrq.js";import"./Close-DVlpLiwK.js";import"./AlertInline-DxVY7R6B.js";import"./SeverityIcon-Cv0Z9iw1.js";import"./FloatingWrapper-Xned63dz.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Table/Docs/Getting Started"}),`
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
