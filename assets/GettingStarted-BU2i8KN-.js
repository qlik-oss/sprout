import{j as e,M as o,a,C as s}from"./iframe-BM36tKY9.js";import{useMDXComponents as r}from"./index-BCPnpXol.js";import{GettingStarted as m,Playground as p}from"./ListTable.stories-Dl8ElP1F.js";import"./DataTable.stories-DSX7X2U-.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-DTzJl0cc.js";import"./useI18n-BRpGJeHe.js";import"./Button-wScfBKxi.js";import"./classNames-D2MVtjzd.js";import"./sprout-BcBmzfoy.js";import"./Button.module-Bn-SZyJ6.js";import"./common-bQH3ZR03.js";import"./Badge-CjLUVOBS.js";import"./Tooltip-DOknWAYm.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-lrfYqLit.js";import"./useId-Cih_zwB8.js";import"./ProgressCircular-DoqAoY81.js";import"./sort-descending-CgwSpVd_.js";import"./IconButton-DIyYlW0K.js";import"./Menu-b5Hl0xTM.js";import"./useControl-Bq0hCRWZ.js";import"./Divider-CVf_6yZu.js";import"./list-B1zo5gaH.js";import"./new-tab-CpKZypuy.js";import"./Skeleton-DwQqkdj6.js";import"./Popover-DaYy3ijw.js";import"./padding-BVrxRlLA.js";import"./TextField-xzsdu2-Y.js";import"./useValueControl-C1TwhPrN.js";import"./error-DJM79MqW.js";import"./InputButton-CEOVqhok.js";import"./useFieldProps-C0FKGzLz.js";import"./useFieldAriaProps-D-kZa2Fo.js";import"./Field-BP_0b4CU.js";import"./FieldLabel-DHI2P9wk.js";import"./info-By4pCjMF.js";import"./InfoTooltipPrimitive-B8ta45BR.js";import"./HelperText-BT_m4RdC.js";import"./Checkbox-Du9zmVCp.js";import"./List-5clCzlOh.js";import"./useListGesture-BjcVIGnC.js";import"./Radio-9eKl_Nwn.js";import"./show-C6fFsymT.js";import"./Message-BhbyFQzf.js";import"./ProgressBar-Uyun059k.js";import"./entity-CJQOLRZI.js";import"./edit-CKp5FD3E.js";import"./map-DnBNu0cY.js";import"./warning-GTpknHYS.js";import"./index-bW3DuZb5.js";import"./SelectComposition-BLwTa6RT.js";import"./TagGroup-OL8HiEl_.js";import"./Tag-Bmu-JbUV.js";import"./TextOverflow-7rHwN7fm.js";import"./useHasOverflow-BudGxDi5.js";import"./add-VKxZMCZ1.js";import"./close-CYEv2BwJ.js";import"./AlertInline-GaNDVBB-.js";import"./SeverityIcon-CnbcKgkd.js";import"./FloatingWrapper-BdIfZkqF.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Table/Docs/Getting Started"}),`
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
