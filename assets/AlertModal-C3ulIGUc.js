import{j as t,M as n,C as a}from"./iframe-DO7qjpir.js";import{useMDXComponents as r}from"./index-DM3CO3rl.js";import{S as m,E as s}from"./AlertModal.stories-BQfEtsRl.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-B2ljG3s9.js";import"./Tooltip-Bnp9G-JS.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-C_aUAXE9.js";import"./useId-B9UV2KOW.js";import"./classNames-C2xvgHQf.js";import"./sprout-nCaIAc8k.js";import"./useI18n-CbD-mhn-.js";import"./Button-DWGkri9_.js";import"./icons-B7D59aOJ.js";import"./Button.module-C2ELNEem.js";import"./Badge-BbHESnbh.js";import"./ProgressCircular-CpbimHqB.js";import"./Close-DVlpLiwK.js";import"./InfoTooltipPrimitive-CE8VNDL8.js";import"./Info-CoVbxZIf.js";import"./IconButton-GXyV3m9d.js";import"./useHasOverflow-CKe90G_4.js";import"./Divider-BpSmZpjh.js";import"./Dialog-B7jDT_Cn.js";import"./useControl-U2hc2GWS.js";import"./Modal.argTypes-BxjON4o7.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-BilGlRke.js";import"./index-CRIXUNi1.js";import"./Add-BuQFhIrq.js";import"./Next-G0qtg1LQ.js";import"./Bookmark-DZyQ0qgi.js";import"./Upload-Dm1uqGe9.js";import"./Text-DXgxZ7rl.js";import"./SortDescending-Bd_E1WmM.js";import"./Undo-CUmqfFkt.js";import"./Person-BjZlLNrQ.js";import"./Copy-ec0SasG8.js";import"./Delete-D4ge4hwa.js";import"./Filter-DBZqppq8.js";import"./Edit-CColNq1n.js";import"./Error-DM57iPud.js";import"./GenerateWithAi-Dv5-xc_y.js";import"./History-DHbq3km9.js";import"./Search-Bp2ziRFO.js";import"./Subtract-CzdmJ8_U.js";import"./Map-B14QatVO.js";import"./NewTab-DA06V-wx.js";import"./Notification-ClhJe7A6.js";import"./Paste-BgvLiWgU.js";import"./Warning-CK4OS6kN.js";import"./Tenant-i2cOSROQ.js";import"./SeverityIcon-Cv0Z9iw1.js";function e(i){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/AlertModal",of:m}),`
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
