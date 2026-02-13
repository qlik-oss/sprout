import{j as t,M as n,C as a}from"./iframe-D-N3fK2j.js";import{useMDXComponents as r}from"./index-BvagnWFp.js";import{S as m,E as s}from"./AlertModal.stories-COK9wqMb.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-sxroFnBs.js";import"./Tooltip-DaX3jRge.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-25h2pNOO.js";import"./useId-Bkl3iN6O.js";import"./classNames-CrSIhzis.js";import"./sprout-UDo5dA_z.js";import"./useI18n-ClHBar3-.js";import"./Button-BiiNVP7I.js";import"./icons-BEmnCRju.js";import"./Button.module-CmdpHks8.js";import"./Badge-sJnchsAW.js";import"./ProgressCircular-CdUDfayh.js";import"./Close-Clva93gw.js";import"./InfoTooltipPrimitive-C8Uq1qY7.js";import"./Info-DKfyJpi1.js";import"./IconButton-Dg4ysz4Z.js";import"./useHasOverflow-BWQUK3f5.js";import"./Divider-Aa9jm5B9.js";import"./Dialog-CiRpLpyf.js";import"./useControl-U-WkQj2I.js";import"./Modal.argTypes-BODzkP4Z.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-CGLv6dp6.js";import"./index-83n1lJXs.js";import"./Add-DHz0bRTt.js";import"./Next-DG_ldtCu.js";import"./Bookmark-Dg1w8U2T.js";import"./Upload-ClDjPMMt.js";import"./Text-Bpm64yqp.js";import"./SortDescending-7Is3TCUG.js";import"./Undo-Jt2aGM_z.js";import"./Person-C2Clk1QX.js";import"./Copy-DXsZFzm1.js";import"./Delete-o_szjHTs.js";import"./Filter-DXj_kdvE.js";import"./Edit-69Qgo7Td.js";import"./Error-CZbJtLWx.js";import"./GenerateWithAi-B8C8zDdl.js";import"./History-CQ5KoKvO.js";import"./Search-BEJfw-uV.js";import"./Subtract-DrooAXHe.js";import"./Map-DsyJdFaB.js";import"./NewTab-DIWrR844.js";import"./Notification-CjmHr3yB.js";import"./Paste-B-RxeU6b.js";import"./Warning-Dy5sqdbk.js";import"./Tenant-BSwEMVQe.js";import"./SeverityIcon-DDEIToER.js";function e(i){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/AlertModal",of:m}),`
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
`,t.jsxs(o.p,{children:["See the ",t.jsx(o.a,{href:"/docs/components-modal--docs#accessibility",children:"Modal"})," documentation for more information."]})]})}function st(i={}){const{wrapper:o}={...r(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(e,{...i})}):e(i)}export{st as default};
