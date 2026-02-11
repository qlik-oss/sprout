import{j as t,M as l,a as i,C as a}from"./iframe-B-fqCePV.js";import{useMDXComponents as s}from"./index-DUhTx2ua.js";import{S as c,P as r,V as p,I as m}from"./Button.stories-BTyFBUpQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-CGQWcTMW.js";import"./icons-DTOHuE0Q.js";import"./Button.argTypes-B7B56CaK.js";import"./Icons-oA9YLhAZ.js";import"./index-DvxuXuF-.js";import"./Next-DCc_9i21.js";import"./Bookmark-C4WqJD7B.js";import"./Upload-C4mriZRV.js";import"./Text-DVGjtA2-.js";import"./Close-R01cAXcl.js";import"./SortDescending-CfflnELi.js";import"./Undo-QmoTQvvJ.js";import"./Person-CQx_s9v3.js";import"./Copy-LDJw-O8w.js";import"./Delete-K_WChgQu.js";import"./Filter-_T9uGPBz.js";import"./Edit-yy_oh6IZ.js";import"./Error-BQGw3LDI.js";import"./GenerateWithAi-C8pDpEB1.js";import"./History-BlOzlZJ1.js";import"./Search-DSRoHruE.js";import"./Info-C4YmKgXN.js";import"./Subtract-DlC_wTL-.js";import"./Map-FzW2bSYj.js";import"./NewTab-DUTMcy5N.js";import"./Notification-DAAFk53n.js";import"./Paste-Bms19-bp.js";import"./Warning-GhyyIkan.js";import"./Tenant-wzlvguFI.js";import"./ButtonGroup-jCKcdFBk.js";import"./classNames-BHQ9ieoZ.js";import"./sprout-DqOLOcsj.js";import"./FloatingWrapper-Bu-VdDpQ.js";import"./Button-DgHw6K-5.js";import"./icons-BXG-SLO7.js";import"./Button.module-C2ELNEem.js";import"./Badge-BMzhzV_X.js";import"./Tooltip-DclK_iM1.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-BvkMXfLp.js";import"./useId-DU0uuk5t.js";import"./ProgressCircular-CeNa-NP_.js";import"./useI18n-uzhF32fT.js";import"./IconButton-C1DotWTd.js";import"./Menu-CaarWdBl.js";import"./useControl-DDjCssuD.js";import"./Divider-B2v-xVm0.js";import"./list-B1zo5gaH.js";import"./Skeleton-CLuWHboh.js";function e(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Button",of:c}),`
`,t.jsx(o.h1,{id:"button",children:"Button"}),`
`,t.jsx(o.p,{children:`Buttons are clickable items used for actions. They can have different styles depending on the needs.
To use it you just have to import the Button component like this:`}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`import { Button, IconButton, ButtonFloating } from "@qlik/sprout-react";
import { Icon } from "@qlik/sprout-icons/react";

<Button variant="primary" size="small" label="Click me" onClick={() => {}} />

<IconButton variant="default" icon={<Icon />} label="Click me" onClick={() => {}} />

<ButtonFloating>
    <Button variant="primary" size="small" label="Click me" onClick={() => {}} />
</ButtonFloating>

<ButtonFloating>
    <IconButton variant="default" icon={<Icon />} label="Click me" onClick={() => {}} />
</ButtonFloating>
`})}),`
`,t.jsx(i,{of:r}),`
`,t.jsx(a,{of:r}),`
`,t.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsx(o.p,{children:t.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/button/",rel:"nofollow",children:"W3/WAI/ARIA/APG Button"})}),`
`,t.jsx(o.p,{children:"HTML Structure"}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsxs(o.li,{children:["Button and IconButton use the native HTML ",t.jsx(o.code,{children:"button"})," so it has the implicit role ",t.jsx(o.code,{children:"button"}),"."]}),`
`,t.jsxs(o.li,{children:["Button and IconButton support all props to have an ",t.jsx(o.a,{href:"https://www.w3.org/WAI/tutorials/forms/labels/",rel:"nofollow",children:"accessible label"})]}),`
`,t.jsxs(o.li,{children:["Button and IconButton support ",t.jsx(o.code,{children:"aria-describedby"})," props."]}),`
`,t.jsxs(o.li,{children:["Button and IconButton use explicit ",t.jsx(o.code,{children:"disabled"})," props to show it has unavailable. Question: should we add ",t.jsx(o.code,{children:"aria-disabled"}),"?"]}),`
`]}),`
`,t.jsx(o.p,{children:"Keyboard Navigation"}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsxs(o.li,{children:[t.jsx(o.code,{children:"Space"}),": Activates the button."]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.code,{children:"Enter"}),": Activates the button."]}),`
`]}),`
`,t.jsx(o.h2,{id:"variations",children:"Variations"}),`
`,t.jsx(i,{of:p}),`
`,t.jsx(o.h2,{id:"iconbutton",children:"IconButton"}),`
`,t.jsxs(o.p,{children:[`This variant is a shortcut to use the Button but label is moved inside a Tooltip.
Accessibility is covered using the tooltip with the `,t.jsx(o.code,{children:"aria-label"})," attribute."]}),`
`,t.jsx(i,{of:m})]})}function mt(n={}){const{wrapper:o}={...s(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(e,{...n})}):e(n)}export{mt as default};
