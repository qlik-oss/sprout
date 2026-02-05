import{j as e}from"./iframe-B4vjk2_C.js";import{s}from"./sprout-DTAeqvbL.js";import{F as r}from"./Field.argTypes-1rEre7SB.js";import{R as l}from"./RadioGroup-CWBNoSvI.js";import{R as a}from"./Radio-CD9AnLjJ.js";const n={errorMessages:{control:{labels:{first:"One error message",second:"Two error messages"},type:"select"},description:"The error messages that will be shown if the field is marked as error. Note when errorMessages is set, the helpText is ignored.",mapping:{"one msg":["Error message 1"],"two msg":["Error message 1","Error message 2"]},options:[void 0,"one msg","two msg"],table:{type:{summary:"string[]"}}},helpText:{control:"text",description:"Help text displayed below the radio group.",table:{type:{summary:"string"}}},isError:{control:"boolean",description:"If true, the radio group will be marked as error.",table:{type:{summary:"boolean"}}},label:{control:"text",description:"The label for the radio group.",table:{type:{summary:"string"}}},name:{control:"text",description:"The name of the radio group, used to group the radios together.",table:{type:{summary:"string"}}}},p={checked:{control:"boolean",table:{type:{summary:"boolean"}}},defaultChecked:{control:"boolean",description:"The default checked state of the radio.",table:{type:{summary:"boolean"}}},disabled:{control:"boolean",table:{type:{summary:"boolean"}}},label:{control:"text",description:"The label for the radio.",table:{type:{summary:"string"}}},helpText:{control:"text",description:"Help text displayed below the individual radio.",table:{type:{summary:"string"}}},infoIconTooltip:{if:{arg:"label"},...r.infoIconTooltip},name:{control:"text",description:"The name of the radio, used to group radios together.",table:{type:{summary:"string"}}},readOnly:{control:"boolean",table:{type:{summary:"boolean"}}},value:{control:"text",table:{type:{summary:"string"}}}},c={title:"Components/RadioGroup",component:l,parameters:{}},o={render:d=>e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsxs(l,{...d,children:[e.jsx(a,{label:"Cat",value:"cat",name:"test"}),e.jsx(a,{label:"Dog",value:"dog",name:"test"}),e.jsx(a,{label:"Horse",value:"horse",name:"test"}),e.jsx(a,{label:"Dodo",value:"dodo",disabled:!0,name:"test"})]})}),args:{name:"radio-group",label:"Radio Group",helpText:"Select one of the options"},argTypes:n,parameters:{chromatic:{disableSnapshot:!0}}},t={render:d=>e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{...d})}),args:{label:"Radio"},argTypes:p,parameters:{chromatic:{disableSnapshot:!0}}},i={render:()=>e.jsxs("div",{className:s.classNames("flex","flex-row","w-fit","gap-3xl"),children:[e.jsxs("div",{className:s.classNames("flex","flex-col"),children:[e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{label:"Default"})}),e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{label:"Hover","data-testid":"hover"})}),e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{label:"Focus","data-testid":"focus"})}),e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{label:"With help text",helpText:"This is help text for this radio option"})}),e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{label:"Disabled",disabled:!0})}),e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{label:"readOnly",readOnly:!0})})]}),e.jsxs("div",{className:s.classNames("flex","flex-col"),children:[e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{label:"Checked",checked:!0})}),e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{label:"Hover",checked:!0,"data-testid":"hover"})}),e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{label:"Focus",checked:!0,"data-testid":"focus"})}),e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{label:"Disabled",checked:!0,disabled:!0})}),e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{label:"readOnly",readOnly:!0,checked:!0})}),e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{label:"Checked with help",checked:!0,helpText:"Additional context for this option"})})]}),e.jsxs("div",{className:s.classNames("flex","flex-row","w-fit"),children:[e.jsxs(l,{name:"radio-group",label:"Radio Group",helpText:"helpText",children:[e.jsx(a,{label:"Cat",value:"cat",name:"radio-group",checked:!0}),e.jsx(a,{label:"Dog",value:"dog",name:"radio-group"}),e.jsx(a,{label:"Horse",value:"horse",name:"radio-group"}),e.jsx(a,{label:"Dodo",value:"dodo",disabled:!0,name:"radio-group"}),e.jsx(a,{label:"Dodo",value:"dodo",readOnly:!0,name:"radio-group"})]}),e.jsxs(l,{name:"radio-group-bis",label:"isError",isError:!0,helpText:"helpText",errorMessages:["This is an error message"],children:[e.jsx(a,{label:"Cat",value:"cat",name:"radio-group-bis"}),e.jsx(a,{label:"Dog",value:"dog",name:"radio-group-bis"}),e.jsx(a,{label:"Horse",value:"horse",name:"radio-group-bis"}),e.jsx(a,{label:"Dodo",value:"dodo",disabled:!0,name:"radio-group-bis"}),e.jsx(a,{label:"Dodo",value:"dodo",readOnly:!0,name:"radio-group-bis"})]})]}),e.jsxs("div",{className:s.classNames("flex"),children:[e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{label:"Unchecked with tooltip",infoIconTooltip:"This is some additional info about this radio option"})}),e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{label:"Unchecked with help and tooltip",helpText:"Additional context for this option",infoIconTooltip:"This is some additional info about this radio option"})}),e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{readOnly:!0,label:"Readonly unchecked with help and tooltip",helpText:"Additional context for this option",infoIconTooltip:"This is some additional info about this radio option"})}),e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{disabled:!0,label:"Disabled unchecked with help and tooltip",helpText:"Additional context for this option",infoIconTooltip:"This is some additional info about this radio option"})}),e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{label:"Checked with help",checked:!0,infoIconTooltip:"This is some additional info about this radio option"})}),e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{label:"Checked with help and tooltip",checked:!0,helpText:"Additional context for this option",infoIconTooltip:"This is some additional info about this radio option"})}),e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{readOnly:!0,label:"Readonly checked with help and tooltip",checked:!0,helpText:"Additional context for this option",infoIconTooltip:"This is some additional info about this radio option"})}),e.jsx("div",{className:s.classNames("flex","p-m","w-fit"),"data-testid":"wrapper",children:e.jsx(a,{disabled:!0,label:"Disabled checked with help and tooltip",checked:!0,helpText:"Additional context for this option",infoIconTooltip:"This is some additional info about this radio option"})})]})]}),parameters:{pseudo:{hover:"[data-testid=hover]",focusVisible:"[data-testid=focus]"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
      <RadioGroup {...args}>
        <Radio label="Cat" value="cat" name="test" />
        <Radio label="Dog" value="dog" name="test" />
        <Radio label="Horse" value="horse" name="test" />
        <Radio label="Dodo" value="dodo" disabled name="test" />
      </RadioGroup>
    </div>,
  args: {
    name: "radio-group",
    label: "Radio Group",
    helpText: "Select one of the options"
  },
  argTypes: RadioGroupArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
      <Radio {...args} />
    </div>,
  args: {
    label: "Radio"
  },
  argTypes: RadioArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className={sprout.classNames("flex", "flex-row", "w-fit", "gap-3xl")}>
      <div className={sprout.classNames("flex", "flex-col")}>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio label="Default" />
        </div>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio label="Hover" data-testid="hover" />
        </div>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio label="Focus" data-testid="focus" />
        </div>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio label="With help text" helpText="This is help text for this radio option" />
        </div>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio label="Disabled" disabled />
        </div>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio label="readOnly" readOnly />
        </div>
      </div>
      <div className={sprout.classNames("flex", "flex-col")}>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio label="Checked" checked />
        </div>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio label="Hover" checked data-testid="hover" />
        </div>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio label="Focus" checked data-testid="focus" />
        </div>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio label="Disabled" checked disabled />
        </div>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio label="readOnly" readOnly checked />
        </div>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio label="Checked with help" checked helpText="Additional context for this option" />
        </div>
      </div>
      <div className={sprout.classNames("flex", "flex-row", "w-fit")}>
        <RadioGroup name="radio-group" label="Radio Group" helpText="helpText">
          <Radio label="Cat" value="cat" name="radio-group" checked />
          <Radio label="Dog" value="dog" name="radio-group" />
          <Radio label="Horse" value="horse" name="radio-group" />
          <Radio label="Dodo" value="dodo" disabled name="radio-group" />
          <Radio label="Dodo" value="dodo" readOnly name="radio-group" />
        </RadioGroup>
        <RadioGroup name="radio-group-bis" label="isError" isError helpText="helpText" errorMessages={["This is an error message"]}>
          <Radio label="Cat" value="cat" name="radio-group-bis" />
          <Radio label="Dog" value="dog" name="radio-group-bis" />
          <Radio label="Horse" value="horse" name="radio-group-bis" />
          <Radio label="Dodo" value="dodo" disabled name="radio-group-bis" />
          <Radio label="Dodo" value="dodo" readOnly name="radio-group-bis" />
        </RadioGroup>
      </div>
      <div className={sprout.classNames("flex")}>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio label="Unchecked with tooltip" infoIconTooltip="This is some additional info about this radio option" />
        </div>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio label="Unchecked with help and tooltip" helpText="Additional context for this option" infoIconTooltip="This is some additional info about this radio option" />
        </div>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio readOnly label="Readonly unchecked with help and tooltip" helpText="Additional context for this option" infoIconTooltip="This is some additional info about this radio option" />
        </div>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio disabled label="Disabled unchecked with help and tooltip" helpText="Additional context for this option" infoIconTooltip="This is some additional info about this radio option" />
        </div>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio label="Checked with help" checked infoIconTooltip="This is some additional info about this radio option" />
        </div>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio label="Checked with help and tooltip" checked helpText="Additional context for this option" infoIconTooltip="This is some additional info about this radio option" />
        </div>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio readOnly label="Readonly checked with help and tooltip" checked helpText="Additional context for this option" infoIconTooltip="This is some additional info about this radio option" />
        </div>
        <div className={sprout.classNames("flex", "p-m", "w-fit")} data-testid="wrapper">
          <Radio disabled label="Disabled checked with help and tooltip" checked helpText="Additional context for this option" infoIconTooltip="This is some additional info about this radio option" />
        </div>
      </div>
    </div>,
  parameters: {
    pseudo: {
      hover: "[data-testid=hover]",
      focusVisible: "[data-testid=focus]"
    }
  }
}`,...i.parameters?.docs?.source}}};const m=["Playground","RadioButton","VisualTests"],v=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,RadioButton:t,VisualTests:i,__namedExportsOrder:m,default:c},Symbol.toStringTag,{value:"Module"}));export{o as P,t as R,v as S};
