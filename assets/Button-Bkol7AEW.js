import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-B5xoaqtW.js";import{n as i}from"./lib-EjdzwnHJ.js";import"./Icons-DJikLCul.js";import"./Button.argTypes-O7s9Wee9.js";import{IconPlayground as a,Playground as o,VisualTest as s,t as c}from"./Button.stories-CV-bVF4R.js";var l=e();function u(e){let u={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{title:`Components/Button`,of:c}),`
`,(0,l.jsx)(u.h1,{id:`button`,children:`Button`}),`
`,(0,l.jsx)(u.p,{children:`Buttons are clickable items used for actions. They can have different styles depending on the needs.
To use it you just have to import the Button component like this:`}),`
`,(0,l.jsx)(u.pre,{children:(0,l.jsx)(u.code,{className:`language-jsx`,children:`import { Button, IconButton, ButtonFloating } from "@qlik/sprout-react";
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
`,(0,l.jsx)(n,{of:o}),`
`,(0,l.jsx)(t,{of:o}),`
`,(0,l.jsx)(u.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,l.jsx)(u.p,{children:(0,l.jsx)(u.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/button/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Button`})}),`
`,(0,l.jsx)(u.p,{children:`HTML Structure`}),`
`,(0,l.jsxs)(u.ul,{children:[`
`,(0,l.jsxs)(u.li,{children:[`Button and IconButton use the native HTML `,(0,l.jsx)(u.code,{children:`button`}),` so it has the implicit role `,(0,l.jsx)(u.code,{children:`button`}),`.`]}),`
`,(0,l.jsxs)(u.li,{children:[`Button and IconButton support all props to have an `,(0,l.jsx)(u.a,{href:`https://www.w3.org/WAI/tutorials/forms/labels/`,rel:`nofollow`,children:`accessible label`})]}),`
`,(0,l.jsxs)(u.li,{children:[`Button and IconButton support `,(0,l.jsx)(u.code,{children:`aria-describedby`}),` props.`]}),`
`,(0,l.jsxs)(u.li,{children:[`Button and IconButton use explicit `,(0,l.jsx)(u.code,{children:`disabled`}),` props to show it has unavailable. Question: should we add `,(0,l.jsx)(u.code,{children:`aria-disabled`}),`?`]}),`
`]}),`
`,(0,l.jsx)(u.p,{children:`Keyboard Navigation`}),`
`,(0,l.jsxs)(u.ul,{children:[`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`Space`}),`: Activates the button.`]}),`
`,(0,l.jsxs)(u.li,{children:[(0,l.jsx)(u.code,{children:`Enter`}),`: Activates the button.`]}),`
`]}),`
`,(0,l.jsx)(u.h2,{id:`variations`,children:`Variations`}),`
`,(0,l.jsx)(n,{of:s}),`
`,(0,l.jsx)(u.h2,{id:`iconbutton`,children:`IconButton`}),`
`,(0,l.jsxs)(u.p,{children:[`This variant is a shortcut to use the Button but label is moved inside a Tooltip.
Accessibility is covered using the tooltip with the `,(0,l.jsx)(u.code,{children:`aria-label`}),` attribute.`]}),`
`,(0,l.jsx)(n,{of:a})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}export{d as default};