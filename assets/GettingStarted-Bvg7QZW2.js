import{j as e,M as o,a,C as s}from"./iframe-itHhOQJ8.js";import{useMDXComponents as r}from"./index-M6OOd87p.js";import{GettingStarted as m,Playground as p}from"./ListTable.stories-CLM8UbSS.js";import"./DataTable.stories-sFbIX5nK.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-Df5yoS2C.js";import"./useI18n-DI5kaiCu.js";import"./Button-D1L5V1zp.js";import"./classNames-8u_YGv6N.js";import"./sprout-5bk7oM4L.js";import"./icons-ByJhQmwX.js";import"./Button.module-C2ELNEem.js";import"./Badge-Fno8cZv5.js";import"./Tooltip-CsCotLcm.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DcDxQLMY.js";import"./useId-B9bqBKq5.js";import"./ProgressCircular-DxTh7cF9.js";import"./SortDescending-BgGAHRpl.js";import"./IconButton-BFY56UPS.js";import"./Menu-BI017uJL.js";import"./useControl-tJx49zVQ.js";import"./Divider-Z7gRZlXH.js";import"./list-B1zo5gaH.js";import"./NewTab-CD_BiguK.js";import"./Skeleton-skQ_3lbg.js";import"./Checkbox-CJQPTyqO.js";import"./useValueControl-BoLujgBt.js";import"./HelperText-CZI4gvqv.js";import"./InfoTooltipPrimitive-BycnW3Wq.js";import"./Info-CR8Ra2BB.js";import"./List-BO2nz2p3.js";import"./useListGesture-BaRYVpJg.js";import"./Popover-D-VXifUT.js";import"./TextField-CrzVSwY1.js";import"./Error-CgMRcq7x.js";import"./InputButton-CobW-7UY.js";import"./useFieldProps-ZapC1bKU.js";import"./useFieldAriaProps-DJiNiZ9_.js";import"./Field-BglQDcK_.js";import"./FieldLabel-k_vhoLHi.js";import"./Radio-BuXCyg8H.js";import"./Message-Bc7eA00P.js";import"./ProgressBar-BYafVDdP.js";import"./entity-D0L1HH-P.js";import"./Edit-C4Gy6c5s.js";import"./Map-BgJ3dtI2.js";import"./Warning-Wt3nbj6y.js";import"./index-BKJVDtV4.js";import"./SelectComposition-1S4bJavw.js";import"./TagGroup-B35wMlua.js";import"./Tag-D6Whh4y4.js";import"./TextOverflow-ZR1lg4UG.js";import"./useHasOverflow-BPrWXac9.js";import"./Add-sGTd4JLT.js";import"./Close-DeQxVhkZ.js";import"./AlertInline-v7KfNwSs.js";import"./SeverityIcon-B8lRHlGc.js";import"./FloatingWrapper-CvOMWb5A.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Table/Docs/Getting Started"}),`
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
