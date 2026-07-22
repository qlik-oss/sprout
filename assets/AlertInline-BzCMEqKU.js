import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{i as n,l as r,n as i,p as a,s as o}from"./iframe-UwarwtgL.js";import{t as s}from"./mdx-react-shim-DbLuWb1F.js";import{Playground as c,n as l,t as u}from"./AlertInline.stories-DYFd5HyW.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...a(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Trigger/AlertInline`,of:u}),`
`,(0,p.jsx)(t.h1,{id:`alertinline`,children:`AlertInline`}),`
`,(0,p.jsx)(t.p,{children:`Alerts are short messages that shows feedback, information, warnings, or critical errors.`}),`
`,(0,p.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-jsx`,children:`import { AlertInline } from "@qlik/sprout-react";

<AlertInline
  severity="info"
  title="Title"
  // onDismiss handler trigger the display of the dismiss button
  onDismiss={() => console.log("Dismissed")}
  actionBar={<Button variant="primary" label="Label" />}
>
  <p>Structured text but up to you to style it</p>
</AlertInline>;

<AlertInline
  severity="info"
  title="Title"
  layout="horizontal"
  onDismiss={() => console.log("Dismissed")}
  actionBar={
    <>
      <Button variant="default" label="Learn more" />
      <Link isExternal>Link</Link>
    </>
  }
>
  <p>Structured text but up to you to style it</p>
</AlertInline>;
`})}),`
`,(0,p.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(t.p,{children:[`This component use a `,(0,p.jsx)(t.code,{children:`div`}),` html tag with the `,(0,p.jsx)(t.code,{children:`role=status`}),` and `,(0,p.jsx)(t.code,{children:`aria-live="polite"`}),` attribute to announce the alert to screen readers.
You can switch to a alert by overriding those two properties like this:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<AlertInline
  role="alert"
  aria-live="assertive"
  severity="error"
  content="Urgent alert"
/>
`})})]})}function f(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),r(),l()}))();export{f as default};