import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{Uncontrolled as c,n as l,t as u}from"./Switch.stories-j2VX-PRl.js";function d(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Switch`,of:u}),`
`,(0,p.jsx)(n.h1,{id:`switch`,children:`Switch`}),`
`,(0,p.jsx)(n.p,{children:`A toggle switch is a user interface component that allows users to turn a setting or feature on or off by toggling between two states. The two states typically represent opposite conditions, such as "on" and "off," "enabled" and "disabled," or "active" and "inactive." The toggle switch visually displays the current state and provides a mechanism for users to change it.`}),`
`,(0,p.jsxs)(n.p,{children:[`Switch inherits all standard attributes from the native `,(0,p.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/checkbox`,rel:`nofollow`,children:`HTML checkbox input`}),`, excluding `,(0,p.jsx)(n.code,{children:`type`}),` (which is always `,(0,p.jsx)(n.code,{children:`"checkbox"`}),`) and value.`]}),`
`,(0,p.jsx)(n.p,{children:(0,p.jsx)(n.a,{href:`https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components-BETA?node-id=6564-39128&t=TKbA2VvgnYjhH8JQ-4`,rel:`nofollow`,children:`Figma Spec`})}),`
`,(0,p.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { Switch, type SwitchProps } from "@qlik/sprout-react";

// Uncontrolled
<Switch name="field" label="Label" />

// Controlled
const [checked, setChecked] = useState(false)
<Switch name="field" label="Label" checked={checked} onChange={() => setChecked(!checked)} />
`})}),`
`,(0,p.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsx)(n.p,{children:(0,p.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/switch/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Switch`})}),`
`,(0,p.jsx)(n.p,{children:`HTML Structure`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[`Switch use `,(0,p.jsx)(n.code,{children:`input`}),` tag with type `,(0,p.jsx)(n.code,{children:`checkbox`}),`.`]}),`
`,(0,p.jsx)(n.li,{children:`Switch use span tags to create the knob`}),`
`,(0,p.jsxs)(n.li,{children:[`Switch use `,(0,p.jsx)(n.code,{children:`svg`}),` icon for the tick.`]}),`
`,(0,p.jsxs)(n.li,{children:[`Switch input has the `,(0,p.jsx)(n.code,{children:`role=switch`}),` followed by `,(0,p.jsx)(n.code,{children:`checked=true|false`}),` attribute.`]}),`
`]}),`
`,(0,p.jsx)(n.p,{children:`Keyboard Navigation`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Space`}),`: When focus is on the switch, changes the state of the switch.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Enter`}),`: When focus is on the switch, changes the state of the switch.`]}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`bugs`,children:`Bugs`}),`
`,(0,p.jsx)(n.h3,{id:`bug1-20241031`,children:`Bug1 (2024/10/31)`}),`
`,(0,p.jsxs)(n.p,{children:[`The lack of borders on the checked state comes from a bug in figma.
`,(0,p.jsx)(n.code,{children:`Slider-foreground`}),` should be on top of `,(0,p.jsx)(n.code,{children:`Slider-track`}),` as it is in absolute position.`]}),`
`,(0,p.jsx)(n.h3,{id:`bug2-20241031`,children:`Bug2 (2024/10/31)`}),`
`,(0,p.jsxs)(n.p,{children:[`The `,(0,p.jsx)(n.code,{children:`knob`}),` border-color uses a token that has an alpha channel. The transparency happens over the background color of it.
This is an accepted difference in behavior with Figma.`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),s(),i(),l()}))();export{f as default};