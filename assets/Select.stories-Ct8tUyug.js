import{n as e}from"./chunk-DseTPa7n.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{b as n,ft as r,hn as i,mt as a,sn as o}from"./iframe-B5xoaqtW.js";import{n as s,t as c}from"./Field.argTypes-DCC5yWA1.js";import{t as l}from"./SelectTest-ifXGrLKh.js";import{r as u}from"./icons-CsjC9TfL.js";var d=({options:e})=>({...s,...c,size:{control:{type:`select`},options:[void 0,`default`,`small`],table:{defaultValue:{summary:`default`},type:{summary:`default | small`}}},defaultValue:{control:`select`,description:`The default value of the field.`,table:{type:{summary:`string`}},options:e},value:{control:`select`,options:e,description:`The value of the field.`,table:{type:{summary:`string`}}},onChange:{description:`The function that will be called when the value of the field changes.`,table:{type:{summary:`(e: ChangeEvent) => void`}}},renderValue:{description:`The function that will be called to render the value of the field if any.`,table:{type:{summary:`(value: string, selectedProps?: OptionProps) => ReactNode;`}}},selectedValueDisplay:{description:`Defines how the selected value is displayed in the closed select field.`,control:{type:`select`},options:[`full`,`label`],table:{defaultValue:{summary:`full`},type:{summary:`full | label`}}},children:{description:`The options of the field. They are used to populate the field.`,table:{type:{summary:`ReactNode`}}}}),f=e({Controlled:()=>y,FontPicker:()=>w,RenderValue:()=>T,Searchable:()=>x,UnControlled:()=>_,VisualTest:()=>E,WithField:()=>v,WithIcons:()=>b,__namedExportsOrder:()=>D,default:()=>h}),p=t(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Select`,component:n.Select},g={chromatic:{disableSnapshot:!0}},_={render:e=>(0,p.jsx)(`div`,{className:i(`flex`,`border-box`,`items-start`,`w-s`),"data-testid":`wrapper`,children:(0,p.jsxs)(n.Select,{...e,"aria-label":`Color`,children:[(0,p.jsx)(n.Option,{value:``,children:`None`}),l,(0,p.jsx)(n.Divider,{}),(0,p.jsxs)(n.OptGroup,{label:`Deprecated Colors`,children:[(0,p.jsx)(n.Option,{value:`chartreuse`,children:(0,p.jsx)(n.OptionStyled,{label:`Chartreuse`,description:`nice color btw`})}),(0,p.jsx)(n.Option,{value:`cornsilk`,children:(0,p.jsx)(`i`,{children:`Cornsilk`})}),(0,p.jsx)(n.Option,{value:`pink`,children:(0,p.jsx)(n.OptionStyled,{label:`Gainsboro`,icon:(0,p.jsx)(o,{})})}),(0,p.jsx)(n.Option,{value:`periwinkle`,children:(0,p.jsx)(n.OptionStyled,{label:`Periwinkle Dusk`,description:`A calm blue-violet that lingers`,icon:(0,p.jsx)(`img`,{src:`https://i.ibb.co/q956jBg/snowflake-square.png`,"data-testid":`png-icon`,alt:`snowflake icon`})})}),(0,p.jsx)(n.Option,{value:`teal`,children:(0,p.jsx)(n.OptionStyled,{description:`the color teal without label`})})]})]})}),args:{size:`default`,placeholder:`Select a color`,defaultValue:`red`},argTypes:d({options:[`red`,`green`,`blue`,`chartreuse`,`cornsilk`,`pink`]}),parameters:{...g}},v={render:e=>(0,p.jsx)(`div`,{className:i(`flex`,`border-box`,`p-s`),"data-testid":`wrapper`,style:{inlineSize:300},children:(0,p.jsxs)(n.Select,{label:`Color`,helpText:`Select a color`,...e,children:[(0,p.jsx)(n.Option,{value:``,children:`None`}),l,(0,p.jsx)(n.Divider,{}),(0,p.jsxs)(n.OptGroup,{label:`Deprecated Colors`,children:[(0,p.jsx)(n.Option,{value:`chartreuse`,children:(0,p.jsx)(n.OptionStyled,{label:`Chartreuse`,description:`nice color btw`})}),(0,p.jsx)(n.Option,{value:`cornsilk`,children:`Cornsilk`}),(0,p.jsx)(n.Option,{value:`pink`,children:`Gainsboro`})]})]})}),args:{placeholder:`Select a color`,defaultValue:`red`},argTypes:d({options:[`red`,`green`,`blue`,`chartreuse`,`cornsilk`,`pink`]}),parameters:g},y={render:({...e})=>(0,p.jsx)(`div`,{className:i(`flex`,`border-box`,`p-s`),"data-testid":`wrapper`,style:{inlineSize:300},children:(0,p.jsxs)(n.Select,{...e,"aria-label":`Color`,children:[(0,p.jsx)(n.Option,{value:``,children:`Select a color`}),(0,p.jsx)(n.Option,{value:`blue`,children:`Blue`}),(0,p.jsx)(n.Option,{value:`green`,children:`Green`}),(0,p.jsx)(n.Option,{value:`chartreuse`,children:`Chartreuse`}),(0,p.jsx)(n.Option,{value:`cornsilk`,children:`Cornsilk`}),(0,p.jsx)(n.Option,{value:`pink`,children:`Pink`}),(0,p.jsx)(n.Option,{value:`red`,children:`Red`})]})}),args:{value:`red`,onChange:m()},argTypes:d({options:[`red`,`green`,`blue`,`chartreuse`,`cornsilk`,`pink`]}),parameters:{...g}},b={render:({options:e,...t})=>(0,p.jsx)(`div`,{className:i(`flex`,`border-box`,`p-s`),"data-testid":`wrapper`,style:{inlineSize:300},children:(0,p.jsxs)(n.Select,{...t,"aria-label":`Visualization`,children:[(0,p.jsx)(n.Option,{value:``,children:`Select a visualization`}),e.map(e=>(0,p.jsx)(n.Option,{value:e.value,children:(0,p.jsx)(n.OptionStyled,{...e})},e.value))]})}),args:{defaultValue:`Table`,placeholder:`Select a visualization`,options:[{label:`Chart`,icon:(0,p.jsx)(o,{}),value:`Chart`},{label:`Table`,icon:(0,p.jsx)(a,{}),value:`Table`},{label:`Text object`,icon:(0,p.jsx)(r,{}),value:`Text object`},{label:`Image using svg`,icon:(0,p.jsx)(`img`,{src:`https://cdn.qlikcloud.com/qmfe/frontend-assets/1.44.0/artifacts/16px/app.svg`,alt:`sense_app icon`}),value:`img`},{label:`Image using png`,icon:(0,p.jsx)(`img`,{src:`https://i.ibb.co/q956jBg/snowflake-square.png`,"data-testid":`png-icon`,alt:`snowflake icon`}),value:`img-png`}]},argTypes:d({options:[`Chart`,`Table`,`Text object`,`img`,`img-png`]}),parameters:{...g}},x={render:e=>(0,p.jsx)(`div`,{className:i(`flex`,`border-box`,`items-start`,`w-s`),"data-testid":`wrapper`,children:(0,p.jsxs)(n.Select,{...e,"aria-label":`Color`,children:[(0,p.jsx)(n.Search,{}),(0,p.jsx)(n.Option,{value:``,children:`None`}),l,(0,p.jsx)(n.Divider,{}),(0,p.jsxs)(n.OptGroup,{label:`Deprecated Colors`,children:[(0,p.jsx)(n.Option,{value:`chartreuse`,children:`Chartreuse`}),(0,p.jsx)(n.Option,{value:`cornsilk`,children:(0,p.jsx)(`i`,{children:`Cornsilk`})}),(0,p.jsx)(n.Option,{value:`pink`,children:`Gainsboro`})]})]})}),args:{size:`default`,placeholder:`Select a color`,defaultValue:`red`},argTypes:d({options:[`red`,`green`,`blue`,`chartreuse`,`cornsilk`,`pink`]}),parameters:{...g}},S=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n.Option,{value:`white`,children:(0,p.jsx)(n.OptionStyled,{label:`White`,icon:(0,p.jsx)(`img`,{src:`https://i.ibb.co/q956jBg/snowflake-square.png`,"data-testid":`png-icon`,alt:`snowflake icon`})})}),(0,p.jsx)(n.Option,{value:`red`,children:(0,p.jsx)(n.OptionStyled,{label:`Red`,icon:(0,p.jsx)(`img`,{src:`https://cdn.qlikcloud.com/qmfe/frontend-assets/1.44.0/artifacts/16px/app.svg`,alt:`sense_app icon`})})})]}),C=`An unknown color but with a very long label that goes beyond the parent size and with no space`,w={parameters:{...g},render:()=>(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`link`,{rel:`stylesheet`,href:`https://fonts.googleapis.com/css?family=Tangerine|Inconsolata|Droid+Sans|Bungee+Tint`}),(0,p.jsx)(`style`,{children:`
          .tangerine {font-family: "Tangerine", sans-serif;}
          .inconsolata {font-family: "Inconsolata", sans-serif;}
          .droidsans {font-family: "Droid Sans", sans-serif;}
          .bungeetint {font-family: "Bungee Tint", sans-serif;}
        `}),(0,p.jsxs)(n.Select,{defaultOpen:!0,label:`Custom option`,placeholder:`Select a font`,defaultValue:`Tangerine`,children:[(0,p.jsx)(n.Option,{value:``,children:`Please select a font`}),(0,p.jsx)(n.Option,{value:`Tangerine`,children:(0,p.jsx)(`span`,{className:i(`font-label-s`,`text-default`,{tangerine:!0}),children:`Tangerine`})}),(0,p.jsx)(n.Option,{value:`Inconsolata`,children:(0,p.jsx)(`span`,{className:i(`font-label-s`,`text-default`,{inconsolata:!0}),children:`Inconsolata`})}),(0,p.jsx)(n.Option,{value:`Droid+Sans`,children:(0,p.jsx)(`span`,{className:i(`font-label-s`,`text-default`,{droidsans:!0}),children:`Droid+Sans`})}),(0,p.jsx)(n.Option,{value:`Bungee+Tint`,children:(0,p.jsx)(`span`,{className:i(`font-label-s`,`text-default`,{bungeetint:!0}),children:`Bungee+Tint`})})]})]})},T={parameters:{...g},render:()=>(0,p.jsx)(`div`,{className:i(`flex`,`border-box`,`flex-col`,`w-s`),children:(0,p.jsxs)(n.Select,{defaultOpen:!0,label:`Render value`,placeholder:`Select a color`,defaultValue:`red`,renderValue:(e,t)=>(0,p.jsxs)(`span`,{className:i(`flex`,`gap-m`,`flex-row`,`items-center`),children:[(0,p.jsx)(u,{style:{color:e}}),(0,p.jsx)(`i`,{className:i(`text-default`,`font-label-s`),children:t?.children||e})]}),children:[(0,p.jsx)(n.Option,{value:``,children:`Please select a color`}),l]})})},E={render:()=>(0,p.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-col`,`w-4xl`),children:[(0,p.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-row`,`p-l`,`gap-xl`,`w-xs`,`items-start`),children:[(0,p.jsx)(n.Select,{label:`Option children overflow`,defaultValue:`overflow`,children:(0,p.jsx)(n.Option,{value:`overflow`,children:C})}),(0,p.jsx)(n.Select,{label:`OptionStyled label overflow`,defaultValue:`overflow`,children:(0,p.jsx)(n.Option,{value:`overflow`,children:(0,p.jsx)(n.OptionStyled,{label:C})})}),(0,p.jsx)(n.Select,{label:`OptionStyled description overflow`,defaultValue:`overflow`,children:(0,p.jsx)(n.Option,{value:`overflow`,children:(0,p.jsx)(n.OptionStyled,{label:`Value`,description:C})})}),(0,p.jsx)(n.Select,{label:`OptionStyled label with icon`,defaultValue:`overflow`,children:(0,p.jsx)(n.Option,{value:`overflow`,children:(0,p.jsx)(n.OptionStyled,{label:C,icon:(0,p.jsx)(`img`,{src:`https://i.ibb.co/q956jBg/snowflake-square.png`,"data-testid":`png-icon`,alt:`snowflake icon`})})})})]}),(0,p.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-row`,`p-l`,`gap-xl`,`w-full`,`items-start`),style:{blockSize:`200px`},children:[(0,p.jsx)(n.Select,{defaultOpen:!0,placeholder:`color`,label:`Default opened`,defaultValue:`red`,size:`small`,children:S}),(0,p.jsx)(`div`,{className:i(`shrink-0`),style:{inlineSize:`275px`},children:(0,p.jsxs)(n.Select,{defaultOpen:!0,defaultValue:`unknown`,placeholder:`color`,maxWidth:`reference`,label:`Default opened with overflow`,size:`small`,children:[(0,p.jsx)(n.Option,{value:``,children:`Please select a value`}),(0,p.jsx)(n.Option,{value:`unknown`,children:`An_unknown color_but_with_a_very long_label_that_goes_beyond_the_parent_size_and_with_no_space`}),(0,p.jsx)(n.Option,{value:`known`,children:`Example of label with overflow text lorem ipsum need to go over 400px`})]})}),(0,p.jsx)(n.Select,{placeholder:`color`,label:`Default`,defaultValue:`red`,size:`small`,children:S}),(0,p.jsx)(n.Select,{placeholder:`color`,label:`hasError`,hasError:!0,size:`small`,children:S}),(0,p.jsx)(n.Select,{placeholder:`color`,label:`hasError`,disabled:!0,size:`small`,children:S}),(0,p.jsx)(n.Select,{placeholder:`color`,label:`hasError`,readOnly:!0,size:`small`,children:S})]}),(0,p.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-row`,`p-l`,`gap-xl`,`w-full`,`items-start`),style:{blockSize:`380px`},children:[(0,p.jsx)(n.Select,{defaultOpen:!0,placeholder:`color`,label:`Default opened`,defaultValue:`red`,children:l}),(0,p.jsxs)(n.Select,{defaultOpen:!0,label:`Default opened with overflow`,helpText:`Help text`,placeholder:`color`,defaultValue:`red`,children:[(0,p.jsx)(n.Option,{value:``,defaultValue:`red`,children:`Example of label with overflow text lorem ipsum need to go over 400px`}),l]}),(0,p.jsx)(n.Select,{label:`Default`,helpText:`Help text`,placeholder:`color`}),(0,p.jsx)(n.Select,{label:`hasError`,helpText:`Help text`,placeholder:`color`,hasError:!0}),(0,p.jsx)(n.Select,{label:`Disabled`,helpText:`Help text`,placeholder:`color`,disabled:!0}),(0,p.jsx)(n.Select,{label:`ReadOnly`,helpText:`Help text`,placeholder:`color`,readOnly:!0,defaultValue:`red`,children:l})]})]}),parameters:{controls:{disable:!0},chromatic:{ignoreSelectors:[`[data-testid="png-icon"]`]}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...disableSnap
  },
  render: () => <div className={classNames("flex", "border-box", "flex-col", "w-s")}>
      <Select.Select defaultOpen label="Render value" placeholder="Select a color" defaultValue="red" renderValue={(value, selectedProps) => <span className={classNames("flex", "gap-m", "flex-row", "items-center")}>
            <PaletteOutlineIcon style={{
        color: value
      }} />
            <i className={classNames("text-default", "font-label-s")}>
              {selectedProps?.children || value}
            </i>
          </span>}>
        <Select.Option value="">Please select a color</Select.Option>
        {OPTIONS_WITH_GROUP}
      </Select.Select>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
              An_unknown color_but_with_a_very
              long_label_that_goes_beyond_the_parent_size_and_with_no_space
            </Select.Option>
            <Select.Option value="known">
              Example of label with overflow text lorem ipsum need to go over
              400px
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
            Example of label with overflow text lorem ipsum need to go over
            400px
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
}`,...E.parameters?.docs?.source}}};var D=[`UnControlled`,`WithField`,`Controlled`,`WithIcons`,`Searchable`,`FontPicker`,`RenderValue`,`VisualTest`];export{y as Controlled,w as FontPicker,T as RenderValue,x as Searchable,_ as UnControlled,E as VisualTest,v as WithField,b as WithIcons,D as __namedExportsOrder,h as default,f as t};