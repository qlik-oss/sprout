import{j as e,r as u}from"./iframe-CYyT-rNd.js";import{s as i}from"./sprout-UDUY6uO8.js";import{F as k}from"./Field.argTypes-1rEre7SB.js";import{c as o}from"./classNames-BmP9dLUE.js";import{u as C}from"./useFieldAriaProps-O3JOrChf.js";import{C as a}from"./Checkbox-CEdksXS8.js";import{F as v}from"./Field-WnapnPu6.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BEfewr8x.js";import"./useValueControl-DkREc4sR.js";import"./HelperText-PF_3nKgd.js";import"./InfoTooltipPrimitive-CcAfk6tw.js";import"./Info-kPGn8DpC.js";import"./Tooltip-Bq8n5z5D.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-GWN5S5OT.js";import"./FieldLabel-B0tZljJj.js";import"./useI18n-B8acZ0ym.js";import"./Popover-p0wTHRSq.js";function f({name:t,options:c,children:n,...l}){const{fieldProps:r,ariaProps:s}=C({label:l.label,helpText:l.helpText,errorMessages:l.errorMessages});return e.jsx(v,{...r,...l,children:e.jsxs("div",{className:o("flex","flex-col","border-box","gap-density-l"),role:"group",...s,children:[(c||[]).map(p=>e.jsx(a,{...p},p.label||p.name)),n]})})}f.displayName="CheckboxGroup";const g={checked:{control:{type:"boolean"},description:"If true, the checkbox is checked.",table:{type:{summary:"boolean"}}},defaultChecked:{control:{type:"boolean"},description:"If true, the checkbox is checked by default (uncontrolled).",table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},description:"If true, the checkbox is disabled.",table:{type:{summary:"boolean"}}},helpText:{control:{type:"text"},description:"Additional help text displayed below the checkbox.",table:{type:{summary:"string"}}},indeterminate:{control:{type:"boolean"},description:"If true, the checkbox is in an indeterminate state (controlled).",table:{type:{summary:"boolean"}}},infoIconTooltip:k.infoIconTooltip,label:{control:{type:"text"},description:"The label text displayed next to the checkbox.",table:{type:{summary:"string"}}},name:{control:{type:"text"},description:"The name attribute for the checkbox input.",table:{type:{summary:"string"}}},onChange:{control:!1,description:"Callback function invoked when the checkbox state changes.",table:{type:{summary:"(event: ChangeEvent<HTMLInputElement>) => void"}}}},T={...k,children:{control:!1,description:"Checkbox components to be rendered inside the group.",table:{type:{summary:"ReactNode"}}},isError:{control:{type:"boolean"},description:"If true, the checkbox group is displayed in an error state.",table:{type:{summary:"boolean"}}},options:{control:!1,description:"Array of checkbox options to render within the group.",table:{type:{summary:"CheckboxProps[]"}}}},{fn:y}=__STORYBOOK_MODULE_TEST__,V={title:"Components/Checkbox",component:a},d={render:t=>e.jsx(a,{...t}),args:{name:"checkbox",label:"Checkbox"},argTypes:g,parameters:{chromatic:{disableSnapshot:!0}}},h={render:({onChange:t,...c})=>{const[n,l]=u.useState(!1),r=s=>{l(s.target.checked),t&&t(s)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{"data-testid":"wrapper",className:o("flex","flex-row","border-box","p-s","w-fit"),children:e.jsx(a,{...c,checked:n,onChange:r})}),e.jsxs("p",{className:i.classNames("font-body-s","text-default"),children:["Checked: ",n?"true":"false"]})]})},args:{name:"checkbox",label:"Checkbox",onChange:y(),disabled:!1},argTypes:g,parameters:{chromatic:{disableSnapshot:!0}}},b={render:t=>e.jsx("div",{"data-testid":"wrapper",className:o("flex","flex-row","border-box","p-s","items-start","gap-m","w-fit"),children:e.jsx(f,{...t,options:[{name:"q1",label:"Option 1"},{name:"q2",label:"Option 2"},{name:"q3",label:"Option 3"}]})}),args:{helpText:"Help text",label:"Checkbox Group"},argTypes:T,parameters:{chromatic:{disableSnapshot:!0}}},m={render:()=>{const[t,c]=u.useState([!0,!1]),n=s=>{c([s.target.checked,s.target.checked])},l=s=>{c([s.target.checked,t[1]])},r=s=>{c([t[0],s.target.checked])};return e.jsxs("div",{"data-testid":"wrapper",className:o("flex","flex-col","border-box","p-s","gap-m","w-fit"),children:[e.jsx(a,{label:"Parent",checked:t[0]?t[1]:void 0,indeterminate:t[0]!==t[1],onChange:n}),e.jsxs("div",{className:o("flex","flex-col","border-box","pl-m","items-start","gap-m"),children:[e.jsx(a,{label:"Child 1",checked:t[0],onChange:l}),e.jsx(a,{label:"Child 2",checked:t[1],onChange:r})]})]})},parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}}},x={render:()=>e.jsxs("div",{className:o("flex","flex-col","border-box"),children:[e.jsx("h2",{className:i.classNames("font-heading-m","text-default"),children:"States"}),e.jsxs("div",{className:o("flex","flex-row","border-box","justify-stretch","gap-m"),children:[e.jsxs("div",{className:o("flex","flex-col","border-box","gap-m","justify-stretch"),children:[e.jsx(a,{name:"checkbox1",label:"Uncheck default"}),e.jsx(a,{name:"checkbox1",label:"Uncheck hover","data-testid":"hover"}),e.jsx(a,{name:"checkbox1",label:"Uncheck focus","data-testid":"focus"}),e.jsx(a,{name:"checkbox4",label:"Uncheck disabled",disabled:!0})]}),e.jsxs("div",{className:o("flex","flex-col","border-box","gap-m","justify-stretch"),children:[e.jsx(a,{name:"checkbox2",label:"Indeterminate default",indeterminate:!0}),e.jsx(a,{name:"checkbox2",label:"Indeterminate hover",indeterminate:!0,"data-testid":"hover"}),e.jsx(a,{name:"checkbox3",label:"Indeterminate focus",indeterminate:!0,"data-testid":"focus"}),e.jsx(a,{name:"checkbox5",label:"Indeterminate disabled",indeterminate:!0,disabled:!0})]}),e.jsxs("div",{className:o("flex","flex-col","border-box","gap-m","justify-stretch"),children:[e.jsx(a,{name:"checkbox3",label:"Checked default",checked:!0}),e.jsx(a,{name:"checkbox3",label:"Checked hover",checked:!0,"data-testid":"hover"}),e.jsx(a,{name:"checkbox3",label:"Checked focus",checked:!0,"data-testid":"focus"}),e.jsx(a,{name:"checkbox6",label:"Checked disabled",checked:!0,disabled:!0})]})]}),e.jsx("h2",{className:i.classNames("font-heading-m","text-default"),children:"Tooltip and help text"}),e.jsx("div",{className:o("flex","flex-row","border-box","justify-stretch","gap-m"),children:e.jsxs("div",{className:o("flex","flex-col","border-box","gap-m","justify-stretch"),children:[e.jsx(a,{name:"checkbox1",label:"Uncheck tooltip",infoIconTooltip:"This is some additional info about this checkbox"}),e.jsx(a,{name:"checkbox1",label:"Unchecked with help text and tooltip",helpText:"This is some help text for this checkbox",infoIconTooltip:"This is some additional info about this checkbox"}),e.jsx(a,{name:"checkbox1",checked:!0,label:"Checked with help text and tooltip",helpText:"This is some help text for this checkbox",infoIconTooltip:"This is some additional info about this checkbox"}),e.jsx(a,{name:"checkbox1",disabled:!0,label:"Disabled uncheck tooltip",infoIconTooltip:"This is some additional info about this checkbox"}),e.jsx(a,{name:"checkbox1",disabled:!0,label:"Disabled unchecked with help text and tooltip",helpText:"This is some help text for this checkbox",infoIconTooltip:"This is some additional info about this checkbox"}),e.jsx(a,{name:"checkbox1",checked:!0,disabled:!0,label:"Disabled checked with help text and tooltip",helpText:"This is some help text for this checkbox",infoIconTooltip:"This is some additional info about this checkbox"})]})}),e.jsx("h2",{className:i.classNames("font-heading-m","text-default"),children:"Field"}),e.jsx("div",{"data-testid":"wrapper",className:o("flex","flex-col","border-box","p-s","gap-m","w-fit"),children:e.jsx(f,{label:"Checkbox group",helpText:"help me",options:[{name:"q1",label:"Option 1"},{name:"q2",label:"Option 2"},{name:"q3",label:"Option 3"}]})}),e.jsx("h2",{className:i.classNames("font-heading-m","text-default"),children:"Label overflow"}),e.jsxs("div",{className:o("flex","flex-col","border-box","gap-m"),style:{inlineSize:200},children:[e.jsx(a,{label:"Long label that wraps over to a new row",name:"overflow"}),e.jsx(a,{label:"Longlabelthatwrapsovertoanewrow",name:"overflow"}),e.jsx(a,{label:"Automatically flag outdated records and queue them for clean-up during the nightly maintenance job",name:"overflow"}),e.jsx(a,{label:"Maintain a full audit log of field-level changes so that analysts can reconstruct the exact record state at any point in time",name:"overflow"}),e.jsx(a,{label:"/data/warehouse/customers/archived/2025/region/eu-west/segment/high-value/records",name:"overflow"}),e.jsx(a,{label:"Enable supercalifragilisticexpialidocious mode for enhanced performance and reliability",name:"overflow",infoIconTooltip:"This is some additional info about this checkbox"})]}),e.jsx("h2",{className:i.classNames("font-heading-m","text-default"),children:"Helper text"}),e.jsxs("div",{className:o("flex","flex-col","border-box","gap-m"),style:{inlineSize:200},children:[e.jsx(a,{label:"Enable dark mode",name:"helptext",helpText:"Activates dark mode theme for less eye strain"}),e.jsx(a,{label:"Enable dark mode",name:"helptext",helpText:"Anim cupidatat ex ad voluptate sit occaecat deserunt minim cupidatat ipsum exercitation ex veniam cupidatat. Incididunt culpa dolore duis commodo."})]})]}),parameters:{controls:{disable:!0},pseudo:{hover:'[data-testid="hover"]',focusVisible:'[data-testid="focus"]'}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <Checkbox {...props} />,
  args: {
    name: "checkbox",
    label: "Checkbox"
  },
  argTypes: CheckboxArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: ({
    onChange,
    ...args
  }) => {
    const [checked, setChecked] = useState(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
      if (onChange) {
        onChange(e);
      }
    };
    return <>
        <div data-testid="wrapper" className={classNames("flex", "flex-row", "border-box", "p-s", "w-fit")}>
          <Checkbox {...args} checked={checked} onChange={handleChange} />
        </div>

        <p className={sprout.classNames("font-body-s", "text-default")}>Checked: {checked ? "true" : "false"}</p>
      </>;
  },
  args: {
    name: "checkbox",
    label: "Checkbox",
    onChange: fn(),
    disabled: false
  },
  argTypes: CheckboxArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div data-testid="wrapper" className={classNames("flex", "flex-row", "border-box", "p-s", "items-start", "gap-m", "w-fit")}>
      <CheckboxGroup {...args} options={[{
      name: "q1",
      label: "Option 1"
    }, {
      name: "q2",
      label: "Option 2"
    }, {
      name: "q3",
      label: "Option 3"
    }]} />
    </div>,
  args: {
    helpText: "Help text",
    label: "Checkbox Group"
  },
  argTypes: CheckboxGroupArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState([true, false]);
    const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };
    const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };
    const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };
    return <div data-testid="wrapper" className={classNames("flex", "flex-col", "border-box", "p-s", "gap-m", "w-fit")}>
        <Checkbox label="Parent" checked={checked[0] ? checked[1] : undefined} indeterminate={checked[0] !== checked[1]} onChange={handleChange1} />

        <div className={classNames("flex", "flex-col", "border-box", "pl-m", "items-start", "gap-m")}>
          <Checkbox label="Child 1" checked={checked[0]} onChange={handleChange2} />
          <Checkbox label="Child 2" checked={checked[1]} onChange={handleChange3} />
        </div>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    },
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "border-box")}>
      <h2 className={sprout.classNames("font-heading-m", "text-default")}>States</h2>

      <div className={classNames("flex", "flex-row", "border-box", "justify-stretch", "gap-m")}>
        <div className={classNames("flex", "flex-col", "border-box", "gap-m", "justify-stretch")}>
          <Checkbox name="checkbox1" label="Uncheck default" />
          <Checkbox name="checkbox1" label="Uncheck hover" data-testid="hover" />
          <Checkbox name="checkbox1" label="Uncheck focus" data-testid="focus" />
          <Checkbox name="checkbox4" label="Uncheck disabled" disabled />
        </div>

        <div className={classNames("flex", "flex-col", "border-box", "gap-m", "justify-stretch")}>
          <Checkbox name="checkbox2" label="Indeterminate default" indeterminate />
          <Checkbox name="checkbox2" label="Indeterminate hover" indeterminate data-testid="hover" />
          <Checkbox name="checkbox3" label="Indeterminate focus" indeterminate data-testid="focus" />
          <Checkbox name="checkbox5" label="Indeterminate disabled" indeterminate disabled />
        </div>
        <div className={classNames("flex", "flex-col", "border-box", "gap-m", "justify-stretch")}>
          <Checkbox name="checkbox3" label="Checked default" checked />
          <Checkbox name="checkbox3" label="Checked hover" checked data-testid="hover" />
          <Checkbox name="checkbox3" label="Checked focus" checked data-testid="focus" />
          <Checkbox name="checkbox6" label="Checked disabled" checked disabled />
        </div>
      </div>

      <h2 className={sprout.classNames("font-heading-m", "text-default")}>Tooltip and help text</h2>
      <div className={classNames("flex", "flex-row", "border-box", "justify-stretch", "gap-m")}>
        <div className={classNames("flex", "flex-col", "border-box", "gap-m", "justify-stretch")}>
          <Checkbox name="checkbox1" label="Uncheck tooltip" infoIconTooltip="This is some additional info about this checkbox" />
          <Checkbox name="checkbox1" label="Unchecked with help text and tooltip" helpText="This is some help text for this checkbox" infoIconTooltip="This is some additional info about this checkbox" />
          <Checkbox name="checkbox1" checked label="Checked with help text and tooltip" helpText="This is some help text for this checkbox" infoIconTooltip="This is some additional info about this checkbox" />
          <Checkbox name="checkbox1" disabled label="Disabled uncheck tooltip" infoIconTooltip="This is some additional info about this checkbox" />
          <Checkbox name="checkbox1" disabled label="Disabled unchecked with help text and tooltip" helpText="This is some help text for this checkbox" infoIconTooltip="This is some additional info about this checkbox" />
          <Checkbox name="checkbox1" checked disabled label="Disabled checked with help text and tooltip" helpText="This is some help text for this checkbox" infoIconTooltip="This is some additional info about this checkbox" />
        </div>
      </div>

      <h2 className={sprout.classNames("font-heading-m", "text-default")}>Field</h2>
      <div data-testid="wrapper" className={classNames("flex", "flex-col", "border-box", "p-s", "gap-m", "w-fit")}>
        <CheckboxGroup label="Checkbox group" helpText="help me" options={[{
        name: "q1",
        label: "Option 1"
      }, {
        name: "q2",
        label: "Option 2"
      }, {
        name: "q3",
        label: "Option 3"
      }]} />
      </div>
      <h2 className={sprout.classNames("font-heading-m", "text-default")}>Label overflow</h2>
      <div className={classNames("flex", "flex-col", "border-box", "gap-m")} style={{
      inlineSize: 200
    }}>
        <Checkbox label="Long label that wraps over to a new row" name="overflow" />
        <Checkbox label="Longlabelthatwrapsovertoanewrow" name="overflow" />
        <Checkbox label="Automatically flag outdated records and queue them for clean-up during the nightly maintenance job" name="overflow" />
        <Checkbox label="Maintain a full audit log of field-level changes so that analysts can reconstruct the exact record state at any point in time" name="overflow" />
        <Checkbox label="/data/warehouse/customers/archived/2025/region/eu-west/segment/high-value/records" name="overflow" />
        <Checkbox label="Enable supercalifragilisticexpialidocious mode for enhanced performance and reliability" name="overflow" infoIconTooltip="This is some additional info about this checkbox" />
      </div>
      <h2 className={sprout.classNames("font-heading-m", "text-default")}>Helper text</h2>
      <div className={classNames("flex", "flex-col", "border-box", "gap-m")} style={{
      inlineSize: 200
    }}>
        <Checkbox label="Enable dark mode" name="helptext" helpText="Activates dark mode theme for less eye strain" />

        <Checkbox label="Enable dark mode" name="helptext" helpText="Anim cupidatat ex ad voluptate sit occaecat deserunt minim cupidatat ipsum exercitation ex veniam cupidatat. Incididunt culpa dolore duis commodo." />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-testid="hover"]',
      focusVisible: '[data-testid="focus"]'
    }
  }
}`,...x.parameters?.docs?.source}}};const R=["Playground","Controlled","Group","Indeterminate","VisualTest"];export{h as Controlled,b as Group,m as Indeterminate,d as Playground,x as VisualTest,R as __namedExportsOrder,V as default};
