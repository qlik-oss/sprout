import{j as e,M as r}from"./iframe-D-N3fK2j.js";import{useMDXComponents as t}from"./index-BvagnWFp.js";import"./preload-helper-PPVm8Dsz.js";function o(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"hooks/useId"}),`
`,e.jsx(n.h1,{id:"useid",children:"useId"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useId"}),` hook allows you to generate unique IDs for your React components.
This is particularly useful for accessibility purposes, such as linking form elements with their labels.`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useId"})," accept an optional id string as parameter. It returns a unique id string:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { useId } from "@qlik/sprout-hooks";

function MyComponent({id?: string, ...props}) {
  const safeId = useId(id);
  return <div id={safeId} {...props} />;
};
`})})]})}function a(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{a as default};
