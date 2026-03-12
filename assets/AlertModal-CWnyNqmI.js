import{j as t,M as n,C as m}from"./iframe-ZO3EpHUh.js";import{useMDXComponents as e}from"./index-BuQoUgKa.js";import{S as a,E as p}from"./AlertModal.stories-WBMU9e5E.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-BSsi77Sv.js";import"./Tooltip-CjNQJJZv.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-CTOYJqpW.js";import"./useId-peRdP77j.js";import"./classNames--9J8KLdq.js";import"./sprout-JWClaPEx.js";import"./useI18n-CNj_Vmmx.js";import"./Button-DwNMLHHD.js";import"./Button.module-CmtyAZAy.js";import"./common-bQH3ZR03.js";import"./Badge-CIU99cFr.js";import"./ProgressCircular-Bbm1pjbl.js";import"./close-CFDHWYro.js";import"./move-left-CblN84mj.js";import"./InfoTooltipPrimitive-CX2r-Osw.js";import"./info-DvsPKJb0.js";import"./IconButton-CM9e8KDm.js";import"./useHasOverflow-b7ARuLn8.js";import"./Divider-Bbj5__gU.js";import"./Dialog-CWdxBo8Y.js";import"./useControl-B2Bmxigf.js";import"./Modal.argTypes-XRb4ppuT.js";import"./Icons-BZbU0tdy.js";import"./index-jgDKZr1Q.js";import"./add-DMALUOT2.js";import"./move-right-0KirwidR.js";import"./bookmark-9oZ8n8m5.js";import"./text-CcDxx1vh.js";import"./upload-n0dw6Lvi.js";import"./sort-descending-DuwJD51Q.js";import"./undo-BAeS--dQ.js";import"./settings-DHuZ5QaZ.js";import"./copy-IFVMzOQk.js";import"./delete-B7ujbQKr.js";import"./documentation-BinzBdHI.js";import"./edit-BH8KrMyX.js";import"./error-Lg61ZlTl.js";import"./favorited-D41QBsE5.js";import"./generate-with-ai-D3Na992K.js";import"./subtract-1H6W3dfs.js";import"./hide-CTXMH0dL.js";import"./history-D4JWxRxn.js";import"./search-D8g2pafp.js";import"./person-Dece0dLK.js";import"./map-CMc8fJla.js";import"./more-vertical-D3wa18aZ.js";import"./new-tab-CfvnCP2A.js";import"./notification-BwvpND0x.js";import"./paste-DoYSMiJq.js";import"./show-Do692Dy4.js";import"./warning-LAozOqxS.js";import"./tenant-1icmyCcT.js";import"./Field.argTypes-1rEre7SB.js";import"./SeverityIcon-DTHCWEmM.js";function r(i){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/AlertModal",of:a}),`
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
`,t.jsx(m,{of:p}),`
`,t.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsxs(o.p,{children:["See the ",t.jsx(o.a,{href:"/docs/components-modal--docs#accessibility",children:"Modal"})," documentation for more information."]})]})}function ht(i={}){const{wrapper:o}={...e(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(r,{...i})}):r(i)}export{ht as default};
