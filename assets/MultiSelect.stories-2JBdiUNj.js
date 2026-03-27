import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{Fn as r,G as i,Pn as a,nr as o,v as s}from"./iframe-RiXBydPV.js";import{n as c,r as l,t as u}from"./Field.argTypes-BFMCH8OS.js";import{n as d,t as f}from"./SelectTest-DrCQF0Gj.js";import{i as p,r as m}from"./icons-CFhwHQjC.js";var h,g=t((()=>{l(),h=({options:e})=>({...c,...u,defaultValue:{table:{disable:!0}},defaultValues:{control:`multi-select`,description:`The default value of the field.`,options:e,table:{type:{summary:`string[]`}}},value:{control:`multi-select`,options:e,description:`The array of values of the field.`,table:{type:{summary:`string[]`}}},onChange:{description:`The function that will be called when the value of the field changes.`,table:{type:{summary:`(e: ChangeEvent) => void`}}},renderValue:{description:`The function that will be called to render the value of the field if any.`,table:{type:{summary:`(value: string, selectedProps?: OptionProps) => ReactNode;`}}},children:{description:`The options of the field. They are used to populate the field.`,table:{type:{summary:`ReactNode`}}}})})),_=n({CreateOption:()=>E,CustomRenderValue:()=>T,Playground:()=>x,UnControlled:()=>C,VisualTest:()=>w,__namedExportsOrder:()=>D,default:()=>b}),v,y,b,x,S,C,w,T,E,D,O=t((()=>{v=e(o()),s(),p(),g(),d(),y=r(),b={title:`Components/MultiSelect`,component:i.Multi,excludeStories:[`ValueTick`,`LabelTick`]},x={render:({defaultValues:e,...t})=>(0,y.jsx)(`div`,{className:a(`flex-noreset`,`border-box`,`p-s`,`items-start`),"data-testid":`wrapper`,style:{inlineSize:300},children:(0,y.jsxs)(i.Multi,{...t,defaultValue:e,children:[(0,y.jsx)(i.Option,{value:``,children:`--Please choose colors--`}),(0,y.jsxs)(i.OptGroup,{label:`Colors`,children:[(0,y.jsx)(i.Option,{value:`red`,children:`Red`}),(0,y.jsx)(i.Option,{value:`green`,children:`Green`}),(0,y.jsx)(i.Option,{value:`blue`,children:`Blue`})]}),(0,y.jsxs)(i.OptGroup,{label:`Deprecated Colors`,children:[(0,y.jsx)(i.Option,{value:`chartreuse`,children:(0,y.jsx)(i.OptionStyled,{label:`Chartreuse`,description:`nice color btw`})}),(0,y.jsx)(i.Option,{value:`cornsilk`,children:`Cornsilk`}),(0,y.jsx)(i.Option,{value:`pink`,children:`Gainsboro`})]})]})}),args:{label:`Select a color`,defaultOpen:!1,defaultValues:[`red`],hasError:!1},argTypes:h({options:[`red`,`green`,`blue`]}),parameters:{chromatic:{disableSnapshot:!0}}},S={chromatic:{disableSnapshot:!0}},C={render:({defaultValues:e,...t})=>(0,y.jsx)(`div`,{className:a(`flex-noreset`,`border-box`,`p-s`,`items-start`),"data-testid":`wrapper`,style:{inlineSize:300},children:(0,y.jsxs)(i.Multi,{label:`Uncontrolled`,...t,defaultValue:e,children:[(0,y.jsx)(i.Option,{value:``,children:`None`}),f,(0,y.jsx)(i.Divider,{}),(0,y.jsxs)(i.OptGroup,{label:`Deprecated Colors`,children:[(0,y.jsx)(i.Option,{value:`chartreuse`,children:(0,y.jsx)(i.OptionStyled,{label:`Chartreuse`,description:`nice color btw`})}),(0,y.jsx)(i.Option,{value:`cornsilk`,children:`Cornsilk`}),(0,y.jsx)(i.Option,{value:`pink`,children:`Gainsboro`})]})]})}),args:{placeholder:`Select colors`,defaultValues:[`pink`,`purple`,`maroon`]},argTypes:{...x.argTypes},parameters:{...S}},w={render:()=>{let e=(e,t,n)=>(0,y.jsxs)(`div`,{className:a(`flex-noreset`,`overflow-hidden`,`border-box`,`w-full`,`p-0`,`pl-s`,`gap-m`,`items-center`,`text-default`,`font-body-m`),children:[(0,y.jsx)(m,{}),(0,y.jsx)(`span`,{className:a(`flex`,`flex-row`,`gap-s`,`flex-wrap`),children:e.map((n,r)=>r===e.length-1?(0,y.jsx)(`span`,{className:a(`text-default`,`font-label-s`),children:t[n]?.children||n},n):(0,y.jsxs)(`span`,{className:a(`flex`,`flex-row`,`text-default`,`font-label-s`),children:[t[n]?.children||n,(0,y.jsxs)(`span`,{className:a(`text-default`,`font-label-s`),children:[`,`,` `]})]},n))}),n]});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`div`,{className:a(`flex-noreset`,`border-box`,`flex-row`,`p-l`,`gap-3xl`,`items-start`),"data-testid":`wrapper`,style:{inlineSize:1200,blockSize:640},children:[(0,y.jsx)(i.Multi,{defaultOpen:!0,placeholder:`colors`,"aria-label":`Color selection`,children:f}),(0,y.jsxs)(i.Multi,{defaultOpen:!0,label:`Colors selection`,placeholder:`colors`,defaultValue:[`blue`,`red`,`sage`],children:[f,(0,y.jsx)(i.Option,{value:`sage`,children:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, pariatur?`})]}),(0,y.jsx)(`div`,{className:a(`pl-3xl`),children:(0,y.jsxs)(i.Multi,{defaultOpen:!0,label:`Custom render value`,renderValue:e,defaultValue:[`blue`,`chartreuse`,`red`],children:[(0,y.jsx)(i.Option,{value:``,children:`--Please choose colors--`}),(0,y.jsxs)(i.OptGroup,{label:`Colors`,children:[(0,y.jsx)(i.Option,{value:`red`,children:`Red`}),(0,y.jsx)(i.Option,{value:`green`,children:`Green`}),(0,y.jsx)(i.Option,{value:`blue`,children:`Blue`})]}),(0,y.jsxs)(i.OptGroup,{label:`Deprecated Colors`,children:[(0,y.jsx)(i.Option,{value:`chartreuse`,children:(0,y.jsx)(i.OptionStyled,{label:`Chartreuse`,description:`nice color btw`})}),(0,y.jsx)(i.Option,{value:`cornsilk`,children:`Cornsilk`}),(0,y.jsx)(i.Option,{value:`pink`,children:`Gainsboro`})]})]})})]}),(0,y.jsxs)(`div`,{className:a(`flex-noreset`,`flex-row`,`gap-m`),children:[(0,y.jsxs)(`div`,{className:a(`flex-noreset`,`border-box`,`flex-col`,`gap-m`,`w-xxs`),children:[(0,y.jsx)(i.Multi,{placeholder:`colors`,label:`Has error`,hasError:!0,errorMessages:[`Error message`],children:f}),(0,y.jsx)(i.Multi,{placeholder:`colors`,label:`Has help`,helpText:`Help text`,children:f}),(0,y.jsx)(i.Multi,{placeholder:`colors`,label:`Is disabled`,defaultValue:[`blue`,`red`],disabled:!0,children:f}),(0,y.jsx)(i.Multi,{"data-testid":`hover`,label:`Hovered`,placeholder:`colors`,defaultValue:[`blue`,`red`],children:f}),(0,y.jsx)(i.Multi,{label:`Read only`,placeholder:`colors`,defaultValue:[`blue`,`red`],readOnly:!0,children:f})]}),(0,y.jsxs)(`div`,{className:a(`flex-noreset`,`flex-col`),children:[(0,y.jsxs)(i.Multi,{filterValue:`red`,label:`filter + create`,defaultOpen:!0,children:[f,(0,y.jsx)(i.OptionCreate,{})]}),(0,y.jsx)(`div`,{style:{marginBlockStart:`auto`},children:(0,y.jsx)(i.Multi,{label:`Read only`,placeholder:`colors`,readOnly:!0,children:f})})]})]})]})},parameters:{controls:{disable:!0},pseudo:{hover:`[data-testid="hover.combobox"]`}}},T={parameters:{...S},render:({defaultValues:e,...t})=>{let n=(e,t,n)=>(0,y.jsxs)(`div`,{className:a(`flex-noreset`,`overflow-hidden`,`border-box`,`w-full`,`p-0`,`pl-s`,`gap-m`,`items-center`,`text-default`,`font-body-m`),children:[(0,y.jsx)(m,{}),(0,y.jsx)(`span`,{className:a(`flex`,`flex-row`,`gap-s`,`flex-wrap`),children:e.map((n,r)=>r===e.length-1?(0,y.jsx)(`span`,{className:a(`text-default`,`font-label-s`),children:t[n]?.children||n},n):(0,y.jsxs)(`span`,{className:a(`flex`,`flex-row`,`text-default`,`font-label-s`),children:[t[n]?.children||n,(0,y.jsxs)(`span`,{className:a(`text-default`,`font-label-s`),children:[`,`,` `]})]},n))}),n]});return(0,y.jsx)(`div`,{className:a(`flex-noreset`,`border-box`,`p-s`,`items-start`),"data-testid":`wrapper`,style:{inlineSize:300},children:(0,y.jsxs)(i.Multi,{...t,renderValue:n,defaultValue:e,children:[(0,y.jsx)(i.Option,{value:``,children:`--Please choose colors--`}),(0,y.jsxs)(i.OptGroup,{label:`Colors`,children:[(0,y.jsx)(i.Option,{value:`red`,children:`Red`}),(0,y.jsx)(i.Option,{value:`green`,children:`Green`}),(0,y.jsx)(i.Option,{value:`blue`,children:`Blue`})]}),(0,y.jsxs)(i.OptGroup,{label:`Deprecated Colors`,children:[(0,y.jsx)(i.Option,{value:`chartreuse`,children:(0,y.jsx)(i.OptionStyled,{label:`Chartreuse`,description:`nice color btw`})}),(0,y.jsx)(i.Option,{value:`cornsilk`,children:`Cornsilk`}),(0,y.jsx)(i.Option,{value:`pink`,children:`Gainsboro`})]})]})})},argTypes:h({options:[`red`,`green`,`blue`,`chartreuse`,`cornsilk`,`pink`]})},E={render:({defaultValues:e,...t})=>{let[n,r]=(0,v.useState)([{value:`red`,label:`Red`},{value:`green`,label:`Green`},{value:`blue`,label:`Blue`}]),o=e=>n.some(t=>t.value===e||t.label===e);return(0,y.jsx)(`div`,{className:a(`flex-noreset`,`border-box`,`p-s`,`items-start`),"data-testid":`wrapper`,style:{inlineSize:300},children:(0,y.jsxs)(i.Multi,{...t,onChange:e=>{let t=e.target.value;t&&(o(t)||r(e=>[...e,{value:t,label:t}]))},defaultValue:e,placeholder:`Create or select colors`,children:[n.map(e=>(0,y.jsx)(i.Option,{value:e.value,children:e.label},e.value)),(0,y.jsx)(i.OptionCreate,{isValid:e=>e!==`false`&&!o(e)})]})})},args:{label:`Creatable MultiSelect`,defaultOpen:!1,defaultValues:[],hasError:!1},argTypes:{...h({options:[`red`,`green`,`blue`]})},parameters:{chromatic:{disableSnapshot:!0}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: ({
    defaultValues,
    ...props
  }: StoryProps) => <div className={classNames("flex-noreset", "border-box", "p-s", "items-start")} data-testid="wrapper" style={{
    inlineSize: 300
  }}>
      <Select.Multi {...props} defaultValue={defaultValues}>
        <Select.Option value="">--Please choose colors--</Select.Option>
        <Select.OptGroup label="Colors">
          <Select.Option value="red">Red</Select.Option>
          <Select.Option value="green">Green</Select.Option>
          <Select.Option value="blue">Blue</Select.Option>
        </Select.OptGroup>
        <Select.OptGroup label="Deprecated Colors">
          <Select.Option value="chartreuse">
            <Select.OptionStyled label="Chartreuse" description="nice color btw" />
          </Select.Option>
          <Select.Option value="cornsilk">Cornsilk</Select.Option>
          <Select.Option value="pink">Gainsboro</Select.Option>
        </Select.OptGroup>
      </Select.Multi>
    </div>,
  args: {
    label: "Select a color",
    defaultOpen: false,
    defaultValues: ["red"],
    hasError: false
  },
  argTypes: getMultiSelectArgTypes({
    options: ["red", "green", "blue"]
  }),
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: ({
    defaultValues,
    ...props
  }: StoryProps) => {
    return <div className={classNames("flex-noreset", "border-box", "p-s", "items-start")} data-testid="wrapper" style={{
      inlineSize: 300
    }}>
        <Select.Multi label="Uncontrolled" {...props} defaultValue={defaultValues}>
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
            <Select.Option value="cornsilk">Cornsilk</Select.Option>
            <Select.Option value="pink">Gainsboro</Select.Option>
          </Select.OptGroup>
        </Select.Multi>
      </div>;
  },
  args: {
    placeholder: "Select colors",
    defaultValues: ["pink", "purple", "maroon"]
  },
  argTypes: {
    ...Playground.argTypes
  },
  parameters: {
    ...disableSnap
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const renderCustomValue = (values: Array<string>, selectedProps: Record<string, SelectProps["Option"]>, input: ReactNode) => {
      return <div className={classNames("flex-noreset", "overflow-hidden", "border-box", "w-full", "p-0", "pl-s", "gap-m", "items-center", "text-default", "font-body-m")}>
          <PaletteOutlineIcon />
          <span className={classNames("flex", "flex-row", "gap-s", "flex-wrap")}>
            {values.map((value, index) => {
            const isLast = index === values.length - 1;
            if (isLast) {
              return <span key={value} className={classNames("text-default", "font-label-s")}>
                    {selectedProps[value]?.children || value}
                  </span>;
            }
            return <span key={value} className={classNames("flex", "flex-row", "text-default", "font-label-s")}>
                  {selectedProps[value]?.children || value}
                  <span className={classNames("text-default", "font-label-s")}>
                    ,{" "}
                  </span>
                </span>;
          })}
          </span>
          {input}
        </div>;
    };
    return <>
        <div className={classNames("flex-noreset", "border-box", "flex-row", "p-l", "gap-3xl", "items-start")} data-testid="wrapper" style={{
        inlineSize: 1200,
        blockSize: 640
      }}>
          <Select.Multi defaultOpen placeholder="colors" aria-label="Color selection">
            {OPTIONS_WITH_GROUP}
          </Select.Multi>

          <Select.Multi defaultOpen label="Colors selection" placeholder="colors" defaultValue={["blue", "red", "sage"]}>
            {OPTIONS_WITH_GROUP}
            <Select.Option value="sage">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
              pariatur?
            </Select.Option>
          </Select.Multi>

          <div className={classNames("pl-3xl")}>
            <Select.Multi defaultOpen label="Custom render value" renderValue={renderCustomValue} defaultValue={["blue", "chartreuse", "red"]}>
              <Select.Option value="">--Please choose colors--</Select.Option>
              <Select.OptGroup label="Colors">
                <Select.Option value="red">Red</Select.Option>
                <Select.Option value="green">Green</Select.Option>
                <Select.Option value="blue">Blue</Select.Option>
              </Select.OptGroup>
              <Select.OptGroup label="Deprecated Colors">
                <Select.Option value="chartreuse">
                  <Select.OptionStyled label="Chartreuse" description="nice color btw" />
                </Select.Option>
                <Select.Option value="cornsilk">Cornsilk</Select.Option>
                <Select.Option value="pink">Gainsboro</Select.Option>
              </Select.OptGroup>
            </Select.Multi>
          </div>
        </div>
        <div className={classNames("flex-noreset", "flex-row", "gap-m")}>
          <div className={classNames("flex-noreset", "border-box", "flex-col", "gap-m", "w-xxs")}>
            <Select.Multi placeholder="colors" label="Has error" hasError errorMessages={["Error message"]}>
              {OPTIONS_WITH_GROUP}
            </Select.Multi>
            <Select.Multi placeholder="colors" label="Has help" helpText="Help text">
              {OPTIONS_WITH_GROUP}
            </Select.Multi>
            <Select.Multi placeholder="colors" label="Is disabled" defaultValue={["blue", "red"]} disabled>
              {OPTIONS_WITH_GROUP}
            </Select.Multi>
            <Select.Multi data-testid="hover" label="Hovered" placeholder="colors" defaultValue={["blue", "red"]}>
              {OPTIONS_WITH_GROUP}
            </Select.Multi>
            <Select.Multi label="Read only" placeholder="colors" defaultValue={["blue", "red"]} readOnly>
              {OPTIONS_WITH_GROUP}
            </Select.Multi>
          </div>
          <div className={classNames("flex-noreset", "flex-col")}>
            <Select.Multi filterValue="red" label="filter + create" defaultOpen>
              {OPTIONS_WITH_GROUP}
              <Select.OptionCreate />
            </Select.Multi>

            <div style={{
            marginBlockStart: "auto"
          }}>
              <Select.Multi label="Read only" placeholder="colors" readOnly>
                {OPTIONS_WITH_GROUP}
              </Select.Multi>
            </div>
          </div>
        </div>
      </>;
  },
  parameters: {
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-testid="hover.combobox"]'
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...disableSnap
  },
  render: ({
    defaultValues,
    ...props
  }: StoryProps) => {
    const renderCustomValue = (values: Array<string>, selectedProps: Record<string, SelectProps["Option"]>, input: ReactNode) => {
      return <div className={classNames("flex-noreset", "overflow-hidden", "border-box", "w-full", "p-0", "pl-s", "gap-m", "items-center", "text-default", "font-body-m")}>
          <PaletteOutlineIcon />
          <span className={classNames("flex", "flex-row", "gap-s", "flex-wrap")}>
            {values.map((value, index) => {
            const isLast = index === values.length - 1;
            if (isLast) {
              return <span key={value} className={classNames("text-default", "font-label-s")}>
                    {selectedProps[value]?.children || value}
                  </span>;
            }
            return <span key={value} className={classNames("flex", "flex-row", "text-default", "font-label-s")}>
                  {selectedProps[value]?.children || value}
                  <span className={classNames("text-default", "font-label-s")}>
                    ,{" "}
                  </span>
                </span>;
          })}
          </span>
          {input}
        </div>;
    };
    return <div className={classNames("flex-noreset", "border-box", "p-s", "items-start")} data-testid="wrapper" style={{
      inlineSize: 300
    }}>
        <Select.Multi {...props} renderValue={renderCustomValue} defaultValue={defaultValues}>
          <Select.Option value="">--Please choose colors--</Select.Option>
          <Select.OptGroup label="Colors">
            <Select.Option value="red">Red</Select.Option>
            <Select.Option value="green">Green</Select.Option>
            <Select.Option value="blue">Blue</Select.Option>
          </Select.OptGroup>
          <Select.OptGroup label="Deprecated Colors">
            <Select.Option value="chartreuse">
              <Select.OptionStyled label="Chartreuse" description="nice color btw" />
            </Select.Option>
            <Select.Option value="cornsilk">Cornsilk</Select.Option>
            <Select.Option value="pink">Gainsboro</Select.Option>
          </Select.OptGroup>
        </Select.Multi>
      </div>;
  },
  argTypes: getMultiSelectArgTypes({
    options: ["red", "green", "blue", "chartreuse", "cornsilk", "pink"]
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: ({
    defaultValues,
    ...props
  }: StoryProps) => {
    const [options, setOptions] = useState([{
      value: "red",
      label: "Red"
    }, {
      value: "green",
      label: "Green"
    }, {
      value: "blue",
      label: "Blue"
    }]);
    const isExistingOption = (value: string) => {
      return options.some(opt => opt.value === value || opt.label === value);
    };
    return <div className={classNames("flex-noreset", "border-box", "p-s", "items-start")} data-testid="wrapper" style={{
      inlineSize: 300
    }}>
        <Select.Multi {...props} onChange={e => {
        const newValue = e.target.value;
        if (!newValue) return;
        // if not, create the new option
        if (!isExistingOption(newValue)) {
          setOptions(opts => [...opts, {
            value: newValue,
            label: newValue
          }]);
        }
      }} defaultValue={defaultValues} placeholder="Create or select colors">
          {options.map(opt => <Select.Option key={opt.value} value={opt.value}>
              {opt.label}
            </Select.Option>)}
          <Select.OptionCreate isValid={value => {
          return value !== "false" && !isExistingOption(value);
        }} />
        </Select.Multi>
      </div>;
  },
  args: {
    label: "Creatable MultiSelect",
    defaultOpen: false,
    // onCreateOption: (newValue: string) => console.log(\`New option created: \${newValue}\`),
    defaultValues: [],
    hasError: false
  },
  argTypes: {
    ...getMultiSelectArgTypes({
      options: ["red", "green", "blue"]
    })
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...E.parameters?.docs?.source}}},D=[`Playground`,`UnControlled`,`VisualTest`,`CustomRenderValue`,`CreateOption`]}));O();export{E as CreateOption,T as CustomRenderValue,x as Playground,C as UnControlled,w as VisualTest,D as __namedExportsOrder,b as default,O as n,_ as t};