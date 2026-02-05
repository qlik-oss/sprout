import{r as o,j as e}from"./iframe-B4vjk2_C.js";import{F}from"./AiSparkles-Dl0R-qK2.js";import{T as V}from"./TanstackTable-IrfVYjtU.js";import{O as y}from"./SelectTest-DHkAQ6go.js";import{S as O}from"./Switch-R93KNTDG.js";import{I as l}from"./index-DphJYWn8.js";import{c as t}from"./classNames-DaRWzB8T.js";import{S as n}from"./SelectComposition-CjxfMaHc.js";const I={showEditIcon:{control:{type:"boolean"},description:"Displays an edit icon next to the value.",table:{type:{summary:"boolean"}}},showFormButtons:{control:{type:"boolean"},description:"Displays form buttons (save/cancel) when editing as an overlay to the edit view.",table:{type:{summary:"boolean"}}},onSave:{control:!1,description:"function called when the user validate the action",table:{type:{summary:"() => void"}}},onCancel:{control:!1,description:"function called when the user cancel the action",table:{type:{summary:"() => void"}}},showEditButton:{table:{disable:!0}},blurAction:{control:{type:"select"},options:["cancel","save"],description:"Action to perform when the input loses focus.",table:{type:{summary:'"cancel" | "save"'}}},isEditing:{control:{type:"select"},options:[void 0,!0,!1],description:"Controls whether the component is in editing mode.",table:{type:{summary:"boolean"}}},isEditingDefault:{control:{type:"select"},options:[void 0,!0,!1],description:"Initial state of the component when it is first rendered.",table:{type:{summary:"boolean"}}},onEdit:{control:!1,description:"Function called when the user clicks on the edit icon.",table:{type:{summary:"(isEditing: boolean) => void"}}},errorMessages:{control:{type:"object"},description:"Array of error messages to display when the input has errors.",table:{type:{summary:"string[]"}}},placeholder:{control:{type:"text"},description:"Placeholder text for the multi-select input.",table:{type:{summary:"string"}}},hasError:{control:{type:"boolean"},description:"Indicates whether the multi-select has an error state.",table:{type:{summary:"boolean"}}}},C={view:{control:!1,description:"Custom view component to render the value in view mode.",table:{type:{summary:"JSX.Element | (() => JSX.Element)"}}},edit:{control:!1,description:"Custom edit component to render the value in edit mode.",table:{type:{summary:"JSX.Element | (() => JSX.Element)"}}},editFocusSelector:{control:{type:"text"},description:"CSS selector to focus the edit component when it is opened.",table:{type:{summary:"string"},defaultValue:{summary:'a[href], button:not(:disabled), input:not(:disabled), textarea:not(:disabled), select:not(:disabled), [tabindex]:not([tabindex="-1"])'}}},editOffsetX:{control:{type:"number"},description:"Horizontal offset for the edit component.",table:{type:{summary:"number"}}}},M={value:{control:{type:"text"},description:"Current value of the text field in Controlled mode.",table:{type:{summary:"string"}}},defaultValue:{control:{type:"text"},description:"Initial value of the text field in Uncontrolled mode.",table:{type:{summary:"string"}}},onChange:{control:!1,description:"Function called when the input value changes.",table:{type:{summary:"(value: string) => void"}}},font:{control:{type:"select"},options:["label_xl","label_l","label_m","label_s","label_xs"],description:"Sets the font style for the text field.",table:{type:{summary:'"label_xl" | "label_l" | "label_m" | "label_s" | "label_xs"'},defaultValue:{summary:"label_s"}}}},D={children:{control:"object",description:"Options to display in the select dropdown."},defaultValue:{control:{type:"select"},options:["red","blue","green","yellow","purple","orange"],description:"Initial value of the select in Uncontrolled mode.",table:{type:{summary:"string"}}},value:{control:{type:"select"},options:["red","blue","green","yellow","purple","orange"],description:"Current value of the select in Controlled mode.",table:{type:{summary:"string"}}},onChange:{control:!1,description:"Function called when the selected option changes.",table:{type:{summary:"(value: string, reason?: ChangeReasons | 'cancel') => void"}}}},B={children:{control:!1,description:"Options to display in the multi-select dropdown.",table:{type:{summary:"ReactNode"}}},defaultValue:{control:{type:"multi-select"},options:["red","blue","green","yellow","purple","orange"]},value:{control:{type:"multi-select"},options:["red","blue","green","yellow","purple","orange"]},onChange:{control:!1,description:"Function called when the selected options change.",table:{type:{summary:"(value: string[], reason?: ChangeReasons | 'cancel') => void"}}}},{fn:N}=__STORYBOOK_MODULE_TEST__,P={title:"Components/InlineEdit"},x={name:"TextField",parameters:{chromatic:{disableSnapshot:!0}},render:a=>e.jsx("div",{className:t("flex","border-box","p-xl","w-xs"),children:e.jsx(l.TextField,{...a})}),args:{defaultValue:"Edit me","aria-label":"Edit color",onSave:N(),onCancel:N(),onChange:N()},argTypes:{...I,...M}},S=["This is an error message"],i=[e.jsx(n.Option,{value:"",children:e.jsx("div",{className:t("text-weak"),children:"empty"})},"empty"),e.jsx(n.Option,{value:"red",children:"Red"},"red"),e.jsx(n.Option,{value:"default",children:"Default"},"default"),e.jsx(n.Option,{value:"hovered",children:"Hovered"},"hovered"),e.jsx(n.Option,{value:"focused",children:"Focused"},"focused"),e.jsx(n.Option,{value:"editing",children:"Editing"},"editing"),e.jsx(n.Option,{value:"hasError",children:"Has Error"},"hasError")],f={name:"Select",args:{defaultValue:"red"},argTypes:{...I,...D},parameters:{chromatic:{disableSnapshot:!0}},render:a=>e.jsx("div",{className:t("flex","border-box","p-xl","w-xs"),children:e.jsx(l.Select,{"aria-label":"Edit color",...a,children:y})})},p={parameters:{chromatic:{disableSnapshot:!0}},argTypes:{...I,...B},args:{defaultValue:["blue","red"]},render:a=>e.jsx("div",{className:t("flex","border-box","p-xl","w-xs"),children:e.jsx(l.MultiSelect,{"aria-label":"Edit colors",...a,children:y})})},b={parameters:{pseudo:{hover:['[data-testid="hovered.view"]'],active:'[data-testid="actived.view"]',focusVisible:'[data-testid="focused"] > [role="button"]'}},render:()=>e.jsxs("div",{className:t("flex","border-box","flex-col","gap-3xl"),children:[e.jsx("h2",{className:t("flex","border-box","font-heading-m","text-default"),children:"InlineEdit.TextField"}),e.jsxs("div",{className:t("flex","border-box","flex-row","gap-xl","p-m","items-center","justify-start","w-fit"),children:[e.jsx("div",{className:t("flex","border-box","w-fit","p-m"),children:e.jsx(l.TextField,{"aria-label":"Edit color",defaultValue:"",placeholder:"placeholder"})}),e.jsx("div",{className:t("flex","border-box","w-fit","p-m"),children:e.jsx(l.TextField,{"aria-label":"Edit color",defaultValue:"default value",showEditIcon:!0})}),e.jsx("div",{className:t("flex","border-box","w-fit","p-m"),children:e.jsx(l.TextField,{"aria-label":"Edit color",defaultValue:"Hover + showEditIcon",showEditIcon:!0,"data-testid":"hovered"})}),e.jsx("div",{className:t("flex","border-box","w-fit","p-m"),children:e.jsx(l.TextField,{"aria-label":"Edit color",defaultValue:"Hover","data-testid":"hovered"})}),e.jsx("div",{className:t("flex","border-box","w-fit","p-m"),children:e.jsx(l.TextField,{"aria-label":"Edit color",defaultValue:"Focus","data-testid":"focused"})}),e.jsx("div",{className:t("flex","border-box","p-m"),style:{inlineSize:"100px"},children:e.jsx(l.TextField,{"aria-label":"Edit color",defaultValue:"Default with overflow"})})]}),e.jsx("h2",{className:t("flex","border-box","font-heading-m","text-default"),children:"InlineEdit.TextField editMode"}),e.jsxs("div",{className:t("flex","border-box","flex-row","gap-xl","p-m","items-center","justify-start"),style:{inlineSize:"500px"},children:[e.jsx(l.TextField,{"aria-label":"Edit color",defaultValue:"Edit",showEditIcon:!0,isEditingDefault:!0}),e.jsx(l.TextField,{"aria-label":"Edit color",defaultValue:"Edit + showFormButtons",showFormButtons:!0,isEditingDefault:!0})]}),e.jsx("h2",{className:t("flex","border-box","font-heading-m","text-default"),children:"InlineEdit.TextField editMode vs view mode"}),e.jsxs("div",{className:t("flex","border-box","flex-row","gap-xl","p-m","items-center","justify-start"),style:{inlineSize:"500px"},children:[e.jsx(l.TextField,{"aria-label":"Edit color",defaultValue:"Should not     trim   spaces.   WYSIWYG",isEditing:!0}),e.jsx(l.TextField,{"aria-label":"Edit color",defaultValue:"Should not     trim   spaces.   WYSIWYG"})]}),e.jsx("h2",{className:t("flex","border-box","font-heading-m","text-default"),children:"InlineEdit.TextField editMode + error"}),e.jsxs("div",{className:t("flex","border-box","flex-row","gap-xl","p-m","items-start","justify-start"),style:{inlineSize:"1000px",blockSize:"150px"},children:[e.jsx("div",{className:t("flex","border-box","grow","shrink-0"),style:{flexBasis:1},children:e.jsx(l.TextField,{"aria-label":"Edit color",defaultValue:"Edit + Error",hasError:!0,isEditingDefault:!0})}),e.jsx("div",{className:t("flex","border-box","grow","shrink-0"),style:{flexBasis:1},children:e.jsx(l.TextField,{"aria-label":"Edit color",defaultValue:"Error + showFormButtons",hasError:!0,showFormButtons:!0,isEditingDefault:!0})}),e.jsx("div",{className:t("flex","border-box","grow","shrink-0"),style:{flexBasis:1},children:e.jsx(l.TextField,{"aria-label":"Edit color",defaultValue:"Error + errorMessages",hasError:!0,isEditingDefault:!0,errorMessages:S})}),e.jsx("div",{className:t("flex","border-box","grow","shrink-0"),style:{flexBasis:1},children:e.jsx(l.TextField,{"aria-label":"Edit color",defaultValue:"Error + errorMessages + showFormButtons",hasError:!0,showFormButtons:!0,isEditingDefault:!0,errorMessages:S})})]}),e.jsx("h2",{className:t("flex","border-box","font-heading-m","text-default"),children:"InlineEdit.TextField font"}),e.jsxs("div",{className:t("flex","border-box","flex-row","gap-xl","p-m","items-center","justify-start"),children:[e.jsx("div",{className:t("flex","border-box","w-fit","p-m"),children:e.jsx(l.TextField,{"aria-label":"Edit color",defaultValue:"custom font heading-xl",font:"heading-xl",showEditIcon:!0})}),e.jsx("div",{className:t("flex","border-box","w-fit","p-m"),children:e.jsx(l.TextField,{"aria-label":"Edit color",defaultValue:"custom font script-s",font:"script-s",view:({children:a})=>e.jsx("span",{className:t("text-end","font-script-s","text-inverse","bg-inverse"),children:a}),showEditIcon:!0})})]})]})},h={parameters:{pseudo:{hover:['[data-testid="hovered.view"][role="button"]','[data-testid="focused"] [role="button"]'],active:'[data-testid="actived"]',focusVisible:['[data-testid="focused"] > role="button"','[data-testid="focused.edit"] [role="combobox"]']}},render:()=>e.jsxs("div",{className:t("flex","border-box","flex-col","gap-3xl"),children:[e.jsx("h2",{className:t("flex","border-box","font-heading-m","text-default"),children:"InlineEdit.Select"}),e.jsxs("div",{className:t("flex","border-box","flex-col","gap-xxl"),children:[e.jsxs("div",{className:t("w-xxs","flex","flex-col","gap-xl"),children:[e.jsx(l.Select,{"aria-label":"Edit color",defaultValue:"default",showEditIcon:!0,children:i}),e.jsx(l.Select,{"aria-label":"Edit color",defaultValue:"hovered",showEditIcon:!0,"data-testid":"hovered",children:i}),e.jsx(l.Select,{"aria-label":"Edit color",defaultValue:"focused",showEditIcon:!0,"data-testid":"focused",children:i})]}),e.jsxs("div",{className:t("w-l","flex","flex-row","gap-xxl","items-start"),style:{blockSize:"250px"},children:[e.jsx(l.Select,{"aria-label":"Edit color",defaultValue:"editing",showEditIcon:!0,isEditingDefault:!0,children:i}),e.jsx(l.Select,{"aria-label":"Edit color",defaultValue:"hasError",hasError:!0,isEditingDefault:!0,children:i}),e.jsx(l.Select,{"aria-label":"Edit color",defaultValue:"focused",showEditIcon:!0,"data-testid":"focused",showFormButtons:!0,isEditingDefault:!0,children:i})]})]})]})},E={parameters:{pseudo:{hover:['[data-testid="hovered"]','[data-testid="focused"] > button'],active:'[data-testid="actived"]',focusVisible:'[data-testid="focused"] > button'}},render:()=>e.jsxs("div",{className:t("flex","border-box","flex-col","gap-3xl"),children:[e.jsx("h2",{className:t("flex","border-box","font-heading-m","text-default"),children:"InlineEdit.MultiSelect"}),e.jsxs("div",{className:t("flex","border-box","flex-col","gap-xxl","items-start"),children:[e.jsxs("div",{className:t("w-xxs","flex","gap-xl"),children:[e.jsx(l.MultiSelect,{"aria-label":"Edit colors",defaultValue:["default"],showEditIcon:!0,children:i}),e.jsx(l.MultiSelect,{"aria-label":"Edit colors",defaultValue:["hovered"],showEditIcon:!0,"data-testid":"hovered",children:i}),e.jsx(l.MultiSelect,{"aria-label":"Edit colors",defaultValue:["focused"],showEditIcon:!0,"data-testid":"focused",children:i})]}),e.jsxs("div",{className:t("w-xl","flex","flex-row","gap-xxl","items-start"),style:{blockSize:"250px"},children:[e.jsx(l.MultiSelect,{"aria-label":"Edit colors",defaultValue:["editing"],showEditIcon:!0,isEditingDefault:!0,children:i}),e.jsx(l.MultiSelect,{"aria-label":"Edit colors",defaultValue:["hasError"],hasError:!0,isEditingDefault:!0,children:i}),e.jsx(l.MultiSelect,{"aria-label":"Edit colors",defaultValue:["editing"],showEditIcon:!0,showFormButtons:!0,isEditingDefault:!0,children:i})]})]})]})},v={render:a=>{const[s,c]=o.useState(!0),[u,r]=o.useState(!0);return e.jsx("div",{className:t("flex","border-box","p-xl","w-xs","bg-weak"),children:e.jsx(l.Primitive,{onCancel:()=>{c(u)},onSave:()=>{r(s)},view:e.jsxs("div",{className:t("flex","flex-row","gap-m","items-center","w-full","text-default","bg-default"),children:[e.jsx(F,{className:t("fill-current")}),e.jsxs("div",{className:t("flex","flex-col","gap-m"),children:[e.jsx("span",{className:t("font-label-m-emphasized","text-default"),children:s?"On":"Off"}),e.jsx("span",{className:t("font-label-s","text-weak"),children:"AI Features"})]})]}),edit:e.jsx("div",{className:t("flex","flex-row","bg-default","gap-m","px-m","py-xl","items-center"),children:e.jsx(O,{checked:s,onChange:()=>{c(d=>!d)},label:"AI Features"})}),...a})})},args:{showFormButtons:!0,onSave:N()},argTypes:C},k=[{uuid:"1",firstName:"John",lastName:"Doe",bio:"Lorem ipsum dolor sit amet."},{uuid:"2",firstName:"Jane",lastName:"Smith",bio:"Consectetur adipiscing elit."},{uuid:"3",firstName:"Alice",lastName:"Johnson",bio:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{uuid:"4",firstName:"Bob",lastName:"Brown",bio:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{uuid:"5",firstName:"Charlie",lastName:"Davis",bio:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur."},{uuid:"6",firstName:"Eve",lastName:"Wilson",bio:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{uuid:"7",firstName:"Frank",lastName:"Garcia",bio:"Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin."},{uuid:"8",firstName:"Grace",lastName:"Martinez",bio:"Integer in mauris eu nibh. Nullam mollis. Etiam vel erat sed augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi lacinia molestie dui."},{uuid:"9",firstName:"Hank",lastName:"Lopez",bio:"Praesent id justo in neque elementum ultrices. Fusce fermentum. Donec ut mauris eget massa tempor convallis. Nulla facilisi."},{uuid:"10",firstName:"Ivy",lastName:"Hernandez",bio:"Sed lectus. Integer euismod lacus luctus magna, non interdum quam sodales ut. Sed lectus. Integer euismod lacus luctus magna, non interdum quam sodales ut."}],T=o.createContext({onRowChange:()=>{}});function w({row:a,attr:s,label:c}){const u=o.useContext(T),[r,d]=o.useState(a[s]);return o.useEffect(()=>{d(a[s])},[a[s]]),e.jsx("div",{className:t("px-s","border-box","w-full","relative"),children:e.jsx(l.TextField,{value:r,onChange:(m,j)=>{if(j==="cancel"){d(a[s]);return}d(m.target.value)},onSave:()=>{u.onRowChange({...a,[s]:r})},"aria-label":c,onSubmit:()=>{console.log("submit",r),u.onRowChange({...a,[s]:r})}})})}const g={name:"InlineEdit in Table",parameters:{chromatic:{disableSnapshot:!0}},render:a=>{const[s,c]=o.useState(k),u=o.useCallback(()=>r=>{c(d=>d.map(m=>m.uuid===r.uuid?{...m,...r}:m))},[s]);return e.jsx(T.Provider,{value:{onRowChange:u},children:e.jsx("div",{className:t("w-full","p-xl","border-box"),style:{blockSize:300},children:e.jsx(V,{...a,rows:s,getRowId:r=>r.uuid})})})},args:{variant:"data",columns:[{field:"firstName",headerName:"First Name",renderCell:({row:a,colDef:s})=>e.jsx(w,{row:a,attr:"firstName",label:s.headerName})},{field:"lastName",headerName:"Last Name",renderCell:({row:a,colDef:s})=>e.jsx(w,{row:a,attr:"lastName",label:s.headerName})},{field:"bio",headerName:"Bio",flex:1,renderCell:({row:a,colDef:s})=>e.jsx(w,{row:a,attr:"bio",label:s.headerName})}]}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: ['[data-testid="hovered.view"]'],
      active: '[data-testid="actived.view"]',
      focusVisible: '[data-testid="focused"] > [role="button"]'
    }
  },
  render: () => <div className={classNames("flex", "border-box", "flex-col", "gap-3xl")}>
      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>InlineEdit.TextField</h2>
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
      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>InlineEdit.TextField font</h2>
      <div className={classNames("flex", "border-box", "flex-row", "gap-xl", "p-m", "items-center", "justify-start")}>
        <div className={classNames("flex", "border-box", "w-fit", "p-m")}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="custom font heading-xl" font="heading-xl" showEditIcon />
        </div>
        <div className={classNames("flex", "border-box", "w-fit", "p-m")}>
          <InlineEdit.TextField aria-label="Edit color" defaultValue="custom font script-s" font="script-s" view={({
          children
        }) => <span className={classNames("text-end", "font-script-s", "text-inverse", "bg-inverse")}>{children}</span>} showEditIcon />
        </div>
      </div>
    </div>
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: ['[data-testid="hovered.view"][role="button"]', '[data-testid="focused"] [role="button"]'],
      active: '[data-testid="actived"]',
      focusVisible: ['[data-testid="focused"] > role="button"', '[data-testid="focused.edit"] [role="combobox"]']
    }
  },
  render: () => <div className={classNames("flex", "border-box", "flex-col", "gap-3xl")}>
      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>InlineEdit.Select</h2>
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
}`,...h.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: ['[data-testid="hovered"]', '[data-testid="focused"] > button'],
      active: '[data-testid="actived"]',
      focusVisible: '[data-testid="focused"] > button'
    }
  },
  render: () => <div className={classNames("flex", "border-box", "flex-col", "gap-3xl")}>
      <h2 className={classNames("flex", "border-box", "font-heading-m", "text-default")}>InlineEdit.MultiSelect</h2>
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
}`,...E.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState(true);
    const [initialValue, setInitialValue] = useState(true);
    return <div className={classNames("flex", "border-box", "p-xl", "w-xs", "bg-weak")}>
        <InlineEdit.Primitive onCancel={() => {
        setValue(initialValue);
      }} onSave={() => {
        setInitialValue(value);
      }} view={<div className={classNames("flex", "flex-row", "gap-m", "items-center", "w-full", "text-default", "bg-default")}>
              <AiSparklesIcon className={classNames("fill-current")} />
              <div className={classNames("flex", "flex-col", "gap-m")}>
                <span className={classNames("font-label-m-emphasized", "text-default")}>{value ? "On" : "Off"}</span>
                <span className={classNames("font-label-s", "text-weak")}>AI Features</span>
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
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const _=["TextField","SelectDemo","MultiSelect","VisualTestTextField","VisualTestSelect","VisualTestMultiSelect","CustomInlineEdit","InlineEditTable"],J=Object.freeze(Object.defineProperty({__proto__:null,CustomInlineEdit:v,InlineEditTable:g,MultiSelect:p,SelectDemo:f,TextField:x,VisualTestMultiSelect:E,VisualTestSelect:h,VisualTestTextField:b,__namedExportsOrder:_,default:P},Symbol.toStringTag,{value:"Module"}));export{v as C,p as M,J as S,x as T,f as a};
