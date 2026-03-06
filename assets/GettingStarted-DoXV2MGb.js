import{j as e,M as o,a,C as s}from"./iframe-lMEil1TA.js";import{useMDXComponents as r}from"./index-Wkq3wkd2.js";import{GettingStarted as m,Playground as p}from"./ListTable.stories-DHf0WxCL.js";import"./DataTable.stories-BB6_lPDd.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-DPHkdLlh.js";import"./useI18n-CDksjSf0.js";import"./Button-B3VC5XuI.js";import"./classNames-B_Twdkca.js";import"./sprout-fe7_-ZbP.js";import"./Button.module-ZjqCyrss.js";import"./common-bQH3ZR03.js";import"./Badge-BUdEAQ9u.js";import"./Tooltip-wsnfK-o5.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-ikaB6BKo.js";import"./useId-BL8g_bWL.js";import"./ProgressCircular-DzkpdMMq.js";import"./sort-descending-DBF7-f7_.js";import"./IconButton-CuZnXk5P.js";import"./Menu-BuAoSxI5.js";import"./useControl-Crf27nxo.js";import"./Divider-DoFQjC9R.js";import"./list-B1zo5gaH.js";import"./new-tab-CrWdziAn.js";import"./Skeleton-ByVVQwn0.js";import"./Popover-C2pxt5JU.js";import"./padding-ChQcYsRi.js";import"./TextField-BJ7hRtnc.js";import"./useValueControl-JgME-MAi.js";import"./error-D8ruDyrJ.js";import"./InputButton-BcBP8Pmj.js";import"./useFieldProps-lilq_Daj.js";import"./useFieldAriaProps-BeXWYVK1.js";import"./Field-C2NiUE28.js";import"./FieldLabel-hmMjgROH.js";import"./info-B4Qytw2Z.js";import"./InfoTooltipPrimitive-BLPBLLHp.js";import"./HelperText-B_x3JSnr.js";import"./Checkbox-B2upM8Wa.js";import"./List-DPaEP81W.js";import"./useListGesture-CqGT3z4U.js";import"./Radio-BTbE2pEa.js";import"./show-CL2zF-Fm.js";import"./Message-43Hu274X.js";import"./ProgressBar-CXjvcnKL.js";import"./entity-hM96d6N7.js";import"./edit-Bij8o67D.js";import"./map-Bw_UfIsn.js";import"./warning-X1qrbfM3.js";import"./index-DVReq_z3.js";import"./SelectComposition-zFJpwY-i.js";import"./TagGroup-DS0X01ME.js";import"./Tag-CjedJS_E.js";import"./TextOverflow-BBy_y2-V.js";import"./useHasOverflow-BS8MxBL1.js";import"./add-OoYVhzw8.js";import"./close-CrtKz3TF.js";import"./AlertInline-Dsva9G2S.js";import"./SeverityIcon-Dpf8kFNW.js";import"./FloatingWrapper-C19CkbJo.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Table/Docs/Getting Started"}),`
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
`,e.jsx(s,{of:p})]})}function ge(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ge as default};
