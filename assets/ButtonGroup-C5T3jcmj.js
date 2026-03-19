import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-DaKWDHAC.js";import{n as i}from"./lib-EjdzwnHJ.js";import"./Icons-DlU_uI0S.js";import"./Button.argTypes-BLPT-bFQ.js";import{SplitButton as a}from"./Button.stories-DytnWrjt.js";import"./TextField.stories-3YvPyPOx.js";import"./SelectTest-BFpwn8np.js";import{Playground as o,t as s}from"./ButtonGroup.stories-BfhT2SDY.js";var c=e();function l(e){let l={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Components/Trigger/ButtonGroup`,of:s}),`
`,(0,c.jsx)(l.h1,{id:`buttongroup`,children:`ButtonGroup`}),`
`,(0,c.jsxs)(l.p,{children:[`ButtonGroup is used to group two or more `,(0,c.jsx)(l.code,{children:`Button`}),` together.`]}),`
`,(0,c.jsx)(l.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:`language-tsx`,children:`import { Button, ButtonGroup } from "@qlik/sprout-react";

<ButtonGroup orientation="horizontal">
  <Button label="Name" />
  <Button label="Date" />
  <Button label="City" />
  <Button label="Country" />
</ButtonGroup>;
`})}),`
`,(0,c.jsx)(l.h2,{id:`properties`,children:`Properties`}),`
`,(0,c.jsx)(n,{of:o}),`
`,(0,c.jsx)(t,{of:o}),`
`,(0,c.jsx)(l.h2,{id:`splitbutton`,children:`SplitButton`}),`
`,(0,c.jsx)(n,{of:a}),`
`,(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:`language-tsx`,children:`import {
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
`,(0,c.jsx)(l.h2,{id:`api`,children:`API`}),`
`,(0,c.jsxs)(l.p,{children:[`Under the hood `,(0,c.jsx)(l.code,{children:`ButtonGroup`}),` change button and div that has border. It let the content set it's own border, it will only change the `,(0,c.jsx)(l.code,{children:`border-radius`}),`.
To make your component works well with it you have only one constraint the border and focus has to be defined at the root html element of the component.`]}),`
`,(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:`language-tsx`,children:`type ButtonGroupProps = HTMLDivProps & {
  orientation?: "horizontal" | "vertical";
  fullWidth?: boolean;
};
`})}),`
`,(0,c.jsx)(l.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,c.jsxs)(l.p,{children:[`HTML structure: The `,(0,c.jsx)(l.code,{children:`ButtonGroup`}),` is a simple `,(0,c.jsx)(l.code,{children:`div`}),` element with a role="group" attribute.`]})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}export{u as default};