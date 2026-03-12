import{j as e,M as o,a,C as s}from"./iframe-ZO3EpHUh.js";import{useMDXComponents as r}from"./index-BuQoUgKa.js";import{GettingStarted as m,Playground as p}from"./ListTable.stories-BlgUANB5.js";import"./DataTable.stories-CyDVYtnQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-CVd5IU1r.js";import"./useI18n-CNj_Vmmx.js";import"./Button-DwNMLHHD.js";import"./classNames--9J8KLdq.js";import"./sprout-JWClaPEx.js";import"./Button.module-CmtyAZAy.js";import"./common-bQH3ZR03.js";import"./Badge-CIU99cFr.js";import"./Tooltip-CjNQJJZv.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-CTOYJqpW.js";import"./useId-peRdP77j.js";import"./ProgressCircular-Bbm1pjbl.js";import"./sort-descending-DuwJD51Q.js";import"./IconButton-CM9e8KDm.js";import"./Menu-CLctAJeW.js";import"./useControl-B2Bmxigf.js";import"./Divider-Bbj5__gU.js";import"./list-B1zo5gaH.js";import"./new-tab-CfvnCP2A.js";import"./Skeleton-Ch8F1EEZ.js";import"./Popover-BDw3NIcl.js";import"./padding-nVQxVZeA.js";import"./TextField-DZIgwTux.js";import"./useValueControl-B3H3Rg3H.js";import"./error-Lg61ZlTl.js";import"./InputButton-Binv3ZHd.js";import"./useFieldProps-DqU5TkBR.js";import"./useFieldAriaProps-B_vYltrV.js";import"./Field-uEq3IPbz.js";import"./FieldLabel-DyqdK2ie.js";import"./info-DvsPKJb0.js";import"./InfoTooltipPrimitive-CX2r-Osw.js";import"./HelperText-BqjFHr21.js";import"./Checkbox-Gl5nFt4x.js";import"./List-Dc9_b6lv.js";import"./useListGesture-B9iOauyS.js";import"./Radio-DsR-8wzh.js";import"./show-Do692Dy4.js";import"./Message-CWQJdgS-.js";import"./ProgressBar-sErTAQHo.js";import"./entity-CgxVnWro.js";import"./edit-BH8KrMyX.js";import"./map-CMc8fJla.js";import"./warning-LAozOqxS.js";import"./index-W1-YU6c0.js";import"./SelectComposition-D8CpsZq3.js";import"./TagGroup-DW8tWDYS.js";import"./Tag-CtZQOE4u.js";import"./TextOverflow-D8AIgKpt.js";import"./useHasOverflow-b7ARuLn8.js";import"./add-DMALUOT2.js";import"./close-CFDHWYro.js";import"./AlertInline-DQse9J3b.js";import"./SeverityIcon-DTHCWEmM.js";import"./FloatingWrapper-BqhdHM67.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Table/Docs/Getting Started"}),`
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
