import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-B5xoaqtW.js";import{n as i}from"./lib-EjdzwnHJ.js";import"./lib-BqyORzYB.js";import"./entity-BW1wQ0_F.js";import{GettingStarted as a,Playground as o}from"./ListTable.stories-UKG8RqLs.js";import"./DataTable.stories-DAkgWAkZ.js";var s=e();function c(e){let c={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Table/Docs/Getting Started`}),`
`,(0,s.jsx)(c.h1,{id:`getting-started`,children:`Getting Started`}),`
`,(0,s.jsx)(c.p,{children:`Welcome to the Sprout CSS Table documentation.
Once your React app is ready, you can add the following dependencies:`}),`
`,(0,s.jsx)(c.h2,{id:`installation`,children:`Installation`}),`
`,(0,s.jsxs)(c.p,{children:[`Install the package using your preferred package manager. For example, if you are using `,(0,s.jsx)(c.code,{children:`pnpm`}),`, run:`]}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-bash`,children:`pnpm i @qlik/sprout-table
`})}),`
`,(0,s.jsx)(c.h2,{id:`importing-components`,children:`Importing Components`}),`
`,(0,s.jsxs)(c.p,{children:[`You can import the components in any `,(0,s.jsx)(c.code,{children:`tsx`}),` file like this:`]}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-table";
`})}),`
`,(0,s.jsx)(c.h2,{id:`define-rows`,children:`Define rows`}),`
`,(0,s.jsxs)(c.p,{children:[`Each row in DataTable and ListTable is an object with key-value pairs that correspond to the column and its value.
In ListTable and DataTable we named it as `,(0,s.jsx)(c.code,{children:`rows`}),`.`]}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`type MyObject = {
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
`,(0,s.jsx)(c.h2,{id:`define-columns`,children:`Define columns`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { type ColumnDef } from "@qlik/sprout-table";

const columns: ColumnDef<MyObject>[] = [
  { field: "name", headerName: "Product Name", width: 200 },
  { field: "description", headerName: "Description", width: 300 },
];
`})}),`
`,(0,s.jsx)(c.h2,{id:`render-the-component`,children:`Render the component`}),`
`,(0,s.jsx)(n,{of:a}),`
`,(0,s.jsx)(c.h2,{id:`api`,children:`API`}),`
`,(0,s.jsx)(t,{of:o})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};