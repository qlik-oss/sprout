import{j as t,M as l,a as i,C as a}from"./iframe-BQJExRCF.js";import{useMDXComponents as s}from"./index-BiT2RrsF.js";import{S as c,P as r,V as p,I as m}from"./Button.stories-CYtemeUR.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-CPO6AOva.js";import"./icons-CDNrxXy4.js";import"./Button.argTypes-C6WRveIs.js";import"./Icons-D8r5JLXA.js";import"./AiSparkles-ybqQooZU.js";import"./Next-BCf902gw.js";import"./Bookmark-DEDDSCCD.js";import"./Upload-JDlmgr1C.js";import"./Text-fjMciMda.js";import"./Close-VT6FC74F.js";import"./SortDescending-BWpZ9BF7.js";import"./Undo-B1PPlUQq.js";import"./Person-8oMSnh08.js";import"./Copy-ERSXBUQF.js";import"./Delete-CrLV--N3.js";import"./Filter-bb23MOEL.js";import"./Edit-Bc7r3LZJ.js";import"./Error-B95qseKK.js";import"./History-BSF-XiSG.js";import"./Search-B3R4dCNd.js";import"./Info-BfRROe8g.js";import"./Subtract-Ca-OouU7.js";import"./Map-pFYOI1fT.js";import"./NewTab-BMHt_Vx2.js";import"./Notification-BlWUDy4b.js";import"./Paste-Cd-nv27Q.js";import"./Warning-BB_ZpJQH.js";import"./Tenant-I_uTRlDg.js";import"./ButtonGroup-Dt9wcK5B.js";import"./classNames-B0wfWtWT.js";import"./sprout-DxA14K3u.js";import"./FloatingWrapper-DTdVRmL6.js";import"./Button-C7-D-GN_.js";import"./icons-CzMI2h-K.js";import"./Button.module-C2ELNEem.js";import"./Badge-B9--3FkB.js";import"./Tooltip-CVFOQrqK.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DAgGzV0n.js";import"./useId-Drz8gmS2.js";import"./ProgressCircular-B4mHH4_Y.js";import"./useI18n-B99T9obj.js";import"./IconButton-BEI3RZpW.js";import"./Menu-D_upy4ds.js";import"./useControl-XJuj1vyK.js";import"./Divider-Byw016rg.js";import"./list-B1zo5gaH.js";import"./Skeleton-C323E7Fo.js";function e(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Button",of:c}),`
`,t.jsx(o.h1,{id:"button",children:"Button"}),`
`,t.jsx(o.p,{children:`Buttons are clickable items used for actions. They can have different styles depending on the needs.
To use it you just have to import the Button component like this:`}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`import { Button, IconButton, ButtonFloating } from "@qlik/sprout-css-react";
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
`,t.jsx(i,{of:m})]})}function pt(n={}){const{wrapper:o}={...s(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(e,{...n})}):e(n)}export{pt as default};
