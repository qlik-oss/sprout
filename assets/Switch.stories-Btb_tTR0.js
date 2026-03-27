import{n as e}from"./chunk-DseTPa7n.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t as n}from"./Switch-eV8c4OmO.js";import{hn as r}from"./iframe-B5xoaqtW.js";var i={disabled:{control:`boolean`,table:{type:{summary:`boolean`}}},readOnly:{control:`boolean`,description:"Custom prop to visualize the read-only state. Checkboxes does not support `readonly` as a native attribute. [HTML attribute: readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/readonly)",table:{type:{summary:`boolean`}}},label:{control:`text`,description:`Label for the switch`,table:{type:{summary:`string`}}},infoIconTooltip:{if:{arg:`label`,truthy:!0},control:`text`,description:`Tooltip text that appears when hovering over the info icon next to the label.`,table:{type:{summary:`string`}}},helpText:{if:{arg:`label`,truthy:!0},control:{type:`text`},description:`The text that describes the switch. It is optional if you only want the switch. It can't be used without a label.`,table:{type:{summary:`string`}}},"aria-label":{control:`text`,description:`Accessible label for the switch, required if label is not provided`,table:{type:{summary:`string`}}},"aria-labelledby":{control:`text`,description:`ID of an element that labels the switch, required if label is not provided`,table:{type:{summary:`string`}}}},a=e({Controlled:()=>d,Uncontrolled:()=>u,VisualTest:()=>f,__namedExportsOrder:()=>p,default:()=>c}),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Switch`,component:n,parameters:{}},l={chromatic:{disableSnapshot:!0}},u={render:e=>(0,o.jsx)(`div`,{"data-testid":`wrapper`,className:r(`flex`,`flex-row`,`border-box`,`w-fit`,`p-m`),children:(0,o.jsx)(n,{...e})}),args:{name:`switch`,label:`Label`},argTypes:i,parameters:l},d={render:e=>(0,o.jsx)(`div`,{"data-testid":`wrapper`,className:r(`flex`,`flex-row`,`border-box`,`w-fit`,`p-m`),children:(0,o.jsx)(n,{...e})}),args:{name:`switch`,label:`Label`,onChange:s()},argTypes:{...i,checked:{control:`select`,options:[void 0,!0,!1]}},parameters:l},f={render:()=>(0,o.jsxs)(`div`,{className:r(`flex`,`flex-col`,`border-box`,`gap-m`),children:[(0,o.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,o.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`p-l`,`flex-col`,`gap-m`,`border-default`),children:[(0,o.jsx)(`h3`,{className:r(`font-heading-s`,`text-default`),children:`unchecked + label`}),(0,o.jsx)(n,{label:`Default`}),(0,o.jsx)(n,{label:`Hover`,"data-testid":`hover`}),(0,o.jsx)(n,{label:`Pressed`,"data-testid":`active`}),(0,o.jsx)(n,{label:`Focus`,"data-testid":`focus`}),(0,o.jsx)(n,{label:`Disabled`,disabled:!0}),(0,o.jsx)(n,{label:`readOnly`,readOnly:!0})]}),(0,o.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`p-l`,`flex-col`,`gap-m`,`border-default`),children:[(0,o.jsx)(`h3`,{className:r(`font-heading-s`,`text-default`),children:`checked + label`}),(0,o.jsx)(n,{label:`Checked`,checked:!0}),(0,o.jsx)(n,{label:`Hover`,checked:!0,"data-testid":`hover`}),(0,o.jsx)(n,{label:`Pressed`,checked:!0,"data-testid":`active`}),(0,o.jsx)(n,{label:`Focus`,checked:!0,"data-testid":`focus`}),(0,o.jsx)(n,{label:`Disabled`,checked:!0,disabled:!0}),(0,o.jsx)(n,{label:`readOnly`,checked:!0,readOnly:!0})]}),(0,o.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`p-l`,`flex-col`,`gap-m`,`border-default`),children:[(0,o.jsx)(`h3`,{className:r(`font-heading-s`,`text-default`),children:`unchecked + aria-label`}),(0,o.jsx)(n,{"aria-label":`Checked`}),(0,o.jsx)(n,{"aria-label":`Hover`,"data-testid":`hover`}),(0,o.jsx)(n,{"aria-label":`Pressed`,"data-testid":`active`}),(0,o.jsx)(n,{"aria-label":`Focus`,"data-testid":`focus`}),(0,o.jsx)(n,{"aria-label":`Disabled`,disabled:!0}),(0,o.jsx)(n,{"aria-label":`readOnly`,readOnly:!0})]}),(0,o.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`p-l`,`flex-col`,`gap-m`,`border-default`),children:[(0,o.jsx)(`h3`,{className:r(`font-heading-s`,`text-default`),children:`checked + aria-label`}),(0,o.jsx)(n,{"aria-label":`Checked`,checked:!0}),(0,o.jsx)(n,{"aria-label":`Hover`,checked:!0,"data-testid":`hover`}),(0,o.jsx)(n,{"aria-label":`Pressed`,checked:!0,"data-testid":`active`}),(0,o.jsx)(n,{"aria-label":`Focus`,checked:!0,"data-testid":`focus`}),(0,o.jsx)(n,{"aria-label":`Disabled`,checked:!0,disabled:!0}),(0,o.jsx)(n,{"aria-label":`readOnly`,checked:!0,readOnly:!0})]})]}),(0,o.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,o.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`p-l`,`gap-m`,`flex-col`,`border-default`),style:{inlineSize:`150px`},children:[(0,o.jsx)(`h3`,{className:r(`font-heading-s`,`text-default`),children:`overflow`}),(0,o.jsx)(n,{label:`LongLabelWithOverflow`,checked:!0}),(0,o.jsx)(n,{label:`LongLabelWithOverflowWithHelpText`,helpText:`thisisareallylonghelptextanditjustkeepsgoingandgoingwithoutanyspaces`,checked:!0}),(0,o.jsx)(n,{label:`Really long label with overflow but not one long string`}),(0,o.jsx)(n,{label:`Really long label with overflow but not one long string with help text`,helpText:`this is a really long help text and it just keeps going and going`})]}),(0,o.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`p-l`,`flex-col`,`gap-m`,`border-default`),children:[(0,o.jsx)(`h3`,{className:r(`font-heading-s`,`text-default`),children:`label + helpText + info icon`}),(0,o.jsx)(n,{label:`Default`,helpText:`this is a help text`,infoIconTooltip:`info icon tooltip`}),(0,o.jsx)(n,{label:`Hover`,helpText:`this is a help text`,infoIconTooltip:`info icon tooltip`,"data-testid":`hover`}),(0,o.jsx)(n,{label:`Pressed`,helpText:`this is a help text`,infoIconTooltip:`info icon tooltip`,"data-testid":`active`}),(0,o.jsx)(n,{label:`Focus`,helpText:`this is a help text`,infoIconTooltip:`info icon tooltip`,"data-testid":`focus`}),(0,o.jsx)(n,{label:`Disabled`,helpText:`this is a help text`,infoIconTooltip:`info icon tooltip`,disabled:!0}),(0,o.jsx)(n,{label:`readOnly`,helpText:`this is a help text`,infoIconTooltip:`info icon tooltip`,readOnly:!0})]}),(0,o.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`p-l`,`flex-col`,`gap-m`,`border-default`),children:[(0,o.jsx)(`h3`,{className:r(`font-heading-s`,`text-default`),children:`unchecked + label + helpText`}),(0,o.jsx)(n,{label:`Default`,helpText:`this is a help text`}),(0,o.jsx)(n,{label:`Hover`,helpText:`this is a help text`,"data-testid":`hover`}),(0,o.jsx)(n,{label:`Pressed`,helpText:`this is a help text`,"data-testid":`active`}),(0,o.jsx)(n,{label:`Focus`,helpText:`this is a help text`,"data-testid":`focus`}),(0,o.jsx)(n,{label:`Disabled`,helpText:`this is a help text`,disabled:!0}),(0,o.jsx)(n,{label:`readOnly`,helpText:`this is a help text`,readOnly:!0})]}),(0,o.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`p-l`,`flex-col`,`gap-m`,`border-default`),children:[(0,o.jsx)(`h3`,{className:r(`font-heading-s`,`text-default`),children:`checked + label + helpText`}),(0,o.jsx)(n,{label:`Default`,checked:!0,helpText:`this is a help text`}),(0,o.jsx)(n,{label:`Hover`,checked:!0,helpText:`this is a help text`,"data-testid":`hover`}),(0,o.jsx)(n,{label:`Pressed`,checked:!0,helpText:`this is a help text`,"data-testid":`active`}),(0,o.jsx)(n,{label:`Focus`,checked:!0,helpText:`this is a help text`,"data-testid":`focus`}),(0,o.jsx)(n,{label:`Disabled`,checked:!0,helpText:`this is a help text`,disabled:!0}),(0,o.jsx)(n,{label:`readOnly`,checked:!0,helpText:`this is a help text`,readOnly:!0})]})]})]}),parameters:{pseudo:{hover:`span:has([data-testid=hover]) input`,focusVisible:`[data-testid=focus]`,active:`span:has([data-testid=active]) input`},controls:{disable:!0}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (args: SwitchProps) => <div data-testid="wrapper" className={classNames("flex", "flex-row", "border-box", "w-fit", "p-m")}>
      <Switch {...args} />
    </div>,
  args: {
    name: "switch",
    label: "Label"
  },
  argTypes: SwitchArgTypes,
  parameters: disableSnap
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};var p=[`Uncontrolled`,`Controlled`,`VisualTest`];export{d as Controlled,u as Uncontrolled,f as VisualTest,p as __namedExportsOrder,c as default,a as t};