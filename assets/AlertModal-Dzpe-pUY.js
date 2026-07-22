import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{i as n,l as r,p as i,s as a}from"./iframe-UwarwtgL.js";import{t as o}from"./mdx-react-shim-DbLuWb1F.js";import{ErrorVariant as s,n as c,t as l}from"./AlertModal.stories-RkumZHsp.js";function u(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{title:`Components/AlertModal`,of:l}),`
`,(0,f.jsx)(t.h1,{id:`alertmodal`,children:`AlertModal`}),`
`,(0,f.jsx)(t.p,{children:`Alert modals are a type of pop-up dialog used to grab the user's attention and communicate important information that requires immediate acknowledgment or action. These modals temporarily interrupt the user's workflow, making them an effective tool for delivering critical alerts, warnings, or confirmations. Designed to be visually prominent and concise, alert modals often include clear messaging and actionable buttons to guide the user in responding appropriately. Due to their disruptive nature, they should be used sparingly and only for high-priority communications that cannot be conveyed effectively through less intrusive means.`}),`
`,(0,f.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-jsx`,children:`import { useState } from "react";

import { AlertModal, Button } from "@qlik/sprout-react";

const [open, setOpen] = useState(false);

<AlertModal
  visible={open}
  onClose={() => setOpen(false)}
  title="Alert Title"
  children="This is an important alert message."
  details={<div>Additional details can go here.</div>}
  variant="error"
  footerRight={
    <>
      <Button label="Cancel" variant="quiet" />
      <Button label="Continue" variant="default" />
    </>
  }
/>;
`})}),`
`,(0,f.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,f.jsx)(n,{of:s}),`
`,(0,f.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,f.jsxs)(t.p,{children:[`See the `,(0,f.jsx)(t.a,{href:`/docs/components-modal--docs#accessibility`,children:`Modal`}),` documentation for more information.`]})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),o(),r(),c()}))();export{d as default};