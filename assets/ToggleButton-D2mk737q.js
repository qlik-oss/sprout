import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-BRSAI4nO.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Playground as a,ToggleButtonGroup as o,t as s}from"./ToggleButton.stories-GizSZgBE.js";var c=e();function l(e){let l={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Components/ToggleButton`,of:s}),`
`,(0,c.jsx)(l.h1,{id:`togglebutton`,children:`ToggleButton`}),`
`,(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:`language-tsx`,children:`import { ToggleButton } from "@qlik/sprout-react";

<ToggleButton label="Label" onChange={(toggled) => {}} />;
`})}),`
`,(0,c.jsx)(n,{of:a}),`
`,(0,c.jsx)(l.h2,{id:`asdropdown`,children:`asDropdown`}),`
`,(0,c.jsxs)(l.p,{children:[`You can use the `,(0,c.jsx)(l.code,{children:`asDropdown`}),` prop to render the ToggleButton as a dropdown trigger. This is useful when you want the button to open a menu or similar overlay.`]}),`
`,(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:`language-tsx`,children:`<ToggleButton label="Dropdown" asDropdown onChange={() => {}} />
`})}),`
`,(0,c.jsx)(l.h2,{id:`properties`,children:`Properties`}),`
`,(0,c.jsxs)(l.p,{children:[`ToggleButton inherits all properties from the `,(0,c.jsx)(l.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button`,rel:`nofollow`,children:`HTML button element`}),`.`]}),`
`,(0,c.jsx)(t,{of:a}),`
`,(0,c.jsx)(l.h2,{id:`buttongroup`,children:`ButtonGroup`}),`
`,(0,c.jsx)(l.p,{children:`This wrapper component for the buttons that turns any number of ToggleButton children into a button group.`}),`
`,(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:`language-tsx`,children:`<ButtonGroup>
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
`,(0,c.jsx)(n,{of:o}),`
`,(0,c.jsx)(l.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,c.jsx)(l.p,{children:(0,c.jsx)(l.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/button/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Button`})}),`
`,(0,c.jsx)(l.p,{children:`HTML Structure`}),`
`,(0,c.jsxs)(l.ul,{children:[`
`,(0,c.jsxs)(l.li,{children:[`ToggleButton use the native HTML `,(0,c.jsx)(l.code,{children:`button`}),` so it has the implicit role `,(0,c.jsx)(l.code,{children:`button`}),`.`]}),`
`,(0,c.jsxs)(l.li,{children:[`ToggleButton support all props to have an `,(0,c.jsx)(l.a,{href:`https://www.w3.org/WAI/tutorials/forms/labels/`,rel:`nofollow`,children:`accessible label`})]}),`
`,(0,c.jsxs)(l.li,{children:[`ToggleButton support `,(0,c.jsx)(l.code,{children:`aria-describedby`}),` props.`]}),`
`,(0,c.jsxs)(l.li,{children:[`ToggleButton use explicit `,(0,c.jsx)(l.code,{children:`disabled`}),` props to show it has unavailable. Question: should we add `,(0,c.jsx)(l.code,{children:`aria-disabled`}),`?`]}),`
`]}),`
`,(0,c.jsx)(l.p,{children:`Keyboard Navigation`}),`
`,(0,c.jsxs)(l.ul,{children:[`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Space`}),`: Activates the button.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Enter`}),`: Activates the button.`]}),`
`]})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}export{u as default};