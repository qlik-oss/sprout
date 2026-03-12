import{j as e}from"./iframe-ZO3EpHUh.js";import{F as d}from"./delete-B7ujbQKr.js";import{O as c}from"./SelectTest-DdLE4ESp.js";import{B as a}from"./ButtonGroup-Ce2LtxCE.js";import{B as t}from"./Button-DwNMLHHD.js";import{T as m}from"./TextField-DZIgwTux.js";import{I as o}from"./IconButton-CM9e8KDm.js";import{c as s}from"./classNames--9J8KLdq.js";import{S as b}from"./SelectComposition-D8CpsZq3.js";import{M as l}from"./Menu-CLctAJeW.js";const p={children:{control:!1,description:"The buttons to be rendered inside the ButtonGroup.",table:{type:{summary:"ReactNode"}}},fullWidth:{control:{type:"boolean"},description:"If true, the button group will take the full width of its container.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},orientation:{control:{type:"select"},options:["horizontal","vertical"],table:{defaultValue:{summary:'"horizontal"'},type:{summary:'"horizontal" | "vertical"'}}}},f={title:"Components/ButtonGroup"},n={render:i=>e.jsxs(a,{...i,children:[e.jsx(t,{label:"Medium"}),e.jsx(t,{label:"Medium"}),e.jsx(t,{label:"Medium"})]}),argTypes:p,parameters:{chromatic:{disableSnapshot:!0}}};function r(i){return e.jsx("h2",{className:s("flex","flex-row","border-box","font-heading-m","text-default"),children:i.children})}const u={render:()=>e.jsxs("div",{className:s("flex","flex-col","border-box","gap-m"),children:[e.jsx(r,{children:"Default buttons"}),e.jsxs(a,{children:[e.jsx(t,{label:"Default"}),e.jsx(t,{label:"Hover","data-testid":"hover"}),e.jsx(t,{label:"Active","data-testid":"active"}),e.jsx(t,{label:"Focused","data-testid":"focus"})]}),e.jsx(r,{children:"Small buttons"}),e.jsxs(a,{children:[e.jsx(t,{label:"Small",size:"small"}),e.jsx(t,{label:"Hovered",size:"small","data-testid":"hover"}),e.jsx(t,{label:"Actived",size:"small","data-testid":"active"}),e.jsx(t,{label:"Focused",size:"small","data-testid":"focus"})]}),e.jsx(r,{children:"Quiet buttons"}),e.jsxs(a,{children:[e.jsx(t,{label:"Small",variant:"quiet"}),e.jsx(t,{label:"Hovered",variant:"quiet","data-testid":"hover"}),e.jsx(t,{label:"Actived",variant:"quiet","data-testid":"active"}),e.jsx(t,{label:"Focused",variant:"quiet","data-testid":"focus"})]}),e.jsx(r,{children:"Composition: Affix"}),e.jsx("div",{className:s("flex","flex-row","border-box","w-s"),children:e.jsxs(a,{fullWidth:!0,children:[e.jsx(t,{label:"Default"}),e.jsx(m,{placeholder:"Default"}),e.jsx(o,{label:"Default",icon:e.jsx(d,{})})]})}),e.jsx("div",{className:s("flex","flex-row","border-box","w-s"),children:e.jsxs(a,{fullWidth:!0,children:[e.jsx(t,{label:"Default"}),e.jsx(b.Select,{placeholder:"Default",children:c}),e.jsx(o,{label:"Default",icon:e.jsx(d,{})})]})}),e.jsx("div",{className:s("flex","flex-row","border-box","w-s"),children:e.jsxs(a,{fullWidth:!0,children:[e.jsx(t,{label:"Default"}),e.jsx(b.Multi,{placeholder:"colors","aria-label":"Color selection",children:c}),e.jsx(o,{label:"Default",icon:e.jsx(d,{})})]})}),e.jsx(r,{children:"Split Button"}),e.jsxs(a,{children:[e.jsx(t,{variant:"default",label:"Default"}),e.jsx(l.Trigger,{placement:"bottom-end",menu:e.jsx(l.Item,{label:"foo"}),children:e.jsx(o,{variant:"default",label:"Default dropdown",asDropdown:!0})})]}),e.jsxs(a,{children:[e.jsx(t,{variant:"primary",label:"Default"}),e.jsx(l.Trigger,{placement:"bottom-end",menu:e.jsx(l.Item,{label:"foo"}),children:e.jsx(o,{variant:"primary",label:"Default dropdown",asDropdown:!0})})]}),e.jsxs(a,{children:[e.jsx(t,{variant:"secondary",label:"Default"}),e.jsx(l.Trigger,{placement:"bottom-end",menu:e.jsx(l.Item,{label:"foo"}),children:e.jsx(o,{variant:"secondary",label:"Default dropdown",asDropdown:!0})})]}),e.jsxs(a,{children:[e.jsx(t,{variant:"destructive",label:"Default"}),e.jsx(l.Trigger,{placement:"bottom-end",menu:e.jsx(l.Item,{label:"foo"}),children:e.jsx(o,{variant:"destructive",label:"Default dropdown",asDropdown:!0})})]}),e.jsxs(a,{children:[e.jsx(t,{variant:"quiet",label:"Default"}),e.jsx(l.Trigger,{placement:"bottom-end",menu:e.jsx(l.Item,{label:"foo"}),children:e.jsx(o,{variant:"quiet",label:"Default dropdown",asDropdown:!0})})]}),e.jsx(r,{children:"Vertical"}),e.jsxs(a,{orientation:"vertical",children:[e.jsx(t,{label:"Default"}),e.jsx(t,{label:"Hover","data-testid":"hover"}),e.jsx(t,{label:"Active","data-testid":"active"}),e.jsx(t,{label:"Focused","data-testid":"focus"})]})]}),parameters:{pseudo:{hover:'[data-testid="hover"]',active:'[data-testid="active"]',focusVisible:'[data-testid="focus"]'},controls:{disable:!0}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (props: ButtonGroupProps) => <ButtonGroup {...props}>
      <Button label="Medium" />
      <Button label="Medium" />
      <Button label="Medium" />
    </ButtonGroup>,
  argTypes: ButtonGroupArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "border-box", "gap-m")}>
      <H2>Default buttons</H2>
      <ButtonGroup>
        <Button label="Default" />
        <Button label="Hover" data-testid="hover" />
        <Button label="Active" data-testid="active" />
        <Button label="Focused" data-testid="focus" />
      </ButtonGroup>
      <H2>Small buttons</H2>
      <ButtonGroup>
        <Button label="Small" size="small" />
        <Button label="Hovered" size="small" data-testid="hover" />
        <Button label="Actived" size="small" data-testid="active" />
        <Button label="Focused" size="small" data-testid="focus" />
      </ButtonGroup>
      <H2>Quiet buttons</H2>
      <ButtonGroup>
        <Button label="Small" variant="quiet" />
        <Button label="Hovered" variant="quiet" data-testid="hover" />
        <Button label="Actived" variant="quiet" data-testid="active" />
        <Button label="Focused" variant="quiet" data-testid="focus" />
      </ButtonGroup>
      <H2>Composition: Affix</H2>
      <div className={classNames("flex", "flex-row", "border-box", "w-s")}>
        <ButtonGroup fullWidth>
          <Button label="Default" />
          <TextField placeholder="Default" />
          <IconButton label="Default" icon={<DeleteIcon />} />
        </ButtonGroup>
      </div>
      <div className={classNames("flex", "flex-row", "border-box", "w-s")}>
        <ButtonGroup fullWidth>
          <Button label="Default" />
          <Select.Select placeholder="Default">
            {OPTIONS_WITH_GROUP}
          </Select.Select>
          <IconButton label="Default" icon={<DeleteIcon />} />
        </ButtonGroup>
      </div>
      <div className={classNames("flex", "flex-row", "border-box", "w-s")}>
        <ButtonGroup fullWidth>
          <Button label="Default" />
          <Select.Multi placeholder="colors" aria-label="Color selection">
            {OPTIONS_WITH_GROUP}
          </Select.Multi>

          <IconButton label="Default" icon={<DeleteIcon />} />
        </ButtonGroup>
      </div>
      <H2>Split Button</H2>
      <ButtonGroup>
        <Button variant="default" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="default" label="Default dropdown" asDropdown />
        </Menu.Trigger>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="primary" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="primary" label="Default dropdown" asDropdown />
        </Menu.Trigger>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="secondary" label="Default dropdown" asDropdown />
        </Menu.Trigger>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="destructive" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="destructive" label="Default dropdown" asDropdown />
        </Menu.Trigger>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="quiet" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="quiet" label="Default dropdown" asDropdown />
        </Menu.Trigger>
      </ButtonGroup>
      <H2>Vertical</H2>
      <ButtonGroup orientation="vertical">
        <Button label="Default" />
        <Button label="Hover" data-testid="hover" />
        <Button label="Active" data-testid="active" />
        <Button label="Focused" data-testid="focus" />
      </ButtonGroup>
    </div>,
  parameters: {
    pseudo: {
      hover: '[data-testid="hover"]',
      active: '[data-testid="active"]',
      focusVisible: '[data-testid="focus"]'
    },
    controls: {
      disable: true
    }
  }
}`,...u.parameters?.docs?.source}}};const x=["Playground","VisualTest"],S=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,VisualTest:u,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{n as P,S};
