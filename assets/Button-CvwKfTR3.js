import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{i as n,l as r,n as i,p as a,s as o}from"./iframe-UwarwtgL.js";import{t as s}from"./mdx-react-shim-DbLuWb1F.js";import{IconPlayground as c,Playground as l,VisualTest as u,n as d,t as f}from"./Button.stories-C-PNjKjb.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...a(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{title:`Components/Button`,of:f}),`
`,(0,h.jsx)(t.h1,{id:`button`,children:`Button`}),`
`,(0,h.jsx)(t.p,{children:`Buttons are clickable items used for actions. They can have different styles depending on the needs.
To use it you just have to import the Button component like this:`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-jsx`,children:`import { Button, IconButton, ButtonFloating } from "@qlik/sprout-react";
import { FavoriteIcon } from "@qlik/sprout-icons/react";

<Button variant="primary" size="small" label="Click me" onClick={() => {}} />
<Button size="medium" label="Click me" onClick={() => {}} icon={<FavoriteIcon />} />
<Button size="medium" label="Click me" onClick={() => {}} trailingIcon={<FavoriteIcon />} />

<IconButton variant="default" icon={<FavoriteIcon />} label="Click me" onClick={() => {}} />

<ButtonFloating>
    <Button variant="primary" size="small" label="Click me" onClick={() => {}} />
</ButtonFloating>

<ButtonFloating>
    <IconButton variant="default" icon={<FavoriteIcon />} label="Click me" onClick={() => {}} />
</ButtonFloating>
`})}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(n,{of:l}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/button/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Button`})}),`
`,(0,h.jsx)(t.p,{children:`HTML Structure`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Button and IconButton use the native HTML `,(0,h.jsx)(t.code,{children:`button`}),` so it has the implicit role `,(0,h.jsx)(t.code,{children:`button`}),`.`]}),`
`,(0,h.jsxs)(t.li,{children:[`Button and IconButton support all props to have an `,(0,h.jsx)(t.a,{href:`https://www.w3.org/WAI/tutorials/forms/labels/`,rel:`nofollow`,children:`accessible label`})]}),`
`,(0,h.jsxs)(t.li,{children:[`Button and IconButton support `,(0,h.jsx)(t.code,{children:`aria-describedby`}),` props.`]}),`
`,(0,h.jsxs)(t.li,{children:[`Button and IconButton use explicit `,(0,h.jsx)(t.code,{children:`disabled`}),` props to show it has unavailable. Question: should we add `,(0,h.jsx)(t.code,{children:`aria-disabled`}),`?`]}),`
`]}),`
`,(0,h.jsx)(t.p,{children:`Keyboard Navigation`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`Space`}),`: Activates the button.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`Enter`}),`: Activates the button.`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`variations`,children:`Variations`}),`
`,(0,h.jsx)(i,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`iconbutton`,children:`IconButton`}),`
`,(0,h.jsxs)(t.p,{children:[`This variant is a shortcut to use the Button but label is moved inside a Tooltip.
Accessibility is covered using the tooltip with the `,(0,h.jsx)(t.code,{children:`aria-label`}),` attribute.`]}),`
`,(0,h.jsx)(i,{of:c})]})}function m(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),s(),r(),d()}))();export{m as default};