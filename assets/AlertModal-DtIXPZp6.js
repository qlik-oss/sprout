import{j as t,M as n,C as a}from"./iframe-B4-nXs83.js";import{useMDXComponents as r}from"./index-BqykRLmO.js";import{S as m,E as s}from"./AlertModal.stories-DuIQ661-.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-ty0zhNW5.js";import"./Tooltip-BmEIvhna.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CKYJ27w7.js";import"./useId-D71ehFqY.js";import"./classNames-eIMwhIDK.js";import"./sprout-SOoz1jzb.js";import"./useI18n-peGtGOOS.js";import"./Button-Cv6yFaKa.js";import"./icons-DuVV-LnW.js";import"./Button.module-C2ELNEem.js";import"./Badge-DvRPOsa9.js";import"./ProgressCircular-CVxkPa9h.js";import"./Close-BgZ1uSF_.js";import"./InfoTooltipPrimitive-D8jVv135.js";import"./Info-DTuI-Of7.js";import"./IconButton-D-KEKYAI.js";import"./useHasOverflow-DZlgyJuB.js";import"./Divider-DdqecLrr.js";import"./Dialog-DHxW9vdp.js";import"./useControl-DdRfwf_0.js";import"./Modal.argTypes-BepMV5Qc.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-DeygH5Zz.js";import"./index-DD81b0jm.js";import"./Add-BPhJi-H4.js";import"./Next-BDMe8uha.js";import"./Bookmark-DcjvKNmY.js";import"./Upload-BRvcNbMW.js";import"./Text-dLWgk66T.js";import"./SortDescending-CKWll_c0.js";import"./Undo-DDEyeJBa.js";import"./Person-BtJ6dcuR.js";import"./Copy-DgfNcGoS.js";import"./Delete-D5Va6LI1.js";import"./Filter-DrTBmiDb.js";import"./Edit-DzJTkpRk.js";import"./Error-D7GK58M_.js";import"./GenerateWithAi-s4i5IFD7.js";import"./History-rKaZ75zu.js";import"./Search-Ci5Kqw6S.js";import"./Subtract-5iLtEsER.js";import"./Map-D3Po8JT9.js";import"./NewTab-Bx55GzRW.js";import"./Notification-BWSivEeO.js";import"./Paste-bE7IXLRc.js";import"./Warning-BAtVE0v3.js";import"./Tenant-Y0aD2fSL.js";import"./SeverityIcon-B1n60lm3.js";function e(i){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/AlertModal",of:m}),`
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
