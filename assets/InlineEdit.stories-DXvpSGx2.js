import{i as e,n as t}from"./chunk-DseTPa7n.js";import{t as n}from"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as r}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t as i}from"./Switch-ETFfKQLW.js";import{Ut as a,b as o,hn as s,y as c}from"./iframe-DaKWDHAC.js";import{t as l}from"./SelectTest-BFpwn8np.js";import{t as u}from"./lib-BpZznhwW.js";var d=e(n()),f={showEditIcon:{control:{type:`boolean`},description:`Displays an edit icon next to the value.`,table:{type:{summary:`boolean`}}},showFormButtons:{control:{type:`boolean`},description:`Displays form buttons (save/cancel) when editing as an overlay to the edit view.`,table:{type:{summary:`boolean`}}},onSave:{control:!1,description:`function called when the user validate the action`,table:{type:{summary:`() => void`}}},onCancel:{control:!1,description:`function called when the user cancel the action`,table:{type:{summary:`() => void`}}},showEditButton:{table:{disable:!0}},blurAction:{control:{type:`select`},options:[`cancel`,`save`],description:`Action to perform when the input loses focus.`,table:{type:{summary:`"cancel" | "save"`}}},isEditing:{control:{type:`select`},options:[void 0,!0,!1],description:`Controls whether the component is in editing mode.`,table:{type:{summary:`boolean`}}},isEditingDefault:{control:{type:`select`},options:[void 0,!0,!1],description:`Initial state of the component when it is first rendered.`,table:{type:{summary:`boolean`}}},onEdit:{control:!1,description:`Function called when the user clicks on the edit icon.`,table:{type:{summary:`(isEditing: boolean) => void`}}},errorMessages:{control:{type:`object`},description:`Array of error messages to display when the input has errors.`,table:{type:{summary:`string[]`}}},placeholder:{control:{type:`text`},description:`Placeholder text for the multi-select input.`,table:{type:{summary:`string`}}},hasError:{control:{type:`boolean`},description:`Indicates whether the multi-select has an error state.`,table:{type:{summary:`boolean`}}}},p={view:{control:!1,description:`Custom view component to render the value in view mode.`,table:{type:{summary:`JSX.Element | (() => JSX.Element)`}}},edit:{control:!1,description:`Custom edit component to render the value in edit mode.`,table:{type:{summary:`JSX.Element | (() => JSX.Element)`}}},editFocusSelector:{control:{type:`text`},description:`CSS selector to focus the edit component when it is opened.`,table:{type:{summary:`string`},defaultValue:{summary:`a[href], button:not(:disabled), input:not(:disabled), textarea:not(:disabled), select:not(:disabled), [tabindex]:not([tabindex="-1"])`}}},editOffsetX:{control:{type:`number`},description:`Horizontal offset for the edit component.`,table:{type:{summary:`number`}}}},m={value:{control:{type:`text`},description:`Current value of the text field in Controlled mode.`,table:{type:{summary:`string`}}},defaultValue:{control:{type:`text`},description:`Initial value of the text field in Uncontrolled mode.`,table:{type:{summary:`string`}}},onChange:{control:!1,description:`Function called when the input value changes.`,table:{type:{summary:`(value: string) => void`}}},font:{control:{type:`select`},options:[`label_xl`,`label_l`,`label_m`,`label_s`,`label_xs`],description:`Sets the font style for the text field.`,table:{type:{summary:`"label_xl" | "label_l" | "label_m" | "label_s" | "label_xs"`},defaultValue:{summary:`label_s`}}}},h={children:{control:`object`,description:`Options to display in the select dropdown.`},defaultValue:{control:{type:`select`},options:[`red`,`blue`,`green`,`yellow`,`purple`,`orange`],description:`Initial value of the select in Uncontrolled mode.`,table:{type:{summary:`string`}}},value:{control:{type:`select`},options:[`red`,`blue`,`green`,`yellow`,`purple`,`orange`],description:`Current value of the select in Controlled mode.`,table:{type:{summary:`string`}}},onChange:{control:!1,description:`Function called when the selected option changes.`,table:{type:{summary:`(value: string, reason?: ChangeReasons | 'cancel') => void`}}}},g={children:{control:!1,description:`Options to display in the multi-select dropdown.`,table:{type:{summary:`ReactNode`}}},defaultValue:{control:{type:`multi-select`},options:[`red`,`blue`,`green`,`yellow`,`purple`,`orange`]},value:{control:{type:`multi-select`},options:[`red`,`blue`,`green`,`yellow`,`purple`,`orange`]},onChange:{control:!1,description:`Function called when the selected options change.`,table:{type:{summary:`(value: string[], reason?: ChangeReasons | 'cancel') => void`}}}},_=t({CustomInlineEdit:()=>k,InlineEditTable:()=>I,MultiSelect:()=>T,SelectDemo:()=>w,TextField:()=>x,VisualTestMultiSelect:()=>O,VisualTestSelect:()=>D,VisualTestTextField:()=>E,__namedExportsOrder:()=>L,default:()=>b}),v=r(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/InlineEdit`},x={name:`TextField`,parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,v.jsx)(`div`,{className:s(`flex`,`border-box`,`p-xl`,`w-xs`),children:(0,v.jsx)(c.TextField,{...e})}),args:{defaultValue:`Edit me`,"aria-label":`Edit color`,onSave:y(),onCancel:y(),onChange:y()},argTypes:{...f,...m}},S=[`This is an error message`],C=[(0,v.jsx)(o.Option,{value:``,children:(0,v.jsx)(`div`,{className:s(`text-weak`),children:`empty`})},`empty`),(0,v.jsx)(o.Option,{value:`red`,children:`Red`},`red`),(0,v.jsx)(o.Option,{value:`default`,children:`Default`},`default`),(0,v.jsx)(o.Option,{value:`hovered`,children:`Hovered`},`hovered`),(0,v.jsx)(o.Option,{value:`focused`,children:`Focused`},`focused`),(0,v.jsx)(o.Option,{value:`editing`,children:`Editing`},`editing`),(0,v.jsx)(o.Option,{value:`hasError`,children:`Has Error`},`hasError`)],w={name:`Select`,args:{defaultValue:`red`},argTypes:{...f,...h},parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,v.jsx)(`div`,{className:s(`flex`,`border-box`,`p-xl`,`w-xs`),children:(0,v.jsx)(c.Select,{"aria-label":`Edit color`,...e,children:l})})},T={parameters:{chromatic:{disableSnapshot:!0}},argTypes:{...f,...g},args:{defaultValue:[`blue`,`red`]},render:e=>(0,v.jsx)(`div`,{className:s(`flex`,`border-box`,`p-xl`,`w-xs`),children:(0,v.jsx)(c.MultiSelect,{"aria-label":`Edit colors`,...e,children:l})})},E={parameters:{pseudo:{hover:[`[data-testid="hovered.view"]`],active:`[data-testid="actived.view"]`,focusVisible:`[data-testid="focused"] > [role="button"]`}},render:()=>(0,v.jsxs)(`div`,{className:s(`flex`,`border-box`,`flex-col`,`gap-3xl`),children:[(0,v.jsx)(`h2`,{className:s(`flex`,`border-box`,`font-heading-m`,`text-default`),children:`InlineEdit.TextField`}),(0,v.jsxs)(`div`,{className:s(`flex`,`border-box`,`flex-row`,`gap-xl`,`p-m`,`items-center`,`justify-start`,`w-fit`),children:[(0,v.jsx)(`div`,{className:s(`flex`,`border-box`,`w-fit`,`p-m`),children:(0,v.jsx)(c.TextField,{"aria-label":`Edit color`,defaultValue:``,placeholder:`placeholder`})}),(0,v.jsx)(`div`,{className:s(`flex`,`border-box`,`w-fit`,`p-m`),children:(0,v.jsx)(c.TextField,{"aria-label":`Edit color`,defaultValue:`default value`,showEditIcon:!0})}),(0,v.jsx)(`div`,{className:s(`flex`,`border-box`,`w-fit`,`p-m`),children:(0,v.jsx)(c.TextField,{"aria-label":`Edit color`,defaultValue:`Hover + showEditIcon`,showEditIcon:!0,"data-testid":`hovered`})}),(0,v.jsx)(`div`,{className:s(`flex`,`border-box`,`w-fit`,`p-m`),children:(0,v.jsx)(c.TextField,{"aria-label":`Edit color`,defaultValue:`Hover`,"data-testid":`hovered`})}),(0,v.jsx)(`div`,{className:s(`flex`,`border-box`,`w-fit`,`p-m`),children:(0,v.jsx)(c.TextField,{"aria-label":`Edit color`,defaultValue:`Focus`,"data-testid":`focused`})}),(0,v.jsx)(`div`,{className:s(`flex`,`border-box`,`p-m`),style:{inlineSize:`100px`},children:(0,v.jsx)(c.TextField,{"aria-label":`Edit color`,defaultValue:`Default with overflow`})})]}),(0,v.jsx)(`h2`,{className:s(`flex`,`border-box`,`font-heading-m`,`text-default`),children:`InlineEdit.TextField editMode`}),(0,v.jsxs)(`div`,{className:s(`flex`,`border-box`,`flex-row`,`gap-xl`,`p-m`,`items-center`,`justify-start`),style:{inlineSize:`500px`},children:[(0,v.jsx)(c.TextField,{"aria-label":`Edit color`,defaultValue:`Edit`,showEditIcon:!0,isEditingDefault:!0}),(0,v.jsx)(c.TextField,{"aria-label":`Edit color`,defaultValue:`Edit + showFormButtons`,showFormButtons:!0,isEditingDefault:!0})]}),(0,v.jsx)(`h2`,{className:s(`flex`,`border-box`,`font-heading-m`,`text-default`),children:`InlineEdit.TextField editMode vs view mode`}),(0,v.jsxs)(`div`,{className:s(`flex`,`border-box`,`flex-row`,`gap-xl`,`p-m`,`items-center`,`justify-start`),style:{inlineSize:`500px`},children:[(0,v.jsx)(c.TextField,{"aria-label":`Edit color`,defaultValue:`Should not     trim   spaces.   WYSIWYG`,isEditing:!0}),(0,v.jsx)(c.TextField,{"aria-label":`Edit color`,defaultValue:`Should not     trim   spaces.   WYSIWYG`})]}),(0,v.jsx)(`h2`,{className:s(`flex`,`border-box`,`font-heading-m`,`text-default`),children:`InlineEdit.TextField editMode + error`}),(0,v.jsxs)(`div`,{className:s(`flex`,`border-box`,`flex-row`,`gap-xl`,`p-m`,`items-start`,`justify-start`),style:{inlineSize:`1000px`,blockSize:`150px`},children:[(0,v.jsx)(`div`,{className:s(`flex`,`border-box`,`grow`,`shrink-0`),style:{flexBasis:1},children:(0,v.jsx)(c.TextField,{"aria-label":`Edit color`,defaultValue:`Edit + Error`,hasError:!0,isEditingDefault:!0})}),(0,v.jsx)(`div`,{className:s(`flex`,`border-box`,`grow`,`shrink-0`),style:{flexBasis:1},children:(0,v.jsx)(c.TextField,{"aria-label":`Edit color`,defaultValue:`Error + showFormButtons`,hasError:!0,showFormButtons:!0,isEditingDefault:!0})}),(0,v.jsx)(`div`,{className:s(`flex`,`border-box`,`grow`,`shrink-0`),style:{flexBasis:1},children:(0,v.jsx)(c.TextField,{"aria-label":`Edit color`,defaultValue:`Error + errorMessages`,hasError:!0,isEditingDefault:!0,errorMessages:S})}),(0,v.jsx)(`div`,{className:s(`flex`,`border-box`,`grow`,`shrink-0`),style:{flexBasis:1},children:(0,v.jsx)(c.TextField,{"aria-label":`Edit color`,defaultValue:`Error + errorMessages + showFormButtons`,hasError:!0,showFormButtons:!0,isEditingDefault:!0,errorMessages:S})})]}),(0,v.jsx)(`h2`,{className:s(`flex`,`border-box`,`font-heading-m`,`text-default`),children:`InlineEdit.TextField font`}),(0,v.jsxs)(`div`,{className:s(`flex`,`border-box`,`flex-row`,`gap-xl`,`p-m`,`items-center`,`justify-start`),children:[(0,v.jsx)(`div`,{className:s(`flex`,`border-box`,`w-fit`,`p-m`),children:(0,v.jsx)(c.TextField,{"aria-label":`Edit color`,defaultValue:`custom font heading_xl`,font:`heading_xl`,showEditIcon:!0})}),(0,v.jsx)(`div`,{className:s(`flex`,`border-box`,`w-fit`,`p-m`),children:(0,v.jsx)(c.TextField,{"aria-label":`Edit color`,defaultValue:`custom font script_s`,font:`script_s`,view:({children:e})=>(0,v.jsx)(`span`,{className:s(`text-end`,`font-script-s`,`text-inverse`,`bg-inverse`),children:e}),showEditIcon:!0})})]})]})},D={parameters:{pseudo:{hover:[`[data-testid="hovered.view"][role="button"]`,`[data-testid="focused"] [role="button"]`],active:`[data-testid="actived"]`,focusVisible:[`[data-testid="focused"] > role="button"`,`[data-testid="focused.edit"] [role="combobox"]`]}},render:()=>(0,v.jsxs)(`div`,{className:s(`flex`,`border-box`,`flex-col`,`gap-3xl`),children:[(0,v.jsx)(`h2`,{className:s(`flex`,`border-box`,`font-heading-m`,`text-default`),children:`InlineEdit.Select`}),(0,v.jsxs)(`div`,{className:s(`flex`,`border-box`,`flex-col`,`gap-xxl`),children:[(0,v.jsxs)(`div`,{className:s(`w-xxs`,`flex`,`flex-col`,`gap-xl`),children:[(0,v.jsx)(c.Select,{"aria-label":`Edit color`,defaultValue:`default`,showEditIcon:!0,children:C}),(0,v.jsx)(c.Select,{"aria-label":`Edit color`,defaultValue:`hovered`,showEditIcon:!0,"data-testid":`hovered`,children:C}),(0,v.jsx)(c.Select,{"aria-label":`Edit color`,defaultValue:`focused`,showEditIcon:!0,"data-testid":`focused`,children:C})]}),(0,v.jsxs)(`div`,{className:s(`w-l`,`flex`,`flex-row`,`gap-xxl`,`items-start`),style:{blockSize:`250px`},children:[(0,v.jsx)(c.Select,{"aria-label":`Edit color`,defaultValue:`editing`,showEditIcon:!0,isEditingDefault:!0,children:C}),(0,v.jsx)(c.Select,{"aria-label":`Edit color`,defaultValue:`hasError`,hasError:!0,isEditingDefault:!0,children:C}),(0,v.jsx)(c.Select,{"aria-label":`Edit color`,defaultValue:`focused`,showEditIcon:!0,"data-testid":`focused`,showFormButtons:!0,isEditingDefault:!0,children:C})]})]})]})},O={parameters:{pseudo:{hover:[`[data-testid="hovered"]`,`[data-testid="focused"] > button`],active:`[data-testid="actived"]`,focusVisible:`[data-testid="focused"] > button`}},render:()=>(0,v.jsxs)(`div`,{className:s(`flex`,`border-box`,`flex-col`,`gap-3xl`),children:[(0,v.jsx)(`h2`,{className:s(`flex`,`border-box`,`font-heading-m`,`text-default`),children:`InlineEdit.MultiSelect`}),(0,v.jsxs)(`div`,{className:s(`flex`,`border-box`,`flex-col`,`gap-xxl`,`items-start`),children:[(0,v.jsxs)(`div`,{className:s(`w-xxs`,`flex`,`gap-xl`),children:[(0,v.jsx)(c.MultiSelect,{"aria-label":`Edit colors`,defaultValue:[`default`],showEditIcon:!0,children:C}),(0,v.jsx)(c.MultiSelect,{"aria-label":`Edit colors`,defaultValue:[`hovered`],showEditIcon:!0,"data-testid":`hovered`,children:C}),(0,v.jsx)(c.MultiSelect,{"aria-label":`Edit colors`,defaultValue:[`focused`],showEditIcon:!0,"data-testid":`focused`,children:C})]}),(0,v.jsxs)(`div`,{className:s(`w-xl`,`flex`,`flex-row`,`gap-xxl`,`items-start`),style:{blockSize:`250px`},children:[(0,v.jsx)(c.MultiSelect,{"aria-label":`Edit colors`,defaultValue:[`editing`],showEditIcon:!0,isEditingDefault:!0,children:C}),(0,v.jsx)(c.MultiSelect,{"aria-label":`Edit colors`,defaultValue:[`hasError`],hasError:!0,isEditingDefault:!0,children:C}),(0,v.jsx)(c.MultiSelect,{"aria-label":`Edit colors`,defaultValue:[`editing`],showEditIcon:!0,showFormButtons:!0,isEditingDefault:!0,children:C})]})]})]})},k={render:e=>{let[t,n]=(0,d.useState)(!0),[r,o]=(0,d.useState)(!0);return(0,v.jsx)(`div`,{className:s(`flex`,`border-box`,`p-xl`,`w-xs`,`bg-weak`),children:(0,v.jsx)(c.Primitive,{onCancel:()=>{n(r)},onSave:()=>{o(t)},view:(0,v.jsxs)(`div`,{className:s(`flex`,`flex-row`,`gap-m`,`items-center`,`w-full`,`text-default`,`bg-default`),children:[(0,v.jsx)(a,{className:s(`fill-current`)}),(0,v.jsxs)(`div`,{className:s(`flex`,`flex-col`,`gap-m`),children:[(0,v.jsx)(`span`,{className:s(`font-label-m-emphasized`,`text-default`),children:t?`On`:`Off`}),(0,v.jsx)(`span`,{className:s(`font-label-s`,`text-weak`),children:`AI Features`})]})]}),edit:(0,v.jsx)(`div`,{className:s(`flex`,`flex-row`,`bg-default`,`gap-m`,`px-m`,`py-xl`,`items-center`),children:(0,v.jsx)(i,{checked:t,onChange:()=>{n(e=>!e)},label:`AI Features`})}),...e})})},args:{showFormButtons:!0,onSave:y()},argTypes:p},A={ADMIN:`Administrator with extended system permissions that allows managing users, settings, and content across the platform.`,EDITOR:`Editor`,USER:`User`,VIEWER:`Viewer`},j=[{uuid:`1`,firstName:`John`,lastName:`Doe`,bio:`Lorem ipsum dolor sit amet.`,role:A.ADMIN},{uuid:`2`,firstName:`Jane`,lastName:`Smith`,bio:`Consectetur adipiscing elit.`,role:A.EDITOR},{uuid:`3`,firstName:`Alice`,lastName:`Johnson`,bio:`Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,role:A.USER},{uuid:`4`,firstName:`Bob`,lastName:`Brown`,bio:`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,role:A.VIEWER},{uuid:`5`,firstName:`Charlie`,lastName:`Davis`,bio:`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur.`,role:A.USER},{uuid:`6`,firstName:`Eve`,lastName:`Wilson`,bio:`Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,role:A.ADMIN},{uuid:`7`,firstName:`Frank`,lastName:`Garcia`,bio:`Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin.`,role:A.USER},{uuid:`8`,firstName:`Grace`,lastName:`Martinez`,bio:`Integer in mauris eu nibh. Nullam mollis. Etiam vel erat sed augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi lacinia molestie dui.`,role:A.EDITOR},{uuid:`9`,firstName:`Hank`,lastName:`Lopez`,bio:`Praesent id justo in neque elementum ultrices. Fusce fermentum. Donec ut mauris eget massa tempor convallis. Nulla facilisi.`,role:A.VIEWER},{uuid:`10`,firstName:`Ivy`,lastName:`Hernandez`,bio:`Sed lectus. Integer euismod lacus luctus magna, non interdum quam sodales ut. Sed lectus. Integer euismod lacus luctus magna, non interdum quam sodales ut.`,role:A.USER}],M=[(0,v.jsx)(o.Option,{value:A.ADMIN,children:A.ADMIN},`admin`),(0,v.jsx)(o.Option,{value:A.EDITOR,children:A.EDITOR},`editor`),(0,v.jsx)(o.Option,{value:A.USER,children:A.USER},`user`),(0,v.jsx)(o.Option,{value:A.VIEWER,children:A.VIEWER},`viewer`)];function N({row:e,attr:t,label:n}){let r=(0,d.useContext)(P),[i,a]=(0,d.useState)(e[t]);return(0,d.useEffect)(()=>{a(e[t])},[e[t]]),(0,v.jsx)(`div`,{className:s(`px-s`,`w-full`,`h-full`,`whitespace-nowrap`,`overflow-hidden`),children:(0,v.jsx)(c.Select,{value:i,onChange:(n,r)=>{if(r===`cancel`){a(e[t]);return}a(n.target.value)},onSave:()=>{r.onRowChange({...e,[t]:i})},"aria-label":n,onSubmit:()=>{console.log(`submit`,i),r.onRowChange({...e,[t]:i})},children:M})})}var P=(0,d.createContext)({onRowChange:()=>{}});function F({row:e,attr:t,label:n}){let r=(0,d.useContext)(P),[i,a]=(0,d.useState)(e[t]);return(0,d.useEffect)(()=>{a(e[t])},[e[t]]),(0,v.jsx)(`div`,{className:s(`px-s`,`border-box`,`w-full`,`relative`),children:(0,v.jsx)(c.TextField,{value:i,onChange:(n,r)=>{if(r===`cancel`){a(e[t]);return}a(n.target.value)},onSave:()=>{r.onRowChange({...e,[t]:i})},"aria-label":n,onSubmit:()=>{console.log(`submit`,i),r.onRowChange({...e,[t]:i})}})})}var I={name:`InlineEdit in Table`,parameters:{chromatic:{disableSnapshot:!0}},render:e=>{let[t,n]=(0,d.useState)(j),r=(0,d.useCallback)(()=>e=>{n(t=>t.map(t=>t.uuid===e.uuid?{...t,...e}:t))},[t]);return(0,v.jsx)(P.Provider,{value:{onRowChange:r},children:(0,v.jsx)(`div`,{className:s(`w-full`,`p-xl`,`border-box`),style:{blockSize:300},children:(0,v.jsx)(u,{...e,rows:t,getRowId:e=>e.uuid})})})},args:{variant:`data`,columns:[{field:`firstName`,headerName:`First Name`,renderCell:({row:e,colDef:t})=>(0,v.jsx)(F,{row:e,attr:`firstName`,label:t.headerName})},{field:`lastName`,headerName:`Last Name`,renderCell:({row:e,colDef:t})=>(0,v.jsx)(F,{row:e,attr:`lastName`,label:t.headerName})},{field:`role`,headerName:`Role`,renderCell:({row:e,colDef:t})=>(0,v.jsx)(N,{row:e,attr:`role`,label:t.headerName})},{field:`bio`,headerName:`Bio`,flex:1,renderCell:({row:e,colDef:t})=>(0,v.jsx)(F,{row:e,attr:`bio`,label:t.headerName})}]}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "TextField",
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: props => {
    return <div className={classNames("flex", "border-box", "p-xl", "w-xs")}>
        <InlineEdit.TextField {...props} />
      </div>;
  },
  args: {
    defaultValue: "Edit me",
    "aria-label": "Edit color",
    onSave: fn(),
    onCancel: fn(),
    onChange: fn()
  },
  argTypes: {
    ...InlineEditArgTypes,
    ...InlineEditTextFieldArgTypes
  }
}`,...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Select",
  args: {
    defaultValue: "red"
  },
  argTypes: {
    ...InlineEditArgTypes,
    ...InlineEditSelectArgTypes
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: props => <div className={classNames("flex", "border-box", "p-xl", "w-xs")}>
      <InlineEdit.Select aria-label="Edit color" {...props}>
        {OPTIONS_WITH_GROUP}
      </InlineEdit.Select>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  argTypes: {
    ...InlineEditArgTypes,
    ...InlineEditMultiSelectArgTypes
  },
  args: {
    defaultValue: ["blue", "red"]
  },
  render: props => <div className={classNames("flex", "border-box", "p-xl", "w-xs")}>
      <InlineEdit.MultiSelect aria-label="Edit colors" {...props}>
        {OPTIONS_WITH_GROUP}
      </InlineEdit.MultiSelect>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: ['[data-testid="hovered.view"]'],
      active: '[data-testid="actived.view"]',
      focusVisible: '[data-testid="focused"] > [role="button"]'
    }
  },
  render: () => <div className={classNames("flex", "border-box", "flex-col", "gap-3xl")}>
      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>
        InlineEdit.TextField
      </h2>
      <div className={classNames("flex", "border-box", "flex-row", "gap-xl", "p-m", "items-center", "justify-start", "w-fit")}>
        <div className={classNames("flex", "border-box", "w-fit", "p-m")}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="" placeholder="placeholder" />
        </div>
        <div className={classNames("flex", "border-box", "w-fit", "p-m")}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="default value" showEditIcon />
        </div>
        <div className={classNames("flex", "border-box", "w-fit", "p-m")}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="Hover + showEditIcon" showEditIcon data-testid="hovered" />
        </div>
        <div className={classNames("flex", "border-box", "w-fit", "p-m")}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="Hover" data-testid="hovered" />
        </div>
        <div className={classNames("flex", "border-box", "w-fit", "p-m")}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="Focus" data-testid="focused" />
        </div>
        <div className={classNames("flex", "border-box", "p-m")} style={{
        inlineSize: "100px"
      }}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="Default with overflow" />
        </div>
      </div>
      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>
        InlineEdit.TextField editMode
      </h2>
      <div className={classNames("flex", "border-box", "flex-row", "gap-xl", "p-m", "items-center", "justify-start")} style={{
      inlineSize: "500px"
    }}>
        <InlineEdit.TextField aria-label="Edit color" defaultValue="Edit" showEditIcon isEditingDefault />
        <InlineEdit.TextField aria-label="Edit color" defaultValue="Edit + showFormButtons" showFormButtons isEditingDefault />
      </div>

      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>
        InlineEdit.TextField editMode vs view mode
      </h2>
      <div className={classNames("flex", "border-box", "flex-row", "gap-xl", "p-m", "items-center", "justify-start")} style={{
      inlineSize: "500px"
    }}>
        <InlineEdit.TextField aria-label="Edit color" defaultValue="Should not     trim   spaces.   WYSIWYG" isEditing />
        <InlineEdit.TextField aria-label="Edit color" defaultValue="Should not     trim   spaces.   WYSIWYG" />
      </div>

      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>
        InlineEdit.TextField editMode + error
      </h2>
      <div className={classNames("flex", "border-box", "flex-row", "gap-xl", "p-m", "items-start", "justify-start")} style={{
      inlineSize: "1000px",
      blockSize: "150px"
    }}>
        <div className={classNames("flex", "border-box", "grow", "shrink-0")} style={{
        flexBasis: 1
      }}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="Edit + Error" hasError isEditingDefault />
        </div>
        <div className={classNames("flex", "border-box", "grow", "shrink-0")} style={{
        flexBasis: 1
      }}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="Error + showFormButtons" hasError showFormButtons isEditingDefault />
        </div>
        <div className={classNames("flex", "border-box", "grow", "shrink-0")} style={{
        flexBasis: 1
      }}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="Error + errorMessages" hasError isEditingDefault errorMessages={errorMessages} />
        </div>
        <div className={classNames("flex", "border-box", "grow", "shrink-0")} style={{
        flexBasis: 1
      }}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="Error + errorMessages + showFormButtons" hasError showFormButtons isEditingDefault errorMessages={errorMessages} />
        </div>
      </div>
      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>
        InlineEdit.TextField font
      </h2>
      <div className={classNames("flex", "border-box", "flex-row", "gap-xl", "p-m", "items-center", "justify-start")}>
        <div className={classNames("flex", "border-box", "w-fit", "p-m")}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="custom font heading_xl" font="heading_xl" showEditIcon />
        </div>
        <div className={classNames("flex", "border-box", "w-fit", "p-m")}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="custom font script_s" font="script_s" view={({
          children
        }) => <span className={classNames("text-end", "font-script-s", "text-inverse", "bg-inverse")}>
                {children}
              </span>} showEditIcon />
        </div>
      </div>
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: ['[data-testid="hovered.view"][role="button"]', '[data-testid="focused"] [role="button"]'],
      active: '[data-testid="actived"]',
      focusVisible: ['[data-testid="focused"] > role="button"', '[data-testid="focused.edit"] [role="combobox"]']
    }
  },
  render: () => <div className={classNames("flex", "border-box", "flex-col", "gap-3xl")}>
      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>
        InlineEdit.Select
      </h2>
      <div className={classNames("flex", "border-box", "flex-col", "gap-xxl")}>
        <div className={classNames("w-xxs", "flex", "flex-col", "gap-xl")}>
          <InlineEdit.Select aria-label="Edit color" defaultValue="default" showEditIcon>
            {OPTIONS}
          </InlineEdit.Select>
          <InlineEdit.Select aria-label="Edit color" defaultValue="hovered" showEditIcon data-testid="hovered">
            {OPTIONS}
          </InlineEdit.Select>
          <InlineEdit.Select aria-label="Edit color" defaultValue="focused" showEditIcon data-testid="focused">
            {OPTIONS}
          </InlineEdit.Select>
        </div>
        <div className={classNames("w-l", "flex", "flex-row", "gap-xxl", "items-start")} style={{
        blockSize: "250px"
      }}>
          <InlineEdit.Select aria-label="Edit color" defaultValue="editing" showEditIcon isEditingDefault>
            {OPTIONS}
          </InlineEdit.Select>
          <InlineEdit.Select aria-label="Edit color" defaultValue="hasError" hasError isEditingDefault>
            {OPTIONS}
          </InlineEdit.Select>
          <InlineEdit.Select aria-label="Edit color" defaultValue="focused" showEditIcon data-testid="focused" showFormButtons isEditingDefault>
            {OPTIONS}
          </InlineEdit.Select>
        </div>
      </div>
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: ['[data-testid="hovered"]', '[data-testid="focused"] > button'],
      active: '[data-testid="actived"]',
      focusVisible: '[data-testid="focused"] > button'
    }
  },
  render: () => <div className={classNames("flex", "border-box", "flex-col", "gap-3xl")}>
      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>
        InlineEdit.MultiSelect
      </h2>
      <div className={classNames("flex", "border-box", "flex-col", "gap-xxl", "items-start")}>
        <div className={classNames("w-xxs", "flex", "gap-xl")}>
          <InlineEdit.MultiSelect aria-label="Edit colors" defaultValue={["default"]} showEditIcon>
            {OPTIONS}
          </InlineEdit.MultiSelect>
          <InlineEdit.MultiSelect aria-label="Edit colors" defaultValue={["hovered"]} showEditIcon data-testid="hovered">
            {OPTIONS}
          </InlineEdit.MultiSelect>
          <InlineEdit.MultiSelect aria-label="Edit colors" defaultValue={["focused"]} showEditIcon data-testid="focused">
            {OPTIONS}
          </InlineEdit.MultiSelect>
        </div>
        <div className={classNames("w-xl", "flex", "flex-row", "gap-xxl", "items-start")} style={{
        blockSize: "250px"
      }}>
          <InlineEdit.MultiSelect aria-label="Edit colors" defaultValue={["editing"]} showEditIcon isEditingDefault>
            {OPTIONS}
          </InlineEdit.MultiSelect>
          <InlineEdit.MultiSelect aria-label="Edit colors" defaultValue={["hasError"]} hasError isEditingDefault>
            {OPTIONS}
          </InlineEdit.MultiSelect>
          <InlineEdit.MultiSelect aria-label="Edit colors" defaultValue={["editing"]} showEditIcon showFormButtons isEditingDefault>
            {OPTIONS}
          </InlineEdit.MultiSelect>
        </div>
      </div>
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState(true);
    const [initialValue, setInitialValue] = useState(true);
    return <div className={classNames("flex", "border-box", "p-xl", "w-xs", "bg-weak")}>
        <InlineEdit.Primitive onCancel={() => {
        setValue(initialValue);
      }} onSave={() => {
        setInitialValue(value);
      }} view={<div className={classNames("flex", "flex-row", "gap-m", "items-center", "w-full", "text-default", "bg-default")}>
              <GenerateWithAiIcon className={classNames("fill-current")} />
              <div className={classNames("flex", "flex-col", "gap-m")}>
                <span className={classNames("font-label-m-emphasized", "text-default")}>
                  {value ? "On" : "Off"}
                </span>
                <span className={classNames("font-label-s", "text-weak")}>
                  AI Features
                </span>
              </div>
            </div>} edit={<div className={classNames("flex", "flex-row", "bg-default", "gap-m", "px-m", "py-xl", "items-center")}>
              <Switch checked={value} onChange={() => {
          setValue(prev => !prev);
        }} label="AI Features" />
            </div>} {...props} />
      </div>;
  },
  args: {
    showFormButtons: true,
    onSave: fn()
  },
  argTypes: InlineEditPrimitiveArgTypes
}`,...k.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "InlineEdit in Table",
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: (props: TableProps<Person>) => {
    const [rows, setRows] = useState<Array<Person>>(data);
    const onRowChange = useCallback(() => (row: Person) => {
      setRows(prevRows => prevRows.map(r => r.uuid === row.uuid ? {
        ...r,
        ...row
      } : r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rows]);
    return <TableInlineEditContext.Provider value={{
      onRowChange
    }}>
        <div className={classNames("w-full", "p-xl", "border-box")} style={{
        blockSize: 300
      }}>
          <Table {...props} rows={rows} getRowId={row => row.uuid} />
        </div>
      </TableInlineEditContext.Provider>;
  },
  args: {
    variant: "data",
    columns: [{
      field: "firstName",
      headerName: "First Name",
      renderCell: ({
        row,
        colDef
      }) => {
        return <EditCell row={row} attr="firstName" label={colDef.headerName} />;
      }
    }, {
      field: "lastName",
      headerName: "Last Name",
      renderCell: ({
        row,
        colDef
      }) => {
        return <EditCell row={row} attr="lastName" label={colDef.headerName} />;
      }
    }, {
      field: "role",
      headerName: "Role",
      renderCell: ({
        row,
        colDef
      }) => {
        return <EditSelectCell row={row} attr="role" label={colDef.headerName} />;
      }
    }, {
      field: "bio",
      headerName: "Bio",
      flex: 1,
      renderCell: ({
        row,
        colDef
      }) => {
        return <EditCell row={row} attr="bio" label={colDef.headerName} />;
      }
    }]
  }
}`,...I.parameters?.docs?.source}}};var L=[`TextField`,`SelectDemo`,`MultiSelect`,`VisualTestTextField`,`VisualTestSelect`,`VisualTestMultiSelect`,`CustomInlineEdit`,`InlineEditTable`];export{k as CustomInlineEdit,I as InlineEditTable,T as MultiSelect,w as SelectDemo,x as TextField,O as VisualTestMultiSelect,D as VisualTestSelect,E as VisualTestTextField,L as __namedExportsOrder,b as default,_ as t};