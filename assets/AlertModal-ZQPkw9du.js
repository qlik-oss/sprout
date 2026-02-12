import{j as t,M as n,C as a}from"./iframe-B4Gn7jRD.js";import{useMDXComponents as r}from"./index-BtGsBDbQ.js";import{S as m,E as s}from"./AlertModal.stories-7wg50iy5.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-CMui8VoY.js";import"./Tooltip-BG958zrQ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-COCCCrf6.js";import"./useId-DXegRsHP.js";import"./classNames-CTBLippR.js";import"./sprout-CWCWYkgH.js";import"./useI18n-DOe-EdfE.js";import"./Button-DuNeVE70.js";import"./icons-CPBvMsVh.js";import"./Button.module-C2ELNEem.js";import"./Badge-CknI2ibL.js";import"./ProgressCircular-C_VqfatA.js";import"./Close-DbHLglso.js";import"./InfoTooltipPrimitive-YcCF56yH.js";import"./Info-C0xP7z1J.js";import"./IconButton-CoZ792nv.js";import"./useHasOverflow-B8tWSk8V.js";import"./Divider-OzvHaalV.js";import"./Dialog-D8rWnwN7.js";import"./useControl-7TH6mjrF.js";import"./Modal.argTypes-Dxw18voe.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-Cn4ElvJa.js";import"./index-9KegtbkR.js";import"./Add-CKNXHNSz.js";import"./Next-C0judd8d.js";import"./Bookmark-CKHX2VYo.js";import"./Upload-BAurdPXS.js";import"./Text-BW23LcKZ.js";import"./SortDescending-CucUSsiY.js";import"./Undo-DLO9n_h1.js";import"./Person-CNI9Q8fr.js";import"./Copy-NISNc1Lm.js";import"./Delete-fA9YqxRL.js";import"./Filter-khtwO5TH.js";import"./Edit-BJvse-oo.js";import"./Error-ClTRWykU.js";import"./GenerateWithAi-C6A5sahu.js";import"./History-CgCTywjh.js";import"./Search-DN4_Th9X.js";import"./Subtract-BjFnpmMb.js";import"./Map-DeFMr3_u.js";import"./NewTab-BFfS-RhS.js";import"./Notification-CGfvhvJZ.js";import"./Paste-DGzyaON5.js";import"./Warning-BFJpCY38.js";import"./Tenant-D8URuGVO.js";import"./SeverityIcon-CafQc9yX.js";function e(i){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/AlertModal",of:m}),`
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
