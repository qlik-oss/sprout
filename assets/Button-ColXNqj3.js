import{j as t,M as l,a as n,C as a}from"./iframe-s7Iwh0oT.js";import{useMDXComponents as s}from"./index-3LxxidSz.js";import{S as c,P as r,V as p,I as m}from"./Button.stories-C1v38vUu.js";import"./preload-helper-PPVm8Dsz.js";import"./add-phUaYqr2.js";import"./Button.argTypes-C8wXIbb1.js";import"./Icons-CovZA8ho.js";import"./index-Cjzpg9K1.js";import"./move-right-CjgOxL1h.js";import"./bookmark-Cey_2BFE.js";import"./text-DyI8tiuz.js";import"./close-Bbk9t1FU.js";import"./upload-B0Ew5N01.js";import"./sort-descending-OBAQsHI9.js";import"./undo-BkTBorEJ.js";import"./settings-Dgdg0xWp.js";import"./copy-D5AkX6QI.js";import"./delete-cf8eEynv.js";import"./documentation-DPV8gHFU.js";import"./edit-PEgxvuNP.js";import"./error-DwsaS794.js";import"./favorited-BVK7D5qd.js";import"./generate-with-ai-BbRQXXpT.js";import"./subtract-nH5WHpwI.js";import"./hide-DKS27jyb.js";import"./history-DnP2rvJO.js";import"./search-yk4qOQEV.js";import"./info-DM6050LP.js";import"./person-Ds3mXeFF.js";import"./map-d8AgHSnc.js";import"./more-vertical-BEPBAxGJ.js";import"./move-left-DgChsxhn.js";import"./new-tab-WxcYfP2Y.js";import"./notification-DtKu0F84.js";import"./paste-DtW837rj.js";import"./show-OD0q4moC.js";import"./warning-CAFk7pxH.js";import"./tenant-DVh-K1xI.js";import"./ButtonGroup-D0ELDPa5.js";import"./classNames-BgUAGgdt.js";import"./sprout-Bvx94sbk.js";import"./FloatingWrapper-97ZbCiI4.js";import"./Button-BLnymG9d.js";import"./Button.module-BSdpW5zV.js";import"./common-bQH3ZR03.js";import"./Badge-CjbZkwpT.js";import"./Tooltip-_uMFampe.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BoZIv2t8.js";import"./useId-C37lMSXz.js";import"./ProgressCircular-Dm76i-ei.js";import"./useI18n-DNSc_Xzu.js";import"./IconButton-zwf3qVx9.js";import"./Menu-CU8ixYLE.js";import"./useControl-CS-bltOB.js";import"./Divider-BMuu4i8A.js";import"./list-B1zo5gaH.js";import"./Skeleton-DC7wVjwf.js";function e(i){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Button",of:c}),`
`,t.jsx(o.h1,{id:"button",children:"Button"}),`
`,t.jsx(o.p,{children:`Buttons are clickable items used for actions. They can have different styles depending on the needs.
To use it you just have to import the Button component like this:`}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`import { Button, IconButton, ButtonFloating } from "@qlik/sprout-react";
import { FavoriteIcon } from "@qlik/sprout-icons/react";

<Button variant="primary" size="small" label="Click me" onClick={() => {}} />

<IconButton variant="default" icon={<FavoriteIcon />} label="Click me" onClick={() => {}} />

<ButtonFloating>
    <Button variant="primary" size="small" label="Click me" onClick={() => {}} />
</ButtonFloating>

<ButtonFloating>
    <IconButton variant="default" icon={<FavoriteIcon />} label="Click me" onClick={() => {}} />
</ButtonFloating>
`})}),`
`,t.jsx(n,{of:r}),`
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
`,t.jsx(n,{of:p}),`
`,t.jsx(o.h2,{id:"iconbutton",children:"IconButton"}),`
`,t.jsxs(o.p,{children:[`This variant is a shortcut to use the Button but label is moved inside a Tooltip.
Accessibility is covered using the tooltip with the `,t.jsx(o.code,{children:"aria-label"})," attribute."]}),`
`,t.jsx(n,{of:m})]})}function jt(i={}){const{wrapper:o}={...s(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(e,{...i})}):e(i)}export{jt as default};
