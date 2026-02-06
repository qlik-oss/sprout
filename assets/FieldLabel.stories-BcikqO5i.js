import{j as e}from"./iframe-qjjAf_pH.js";import{s as i}from"./sprout-Dvd5rbSu.js";import{F as l}from"./FieldLabel-bQ0UMnrf.js";const r={children:{control:!1,description:"The content to be displayed inside the FieldLabel component.",table:{type:{summary:"ReactNode"}}},disabled:{control:{type:"boolean"},description:"If true, the field label is displayed in a disabled state.",table:{type:{summary:"boolean"}}},htmlFor:{control:{type:"text"},description:"The id of the form element that this label is associated with.",table:{type:{summary:"string"}}},infoIconPopover:{control:"text",description:"Popover text that appears when clicking on the info icon next to the label.",table:{type:{summary:"ReactNode"}}},infoIconTooltip:{control:"text",description:"Tooltip text that appears when hovering over the info icon next to the label.",table:{type:{summary:"ReactNode"}}},label:{control:{type:"text"},description:"The text label for the field.",table:{type:{summary:"ReactNode"}}},optional:{control:{type:"boolean"},description:"If true, marks the field as optional."}},s={title:"Components/FieldLabel",component:l},o={render:({children:a,...n})=>e.jsx(l,{...n,children:a}),parameters:{chromatic:{disableSnapshot:!0}},args:{htmlFor:"test",infoIconTooltip:"This is a tooltip",optional:!0,disabled:!1,children:"Label"},argTypes:r},t={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{className:i.classNames("flex-noreset","flex-col","gap-m"),children:[e.jsx(l,{htmlFor:"default",children:"Label"}),e.jsx(l,{htmlFor:"default",optional:!0,children:"Label"}),e.jsx(l,{htmlFor:"default",optional:!0,infoIconTooltip:"My info to display",children:"Label"}),e.jsx(l,{htmlFor:"default",infoIconTooltip:"My info to display",children:"Label"}),e.jsx(l,{htmlFor:"default",infoIconPopover:"My info to display",children:"Label with info icon popover"}),e.jsx(l,{htmlFor:"default",disabled:!0,children:"Label"}),e.jsx(l,{htmlFor:"default",disabled:!0,infoIconTooltip:"My info to display",children:"Label"}),e.jsx(l,{htmlFor:"default",disabled:!0,optional:!0,infoIconTooltip:"My info to display",children:"Label"}),e.jsx(l,{htmlFor:"default",disabled:!0,optional:!0,children:"Label"}),e.jsx("input",{type:"hidden",name:"default",disabled:!0})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const d=["Playground","Visualtests"],m=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,Visualtests:t,__namedExportsOrder:d,default:s},Symbol.toStringTag,{value:"Module"}));export{o as P,m as S};
