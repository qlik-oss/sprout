import{j as e,M as o,a,C as s}from"./iframe-B4Gn7jRD.js";import{useMDXComponents as r}from"./index-BtGsBDbQ.js";import{GettingStarted as m,Playground as p}from"./ListTable.stories-RozaXcxt.js";import"./DataTable.stories-CcO9dkYA.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-_Ji6gqG1.js";import"./useI18n-DOe-EdfE.js";import"./Button-DuNeVE70.js";import"./classNames-CTBLippR.js";import"./sprout-CWCWYkgH.js";import"./icons-CPBvMsVh.js";import"./Button.module-C2ELNEem.js";import"./Badge-CknI2ibL.js";import"./Tooltip-BG958zrQ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-COCCCrf6.js";import"./useId-DXegRsHP.js";import"./ProgressCircular-C_VqfatA.js";import"./SortDescending-CucUSsiY.js";import"./IconButton-CoZ792nv.js";import"./Menu-CwfGS8df.js";import"./useControl-7TH6mjrF.js";import"./Divider-OzvHaalV.js";import"./list-B1zo5gaH.js";import"./NewTab-BFfS-RhS.js";import"./Skeleton-V0Ckz_0t.js";import"./Checkbox-CO6m99Pi.js";import"./useValueControl-_ZNYrQQF.js";import"./HelperText-BkP0Ayki.js";import"./InfoTooltipPrimitive-YcCF56yH.js";import"./Info-C0xP7z1J.js";import"./List-DOrcG2Zx.js";import"./useListGesture-C4X2DLyP.js";import"./Popover-CYDrc_g3.js";import"./TextField-BiWstluF.js";import"./Error-ClTRWykU.js";import"./InputButton-BNDgbGEz.js";import"./useFieldProps-C0qESN5d.js";import"./useFieldAriaProps-BSt-3PUW.js";import"./Field-C61xY5sZ.js";import"./FieldLabel-DN1zz7rD.js";import"./Radio-_bFiK4Av.js";import"./Message-C4NcjTp4.js";import"./ProgressBar-CCNmV5z0.js";import"./entity-CgQN8bQP.js";import"./Edit-BJvse-oo.js";import"./Map-DeFMr3_u.js";import"./Warning-BFJpCY38.js";import"./index-6u6iDVFg.js";import"./SelectComposition-KKpfvx4F.js";import"./TagGroup-D2_tvUz2.js";import"./Tag-XD_XBSO2.js";import"./TextOverflow-BcmLE7aV.js";import"./useHasOverflow-B8tWSk8V.js";import"./Add-CKNXHNSz.js";import"./Close-DbHLglso.js";import"./AlertInline-Z7PlXDfi.js";import"./SeverityIcon-CafQc9yX.js";import"./FloatingWrapper-DqyIwrdS.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Table/Docs/Getting Started"}),`
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
