import{n as e,r as t}from"./chunk-BneVvdWh.js";import{An as n,G as r,In as i,Ln as a,Lt as o,jt as s,v as c,zt as l}from"./iframe-B0xl5hqz.js";import{n as u,r as d,t as f}from"./Field.argTypes-BFMCH8OS.js";import{n as p,t as m}from"./SelectTest-LjrQa0rd.js";import{i as h,r as g}from"./icons-BtQCQGrp.js";var _,v=e((()=>{d(),_=({options:e})=>({...u,...f,size:{control:{type:`select`},options:[void 0,`default`,`small`],table:{defaultValue:{summary:`default`},type:{summary:`default | small`}}},defaultValue:{control:`select`,description:`The default value of the field.`,table:{type:{summary:`string`}},options:e},value:{control:`select`,options:e,description:`The value of the field.`,table:{type:{summary:`string`}}},onChange:{description:`The function that will be called when the value of the field changes.`,table:{type:{summary:`(e: ChangeEvent) => void`}}},renderValue:{description:`The function that will be called to render the value of the field if any.`,table:{type:{summary:`(value: string, selectedProps?: OptionProps) => ReactNode;`}}},selectedValueDisplay:{description:`Defines how the selected value is displayed in the closed select field.`,control:{type:`select`},options:[`full`,`label`],table:{defaultValue:{summary:`full`},type:{summary:`full | label`}}},children:{description:`The options of the field. They are used to populate the field.`,table:{type:{summary:`ReactNode`}}}})})),y=t({Controlled:()=>E,FontPicker:()=>j,RenderValue:()=>M,Searchable:()=>O,UnControlled:()=>w,VisualTest:()=>N,WithField:()=>T,WithIcons:()=>D,__namedExportsOrder:()=>P,default:()=>S}),b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=e((()=>{c(),s(),h(),v(),p(),b=a(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/Select`,component:r.Select},C={chromatic:{disableSnapshot:!0}},w={render:e=>(0,b.jsx)(`div`,{className:i(`flex`,`border-box`,`items-start`,`w-s`),"data-testid":`wrapper`,children:(0,b.jsxs)(r.Select,{...e,"aria-label":`Color`,children:[(0,b.jsx)(r.Option,{value:``,children:`None`}),m,(0,b.jsx)(r.Divider,{}),(0,b.jsxs)(r.OptGroup,{label:`Deprecated Colors`,children:[(0,b.jsx)(r.Option,{value:`chartreuse`,children:(0,b.jsx)(r.OptionStyled,{label:`Chartreuse`,description:`nice color btw`})}),(0,b.jsx)(r.Option,{value:`cornsilk`,children:(0,b.jsx)(`i`,{children:`Cornsilk`})}),(0,b.jsx)(r.Option,{value:`pink`,children:(0,b.jsx)(r.OptionStyled,{label:`Gainsboro`,icon:(0,b.jsx)(n,{})})}),(0,b.jsx)(r.Option,{value:`periwinkle`,children:(0,b.jsx)(r.OptionStyled,{label:`Periwinkle Dusk`,description:`A calm blue-violet that lingers`,icon:(0,b.jsx)(`img`,{src:`https://i.ibb.co/q956jBg/snowflake-square.png`,"data-testid":`png-icon`,alt:`snowflake icon`})})}),(0,b.jsx)(r.Option,{value:`teal`,children:(0,b.jsx)(r.OptionStyled,{description:`the color teal without label`})})]})]})}),args:{size:`default`,placeholder:`Select a color`,defaultValue:`red`},argTypes:_({options:[`red`,`green`,`blue`,`chartreuse`,`cornsilk`,`pink`]}),parameters:{...C}},T={render:e=>(0,b.jsx)(`div`,{className:i(`flex`,`border-box`,`p-s`),"data-testid":`wrapper`,style:{inlineSize:300},children:(0,b.jsxs)(r.Select,{label:`Color`,helpText:`Select a color`,...e,children:[(0,b.jsx)(r.Option,{value:``,children:`None`}),m,(0,b.jsx)(r.Divider,{}),(0,b.jsxs)(r.OptGroup,{label:`Deprecated Colors`,children:[(0,b.jsx)(r.Option,{value:`chartreuse`,children:(0,b.jsx)(r.OptionStyled,{label:`Chartreuse`,description:`nice color btw`})}),(0,b.jsx)(r.Option,{value:`cornsilk`,children:`Cornsilk`}),(0,b.jsx)(r.Option,{value:`pink`,children:`Gainsboro`})]})]})}),args:{placeholder:`Select a color`,defaultValue:`red`},argTypes:_({options:[`red`,`green`,`blue`,`chartreuse`,`cornsilk`,`pink`]}),parameters:C},E={render:({...e})=>(0,b.jsx)(`div`,{className:i(`flex`,`border-box`,`p-s`),"data-testid":`wrapper`,style:{inlineSize:300},children:(0,b.jsxs)(r.Select,{...e,"aria-label":`Color`,children:[(0,b.jsx)(r.Option,{value:``,children:`Select a color`}),(0,b.jsx)(r.Option,{value:`blue`,children:`Blue`}),(0,b.jsx)(r.Option,{value:`green`,children:`Green`}),(0,b.jsx)(r.Option,{value:`chartreuse`,children:`Chartreuse`}),(0,b.jsx)(r.Option,{value:`cornsilk`,children:`Cornsilk`}),(0,b.jsx)(r.Option,{value:`pink`,children:`Pink`}),(0,b.jsx)(r.Option,{value:`red`,children:`Red`})]})}),args:{value:`red`,onChange:x()},argTypes:_({options:[`red`,`green`,`blue`,`chartreuse`,`cornsilk`,`pink`]}),parameters:{...C}},D={render:({options:e,...t})=>(0,b.jsx)(`div`,{className:i(`flex`,`border-box`,`p-s`),"data-testid":`wrapper`,style:{inlineSize:300},children:(0,b.jsxs)(r.Select,{...t,"aria-label":`Visualization`,children:[(0,b.jsx)(r.Option,{value:``,children:`Select a visualization`}),e.map(e=>(0,b.jsx)(r.Option,{value:e.value,children:(0,b.jsx)(r.OptionStyled,{...e})},e.value))]})}),args:{defaultValue:`Table`,placeholder:`Select a visualization`,options:[{label:`Chart`,icon:(0,b.jsx)(n,{}),value:`Chart`},{label:`Table`,icon:(0,b.jsx)(l,{}),value:`Table`},{label:`Text object`,icon:(0,b.jsx)(o,{}),value:`Text object`},{label:`Image using svg`,icon:(0,b.jsx)(`img`,{src:`https://cdn.qlikcloud.com/qmfe/frontend-assets/1.44.0/artifacts/16px/app.svg`,alt:`sense_app icon`}),value:`img`},{label:`Image using png`,icon:(0,b.jsx)(`img`,{src:`https://i.ibb.co/q956jBg/snowflake-square.png`,"data-testid":`png-icon`,alt:`snowflake icon`}),value:`img-png`}]},argTypes:_({options:[`Chart`,`Table`,`Text object`,`img`,`img-png`]}),parameters:{...C}},O={render:e=>(0,b.jsx)(`div`,{className:i(`flex`,`border-box`,`items-start`,`w-s`),"data-testid":`wrapper`,children:(0,b.jsxs)(r.Select,{...e,"aria-label":`Color`,children:[(0,b.jsx)(r.Search,{}),(0,b.jsx)(r.Option,{value:``,children:`None`}),m,(0,b.jsx)(r.Divider,{}),(0,b.jsxs)(r.OptGroup,{label:`Deprecated Colors`,children:[(0,b.jsx)(r.Option,{value:`chartreuse`,children:`Chartreuse`}),(0,b.jsx)(r.Option,{value:`cornsilk`,children:(0,b.jsx)(`i`,{children:`Cornsilk`})}),(0,b.jsx)(r.Option,{value:`pink`,children:`Gainsboro`})]})]})}),args:{size:`default`,placeholder:`Select a color`,defaultValue:`red`},argTypes:_({options:[`red`,`green`,`blue`,`chartreuse`,`cornsilk`,`pink`]}),parameters:{...C}},k=(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r.Option,{value:`white`,children:(0,b.jsx)(r.OptionStyled,{label:`White`,icon:(0,b.jsx)(`img`,{src:`https://i.ibb.co/q956jBg/snowflake-square.png`,"data-testid":`png-icon`,alt:`snowflake icon`})})}),(0,b.jsx)(r.Option,{value:`red`,children:(0,b.jsx)(r.OptionStyled,{label:`Red`,icon:(0,b.jsx)(`img`,{src:`https://cdn.qlikcloud.com/qmfe/frontend-assets/1.44.0/artifacts/16px/app.svg`,alt:`sense_app icon`})})})]}),A=`An unknown color but with a very long label that goes beyond the parent size and with no space`,j={parameters:{...C},render:()=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`link`,{rel:`stylesheet`,href:`https://fonts.googleapis.com/css?family=Tangerine|Inconsolata|Droid+Sans|Bungee+Tint`}),(0,b.jsx)(`style`,{children:`
          .tangerine {font-family: "Tangerine", sans-serif;}
          .inconsolata {font-family: "Inconsolata", sans-serif;}
          .droidsans {font-family: "Droid Sans", sans-serif;}
          .bungeetint {font-family: "Bungee Tint", sans-serif;}
        `}),(0,b.jsxs)(r.Select,{defaultOpen:!0,label:`Custom option`,placeholder:`Select a font`,defaultValue:`Tangerine`,children:[(0,b.jsx)(r.Option,{value:``,children:`Please select a font`}),(0,b.jsx)(r.Option,{value:`Tangerine`,children:(0,b.jsx)(`span`,{className:i(`font-label-s`,`text-default`,{tangerine:!0}),children:`Tangerine`})}),(0,b.jsx)(r.Option,{value:`Inconsolata`,children:(0,b.jsx)(`span`,{className:i(`font-label-s`,`text-default`,{inconsolata:!0}),children:`Inconsolata`})}),(0,b.jsx)(r.Option,{value:`Droid+Sans`,children:(0,b.jsx)(`span`,{className:i(`font-label-s`,`text-default`,{droidsans:!0}),children:`Droid+Sans`})}),(0,b.jsx)(r.Option,{value:`Bungee+Tint`,children:(0,b.jsx)(`span`,{className:i(`font-label-s`,`text-default`,{bungeetint:!0}),children:`Bungee+Tint`})})]})]})},M={parameters:{...C},render:()=>(0,b.jsx)(`div`,{className:i(`flex`,`border-box`,`flex-col`,`w-s`),children:(0,b.jsxs)(r.Select,{defaultOpen:!0,label:`Render value`,placeholder:`Select a color`,defaultValue:`red`,renderValue:(e,t)=>(0,b.jsxs)(`span`,{className:i(`flex`,`gap-m`,`flex-row`,`items-center`),children:[(0,b.jsx)(g,{style:{color:e}}),(0,b.jsx)(`i`,{className:i(`text-default`,`font-label-s`),children:t?.children||e})]}),children:[(0,b.jsx)(r.Option,{value:``,children:`Please select a color`}),m]})})},N={render:()=>(0,b.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-col`,`w-4xl`),children:[(0,b.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-row`,`p-l`,`gap-xl`,`w-xs`,`items-start`),children:[(0,b.jsx)(r.Select,{label:`Option children overflow`,defaultValue:`overflow`,children:(0,b.jsx)(r.Option,{value:`overflow`,children:A})}),(0,b.jsx)(r.Select,{label:`OptionStyled label overflow`,defaultValue:`overflow`,children:(0,b.jsx)(r.Option,{value:`overflow`,children:(0,b.jsx)(r.OptionStyled,{label:A})})}),(0,b.jsx)(r.Select,{label:`OptionStyled description overflow`,defaultValue:`overflow`,children:(0,b.jsx)(r.Option,{value:`overflow`,children:(0,b.jsx)(r.OptionStyled,{label:`Value`,description:A})})}),(0,b.jsx)(r.Select,{label:`OptionStyled label with icon`,defaultValue:`overflow`,children:(0,b.jsx)(r.Option,{value:`overflow`,children:(0,b.jsx)(r.OptionStyled,{label:A,icon:(0,b.jsx)(`img`,{src:`https://i.ibb.co/q956jBg/snowflake-square.png`,"data-testid":`png-icon`,alt:`snowflake icon`})})})})]}),(0,b.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-row`,`p-l`,`gap-xl`,`w-full`,`items-start`),style:{blockSize:`200px`},children:[(0,b.jsx)(r.Select,{defaultOpen:!0,placeholder:`color`,label:`Default opened`,defaultValue:`red`,size:`small`,children:k}),(0,b.jsx)(`div`,{className:i(`shrink-0`),style:{inlineSize:`275px`},children:(0,b.jsxs)(r.Select,{defaultOpen:!0,defaultValue:`unknown`,placeholder:`color`,maxWidth:`reference`,label:`Default opened with overflow`,size:`small`,children:[(0,b.jsx)(r.Option,{value:``,children:`Please select a value`}),(0,b.jsx)(r.Option,{value:`unknown`,children:`An_unknown color_but_with_a_very long_label_that_goes_beyond_the_parent_size_and_with_no_space`}),(0,b.jsx)(r.Option,{value:`known`,children:`Example of label with overflow text lorem ipsum need to go over 400px`})]})}),(0,b.jsx)(r.Select,{placeholder:`color`,label:`Default`,defaultValue:`red`,size:`small`,children:k}),(0,b.jsx)(r.Select,{placeholder:`color`,label:`hasError`,hasError:!0,size:`small`,children:k}),(0,b.jsx)(r.Select,{placeholder:`color`,label:`hasError`,disabled:!0,size:`small`,children:k}),(0,b.jsx)(r.Select,{placeholder:`color`,label:`hasError`,readOnly:!0,size:`small`,children:k})]}),(0,b.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-row`,`p-l`,`gap-xl`,`w-full`,`items-start`),style:{blockSize:`380px`},children:[(0,b.jsx)(r.Select,{defaultOpen:!0,placeholder:`color`,label:`Default opened`,defaultValue:`red`,children:m}),(0,b.jsxs)(r.Select,{defaultOpen:!0,label:`Default opened with overflow`,helpText:`Help text`,placeholder:`color`,defaultValue:`red`,children:[(0,b.jsx)(r.Option,{value:``,defaultValue:`red`,children:`Example of label with overflow text lorem ipsum need to go over 400px`}),m]}),(0,b.jsx)(r.Select,{label:`Default`,helpText:`Help text`,placeholder:`color`}),(0,b.jsx)(r.Select,{label:`hasError`,helpText:`Help text`,placeholder:`color`,hasError:!0}),(0,b.jsx)(r.Select,{label:`Disabled`,helpText:`Help text`,placeholder:`color`,disabled:!0}),(0,b.jsx)(r.Select,{label:`ReadOnly`,helpText:`Help text`,placeholder:`color`,readOnly:!0,defaultValue:`red`,children:m})]})]}),parameters:{controls:{disable:!0},chromatic:{ignoreSelectors:[`[data-testid="png-icon"]`]}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P=[`UnControlled`,`WithField`,`Controlled`,`WithIcons`,`Searchable`,`FontPicker`,`RenderValue`,`VisualTest`]}));F();export{E as Controlled,j as FontPicker,M as RenderValue,O as Searchable,w as UnControlled,N as VisualTest,T as WithField,D as WithIcons,P as __namedExportsOrder,S as default,F as n,y as t};