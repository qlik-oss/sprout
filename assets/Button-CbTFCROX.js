import{j as t,M as l,a as i,C as a}from"./iframe-Dux6zP9l.js";import{useMDXComponents as s}from"./index-BCztanOQ.js";import{S as c,P as r,V as p,I as m}from"./Button.stories-BWCVKnkD.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-BtS2806q.js";import"./icons-DbnsKZAy.js";import"./Button.argTypes-BM6XhUSS.js";import"./Icons-homBgXPl.js";import"./index-Br4vx0U3.js";import"./Next-BewXrcs7.js";import"./Bookmark-YRYgI-pH.js";import"./Upload-DVdnZv4A.js";import"./Text-BqIxfr9D.js";import"./Close-DZrODGJw.js";import"./SortDescending-6CDLuBsq.js";import"./Undo-BlRv8m3a.js";import"./Person-DtFtgVbU.js";import"./Copy-CNcpp5JH.js";import"./Delete-DmK8BJN4.js";import"./Filter-CkxlB1aU.js";import"./Edit-jwbjvk-y.js";import"./Error-BylAzqMK.js";import"./GenerateWithAi-B-iuWyGM.js";import"./History-hc8jDZls.js";import"./Search-jnBfSIuS.js";import"./Info-DM0ROm97.js";import"./Subtract-DqagjlIq.js";import"./Map-BliWAPeQ.js";import"./NewTab-B05WKzom.js";import"./Notification-DOy9jqM5.js";import"./Paste-a9G7KIM9.js";import"./Warning-DwriNDhq.js";import"./Tenant-ewlWfidL.js";import"./ButtonGroup-Cyh3uAIS.js";import"./classNames-T6EAEAwi.js";import"./sprout-duSO2RrP.js";import"./FloatingWrapper-DWE1MRoj.js";import"./Button-CUxISDo2.js";import"./icons-DDUP-3mh.js";import"./Button.module-C2ELNEem.js";import"./Badge-LAqT22o7.js";import"./Tooltip-64IyLuk4.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CWoZLUJZ.js";import"./useId-CfGbHbQJ.js";import"./ProgressCircular-u9vevpyG.js";import"./useI18n-KYbpKEsf.js";import"./IconButton-Blrr834S.js";import"./Menu-BeZpFDiT.js";import"./useControl-BHRxoypK.js";import"./Divider-l6Y0Jgs3.js";import"./list-B1zo5gaH.js";import"./Skeleton-JHrb0bly.js";function e(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Button",of:c}),`
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
