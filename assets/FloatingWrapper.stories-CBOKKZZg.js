import{j as e}from"./iframe-B4Gn7jRD.js";import{F as d}from"./Delete-fA9YqxRL.js";import{T as m}from"./ToggleButton-CZUrFsw1.js";import{T as x}from"./ToggleIconButton-3GjFGE00.js";import{F as a}from"./FloatingWrapper-DqyIwrdS.js";import{B as g}from"./Button-DuNeVE70.js";import{c as r}from"./classNames-CTBLippR.js";import{I as u}from"./IconButton-CoZ792nv.js";import{T as p}from"./TextField-BiWstluF.js";const b={title:"Components/FloatingWrapper",component:a},l={parameters:{chromatic:{disableSnapshot:!0}},render:()=>e.jsx("div",{className:r("flex","border-box","flex-col"),children:e.jsx(a,{children:e.jsx(g,{label:"label"})})})},o={parameters:{chromatic:{disableSnapshot:!0}},render:()=>e.jsx("div",{className:r("flex","border-box","flex-col"),children:e.jsx(a,{children:e.jsx(u,{icon:e.jsx(d,{}),label:"label"})})})},n={parameters:{chromatic:{disableSnapshot:!0}},render:()=>e.jsx("div",{className:r("flex","border-box","flex-col"),children:e.jsx(a,{children:e.jsx(m,{label:"label",defaultToggled:!0})})})},s={parameters:{chromatic:{disableSnapshot:!0}},render:()=>e.jsx("div",{className:r("flex","border-box","flex-col"),children:e.jsx(a,{children:e.jsx(x,{icon:e.jsx(d,{}),label:"label",defaultToggled:!0})})})},t={parameters:{chromatic:{disableSnapshot:!0}},render:()=>e.jsx("div",{className:r("flex","border-box","flex-col"),children:e.jsx(a,{children:e.jsx(p,{defaultValue:"value"})})})},c={parameters:{chromatic:{disableSnapshot:!0}},render:()=>e.jsx("div",{className:r("flex","border-box","flex-col"),children:e.jsx(a,{children:e.jsx(p,{type:"search",placeholder:"Search"})})})},i={render:()=>e.jsxs("div",{className:r("flex","border-box","flex-col","gap-xl"),children:[e.jsx(a,{children:e.jsx(g,{label:"label"})}),e.jsx(a,{children:e.jsx(u,{icon:e.jsx(d,{}),label:"label"})}),e.jsx(a,{children:e.jsx(m,{label:"label",defaultToggled:!0})}),e.jsx(a,{children:e.jsx(x,{icon:e.jsx(d,{}),label:"label",defaultToggled:!0})}),e.jsx(a,{children:e.jsx(p,{defaultValue:"value"})}),e.jsx(a,{children:e.jsx(p,{type:"search",placeholder:"Search"})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <div className={classNames("flex", "border-box", "flex-col")}>
      <FloatingWrapper>
        <Button label="label" />
      </FloatingWrapper>
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <div className={classNames("flex", "border-box", "flex-col")}>
      <FloatingWrapper>
        <IconButton icon={<DeleteIcon />} label="label" />
      </FloatingWrapper>
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <div className={classNames("flex", "border-box", "flex-col")}>
      <FloatingWrapper>
        <ToggleButton label="label" defaultToggled />
      </FloatingWrapper>
    </div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <div className={classNames("flex", "border-box", "flex-col")}>
      <FloatingWrapper>
        <ToggleIconButton icon={<DeleteIcon />} label="label" defaultToggled />
      </FloatingWrapper>
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <div className={classNames("flex", "border-box", "flex-col")}>
      <FloatingWrapper>
        <TextField defaultValue="value" />
      </FloatingWrapper>
    </div>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <div className={classNames("flex", "border-box", "flex-col")}>
      <FloatingWrapper>
        <TextField type="search" placeholder="Search" />
      </FloatingWrapper>
    </div>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className={classNames("flex", "border-box", "flex-col", "gap-xl")}>
        <FloatingWrapper>
          <Button label="label" />
        </FloatingWrapper>
        <FloatingWrapper>
          <IconButton icon={<DeleteIcon />} label="label" />
        </FloatingWrapper>
        <FloatingWrapper>
          <ToggleButton label="label" defaultToggled />
        </FloatingWrapper>
        <FloatingWrapper>
          <ToggleIconButton icon={<DeleteIcon />} label="label" defaultToggled />
        </FloatingWrapper>
        <FloatingWrapper>
          <TextField defaultValue="value" />
        </FloatingWrapper>
        <FloatingWrapper>
          <TextField type="search" placeholder="Search" />
        </FloatingWrapper>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const h=["FloatingButton","FloatingIconButton","FloatingToggleButton","FloatingToggleIconButton","FloatingTextField","FloatingTextFieldSearch","VisualTest"],I=Object.freeze(Object.defineProperty({__proto__:null,FloatingButton:l,FloatingIconButton:o,FloatingTextField:t,FloatingTextFieldSearch:c,FloatingToggleButton:n,FloatingToggleIconButton:s,VisualTest:i,__namedExportsOrder:h,default:b},Symbol.toStringTag,{value:"Module"}));export{l as F,I as S,o as a,n as b,s as c,t as d,c as e};
