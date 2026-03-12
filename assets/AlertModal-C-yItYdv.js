import{j as t,M as n,C as m}from"./iframe-DuYosUFD.js";import{useMDXComponents as e}from"./index-6fjbDpXn.js";import{S as a,E as p}from"./AlertModal.stories-Bd5hIJR9.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-_RTHFeIE.js";import"./Tooltip-BJFaRrUy.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-DjHAObcc.js";import"./useId-DRaip_NL.js";import"./classNames-zePBlFY_.js";import"./sprout-CvRh1TM0.js";import"./useI18n-BjJPdLTM.js";import"./Button-DI0ZynHS.js";import"./Button.module-D6kzoXVn.js";import"./common-bQH3ZR03.js";import"./Badge-CPj7NTO4.js";import"./ProgressCircular-BvkbtoQi.js";import"./close-Dyzj91Dc.js";import"./move-left-DN19XWNV.js";import"./InfoTooltipPrimitive-D-yTz8eW.js";import"./info-Bxa3p2DF.js";import"./IconButton-BE9E_AnQ.js";import"./useHasOverflow-BuHjGHjQ.js";import"./Divider-DVRuu_FL.js";import"./Dialog-CG7q9W81.js";import"./useControl-DOCWDNqa.js";import"./Modal.argTypes-_WfiTsAX.js";import"./Icons-CxYMpq3s.js";import"./index-DcMjNI1G.js";import"./add-Vg2U0mSE.js";import"./move-right-k-BFnqYV.js";import"./bookmark-wwgiEeRj.js";import"./text-CIJRCYzm.js";import"./upload-ByT4gcdH.js";import"./sort-descending-BgZWkgGz.js";import"./undo-DK_DlrIJ.js";import"./settings-B-EBrcRv.js";import"./copy-CWKkJg96.js";import"./delete-D4O4nVVP.js";import"./documentation-DABWpqS4.js";import"./edit-DeXKaZx5.js";import"./error-CXY2goRU.js";import"./favorited-DIjhIM7P.js";import"./generate-with-ai-DxZm9B-P.js";import"./subtract-DEs7_1mh.js";import"./hide-D4X3-KSw.js";import"./history-CMLopSL0.js";import"./search-__Gpjj1t.js";import"./person-C2sJpCzJ.js";import"./map-Be-Ow4bt.js";import"./more-vertical-B2Ek-mRZ.js";import"./new-tab-Dp-d2eWd.js";import"./notification-DNCR-roH.js";import"./paste-scJGRfKP.js";import"./show-Gqxo-URH.js";import"./warning-DO6AU_ml.js";import"./tenant-r2v49Krg.js";import"./Field.argTypes-1rEre7SB.js";import"./SeverityIcon-DSoo49L9.js";function r(i){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/AlertModal",of:a}),`
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
