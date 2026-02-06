import{j as e,M as o,a,C as s}from"./iframe-Dux6zP9l.js";import{useMDXComponents as r}from"./index-BCztanOQ.js";import{GettingStarted as m,Playground as p}from"./ListTable.stories-B-u55PHq.js";import"./DataTable.stories-DwcYy98i.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-eze-MICP.js";import"./useI18n-KYbpKEsf.js";import"./Button-CUxISDo2.js";import"./classNames-T6EAEAwi.js";import"./sprout-duSO2RrP.js";import"./icons-DDUP-3mh.js";import"./Button.module-C2ELNEem.js";import"./Badge-LAqT22o7.js";import"./Tooltip-64IyLuk4.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CWoZLUJZ.js";import"./useId-CfGbHbQJ.js";import"./ProgressCircular-u9vevpyG.js";import"./SortDescending-6CDLuBsq.js";import"./IconButton-Blrr834S.js";import"./Menu-BeZpFDiT.js";import"./useControl-BHRxoypK.js";import"./Divider-l6Y0Jgs3.js";import"./list-B1zo5gaH.js";import"./NewTab-B05WKzom.js";import"./Skeleton-JHrb0bly.js";import"./Checkbox-Ce6gyz1s.js";import"./useValueControl-BAwr0tlp.js";import"./HelperText-BOHUOWLI.js";import"./InfoTooltipPrimitive-BaQRZYyO.js";import"./Info-DM0ROm97.js";import"./List-C5hsffpx.js";import"./useListGesture-l6HU6M_5.js";import"./Popover-CIPB7nap.js";import"./TextField-BpUUDk4a.js";import"./Error-BylAzqMK.js";import"./InputButton-yvCJ7c_i.js";import"./useFieldProps-BNSTbevB.js";import"./useFieldAriaProps-D4sViO3r.js";import"./Field-BXzPF4nu.js";import"./FieldLabel-C0bDiOug.js";import"./Radio-BgigLezH.js";import"./Message-DOGGZn5e.js";import"./ProgressBar-DYErwZaZ.js";import"./entity-BnvaaVNc.js";import"./Edit-jwbjvk-y.js";import"./Map-BliWAPeQ.js";import"./Warning-DwriNDhq.js";import"./index-BZsHeupw.js";import"./SelectComposition-DpZ1oFo4.js";import"./TagGroup-Bmc-dFrU.js";import"./Tag-rw8sUUkl.js";import"./TextOverflow-CaMKAJP6.js";import"./useHasOverflow-CHWGWZmC.js";import"./Add-BtS2806q.js";import"./Close-DZrODGJw.js";import"./AlertInline-uYDoLAUP.js";import"./SeverityIcon-xCN2JtCp.js";import"./FloatingWrapper-DWE1MRoj.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Table/Docs/Getting Started"}),`
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
