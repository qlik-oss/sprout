import{j as e,M as o,a,C as s}from"./iframe-CxjlquLv.js";import{useMDXComponents as r}from"./index-CopXJ1Hs.js";import{GettingStarted as m,Playground as p}from"./ListTable.stories-B_hDrE_A.js";import"./DataTable.stories-BziaPIZM.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-VGXBNFHL.js";import"./useI18n-DzUau43H.js";import"./Button-DovarDo_.js";import"./classNames-OYhIMgh8.js";import"./sprout-BMjCkMv3.js";import"./icons-LhMznsFI.js";import"./Button.module-CmdpHks8.js";import"./Badge-CT3AYSwq.js";import"./Tooltip-BF9waJvZ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BEoUSBug.js";import"./useId-BK-xxnhR.js";import"./ProgressCircular-54Bo0zt0.js";import"./SortDescending-mZ0sHp6G.js";import"./IconButton-Dn95SqkZ.js";import"./Menu-BRV3ljPm.js";import"./useControl-BQvv0ErP.js";import"./Divider-7ZQA3_Ws.js";import"./list-B1zo5gaH.js";import"./NewTab-thqnkD83.js";import"./Skeleton-CHWVn6Ej.js";import"./Checkbox-D56eS5Zk.js";import"./useValueControl-z08PllWD.js";import"./HelperText-CEBD_W8W.js";import"./InfoTooltipPrimitive-e-SBoNBf.js";import"./Info-CmHBCOIz.js";import"./List-BVLqhIS2.js";import"./useListGesture-anBwufDx.js";import"./Popover-D095V7L6.js";import"./TextField-B4G6cpkZ.js";import"./Error-Cwyymijo.js";import"./InputButton-DFNinxRI.js";import"./useFieldProps-Cz5SVI77.js";import"./useFieldAriaProps-D_SD2qVI.js";import"./Field-lZWJhm0y.js";import"./FieldLabel-DnVlDuiw.js";import"./Radio-D-_kQXgp.js";import"./Message-DpCaJ6e8.js";import"./ProgressBar-CX2aaVFM.js";import"./entity-Cdgo7zpI.js";import"./Edit-CBUd60Nh.js";import"./Map-BEEFfX2w.js";import"./Warning-x2bCUA0M.js";import"./index-BLW33H7p.js";import"./SelectComposition-BpZ2JkqS.js";import"./TagGroup-DuRTMnnk.js";import"./Tag-BMD7KwwB.js";import"./TextOverflow-qrd-zg5J.js";import"./useHasOverflow-BuWth_t2.js";import"./Add-DmDJ4n-J.js";import"./Close-PE5EsNbf.js";import"./AlertInline-K94GNLTd.js";import"./SeverityIcon-BEUSi72k.js";import"./FloatingWrapper-DnCS5VAc.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Table/Docs/Getting Started"}),`
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
