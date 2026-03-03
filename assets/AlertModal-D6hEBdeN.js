import{j as t,M as n,C as m}from"./iframe-BM36tKY9.js";import{useMDXComponents as e}from"./index-BCPnpXol.js";import{S as a,E as p}from"./AlertModal.stories-BxTZy2r5.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-CiMv3oYT.js";import"./Tooltip-DOknWAYm.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-lrfYqLit.js";import"./useId-Cih_zwB8.js";import"./classNames-D2MVtjzd.js";import"./sprout-BcBmzfoy.js";import"./useI18n-BRpGJeHe.js";import"./Button-wScfBKxi.js";import"./Button.module-Bn-SZyJ6.js";import"./common-bQH3ZR03.js";import"./Badge-CjLUVOBS.js";import"./ProgressCircular-DoqAoY81.js";import"./close-CYEv2BwJ.js";import"./move-left-R6H6x7U2.js";import"./InfoTooltipPrimitive-B8ta45BR.js";import"./info-By4pCjMF.js";import"./IconButton-DIyYlW0K.js";import"./useHasOverflow-BudGxDi5.js";import"./Divider-CVf_6yZu.js";import"./Dialog-A-ZT43JW.js";import"./useControl-Bq0hCRWZ.js";import"./Modal.argTypes-CV-chd0l.js";import"./Icons-CQdi0Qfk.js";import"./index-DM34Bggu.js";import"./add-VKxZMCZ1.js";import"./move-right-C1_1RL8h.js";import"./bookmark-D7CrCsbo.js";import"./text-BT02E20n.js";import"./upload-DAbLlB0c.js";import"./sort-descending-CgwSpVd_.js";import"./undo-BnneyCmg.js";import"./settings-DCJi43F0.js";import"./copy-5pLa4d1M.js";import"./delete-iC7mKKRu.js";import"./documentation-DEtevtWp.js";import"./edit-CKp5FD3E.js";import"./error-DJM79MqW.js";import"./favorited-BqMbjWSD.js";import"./generate-with-ai-C7ZdkiKx.js";import"./subtract-CmdG1iV6.js";import"./hide-BC9kgIHr.js";import"./history-Ce6MLgVu.js";import"./search-D3DMdc9S.js";import"./person-BNKCLHkq.js";import"./map-DnBNu0cY.js";import"./more-vertical-BVZqPJep.js";import"./new-tab-CpKZypuy.js";import"./notification-Car9C9Fn.js";import"./paste-DywRabwS.js";import"./show-C6fFsymT.js";import"./warning-GTpknHYS.js";import"./tenant-CkbwWCOd.js";import"./Field.argTypes-1rEre7SB.js";import"./SeverityIcon-CnbcKgkd.js";function r(i){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/AlertModal",of:a}),`
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
