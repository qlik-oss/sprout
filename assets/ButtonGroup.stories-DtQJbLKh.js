import{j as e}from"./iframe-CYyT-rNd.js";import{F as c}from"./Delete--7nWLgfL.js";import{D as s}from"./icons-BlDggXip.js";import{O as m}from"./SelectTest-CNIdZKdY.js";import{B as a}from"./ButtonGroup-QoSJ-7Ap.js";import{B as t}from"./Button-B_WU7ehq.js";import{T as p}from"./TextField-3so8vjFm.js";import{I as o}from"./IconButton-DQqeG5o4.js";import{c as n}from"./classNames-BmP9dLUE.js";import{S as b}from"./SelectComposition-Cc6wbRHo.js";import{M as l}from"./Menu-BJ4TKxRh.js";const f={children:{control:!1,description:"The buttons to be rendered inside the ButtonGroup.",table:{type:{summary:"ReactNode"}}},fullWidth:{control:{type:"boolean"},description:"If true, the button group will take the full width of its container.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},orientation:{control:{type:"select"},options:["horizontal","vertical"],table:{defaultValue:{summary:'"horizontal"'},type:{summary:'"horizontal" | "vertical"'}}}},x={title:"Components/ButtonGroup"},u={render:d=>e.jsxs(a,{...d,children:[e.jsx(t,{label:"Medium"}),e.jsx(t,{label:"Medium"}),e.jsx(t,{label:"Medium"})]}),argTypes:f,parameters:{chromatic:{disableSnapshot:!0}}};function r(d){return e.jsx("h2",{className:n("flex","flex-row","border-box","font-heading-m","text-default"),children:d.children})}const i={render:()=>e.jsxs("div",{className:n("flex","flex-col","border-box","gap-m"),children:[e.jsx(r,{children:"Default buttons"}),e.jsxs(a,{children:[e.jsx(t,{label:"Default"}),e.jsx(t,{label:"Hover","data-testid":"hover"}),e.jsx(t,{label:"Active","data-testid":"active"}),e.jsx(t,{label:"Focused","data-testid":"focus"})]}),e.jsx(r,{children:"Small buttons"}),e.jsxs(a,{children:[e.jsx(t,{label:"Small",size:"small"}),e.jsx(t,{label:"Hovered",size:"small","data-testid":"hover"}),e.jsx(t,{label:"Actived",size:"small","data-testid":"active"}),e.jsx(t,{label:"Focused",size:"small","data-testid":"focus"})]}),e.jsx(r,{children:"Quiet buttons"}),e.jsxs(a,{children:[e.jsx(t,{label:"Small",variant:"quiet"}),e.jsx(t,{label:"Hovered",variant:"quiet","data-testid":"hover"}),e.jsx(t,{label:"Actived",variant:"quiet","data-testid":"active"}),e.jsx(t,{label:"Focused",variant:"quiet","data-testid":"focus"})]}),e.jsx(r,{children:"Composition: Affix"}),e.jsx("div",{className:n("flex","flex-row","border-box","w-s"),children:e.jsxs(a,{fullWidth:!0,children:[e.jsx(t,{label:"Default"}),e.jsx(p,{placeholder:"Default"}),e.jsx(o,{label:"Default",icon:e.jsx(c,{})})]})}),e.jsx("div",{className:n("flex","flex-row","border-box","w-s"),children:e.jsxs(a,{fullWidth:!0,children:[e.jsx(t,{label:"Default"}),e.jsx(b.Select,{placeholder:"Default",children:m}),e.jsx(o,{label:"Default",icon:e.jsx(c,{})})]})}),e.jsx("div",{className:n("flex","flex-row","border-box","w-s"),children:e.jsxs(a,{fullWidth:!0,children:[e.jsx(t,{label:"Default"}),e.jsx(b.Multi,{placeholder:"colors","aria-label":"Color selection",children:m}),e.jsx(o,{label:"Default",icon:e.jsx(c,{})})]})}),e.jsx(r,{children:"Split Button"}),e.jsxs(a,{children:[e.jsx(t,{variant:"default",label:"Default"}),e.jsx(l.Trigger,{placement:"bottom-end",menu:e.jsx(l.Item,{label:"foo"}),children:e.jsx(o,{variant:"default",label:"Default dropdown",icon:e.jsx(s,{})})})]}),e.jsxs(a,{children:[e.jsx(t,{variant:"primary",label:"Default"}),e.jsx(l.Trigger,{placement:"bottom-end",menu:e.jsx(l.Item,{label:"foo"}),children:e.jsx(o,{variant:"primary",label:"Default dropdown",icon:e.jsx(s,{})})})]}),e.jsxs(a,{children:[e.jsx(t,{variant:"secondary",label:"Default"}),e.jsx(l.Trigger,{placement:"bottom-end",menu:e.jsx(l.Item,{label:"foo"}),children:e.jsx(o,{variant:"secondary",label:"Default dropdown",icon:e.jsx(s,{})})})]}),e.jsxs(a,{children:[e.jsx(t,{variant:"destructive",label:"Default"}),e.jsx(l.Trigger,{placement:"bottom-end",menu:e.jsx(l.Item,{label:"foo"}),children:e.jsx(o,{variant:"destructive",label:"Default dropdown",icon:e.jsx(s,{})})})]}),e.jsxs(a,{children:[e.jsx(t,{variant:"quiet",label:"Default"}),e.jsx(l.Trigger,{placement:"bottom-end",menu:e.jsx(l.Item,{label:"foo"}),children:e.jsx(o,{variant:"quiet",label:"Default dropdown",icon:e.jsx(s,{})})})]}),e.jsx(r,{children:"Vertical"}),e.jsxs(a,{orientation:"vertical",children:[e.jsx(t,{label:"Default"}),e.jsx(t,{label:"Hover","data-testid":"hover"}),e.jsx(t,{label:"Active","data-testid":"active"}),e.jsx(t,{label:"Focused","data-testid":"focus"})]})]}),parameters:{pseudo:{hover:'[data-testid="hover"]',active:'[data-testid="active"]',focusVisible:'[data-testid="focus"]'},controls:{disable:!0}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <Select.Select placeholder="Default">{OPTIONS_WITH_GROUP}</Select.Select>
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
          <IconButton variant="default" label="Default dropdown" icon={<DropdownArrow />} />
        </Menu.Trigger>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="primary" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="primary" label="Default dropdown" icon={<DropdownArrow />} />
        </Menu.Trigger>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="secondary" label="Default dropdown" icon={<DropdownArrow />} />
        </Menu.Trigger>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="destructive" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="destructive" label="Default dropdown" icon={<DropdownArrow />} />
        </Menu.Trigger>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="quiet" label="Default" />
        <Menu.Trigger placement="bottom-end" menu={<Menu.Item label="foo" />}>
          <IconButton variant="quiet" label="Default dropdown" icon={<DropdownArrow />} />
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
}`,...i.parameters?.docs?.source}}};const v=["Playground","VisualTest"],y=Object.freeze(Object.defineProperty({__proto__:null,Playground:u,VisualTest:i,__namedExportsOrder:v,default:x},Symbol.toStringTag,{value:"Module"}));export{u as P,y as S};
