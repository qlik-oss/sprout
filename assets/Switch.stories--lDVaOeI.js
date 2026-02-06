import{j as e}from"./iframe-Dux6zP9l.js";import{S as t}from"./Switch-DtHxX4Gf.js";import{c as a}from"./classNames-T6EAEAwi.js";const d={disabled:{control:"boolean",table:{type:{summary:"boolean"}}},readOnly:{control:"boolean",description:"Custom prop to visualize the read-only state. Checkboxes does not support `readonly` as a native attribute. [HTML attribute: readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/readonly)",table:{type:{summary:"boolean"}}},label:{control:"text",description:"Label for the switch",table:{type:{summary:"string"}}},infoIconTooltip:{if:{arg:"label",truthy:!0},control:"text",description:"Tooltip text that appears when hovering over the info icon next to the label.",table:{type:{summary:"string"}}},helpText:{if:{arg:"label",truthy:!0},control:{type:"text"},description:"The text that describes the switch. It is optional if you only want the switch. It can't be used without a label.",table:{type:{summary:"string"}}},"aria-label":{control:"text",description:"Accessible label for the switch, required if label is not provided",table:{type:{summary:"string"}}},"aria-labelledby":{control:"text",description:"ID of an element that labels the switch, required if label is not provided",table:{type:{summary:"string"}}}},{fn:c}=__STORYBOOK_MODULE_TEST__,n={title:"Components/Switch",component:t,parameters:{}},r={chromatic:{disableSnapshot:!0}},l={render:o=>e.jsx("div",{"data-testid":"wrapper",className:a("flex","flex-row","border-box","w-fit","p-m"),children:e.jsx(t,{...o})}),args:{name:"switch",label:"Label"},argTypes:d,parameters:r},s={render:o=>e.jsx("div",{"data-testid":"wrapper",className:a("flex","flex-row","border-box","w-fit","p-m"),children:e.jsx(t,{...o})}),args:{name:"switch",label:"Label",onChange:c()},argTypes:{...d,checked:{control:"select",options:[void 0,!0,!1]}},parameters:r},i={render:()=>e.jsxs("div",{className:a("flex","flex-col","border-box","gap-m"),children:[e.jsxs("div",{className:a("flex","flex-row","border-box","gap-m"),children:[e.jsxs("div",{className:a("flex","flex-row","border-box","p-l","flex-col","gap-m","border-default"),children:[e.jsx("h3",{className:a("font-heading-s","text-default"),children:"unchecked + label"}),e.jsx(t,{label:"Default"}),e.jsx(t,{label:"Hover","data-testid":"hover"}),e.jsx(t,{label:"Pressed","data-testid":"active"}),e.jsx(t,{label:"Focus","data-testid":"focus"}),e.jsx(t,{label:"Disabled",disabled:!0}),e.jsx(t,{label:"readOnly",readOnly:!0})]}),e.jsxs("div",{className:a("flex","flex-row","border-box","p-l","flex-col","gap-m","border-default"),children:[e.jsx("h3",{className:a("font-heading-s","text-default"),children:"checked + label"}),e.jsx(t,{label:"Checked",checked:!0}),e.jsx(t,{label:"Hover",checked:!0,"data-testid":"hover"}),e.jsx(t,{label:"Pressed",checked:!0,"data-testid":"active"}),e.jsx(t,{label:"Focus",checked:!0,"data-testid":"focus"}),e.jsx(t,{label:"Disabled",checked:!0,disabled:!0}),e.jsx(t,{label:"readOnly",checked:!0,readOnly:!0})]}),e.jsxs("div",{className:a("flex","flex-row","border-box","p-l","flex-col","gap-m","border-default"),children:[e.jsx("h3",{className:a("font-heading-s","text-default"),children:"unchecked + aria-label"}),e.jsx(t,{"aria-label":"Checked"}),e.jsx(t,{"aria-label":"Hover","data-testid":"hover"}),e.jsx(t,{"aria-label":"Pressed","data-testid":"active"}),e.jsx(t,{"aria-label":"Focus","data-testid":"focus"}),e.jsx(t,{"aria-label":"Disabled",disabled:!0}),e.jsx(t,{"aria-label":"readOnly",readOnly:!0})]}),e.jsxs("div",{className:a("flex","flex-row","border-box","p-l","flex-col","gap-m","border-default"),children:[e.jsx("h3",{className:a("font-heading-s","text-default"),children:"checked + aria-label"}),e.jsx(t,{"aria-label":"Checked",checked:!0}),e.jsx(t,{"aria-label":"Hover",checked:!0,"data-testid":"hover"}),e.jsx(t,{"aria-label":"Pressed",checked:!0,"data-testid":"active"}),e.jsx(t,{"aria-label":"Focus",checked:!0,"data-testid":"focus"}),e.jsx(t,{"aria-label":"Disabled",checked:!0,disabled:!0}),e.jsx(t,{"aria-label":"readOnly",checked:!0,readOnly:!0})]})]}),e.jsxs("div",{className:a("flex","flex-row","border-box","gap-m"),children:[e.jsxs("div",{className:a("flex","flex-row","border-box","p-l","gap-m","flex-col","border-default"),style:{inlineSize:"150px"},children:[e.jsx("h3",{className:a("font-heading-s","text-default"),children:"overflow"}),e.jsx(t,{label:"LongLabelWithOverflow",checked:!0}),e.jsx(t,{label:"LongLabelWithOverflowWithHelpText",helpText:"thisisareallylonghelptextanditjustkeepsgoingandgoingwithoutanyspaces",checked:!0}),e.jsx(t,{label:"Really long label with overflow but not one long string"}),e.jsx(t,{label:"Really long label with overflow but not one long string with help text",helpText:"this is a really long help text and it just keeps going and going"})]}),e.jsxs("div",{className:a("flex","flex-row","border-box","p-l","flex-col","gap-m","border-default"),children:[e.jsx("h3",{className:a("font-heading-s","text-default"),children:"label + helpText + info icon"}),e.jsx(t,{label:"Default",helpText:"this is a help text",infoIconTooltip:"info icon tooltip"}),e.jsx(t,{label:"Hover",helpText:"this is a help text",infoIconTooltip:"info icon tooltip","data-testid":"hover"}),e.jsx(t,{label:"Pressed",helpText:"this is a help text",infoIconTooltip:"info icon tooltip","data-testid":"active"}),e.jsx(t,{label:"Focus",helpText:"this is a help text",infoIconTooltip:"info icon tooltip","data-testid":"focus"}),e.jsx(t,{label:"Disabled",helpText:"this is a help text",infoIconTooltip:"info icon tooltip",disabled:!0}),e.jsx(t,{label:"readOnly",helpText:"this is a help text",infoIconTooltip:"info icon tooltip",readOnly:!0})]}),e.jsxs("div",{className:a("flex","flex-row","border-box","p-l","flex-col","gap-m","border-default"),children:[e.jsx("h3",{className:a("font-heading-s","text-default"),children:"unchecked + label + helpText"}),e.jsx(t,{label:"Default",helpText:"this is a help text"}),e.jsx(t,{label:"Hover",helpText:"this is a help text","data-testid":"hover"}),e.jsx(t,{label:"Pressed",helpText:"this is a help text","data-testid":"active"}),e.jsx(t,{label:"Focus",helpText:"this is a help text","data-testid":"focus"}),e.jsx(t,{label:"Disabled",helpText:"this is a help text",disabled:!0}),e.jsx(t,{label:"readOnly",helpText:"this is a help text",readOnly:!0})]}),e.jsxs("div",{className:a("flex","flex-row","border-box","p-l","flex-col","gap-m","border-default"),children:[e.jsx("h3",{className:a("font-heading-s","text-default"),children:"checked + label + helpText"}),e.jsx(t,{label:"Default",checked:!0,helpText:"this is a help text"}),e.jsx(t,{label:"Hover",checked:!0,helpText:"this is a help text","data-testid":"hover"}),e.jsx(t,{label:"Pressed",checked:!0,helpText:"this is a help text","data-testid":"active"}),e.jsx(t,{label:"Focus",checked:!0,helpText:"this is a help text","data-testid":"focus"}),e.jsx(t,{label:"Disabled",checked:!0,helpText:"this is a help text",disabled:!0}),e.jsx(t,{label:"readOnly",checked:!0,helpText:"this is a help text",readOnly:!0})]})]})]}),parameters:{pseudo:{hover:"span:has([data-testid=hover]) input",focusVisible:"[data-testid=focus]",active:"span:has([data-testid=active]) input"},controls:{disable:!0}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: SwitchProps) => <div data-testid="wrapper" className={classNames("flex", "flex-row", "border-box", "w-fit", "p-m")}>
      <Switch {...args} />
    </div>,
  args: {
    name: "switch",
    label: "Label"
  },
  argTypes: SwitchArgTypes,
  parameters: disableSnap
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: SwitchProps) => <div data-testid="wrapper" className={classNames("flex", "flex-row", "border-box", "w-fit", "p-m")}>
      <Switch {...args} />
    </div>,
  args: {
    name: "switch",
    label: "Label",
    onChange: fn()
  },
  argTypes: {
    ...SwitchArgTypes,
    checked: {
      control: "select",
      options: [undefined, true, false]
    }
  },
  parameters: disableSnap
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "border-box", "gap-m")}>
      <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>unchecked + label</h3>
          <Switch label="Default" />
          <Switch label="Hover" data-testid="hover" />
          <Switch label="Pressed" data-testid="active" />
          <Switch label="Focus" data-testid="focus" />
          <Switch label="Disabled" disabled />
          <Switch label="readOnly" readOnly />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>checked + label</h3>
          <Switch label="Checked" checked />
          <Switch label="Hover" checked data-testid="hover" />
          <Switch label="Pressed" checked data-testid="active" />
          <Switch label="Focus" checked data-testid="focus" />
          <Switch label="Disabled" checked disabled />
          <Switch label="readOnly" checked readOnly />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>unchecked + aria-label</h3>
          <Switch aria-label="Checked" />
          <Switch aria-label="Hover" data-testid="hover" />
          <Switch aria-label="Pressed" data-testid="active" />
          <Switch aria-label="Focus" data-testid="focus" />
          <Switch aria-label="Disabled" disabled />
          <Switch aria-label="readOnly" readOnly />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>checked + aria-label</h3>
          <Switch aria-label="Checked" checked />
          <Switch aria-label="Hover" checked data-testid="hover" />
          <Switch aria-label="Pressed" checked data-testid="active" />
          <Switch aria-label="Focus" checked data-testid="focus" />
          <Switch aria-label="Disabled" checked disabled />
          <Switch aria-label="readOnly" checked readOnly />
        </div>
      </div>

      <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
        <div className={classNames("flex", "flex-row", "border-box", "p-l", "gap-m", "flex-col", "border-default")} style={{
        inlineSize: "150px"
      }}>
          <h3 className={classNames("font-heading-s", "text-default")}>overflow</h3>
          <Switch label="LongLabelWithOverflow" checked />
          <Switch label="LongLabelWithOverflowWithHelpText" helpText="thisisareallylonghelptextanditjustkeepsgoingandgoingwithoutanyspaces" checked />
          <Switch label="Really long label with overflow but not one long string" />
          <Switch label="Really long label with overflow but not one long string with help text" helpText="this is a really long help text and it just keeps going and going" />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>label + helpText + info icon</h3>
          <Switch label="Default" helpText="this is a help text" infoIconTooltip="info icon tooltip" />
          <Switch label="Hover" helpText="this is a help text" infoIconTooltip="info icon tooltip" data-testid="hover" />
          <Switch label="Pressed" helpText="this is a help text" infoIconTooltip="info icon tooltip" data-testid="active" />
          <Switch label="Focus" helpText="this is a help text" infoIconTooltip="info icon tooltip" data-testid="focus" />
          <Switch label="Disabled" helpText="this is a help text" infoIconTooltip="info icon tooltip" disabled />
          <Switch label="readOnly" helpText="this is a help text" infoIconTooltip="info icon tooltip" readOnly />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>unchecked + label + helpText</h3>
          <Switch label="Default" helpText="this is a help text" />
          <Switch label="Hover" helpText="this is a help text" data-testid="hover" />
          <Switch label="Pressed" helpText="this is a help text" data-testid="active" />
          <Switch label="Focus" helpText="this is a help text" data-testid="focus" />
          <Switch label="Disabled" helpText="this is a help text" disabled />
          <Switch label="readOnly" helpText="this is a help text" readOnly />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>checked + label + helpText</h3>
          <Switch label="Default" checked helpText="this is a help text" />
          <Switch label="Hover" checked helpText="this is a help text" data-testid="hover" />
          <Switch label="Pressed" checked helpText="this is a help text" data-testid="active" />
          <Switch label="Focus" checked helpText="this is a help text" data-testid="focus" />
          <Switch label="Disabled" checked helpText="this is a help text" disabled />
          <Switch label="readOnly" checked helpText="this is a help text" readOnly />
        </div>
      </div>
    </div>,
  parameters: {
    pseudo: {
      hover: "span:has([data-testid=hover]) input",
      focusVisible: "[data-testid=focus]",
      active: "span:has([data-testid=active]) input"
    },
    controls: {
      disable: true
    }
  }
}`,...i.parameters?.docs?.source}}};const h=["Uncontrolled","Controlled","VisualTest"],f=Object.freeze(Object.defineProperty({__proto__:null,Controlled:s,Uncontrolled:l,VisualTest:i,__namedExportsOrder:h,default:n},Symbol.toStringTag,{value:"Module"}));export{f as S,l as U};
