import{j as t,M as n,C as a}from"./iframe-CYyT-rNd.js";import{useMDXComponents as r}from"./index-Dzbf35yC.js";import{S as m,E as s}from"./AlertModal.stories-PjJsh3w_.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-sGRBfLkw.js";import"./Tooltip-Bq8n5z5D.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-GWN5S5OT.js";import"./useId-BEfewr8x.js";import"./classNames-BmP9dLUE.js";import"./sprout-UDUY6uO8.js";import"./useI18n-B8acZ0ym.js";import"./Button-B_WU7ehq.js";import"./icons-BJP5nzPh.js";import"./Button.module-C2ELNEem.js";import"./Badge-M4fZ9aOR.js";import"./ProgressCircular-BThLXJeo.js";import"./Close-IBeLqb5W.js";import"./InfoTooltipPrimitive-CcAfk6tw.js";import"./Info-kPGn8DpC.js";import"./IconButton-DQqeG5o4.js";import"./useHasOverflow-CqJCJVUE.js";import"./Divider-DGcHtPQB.js";import"./Dialog-DpA2iiF0.js";import"./useControl-CbxOYg9r.js";import"./Modal.argTypes-DvHSRiHf.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-CP8MmIFw.js";import"./index-quSI8jkX.js";import"./Add-DcwIOkn_.js";import"./AiSparkles-CDqJAjaL.js";import"./Next-cI6d2vFk.js";import"./Bookmark-w_IQ-P6t.js";import"./Upload-1y14DHO-.js";import"./Text-BZR-PmRB.js";import"./SortDescending-CVAYxQhu.js";import"./Undo-BLwRYRdg.js";import"./Person--hO0Fx5n.js";import"./Copy-CTuCBlSc.js";import"./Delete--7nWLgfL.js";import"./Filter-DCjOsxGl.js";import"./Edit-C5Vhfo4K.js";import"./Error-D7GnDcGx.js";import"./History-ClGIlAJq.js";import"./Search-DcLlWkDR.js";import"./Subtract-D9yFNKnL.js";import"./Map-BB3BkA5L.js";import"./NewTab-CSZjxaIu.js";import"./Notification-DqLr7fgN.js";import"./Paste-CUVznJnn.js";import"./Warning-BO-41SRA.js";import"./Tenant-1QyupFgC.js";import"./SeverityIcon-B1bVDgD2.js";function e(i){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/AlertModal",of:m}),`
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
