import{j as e}from"./iframe-B9QkJTIx.js";import{F as O,a as v,b as g}from"./Text-CFyCRCFc.js";import{a as j}from"./icons-BGgmQIFx.js";import{C as w,F as y}from"./Field.argTypes-1rEre7SB.js";import{O as n}from"./SelectTest-yHRQ0YZL.js";import{S as l}from"./SelectComposition-C03WeBSC.js";import{c as t}from"./classNames-CL7ibyjj.js";const f=({options:a})=>({...y,...w,size:{control:{type:"select"},options:[void 0,"default","small"],table:{defaultValue:{summary:"default"},type:{summary:"default | small"}}},defaultValue:{control:"select",description:"The default value of the field.",table:{type:{summary:"string"}},options:a},value:{control:"select",options:a,description:"The value of the field.",table:{type:{summary:"string"}}},onChange:{description:"The function that will be called when the value of the field changes.",table:{type:{summary:"(e: ChangeEvent) => void"}}},renderValue:{description:"The function that will be called to render the value of the field if any.",table:{type:{summary:"(value: string, selectedProps?: OptionProps) => ReactNode;"}}},selectedValueDisplay:{description:"Defines how the selected value is displayed in the closed select field.",control:{type:"select"},options:["full","label"],table:{defaultValue:{summary:"full"},type:{summary:"full | label"}}},children:{description:"The options of the field. They are used to populate the field.",table:{type:{summary:"ReactNode"}}}}),{fn:T}=__STORYBOOK_MODULE_TEST__,k={title:"Components/Select",component:l.Select},o={chromatic:{disableSnapshot:!0}},s={render:a=>e.jsx("div",{className:t("flex","border-box","items-start","w-s"),"data-testid":"wrapper",children:e.jsxs(l.Select,{...a,"aria-label":"Color",children:[e.jsx(l.Option,{value:"",children:"None"}),n,e.jsx(l.Divider,{}),e.jsxs(l.OptGroup,{label:"Deprecated Colors",children:[e.jsx(l.Option,{value:"chartreuse",children:e.jsx(l.OptionStyled,{label:"Chartreuse",description:"nice color btw"})}),e.jsx(l.Option,{value:"cornsilk",children:e.jsx("i",{children:"Cornsilk"})}),e.jsx(l.Option,{value:"pink",children:e.jsx(l.OptionStyled,{label:"Gainsboro",icon:e.jsx(O,{})})}),e.jsx(l.Option,{value:"periwinkle",children:e.jsx(l.OptionStyled,{label:"Periwinkle Dusk",description:"A calm blue-violet that lingers",icon:e.jsx("img",{src:"https://i.ibb.co/q956jBg/snowflake-square.png","data-testid":"png-icon",alt:"snowflake icon"})})}),e.jsx(l.Option,{value:"teal",children:e.jsx(l.OptionStyled,{description:"the color teal without label"})})]})]})}),args:{size:"default",placeholder:"Select a color",defaultValue:"red"},argTypes:f({options:["red","green","blue","chartreuse","cornsilk","pink"]}),parameters:{...o}},i={render:a=>e.jsx("div",{className:t("flex","border-box","p-s"),"data-testid":"wrapper",style:{inlineSize:300},children:e.jsxs(l.Select,{label:"Color",helpText:"Select a color",...a,children:[e.jsx(l.Option,{value:"",children:"None"}),n,e.jsx(l.Divider,{}),e.jsxs(l.OptGroup,{label:"Deprecated Colors",children:[e.jsx(l.Option,{value:"chartreuse",children:e.jsx(l.OptionStyled,{label:"Chartreuse",description:"nice color btw"})}),e.jsx(l.Option,{value:"cornsilk",children:"Cornsilk"}),e.jsx(l.Option,{value:"pink",children:"Gainsboro"})]})]})}),args:{placeholder:"Select a color",defaultValue:"red"},argTypes:f({options:["red","green","blue","chartreuse","cornsilk","pink"]}),parameters:o},c={render:({...a})=>e.jsx("div",{className:t("flex","border-box","p-s"),"data-testid":"wrapper",style:{inlineSize:300},children:e.jsxs(l.Select,{...a,"aria-label":"Color",children:[e.jsx(l.Option,{value:"",children:"Select a color"}),e.jsx(l.Option,{value:"blue",children:"Blue"}),e.jsx(l.Option,{value:"green",children:"Green"}),e.jsx(l.Option,{value:"chartreuse",children:"Chartreuse"}),e.jsx(l.Option,{value:"cornsilk",children:"Cornsilk"}),e.jsx(l.Option,{value:"pink",children:"Pink"}),e.jsx(l.Option,{value:"red",children:"Red"})]})}),args:{value:"red",onChange:T()},argTypes:f({options:["red","green","blue","chartreuse","cornsilk","pink"]}),parameters:{...o}},p={render:({options:a,...x})=>e.jsx("div",{className:t("flex","border-box","p-s"),"data-testid":"wrapper",style:{inlineSize:300},children:e.jsxs(l.Select,{...x,"aria-label":"Visualization",children:[e.jsx(l.Option,{value:"",children:"Select a visualization"}),a.map(b=>e.jsx(l.Option,{value:b.value,children:e.jsx(l.OptionStyled,{...b})},b.value))]})}),args:{defaultValue:"Table",placeholder:"Select a visualization",options:[{label:"Chart",icon:e.jsx(O,{}),value:"Chart"},{label:"Table",icon:e.jsx(v,{}),value:"Table"},{label:"Text object",icon:e.jsx(g,{}),value:"Text object"},{label:"Image using svg",icon:e.jsx("img",{src:"https://cdn.qlikcloud.com/qmfe/frontend-assets/1.44.0/artifacts/16px/app.svg",alt:"sense_app icon"}),value:"img"},{label:"Image using png",icon:e.jsx("img",{src:"https://i.ibb.co/q956jBg/snowflake-square.png","data-testid":"png-icon",alt:"snowflake icon"}),value:"img-png"}]},argTypes:f({options:["Chart","Table","Text object","img","img-png"]}),parameters:{...o}},d={render:a=>e.jsx("div",{className:t("flex","border-box","items-start","w-s"),"data-testid":"wrapper",children:e.jsxs(l.Select,{...a,"aria-label":"Color",children:[e.jsx(l.Search,{}),e.jsx(l.Option,{value:"",children:"None"}),n,e.jsx(l.Divider,{}),e.jsxs(l.OptGroup,{label:"Deprecated Colors",children:[e.jsx(l.Option,{value:"chartreuse",children:"Chartreuse"}),e.jsx(l.Option,{value:"cornsilk",children:e.jsx("i",{children:"Cornsilk"})}),e.jsx(l.Option,{value:"pink",children:"Gainsboro"})]})]})}),args:{size:"default",placeholder:"Select a color",defaultValue:"red"},argTypes:f({options:["red","green","blue","chartreuse","cornsilk","pink"]}),parameters:{...o}},r=e.jsxs(e.Fragment,{children:[e.jsx(l.Option,{value:"white",children:e.jsx(l.OptionStyled,{label:"White",icon:e.jsx("img",{src:"https://i.ibb.co/q956jBg/snowflake-square.png","data-testid":"png-icon",alt:"snowflake icon"})})}),e.jsx(l.Option,{value:"red",children:e.jsx(l.OptionStyled,{label:"Red",icon:e.jsx("img",{src:"https://cdn.qlikcloud.com/qmfe/frontend-assets/1.44.0/artifacts/16px/app.svg",alt:"sense_app icon"})})})]}),m="An unknown color but with a very long label that goes beyond the parent size and with no space",u={parameters:{...o},render:()=>e.jsxs("div",{children:[e.jsx("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Tangerine|Inconsolata|Droid+Sans|Bungee+Tint"}),e.jsx("style",{children:`
          .tangerine {font-family: "Tangerine", sans-serif;}
          .inconsolata {font-family: "Inconsolata", sans-serif;}
          .droidsans {font-family: "Droid Sans", sans-serif;}
          .bungeetint {font-family: "Bungee Tint", sans-serif;}
        `}),e.jsxs(l.Select,{defaultOpen:!0,label:"Custom option",placeholder:"Select a font",defaultValue:"Tangerine",children:[e.jsx(l.Option,{value:"",children:"Please select a font"}),e.jsx(l.Option,{value:"Tangerine",children:e.jsx("span",{className:t("font-label-s","text-default",{tangerine:!0}),children:"Tangerine"})}),e.jsx(l.Option,{value:"Inconsolata",children:e.jsx("span",{className:t("font-label-s","text-default",{inconsolata:!0}),children:"Inconsolata"})}),e.jsx(l.Option,{value:"Droid+Sans",children:e.jsx("span",{className:t("font-label-s","text-default",{droidsans:!0}),children:"Droid+Sans"})}),e.jsx(l.Option,{value:"Bungee+Tint",children:e.jsx("span",{className:t("font-label-s","text-default",{bungeetint:!0}),children:"Bungee+Tint"})})]})]})},S={parameters:{...o},render:()=>e.jsx("div",{className:t("flex","border-box","flex-col","w-s"),children:e.jsxs(l.Select,{defaultOpen:!0,label:"Render value",placeholder:"Select a color",defaultValue:"red",renderValue:(a,x)=>e.jsxs("span",{className:t("flex","gap-m","flex-row","items-center"),children:[e.jsx(j,{style:{color:a}}),e.jsx("i",{className:t("text-default","font-label-s"),children:x?.children||a})]}),children:[e.jsx(l.Option,{value:"",children:"Please select a color"}),n]})})},h={render:()=>e.jsxs("div",{className:t("flex","border-box","flex-col","w-4xl"),children:[e.jsxs("div",{className:t("flex","border-box","flex-row","p-l","gap-xl","w-xs","items-start"),children:[e.jsx(l.Select,{label:"Option children overflow",defaultValue:"overflow",children:e.jsx(l.Option,{value:"overflow",children:m})}),e.jsx(l.Select,{label:"OptionStyled label overflow",defaultValue:"overflow",children:e.jsx(l.Option,{value:"overflow",children:e.jsx(l.OptionStyled,{label:m})})}),e.jsx(l.Select,{label:"OptionStyled description overflow",defaultValue:"overflow",children:e.jsx(l.Option,{value:"overflow",children:e.jsx(l.OptionStyled,{label:"Value",description:m})})}),e.jsx(l.Select,{label:"OptionStyled label with icon",defaultValue:"overflow",children:e.jsx(l.Option,{value:"overflow",children:e.jsx(l.OptionStyled,{label:m,icon:e.jsx("img",{src:"https://i.ibb.co/q956jBg/snowflake-square.png","data-testid":"png-icon",alt:"snowflake icon"})})})})]}),e.jsxs("div",{className:t("flex","border-box","flex-row","p-l","gap-xl","w-full","items-start"),style:{blockSize:"200px"},children:[e.jsx(l.Select,{defaultOpen:!0,placeholder:"color",label:"Default opened",defaultValue:"red",size:"small",children:r}),e.jsx("div",{className:t("shrink-0"),style:{inlineSize:"275px"},children:e.jsxs(l.Select,{defaultOpen:!0,defaultValue:"unknown",placeholder:"color",maxWidth:"reference",label:"Default opened with overflow",size:"small",children:[e.jsx(l.Option,{value:"",children:"Please select a value"}),e.jsx(l.Option,{value:"unknown",children:"An_unknown color_but_with_a_very long_label_that_goes_beyond_the_parent_size_and_with_no_space"}),e.jsx(l.Option,{value:"known",children:"Example of label with overflow text lorem ipsum need to go over 400px"})]})}),e.jsx(l.Select,{placeholder:"color",label:"Default",defaultValue:"red",size:"small",children:r}),e.jsx(l.Select,{placeholder:"color",label:"hasError",hasError:!0,size:"small",children:r}),e.jsx(l.Select,{placeholder:"color",label:"hasError",disabled:!0,size:"small",children:r}),e.jsx(l.Select,{placeholder:"color",label:"hasError",readOnly:!0,size:"small",children:r})]}),e.jsxs("div",{className:t("flex","border-box","flex-row","p-l","gap-xl","w-full","items-start"),style:{blockSize:"380px"},children:[e.jsx(l.Select,{defaultOpen:!0,placeholder:"color",label:"Default opened",defaultValue:"red",children:n}),e.jsxs(l.Select,{defaultOpen:!0,label:"Default opened with overflow",helpText:"Help text",placeholder:"color",defaultValue:"red",children:[e.jsx(l.Option,{value:"",defaultValue:"red",children:"Example of label with overflow text lorem ipsum need to go over 400px"}),n]}),e.jsx(l.Select,{label:"Default",helpText:"Help text",placeholder:"color"}),e.jsx(l.Select,{label:"hasError",helpText:"Help text",placeholder:"color",hasError:!0}),e.jsx(l.Select,{label:"Disabled",helpText:"Help text",placeholder:"color",disabled:!0}),e.jsx(l.Select,{label:"ReadOnly",helpText:"Help text",placeholder:"color",readOnly:!0,defaultValue:"red",children:n})]})]}),parameters:{controls:{disable:!0},chromatic:{ignoreSelectors:['[data-testid="png-icon"]']}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "border-box", "items-start", "w-s")} data-testid="wrapper">
      <Select.Select {...props} aria-label="Color">
        {/* This is good to have the empty value as in HTML */}
        <Select.Option value="">None</Select.Option>
        {OPTIONS_WITH_GROUP}
        {/* Divider in case you have multiple groups */}
        <Select.Divider />
        {/* Simple and efficient composition */}
        <Select.OptGroup label="Deprecated Colors">
          <Select.Option value="chartreuse">
            <Select.OptionStyled label="Chartreuse" description="nice color btw" />
          </Select.Option>
          <Select.Option value="cornsilk">
            <i>Cornsilk</i>
          </Select.Option>
          <Select.Option value="pink">
            <Select.OptionStyled label="Gainsboro" icon={<ChartIcon />} />
          </Select.Option>
          <Select.Option value="periwinkle">
            <Select.OptionStyled label="Periwinkle Dusk" description="A calm blue-violet that lingers" icon={<img src="https://i.ibb.co/q956jBg/snowflake-square.png" data-testid="png-icon" alt="snowflake icon" />} />
          </Select.Option>
          <Select.Option value="teal">
            <Select.OptionStyled description="the color teal without label" />
          </Select.Option>
        </Select.OptGroup>
      </Select.Select>
    </div>,
  args: {
    size: "default",
    placeholder: "Select a color",
    defaultValue: "red"
  },
  argTypes: getSelectArgTypes({
    options: ["red", "green", "blue", "chartreuse", "cornsilk", "pink"]
  }),
  parameters: {
    ...disableSnap
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "border-box", "p-s")} data-testid="wrapper" style={{
    inlineSize: 300
  }}>
      <Select.Select label="Color" helpText="Select a color" {...props}>
        <Select.Option value="">None</Select.Option>
        {OPTIONS_WITH_GROUP}
        {/* Divider in case you have multiple groups */}
        <Select.Divider />
        {/* Simple and efficient composition */}
        <Select.OptGroup label="Deprecated Colors">
          <Select.Option value="chartreuse">
            <Select.OptionStyled label="Chartreuse" description="nice color btw" />
          </Select.Option>
          <Select.Option value="cornsilk">Cornsilk</Select.Option>
          <Select.Option value="pink">Gainsboro</Select.Option>
        </Select.OptGroup>
      </Select.Select>
    </div>,
  args: {
    placeholder: "Select a color",
    defaultValue: "red"
  },
  argTypes: getSelectArgTypes({
    options: ["red", "green", "blue", "chartreuse", "cornsilk", "pink"]
  }),
  parameters: disableSnap
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ({
    ...props
  }) => <div className={classNames("flex", "border-box", "p-s")} data-testid="wrapper" style={{
    inlineSize: 300
  }}>
      <Select.Select {...props} aria-label="Color">
        <Select.Option value="">Select a color</Select.Option>
        <Select.Option value="blue">Blue</Select.Option>
        <Select.Option value="green">Green</Select.Option>
        <Select.Option value="chartreuse">Chartreuse</Select.Option>
        <Select.Option value="cornsilk">Cornsilk</Select.Option>
        <Select.Option value="pink">Pink</Select.Option>
        <Select.Option value="red">Red</Select.Option>
      </Select.Select>
    </div>,
  args: {
    value: "red",
    onChange: fn()
  },
  argTypes: getSelectArgTypes({
    options: ["red", "green", "blue", "chartreuse", "cornsilk", "pink"]
  }),
  parameters: {
    ...disableSnap
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ({
    options,
    ...props
  }) => <div className={classNames("flex", "border-box", "p-s")} data-testid="wrapper" style={{
    inlineSize: 300
  }}>
      <Select.Select {...props} aria-label="Visualization">
        <Select.Option value="">Select a visualization</Select.Option>
        {options.map(option => <Select.Option key={option.value} value={option.value}>
            <Select.OptionStyled {...option} />
          </Select.Option>)}
      </Select.Select>
    </div>,
  args: {
    defaultValue: "Table",
    placeholder: "Select a visualization",
    options: [{
      label: "Chart",
      icon: <ChartIcon />,
      value: "Chart"
    }, {
      label: "Table",
      icon: <TableIcon />,
      value: "Table"
    }, {
      label: "Text object",
      icon: <TextIcon />,
      value: "Text object"
    }, {
      label: "Image using svg",
      icon: <img src="https://cdn.qlikcloud.com/qmfe/frontend-assets/1.44.0/artifacts/16px/app.svg" alt="sense_app icon" />,
      value: "img"
    }, {
      label: "Image using png",
      icon: <img src="https://i.ibb.co/q956jBg/snowflake-square.png" data-testid="png-icon" alt="snowflake icon" />,
      value: "img-png"
    }]
  },
  argTypes: getSelectArgTypes({
    options: ["Chart", "Table", "Text object", "img", "img-png"]
  }),
  parameters: {
    ...disableSnap
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "border-box", "items-start", "w-s")} data-testid="wrapper">
      <Select.Select {...props} aria-label="Color">
        <Select.Search />
        <Select.Option value="">None</Select.Option>
        {OPTIONS_WITH_GROUP}
        <Select.Divider />
        <Select.OptGroup label="Deprecated Colors">
          <Select.Option value="chartreuse">Chartreuse</Select.Option>
          <Select.Option value="cornsilk">
            <i>Cornsilk</i>
          </Select.Option>
          <Select.Option value="pink">Gainsboro</Select.Option>
        </Select.OptGroup>
      </Select.Select>
    </div>,
  args: {
    size: "default",
    placeholder: "Select a color",
    defaultValue: "red"
  },
  argTypes: getSelectArgTypes({
    options: ["red", "green", "blue", "chartreuse", "cornsilk", "pink"]
  }),
  parameters: {
    ...disableSnap
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...disableSnap
  },
  render: () => <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine|Inconsolata|Droid+Sans|Bungee+Tint" />
      <style>
        {\`
          .tangerine {font-family: "Tangerine", sans-serif;}
          .inconsolata {font-family: "Inconsolata", sans-serif;}
          .droidsans {font-family: "Droid Sans", sans-serif;}
          .bungeetint {font-family: "Bungee Tint", sans-serif;}
        \`}
      </style>
      <Select.Select defaultOpen label="Custom option" placeholder="Select a font" defaultValue="Tangerine">
        <Select.Option value="">Please select a font</Select.Option>
        <Select.Option value="Tangerine">
          <span className={classNames("font-label-s", "text-default", {
          tangerine: true
        })}>
            Tangerine
          </span>
        </Select.Option>
        <Select.Option value="Inconsolata">
          <span className={classNames("font-label-s", "text-default", {
          inconsolata: true
        })}>
            Inconsolata
          </span>
        </Select.Option>
        <Select.Option value="Droid+Sans">
          <span className={classNames("font-label-s", "text-default", {
          droidsans: true
        })}>
            Droid+Sans
          </span>
        </Select.Option>
        <Select.Option value="Bungee+Tint">
          <span className={classNames("font-label-s", "text-default", {
          bungeetint: true
        })}>
            Bungee+Tint
          </span>
        </Select.Option>
      </Select.Select>
    </div>
}`,...u.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...disableSnap
  },
  render: () => <div className={classNames("flex", "border-box", "flex-col", "w-s")}>
      <Select.Select defaultOpen label="Render value" placeholder="Select a color" defaultValue="red" renderValue={(value, selectedProps) => <span className={classNames("flex", "gap-m", "flex-row", "items-center")}>
            <PaletteOutlineIcon style={{
        color: value
      }} />
            <i className={classNames("text-default", "font-label-s")}>{selectedProps?.children || value}</i>
          </span>}>
        <Select.Option value="">Please select a color</Select.Option>
        {OPTIONS_WITH_GROUP}
      </Select.Select>
    </div>
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "border-box", "flex-col", "w-4xl")}>
      <div className={classNames("flex", "border-box", "flex-row", "p-l", "gap-xl", "w-xs", "items-start")}>
        <Select.Select label="Option children overflow" defaultValue="overflow">
          <Select.Option value="overflow">{OVERFLOW}</Select.Option>
        </Select.Select>
        <Select.Select label="OptionStyled label overflow" defaultValue="overflow">
          <Select.Option value="overflow">
            <Select.OptionStyled label={OVERFLOW} />
          </Select.Option>
        </Select.Select>
        <Select.Select label="OptionStyled description overflow" defaultValue="overflow">
          <Select.Option value="overflow">
            <Select.OptionStyled label="Value" description={OVERFLOW} />
          </Select.Option>
        </Select.Select>
        <Select.Select label="OptionStyled label with icon" defaultValue="overflow">
          <Select.Option value="overflow">
            <Select.OptionStyled label={OVERFLOW} icon={<img src="https://i.ibb.co/q956jBg/snowflake-square.png" data-testid="png-icon" alt="snowflake icon" />} />
          </Select.Option>
        </Select.Select>
      </div>

      <div className={classNames("flex", "border-box", "flex-row", "p-l", "gap-xl", "w-full", "items-start")} style={{
      blockSize: "200px"
    }}>
        <Select.Select defaultOpen placeholder="color" label="Default opened" defaultValue="red" size="small">
          {SmallOptions}
        </Select.Select>
        <div className={classNames("shrink-0")} style={{
        inlineSize: "275px"
      }}>
          <Select.Select defaultOpen defaultValue="unknown" placeholder="color" maxWidth="reference" label="Default opened with overflow" size="small">
            <Select.Option value="">Please select a value</Select.Option>
            <Select.Option value="unknown">
              An_unknown color_but_with_a_very long_label_that_goes_beyond_the_parent_size_and_with_no_space
            </Select.Option>
            <Select.Option value="known">
              Example of label with overflow text lorem ipsum need to go over 400px
            </Select.Option>
          </Select.Select>
        </div>
        <Select.Select placeholder="color" label="Default" defaultValue="red" size="small">
          {SmallOptions}
        </Select.Select>
        <Select.Select placeholder="color" label="hasError" hasError size="small">
          {SmallOptions}
        </Select.Select>
        <Select.Select placeholder="color" label="hasError" disabled size="small">
          {SmallOptions}
        </Select.Select>
        <Select.Select placeholder="color" label="hasError" readOnly size="small">
          {SmallOptions}
        </Select.Select>
      </div>
      <div className={classNames("flex", "border-box", "flex-row", "p-l", "gap-xl", "w-full", "items-start")} style={{
      blockSize: "380px"
    }}>
        <Select.Select defaultOpen placeholder="color" label="Default opened" defaultValue="red">
          {OPTIONS_WITH_GROUP}
        </Select.Select>
        <Select.Select defaultOpen label="Default opened with overflow" helpText="Help text" placeholder="color" defaultValue="red">
          <Select.Option value="" defaultValue="red">
            Example of label with overflow text lorem ipsum need to go over 400px
          </Select.Option>
          {OPTIONS_WITH_GROUP}
        </Select.Select>
        <Select.Select label="Default" helpText="Help text" placeholder="color" />
        <Select.Select label="hasError" helpText="Help text" placeholder="color" hasError />
        <Select.Select label="Disabled" helpText="Help text" placeholder="color" disabled />
        <Select.Select label="ReadOnly" helpText="Help text" placeholder="color" readOnly defaultValue="red">
          {OPTIONS_WITH_GROUP}
        </Select.Select>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    },
    chromatic: {
      ignoreSelectors: ['[data-testid="png-icon"]']
    }
  }
}`,...h.parameters?.docs?.source}}};const N=["UnControlled","WithField","Controlled","WithIcons","Searchable","FontPicker","RenderValue","VisualTest"],R=Object.freeze(Object.defineProperty({__proto__:null,Controlled:c,FontPicker:u,RenderValue:S,Searchable:d,UnControlled:s,VisualTest:h,WithField:i,WithIcons:p,__namedExportsOrder:N,default:k},Symbol.toStringTag,{value:"Module"}));export{R as S,s as U,d as a};
