import{n as e}from"./chunk-DseTPa7n.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t as n}from"./ButtonGroup-Dl3ZPME2.js";import{D as r,Dt as i,Ht as a,J as o,K as s,M as c,Pt as l,dn as u,hn as d,ht as f,k as p,tn as m,w as h}from"./iframe-B5xoaqtW.js";import{n as g,t as _}from"./Field.argTypes-DCC5yWA1.js";var v=t(),y=(0,v.jsx)(p,{children:(0,v.jsx)(s,{variant:`quiet`,size:`small`,label:`Copy`,icon:(0,v.jsx)(m,{width:void 0,height:void 0})})}),b={...g,..._,value:{control:{type:`select`},options:[void 0,`simple value`,`very very long value that exceeds the width of the text field`],description:`The value of the text field in controlled mode.`},defaultValue:{control:{type:`text`},description:`The default value of the text field in uncontrolled mode.`},designSize:{control:{type:`select`},table:{type:{summary:`string`}},options:[`default`,`small`]},leftAdornment:{control:{type:`text`},table:{type:{summary:`string`}}},rightAdornment:{control:{type:`text`},table:{type:{summary:`string`}}},maxCharacterCount:{control:`number`,description:`Maximum number of characters allowed. When set, a character counter will be displayed. When the limit is exceeded, the TextField will show error icon and red outline. This property only works when the text field is in controlled mode.`,table:{type:{summary:`number`}}},type:{control:{type:`select`},options:[`text`,`search`],description:`Type "search" adds a search icon to the left of the text field.`,table:{defaultValue:{summary:`"text"`},type:{summary:`"text" | "search"`}}},leftAffix:{description:`Text fields can nest a prefix (leftAffix) component with custom content such as [IconButton](./?path=/docs/components-button--docs). This allows the textfield to have supporting actions associated with the field value. LeftAffix and rightAffix is not compatible with small (designSize) textfields.`,control:{type:`select`,labels:{first:`No left affix`,second:`IconButton`}},options:[`No left affix`,`IconButton`],mapping:{"No left affix":void 0,IconButton:y},table:{type:{summary:`ReactNode`}}},rightAffix:{description:`Text fields can nest a suffix (rightAffix) component with custom content such as [IconButton](./?path=/docs/components-button--docs). This allows the textfield to have supporting actions associated with the field value. LeftAffix and rightAffix is not compatible with small (designSize) textfields.`,control:{type:`select`,labels:{first:`No right affix`,second:`IconButton`}},options:[`No right affix`,`IconButton`],mapping:{"No right affix":void 0,IconButton:y},table:{type:{summary:`ReactNode`}}}},x=e({Adornment:()=>k,Affix:()=>A,Overview:()=>D,Playground:()=>O,Search:()=>j,VisualTest:()=>P,__namedExportsOrder:()=>F,default:()=>C}),{fn:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/TextField`,component:r,parameters:{},argTypes:b},w=[`Error message 1`],T=[`A very very very very very very very very long error message`],E=`A very very very very very very very very long help text`,D={render:e=>(0,v.jsxs)(`div`,{className:d(`flex`,`flex-col`,`border-box`,`w-fit`,`p-s`),children:[(0,v.jsx)(r,{id:`input1`,label:`Default`,helpText:`help me`,placeholder:`Give me a value`,...e}),(0,v.jsx)(r,{id:`input-hover`,label:`Hover`,helpText:`help me`,placeholder:`Give me a value`,...e,"data-testid":`hover`}),(0,v.jsx)(r,{id:`input-focus`,label:`Focus`,placeholder:`Focus`,...e,"data-testid":`focus`}),(0,v.jsx)(r,{id:`input-disabled`,label:`Disabled`,placeholder:`Disabled Input`,disabled:!0,...e}),(0,v.jsx)(r,{id:`input-readonly`,label:`Readonly`,placeholder:`Readonly Input`,readOnly:!0,...e}),(0,v.jsx)(r,{id:`input-error-message`,label:`Error`,placeholder:`Input in error with message`,errorMessages:w,...e}),(0,v.jsx)(r,{id:`input-error`,label:`Error`,placeholder:`Input in error`,hasError:!0,...e}),(0,v.jsx)(r,{id:`input-error`,label:`MaxCharacterCount`,placeholder:`Input has counter`,maxCharacterCount:10})]}),args:{designSize:`default`},argTypes:b,parameters:{chromatic:{disableSnapshot:!0},pseudo:{hover:`[data-testid="hover"]`,focus:`div:has(> div > [data-testid="focus"])`}}},O={render:e=>(0,v.jsx)(`span`,{className:d(`flex`,`flex-col`,`border-box`,`w-fit`,`p-s`,`gap-s`),children:(0,v.jsx)(r,{...e})}),args:{label:`Label`,id:`input`,placeholder:`Placeholder`,defaultValue:`Value`,helpText:`help me`,maxCharacterCount:20},argTypes:b,parameters:{chromatic:{disableSnapshot:!0}}},k={render:({leftAdornment:e=`Left`,rightAdornment:t=`Right`,...n})=>(0,v.jsxs)(`div`,{className:d(`flex`,`flex-col`,`border-box`,`w-fit`,`p-s`,`gap-m`),children:[(0,v.jsx)(r,{id:`left-adornment`,label:`Left adornment`,...n,leftAdornment:e}),(0,v.jsx)(r,{id:`right-adornment`,label:`Right adornment`,...n,rightAdornment:t}),(0,v.jsx)(r,{id:`adornment`,label:`Both adornment`,...n,leftAdornment:e,rightAdornment:t})]}),parameters:{chromatic:{disableSnapshot:!0}}},A={render:({...e})=>(0,v.jsxs)(`div`,{className:d(`flex`,`flex-col`,`border-box`,`w-fit`,`p-s`),children:[(0,v.jsx)(r,{label:`Phone number`,defaultValue:`737 00 00 00`,...e,leftAffix:(0,v.jsx)(p,{children:(0,v.jsx)(o,{variant:`quiet`,size:`small`,label:`+46`,asDropdown:!0})})}),(0,v.jsx)(r,{label:`Licence key`,defaultValue:`ABC-123-DEF-456`,...e,rightAffix:(0,v.jsx)(p,{children:(0,v.jsx)(s,{variant:`quiet`,size:`small`,label:`Copy the key`,icon:(0,v.jsx)(m,{width:void 0,height:void 0})})})}),(0,v.jsx)(r,{label:`Value`,defaultValue:`140`,...e,rightAffix:(0,v.jsxs)(`div`,{className:d(`flex`,`gap-s`,`flex-row`),children:[(0,v.jsx)(p,{children:(0,v.jsx)(s,{variant:`quiet`,size:`small`,label:`Decrement`,icon:(0,v.jsx)(f,{width:void 0,height:void 0})})}),(0,v.jsx)(p,{children:(0,v.jsx)(s,{variant:`quiet`,size:`small`,label:`Increment`,icon:(0,v.jsx)(u,{width:void 0,height:void 0})})})]})}),(0,v.jsx)(`h2`,{className:d(`font-heading-m`,`text-default`),children:`Previous deprecated Design`}),(0,v.jsx)(c,{label:`Left me`,htmlFor:`left-affix`,children:(0,v.jsxs)(n,{fullWidth:!0,children:[(0,v.jsx)(o,{label:`Left`,onClick:S()}),(0,v.jsx)(r,{id:`left-affix`,...e})]})}),(0,v.jsx)(c,{label:`Right me`,htmlFor:`right-affix`,children:(0,v.jsxs)(n,{fullWidth:!0,children:[(0,v.jsx)(r,{id:`right-affix`,...e}),(0,v.jsx)(o,{label:`Right`,onClick:S()})]})}),(0,v.jsx)(c,{label:`Affix`,htmlFor:`affix`,children:(0,v.jsxs)(n,{fullWidth:!0,children:[(0,v.jsx)(o,{label:`Left`,onClick:S()}),(0,v.jsx)(r,{id:`affix`,...e}),(0,v.jsx)(o,{label:`Right`,onClick:S()})]})})]}),args:{},argTypes:b,parameters:{chromatic:{disableSnapshot:!0}}},j={render:e=>(0,v.jsx)(`div`,{className:d(`flex`,`flex-row`,`border-box`,`w-fit`,`p-s`),children:(0,v.jsx)(r,{type:`search`,...e})}),args:{label:`Search`},argTypes:{},parameters:{chromatic:{disableSnapshot:!0}}},M={label:`Right`,onClick:()=>{},disabled:!1,icon:(0,v.jsx)(u,{width:void 0,height:void 0})},N={label:`Left`,onClick:()=>{},disabled:!1,icon:(0,v.jsx)(u,{width:void 0,height:void 0})},P={render:()=>(0,v.jsxs)(`div`,{className:d(`flex`,`flex-col`,`border-box`,`w-fit`,`p-s`),style:{inlineSize:600},children:[(0,v.jsx)(`h2`,{className:d(`font-heading-m`,`text-default`),children:`States`}),(0,v.jsxs)(`div`,{className:d(`flex`,`flex-row`,`gap-m`,`w-full`),children:[(0,v.jsxs)(`div`,{className:d(`flex`,`flex-col`,`border-box`,`w-fit`,`p-s`,`gap-l`),children:[(0,v.jsx)(r,{label:`Default`,helpText:`help me`,placeholder:`Give me a value`}),(0,v.jsx)(r,{label:`Hover`,helpText:`help me`,placeholder:`Give me a value`,"data-testid":`hover`}),(0,v.jsx)(r,{label:`Focus`,placeholder:`Focus`,"data-testid":`focus`}),(0,v.jsx)(r,{label:`Disabled`,placeholder:`Disabled Input`,disabled:!0}),(0,v.jsx)(r,{label:`Readonly`,placeholder:`Readonly Input`,readOnly:!0}),(0,v.jsx)(r,{label:`Really long value should ellipsis`,helpText:`help me`,value:`Est anim exercitation veniam exercitation officia ad anim sit et est. Aliquip commodo anim ad laboris magna velit qui enim reprehenderit cillum.`}),(0,v.jsx)(r,{label:`Error`,placeholder:`Input in error with message`,errorMessages:w,helpText:`help me`}),(0,v.jsx)(r,{label:`Error`,placeholder:`Input in error`,hasError:!0}),(0,v.jsx)(r,{id:`input-counter`,label:`Counter`,placeholder:`With max character count`,value:``,maxCharacterCount:20}),(0,v.jsx)(r,{id:`input-counter-error`,label:`Counter above limit`,placeholder:`Input in error with message`,maxCharacterCount:20,helpText:E,value:`Character count above max limit`}),(0,v.jsx)(r,{id:`input-counter-error-message`,label:`Counter and Error`,placeholder:`Input in error with message and max character counter`,maxCharacterCount:120,value:``,errorMessages:T})]}),(0,v.jsxs)(`div`,{className:d(`flex`,`flex-col`,`border-box`,`w-fit`,`p-s`,`gap-l`),children:[(0,v.jsx)(r,{designSize:`small`,label:`Default`,helpText:`help me`,placeholder:`Give me a value`}),(0,v.jsx)(r,{designSize:`small`,label:`Hover`,helpText:`help me`,placeholder:`Give me a value`,"data-testid":`hover`}),(0,v.jsx)(r,{designSize:`small`,label:`Focus`,placeholder:`Focus`,"data-testid":`focus`}),(0,v.jsx)(r,{designSize:`small`,label:`Disabled`,placeholder:`Disabled Input`,disabled:!0}),(0,v.jsx)(r,{designSize:`small`,label:`Readonly`,placeholder:`Readonly Input`,readOnly:!0}),(0,v.jsx)(r,{designSize:`small`,label:`Really long placeholder should ellipsis`,helpText:`help me`,placeholder:`Est anim exercitation veniam exercitation officia ad anim sit et est. Aliquip commodo anim ad laboris magna velit qui enim reprehenderit cillum.`}),(0,v.jsx)(r,{designSize:`small`,label:`Error`,placeholder:`Input in error with message`,errorMessages:w}),(0,v.jsx)(r,{designSize:`small`,label:`Error`,placeholder:`Input in error`,hasError:!0}),(0,v.jsx)(r,{designSize:`small`,id:`input-counter`,label:`Counter`,value:``,placeholder:`With max character count`,maxCharacterCount:20}),(0,v.jsx)(r,{designSize:`small`,id:`input-counter-error`,label:`Counter above limit`,placeholder:`Input in error with message`,maxCharacterCount:20,helpText:E,value:`Character count above max limit`}),(0,v.jsx)(r,{designSize:`small`,id:`input-counter-error-message`,label:`Counter and Error`,placeholder:`Input in error with message and max character counter`,maxCharacterCount:120,value:``,errorMessages:T})]})]}),(0,v.jsx)(`h2`,{className:d(`font-heading-m`,`text-default`),children:`Adornment`}),(0,v.jsxs)(`div`,{className:d(`flex`,`flex-row`,`gap-m`,`w-full`),children:[(0,v.jsx)(`div`,{className:d(`flex`,`flex-row`,`border-box`,`w-fit`,`p-s`),children:(0,v.jsxs)(`div`,{className:d(`flex`,`flex-col`,`border-box`,`w-fit`,`p-s`),children:[(0,v.jsx)(r,{id:`left-adornment`,label:`Left adornment`,leftAdornment:`left`}),(0,v.jsx)(r,{id:`right-adornment`,label:`Right adornment`,rightAdornment:`right`}),(0,v.jsx)(r,{id:`adornment`,label:`Both adornment`,leftAdornment:`left`,rightAdornment:`right`})]})}),(0,v.jsx)(`div`,{className:d(`flex`,`flex-row`,`border-box`,`w-fit`,`p-s`),children:(0,v.jsxs)(`div`,{className:d(`flex`,`flex-col`,`border-box`,`w-fit`,`p-s`),children:[(0,v.jsx)(r,{designSize:`small`,id:`small-left-adornment`,label:`Left adornment`,leftAdornment:`left`}),(0,v.jsx)(r,{designSize:`small`,id:`small-right-adornment`,label:`Right adornment`,rightAdornment:`right`}),(0,v.jsx)(r,{designSize:`small`,id:`small-adornment`,label:`Both adornment`,leftAdornment:`left`,rightAdornment:`right`})]})})]}),(0,v.jsxs)(`div`,{className:d(`flex`,`flex-row`,`gap-m`,`w-full`),children:[(0,v.jsxs)(`div`,{className:d(`flex`,`flex-col`,`border-box`,`w-fit`,`p-s`),children:[(0,v.jsx)(`h2`,{className:d(`font-heading-m`,`text-default`),children:`Affix`}),(0,v.jsx)(r,{label:`Phone number`,defaultValue:`737 00 00 00`,leftAffix:(0,v.jsx)(p,{children:(0,v.jsx)(o,{variant:`quiet`,size:`small`,label:`+46`,asDropdown:!0})})}),(0,v.jsx)(r,{label:`Licence key`,defaultValue:`ABC-123-DEF-456`,rightAffix:(0,v.jsx)(p,{children:(0,v.jsx)(s,{variant:`quiet`,size:`small`,label:`Copy the key`,icon:(0,v.jsx)(m,{width:void 0,height:void 0})})})}),(0,v.jsx)(r,{label:`Value`,defaultValue:`140`,rightAffix:(0,v.jsxs)(`div`,{className:d(`flex`,`gap-s`,`flex-row`),children:[(0,v.jsx)(p,{children:(0,v.jsx)(s,{variant:`quiet`,size:`small`,label:`Decrement`,icon:(0,v.jsx)(f,{width:void 0,height:void 0})})}),(0,v.jsx)(p,{children:(0,v.jsx)(s,{variant:`quiet`,size:`small`,label:`Increment`,icon:(0,v.jsx)(u,{width:void 0,height:void 0})})})]})}),(0,v.jsx)(r,{id:`readonly-affixes`,label:`Both affixes in readonly`,readOnly:!0,leftAffix:(0,v.jsx)(h,{size:`s`,text:`left`}),rightAffix:(0,v.jsx)(h,{size:`s`,text:`right`})})]}),(0,v.jsxs)(`div`,{className:d(`flex`,`flex-col`,`border-box`,`w-fit`,`p-s`,`gap-m`),children:[(0,v.jsx)(`h2`,{className:d(`font-heading-m`,`text-default`),children:`Inline TextField: no label/helpText`}),(0,v.jsx)(r,{defaultValue:`value`,"aria-label":`label`}),(0,v.jsx)(r,{defaultValue:`with useField property`,"aria-label":`inline property`,useField:!0})]})]}),(0,v.jsx)(`h2`,{className:d(`font-heading-m`,`text-default`),children:`Depreacted ButtonGroup`}),(0,v.jsx)(`div`,{className:d(`flex`,`flex-row`,`gap-m`,`w-full`),children:(0,v.jsxs)(`div`,{className:d(`flex`,`flex-col`,`border-box`,`w-fit`,`p-s`,`gap-m`),children:[(0,v.jsx)(r,{label:`Affix`,leftAffix:N,rightAffix:M}),(0,v.jsx)(c,{label:`Left me`,htmlFor:`left-affix`,children:(0,v.jsxs)(n,{fullWidth:!0,children:[(0,v.jsx)(o,{label:`Left`,onClick:S()}),(0,v.jsx)(r,{id:`left-affix`})]})}),(0,v.jsx)(c,{label:`Right me`,htmlFor:`right-affix`,children:(0,v.jsxs)(n,{fullWidth:!0,children:[(0,v.jsx)(r,{id:`right-affix`}),(0,v.jsx)(o,{label:`Right`,onClick:S()})]})}),(0,v.jsx)(c,{label:`Affix`,htmlFor:`affix`,children:(0,v.jsxs)(n,{fullWidth:!0,children:[(0,v.jsx)(o,{label:`Left`,onClick:S()}),(0,v.jsx)(r,{id:`affix`}),(0,v.jsx)(o,{label:`Right`,onClick:S()})]})})]})}),(0,v.jsx)(`h2`,{className:d(`font-heading-m`,`text-default`),children:`Search`}),(0,v.jsxs)(`div`,{className:d(`flex`,`flex-row`,`gap-m`,`w-full`),children:[(0,v.jsxs)(`div`,{className:d(`flex`,`flex-col`,`border-box`,`w-fit`,`p-s`,`gap-m`),children:[(0,v.jsx)(r,{type:`search`,label:`Search`}),(0,v.jsx)(r,{type:`search`,label:`Search`,value:`Search string`})]}),(0,v.jsxs)(`div`,{className:d(`flex`,`flex-col`,`border-box`,`w-fit`,`p-s`,`gap-m`),children:[(0,v.jsx)(r,{designSize:`small`,type:`search`,label:`Search`}),(0,v.jsx)(r,{designSize:`small`,type:`search`,label:`Search`,value:`Search string`})]})]}),(0,v.jsx)(`h2`,{className:d(`font-heading-m`,`text-default`),children:`Input types`}),(0,v.jsxs)(`div`,{className:d(`flex`,`flex-col`,`gap-m`,`w-m`),children:[(0,v.jsxs)(`div`,{className:d(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,v.jsx)(r,{label:`number`,type:`number`,leftAffix:(0,v.jsx)(`span`,{className:d(`pl-s`,`flex`,`items-center`,`text-default`),children:(0,v.jsx)(i,{})})}),(0,v.jsx)(r,{label:`time`,type:`time`})]}),(0,v.jsxs)(`div`,{className:d(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,v.jsx)(r,{label:`url`,type:`url`,leftAffix:(0,v.jsx)(`span`,{className:d(`pl-s`,`flex`,`items-center`,`text-default`),children:(0,v.jsx)(a,{})})}),(0,v.jsx)(r,{label:`tel`,type:`tel`,leftAffix:(0,v.jsx)(p,{children:(0,v.jsx)(o,{variant:`quiet`,size:`small`,label:`+46`,asDropdown:!0})})})]}),(0,v.jsxs)(`div`,{className:d(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,v.jsx)(r,{label:`email`,type:`email`,leftAffix:(0,v.jsx)(`span`,{className:d(`pl-s`,`flex`,`items-center`,`text-default`),children:(0,v.jsx)(l,{})})}),(0,v.jsx)(r,{label:`date`,type:`date`})]}),(0,v.jsxs)(`div`,{className:d(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,v.jsx)(r,{label:`month`,type:`month`}),(0,v.jsx)(r,{label:`week`,type:`week`})]}),(0,v.jsxs)(`div`,{className:d(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,v.jsx)(r,{label:`datetime-local`,type:`datetime-local`}),(0,v.jsx)(r,{label:`password`,type:`password`,rightAffix:(0,v.jsx)(p,{children:(0,v.jsx)(o,{"aria-label":`Copy password`,variant:`quiet`,size:`small`,icon:(0,v.jsx)(m,{height:`undefined`})})})})]})]}),(0,v.jsxs)(`h2`,{className:d(`font-heading-m`,`text-default`),children:[`Input types `,(0,v.jsx)(`code`,{children:`designSize="small"`}),` doesn't support prefix and suffix`]}),(0,v.jsxs)(`div`,{className:d(`flex`,`flex-col`,`gap-m`,`w-m`),children:[(0,v.jsxs)(`div`,{className:d(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,v.jsx)(r,{designSize:`small`,label:`number`,type:`number`}),(0,v.jsx)(r,{designSize:`small`,label:`time`,type:`time`})]}),(0,v.jsxs)(`div`,{className:d(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,v.jsx)(r,{designSize:`small`,label:`url`,type:`url`}),(0,v.jsx)(r,{designSize:`small`,label:`tel`,type:`tel`})]}),(0,v.jsxs)(`div`,{className:d(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,v.jsx)(r,{designSize:`small`,label:`email`,type:`email`}),(0,v.jsx)(r,{designSize:`small`,label:`date`,type:`date`})]}),(0,v.jsxs)(`div`,{className:d(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,v.jsx)(r,{designSize:`small`,label:`month`,type:`month`}),(0,v.jsx)(r,{designSize:`small`,label:`week`,type:`week`})]}),(0,v.jsxs)(`div`,{className:d(`flex`,`flex-row`,`border-box`,`gap-m`),children:[(0,v.jsx)(r,{designSize:`small`,label:`datetime-local`,type:`datetime-local`}),(0,v.jsx)(r,{designSize:`small`,label:`password`,type:`password`})]})]})]}),parameters:{controls:{disable:!0},pseudo:{hover:`div:has(> div > div > [data-testid="hover"])`,focus:`[data-testid="focus"]`}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
      <h2 className={classNames("font-heading-m", "text-default")}>
        Previous deprecated Design
      </h2>
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
      <h2 className={classNames("font-heading-m", "text-default")}>
        Adornment
      </h2>
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
          <h2 className={classNames("font-heading-m", "text-default")}>
            Affix
          </h2>
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
          <h2 className={classNames("font-heading-m", "text-default")}>
            Inline TextField: no label/helpText
          </h2>
          <TextField defaultValue="value" aria-label="label" />
          <TextField defaultValue="with useField property" aria-label="inline property" useField />
        </div>
      </div>
      <h2 className={classNames("font-heading-m", "text-default")}>
        Depreacted ButtonGroup
      </h2>
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

      <h2 className={classNames("font-heading-m", "text-default")}>
        Input types
      </h2>
      <div className={classNames("flex", "flex-col", "gap-m", "w-m")}>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField label="number" type="number" leftAffix={<span className={classNames("pl-s", "flex", "items-center", "text-default")}>
                <NumericIcon />
              </span>} />
          <TextField label="time" type="time" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField label="url" type="url" leftAffix={<span className={classNames("pl-s", "flex", "items-center", "text-default")}>
                <GlobeIcon />
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
        Input types <code>designSize=&quot;small&quot;</code> doesn&apos;t
        support prefix and suffix
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
}`,...P.parameters?.docs?.source}}};var F=[`Overview`,`Playground`,`Adornment`,`Affix`,`Search`,`VisualTest`];export{k as Adornment,A as Affix,D as Overview,O as Playground,j as Search,P as VisualTest,F as __namedExportsOrder,C as default,x as t};