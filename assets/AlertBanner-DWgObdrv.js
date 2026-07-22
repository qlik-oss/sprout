import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,i as n,l as r,n as i}from"./blocks-CCeqoOOO.js";import{t as a}from"./jsx-runtime-Bq1bXGty.js";import{i as o}from"./react-BnCtKaSV.js";import{t as s}from"./mdx-react-shim-9RzcSRdq.js";import{Playground as c,n as l,t as u}from"./AlertBanner.stories-DRDKceJW.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...o(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{title:`Components/AlertBanner`,of:u}),`
`,(0,p.jsx)(t.h1,{id:`alertbanner`,children:`AlertBanner`}),`
`,(0,p.jsx)(t.p,{children:`Alerts are short messages that shows feedback, information, warnings, or critical errors.`}),`
`,(0,p.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { AlertBanner, type AlertBannerProps } from "@qlik/sprout-react";

<AlertBanner
  variant="info"
  content="Alert content"
  onClickDismiss={() => {}}
  action={<></>}
/>;
`})}),`
`,(0,p.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(t.p,{children:[`This component use a `,(0,p.jsx)(t.code,{children:`div`}),` html tag with the `,(0,p.jsx)(t.code,{children:`role=status`}),` and `,(0,p.jsx)(t.code,{children:`aria-live="polite"`}),` attribute to announce the alert to screen readers.
You can switch to a real alert by overriding those two properties like this:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<AlertBanner
  role="alert"
  aria-live="assertive"
  variant="error"
  content="Urgent alert"
/>
`})})]})}function f(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=a(),s(),t(),l()}))();export{f as default};