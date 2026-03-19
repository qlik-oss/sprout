import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{s as t}from"./iframe-DaKWDHAC.js";import{n}from"./lib-EjdzwnHJ.js";var r=e();function i(e){let i={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{title:`hooks/useId`}),`
`,(0,r.jsx)(i.h1,{id:`useid`,children:`useId`}),`
`,(0,r.jsxs)(i.p,{children:[`The `,(0,r.jsx)(i.code,{children:`useId`}),` hook allows you to generate unique IDs for your React components.
This is particularly useful for accessibility purposes, such as linking form elements with their labels.`]}),`
`,(0,r.jsx)(i.h2,{id:`api`,children:`API`}),`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:`useId`}),` accept an optional id string as parameter. It returns a unique id string:`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-ts`,children:`import { useId } from "@qlik/sprout-react-hooks";

function MyComponent({id?: string, ...props}) {
  const safeId = useId(id);
  return <div id={safeId} {...props} />;
};
`})})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};