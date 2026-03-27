import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-B5xoaqtW.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Playground as a,t as o}from"./AlertBanner.stories-QNvaU-ct.js";var s=e();function c(e){let c={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Components/AlertBanner`,of:o}),`
`,(0,s.jsx)(c.h1,{id:`alertbanner`,children:`AlertBanner`}),`
`,(0,s.jsx)(c.p,{children:`Alerts are short messages that shows feedback, information, warnings, or critical errors.`}),`
`,(0,s.jsx)(c.h2,{id:`usage`,children:`Usage`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import {
  AlertBanner,
  type AlertBannerProps,
} from "@qlik/sprout-react";

<AlertBanner
  variant="info"
  content="Alert content"
  onClickDismiss={() => {}}
  action={<></>}
/>;
`})}),`
`,(0,s.jsx)(c.h2,{id:`properties`,children:`Properties`}),`
`,(0,s.jsx)(n,{of:a}),`
`,(0,s.jsx)(t,{of:a}),`
`,(0,s.jsx)(c.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,s.jsxs)(c.p,{children:[`This component use a `,(0,s.jsx)(c.code,{children:`div`}),` html tag with the `,(0,s.jsx)(c.code,{children:`role=status`}),` and `,(0,s.jsx)(c.code,{children:`aria-live="polite"`}),` attribute to announce the alert to screen readers.
You can switch to a real alert by overriding those two properties like this:`]}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`<AlertBanner
  role="alert"
  aria-live="assertive"
  variant="error"
  content="Urgent alert"
/>
`})})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};