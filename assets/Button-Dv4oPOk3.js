import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,i as r,l as i,n as a,s as o}from"./iframe-RiXBydPV.js";import{t as s}from"./mdx-react-shim-Cw1WyOhr.js";import{IconPlayground as c,Playground as l,VisualTest as u,n as d,t as f}from"./Button.stories-BCt6SV95.js";function p(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{title:`Components/Button`,of:f}),`
`,(0,h.jsx)(n.h1,{id:`button`,children:`Button`}),`
`,(0,h.jsx)(n.p,{children:`Buttons are clickable items used for actions. They can have different styles depending on the needs.
To use it you just have to import the Button component like this:`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`import { Button, IconButton, ButtonFloating } from "@qlik/sprout-react";
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
`,(0,h.jsx)(a,{of:l}),`
`,(0,h.jsx)(r,{of:l}),`
`,(0,h.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsx)(n.p,{children:(0,h.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/button/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Button`})}),`
`,(0,h.jsx)(n.p,{children:`HTML Structure`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsxs)(n.li,{children:[`Button and IconButton use the native HTML `,(0,h.jsx)(n.code,{children:`button`}),` so it has the implicit role `,(0,h.jsx)(n.code,{children:`button`}),`.`]}),`
`,(0,h.jsxs)(n.li,{children:[`Button and IconButton support all props to have an `,(0,h.jsx)(n.a,{href:`https://www.w3.org/WAI/tutorials/forms/labels/`,rel:`nofollow`,children:`accessible label`})]}),`
`,(0,h.jsxs)(n.li,{children:[`Button and IconButton support `,(0,h.jsx)(n.code,{children:`aria-describedby`}),` props.`]}),`
`,(0,h.jsxs)(n.li,{children:[`Button and IconButton use explicit `,(0,h.jsx)(n.code,{children:`disabled`}),` props to show it has unavailable. Question: should we add `,(0,h.jsx)(n.code,{children:`aria-disabled`}),`?`]}),`
`]}),`
`,(0,h.jsx)(n.p,{children:`Keyboard Navigation`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`Space`}),`: Activates the button.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`Enter`}),`: Activates the button.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`variations`,children:`Variations`}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(n.h2,{id:`iconbutton`,children:`IconButton`}),`
`,(0,h.jsxs)(n.p,{children:[`This variant is a shortcut to use the Button but label is moved inside a Tooltip.
Accessibility is covered using the tooltip with the `,(0,h.jsx)(n.code,{children:`aria-label`}),` attribute.`]}),`
`,(0,h.jsx)(a,{of:c})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=n(),s(),i(),d()}))();export{m as default};