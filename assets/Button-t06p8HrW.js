import{j as t,M as l,a as i,C as a}from"./iframe-B4vjk2_C.js";import{useMDXComponents as s}from"./index-4mXTpVuF.js";import{S as c,P as r,V as p,I as m}from"./Button.stories-D0VAwzC6.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-CrXyYGj8.js";import"./icons-69FQzCKM.js";import"./Button.argTypes-Bp7ZyGdO.js";import"./Icons-BmPwnPxU.js";import"./index-Z8VovJW6.js";import"./AiSparkles-Dl0R-qK2.js";import"./Next-D7BL29gd.js";import"./Bookmark-CibNrEfK.js";import"./Upload-CPekzzW9.js";import"./Text-VlP5SB55.js";import"./Close-CzhTZSOO.js";import"./SortDescending-B7jfx8Af.js";import"./Undo-9QyGmJ12.js";import"./Person-Dcr2ZAg5.js";import"./Copy-o7IORLfG.js";import"./Delete-B3An4l3N.js";import"./Filter-B97z2p0g.js";import"./Edit-DrJZ1rCf.js";import"./Error-aRqdswEO.js";import"./History-C5KmixAH.js";import"./Search-KjZbxp4C.js";import"./Info-qvjQZ4-p.js";import"./Subtract-CiGs9Rom.js";import"./Map-CaMFTBLm.js";import"./NewTab-CGCvqCB9.js";import"./Notification-Bvs5iQDr.js";import"./Paste-DdDmevxd.js";import"./Warning-mmXjUrwg.js";import"./Tenant-pz9GTM4b.js";import"./ButtonGroup-CS21pYDB.js";import"./classNames-DaRWzB8T.js";import"./sprout-DTAeqvbL.js";import"./FloatingWrapper-FR8zykZr.js";import"./Button-COVTwlCl.js";import"./icons-BjYZgjFf.js";import"./Button.module-C2ELNEem.js";import"./Badge-Coha5yr6.js";import"./Tooltip-D1n48xKC.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-D3fq_iUv.js";import"./useId-DsPr7Fl4.js";import"./ProgressCircular-CXDJvuy2.js";import"./useI18n-DbSMZiRF.js";import"./IconButton-Ba8Tcb-S.js";import"./Menu-BL50xBAN.js";import"./useControl-DPltlHoP.js";import"./Divider-DqNucpfp.js";import"./list-B1zo5gaH.js";import"./Skeleton-DGs4i03k.js";function e(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Button",of:c}),`
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
