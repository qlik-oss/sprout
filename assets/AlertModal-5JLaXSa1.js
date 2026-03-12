import{j as t,M as n,C as m}from"./iframe-s7Iwh0oT.js";import{useMDXComponents as e}from"./index-3LxxidSz.js";import{S as a,E as p}from"./AlertModal.stories-D7ER3bov.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-B8OvvIyU.js";import"./Tooltip-_uMFampe.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BoZIv2t8.js";import"./useId-C37lMSXz.js";import"./classNames-BgUAGgdt.js";import"./sprout-Bvx94sbk.js";import"./useI18n-DNSc_Xzu.js";import"./Button-BLnymG9d.js";import"./Button.module-BSdpW5zV.js";import"./common-bQH3ZR03.js";import"./Badge-CjbZkwpT.js";import"./ProgressCircular-Dm76i-ei.js";import"./close-Bbk9t1FU.js";import"./move-left-DgChsxhn.js";import"./InfoTooltipPrimitive-HCfeTcaQ.js";import"./info-DM6050LP.js";import"./IconButton-zwf3qVx9.js";import"./useHasOverflow-Bo6hxDeF.js";import"./Divider-BMuu4i8A.js";import"./Dialog-N5Qk9w5h.js";import"./useControl-CS-bltOB.js";import"./Modal.argTypes-2sFqnzz1.js";import"./Icons-CovZA8ho.js";import"./index-Cjzpg9K1.js";import"./add-phUaYqr2.js";import"./move-right-CjgOxL1h.js";import"./bookmark-Cey_2BFE.js";import"./text-DyI8tiuz.js";import"./upload-B0Ew5N01.js";import"./sort-descending-OBAQsHI9.js";import"./undo-BkTBorEJ.js";import"./settings-Dgdg0xWp.js";import"./copy-D5AkX6QI.js";import"./delete-cf8eEynv.js";import"./documentation-DPV8gHFU.js";import"./edit-PEgxvuNP.js";import"./error-DwsaS794.js";import"./favorited-BVK7D5qd.js";import"./generate-with-ai-BbRQXXpT.js";import"./subtract-nH5WHpwI.js";import"./hide-DKS27jyb.js";import"./history-DnP2rvJO.js";import"./search-yk4qOQEV.js";import"./person-Ds3mXeFF.js";import"./map-d8AgHSnc.js";import"./more-vertical-BEPBAxGJ.js";import"./new-tab-WxcYfP2Y.js";import"./notification-DtKu0F84.js";import"./paste-DtW837rj.js";import"./show-OD0q4moC.js";import"./warning-CAFk7pxH.js";import"./tenant-DVh-K1xI.js";import"./Field.argTypes-1rEre7SB.js";import"./SeverityIcon-Btk8aNwb.js";function r(i){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/AlertModal",of:a}),`
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
