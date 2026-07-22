import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{l as n,p as r,s as i}from"./iframe-UwarwtgL.js";import{t as a}from"./mdx-react-shim-DbLuWb1F.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...r(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`hooks/useId`}),`
`,(0,c.jsx)(t.h1,{id:`useid`,children:`useId`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`useId`}),` hook allows you to generate unique IDs for your React components.
This is particularly useful for accessibility purposes, such as linking form elements with their labels.`]}),`
`,(0,c.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`useId`}),` accept an optional id string as parameter. It returns a unique id string:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`import { useId } from "@qlik/sprout-react-hooks";

function MyComponent({id?: string, ...props}) {
  const safeId = useId(id);
  return <div id={safeId} {...props} />;
};
`})})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),n()}))();export{s as default};