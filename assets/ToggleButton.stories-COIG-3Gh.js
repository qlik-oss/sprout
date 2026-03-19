import{i as e,n as t}from"./chunk-DseTPa7n.js";import{t as n}from"./react-sE-G6KV_.js";import{t as r}from"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as i}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t as a}from"./ButtonGroup-DHJYUsTj.js";import{t as o}from"./ToggleButton-CV6oJVWp.js";import{t as s}from"./ToggleIconButton-HxnqdKe0.js";import{Kt as c,Xt as l,Yt as u,Zt as d,et as f,hn as p,ln as m}from"./iframe-URhFfzNK.js";var h=e(n()),g={label:{control:{type:`text`}},variant:{control:{type:`select`},options:[void 0,`default`,`quiet`]},size:{control:{type:`select`},options:[void 0,`default`,`small`]},toggled:{control:{type:`boolean`},description:`Controls the toggle state. Setting this prop will make the button controlled.`,table:{type:{summary:`boolean`}}},asDropdown:{control:{type:`boolean`},description:`When true, a dropdown arrow is added to the button. This is used when the button is a dropdown trigger.`,table:{type:{summary:`boolean`}}},defaultToggled:{description:"Boolean indicating if the button should be toggled by default. Setting this prop will make the button controlled. Defaults to `false` if not set.",table:{type:{summary:`boolean`}}},onChange:{description:`Function to call when the toggle state changes. This will be called with the new toggle state as a boolean. Setting this prop will make the button controlled.`,table:{type:{summary:`function`}}}},_=t({Controlled:()=>C,Playground:()=>x,ToggleButtonGroup:()=>S,ToggleIconButtonPlayground:()=>w,VisualTest:()=>E,__namedExportsOrder:()=>D,default:()=>b}),v=i(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/ToggleButton`},x={render:e=>(0,v.jsx)(`div`,{className:r.classNames(`gap-s`),children:(0,v.jsx)(o,{...e})}),args:{label:`Label`},parameters:{chromatic:{disableSnapshot:!0}},argTypes:g},S={render:()=>{let[e,t]=(0,h.useState)(`Two`);return(0,v.jsx)(a,{children:[`One`,`Two`,`Three`].map(n=>(0,v.jsx)(o,{label:n,toggled:e===n,onChange:()=>{t(n)}},n))})},parameters:{chromatic:{disableSnapshot:!0},control:{disable:!0}}},C={render:({onChange:e})=>{let[t,n]=(0,h.useState)(!1),r=(0,h.useRef)(null);return(0,v.jsx)(o,{ref:r,label:`Controlled`,toggled:t,onChange:t=>{e&&e(t),n(t)}})},args:{onChange:y()},parameters:{chromatic:{disableSnapshot:!0}}},w={render:e=>(0,v.jsx)(`div`,{className:r.classNames(`gap-s`),children:(0,v.jsx)(s,{icon:(0,v.jsx)(d,{}),...e})}),args:{label:`Label`},argTypes:x.argTypes,parameters:{chromatic:{disableSnapshot:!0}}};function T({children:e}){return(0,v.jsx)(`h2`,{className:p(`flex`,`flex-row`,`border-box`,`font-heading-m`,`text-default`),children:e})}var E={render:()=>(0,v.jsxs)(`div`,{className:r.classNames(`flex`,`border-box`,`flex-col`,`gap-l`,`w-s`),children:[(0,v.jsx)(T,{children:`States`}),(0,v.jsxs)(`div`,{className:r.classNames(`flex`,`border-box`,`gap-s`,`w-full`,`flex-row`),children:[(0,v.jsx)(o,{label:`Default`}),(0,v.jsx)(o,{label:`Hover`,"data-testid":`hover`}),(0,v.jsx)(o,{label:`Active`,"data-testid":`active`}),(0,v.jsx)(o,{label:`Focus`,"data-testid":`focused`}),(0,v.jsx)(o,{label:`Toggle`,toggled:!0}),(0,v.jsx)(o,{label:`Dropdown`,asDropdown:!0})]}),(0,v.jsxs)(`div`,{className:r.classNames(`flex`,`border-box`,`gap-s`,`w-full`,`flex-row`),children:[(0,v.jsx)(o,{icon:(0,v.jsx)(d,{}),label:`Default`}),(0,v.jsx)(o,{icon:(0,v.jsx)(d,{}),label:`Hover`,"data-testid":`hover`}),(0,v.jsx)(o,{icon:(0,v.jsx)(d,{}),label:`Active`,"data-testid":`active`}),(0,v.jsx)(o,{icon:(0,v.jsx)(d,{}),label:`Focus`,"data-testid":`focused`}),(0,v.jsx)(o,{icon:(0,v.jsx)(d,{}),label:`Toggle`,toggled:!0}),(0,v.jsx)(o,{icon:(0,v.jsx)(d,{}),label:`Dropdown`,asDropdown:!0})]}),(0,v.jsxs)(`div`,{className:r.classNames(`flex`,`border-box`,`gap-s`,`w-full`,`flex-row`),children:[(0,v.jsx)(s,{size:`small`,icon:(0,v.jsx)(d,{height:void 0,width:void 0}),label:`Default`}),(0,v.jsx)(s,{size:`small`,icon:(0,v.jsx)(d,{height:void 0,width:void 0}),label:`Hover`,"data-testid":`hover`}),(0,v.jsx)(s,{size:`small`,icon:(0,v.jsx)(d,{height:void 0,width:void 0}),label:`Active`,"data-testid":`active`}),(0,v.jsx)(s,{size:`small`,icon:(0,v.jsx)(d,{height:void 0,width:void 0}),label:`Focus`,"data-testid":`focused`}),(0,v.jsx)(s,{size:`small`,icon:(0,v.jsx)(d,{height:void 0,width:void 0}),label:`Toggle`,toggled:!0}),(0,v.jsx)(s,{size:`small`,icon:(0,v.jsx)(d,{height:void 0,width:void 0}),label:`Dropdown`,asDropdown:!0})]}),(0,v.jsx)(T,{children:`With Badge`}),(0,v.jsxs)(`div`,{className:r.classNames(`flex`,`border-box`,`gap-s`,`w-full`,`flex-row`),children:[(0,v.jsx)(o,{label:`Default`,badge:(0,v.jsx)(f,{text:`1`,variant:`alphanumeric`})}),(0,v.jsx)(o,{label:`Hover`,"data-testid":`hover`,badge:(0,v.jsx)(f,{text:`1`,variant:`alphanumeric`})}),(0,v.jsx)(o,{label:`Active`,"data-testid":`active`,badge:(0,v.jsx)(f,{text:`1`,variant:`alphanumeric`})}),(0,v.jsx)(o,{label:`Focus`,"data-testid":`focused`,badge:(0,v.jsx)(f,{text:`1`,variant:`alphanumeric`})}),(0,v.jsx)(o,{label:`Toggle`,toggled:!0,badge:(0,v.jsx)(f,{text:`1`,variant:`alphanumeric`})}),(0,v.jsx)(o,{label:`Dropdown`,asDropdown:!0,badge:(0,v.jsx)(f,{text:`1`,variant:`alphanumeric`})})]}),(0,v.jsx)(T,{children:`Inside ButtonGroup`}),(0,v.jsxs)(a,{children:[(0,v.jsx)(o,{label:`Default`}),(0,v.jsx)(o,{label:`Hover`,"data-testid":`hover`}),(0,v.jsx)(o,{label:`Active`,"data-testid":`active`}),(0,v.jsx)(o,{label:`Focus`,"data-testid":`focused`}),(0,v.jsx)(o,{label:`Toggle`,toggled:!0}),(0,v.jsx)(o,{label:`Dropdown`,asDropdown:!0})]}),(0,v.jsx)(T,{children:`ToggleIconButton`}),(0,v.jsxs)(a,{children:[(0,v.jsx)(s,{label:`Default`,icon:(0,v.jsx)(d,{})}),(0,v.jsx)(s,{label:`Hover`,icon:(0,v.jsx)(l,{}),"data-testid":`hover`}),(0,v.jsx)(s,{label:`Active`,icon:(0,v.jsx)(u,{}),"data-testid":`active`}),(0,v.jsx)(s,{label:`Focus`,icon:(0,v.jsx)(m,{}),"data-testid":`focused`}),(0,v.jsx)(s,{label:`Toggle`,icon:(0,v.jsx)(m,{}),toggled:!0}),(0,v.jsx)(s,{label:`Dropdown`,icon:(0,v.jsx)(c,{}),toggled:!0,asDropdown:!0})]}),(0,v.jsxs)(a,{children:[(0,v.jsx)(s,{label:`Default`,badge:(0,v.jsx)(f,{text:`1`,variant:`alphanumeric`}),icon:(0,v.jsx)(d,{})}),(0,v.jsx)(s,{label:`Hover`,badge:(0,v.jsx)(f,{text:`1`,variant:`alphanumeric`}),icon:(0,v.jsx)(m,{}),"data-testid":`hover`}),(0,v.jsx)(s,{label:`Active`,badge:(0,v.jsx)(f,{text:`1`,variant:`alphanumeric`}),icon:(0,v.jsx)(u,{}),"data-testid":`active`}),(0,v.jsx)(s,{label:`Focus`,badge:(0,v.jsx)(f,{text:`1`,variant:`alphanumeric`}),icon:(0,v.jsx)(m,{}),"data-testid":`focused`}),(0,v.jsx)(s,{label:`Toggle`,badge:(0,v.jsx)(f,{text:`1`,variant:`alphanumeric`}),icon:(0,v.jsx)(c,{}),toggled:!0}),(0,v.jsx)(s,{label:`Toggle`,badge:(0,v.jsx)(f,{text:`1`,variant:`alphanumeric`}),icon:(0,v.jsx)(c,{}),asDropdown:!0})]})]}),parameters:{pseudo:{hover:`[data-testid='hover']`,active:`[data-testid='active']`,focusVisible:`[data-testid="focused"]`},control:{disable:!0}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (props: ToggleButtonProps) => <div className={sprout.classNames("gap-s")}>
      <ToggleButton {...props} />
    </div>,
  args: {
    label: "Label"
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  argTypes: ToggleButtonArgTypes
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [toggled, setToggled] = useState("Two");
    return <ButtonGroup>
        {["One", "Two", "Three"].map(label => <ToggleButton key={label} label={label} toggled={toggled === label} onChange={() => {
        setToggled(label);
      }} />)}
      </ButtonGroup>;
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    control: {
      disable: true
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: ({
    onChange
  }: Partial<ToggleButtonProps>) => {
    const [toggled, setToggled] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);
    const handleChange = (e: boolean) => {
      if (onChange) {
        onChange(e);
      }
      setToggled(e);
    };
    return <ToggleButton ref={ref} label="Controlled" toggled={toggled} onChange={handleChange} />;
  },
  args: {
    onChange: fn()
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (props: Omit<ToggleButtonProps, "icon">) => <div className={sprout.classNames("gap-s")}>
      <ToggleIconButton icon={<DeleteIcon />} {...props} />
    </div>,
  args: {
    label: "Label"
  },
  argTypes: Playground.argTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className={sprout.classNames("flex", "border-box", "flex-col", "gap-l", "w-s")}>
      <H2>States</H2>
      <div className={sprout.classNames("flex", "border-box", "gap-s", "w-full", "flex-row")}>
        <ToggleButton label="Default" />
        <ToggleButton label="Hover" data-testid="hover" />
        <ToggleButton label="Active" data-testid="active" />
        <ToggleButton label="Focus" data-testid="focused" />
        <ToggleButton label="Toggle" toggled />
        <ToggleButton label="Dropdown" asDropdown />
      </div>
      <div className={sprout.classNames("flex", "border-box", "gap-s", "w-full", "flex-row")}>
        <ToggleButton icon={<DeleteIcon />} label="Default" />
        <ToggleButton icon={<DeleteIcon />} label="Hover" data-testid="hover" />
        <ToggleButton icon={<DeleteIcon />} label="Active" data-testid="active" />
        <ToggleButton icon={<DeleteIcon />} label="Focus" data-testid="focused" />
        <ToggleButton icon={<DeleteIcon />} label="Toggle" toggled />
        <ToggleButton icon={<DeleteIcon />} label="Dropdown" asDropdown />
      </div>
      <div className={sprout.classNames("flex", "border-box", "gap-s", "w-full", "flex-row")}>
        <ToggleIconButton size="small" icon={<DeleteIcon height={undefined} width={undefined} />} label="Default" />
        <ToggleIconButton size="small" icon={<DeleteIcon height={undefined} width={undefined} />} label="Hover" data-testid="hover" />
        <ToggleIconButton size="small" icon={<DeleteIcon height={undefined} width={undefined} />} label="Active" data-testid="active" />
        <ToggleIconButton size="small" icon={<DeleteIcon height={undefined} width={undefined} />} label="Focus" data-testid="focused" />
        <ToggleIconButton size="small" icon={<DeleteIcon height={undefined} width={undefined} />} label="Toggle" toggled />
        <ToggleIconButton size="small" icon={<DeleteIcon height={undefined} width={undefined} />} label="Dropdown" asDropdown />
      </div>
      <H2>With Badge</H2>
      <div className={sprout.classNames("flex", "border-box", "gap-s", "w-full", "flex-row")}>
        <ToggleButton label="Default" badge={<Badge text="1" variant="alphanumeric" />} />
        <ToggleButton label="Hover" data-testid="hover" badge={<Badge text="1" variant="alphanumeric" />} />
        <ToggleButton label="Active" data-testid="active" badge={<Badge text="1" variant="alphanumeric" />} />
        <ToggleButton label="Focus" data-testid="focused" badge={<Badge text="1" variant="alphanumeric" />} />
        <ToggleButton label="Toggle" toggled badge={<Badge text="1" variant="alphanumeric" />} />
        <ToggleButton label="Dropdown" asDropdown badge={<Badge text="1" variant="alphanumeric" />} />
      </div>
      <H2>Inside ButtonGroup</H2>
      <ButtonGroup>
        <ToggleButton label="Default" />
        <ToggleButton label="Hover" data-testid="hover" />
        <ToggleButton label="Active" data-testid="active" />
        <ToggleButton label="Focus" data-testid="focused" />
        <ToggleButton label="Toggle" toggled />
        <ToggleButton label="Dropdown" asDropdown />
      </ButtonGroup>
      <H2>ToggleIconButton</H2>
      <ButtonGroup>
        <ToggleIconButton label="Default" icon={<DeleteIcon />} />
        <ToggleIconButton label="Hover" icon={<DocumentationIcon />} data-testid="hover" />
        <ToggleIconButton label="Active" icon={<EditIcon />} data-testid="active" />
        <ToggleIconButton label="Focus" icon={<BookmarkIcon />} data-testid="focused" />
        <ToggleIconButton label="Toggle" icon={<BookmarkIcon />} toggled />
        <ToggleIconButton label="Dropdown" icon={<FavoritedIcon />} toggled asDropdown />
      </ButtonGroup>
      <ButtonGroup>
        <ToggleIconButton label="Default" badge={<Badge text="1" variant="alphanumeric" />} icon={<DeleteIcon />} />
        <ToggleIconButton label="Hover" badge={<Badge text="1" variant="alphanumeric" />} icon={<BookmarkIcon />} data-testid="hover" />
        <ToggleIconButton label="Active" badge={<Badge text="1" variant="alphanumeric" />} icon={<EditIcon />} data-testid="active" />
        <ToggleIconButton label="Focus" badge={<Badge text="1" variant="alphanumeric" />} icon={<BookmarkIcon />} data-testid="focused" />
        <ToggleIconButton label="Toggle" badge={<Badge text="1" variant="alphanumeric" />} icon={<FavoritedIcon />} toggled />
        <ToggleIconButton label="Toggle" badge={<Badge text="1" variant="alphanumeric" />} icon={<FavoritedIcon />} asDropdown />
      </ButtonGroup>
    </div>,
  parameters: {
    pseudo: {
      hover: "[data-testid='hover']",
      active: "[data-testid='active']",
      focusVisible: '[data-testid="focused"]'
    },
    control: {
      disable: true
    }
  }
}`,...E.parameters?.docs?.source}}};var D=[`Playground`,`ToggleButtonGroup`,`Controlled`,`ToggleIconButtonPlayground`,`VisualTest`];export{C as Controlled,x as Playground,S as ToggleButtonGroup,w as ToggleIconButtonPlayground,E as VisualTest,D as __namedExportsOrder,b as default,_ as t};