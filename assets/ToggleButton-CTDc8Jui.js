import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{Playground as c,ToggleButtonGroup as l,n as u,t as d}from"./ToggleButton.stories-DwULMRZT.js";function f(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{title:`Components/ToggleButton`,of:d}),`
`,(0,m.jsx)(n.h1,{id:`togglebutton`,children:`ToggleButton`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { ToggleButton } from "@qlik/sprout-react";

<ToggleButton label="Label" onChange={(toggled) => {}} />;
`})}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(n.h2,{id:`asdropdown`,children:`asDropdown`}),`
`,(0,m.jsxs)(n.p,{children:[`You can use the `,(0,m.jsx)(n.code,{children:`asDropdown`}),` prop to render the ToggleButton as a dropdown trigger. This is useful when you want the button to open a menu or similar overlay.`]}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`<ToggleButton label="Dropdown" asDropdown onChange={() => {}} />
`})}),`
`,(0,m.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,m.jsxs)(n.p,{children:[`ToggleButton inherits all properties from the `,(0,m.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button`,rel:`nofollow`,children:`HTML button element`}),`.`]}),`
`,(0,m.jsx)(r,{of:c}),`
`,(0,m.jsx)(n.h2,{id:`buttongroup`,children:`ButtonGroup`}),`
`,(0,m.jsx)(n.p,{children:`This wrapper component for the buttons that turns any number of ToggleButton children into a button group.`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`<ButtonGroup>
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
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsx)(n.p,{children:(0,m.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/button/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Button`})}),`
`,(0,m.jsx)(n.p,{children:`HTML Structure`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[`ToggleButton use the native HTML `,(0,m.jsx)(n.code,{children:`button`}),` so it has the implicit role `,(0,m.jsx)(n.code,{children:`button`}),`.`]}),`
`,(0,m.jsxs)(n.li,{children:[`ToggleButton support all props to have an `,(0,m.jsx)(n.a,{href:`https://www.w3.org/WAI/tutorials/forms/labels/`,rel:`nofollow`,children:`accessible label`})]}),`
`,(0,m.jsxs)(n.li,{children:[`ToggleButton support `,(0,m.jsx)(n.code,{children:`aria-describedby`}),` props.`]}),`
`,(0,m.jsxs)(n.li,{children:[`ToggleButton use explicit `,(0,m.jsx)(n.code,{children:`disabled`}),` props to show it has unavailable. Question: should we add `,(0,m.jsx)(n.code,{children:`aria-disabled`}),`?`]}),`
`]}),`
`,(0,m.jsx)(n.p,{children:`Keyboard Navigation`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Space`}),`: Activates the button.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Enter`}),`: Activates the button.`]}),`
`]})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=n(),s(),i(),u()}))();export{p as default};