import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,i as r,l as i,n as a,s as o}from"./iframe-RiXBydPV.js";import{t as s}from"./mdx-react-shim-Cw1WyOhr.js";import{SplitButton as c,n as l}from"./Button.stories-BCt6SV95.js";import{n as u}from"./TextField.stories-D2AZHfDc.js";import{Playground as d,n as f,t as p}from"./ButtonGroup.stories-ut8fQgxy.js";function m(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{title:`Components/Trigger/ButtonGroup`,of:p}),`
`,(0,g.jsx)(n.h1,{id:`buttongroup`,children:`ButtonGroup`}),`
`,(0,g.jsxs)(n.p,{children:[`ButtonGroup is used to group two or more `,(0,g.jsx)(n.code,{children:`Button`}),` together.`]}),`
`,(0,g.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-tsx`,children:`import { Button, ButtonGroup } from "@qlik/sprout-react";

<ButtonGroup orientation="horizontal">
  <Button label="Name" />
  <Button label="Date" />
  <Button label="City" />
  <Button label="Country" />
</ButtonGroup>;
`})}),`
`,(0,g.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(r,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`splitbutton`,children:`SplitButton`}),`
`,(0,g.jsx)(a,{of:c}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-tsx`,children:`import {
  Button,
  ButtonGroup,
  IconButton,
  Menu,
} from "@qlik/sprout-react";
import { DropdownArrow } from "@qlik/sprout-icons/react";

<ButtonGroup>
  <Button label="Label" />
  <Menu.Trigger
    placement="bottom-end"
    menu={
      <>
        <Menu.Item label="foo" />
      </>
    }
  >
    <IconButton
      variant="primary"
      aria-label="Select your stuff"
      icon={<DropdownArrow />}
    />
  </Menu.Trigger>
</ButtonGroup>;
`})}),`
`,(0,g.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,g.jsxs)(n.p,{children:[`Under the hood `,(0,g.jsx)(n.code,{children:`ButtonGroup`}),` change button and div that has border. It let the content set it's own border, it will only change the `,(0,g.jsx)(n.code,{children:`border-radius`}),`.
To make your component works well with it you have only one constraint the border and focus has to be defined at the root html element of the component.`]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-tsx`,children:`type ButtonGroupProps = HTMLDivProps & {
  orientation?: "horizontal" | "vertical";
  fullWidth?: boolean;
};
`})}),`
`,(0,g.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(n.p,{children:[`HTML structure: The `,(0,g.jsx)(n.code,{children:`ButtonGroup`}),` is a simple `,(0,g.jsx)(n.code,{children:`div`}),` element with a role="group" attribute.`]})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=n(),s(),i(),l(),u(),f()}))();export{h as default};