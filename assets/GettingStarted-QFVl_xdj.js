import{j as e,M as o,a,C as s}from"./iframe-s7Iwh0oT.js";import{useMDXComponents as r}from"./index-3LxxidSz.js";import{GettingStarted as m,Playground as p}from"./ListTable.stories-B2OILioi.js";import"./DataTable.stories-BBk3Rj5r.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-DU4sN6ms.js";import"./useI18n-DNSc_Xzu.js";import"./Button-BLnymG9d.js";import"./classNames-BgUAGgdt.js";import"./sprout-Bvx94sbk.js";import"./Button.module-BSdpW5zV.js";import"./common-bQH3ZR03.js";import"./Badge-CjbZkwpT.js";import"./Tooltip-_uMFampe.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BoZIv2t8.js";import"./useId-C37lMSXz.js";import"./ProgressCircular-Dm76i-ei.js";import"./sort-descending-OBAQsHI9.js";import"./IconButton-zwf3qVx9.js";import"./Menu-CU8ixYLE.js";import"./useControl-CS-bltOB.js";import"./Divider-BMuu4i8A.js";import"./list-B1zo5gaH.js";import"./new-tab-WxcYfP2Y.js";import"./Skeleton-DC7wVjwf.js";import"./Popover-CD-kPJqZ.js";import"./padding-BXgzSss2.js";import"./TextField-ID03Gn3a.js";import"./useValueControl-BSJFleLi.js";import"./error-DwsaS794.js";import"./InputButton-D_n0MlAo.js";import"./useFieldProps-BTIA5NzZ.js";import"./useFieldAriaProps-Ctj7S-QK.js";import"./Field-DJxPk6rG.js";import"./FieldLabel-CwYUiiFr.js";import"./info-DM6050LP.js";import"./InfoTooltipPrimitive-HCfeTcaQ.js";import"./HelperText-Bw9VVLAT.js";import"./Checkbox-V5fI8Yve.js";import"./List-BKWt4BD6.js";import"./useListGesture-CpxhX8BH.js";import"./Radio-CsblJSff.js";import"./show-OD0q4moC.js";import"./Message-DStVeNgc.js";import"./ProgressBar-GO4kVXd6.js";import"./entity-BOlBRSsi.js";import"./edit-PEgxvuNP.js";import"./map-d8AgHSnc.js";import"./warning-CAFk7pxH.js";import"./index-BwVBT_Aw.js";import"./SelectComposition-jF7Zv2uF.js";import"./TagGroup-CvMtNFQT.js";import"./Tag-n2PVbDmU.js";import"./TextOverflow-BrM9-ZKJ.js";import"./useHasOverflow-Bo6hxDeF.js";import"./add-phUaYqr2.js";import"./close-Bbk9t1FU.js";import"./AlertInline-CMKa7hjh.js";import"./SeverityIcon-Btk8aNwb.js";import"./FloatingWrapper-97ZbCiI4.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Table/Docs/Getting Started"}),`
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
