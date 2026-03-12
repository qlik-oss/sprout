import{j as e,M as r}from"./iframe-DuYosUFD.js";import{useMDXComponents as o}from"./index-6fjbDpXn.js";import"./preload-helper-PPVm8Dsz.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"hooks/useId"}),`
`,e.jsx(n.h1,{id:"useid",children:"useId"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useId"}),` hook allows you to generate unique IDs for your React components.
This is particularly useful for accessibility purposes, such as linking form elements with their labels.`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useId"})," accept an optional id string as parameter. It returns a unique id string:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { useId } from "@qlik/sprout-react-hooks";

function MyComponent({id?: string, ...props}) {
  const safeId = useId(id);
  return <div id={safeId} {...props} />;
};
`})})]})}function a(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{a as default};
