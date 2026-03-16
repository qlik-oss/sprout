import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-BRSAI4nO.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Uncontrolled as a,t as o}from"./Switch.stories-Dg2wfLZT.js";var s=e();function c(e){let c={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Components/Switch`,of:o}),`
`,(0,s.jsx)(c.h1,{id:`switch`,children:`Switch`}),`
`,(0,s.jsx)(c.p,{children:`A toggle switch is a user interface component that allows users to turn a setting or feature on or off by toggling between two states. The two states typically represent opposite conditions, such as "on" and "off," "enabled" and "disabled," or "active" and "inactive." The toggle switch visually displays the current state and provides a mechanism for users to change it.`}),`
`,(0,s.jsxs)(c.p,{children:[`Switch inherits all standard attributes from the native `,(0,s.jsx)(c.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/checkbox`,rel:`nofollow`,children:`HTML checkbox input`}),`, excluding `,(0,s.jsx)(c.code,{children:`type`}),` (which is always `,(0,s.jsx)(c.code,{children:`"checkbox"`}),`) and value.`]}),`
`,(0,s.jsx)(c.p,{children:(0,s.jsx)(c.a,{href:`https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components-BETA?node-id=6564-39128&t=TKbA2VvgnYjhH8JQ-4`,rel:`nofollow`,children:`Figma Spec`})}),`
`,(0,s.jsx)(c.h2,{id:`usage`,children:`Usage`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { Switch, type SwitchProps } from "@qlik/sprout-react";

// Uncontrolled
<Switch name="field" label="Label" />

// Controlled
const [checked, setChecked] = useState(false)
<Switch name="field" label="Label" checked={checked} onChange={() => setChecked(!checked)} />
`})}),`
`,(0,s.jsx)(c.h2,{id:`properties`,children:`Properties`}),`
`,(0,s.jsx)(n,{of:a}),`
`,(0,s.jsx)(t,{of:a}),`
`,(0,s.jsx)(c.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,s.jsx)(c.p,{children:(0,s.jsx)(c.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/switch/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Switch`})}),`
`,(0,s.jsx)(c.p,{children:`HTML Structure`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[`Switch use `,(0,s.jsx)(c.code,{children:`input`}),` tag with type `,(0,s.jsx)(c.code,{children:`checkbox`}),`.`]}),`
`,(0,s.jsx)(c.li,{children:`Switch use span tags to create the knob`}),`
`,(0,s.jsxs)(c.li,{children:[`Switch use `,(0,s.jsx)(c.code,{children:`svg`}),` icon for the tick.`]}),`
`,(0,s.jsxs)(c.li,{children:[`Switch input has the `,(0,s.jsx)(c.code,{children:`role=switch`}),` followed by `,(0,s.jsx)(c.code,{children:`checked=true|false`}),` attribute.`]}),`
`]}),`
`,(0,s.jsx)(c.p,{children:`Keyboard Navigation`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Space`}),`: When focus is on the switch, changes the state of the switch.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Enter`}),`: When focus is on the switch, changes the state of the switch.`]}),`
`]}),`
`,(0,s.jsx)(c.h2,{id:`bugs`,children:`Bugs`}),`
`,(0,s.jsx)(c.h3,{id:`bug1-20241031`,children:`Bug1 (2024/10/31)`}),`
`,(0,s.jsxs)(c.p,{children:[`The lack of borders on the checked state comes from a bug in figma.
`,(0,s.jsx)(c.code,{children:`Slider-foreground`}),` should be on top of `,(0,s.jsx)(c.code,{children:`Slider-track`}),` as it is in absolute position.`]}),`
`,(0,s.jsx)(c.h3,{id:`bug2-20241031`,children:`Bug2 (2024/10/31)`}),`
`,(0,s.jsxs)(c.p,{children:[`The `,(0,s.jsx)(c.code,{children:`knob`}),` border-color uses a token that has an alpha channel. The transparency happens over the background color of it.
This is an accepted difference in behavior with Figma.`]})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};