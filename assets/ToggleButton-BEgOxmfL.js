import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{i as n,l as r,n as i,p as a,s as o}from"./iframe-UwarwtgL.js";import{t as s}from"./mdx-react-shim-DbLuWb1F.js";import{Playground as c,ToggleButtonGroup as l,n as u,t as d}from"./ToggleButton.stories-BccE6Bb8.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...a(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{title:`Components/ToggleButton`,of:d}),`
`,(0,m.jsx)(t.h1,{id:`togglebutton`,children:`ToggleButton`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { ToggleButton } from "@qlik/sprout-react";

<ToggleButton label="Label" onChange={(toggled) => {}} />;
`})}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`asdropdown`,children:`asDropdown`}),`
`,(0,m.jsxs)(t.p,{children:[`You can use the `,(0,m.jsx)(t.code,{children:`asDropdown`}),` prop to render the ToggleButton as a dropdown trigger. This is useful when you want the button to open a menu or similar overlay.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<ToggleButton label="Dropdown" asDropdown onChange={() => {}} />
`})}),`
`,(0,m.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,m.jsxs)(t.p,{children:[`ToggleButton inherits all properties from the `,(0,m.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button`,rel:`nofollow`,children:`HTML button element`}),`.`]}),`
`,(0,m.jsx)(n,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`buttongroup`,children:`ButtonGroup`}),`
`,(0,m.jsx)(t.p,{children:`This wrapper component for the buttons that turns any number of ToggleButton children into a button group.`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<ButtonGroup>
  {["One", "Two", "Three"].map((label) => (
    <ToggleButton
      key={label}
      label={label}
      toggled={toggled === label}
      onChange={() => setToggled(label)}
    />
  ))}
</ButtonGroup>
`})}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/button/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Button`})}),`
`,(0,m.jsx)(t.p,{children:`HTML Structure`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`ToggleButton use the native HTML `,(0,m.jsx)(t.code,{children:`button`}),` so it has the implicit role `,(0,m.jsx)(t.code,{children:`button`}),`.`]}),`
`,(0,m.jsxs)(t.li,{children:[`ToggleButton support all props to have an `,(0,m.jsx)(t.a,{href:`https://www.w3.org/WAI/tutorials/forms/labels/`,rel:`nofollow`,children:`accessible label`})]}),`
`,(0,m.jsxs)(t.li,{children:[`ToggleButton support `,(0,m.jsx)(t.code,{children:`aria-describedby`}),` props.`]}),`
`,(0,m.jsxs)(t.li,{children:[`ToggleButton use explicit `,(0,m.jsx)(t.code,{children:`disabled`}),` props to show it has unavailable. Question: should we add `,(0,m.jsx)(t.code,{children:`aria-disabled`}),`?`]}),`
`]}),`
`,(0,m.jsx)(t.p,{children:`Keyboard Navigation`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Space`}),`: Activates the button.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Enter`}),`: Activates the button.`]}),`
`]})]})}function p(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),s(),r(),u()}))();export{p as default};