import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,s as n}from"./iframe-BRSAI4nO.js";import{n as r}from"./lib-EjdzwnHJ.js";import"./Icons-DoZ1c5fe.js";import"./Modal.argTypes-Bk8gtk-m.js";import{ErrorVariant as i,t as a}from"./AlertModal.stories-CIW4Pm-H.js";var o=e();function s(e){let s={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{title:`Components/AlertModal`,of:a}),`
`,(0,o.jsx)(s.h1,{id:`alertmodal`,children:`AlertModal`}),`
`,(0,o.jsx)(s.p,{children:`Alert modals are a type of pop-up dialog used to grab the user's attention and communicate important information that requires immediate acknowledgment or action. These modals temporarily interrupt the user's workflow, making them an effective tool for delivering critical alerts, warnings, or confirmations. Designed to be visually prominent and concise, alert modals often include clear messaging and actionable buttons to guide the user in responding appropriately. Due to their disruptive nature, they should be used sparingly and only for high-priority communications that cannot be conveyed effectively through less intrusive means.`}),`
`,(0,o.jsx)(s.h2,{id:`usage`,children:`Usage`}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-jsx`,children:`import { useState } from "react";

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
`,(0,o.jsx)(s.h2,{id:`properties`,children:`Properties`}),`
`,(0,o.jsx)(t,{of:i}),`
`,(0,o.jsx)(s.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,o.jsxs)(s.p,{children:[`See the `,(0,o.jsx)(s.a,{href:`/docs/components-modal--docs#accessibility`,children:`Modal`}),` documentation for more information.`]})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}export{c as default};