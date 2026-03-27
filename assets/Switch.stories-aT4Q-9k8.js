import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Fn as n,M as r,Pn as i,v as a}from"./iframe-RiXBydPV.js";var o,s=e((()=>{o={disabled:{control:`boolean`,table:{type:{summary:`boolean`}}},readOnly:{control:`boolean`,description:"Custom prop to visualize the read-only state. Checkboxes does not support `readonly` as a native attribute. [HTML attribute: readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/readonly)",table:{type:{summary:`boolean`}}},label:{control:`text`,description:`Label for the switch`,table:{type:{summary:`string`}}},infoIconTooltip:{if:{arg:`label`,truthy:!0},control:`text`,description:`Tooltip text that appears when hovering over the info icon next to the label.`,table:{type:{summary:`string`}}},helpText:{if:{arg:`label`,truthy:!0},control:{type:`text`},description:`The text that describes the switch. It is optional if you only want the switch. It can't be used without a label.`,table:{type:{summary:`string`}}},"aria-label":{control:`text`,description:`Accessible label for the switch, required if label is not provided`,table:{type:{summary:`string`}}},"aria-labelledby":{control:`text`,description:`ID of an element that labels the switch, required if label is not provided`,table:{type:{summary:`string`}}}}})),c=t({Controlled:()=>m,Uncontrolled:()=>p,VisualTest:()=>h,__namedExportsOrder:()=>g,default:()=>d}),l,u,d,f,p,m,h,g,_=e((()=>{a(),s(),l=n(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Switch`,component:r,parameters:{}},f={chromatic:{disableSnapshot:!0}},p={render:e=>(0,l.jsx)(`div`,{"data-testid":`wrapper`,className:i(`flex`,`flex-row`,`border-box`,`w-fit`,`p-m`),children:(0,l.jsx)(r,{...e})}),args:{name:`switch`,label:`Label`},argTypes:o,parameters:f},m={render:e=>(0,l.jsx)(`div`,{"data-testid":`wrapper`,className:i(`flex`,`flex-row`,`border-box`,`w-fit`,`p-m`),children:(0,l.jsx)(r,{...e})}),args:{name:`switch`,label:`Label`,onChange:u()},argTypes:{...o,checked:{control:`select`,options:[void 0,!0,!1]}},parameters:f},h={render:()=>(0,l.jsxs)(`div`,{className:i(`flex`,`flex-col`,`border-box`,`gap-m`),children:[(0,l.jsxs)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,l.jsxs)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`p-l`,`flex-col`,`gap-m`,`border-default`),children:[(0,l.jsx)(`h3`,{className:i(`font-heading-s`,`text-default`),children:`unchecked + label`}),(0,l.jsx)(r,{label:`Default`}),(0,l.jsx)(r,{label:`Hover`,"data-testid":`hover`}),(0,l.jsx)(r,{label:`Pressed`,"data-testid":`active`}),(0,l.jsx)(r,{label:`Focus`,"data-testid":`focus`}),(0,l.jsx)(r,{label:`Disabled`,disabled:!0}),(0,l.jsx)(r,{label:`readOnly`,readOnly:!0})]}),(0,l.jsxs)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`p-l`,`flex-col`,`gap-m`,`border-default`),children:[(0,l.jsx)(`h3`,{className:i(`font-heading-s`,`text-default`),children:`checked + label`}),(0,l.jsx)(r,{label:`Checked`,checked:!0}),(0,l.jsx)(r,{label:`Hover`,checked:!0,"data-testid":`hover`}),(0,l.jsx)(r,{label:`Pressed`,checked:!0,"data-testid":`active`}),(0,l.jsx)(r,{label:`Focus`,checked:!0,"data-testid":`focus`}),(0,l.jsx)(r,{label:`Disabled`,checked:!0,disabled:!0}),(0,l.jsx)(r,{label:`readOnly`,checked:!0,readOnly:!0})]}),(0,l.jsxs)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`p-l`,`flex-col`,`gap-m`,`border-default`),children:[(0,l.jsx)(`h3`,{className:i(`font-heading-s`,`text-default`),children:`unchecked + aria-label`}),(0,l.jsx)(r,{"aria-label":`Checked`}),(0,l.jsx)(r,{"aria-label":`Hover`,"data-testid":`hover`}),(0,l.jsx)(r,{"aria-label":`Pressed`,"data-testid":`active`}),(0,l.jsx)(r,{"aria-label":`Focus`,"data-testid":`focus`}),(0,l.jsx)(r,{"aria-label":`Disabled`,disabled:!0}),(0,l.jsx)(r,{"aria-label":`readOnly`,readOnly:!0})]}),(0,l.jsxs)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`p-l`,`flex-col`,`gap-m`,`border-default`),children:[(0,l.jsx)(`h3`,{className:i(`font-heading-s`,`text-default`),children:`checked + aria-label`}),(0,l.jsx)(r,{"aria-label":`Checked`,checked:!0}),(0,l.jsx)(r,{"aria-label":`Hover`,checked:!0,"data-testid":`hover`}),(0,l.jsx)(r,{"aria-label":`Pressed`,checked:!0,"data-testid":`active`}),(0,l.jsx)(r,{"aria-label":`Focus`,checked:!0,"data-testid":`focus`}),(0,l.jsx)(r,{"aria-label":`Disabled`,checked:!0,disabled:!0}),(0,l.jsx)(r,{"aria-label":`readOnly`,checked:!0,readOnly:!0})]})]}),(0,l.jsxs)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,l.jsxs)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`p-l`,`gap-m`,`flex-col`,`border-default`),style:{inlineSize:`150px`},children:[(0,l.jsx)(`h3`,{className:i(`font-heading-s`,`text-default`),children:`overflow`}),(0,l.jsx)(r,{label:`LongLabelWithOverflow`,checked:!0}),(0,l.jsx)(r,{label:`LongLabelWithOverflowWithHelpText`,helpText:`thisisareallylonghelptextanditjustkeepsgoingandgoingwithoutanyspaces`,checked:!0}),(0,l.jsx)(r,{label:`Really long label with overflow but not one long string`}),(0,l.jsx)(r,{label:`Really long label with overflow but not one long string with help text`,helpText:`this is a really long help text and it just keeps going and going`})]}),(0,l.jsxs)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`p-l`,`flex-col`,`gap-m`,`border-default`),children:[(0,l.jsx)(`h3`,{className:i(`font-heading-s`,`text-default`),children:`label + helpText + info icon`}),(0,l.jsx)(r,{label:`Default`,helpText:`this is a help text`,infoIconTooltip:`info icon tooltip`}),(0,l.jsx)(r,{label:`Hover`,helpText:`this is a help text`,infoIconTooltip:`info icon tooltip`,"data-testid":`hover`}),(0,l.jsx)(r,{label:`Pressed`,helpText:`this is a help text`,infoIconTooltip:`info icon tooltip`,"data-testid":`active`}),(0,l.jsx)(r,{label:`Focus`,helpText:`this is a help text`,infoIconTooltip:`info icon tooltip`,"data-testid":`focus`}),(0,l.jsx)(r,{label:`Disabled`,helpText:`this is a help text`,infoIconTooltip:`info icon tooltip`,disabled:!0}),(0,l.jsx)(r,{label:`readOnly`,helpText:`this is a help text`,infoIconTooltip:`info icon tooltip`,readOnly:!0})]}),(0,l.jsxs)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`p-l`,`flex-col`,`gap-m`,`border-default`),children:[(0,l.jsx)(`h3`,{className:i(`font-heading-s`,`text-default`),children:`unchecked + label + helpText`}),(0,l.jsx)(r,{label:`Default`,helpText:`this is a help text`}),(0,l.jsx)(r,{label:`Hover`,helpText:`this is a help text`,"data-testid":`hover`}),(0,l.jsx)(r,{label:`Pressed`,helpText:`this is a help text`,"data-testid":`active`}),(0,l.jsx)(r,{label:`Focus`,helpText:`this is a help text`,"data-testid":`focus`}),(0,l.jsx)(r,{label:`Disabled`,helpText:`this is a help text`,disabled:!0}),(0,l.jsx)(r,{label:`readOnly`,helpText:`this is a help text`,readOnly:!0})]}),(0,l.jsxs)(`div`,{className:i(`flex`,`flex-row`,`border-box`,`p-l`,`flex-col`,`gap-m`,`border-default`),children:[(0,l.jsx)(`h3`,{className:i(`font-heading-s`,`text-default`),children:`checked + label + helpText`}),(0,l.jsx)(r,{label:`Default`,checked:!0,helpText:`this is a help text`}),(0,l.jsx)(r,{label:`Hover`,checked:!0,helpText:`this is a help text`,"data-testid":`hover`}),(0,l.jsx)(r,{label:`Pressed`,checked:!0,helpText:`this is a help text`,"data-testid":`active`}),(0,l.jsx)(r,{label:`Focus`,checked:!0,helpText:`this is a help text`,"data-testid":`focus`}),(0,l.jsx)(r,{label:`Disabled`,checked:!0,helpText:`this is a help text`,disabled:!0}),(0,l.jsx)(r,{label:`readOnly`,checked:!0,helpText:`this is a help text`,readOnly:!0})]})]})]}),parameters:{pseudo:{hover:`span:has([data-testid=hover]) input`,focusVisible:`[data-testid=focus]`,active:`span:has([data-testid=active]) input`},controls:{disable:!0}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: SwitchProps) => <div data-testid="wrapper" className={classNames("flex", "flex-row", "border-box", "w-fit", "p-m")}>
      <Switch {...args} />
    </div>,
  args: {
    name: "switch",
    label: "Label"
  },
  argTypes: SwitchArgTypes,
  parameters: disableSnap
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "border-box", "gap-m")}>
      <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>
            unchecked + label
          </h3>
          <Switch label="Default" />
          <Switch label="Hover" data-testid="hover" />
          <Switch label="Pressed" data-testid="active" />
          <Switch label="Focus" data-testid="focus" />
          <Switch label="Disabled" disabled />
          <Switch label="readOnly" readOnly />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>
            checked + label
          </h3>
          <Switch label="Checked" checked />
          <Switch label="Hover" checked data-testid="hover" />
          <Switch label="Pressed" checked data-testid="active" />
          <Switch label="Focus" checked data-testid="focus" />
          <Switch label="Disabled" checked disabled />
          <Switch label="readOnly" checked readOnly />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>
            unchecked + aria-label
          </h3>
          <Switch aria-label="Checked" />
          <Switch aria-label="Hover" data-testid="hover" />
          <Switch aria-label="Pressed" data-testid="active" />
          <Switch aria-label="Focus" data-testid="focus" />
          <Switch aria-label="Disabled" disabled />
          <Switch aria-label="readOnly" readOnly />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>
            checked + aria-label
          </h3>
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
          <h3 className={classNames("font-heading-s", "text-default")}>
            overflow
          </h3>
          <Switch label="LongLabelWithOverflow" checked />
          <Switch label="LongLabelWithOverflowWithHelpText" helpText="thisisareallylonghelptextanditjustkeepsgoingandgoingwithoutanyspaces" checked />
          <Switch label="Really long label with overflow but not one long string" />
          <Switch label="Really long label with overflow but not one long string with help text" helpText="this is a really long help text and it just keeps going and going" />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>
            label + helpText + info icon
          </h3>
          <Switch label="Default" helpText="this is a help text" infoIconTooltip="info icon tooltip" />
          <Switch label="Hover" helpText="this is a help text" infoIconTooltip="info icon tooltip" data-testid="hover" />
          <Switch label="Pressed" helpText="this is a help text" infoIconTooltip="info icon tooltip" data-testid="active" />
          <Switch label="Focus" helpText="this is a help text" infoIconTooltip="info icon tooltip" data-testid="focus" />
          <Switch label="Disabled" helpText="this is a help text" infoIconTooltip="info icon tooltip" disabled />
          <Switch label="readOnly" helpText="this is a help text" infoIconTooltip="info icon tooltip" readOnly />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>
            unchecked + label + helpText
          </h3>
          <Switch label="Default" helpText="this is a help text" />
          <Switch label="Hover" helpText="this is a help text" data-testid="hover" />
          <Switch label="Pressed" helpText="this is a help text" data-testid="active" />
          <Switch label="Focus" helpText="this is a help text" data-testid="focus" />
          <Switch label="Disabled" helpText="this is a help text" disabled />
          <Switch label="readOnly" helpText="this is a help text" readOnly />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>
            checked + label + helpText
          </h3>
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
}`,...h.parameters?.docs?.source}}},g=[`Uncontrolled`,`Controlled`,`VisualTest`]}));_();export{m as Controlled,p as Uncontrolled,h as VisualTest,g as __namedExportsOrder,d as default,_ as n,c as t};