import{n as e}from"./chunk-DseTPa7n.js";import"./react-sE-G6KV_.js";import{t}from"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as n}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{N as r}from"./iframe-URhFfzNK.js";var i={children:{control:!1,description:`The content to be displayed inside the FieldLabel component.`,table:{type:{summary:`ReactNode`}}},disabled:{control:{type:`boolean`},description:`If true, the field label is displayed in a disabled state.`,table:{type:{summary:`boolean`}}},htmlFor:{control:{type:`text`},description:`The id of the form element that this label is associated with.`,table:{type:{summary:`string`}}},infoIconPopover:{control:`text`,description:`Popover text that appears when clicking on the info icon next to the label.`,table:{type:{summary:`ReactNode`}}},infoIconTooltip:{control:`text`,description:`Tooltip text that appears when hovering over the info icon next to the label.`,table:{type:{summary:`ReactNode`}}},label:{control:{type:`text`},description:`The text label for the field.`,table:{type:{summary:`ReactNode`}}},optional:{control:{type:`boolean`},description:`If true, marks the field as optional.`}},a=e({Playground:()=>c,Visualtests:()=>l,__namedExportsOrder:()=>u,default:()=>s}),o=n(),s={title:`Components/FieldLabel`,component:r},c={render:({children:e,...t})=>(0,o.jsx)(r,{...t,children:e}),parameters:{chromatic:{disableSnapshot:!0}},args:{htmlFor:`test`,infoIconTooltip:`This is a tooltip`,optional:!0,disabled:!1,children:`Label`},argTypes:i},l={parameters:{controls:{disable:!0}},render:()=>(0,o.jsxs)(`div`,{className:t.classNames(`flex-noreset`,`flex-col`,`gap-m`),children:[(0,o.jsx)(r,{htmlFor:`default`,children:`Label`}),(0,o.jsx)(r,{htmlFor:`default`,optional:!0,children:`Label`}),(0,o.jsx)(r,{htmlFor:`default`,optional:!0,infoIconTooltip:`My info to display`,children:`Label`}),(0,o.jsx)(r,{htmlFor:`default`,infoIconTooltip:`My info to display`,children:`Label`}),(0,o.jsx)(r,{htmlFor:`default`,infoIconPopover:`My info to display`,children:`Label with info icon popover`}),(0,o.jsx)(r,{htmlFor:`default`,disabled:!0,children:`Label`}),(0,o.jsx)(r,{htmlFor:`default`,disabled:!0,infoIconTooltip:`My info to display`,children:`Label`}),(0,o.jsx)(r,{htmlFor:`default`,disabled:!0,optional:!0,infoIconTooltip:`My info to display`,children:`Label`}),(0,o.jsx)(r,{htmlFor:`default`,disabled:!0,optional:!0,children:`Label`}),(0,o.jsx)(`input`,{type:`hidden`,name:`default`,disabled:!0})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ({
    children,
    ...props
  }) => <FieldLabel {...props}>{children}</FieldLabel>,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    htmlFor: "test",
    infoIconTooltip: "This is a tooltip",
    optional: true,
    disabled: false,
    children: "Label"
  },
  argTypes: FieldLabelArgTypes
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={sprout.classNames("flex-noreset", "flex-col", "gap-m")}>
      <FieldLabel htmlFor="default">Label</FieldLabel>
      <FieldLabel htmlFor="default" optional>
        Label
      </FieldLabel>
      <FieldLabel htmlFor="default" optional infoIconTooltip="My info to display">
        Label
      </FieldLabel>
      <FieldLabel htmlFor="default" infoIconTooltip="My info to display">
        Label
      </FieldLabel>
      <FieldLabel htmlFor="default" infoIconPopover="My info to display">
        Label with info icon popover
      </FieldLabel>
      <FieldLabel htmlFor="default" disabled>
        Label
      </FieldLabel>
      <FieldLabel htmlFor="default" disabled infoIconTooltip="My info to display">
        Label
      </FieldLabel>
      <FieldLabel htmlFor="default" disabled optional infoIconTooltip="My info to display">
        Label
      </FieldLabel>
      <FieldLabel htmlFor="default" disabled optional>
        Label
      </FieldLabel>
      <input type="hidden" name="default" disabled />
    </div>
}`,...l.parameters?.docs?.source}}};var u=[`Playground`,`Visualtests`];export{c as Playground,l as Visualtests,u as __namedExportsOrder,s as default,a as t};