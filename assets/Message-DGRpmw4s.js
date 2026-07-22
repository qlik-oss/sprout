import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{i as n,l as r,n as i,p as a,s as o}from"./iframe-UwarwtgL.js";import{t as s}from"./mdx-react-shim-DbLuWb1F.js";import{Playground as c,n as l,t as u}from"./Message.stories-DxYIudlY.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...a(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Message`,of:u}),`
`,(0,p.jsx)(t.h1,{id:`message`,children:`Message`}),`
`,(0,p.jsx)(t.p,{children:`A Message component displays onboarding messaging or guided messages in content areas. Typically used for empty states.`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`// if you want the field
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
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(t.p,{children:[`Simple `,(0,p.jsx)(t.code,{children:`div`}),` with no special accessibility requirements by default.
If `,(0,p.jsx)(t.code,{children:`progress`}),` property is given it will add `,(0,p.jsx)(t.code,{children:`role="status"`}),` and `,(0,p.jsx)(t.code,{children:`aria-live="polite"`}),` to the message div container.`]})]})}function f(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),r(),l()}))();export{f as default};