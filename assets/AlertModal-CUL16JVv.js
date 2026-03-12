import{j as t,M as n,C as m}from"./iframe-Bp0nu8X6.js";import{useMDXComponents as e}from"./index-CC_VpkT-.js";import{S as a,E as p}from"./AlertModal.stories-DB6kgrp7.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-cyv_U4YR.js";import"./Tooltip-B3oqGcOh.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-D5e_-V2O.js";import"./useId-C38y77Da.js";import"./classNames-BUd7eP-S.js";import"./sprout-rpr_484f.js";import"./useI18n-D2jaKmf9.js";import"./Button-CBkOB6z4.js";import"./Button.module-BRCMjQTg.js";import"./common-bQH3ZR03.js";import"./Badge-Br2oOa7d.js";import"./ProgressCircular-DO25q9z0.js";import"./close-CJ5Ns5F2.js";import"./move-left-CfXNAwsO.js";import"./InfoTooltipPrimitive-C8AQG5h1.js";import"./info-DGMlSu_6.js";import"./IconButton-Bu152FGZ.js";import"./useHasOverflow-BYHEzBW0.js";import"./Divider-B3J7iNd7.js";import"./Dialog-Cr5lw4sh.js";import"./useControl-CS67YHbK.js";import"./Modal.argTypes-CubNIYw6.js";import"./Icons-DjXICJaU.js";import"./index-ebX9fmIs.js";import"./add-DiIoSsfz.js";import"./move-right-CK_WVS8x.js";import"./bookmark-BjcmHdPC.js";import"./text-CczEg3TU.js";import"./upload-8H-KEWMp.js";import"./sort-descending-Denwaaa7.js";import"./undo-DC82ZJyQ.js";import"./settings-AJKzQdc1.js";import"./copy-BYWkoi5_.js";import"./delete-CSyzwOk8.js";import"./documentation-6ghMNW6p.js";import"./edit-Dwo3NC30.js";import"./error-BcSU3HuT.js";import"./favorited-xiONJzzc.js";import"./generate-with-ai-BLISbXKJ.js";import"./subtract-Co-tykP9.js";import"./hide-DryimjwN.js";import"./history-Ddui-ZW8.js";import"./search-DYca-rrs.js";import"./person-lmjX5hbo.js";import"./map-BFrox4w-.js";import"./more-vertical-gmqyBEHm.js";import"./new-tab-uRDDQ1v4.js";import"./notification-Ah1qGB0i.js";import"./paste-By_tHdXO.js";import"./show-BUDxgafp.js";import"./warning-CT_3wb2_.js";import"./tenant-5cFbeFqF.js";import"./Field.argTypes-1rEre7SB.js";import"./SeverityIcon-CBpxoadr.js";function r(i){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/AlertModal",of:a}),`
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
