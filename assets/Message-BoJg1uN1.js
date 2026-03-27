import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,i as r,l as i,n as a,s as o}from"./iframe-RiXBydPV.js";import{t as s}from"./mdx-react-shim-Cw1WyOhr.js";import{Playground as c,n as l,t as u}from"./Message.stories-CssVXNjQ.js";function d(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Message`,of:u}),`
`,(0,p.jsx)(n.h1,{id:`message`,children:`Message`}),`
`,(0,p.jsx)(n.p,{children:`A Message component displays onboarding messaging or guided messages in content areas. Typically used for empty states.`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`// if you want the field
import { Message } from "@qlik/sprout-react";

<Message
  illustration={<svg />}
  title="Message title"
  message="Curabitur sagittis ac felis tristique molestie. Nam non eros a magna tincidunt congue."
  progress={{ percent: 35, label: "Loading progress" }}
  actions={
    <>
      <Button variant="primary" label="Primary action" />
      <Button variant="quiet" label="Another action" />
    </>
  }
/>;
`})}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(n.p,{children:[`Simple `,(0,p.jsx)(n.code,{children:`div`}),` with no special accessibility requirements by default.
If `,(0,p.jsx)(n.code,{children:`progress`}),` property is given it will add `,(0,p.jsx)(n.code,{children:`role="status"`}),` and `,(0,p.jsx)(n.code,{children:`aria-live="polite"`}),` to the message div container.`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),s(),i(),l()}))();export{f as default};