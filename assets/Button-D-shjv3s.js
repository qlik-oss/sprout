import{j as t,M as l,a as i,C as a}from"./iframe-CuV-KuE-.js";import{useMDXComponents as s}from"./index-D_K059sT.js";import{S as c,P as r,V as p,I as m}from"./Button.stories-BvqXTDCs.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-Cf52a-Iw.js";import"./icons-CeOPeaMq.js";import"./Button.argTypes-NGzFEzhg.js";import"./Icons-COWbX-_T.js";import"./index-ZpacE07-.js";import"./Next-CzIf6tFa.js";import"./Bookmark-Cfrl-l3v.js";import"./Upload-D7LwmtHu.js";import"./Text-B_JGQA-d.js";import"./Close-DVZAYT6i.js";import"./SortDescending-BF67BDZs.js";import"./Undo-sM27ww-Z.js";import"./Person-BiHoIXFe.js";import"./Copy-DvC_cMuU.js";import"./Delete-Bl0muSQk.js";import"./Filter-kyYncYCp.js";import"./Edit-CS5l4TjY.js";import"./Error-D9ghOnKS.js";import"./GenerateWithAi-CMN6Dlk9.js";import"./History-B7YXfS-_.js";import"./Search-Bwt14ckx.js";import"./Info-BDH0-Rmp.js";import"./Subtract-CuWUOSm8.js";import"./Map-COzyd6Qy.js";import"./NewTab-DJ0MS9BP.js";import"./Notification-uMs6TdK2.js";import"./Paste-D5k1MGSi.js";import"./Warning-TGmbdRgn.js";import"./Tenant-CZvZ-A9d.js";import"./ButtonGroup-BhLsX9VV.js";import"./classNames-fYnfVJ-g.js";import"./sprout-DQv_ITqK.js";import"./FloatingWrapper-EnwkNkl-.js";import"./Button-D_CeIuO9.js";import"./icons-BouMdmeh.js";import"./Button.module-CmdpHks8.js";import"./Badge-Dt3dHAo1.js";import"./Tooltip-Dlf0g86C.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-tUeULyiG.js";import"./useId-CKb71T0Y.js";import"./ProgressCircular-DDsJKJWC.js";import"./useI18n-BPziWXqP.js";import"./IconButton-DFJpbTCt.js";import"./Menu-BVN8XmR4.js";import"./useControl-CYhNvxn-.js";import"./Divider-D0F_5EBr.js";import"./list-B1zo5gaH.js";import"./Skeleton-DBd_dt_9.js";function e(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Button",of:c}),`
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
