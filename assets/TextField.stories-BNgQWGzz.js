import{j as e}from"./iframe-CYyT-rNd.js";import{F as b}from"./Add-DcwIOkn_.js";import{F as u}from"./Copy-CTuCBlSc.js";import{F as A,a as S,b as C,c as z}from"./Subtract-D9yFNKnL.js";import{C as I,F as B}from"./Field.argTypes-1rEre7SB.js";import{A as i,T as l}from"./TextField-3so8vjFm.js";import{I as o}from"./IconButton-DQqeG5o4.js";import{c as a}from"./classNames-BmP9dLUE.js";import{B as s}from"./Button-B_WU7ehq.js";import{F as d}from"./Field-WnapnPu6.js";import{B as n}from"./ButtonGroup-QoSJ-7Ap.js";import{T}from"./Tag-CPT8lZjs.js";const w=e.jsx(i,{children:e.jsx(o,{variant:"quiet",size:"small",label:"Copy",icon:e.jsx(u,{width:void 0,height:void 0})})}),g={...B,...I,value:{control:{type:"select"},options:[void 0,"simple value","very very long value that exceeds the width of the text field"],description:"The value of the text field in controlled mode."},defaultValue:{control:{type:"text"},description:"The default value of the text field in uncontrolled mode."},designSize:{control:{type:"select"},table:{type:{summary:"string"}},options:["default","small"]},leftAdornment:{control:{type:"text"},table:{type:{summary:"string"}}},rightAdornment:{control:{type:"text"},table:{type:{summary:"string"}}},maxCharacterCount:{control:"number",description:"Maximum number of characters allowed. When set, a character counter will be displayed. When the limit is exceeded, the TextField will show error icon and red outline. This property only works when the text field is in controlled mode.",table:{type:{summary:"number"}}},type:{control:{type:"select"},options:["text","search"],description:'Type "search" adds a search icon to the left of the text field.',table:{defaultValue:{summary:'"text"'},type:{summary:'"text" | "search"'}}},leftAffix:{description:"Text fields can nest a prefix (leftAffix) component with custom content such as [IconButton](./?path=/docs/components-button--docs). This allows the textfield to have supporting actions associated with the field value. LeftAffix and rightAffix is not compatible with small (designSize) textfields.",control:{type:"select",labels:{first:"No left affix",second:"IconButton"}},options:["No left affix","IconButton"],mapping:{"No left affix":void 0,IconButton:w},table:{type:{summary:"ReactNode"}}},rightAffix:{description:"Text fields can nest a suffix (rightAffix) component with custom content such as [IconButton](./?path=/docs/components-button--docs). This allows the textfield to have supporting actions associated with the field value. LeftAffix and rightAffix is not compatible with small (designSize) textfields.",control:{type:"select",labels:{first:"No right affix",second:"IconButton"}},options:["No right affix","IconButton"],mapping:{"No right affix":void 0,IconButton:w},table:{type:{summary:"ReactNode"}}}},{fn:r}=__STORYBOOK_MODULE_TEST__,R={title:"Components/TextField",component:l,parameters:{},argTypes:g},j=["Error message 1"],F=["A very very very very very very very very long error message"],N="A very very very very very very very very long help text",x={render:t=>e.jsxs("div",{className:a("flex","flex-col","border-box","w-fit","p-s"),children:[e.jsx(l,{id:"input1",label:"Default",helpText:"help me",placeholder:"Give me a value",...t}),e.jsx(l,{id:"input-hover",label:"Hover",helpText:"help me",placeholder:"Give me a value",...t,"data-testid":"hover"}),e.jsx(l,{id:"input-focus",label:"Focus",placeholder:"Focus",...t,"data-testid":"focus"}),e.jsx(l,{id:"input-disabled",label:"Disabled",placeholder:"Disabled Input",disabled:!0,...t}),e.jsx(l,{id:"input-readonly",label:"Readonly",placeholder:"Readonly Input",readOnly:!0,...t}),e.jsx(l,{id:"input-error-message",label:"Error",placeholder:"Input in error with message",errorMessages:j,...t}),e.jsx(l,{id:"input-error",label:"Error",placeholder:"Input in error",hasError:!0,...t}),e.jsx(l,{id:"input-error",label:"MaxCharacterCount",placeholder:"Input has counter",maxCharacterCount:10})]}),args:{designSize:"default"},argTypes:g,parameters:{chromatic:{disableSnapshot:!0},pseudo:{hover:'[data-testid="hover"]',focus:'div:has(> div > [data-testid="focus"])'}}},c={render:t=>e.jsx("span",{className:a("flex","flex-col","border-box","w-fit","p-s","gap-s"),children:e.jsx(l,{...t})}),args:{label:"Label",id:"input",placeholder:"Placeholder",defaultValue:"Value",helpText:"help me",maxCharacterCount:20},argTypes:g,parameters:{chromatic:{disableSnapshot:!0}}},m={render:({leftAdornment:t="Left",rightAdornment:y="Right",...v})=>e.jsxs("div",{className:a("flex","flex-col","border-box","w-fit","p-s","gap-m"),children:[e.jsx(l,{id:"left-adornment",label:"Left adornment",...v,leftAdornment:t}),e.jsx(l,{id:"right-adornment",label:"Right adornment",...v,rightAdornment:y}),e.jsx(l,{id:"adornment",label:"Both adornment",...v,leftAdornment:t,rightAdornment:y})]}),parameters:{chromatic:{disableSnapshot:!0}}},f={render:({...t})=>e.jsxs("div",{className:a("flex","flex-col","border-box","w-fit","p-s"),children:[e.jsx(l,{label:"Phone number",defaultValue:"737 00 00 00",...t,leftAffix:e.jsx(i,{children:e.jsx(s,{variant:"quiet",size:"small",label:"+46",asDropdown:!0})})}),e.jsx(l,{label:"Licence key",defaultValue:"ABC-123-DEF-456",...t,rightAffix:e.jsx(i,{children:e.jsx(o,{variant:"quiet",size:"small",label:"Copy the key",icon:e.jsx(u,{width:void 0,height:void 0})})})}),e.jsx(l,{label:"Value",defaultValue:"140",...t,rightAffix:e.jsxs("div",{className:a("flex","gap-s","flex-row"),children:[e.jsx(i,{children:e.jsx(o,{variant:"quiet",size:"small",label:"Decrement",icon:e.jsx(A,{width:void 0,height:void 0})})}),e.jsx(i,{children:e.jsx(o,{variant:"quiet",size:"small",label:"Increment",icon:e.jsx(b,{width:void 0,height:void 0})})})]})}),e.jsx("h2",{className:a("font-heading-m","text-default"),children:"Previous deprecated Design"}),e.jsx(d,{label:"Left me",htmlFor:"left-affix",children:e.jsxs(n,{fullWidth:!0,children:[e.jsx(s,{label:"Left",onClick:r()}),e.jsx(l,{id:"left-affix",...t})]})}),e.jsx(d,{label:"Right me",htmlFor:"right-affix",children:e.jsxs(n,{fullWidth:!0,children:[e.jsx(l,{id:"right-affix",...t}),e.jsx(s,{label:"Right",onClick:r()})]})}),e.jsx(d,{label:"Affix",htmlFor:"affix",children:e.jsxs(n,{fullWidth:!0,children:[e.jsx(s,{label:"Left",onClick:r()}),e.jsx(l,{id:"affix",...t}),e.jsx(s,{label:"Right",onClick:r()})]})})]}),args:{},argTypes:g,parameters:{chromatic:{disableSnapshot:!0}}},p={render:t=>e.jsx("div",{className:a("flex","flex-row","border-box","w-fit","p-s"),children:e.jsx(l,{type:"search",...t})}),args:{label:"Search"},argTypes:{},parameters:{chromatic:{disableSnapshot:!0}}},E={label:"Right",onClick:()=>{},disabled:!1,icon:e.jsx(b,{width:void 0,height:void 0})},D={label:"Left",onClick:()=>{},disabled:!1,icon:e.jsx(b,{width:void 0,height:void 0})},h={render:()=>e.jsxs("div",{className:a("flex","flex-col","border-box","w-fit","p-s"),style:{inlineSize:600},children:[e.jsx("h2",{className:a("font-heading-m","text-default"),children:"States"}),e.jsxs("div",{className:a("flex","flex-row","gap-m","w-full"),children:[e.jsxs("div",{className:a("flex","flex-col","border-box","w-fit","p-s","gap-l"),children:[e.jsx(l,{label:"Default",helpText:"help me",placeholder:"Give me a value"}),e.jsx(l,{label:"Hover",helpText:"help me",placeholder:"Give me a value","data-testid":"hover"}),e.jsx(l,{label:"Focus",placeholder:"Focus","data-testid":"focus"}),e.jsx(l,{label:"Disabled",placeholder:"Disabled Input",disabled:!0}),e.jsx(l,{label:"Readonly",placeholder:"Readonly Input",readOnly:!0}),e.jsx(l,{label:"Really long value should ellipsis",helpText:"help me",value:"Est anim exercitation veniam exercitation officia ad anim sit et est. Aliquip commodo anim ad laboris magna velit qui enim reprehenderit cillum."}),e.jsx(l,{label:"Error",placeholder:"Input in error with message",errorMessages:j,helpText:"help me"}),e.jsx(l,{label:"Error",placeholder:"Input in error",hasError:!0}),e.jsx(l,{id:"input-counter",label:"Counter",placeholder:"With max character count",value:"",maxCharacterCount:20}),e.jsx(l,{id:"input-counter-error",label:"Counter above limit",placeholder:"Input in error with message",maxCharacterCount:20,helpText:N,value:"Character count above max limit"}),e.jsx(l,{id:"input-counter-error-message",label:"Counter and Error",placeholder:"Input in error with message and max character counter",maxCharacterCount:120,value:"",errorMessages:F})]}),e.jsxs("div",{className:a("flex","flex-col","border-box","w-fit","p-s","gap-l"),children:[e.jsx(l,{designSize:"small",label:"Default",helpText:"help me",placeholder:"Give me a value"}),e.jsx(l,{designSize:"small",label:"Hover",helpText:"help me",placeholder:"Give me a value","data-testid":"hover"}),e.jsx(l,{designSize:"small",label:"Focus",placeholder:"Focus","data-testid":"focus"}),e.jsx(l,{designSize:"small",label:"Disabled",placeholder:"Disabled Input",disabled:!0}),e.jsx(l,{designSize:"small",label:"Readonly",placeholder:"Readonly Input",readOnly:!0}),e.jsx(l,{designSize:"small",label:"Really long placeholder should ellipsis",helpText:"help me",placeholder:"Est anim exercitation veniam exercitation officia ad anim sit et est. Aliquip commodo anim ad laboris magna velit qui enim reprehenderit cillum."}),e.jsx(l,{designSize:"small",label:"Error",placeholder:"Input in error with message",errorMessages:j}),e.jsx(l,{designSize:"small",label:"Error",placeholder:"Input in error",hasError:!0}),e.jsx(l,{designSize:"small",id:"input-counter",label:"Counter",value:"",placeholder:"With max character count",maxCharacterCount:20}),e.jsx(l,{designSize:"small",id:"input-counter-error",label:"Counter above limit",placeholder:"Input in error with message",maxCharacterCount:20,helpText:N,value:"Character count above max limit"}),e.jsx(l,{designSize:"small",id:"input-counter-error-message",label:"Counter and Error",placeholder:"Input in error with message and max character counter",maxCharacterCount:120,value:"",errorMessages:F})]})]}),e.jsx("h2",{className:a("font-heading-m","text-default"),children:"Adornment"}),e.jsxs("div",{className:a("flex","flex-row","gap-m","w-full"),children:[e.jsx("div",{className:a("flex","flex-row","border-box","w-fit","p-s"),children:e.jsxs("div",{className:a("flex","flex-col","border-box","w-fit","p-s"),children:[e.jsx(l,{id:"left-adornment",label:"Left adornment",leftAdornment:"left"}),e.jsx(l,{id:"right-adornment",label:"Right adornment",rightAdornment:"right"}),e.jsx(l,{id:"adornment",label:"Both adornment",leftAdornment:"left",rightAdornment:"right"})]})}),e.jsx("div",{className:a("flex","flex-row","border-box","w-fit","p-s"),children:e.jsxs("div",{className:a("flex","flex-col","border-box","w-fit","p-s"),children:[e.jsx(l,{designSize:"small",id:"small-left-adornment",label:"Left adornment",leftAdornment:"left"}),e.jsx(l,{designSize:"small",id:"small-right-adornment",label:"Right adornment",rightAdornment:"right"}),e.jsx(l,{designSize:"small",id:"small-adornment",label:"Both adornment",leftAdornment:"left",rightAdornment:"right"})]})})]}),e.jsxs("div",{className:a("flex","flex-row","gap-m","w-full"),children:[e.jsxs("div",{className:a("flex","flex-col","border-box","w-fit","p-s"),children:[e.jsx("h2",{className:a("font-heading-m","text-default"),children:"Affix"}),e.jsx(l,{label:"Phone number",defaultValue:"737 00 00 00",leftAffix:e.jsx(i,{children:e.jsx(s,{variant:"quiet",size:"small",label:"+46",asDropdown:!0})})}),e.jsx(l,{label:"Licence key",defaultValue:"ABC-123-DEF-456",rightAffix:e.jsx(i,{children:e.jsx(o,{variant:"quiet",size:"small",label:"Copy the key",icon:e.jsx(u,{width:void 0,height:void 0})})})}),e.jsx(l,{label:"Value",defaultValue:"140",rightAffix:e.jsxs("div",{className:a("flex","gap-s","flex-row"),children:[e.jsx(i,{children:e.jsx(o,{variant:"quiet",size:"small",label:"Decrement",icon:e.jsx(A,{width:void 0,height:void 0})})}),e.jsx(i,{children:e.jsx(o,{variant:"quiet",size:"small",label:"Increment",icon:e.jsx(b,{width:void 0,height:void 0})})})]})}),e.jsx(l,{id:"readonly-affixes",label:"Both affixes in readonly",readOnly:!0,leftAffix:e.jsx(T,{size:"s",text:"left"}),rightAffix:e.jsx(T,{size:"s",text:"right"})})]}),e.jsxs("div",{className:a("flex","flex-col","border-box","w-fit","p-s","gap-m"),children:[e.jsx("h2",{className:a("font-heading-m","text-default"),children:"Inline TextField: no label/helpText"}),e.jsx(l,{defaultValue:"value","aria-label":"label"}),e.jsx(l,{defaultValue:"with useField property","aria-label":"inline property",useField:!0})]})]}),e.jsx("h2",{className:a("font-heading-m","text-default"),children:"Depreacted ButtonGroup"}),e.jsx("div",{className:a("flex","flex-row","gap-m","w-full"),children:e.jsxs("div",{className:a("flex","flex-col","border-box","w-fit","p-s","gap-m"),children:[e.jsx(l,{label:"Affix",leftAffix:D,rightAffix:E}),e.jsx(d,{label:"Left me",htmlFor:"left-affix",children:e.jsxs(n,{fullWidth:!0,children:[e.jsx(s,{label:"Left",onClick:r()}),e.jsx(l,{id:"left-affix"})]})}),e.jsx(d,{label:"Right me",htmlFor:"right-affix",children:e.jsxs(n,{fullWidth:!0,children:[e.jsx(l,{id:"right-affix"}),e.jsx(s,{label:"Right",onClick:r()})]})}),e.jsx(d,{label:"Affix",htmlFor:"affix",children:e.jsxs(n,{fullWidth:!0,children:[e.jsx(s,{label:"Left",onClick:r()}),e.jsx(l,{id:"affix"}),e.jsx(s,{label:"Right",onClick:r()})]})})]})}),e.jsx("h2",{className:a("font-heading-m","text-default"),children:"Search"}),e.jsxs("div",{className:a("flex","flex-row","gap-m","w-full"),children:[e.jsxs("div",{className:a("flex","flex-col","border-box","w-fit","p-s","gap-m"),children:[e.jsx(l,{type:"search",label:"Search"}),e.jsx(l,{type:"search",label:"Search",value:"Search string"})]}),e.jsxs("div",{className:a("flex","flex-col","border-box","w-fit","p-s","gap-m"),children:[e.jsx(l,{designSize:"small",type:"search",label:"Search"}),e.jsx(l,{designSize:"small",type:"search",label:"Search",value:"Search string"})]})]}),e.jsx("h2",{className:a("font-heading-m","text-default"),children:"Input types"}),e.jsxs("div",{className:a("flex","flex-col","gap-m","w-m"),children:[e.jsxs("div",{className:a("flex","flex-row","border-box","gap-m"),children:[e.jsx(l,{label:"number",type:"number",leftAffix:e.jsx("span",{className:a("pl-s","flex","items-center","text-default"),children:e.jsx(S,{})})}),e.jsx(l,{label:"time",type:"time"})]}),e.jsxs("div",{className:a("flex","flex-row","border-box","gap-m"),children:[e.jsx(l,{label:"url",type:"url",leftAffix:e.jsx("span",{className:a("pl-s","flex","items-center","text-default"),children:e.jsx(C,{})})}),e.jsx(l,{label:"tel",type:"tel",leftAffix:e.jsx(i,{children:e.jsx(s,{variant:"quiet",size:"small",label:"+46",asDropdown:!0})})})]}),e.jsxs("div",{className:a("flex","flex-row","border-box","gap-m"),children:[e.jsx(l,{label:"email",type:"email",leftAffix:e.jsx("span",{className:a("pl-s","flex","items-center","text-default"),children:e.jsx(z,{})})}),e.jsx(l,{label:"date",type:"date"})]}),e.jsxs("div",{className:a("flex","flex-row","border-box","gap-m"),children:[e.jsx(l,{label:"month",type:"month"}),e.jsx(l,{label:"week",type:"week"})]}),e.jsxs("div",{className:a("flex","flex-row","border-box","gap-m"),children:[e.jsx(l,{label:"datetime-local",type:"datetime-local"}),e.jsx(l,{label:"password",type:"password",rightAffix:e.jsx(i,{children:e.jsx(s,{"aria-label":"Copy password",variant:"quiet",size:"small",icon:e.jsx(u,{height:"undefined"})})})})]})]}),e.jsxs("h2",{className:a("font-heading-m","text-default"),children:["Input types ",e.jsx("code",{children:'designSize="small"'})," doesn't support prefix and suffix"]}),e.jsxs("div",{className:a("flex","flex-col","gap-m","w-m"),children:[e.jsxs("div",{className:a("flex","flex-row","border-box","gap-m"),children:[e.jsx(l,{designSize:"small",label:"number",type:"number"}),e.jsx(l,{designSize:"small",label:"time",type:"time"})]}),e.jsxs("div",{className:a("flex","flex-row","border-box","gap-m"),children:[e.jsx(l,{designSize:"small",label:"url",type:"url"}),e.jsx(l,{designSize:"small",label:"tel",type:"tel"})]}),e.jsxs("div",{className:a("flex","flex-row","border-box","gap-m"),children:[e.jsx(l,{designSize:"small",label:"email",type:"email"}),e.jsx(l,{designSize:"small",label:"date",type:"date"})]}),e.jsxs("div",{className:a("flex","flex-row","border-box","gap-m"),children:[e.jsx(l,{designSize:"small",label:"month",type:"month"}),e.jsx(l,{designSize:"small",label:"week",type:"week"})]}),e.jsxs("div",{className:a("flex","flex-row","border-box","gap-m"),children:[e.jsx(l,{designSize:"small",label:"datetime-local",type:"datetime-local"}),e.jsx(l,{designSize:"small",label:"password",type:"password"})]})]})]}),parameters:{controls:{disable:!0},pseudo:{hover:'div:has(> div > div > [data-testid="hover"])',focus:'[data-testid="focus"]'}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (props: Partial<TextFieldProps>) => <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s")}>
      <TextField id="input1" label="Default" helpText="help me" placeholder="Give me a value" {...props} />
      <TextField id="input-hover" label="Hover" helpText="help me" placeholder="Give me a value" {...props} data-testid="hover" />
      <TextField id="input-focus" label="Focus" placeholder="Focus" {...props} data-testid="focus" />

      <TextField id="input-disabled" label="Disabled" placeholder="Disabled Input" disabled {...props} />
      <TextField id="input-readonly" label="Readonly" placeholder="Readonly Input" readOnly {...props} />
      <TextField id="input-error-message" label="Error" placeholder="Input in error with message" errorMessages={errorMessages} {...props} />
      <TextField id="input-error" label="Error" placeholder="Input in error" hasError {...props} />
      <TextField id="input-error" label="MaxCharacterCount" placeholder="Input has counter" maxCharacterCount={10} />
    </div>,
  args: {
    designSize: "default"
  },
  argTypes: TextFieldArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    pseudo: {
      hover: '[data-testid="hover"]',
      focus: 'div:has(> div > [data-testid="focus"])'
    }
  }
}`,...x.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (props: TextFieldProps) => <span className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s", "gap-s")}>
      <TextField {...props} />
    </span>,
  args: {
    label: "Label",
    id: "input",
    placeholder: "Placeholder",
    defaultValue: "Value",
    helpText: "help me",
    maxCharacterCount: 20
  },
  argTypes: TextFieldArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: ({
    leftAdornment = "Left",
    rightAdornment = "Right",
    ...props
  }: Partial<TextFieldProps>) => <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s", "gap-m")}>
      <TextField id="left-adornment" label="Left adornment" {...props} leftAdornment={leftAdornment} />
      <TextField id="right-adornment" label="Right adornment" {...props} rightAdornment={rightAdornment} />
      <TextField id="adornment" label="Both adornment" {...props} leftAdornment={leftAdornment} rightAdornment={rightAdornment} />
    </div>,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: ({
    ...props
  }: Partial<TextFieldProps>) => <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s")}>
      <TextField label="Phone number" defaultValue="737 00 00 00" {...props} leftAffix={<AffixWrapper>
            <Button variant="quiet" size="small" label="+46" asDropdown />
          </AffixWrapper>} />
      <TextField label="Licence key" defaultValue="ABC-123-DEF-456" {...props} rightAffix={<AffixWrapper>
            <IconButton variant="quiet" size="small" label="Copy the key" icon={<CopyIcon width={undefined} height={undefined} />} />
          </AffixWrapper>} />
      <TextField label="Value" defaultValue="140" {...props} rightAffix={<div className={classNames("flex", "gap-s", "flex-row")}>
            <AffixWrapper>
              <IconButton variant="quiet" size="small" label="Decrement" icon={<SubtractIcon width={undefined} height={undefined} />} />
            </AffixWrapper>
            <AffixWrapper>
              <IconButton variant="quiet" size="small" label="Increment" icon={<AddIcon width={undefined} height={undefined} />} />
            </AffixWrapper>
          </div>} />
      <h2 className={classNames("font-heading-m", "text-default")}>Previous deprecated Design</h2>
      <Field label="Left me" htmlFor="left-affix">
        <ButtonGroup fullWidth>
          <Button label="Left" onClick={fn()} />
          <TextField id="left-affix" {...props} />
        </ButtonGroup>
      </Field>
      <Field label="Right me" htmlFor="right-affix">
        <ButtonGroup fullWidth>
          <TextField id="right-affix" {...props} />
          <Button label="Right" onClick={fn()} />
        </ButtonGroup>
      </Field>
      <Field label="Affix" htmlFor="affix">
        <ButtonGroup fullWidth>
          <Button label="Left" onClick={fn()} />
          <TextField id="affix" {...props} />
          <Button label="Right" onClick={fn()} />
        </ButtonGroup>
      </Field>
    </div>,
  args: {},
  argTypes: TextFieldArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (props: TextFieldProps) => <div className={classNames("flex", "flex-row", "border-box", "w-fit", "p-s")}>
      <TextField type="search" {...props} />
    </div>,
  args: {
    label: "Search"
  },
  argTypes: {},
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s")} style={{
    inlineSize: 600
  }}>
      <h2 className={classNames("font-heading-m", "text-default")}>States</h2>
      <div className={classNames("flex", "flex-row", "gap-m", "w-full")}>
        <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s", "gap-l")}>
          <TextField label="Default" helpText="help me" placeholder="Give me a value" />
          <TextField label="Hover" helpText="help me" placeholder="Give me a value" data-testid="hover" />
          <TextField label="Focus" placeholder="Focus" data-testid="focus" />
          <TextField label="Disabled" placeholder="Disabled Input" disabled />
          <TextField label="Readonly" placeholder="Readonly Input" readOnly />
          <TextField label="Really long value should ellipsis" helpText="help me" value="Est anim exercitation veniam exercitation officia ad anim sit et est. Aliquip commodo anim ad laboris magna velit qui enim reprehenderit cillum." />
          <TextField label="Error" placeholder="Input in error with message" errorMessages={errorMessages} helpText="help me" />
          <TextField label="Error" placeholder="Input in error" hasError />
          <TextField id="input-counter" label="Counter" placeholder="With max character count" value="" maxCharacterCount={20} />
          <TextField id="input-counter-error" label="Counter above limit" placeholder="Input in error with message" maxCharacterCount={20} helpText={longHelpText} value="Character count above max limit" />
          <TextField id="input-counter-error-message" label="Counter and Error" placeholder="Input in error with message and max character counter" maxCharacterCount={120} value="" errorMessages={longErrorMessage} />
        </div>
        <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s", "gap-l")}>
          <TextField designSize="small" label="Default" helpText="help me" placeholder="Give me a value" />
          <TextField designSize="small" label="Hover" helpText="help me" placeholder="Give me a value" data-testid="hover" />
          <TextField designSize="small" label="Focus" placeholder="Focus" data-testid="focus" />
          <TextField designSize="small" label="Disabled" placeholder="Disabled Input" disabled />
          <TextField designSize="small" label="Readonly" placeholder="Readonly Input" readOnly />
          <TextField designSize="small" label="Really long placeholder should ellipsis" helpText="help me" placeholder="Est anim exercitation veniam exercitation officia ad anim sit et est. Aliquip commodo anim ad laboris magna velit qui enim reprehenderit cillum." />
          <TextField designSize="small" label="Error" placeholder="Input in error with message" errorMessages={errorMessages} />
          <TextField designSize="small" label="Error" placeholder="Input in error" hasError />
          <TextField designSize="small" id="input-counter" label="Counter" value="" placeholder="With max character count" maxCharacterCount={20} />
          <TextField designSize="small" id="input-counter-error" label="Counter above limit" placeholder="Input in error with message" maxCharacterCount={20} helpText={longHelpText} value="Character count above max limit" />
          <TextField designSize="small" id="input-counter-error-message" label="Counter and Error" placeholder="Input in error with message and max character counter" maxCharacterCount={120} value="" errorMessages={longErrorMessage} />
        </div>
      </div>
      <h2 className={classNames("font-heading-m", "text-default")}>Adornment</h2>
      <div className={classNames("flex", "flex-row", "gap-m", "w-full")}>
        <div className={classNames("flex", "flex-row", "border-box", "w-fit", "p-s")}>
          <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s")}>
            <TextField id="left-adornment" label="Left adornment" leftAdornment="left" />
            <TextField id="right-adornment" label="Right adornment" rightAdornment="right" />
            <TextField id="adornment" label="Both adornment" leftAdornment="left" rightAdornment="right" />
          </div>
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "w-fit", "p-s")}>
          <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s")}>
            <TextField designSize="small" id="small-left-adornment" label="Left adornment" leftAdornment="left" />
            <TextField designSize="small" id="small-right-adornment" label="Right adornment" rightAdornment="right" />
            <TextField designSize="small" id="small-adornment" label="Both adornment" leftAdornment="left" rightAdornment="right" />
          </div>
        </div>
      </div>
      <div className={classNames("flex", "flex-row", "gap-m", "w-full")}>
        <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s")}>
          <h2 className={classNames("font-heading-m", "text-default")}>Affix</h2>
          <TextField label="Phone number" defaultValue="737 00 00 00" leftAffix={<AffixWrapper>
                <Button variant="quiet" size="small" label="+46" asDropdown />
              </AffixWrapper>} />
          <TextField label="Licence key" defaultValue="ABC-123-DEF-456" rightAffix={<AffixWrapper>
                <IconButton variant="quiet" size="small" label="Copy the key" icon={<CopyIcon width={undefined} height={undefined} />} />
              </AffixWrapper>} />
          <TextField label="Value" defaultValue="140" rightAffix={<div className={classNames("flex", "gap-s", "flex-row")}>
                <AffixWrapper>
                  <IconButton variant="quiet" size="small" label="Decrement" icon={<SubtractIcon width={undefined} height={undefined} />} />
                </AffixWrapper>
                <AffixWrapper>
                  <IconButton variant="quiet" size="small" label="Increment" icon={<AddIcon width={undefined} height={undefined} />} />
                </AffixWrapper>
              </div>} />
          <TextField id="readonly-affixes" label="Both affixes in readonly" readOnly leftAffix={<Tag size="s" text="left" />} rightAffix={<Tag size="s" text="right" />} />
        </div>
        <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s", "gap-m")}>
          <h2 className={classNames("font-heading-m", "text-default")}>Inline TextField: no label/helpText</h2>
          <TextField defaultValue="value" aria-label="label" />
          <TextField defaultValue="with useField property" aria-label="inline property" useField />
        </div>
      </div>
      <h2 className={classNames("font-heading-m", "text-default")}>Depreacted ButtonGroup</h2>
      <div className={classNames("flex", "flex-row", "gap-m", "w-full")}>
        <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s", "gap-m")}>
          <TextField label="Affix" leftAffix={LEFT_AFFIX_DEPRECATED} rightAffix={RIGHT_AFFIX_DEPRECATED} />
          <Field label="Left me" htmlFor="left-affix">
            <ButtonGroup fullWidth>
              <Button label="Left" onClick={fn()} />
              <TextField id="left-affix" />
            </ButtonGroup>
          </Field>
          <Field label="Right me" htmlFor="right-affix">
            <ButtonGroup fullWidth>
              <TextField id="right-affix" />
              <Button label="Right" onClick={fn()} />
            </ButtonGroup>
          </Field>
          <Field label="Affix" htmlFor="affix">
            <ButtonGroup fullWidth>
              <Button label="Left" onClick={fn()} />
              <TextField id="affix" />
              <Button label="Right" onClick={fn()} />
            </ButtonGroup>
          </Field>
        </div>
      </div>

      <h2 className={classNames("font-heading-m", "text-default")}>Search</h2>
      <div className={classNames("flex", "flex-row", "gap-m", "w-full")}>
        <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s", "gap-m")}>
          <TextField type="search" label="Search" />
          <TextField type="search" label="Search" value="Search string" />
        </div>
        <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s", "gap-m")}>
          <TextField designSize="small" type="search" label="Search" />
          <TextField designSize="small" type="search" label="Search" value="Search string" />
        </div>
      </div>

      <h2 className={classNames("font-heading-m", "text-default")}>Input types</h2>
      <div className={classNames("flex", "flex-col", "gap-m", "w-m")}>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField label="number" type="number" leftAffix={<span className={classNames("pl-s", "flex", "items-center", "text-default")}>
                <NumericIcon />
              </span>} />
          <TextField label="time" type="time" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField label="url" type="url" leftAffix={<span className={classNames("pl-s", "flex", "items-center", "text-default")}>
                <LinkIcon />
              </span>} />
          <TextField label="tel" type="tel" leftAffix={<AffixWrapper>
                <Button variant="quiet" size="small" label="+46" asDropdown />
              </AffixWrapper>} />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField label="email" type="email" leftAffix={<span className={classNames("pl-s", "flex", "items-center", "text-default")}>
                <MailIcon />
              </span>} />
          <TextField label="date" type="date" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField label="month" type="month" />
          <TextField label="week" type="week" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField label="datetime-local" type="datetime-local" />
          <TextField label="password" type="password" rightAffix={<AffixWrapper>
                <Button aria-label="Copy password" variant="quiet" size="small" icon={<CopyIcon height="undefined" />} />
              </AffixWrapper>} />
        </div>
      </div>

      <h2 className={classNames("font-heading-m", "text-default")}>
        Input types <code>designSize=&quot;small&quot;</code> doesn&apos;t support prefix and suffix
      </h2>
      <div className={classNames("flex", "flex-col", "gap-m", "w-m")}>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField designSize="small" label="number" type="number" />
          <TextField designSize="small" label="time" type="time" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField designSize="small" label="url" type="url" />
          <TextField designSize="small" label="tel" type="tel" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField designSize="small" label="email" type="email" />
          <TextField designSize="small" label="date" type="date" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField designSize="small" label="month" type="month" />
          <TextField designSize="small" label="week" type="week" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField designSize="small" label="datetime-local" type="datetime-local" />
          <TextField designSize="small" label="password" type="password" />
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    },
    pseudo: {
      hover: 'div:has(> div > div > [data-testid="hover"])',
      focus: '[data-testid="focus"]'
    }
  }
}`,...h.parameters?.docs?.source}}};const W=["Overview","Playground","Adornment","Affix","Search","VisualTest"],U=Object.freeze(Object.defineProperty({__proto__:null,Adornment:m,Affix:f,Overview:x,Playground:c,Search:p,VisualTest:h,__namedExportsOrder:W,default:R},Symbol.toStringTag,{value:"Module"}));export{c as P,U as S,p as a};
