import{j as t,M as n,C as a}from"./iframe-qjjAf_pH.js";import{useMDXComponents as r}from"./index-BAT7sozL.js";import{S as m,E as s}from"./AlertModal.stories-BwvovGHE.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-8C4sGvxY.js";import"./Tooltip-DvaPb59I.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CXS0BGZe.js";import"./useId-CYaNFQmj.js";import"./classNames-BVAN1ZTN.js";import"./sprout-Dvd5rbSu.js";import"./useI18n-DleVkSsM.js";import"./Button-cYFf5aNk.js";import"./icons-5qhXnzWI.js";import"./Button.module-C2ELNEem.js";import"./Badge-CvmwyUY9.js";import"./ProgressCircular-BSs6AknY.js";import"./Close-Bp7FqXQR.js";import"./InfoTooltipPrimitive-CrOtV9y3.js";import"./Info-DxHQkaw3.js";import"./IconButton-DKYxz8uh.js";import"./useHasOverflow-B98-wlZO.js";import"./Divider-Cf0WguxB.js";import"./Dialog-H_IAXiyp.js";import"./useControl-BNhHN6uq.js";import"./Modal.argTypes-JaUQVUSU.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-Blxgg6XZ.js";import"./index-BFR_pwzS.js";import"./Add-DSLcMkbC.js";import"./Next-CxhzuVxv.js";import"./Bookmark-BNRO0aS9.js";import"./Upload-CL9H6pmE.js";import"./Text-B-zga3pP.js";import"./SortDescending-C3dNRiBL.js";import"./Undo-Dsdksioz.js";import"./Person-BIgNV-Ed.js";import"./Copy-BTa2KiQL.js";import"./Delete-BwmiKOHh.js";import"./Filter-hx7yX_Jo.js";import"./Edit-2pD94UJo.js";import"./Error-BrLGh9jC.js";import"./GenerateWithAi-f8_0IRx5.js";import"./History-atzo0mXc.js";import"./Search-DWresNZR.js";import"./Subtract-CBZN_Qgc.js";import"./Map-in9fWS3M.js";import"./NewTab-CYZ0jhBQ.js";import"./Notification-Dtb2E571.js";import"./Paste-Qm0zT67Y.js";import"./Warning-CuGLZChC.js";import"./Tenant-oJlxY9e2.js";import"./SeverityIcon-DTXO1k7w.js";function e(i){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/AlertModal",of:m}),`
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
