import{j as e,M as o,a,C as s}from"./iframe-D-N3fK2j.js";import{useMDXComponents as r}from"./index-BvagnWFp.js";import{GettingStarted as m,Playground as p}from"./ListTable.stories-CgtPa8qs.js";import"./DataTable.stories-G-FDgUXQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-BQSmQzm2.js";import"./useI18n-ClHBar3-.js";import"./Button-BiiNVP7I.js";import"./classNames-CrSIhzis.js";import"./sprout-UDo5dA_z.js";import"./icons-BEmnCRju.js";import"./Button.module-CmdpHks8.js";import"./Badge-sJnchsAW.js";import"./Tooltip-DaX3jRge.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-25h2pNOO.js";import"./useId-Bkl3iN6O.js";import"./ProgressCircular-CdUDfayh.js";import"./SortDescending-7Is3TCUG.js";import"./IconButton-Dg4ysz4Z.js";import"./Menu-CpWAuarv.js";import"./useControl-U-WkQj2I.js";import"./Divider-Aa9jm5B9.js";import"./list-B1zo5gaH.js";import"./NewTab-DIWrR844.js";import"./Skeleton-Bx_f_eFM.js";import"./Checkbox-BypGcOIl.js";import"./useValueControl-DH7McdQ1.js";import"./HelperText-DkWywDIM.js";import"./InfoTooltipPrimitive-C8Uq1qY7.js";import"./Info-DKfyJpi1.js";import"./List-DiNkJdPa.js";import"./useListGesture-DW7ff4gI.js";import"./Popover-B17Az-M5.js";import"./TextField-DMygpcri.js";import"./Error-CZbJtLWx.js";import"./InputButton-BoVH_no0.js";import"./useFieldProps-Cnz6GbX_.js";import"./useFieldAriaProps-EzEn10HD.js";import"./Field-DHjy_kFd.js";import"./FieldLabel-BNj8Kiyj.js";import"./Radio-BUTN66Da.js";import"./Message-kE_O_eKL.js";import"./ProgressBar-S0aBvDe-.js";import"./entity-jHLCnT40.js";import"./Edit-69Qgo7Td.js";import"./Map-DsyJdFaB.js";import"./Warning-Dy5sqdbk.js";import"./index-umgVt7ll.js";import"./SelectComposition-2GVB6IHa.js";import"./TagGroup-7XjF8tBf.js";import"./Tag-CLp8bTu7.js";import"./TextOverflow-B0-vdnEr.js";import"./useHasOverflow-BWQUK3f5.js";import"./Add-DHz0bRTt.js";import"./Close-Clva93gw.js";import"./AlertInline-DkGYkHAy.js";import"./SeverityIcon-DDEIToER.js";import"./FloatingWrapper-CPYdMCWe.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Table/Docs/Getting Started"}),`
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
