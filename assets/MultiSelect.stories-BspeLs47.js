import{r as v,j as e}from"./iframe-B-fqCePV.js";import{a as O}from"./icons-DTOHuE0Q.js";import{C as g,F as j}from"./Field.argTypes-1rEre7SB.js";import{O as i}from"./SelectTest-B_h2m4i9.js";import{S as l}from"./SelectComposition-DIoBGgJg.js";import{c as t}from"./classNames-BHQ9ieoZ.js";const b=({options:s})=>({...j,...g,defaultValue:{table:{disable:!0}},defaultValues:{control:"multi-select",description:"The default value of the field.",options:s,table:{type:{summary:"string[]"}}},value:{control:"multi-select",options:s,description:"The array of values of the field.",table:{type:{summary:"string[]"}}},onChange:{description:"The function that will be called when the value of the field changes.",table:{type:{summary:"(e: ChangeEvent) => void"}}},renderValue:{description:"The function that will be called to render the value of the field if any.",table:{type:{summary:"(value: string, selectedProps?: OptionProps) => ReactNode;"}}},children:{description:"The options of the field. They are used to populate the field.",table:{type:{summary:"ReactNode"}}}}),y={title:"Components/MultiSelect",component:l.Multi,excludeStories:["ValueTick","LabelTick"]},p={render:({defaultValues:s,...o})=>e.jsx("div",{className:t("flex-noreset","border-box","p-s","items-start"),"data-testid":"wrapper",style:{inlineSize:300},children:e.jsxs(l.Multi,{...o,defaultValue:s,children:[e.jsx(l.Option,{value:"",children:"--Please choose colors--"}),e.jsxs(l.OptGroup,{label:"Colors",children:[e.jsx(l.Option,{value:"red",children:"Red"}),e.jsx(l.Option,{value:"green",children:"Green"}),e.jsx(l.Option,{value:"blue",children:"Blue"})]}),e.jsxs(l.OptGroup,{label:"Deprecated Colors",children:[e.jsx(l.Option,{value:"chartreuse",children:e.jsx(l.OptionStyled,{label:"Chartreuse",description:"nice color btw"})}),e.jsx(l.Option,{value:"cornsilk",children:"Cornsilk"}),e.jsx(l.Option,{value:"pink",children:"Gainsboro"})]})]})}),args:{label:"Select a color",defaultOpen:!1,defaultValues:["red"],hasError:!1},argTypes:b({options:["red","green","blue"]}),parameters:{chromatic:{disableSnapshot:!0}}},S={chromatic:{disableSnapshot:!0}},d={render:({defaultValues:s,...o})=>e.jsx("div",{className:t("flex-noreset","border-box","p-s","items-start"),"data-testid":"wrapper",style:{inlineSize:300},children:e.jsxs(l.Multi,{label:"Uncontrolled",...o,defaultValue:s,children:[e.jsx(l.Option,{value:"",children:"None"}),i,e.jsx(l.Divider,{}),e.jsxs(l.OptGroup,{label:"Deprecated Colors",children:[e.jsx(l.Option,{value:"chartreuse",children:e.jsx(l.OptionStyled,{label:"Chartreuse",description:"nice color btw"})}),e.jsx(l.Option,{value:"cornsilk",children:"Cornsilk"}),e.jsx(l.Option,{value:"pink",children:"Gainsboro"})]})]})}),args:{placeholder:"Select colors",defaultValues:["pink","purple","maroon"]},argTypes:{...p.argTypes},parameters:{...S}},m={render:()=>{const s=(o,c,u)=>e.jsxs("div",{className:t("flex-noreset","overflow-hidden","border-box","w-full","p-0","pl-s","gap-m","items-center","text-default","font-body-m"),children:[e.jsx(O,{}),e.jsx("span",{className:t("flex","flex-row","gap-s","flex-wrap"),children:o.map((n,r)=>r===o.length-1?e.jsx("span",{className:t("text-default","font-label-s"),children:c[n]?.children||n},n):e.jsxs("span",{className:t("flex","flex-row","text-default","font-label-s"),children:[c[n]?.children||n,e.jsx("span",{className:t("text-default","font-label-s"),children:", "})]},n))}),u]});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:t("flex-noreset","border-box","flex-row","p-l","gap-3xl","items-start"),"data-testid":"wrapper",style:{inlineSize:1200,blockSize:640},children:[e.jsx(l.Multi,{defaultOpen:!0,placeholder:"colors","aria-label":"Color selection",children:i}),e.jsxs(l.Multi,{defaultOpen:!0,label:"Colors selection",placeholder:"colors",defaultValue:["blue","red","sage"],children:[i,e.jsx(l.Option,{value:"sage",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, pariatur?"})]}),e.jsx("div",{className:t("pl-3xl"),children:e.jsxs(l.Multi,{defaultOpen:!0,label:"Custom render value",renderValue:s,defaultValue:["blue","chartreuse","red"],children:[e.jsx(l.Option,{value:"",children:"--Please choose colors--"}),e.jsxs(l.OptGroup,{label:"Colors",children:[e.jsx(l.Option,{value:"red",children:"Red"}),e.jsx(l.Option,{value:"green",children:"Green"}),e.jsx(l.Option,{value:"blue",children:"Blue"})]}),e.jsxs(l.OptGroup,{label:"Deprecated Colors",children:[e.jsx(l.Option,{value:"chartreuse",children:e.jsx(l.OptionStyled,{label:"Chartreuse",description:"nice color btw"})}),e.jsx(l.Option,{value:"cornsilk",children:"Cornsilk"}),e.jsx(l.Option,{value:"pink",children:"Gainsboro"})]})]})})]}),e.jsxs("div",{className:t("flex-noreset","flex-row","gap-m"),children:[e.jsxs("div",{className:t("flex-noreset","border-box","flex-col","gap-m","w-xxs"),children:[e.jsx(l.Multi,{placeholder:"colors",label:"Has error",hasError:!0,errorMessages:["Error message"],children:i}),e.jsx(l.Multi,{placeholder:"colors",label:"Has help",helpText:"Help text",children:i}),e.jsx(l.Multi,{placeholder:"colors",label:"Is disabled",defaultValue:["blue","red"],disabled:!0,children:i}),e.jsx(l.Multi,{"data-testid":"hover",label:"Hovered",placeholder:"colors",defaultValue:["blue","red"],children:i}),e.jsx(l.Multi,{label:"Read only",placeholder:"colors",defaultValue:["blue","red"],readOnly:!0,children:i})]}),e.jsxs("div",{className:t("flex-noreset","flex-col"),children:[e.jsxs(l.Multi,{filterValue:"red",label:"filter + create",defaultOpen:!0,children:[i,e.jsx(l.OptionCreate,{})]}),e.jsx("div",{style:{marginBlockStart:"auto"},children:e.jsx(l.Multi,{label:"Read only",placeholder:"colors",readOnly:!0,children:i})})]})]})]})},parameters:{controls:{disable:!0},pseudo:{hover:'[data-testid="hover.combobox"]'}}},x={parameters:{...S},render:({defaultValues:s,...o})=>{const c=(u,n,r)=>e.jsxs("div",{className:t("flex-noreset","overflow-hidden","border-box","w-full","p-0","pl-s","gap-m","items-center","text-default","font-body-m"),children:[e.jsx(O,{}),e.jsx("span",{className:t("flex","flex-row","gap-s","flex-wrap"),children:u.map((a,f)=>f===u.length-1?e.jsx("span",{className:t("text-default","font-label-s"),children:n[a]?.children||a},a):e.jsxs("span",{className:t("flex","flex-row","text-default","font-label-s"),children:[n[a]?.children||a,e.jsx("span",{className:t("text-default","font-label-s"),children:", "})]},a))}),r]});return e.jsx("div",{className:t("flex-noreset","border-box","p-s","items-start"),"data-testid":"wrapper",style:{inlineSize:300},children:e.jsxs(l.Multi,{...o,renderValue:c,defaultValue:s,children:[e.jsx(l.Option,{value:"",children:"--Please choose colors--"}),e.jsxs(l.OptGroup,{label:"Colors",children:[e.jsx(l.Option,{value:"red",children:"Red"}),e.jsx(l.Option,{value:"green",children:"Green"}),e.jsx(l.Option,{value:"blue",children:"Blue"})]}),e.jsxs(l.OptGroup,{label:"Deprecated Colors",children:[e.jsx(l.Option,{value:"chartreuse",children:e.jsx(l.OptionStyled,{label:"Chartreuse",description:"nice color btw"})}),e.jsx(l.Option,{value:"cornsilk",children:"Cornsilk"}),e.jsx(l.Option,{value:"pink",children:"Gainsboro"})]})]})})},argTypes:b({options:["red","green","blue","chartreuse","cornsilk","pink"]})},h={render:({defaultValues:s,...o})=>{const[c,u]=v.useState([{value:"red",label:"Red"},{value:"green",label:"Green"},{value:"blue",label:"Blue"}]),n=r=>c.some(a=>a.value===r||a.label===r);return e.jsx("div",{className:t("flex-noreset","border-box","p-s","items-start"),"data-testid":"wrapper",style:{inlineSize:300},children:e.jsxs(l.Multi,{...o,onChange:r=>{const a=r.target.value;a&&(n(a)||u(f=>[...f,{value:a,label:a}]))},defaultValue:s,placeholder:"Create or select colors",children:[c.map(r=>e.jsx(l.Option,{value:r.value,children:r.label},r.value)),e.jsx(l.OptionCreate,{isValid:r=>r!=="false"&&!n(r)})]})})},args:{label:"Creatable MultiSelect",defaultOpen:!1,defaultValues:[],hasError:!1},argTypes:{...b({options:["red","green","blue"]})},parameters:{chromatic:{disableSnapshot:!0}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
                  <span className={classNames("text-default", "font-label-s")}>, </span>
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, pariatur?
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
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
                  <span className={classNames("text-default", "font-label-s")}>, </span>
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
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const N=["Playground","UnControlled","VisualTest","CustomRenderValue","CreateOption"],k=Object.freeze(Object.defineProperty({__proto__:null,CreateOption:h,CustomRenderValue:x,Playground:p,UnControlled:d,VisualTest:m,__namedExportsOrder:N,default:y},Symbol.toStringTag,{value:"Module"}));export{h as C,k as S,d as U};
