import{j as e,M as o,a,C as s}from"./iframe-Bp0nu8X6.js";import{useMDXComponents as r}from"./index-CC_VpkT-.js";import{GettingStarted as m,Playground as p}from"./ListTable.stories-CIPH3HVb.js";import"./DataTable.stories-BDunRDc0.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-DNTipomW.js";import"./useI18n-D2jaKmf9.js";import"./Button-CBkOB6z4.js";import"./classNames-BUd7eP-S.js";import"./sprout-rpr_484f.js";import"./Button.module-BRCMjQTg.js";import"./common-bQH3ZR03.js";import"./Badge-Br2oOa7d.js";import"./Tooltip-B3oqGcOh.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-D5e_-V2O.js";import"./useId-C38y77Da.js";import"./ProgressCircular-DO25q9z0.js";import"./sort-descending-Denwaaa7.js";import"./IconButton-Bu152FGZ.js";import"./Menu-Co2VX3TG.js";import"./useControl-CS67YHbK.js";import"./Divider-B3J7iNd7.js";import"./list-B1zo5gaH.js";import"./new-tab-uRDDQ1v4.js";import"./Skeleton-B__PZKef.js";import"./Popover-wxpNpCGf.js";import"./padding-Z5rKYLph.js";import"./TextField-BXk7dWee.js";import"./useValueControl-DAQoJtS1.js";import"./error-BcSU3HuT.js";import"./InputButton-BmHhXOBc.js";import"./useFieldProps-Cvv95kAj.js";import"./useFieldAriaProps-lqPBO4h4.js";import"./Field-4fYLnCC7.js";import"./FieldLabel-DBAKdsPr.js";import"./info-DGMlSu_6.js";import"./InfoTooltipPrimitive-C8AQG5h1.js";import"./HelperText-NWZ1zrXV.js";import"./Checkbox-Djd4-Wye.js";import"./List-Dh5d5DNB.js";import"./useListGesture-CvQX60jh.js";import"./Radio-CN8Ey4gw.js";import"./show-BUDxgafp.js";import"./Message-DGkKaG0R.js";import"./ProgressBar-DPn0IQrz.js";import"./entity-DMCVQWE7.js";import"./edit-Dwo3NC30.js";import"./map-BFrox4w-.js";import"./warning-CT_3wb2_.js";import"./index-B4OJwCVC.js";import"./SelectComposition-Yhre3dM9.js";import"./TagGroup-BRIA_TfO.js";import"./Tag-D6_7eg9E.js";import"./TextOverflow-D-B5LsyQ.js";import"./useHasOverflow-BYHEzBW0.js";import"./add-DiIoSsfz.js";import"./close-CJ5Ns5F2.js";import"./AlertInline-vLYNKOEh.js";import"./SeverityIcon-CBpxoadr.js";import"./FloatingWrapper-B5QsjZYg.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Table/Docs/Getting Started"}),`
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
