import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{Playground as c,n as l,t as u}from"./AlertInline.stories-B0oc8QjD.js";function d(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Trigger/AlertInline`,of:u}),`
`,(0,p.jsx)(n.h1,{id:`alertinline`,children:`AlertInline`}),`
`,(0,p.jsx)(n.p,{children:`Alerts are short messages that shows feedback, information, warnings, or critical errors.`}),`
`,(0,p.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-jsx`,children:`import { AlertInline } from "@qlik/sprout-react";

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
`,(0,p.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(n.p,{children:[`This component use a `,(0,p.jsx)(n.code,{children:`div`}),` html tag with the `,(0,p.jsx)(n.code,{children:`role=status`}),` and `,(0,p.jsx)(n.code,{children:`aria-live="polite"`}),` attribute to announce the alert to screen readers.
You can switch to a alert by overriding those two properties like this:`]}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`<AlertInline
  role="alert"
  aria-live="assertive"
  severity="error"
  content="Urgent alert"
/>
`})})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),s(),i(),l()}))();export{f as default};