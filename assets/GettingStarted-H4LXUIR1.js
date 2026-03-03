import{j as e,M as o,a,C as s}from"./iframe-CuV-KuE-.js";import{useMDXComponents as r}from"./index-D_K059sT.js";import{GettingStarted as m,Playground as p}from"./ListTable.stories-sxDRkhvl.js";import"./DataTable.stories-E1HQ9E2d.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-C_25cFSE.js";import"./useI18n-BPziWXqP.js";import"./Button-D_CeIuO9.js";import"./classNames-fYnfVJ-g.js";import"./sprout-DQv_ITqK.js";import"./icons-BouMdmeh.js";import"./Button.module-CmdpHks8.js";import"./Badge-Dt3dHAo1.js";import"./Tooltip-Dlf0g86C.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-tUeULyiG.js";import"./useId-CKb71T0Y.js";import"./ProgressCircular-DDsJKJWC.js";import"./SortDescending-BF67BDZs.js";import"./IconButton-DFJpbTCt.js";import"./Menu-BVN8XmR4.js";import"./useControl-CYhNvxn-.js";import"./Divider-D0F_5EBr.js";import"./list-B1zo5gaH.js";import"./NewTab-DJ0MS9BP.js";import"./Skeleton-DBd_dt_9.js";import"./Checkbox-C-Sefky0.js";import"./useValueControl-DLR8SBP3.js";import"./HelperText-Ctcx11cL.js";import"./InfoTooltipPrimitive-DsZRUk_-.js";import"./Info-BDH0-Rmp.js";import"./List-BFTJx5a2.js";import"./useListGesture-WzoQDkMe.js";import"./Popover-BVw6PaHD.js";import"./TextField-CMO5t_Ye.js";import"./Error-D9ghOnKS.js";import"./InputButton-Xa5EqaK9.js";import"./useFieldProps-DU-6b6IZ.js";import"./useFieldAriaProps-BOPyAtc4.js";import"./Field-u_zqV6wB.js";import"./FieldLabel-AohGrq0t.js";import"./Radio-CZULi15_.js";import"./Message-DmR8-xr1.js";import"./ProgressBar-DvJ6AQ39.js";import"./entity-BmisFbTn.js";import"./Edit-CS5l4TjY.js";import"./Map-COzyd6Qy.js";import"./Warning-TGmbdRgn.js";import"./index-sjkRjUKZ.js";import"./SelectComposition-CX77_3Zt.js";import"./TagGroup-DEsyADP0.js";import"./Tag-Bxs778iX.js";import"./TextOverflow-H2h0tX5s.js";import"./useHasOverflow-CS__m2Gh.js";import"./Add-Cf52a-Iw.js";import"./Close-DVZAYT6i.js";import"./AlertInline-BTqM0hLj.js";import"./SeverityIcon-DIoAgMWV.js";import"./FloatingWrapper-EnwkNkl-.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Table/Docs/Getting Started"}),`
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
