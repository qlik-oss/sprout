import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{G as r,In as i,Ln as a,M as o,W as s,ir as c,jt as l,mn as u,v as d}from"./iframe-B0xl5hqz.js";import{n as f,t as p}from"./SelectTest-LjrQa0rd.js";import{n as m,t as h}from"./lib-2Xwj1dqI.js";var g,_,v,y,b,x=t((()=>{g={showEditIcon:{control:{type:`boolean`},description:`Displays an edit icon next to the value.`,table:{type:{summary:`boolean`}}},showFormButtons:{control:{type:`boolean`},description:`Displays form buttons (save/cancel) when editing as an overlay to the edit view.`,table:{type:{summary:`boolean`}}},onSave:{control:!1,description:`function called when the user validate the action`,table:{type:{summary:`() => void`}}},onCancel:{control:!1,description:`function called when the user cancel the action`,table:{type:{summary:`() => void`}}},showEditButton:{table:{disable:!0}},blurAction:{control:{type:`select`},options:[`cancel`,`save`],description:`Action to perform when the input loses focus.`,table:{type:{summary:`"cancel" | "save"`}}},isEditing:{control:{type:`select`},options:[void 0,!0,!1],description:`Controls whether the component is in editing mode.`,table:{type:{summary:`boolean`}}},isEditingDefault:{control:{type:`select`},options:[void 0,!0,!1],description:`Initial state of the component when it is first rendered.`,table:{type:{summary:`boolean`}}},onEdit:{control:!1,description:`Function called when the user clicks on the edit icon.`,table:{type:{summary:`(isEditing: boolean) => void`}}},errorMessages:{control:{type:`object`},description:`Array of error messages to display when the input has errors.`,table:{type:{summary:`string[]`}}},placeholder:{control:{type:`text`},description:`Placeholder text for the multi-select input.`,table:{type:{summary:`string`}}},hasError:{control:{type:`boolean`},description:`Indicates whether the multi-select has an error state.`,table:{type:{summary:`boolean`}}}},_={view:{control:!1,description:`Custom view component to render the value in view mode.`,table:{type:{summary:`JSX.Element | (() => JSX.Element)`}}},edit:{control:!1,description:`Custom edit component to render the value in edit mode.`,table:{type:{summary:`JSX.Element | (() => JSX.Element)`}}},editFocusSelector:{control:{type:`text`},description:`CSS selector to focus the edit component when it is opened.`,table:{type:{summary:`string`},defaultValue:{summary:`a[href], button:not(:disabled), input:not(:disabled), textarea:not(:disabled), select:not(:disabled), [tabindex]:not([tabindex="-1"])`}}},editOffsetX:{control:{type:`number`},description:`Horizontal offset for the edit component.`,table:{type:{summary:`number`}}}},v={value:{control:{type:`text`},description:`Current value of the text field in Controlled mode.`,table:{type:{summary:`string`}}},defaultValue:{control:{type:`text`},description:`Initial value of the text field in Uncontrolled mode.`,table:{type:{summary:`string`}}},onChange:{control:!1,description:`Function called when the input value changes.`,table:{type:{summary:`(value: string) => void`}}},font:{control:{type:`select`},options:[`label_xl`,`label_l`,`label_m`,`label_s`,`label_xs`],description:`Sets the font style for the text field.`,table:{type:{summary:`"label_xl" | "label_l" | "label_m" | "label_s" | "label_xs"`},defaultValue:{summary:`label_s`}}}},y={children:{control:`object`,description:`Options to display in the select dropdown.`},defaultValue:{control:{type:`select`},options:[`red`,`blue`,`green`,`yellow`,`purple`,`orange`],description:`Initial value of the select in Uncontrolled mode.`,table:{type:{summary:`string`}}},value:{control:{type:`select`},options:[`red`,`blue`,`green`,`yellow`,`purple`,`orange`],description:`Current value of the select in Controlled mode.`,table:{type:{summary:`string`}}},onChange:{control:!1,description:`Function called when the selected option changes.`,table:{type:{summary:`(value: string, reason?: ChangeReasons | 'cancel') => void`}}}},b={children:{control:!1,description:`Options to display in the multi-select dropdown.`,table:{type:{summary:`ReactNode`}}},defaultValue:{control:{type:`multi-select`},options:[`red`,`blue`,`green`,`yellow`,`purple`,`orange`]},value:{control:{type:`multi-select`},options:[`red`,`blue`,`green`,`yellow`,`purple`,`orange`]},onChange:{control:!1,description:`Function called when the selected options change.`,table:{type:{summary:`(value: string[], reason?: ChangeReasons | 'cancel') => void`}}}}})),S=n({CustomInlineEdit:()=>L,InlineEditTable:()=>H,MultiSelect:()=>N,SelectDemo:()=>M,TextField:()=>k,VisualTestMultiSelect:()=>I,VisualTestSelect:()=>F,VisualTestTextField:()=>P,__namedExportsOrder:()=>U,default:()=>O});function C({row:e,attr:t,label:n}){let r=(0,T.useContext)(V),[a,o]=(0,T.useState)(e[t]);return(0,T.useEffect)(()=>{o(e[t])},[e[t]]),(0,E.jsx)(`div`,{className:i(`px-s`,`w-full`,`h-full`,`whitespace-nowrap`,`overflow-hidden`),children:(0,E.jsx)(s.Select,{value:a,onChange:(n,r)=>{if(r===`cancel`){o(e[t]);return}o(n.target.value)},onSave:()=>{r.onRowChange({...e,[t]:a})},"aria-label":n,onSubmit:()=>{console.log(`submit`,a),r.onRowChange({...e,[t]:a})},children:B})})}function w({row:e,attr:t,label:n}){let r=(0,T.useContext)(V),[a,o]=(0,T.useState)(e[t]);return(0,T.useEffect)(()=>{o(e[t])},[e[t]]),(0,E.jsx)(`div`,{className:i(`px-s`,`border-box`,`w-full`,`relative`),children:(0,E.jsx)(s.TextField,{value:a,onChange:(n,r)=>{if(r===`cancel`){o(e[t]);return}o(n.target.value)},onSave:()=>{r.onRowChange({...e,[t]:a})},"aria-label":n,onSubmit:()=>{console.log(`submit`,a),r.onRowChange({...e,[t]:a})}})})}var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W=t((()=>{T=e(c()),d(),h(),l(),f(),x(),E=a(),{fn:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/InlineEdit`},k={name:`TextField`,parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,E.jsx)(`div`,{className:i(`flex`,`border-box`,`p-xl`,`w-xs`),children:(0,E.jsx)(s.TextField,{...e})}),args:{defaultValue:`Edit me`,"aria-label":`Edit color`,onSave:D(),onCancel:D(),onChange:D()},argTypes:{...g,...v}},A=[`This is an error message`],j=[(0,E.jsx)(r.Option,{value:``,children:(0,E.jsx)(`div`,{className:i(`text-weak`),children:`empty`})},`empty`),(0,E.jsx)(r.Option,{value:`red`,children:`Red`},`red`),(0,E.jsx)(r.Option,{value:`default`,children:`Default`},`default`),(0,E.jsx)(r.Option,{value:`hovered`,children:`Hovered`},`hovered`),(0,E.jsx)(r.Option,{value:`focused`,children:`Focused`},`focused`),(0,E.jsx)(r.Option,{value:`editing`,children:`Editing`},`editing`),(0,E.jsx)(r.Option,{value:`hasError`,children:`Has Error`},`hasError`)],M={name:`Select`,args:{defaultValue:`red`},argTypes:{...g,...y},parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,E.jsx)(`div`,{className:i(`flex`,`border-box`,`p-xl`,`w-xs`),children:(0,E.jsx)(s.Select,{"aria-label":`Edit color`,...e,children:p})})},N={parameters:{chromatic:{disableSnapshot:!0}},argTypes:{...g,...b},args:{defaultValue:[`blue`,`red`]},render:e=>(0,E.jsx)(`div`,{className:i(`flex`,`border-box`,`p-xl`,`w-xs`),children:(0,E.jsx)(s.MultiSelect,{"aria-label":`Edit colors`,...e,children:p})})},P={parameters:{chromatic:{disableSnapshot:!0},pseudo:{hover:[`[data-testid="hovered.view"]`],active:`[data-testid="actived.view"]`,focusVisible:`[data-testid="focused"] > [role="button"]`}},render:()=>(0,E.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-col`,`gap-3xl`),children:[(0,E.jsx)(`h2`,{className:i(`flex`,`border-box`,`font-heading-m`,`text-default`),children:`InlineEdit.TextField`}),(0,E.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-row`,`gap-xl`,`p-m`,`items-center`,`justify-start`,`w-fit`),children:[(0,E.jsx)(`div`,{className:i(`flex`,`border-box`,`w-fit`,`p-m`),children:(0,E.jsx)(s.TextField,{"aria-label":`Edit color`,defaultValue:``,placeholder:`placeholder`})}),(0,E.jsx)(`div`,{className:i(`flex`,`border-box`,`w-fit`,`p-m`),children:(0,E.jsx)(s.TextField,{"aria-label":`Edit color`,defaultValue:`default value`,showEditIcon:!0})}),(0,E.jsx)(`div`,{className:i(`flex`,`border-box`,`w-fit`,`p-m`),children:(0,E.jsx)(s.TextField,{"aria-label":`Edit color`,defaultValue:`Hover + showEditIcon`,showEditIcon:!0,"data-testid":`hovered`})}),(0,E.jsx)(`div`,{className:i(`flex`,`border-box`,`w-fit`,`p-m`),children:(0,E.jsx)(s.TextField,{"aria-label":`Edit color`,defaultValue:`Hover`,"data-testid":`hovered`})}),(0,E.jsx)(`div`,{className:i(`flex`,`border-box`,`w-fit`,`p-m`),children:(0,E.jsx)(s.TextField,{"aria-label":`Edit color`,defaultValue:`Focus`,"data-testid":`focused`})}),(0,E.jsx)(`div`,{className:i(`flex`,`border-box`,`p-m`),style:{inlineSize:`100px`},children:(0,E.jsx)(s.TextField,{"aria-label":`Edit color`,defaultValue:`Default with overflow`})})]}),(0,E.jsx)(`h2`,{className:i(`flex`,`border-box`,`font-heading-m`,`text-default`),children:`InlineEdit.TextField editMode`}),(0,E.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-row`,`gap-xl`,`p-m`,`items-center`,`justify-start`),style:{inlineSize:`500px`},children:[(0,E.jsx)(s.TextField,{"aria-label":`Edit color`,defaultValue:`Edit`,showEditIcon:!0,isEditingDefault:!0}),(0,E.jsx)(s.TextField,{"aria-label":`Edit color`,defaultValue:`Edit + showFormButtons`,showFormButtons:!0,isEditingDefault:!0})]}),(0,E.jsx)(`h2`,{className:i(`flex`,`border-box`,`font-heading-m`,`text-default`),children:`InlineEdit.TextField editMode vs view mode`}),(0,E.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-row`,`gap-xl`,`p-m`,`items-center`,`justify-start`),style:{inlineSize:`500px`},children:[(0,E.jsx)(s.TextField,{"aria-label":`Edit color`,defaultValue:`Should not     trim   spaces.   WYSIWYG`,isEditing:!0}),(0,E.jsx)(s.TextField,{"aria-label":`Edit color`,defaultValue:`Should not     trim   spaces.   WYSIWYG`})]}),(0,E.jsx)(`h2`,{className:i(`flex`,`border-box`,`font-heading-m`,`text-default`),children:`InlineEdit.TextField editMode + error`}),(0,E.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-row`,`gap-xl`,`p-m`,`items-start`,`justify-start`),style:{inlineSize:`1000px`,blockSize:`150px`},children:[(0,E.jsx)(`div`,{className:i(`flex`,`border-box`,`grow`,`shrink-0`),style:{flexBasis:1},children:(0,E.jsx)(s.TextField,{"aria-label":`Edit color`,defaultValue:`Edit + Error`,hasError:!0,isEditingDefault:!0})}),(0,E.jsx)(`div`,{className:i(`flex`,`border-box`,`grow`,`shrink-0`),style:{flexBasis:1},children:(0,E.jsx)(s.TextField,{"aria-label":`Edit color`,defaultValue:`Error + showFormButtons`,hasError:!0,showFormButtons:!0,isEditingDefault:!0})}),(0,E.jsx)(`div`,{className:i(`flex`,`border-box`,`grow`,`shrink-0`),style:{flexBasis:1},children:(0,E.jsx)(s.TextField,{"aria-label":`Edit color`,defaultValue:`Error + errorMessages`,hasError:!0,isEditingDefault:!0,errorMessages:A})}),(0,E.jsx)(`div`,{className:i(`flex`,`border-box`,`grow`,`shrink-0`),style:{flexBasis:1},children:(0,E.jsx)(s.TextField,{"aria-label":`Edit color`,defaultValue:`Error + errorMessages + showFormButtons`,hasError:!0,showFormButtons:!0,isEditingDefault:!0,errorMessages:A})})]}),(0,E.jsx)(`h2`,{className:i(`flex`,`border-box`,`font-heading-m`,`text-default`),children:`InlineEdit.TextField font`}),(0,E.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-row`,`gap-xl`,`p-m`,`items-center`,`justify-start`),children:[(0,E.jsx)(`div`,{className:i(`flex`,`border-box`,`w-fit`,`p-m`),children:(0,E.jsx)(s.TextField,{"aria-label":`Edit color`,defaultValue:`custom font heading_xl`,font:`heading_xl`,showEditIcon:!0})}),(0,E.jsx)(`div`,{className:i(`flex`,`border-box`,`w-fit`,`p-m`),children:(0,E.jsx)(s.TextField,{"aria-label":`Edit color`,defaultValue:`custom font script_s`,font:`script_s`,view:({children:e})=>(0,E.jsx)(`span`,{className:i(`text-end`,`font-script-s`,`text-inverse`,`bg-inverse`),children:e}),showEditIcon:!0})})]})]})},F={parameters:{pseudo:{hover:[`[data-testid="hovered.view"][role="button"]`,`[data-testid="focused"] [role="button"]`],active:`[data-testid="actived"]`,focusVisible:[`[data-testid="focused"] > role="button"`,`[data-testid="focused.edit"] [role="combobox"]`]}},render:()=>(0,E.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-col`,`gap-3xl`),children:[(0,E.jsx)(`h2`,{className:i(`flex`,`border-box`,`font-heading-m`,`text-default`),children:`InlineEdit.Select`}),(0,E.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-col`,`gap-xxl`),children:[(0,E.jsxs)(`div`,{className:i(`w-xxs`,`flex`,`flex-col`,`gap-xl`),children:[(0,E.jsx)(s.Select,{"aria-label":`Edit color`,defaultValue:`default`,showEditIcon:!0,children:j}),(0,E.jsx)(s.Select,{"aria-label":`Edit color`,defaultValue:`hovered`,showEditIcon:!0,"data-testid":`hovered`,children:j}),(0,E.jsx)(s.Select,{"aria-label":`Edit color`,defaultValue:`focused`,showEditIcon:!0,"data-testid":`focused`,children:j})]}),(0,E.jsxs)(`div`,{className:i(`w-l`,`flex`,`flex-row`,`gap-xxl`,`items-start`),style:{blockSize:`250px`},children:[(0,E.jsx)(s.Select,{"aria-label":`Edit color`,defaultValue:`editing`,showEditIcon:!0,isEditingDefault:!0,children:j}),(0,E.jsx)(s.Select,{"aria-label":`Edit color`,defaultValue:`hasError`,hasError:!0,isEditingDefault:!0,children:j}),(0,E.jsx)(s.Select,{"aria-label":`Edit color`,defaultValue:`focused`,showEditIcon:!0,"data-testid":`focused`,showFormButtons:!0,isEditingDefault:!0,children:j})]})]})]})},I={parameters:{pseudo:{hover:[`[data-testid="hovered"]`,`[data-testid="focused"] > button`],active:`[data-testid="actived"]`,focusVisible:`[data-testid="focused"] > button`}},render:()=>(0,E.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-col`,`gap-3xl`),children:[(0,E.jsx)(`h2`,{className:i(`flex`,`border-box`,`font-heading-m`,`text-default`),children:`InlineEdit.MultiSelect`}),(0,E.jsxs)(`div`,{className:i(`flex`,`border-box`,`flex-col`,`gap-xxl`,`items-start`),children:[(0,E.jsxs)(`div`,{className:i(`w-xxs`,`flex`,`gap-xl`),children:[(0,E.jsx)(s.MultiSelect,{"aria-label":`Edit colors`,defaultValue:[`default`],showEditIcon:!0,children:j}),(0,E.jsx)(s.MultiSelect,{"aria-label":`Edit colors`,defaultValue:[`hovered`],showEditIcon:!0,"data-testid":`hovered`,children:j}),(0,E.jsx)(s.MultiSelect,{"aria-label":`Edit colors`,defaultValue:[`focused`],showEditIcon:!0,"data-testid":`focused`,children:j})]}),(0,E.jsxs)(`div`,{className:i(`w-xl`,`flex`,`flex-row`,`gap-xxl`,`items-start`),style:{blockSize:`250px`},children:[(0,E.jsx)(s.MultiSelect,{"aria-label":`Edit colors`,defaultValue:[`editing`],showEditIcon:!0,isEditingDefault:!0,children:j}),(0,E.jsx)(s.MultiSelect,{"aria-label":`Edit colors`,defaultValue:[`hasError`],hasError:!0,isEditingDefault:!0,children:j}),(0,E.jsx)(s.MultiSelect,{"aria-label":`Edit colors`,defaultValue:[`editing`],showEditIcon:!0,showFormButtons:!0,isEditingDefault:!0,children:j})]})]})]})},L={render:e=>{let[t,n]=(0,T.useState)(!0),[r,a]=(0,T.useState)(!0);return(0,E.jsx)(`div`,{className:i(`flex`,`border-box`,`p-xl`,`w-xs`,`bg-weak`),children:(0,E.jsx)(s.Primitive,{onCancel:()=>{n(r)},onSave:()=>{a(t)},view:(0,E.jsxs)(`div`,{className:i(`flex`,`flex-row`,`gap-m`,`items-center`,`w-full`,`text-default`,`bg-default`),children:[(0,E.jsx)(u,{className:i(`fill-current`)}),(0,E.jsxs)(`div`,{className:i(`flex`,`flex-col`,`gap-m`),children:[(0,E.jsx)(`span`,{className:i(`font-label-m-emphasized`,`text-default`),children:t?`On`:`Off`}),(0,E.jsx)(`span`,{className:i(`font-label-s`,`text-weak`),children:`AI Features`})]})]}),edit:(0,E.jsx)(`div`,{className:i(`flex`,`flex-row`,`bg-default`,`gap-m`,`px-m`,`py-xl`,`items-center`),children:(0,E.jsx)(o,{checked:t,onChange:()=>{n(e=>!e)},label:`AI Features`})}),...e})})},args:{showFormButtons:!0,onSave:D()},argTypes:_},R={ADMIN:`Administrator with extended system permissions that allows managing users, settings, and content across the platform.`,EDITOR:`Editor`,USER:`User`,VIEWER:`Viewer`},z=[{uuid:`1`,firstName:`John`,lastName:`Doe`,bio:`Lorem ipsum dolor sit amet.`,role:R.ADMIN},{uuid:`2`,firstName:`Jane`,lastName:`Smith`,bio:`Consectetur adipiscing elit.`,role:R.EDITOR},{uuid:`3`,firstName:`Alice`,lastName:`Johnson`,bio:`Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,role:R.USER},{uuid:`4`,firstName:`Bob`,lastName:`Brown`,bio:`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,role:R.VIEWER},{uuid:`5`,firstName:`Charlie`,lastName:`Davis`,bio:`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur.`,role:R.USER},{uuid:`6`,firstName:`Eve`,lastName:`Wilson`,bio:`Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,role:R.ADMIN},{uuid:`7`,firstName:`Frank`,lastName:`Garcia`,bio:`Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin.`,role:R.USER},{uuid:`8`,firstName:`Grace`,lastName:`Martinez`,bio:`Integer in mauris eu nibh. Nullam mollis. Etiam vel erat sed augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi lacinia molestie dui.`,role:R.EDITOR},{uuid:`9`,firstName:`Hank`,lastName:`Lopez`,bio:`Praesent id justo in neque elementum ultrices. Fusce fermentum. Donec ut mauris eget massa tempor convallis. Nulla facilisi.`,role:R.VIEWER},{uuid:`10`,firstName:`Ivy`,lastName:`Hernandez`,bio:`Sed lectus. Integer euismod lacus luctus magna, non interdum quam sodales ut. Sed lectus. Integer euismod lacus luctus magna, non interdum quam sodales ut.`,role:R.USER}],B=[(0,E.jsx)(r.Option,{value:R.ADMIN,children:R.ADMIN},`admin`),(0,E.jsx)(r.Option,{value:R.EDITOR,children:R.EDITOR},`editor`),(0,E.jsx)(r.Option,{value:R.USER,children:R.USER},`user`),(0,E.jsx)(r.Option,{value:R.VIEWER,children:R.VIEWER},`viewer`)],V=(0,T.createContext)({onRowChange:()=>{}}),H={name:`InlineEdit in Table`,parameters:{chromatic:{disableSnapshot:!0}},render:e=>{let[t,n]=(0,T.useState)(z),r=(0,T.useCallback)(()=>e=>{n(t=>t.map(t=>t.uuid===e.uuid?{...t,...e}:t))},[t]);return(0,E.jsx)(V.Provider,{value:{onRowChange:r},children:(0,E.jsx)(`div`,{className:i(`w-full`,`p-xl`,`border-box`),style:{blockSize:300},children:(0,E.jsx)(m,{...e,rows:t,getRowId:e=>e.uuid})})})},args:{variant:`data`,columns:[{field:`firstName`,headerName:`First Name`,renderCell:({row:e,colDef:t})=>(0,E.jsx)(w,{row:e,attr:`firstName`,label:t.headerName})},{field:`lastName`,headerName:`Last Name`,renderCell:({row:e,colDef:t})=>(0,E.jsx)(w,{row:e,attr:`lastName`,label:t.headerName})},{field:`role`,headerName:`Role`,renderCell:({row:e,colDef:t})=>(0,E.jsx)(C,{row:e,attr:`role`,label:t.headerName})},{field:`bio`,headerName:`Bio`,flex:1,renderCell:({row:e,colDef:t})=>(0,E.jsx)(w,{row:e,attr:`bio`,label:t.headerName})}]}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U=[`TextField`,`SelectDemo`,`MultiSelect`,`VisualTestTextField`,`VisualTestSelect`,`VisualTestMultiSelect`,`CustomInlineEdit`,`InlineEditTable`]}));W();export{L as CustomInlineEdit,H as InlineEditTable,N as MultiSelect,M as SelectDemo,k as TextField,I as VisualTestMultiSelect,F as VisualTestSelect,P as VisualTestTextField,U as __namedExportsOrder,O as default,W as n,S as t};