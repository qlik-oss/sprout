import{j as t,M as n,C as a}from"./iframe-CxjlquLv.js";import{useMDXComponents as r}from"./index-CopXJ1Hs.js";import{S as m,E as s}from"./AlertModal.stories-DJVfuKPh.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-CJwSuZ6u.js";import"./Tooltip-BF9waJvZ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BEoUSBug.js";import"./useId-BK-xxnhR.js";import"./classNames-OYhIMgh8.js";import"./sprout-BMjCkMv3.js";import"./useI18n-DzUau43H.js";import"./Button-DovarDo_.js";import"./icons-LhMznsFI.js";import"./Button.module-CmdpHks8.js";import"./Badge-CT3AYSwq.js";import"./ProgressCircular-54Bo0zt0.js";import"./Close-PE5EsNbf.js";import"./InfoTooltipPrimitive-e-SBoNBf.js";import"./Info-CmHBCOIz.js";import"./IconButton-Dn95SqkZ.js";import"./useHasOverflow-BuWth_t2.js";import"./Divider-7ZQA3_Ws.js";import"./Dialog-DrikC8ZT.js";import"./useControl-BQvv0ErP.js";import"./Modal.argTypes-BE83lBfo.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-DQbIzlC6.js";import"./index-CQX_9EpV.js";import"./Add-DmDJ4n-J.js";import"./Next-CVX7Uflh.js";import"./Bookmark-BfuinAGV.js";import"./Upload-DugaVjZ7.js";import"./Text-DQVBHukE.js";import"./SortDescending-mZ0sHp6G.js";import"./Undo-p2AAmykz.js";import"./Person-BchZ2R-s.js";import"./Copy-E7NdQvaj.js";import"./Delete-DRUG6ixk.js";import"./Filter-CNv6SvW2.js";import"./Edit-CBUd60Nh.js";import"./Error-Cwyymijo.js";import"./GenerateWithAi-D14jyyKQ.js";import"./History-CjSFFZ-w.js";import"./Search-BpoXSxFe.js";import"./Subtract-Cskw5IaI.js";import"./Map-BEEFfX2w.js";import"./NewTab-thqnkD83.js";import"./Notification-CoJL-wfE.js";import"./Paste-DbcEs-AL.js";import"./Warning-x2bCUA0M.js";import"./Tenant-BNPdNRwP.js";import"./SeverityIcon-BEUSi72k.js";function e(i){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/AlertModal",of:m}),`
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
