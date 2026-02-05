import{j as t,M as n,C as a}from"./iframe-BThSoDrn.js";import{useMDXComponents as r}from"./index-dxYskzg-.js";import{S as m,E as s}from"./AlertModal.stories-DA_qKVQQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-CGO76POR.js";import"./Tooltip-g36jqBzQ.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DhaNE9oh.js";import"./useId-hgAQXGHZ.js";import"./classNames-dIthk07I.js";import"./sprout-C7A3N88C.js";import"./useI18n-DEBX20KE.js";import"./Button-DPdoSvtR.js";import"./icons-m7QrAy0p.js";import"./Button.module-C2ELNEem.js";import"./Badge-BD7yv9SE.js";import"./ProgressCircular-3frmJwTX.js";import"./Close-jEAlxUHo.js";import"./InfoTooltipPrimitive-DKXNBt4b.js";import"./Info-CD_iaTpZ.js";import"./IconButton-BNf-P6Px.js";import"./useHasOverflow-ChjOj1VO.js";import"./Divider-BDGjRrdZ.js";import"./Dialog-0SPgUO0Y.js";import"./useControl-BsRaFebD.js";import"./Modal.argTypes-PHwFRRg1.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-4m1Sc84h.js";import"./Add-BQFdkl2e.js";import"./AiSparkles-CmZ_srcr.js";import"./Next-1Q1bqM5p.js";import"./Bookmark-CVLzqLqN.js";import"./Upload-Bm4njtlo.js";import"./Text-6G8hA-h1.js";import"./SortDescending-DRIoVd-M.js";import"./Undo-WuNimhT1.js";import"./Person-3cl35KlB.js";import"./Copy-jAGX-G5W.js";import"./Delete-BwyAIRQQ.js";import"./Filter-DiKfENlM.js";import"./Edit-BnWU-wtK.js";import"./Error-LWra2rFD.js";import"./History-BWwEcsLz.js";import"./Search-c6Wqd6yN.js";import"./Subtract-CRNAvJ2c.js";import"./Map-BSYcvYLi.js";import"./NewTab-RTkCp496.js";import"./Notification-D5_SHIKo.js";import"./Paste-CF9HfvBI.js";import"./Warning-BKQeZIO5.js";import"./Tenant-DemsO5Qk.js";import"./SeverityIcon-CDrAKmG1.js";function i(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/AlertModal",of:m}),`
`,t.jsx(o.h1,{id:"alertmodal",children:"AlertModal"}),`
`,t.jsx(o.p,{children:"Alert modals are a type of pop-up dialog used to grab the user's attention and communicate important information that requires immediate acknowledgment or action. These modals temporarily interrupt the user's workflow, making them an effective tool for delivering critical alerts, warnings, or confirmations. Designed to be visually prominent and concise, alert modals often include clear messaging and actionable buttons to guide the user in responding appropriately. Due to their disruptive nature, they should be used sparingly and only for high-priority communications that cannot be conveyed effectively through less intrusive means."}),`
`,t.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`import { useState } from "react";

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
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(a,{of:s}),`
`,t.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsxs(o.p,{children:["See the ",t.jsx(o.a,{href:"/docs/components-modal--docs#accessibility",children:"Modal"})," documentation for more information."]})]})}function mt(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{mt as default};
