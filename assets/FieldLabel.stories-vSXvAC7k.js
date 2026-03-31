import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Gn as n,Kn as r,Ln as i,ot as a,v as o}from"./iframe-B0xl5hqz.js";var s,c=e((()=>{s={children:{control:!1,description:`The content to be displayed inside the FieldLabel component.`,table:{type:{summary:`ReactNode`}}},disabled:{control:{type:`boolean`},description:`If true, the field label is displayed in a disabled state.`,table:{type:{summary:`boolean`}}},htmlFor:{control:{type:`text`},description:`The id of the form element that this label is associated with.`,table:{type:{summary:`string`}}},infoIconPopover:{control:`text`,description:`Popover text that appears when clicking on the info icon next to the label.`,table:{type:{summary:`ReactNode`}}},infoIconTooltip:{control:`text`,description:`Tooltip text that appears when hovering over the info icon next to the label.`,table:{type:{summary:`ReactNode`}}},label:{control:{type:`text`},description:`The text label for the field.`,table:{type:{summary:`ReactNode`}}},optional:{control:{type:`boolean`},description:`If true, marks the field as optional.`}}})),l=t({Playground:()=>f,Visualtests:()=>p,__namedExportsOrder:()=>m,default:()=>d}),u,d,f,p,m,h=e((()=>{n(),o(),c(),u=i(),d={title:`Components/FieldLabel`,component:a},f={render:({children:e,...t})=>(0,u.jsx)(a,{...t,children:e}),parameters:{chromatic:{disableSnapshot:!0}},args:{htmlFor:`test`,infoIconTooltip:`This is a tooltip`,optional:!0,disabled:!1,children:`Label`},argTypes:s},p={parameters:{controls:{disable:!0}},render:()=>(0,u.jsxs)(`div`,{className:r.classNames(`flex-noreset`,`flex-col`,`gap-m`),children:[(0,u.jsx)(a,{htmlFor:`default`,children:`Label`}),(0,u.jsx)(a,{htmlFor:`default`,optional:!0,children:`Label`}),(0,u.jsx)(a,{htmlFor:`default`,optional:!0,infoIconTooltip:`My info to display`,children:`Label`}),(0,u.jsx)(a,{htmlFor:`default`,infoIconTooltip:`My info to display`,children:`Label`}),(0,u.jsx)(a,{htmlFor:`default`,infoIconPopover:`My info to display`,children:`Label with info icon popover`}),(0,u.jsx)(a,{htmlFor:`default`,disabled:!0,children:`Label`}),(0,u.jsx)(a,{htmlFor:`default`,disabled:!0,infoIconTooltip:`My info to display`,children:`Label`}),(0,u.jsx)(a,{htmlFor:`default`,disabled:!0,optional:!0,infoIconTooltip:`My info to display`,children:`Label`}),(0,u.jsx)(a,{htmlFor:`default`,disabled:!0,optional:!0,children:`Label`}),(0,u.jsx)(`input`,{type:`hidden`,name:`default`,disabled:!0})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Visualtests`]}));h();export{f as Playground,p as Visualtests,m as __namedExportsOrder,d as default,h as n,l as t};