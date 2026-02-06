import{j as t,M as l,a as i,C as a}from"./iframe-DO7qjpir.js";import{useMDXComponents as s}from"./index-DM3CO3rl.js";import{S as c,P as r,V as p,I as m}from"./Button.stories-DhqmBLGv.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-BuQFhIrq.js";import"./icons-CcidwTIh.js";import"./Button.argTypes-BSZUkNEJ.js";import"./Icons-BilGlRke.js";import"./index-CRIXUNi1.js";import"./Next-G0qtg1LQ.js";import"./Bookmark-DZyQ0qgi.js";import"./Upload-Dm1uqGe9.js";import"./Text-DXgxZ7rl.js";import"./Close-DVlpLiwK.js";import"./SortDescending-Bd_E1WmM.js";import"./Undo-CUmqfFkt.js";import"./Person-BjZlLNrQ.js";import"./Copy-ec0SasG8.js";import"./Delete-D4ge4hwa.js";import"./Filter-DBZqppq8.js";import"./Edit-CColNq1n.js";import"./Error-DM57iPud.js";import"./GenerateWithAi-Dv5-xc_y.js";import"./History-DHbq3km9.js";import"./Search-Bp2ziRFO.js";import"./Info-CoVbxZIf.js";import"./Subtract-CzdmJ8_U.js";import"./Map-B14QatVO.js";import"./NewTab-DA06V-wx.js";import"./Notification-ClhJe7A6.js";import"./Paste-BgvLiWgU.js";import"./Warning-CK4OS6kN.js";import"./Tenant-i2cOSROQ.js";import"./ButtonGroup-sxG0Tiqx.js";import"./classNames-C2xvgHQf.js";import"./sprout-nCaIAc8k.js";import"./FloatingWrapper-Xned63dz.js";import"./Button-DWGkri9_.js";import"./icons-B7D59aOJ.js";import"./Button.module-C2ELNEem.js";import"./Badge-BbHESnbh.js";import"./Tooltip-Bnp9G-JS.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-C_aUAXE9.js";import"./useId-B9UV2KOW.js";import"./ProgressCircular-CpbimHqB.js";import"./useI18n-CbD-mhn-.js";import"./IconButton-GXyV3m9d.js";import"./Menu-u-ysB1YM.js";import"./useControl-U2hc2GWS.js";import"./Divider-BpSmZpjh.js";import"./list-B1zo5gaH.js";import"./Skeleton-BQx9Bath.js";function e(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Button",of:c}),`
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
