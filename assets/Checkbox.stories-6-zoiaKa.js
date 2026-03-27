import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-sE-G6KV_.js";import{t as n}from"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as r}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{F as i,M as a,hn as o,j as s}from"./iframe-B5xoaqtW.js";import{n as c}from"./Field.argTypes-DCC5yWA1.js";var l=r();function u({name:e,options:t,children:n,...r}){let{fieldProps:c,ariaProps:u}=s({label:r.label,helpText:r.helpText,errorMessages:r.errorMessages});return(0,l.jsx)(a,{...c,...r,children:(0,l.jsxs)(`div`,{className:o(`flex`,`flex-col`,`border-box`,`gap-density-l`),role:`group`,...u,children:[(t||[]).map(e=>(0,l.jsx)(i,{...e},e.label||e.name)),n]})})}u.displayName=`CheckboxGroup`;var d=e(t()),f={checked:{control:{type:`boolean`},description:`If true, the checkbox is checked.`,table:{type:{summary:`boolean`}}},defaultChecked:{control:{type:`boolean`},description:`If true, the checkbox is checked by default (uncontrolled).`,table:{type:{summary:`boolean`}}},disabled:{control:{type:`boolean`},description:`If true, the checkbox is disabled.`,table:{type:{summary:`boolean`}}},helpText:{control:{type:`text`},description:`Additional help text displayed below the checkbox.`,table:{type:{summary:`string`}}},indeterminate:{control:{type:`boolean`},description:`If true, the checkbox is in an indeterminate state (controlled).`,table:{type:{summary:`boolean`}}},infoIconTooltip:c.infoIconTooltip,label:{control:{type:`text`},description:`The label text displayed next to the checkbox.`,table:{type:{summary:`string`}}},name:{control:{type:`text`},description:`The name attribute for the checkbox input.`,table:{type:{summary:`string`}}},onChange:{control:!1,description:`Callback function invoked when the checkbox state changes.`,table:{type:{summary:`(event: ChangeEvent<HTMLInputElement>) => void`}}}},p={...c,children:{control:!1,description:`Checkbox components to be rendered inside the group.`,table:{type:{summary:`ReactNode`}}},isError:{control:{type:`boolean`},description:`If true, the checkbox group is displayed in an error state.`,table:{type:{summary:`boolean`}}},options:{control:!1,description:`Array of checkbox options to render within the group.`,table:{type:{summary:`CheckboxProps[]`}}}},{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Checkbox`,component:i},g={render:e=>(0,l.jsx)(i,{...e}),args:{name:`checkbox`,label:`Checkbox`},argTypes:f,parameters:{chromatic:{disableSnapshot:!0}}},_={render:({onChange:e,...t})=>{let[r,a]=(0,d.useState)(!1),s=t=>{a(t.target.checked),e&&e(t)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`div`,{"data-testid":`wrapper`,className:o(`flex`,`flex-row`,`border-box`,`p-s`,`w-fit`),children:(0,l.jsx)(i,{...t,checked:r,onChange:s})}),(0,l.jsxs)(`p`,{className:n.classNames(`font-body-s`,`text-default`),children:[`Checked: `,r?`true`:`false`]})]})},args:{name:`checkbox`,label:`Checkbox`,onChange:m(),disabled:!1},argTypes:f,parameters:{chromatic:{disableSnapshot:!0}}},v={render:e=>(0,l.jsx)(`div`,{"data-testid":`wrapper`,className:o(`flex`,`flex-row`,`border-box`,`p-s`,`items-start`,`gap-m`,`w-fit`),children:(0,l.jsx)(u,{...e,options:[{name:`q1`,label:`Option 1`},{name:`q2`,label:`Option 2`},{name:`q3`,label:`Option 3`}]})}),args:{helpText:`Help text`,label:`Checkbox Group`},argTypes:p,parameters:{chromatic:{disableSnapshot:!0}}},y={render:()=>{let[e,t]=(0,d.useState)([!0,!1]),n=e=>{t([e.target.checked,e.target.checked])},r=n=>{t([n.target.checked,e[1]])},a=n=>{t([e[0],n.target.checked])};return(0,l.jsxs)(`div`,{"data-testid":`wrapper`,className:o(`flex`,`flex-col`,`border-box`,`p-s`,`gap-m`,`w-fit`),children:[(0,l.jsx)(i,{label:`Parent`,checked:e[0]?e[1]:void 0,indeterminate:e[0]!==e[1],onChange:n}),(0,l.jsxs)(`div`,{className:o(`flex`,`flex-col`,`border-box`,`pl-m`,`items-start`,`gap-m`),children:[(0,l.jsx)(i,{label:`Child 1`,checked:e[0],onChange:r}),(0,l.jsx)(i,{label:`Child 2`,checked:e[1],onChange:a})]})]})},parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}}},b={render:()=>(0,l.jsxs)(`div`,{className:o(`flex`,`flex-col`,`border-box`),children:[(0,l.jsx)(`h2`,{className:n.classNames(`font-heading-m`,`text-default`),children:`States`}),(0,l.jsxs)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`justify-stretch`,`gap-m`),children:[(0,l.jsxs)(`div`,{className:o(`flex`,`flex-col`,`border-box`,`gap-m`,`justify-stretch`),children:[(0,l.jsx)(i,{name:`checkbox1`,label:`Uncheck default`}),(0,l.jsx)(i,{name:`checkbox1`,label:`Uncheck hover`,"data-testid":`hover`}),(0,l.jsx)(i,{name:`checkbox1`,label:`Uncheck focus`,"data-testid":`focus`}),(0,l.jsx)(i,{name:`checkbox4`,label:`Uncheck disabled`,disabled:!0})]}),(0,l.jsxs)(`div`,{className:o(`flex`,`flex-col`,`border-box`,`gap-m`,`justify-stretch`),children:[(0,l.jsx)(i,{name:`checkbox2`,label:`Indeterminate default`,indeterminate:!0}),(0,l.jsx)(i,{name:`checkbox2`,label:`Indeterminate hover`,indeterminate:!0,"data-testid":`hover`}),(0,l.jsx)(i,{name:`checkbox3`,label:`Indeterminate focus`,indeterminate:!0,"data-testid":`focus`}),(0,l.jsx)(i,{name:`checkbox5`,label:`Indeterminate disabled`,indeterminate:!0,disabled:!0})]}),(0,l.jsxs)(`div`,{className:o(`flex`,`flex-col`,`border-box`,`gap-m`,`justify-stretch`),children:[(0,l.jsx)(i,{name:`checkbox3`,label:`Checked default`,checked:!0}),(0,l.jsx)(i,{name:`checkbox3`,label:`Checked hover`,checked:!0,"data-testid":`hover`}),(0,l.jsx)(i,{name:`checkbox3`,label:`Checked focus`,checked:!0,"data-testid":`focus`}),(0,l.jsx)(i,{name:`checkbox6`,label:`Checked disabled`,checked:!0,disabled:!0})]})]}),(0,l.jsx)(`h2`,{className:n.classNames(`font-heading-m`,`text-default`),children:`Tooltip and help text`}),(0,l.jsx)(`div`,{className:o(`flex`,`flex-row`,`border-box`,`justify-stretch`,`gap-m`),children:(0,l.jsxs)(`div`,{className:o(`flex`,`flex-col`,`border-box`,`gap-m`,`justify-stretch`),children:[(0,l.jsx)(i,{name:`checkbox1`,label:`Uncheck tooltip`,infoIconTooltip:`This is some additional info about this checkbox`}),(0,l.jsx)(i,{name:`checkbox1`,label:`Unchecked with help text and tooltip`,helpText:`This is some help text for this checkbox`,infoIconTooltip:`This is some additional info about this checkbox`}),(0,l.jsx)(i,{name:`checkbox1`,checked:!0,label:`Checked with help text and tooltip`,helpText:`This is some help text for this checkbox`,infoIconTooltip:`This is some additional info about this checkbox`}),(0,l.jsx)(i,{name:`checkbox1`,disabled:!0,label:`Disabled uncheck tooltip`,infoIconTooltip:`This is some additional info about this checkbox`}),(0,l.jsx)(i,{name:`checkbox1`,disabled:!0,label:`Disabled unchecked with help text and tooltip`,helpText:`This is some help text for this checkbox`,infoIconTooltip:`This is some additional info about this checkbox`}),(0,l.jsx)(i,{name:`checkbox1`,checked:!0,disabled:!0,label:`Disabled checked with help text and tooltip`,helpText:`This is some help text for this checkbox`,infoIconTooltip:`This is some additional info about this checkbox`})]})}),(0,l.jsx)(`h2`,{className:n.classNames(`font-heading-m`,`text-default`),children:`Field`}),(0,l.jsx)(`div`,{"data-testid":`wrapper`,className:o(`flex`,`flex-col`,`border-box`,`p-s`,`gap-m`,`w-fit`),children:(0,l.jsx)(u,{label:`Checkbox group`,helpText:`help me`,options:[{name:`q1`,label:`Option 1`},{name:`q2`,label:`Option 2`},{name:`q3`,label:`Option 3`}]})}),(0,l.jsx)(`h2`,{className:n.classNames(`font-heading-m`,`text-default`),children:`Label overflow`}),(0,l.jsxs)(`div`,{className:o(`flex`,`flex-col`,`border-box`,`gap-m`),style:{inlineSize:200},children:[(0,l.jsx)(i,{label:`Long label that wraps over to a new row`,name:`overflow`}),(0,l.jsx)(i,{label:`Longlabelthatwrapsovertoanewrow`,name:`overflow`}),(0,l.jsx)(i,{label:`Automatically flag outdated records and queue them for clean-up during the nightly maintenance job`,name:`overflow`}),(0,l.jsx)(i,{label:`Maintain a full audit log of field-level changes so that analysts can reconstruct the exact record state at any point in time`,name:`overflow`}),(0,l.jsx)(i,{label:`/data/warehouse/customers/archived/2025/region/eu-west/segment/high-value/records`,name:`overflow`}),(0,l.jsx)(i,{label:`Enable supercalifragilisticexpialidocious mode for enhanced performance and reliability`,name:`overflow`,infoIconTooltip:`This is some additional info about this checkbox`})]}),(0,l.jsx)(`h2`,{className:n.classNames(`font-heading-m`,`text-default`),children:`Helper text`}),(0,l.jsxs)(`div`,{className:o(`flex`,`flex-col`,`border-box`,`gap-m`),style:{inlineSize:200},children:[(0,l.jsx)(i,{label:`Enable dark mode`,name:`helptext`,helpText:`Activates dark mode theme for less eye strain`}),(0,l.jsx)(i,{label:`Enable dark mode`,name:`helptext`,helpText:`Anim cupidatat ex ad voluptate sit occaecat deserunt minim cupidatat ipsum exercitation ex veniam cupidatat. Incididunt culpa dolore duis commodo.`})]})]}),parameters:{controls:{disable:!0},pseudo:{hover:`[data-testid="hover"]`,focusVisible:`[data-testid="focus"]`}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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

        <p className={sprout.classNames("font-body-s", "text-default")}>
          Checked: {checked ? "true" : "false"}
        </p>
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "border-box")}>
      <h2 className={sprout.classNames("font-heading-m", "text-default")}>
        States
      </h2>

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

      <h2 className={sprout.classNames("font-heading-m", "text-default")}>
        Tooltip and help text
      </h2>
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

      <h2 className={sprout.classNames("font-heading-m", "text-default")}>
        Field
      </h2>
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
      <h2 className={sprout.classNames("font-heading-m", "text-default")}>
        Label overflow
      </h2>
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
      <h2 className={sprout.classNames("font-heading-m", "text-default")}>
        Helper text
      </h2>
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
}`,...b.parameters?.docs?.source}}};var x=[`Playground`,`Controlled`,`Group`,`Indeterminate`,`VisualTest`];export{_ as Controlled,v as Group,y as Indeterminate,g as Playground,b as VisualTest,x as __namedExportsOrder,h as default};