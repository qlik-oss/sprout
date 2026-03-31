import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{t as c}from"./DataTable.stories-BafCGHBW.js";import{GettingStarted as l,Playground as u,t as d}from"./ListTable.stories-yabvCW8q.js";function f(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{title:`table/Getting Started`}),`
`,(0,m.jsx)(n.h1,{id:`getting-started`,children:`Getting Started`}),`
`,(0,m.jsx)(n.p,{children:`Welcome to the Sprout CSS Table documentation.
Once your React app is ready, you can add the following dependencies:`}),`
`,(0,m.jsx)(n.h2,{id:`installation`,children:`Installation`}),`
`,(0,m.jsxs)(n.p,{children:[`Install the package using your preferred package manager. For example, if you are using `,(0,m.jsx)(n.code,{children:`pnpm`}),`, run:`]}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-bash`,children:`pnpm i @qlik/sprout-react-table
`})}),`
`,(0,m.jsx)(n.h2,{id:`importing-components`,children:`Importing Components`}),`
`,(0,m.jsxs)(n.p,{children:[`You can import the components in any `,(0,m.jsx)(n.code,{children:`tsx`}),` file like this:`]}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-react-table";
`})}),`
`,(0,m.jsx)(n.h2,{id:`define-rows`,children:`Define rows`}),`
`,(0,m.jsxs)(n.p,{children:[`Each row in DataTable and ListTable is an object with key-value pairs that correspond to the column and its value.
In ListTable and DataTable we named it as `,(0,m.jsx)(n.code,{children:`rows`}),`.`]}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`type MyObject = {
  id: number;
  name: string;
  description: string;
};

const rows: MyObject[] = [
  { id: 1, name: "Qlik Cloud Analytics", description: "Uncover insights" },
  { id: 2, name: "Qlik Talend Cloud", description: "Deliver trusted data" },
  {
    id: 3,
    name: "Talend Data Fabric",
    description: "Unify, integrate and govern disparate data environments",
  },
  {
    id: 4,
    name: "Qlik Sense (on-prem)",
    description: "Seamless integration of data from multiple systems",
  },
  {
    id: 5,
    name: "Qlik Replicate",
    description: "Accelerate data ingestion and streaming",
  },
  {
    id: 6,
    name: "Qlik Answers",
    description: "Gen-AI driven answers from unstructured content",
  },
];
`})}),`
`,(0,m.jsx)(n.h2,{id:`define-columns`,children:`Define columns`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { type ColumnDef } from "@qlik/sprout-react-table";

const columns: ColumnDef<MyObject>[] = [
  { field: "name", headerName: "Product Name", width: 200 },
  { field: "description", headerName: "Description", width: 300 },
];
`})}),`
`,(0,m.jsx)(n.h2,{id:`render-the-component`,children:`Render the component`}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,m.jsx)(r,{of:u})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=n(),s(),i(),c(),d()}))();export{p as default};