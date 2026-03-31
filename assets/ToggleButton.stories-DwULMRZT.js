import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{Dt as r,Gn as i,In as a,Kn as o,Ln as s,Mn as c,S as l,_n as u,bn as d,ir as f,jt as p,lt as m,v as h,x as g,xn as _,yn as v}from"./iframe-B0xl5hqz.js";var y,b=t((()=>{y={label:{control:{type:`text`}},variant:{control:{type:`select`},options:[void 0,`default`,`quiet`]},size:{control:{type:`select`},options:[void 0,`default`,`small`]},toggled:{control:{type:`boolean`},description:`Controls the toggle state. Setting this prop will make the button controlled.`,table:{type:{summary:`boolean`}}},asDropdown:{control:{type:`boolean`},description:`When true, a dropdown arrow is added to the button. This is used when the button is a dropdown trigger.`,table:{type:{summary:`boolean`}}},defaultToggled:{description:"Boolean indicating if the button should be toggled by default. Setting this prop will make the button controlled. Defaults to `false` if not set.",table:{type:{summary:`boolean`}}},onChange:{description:`Function to call when the toggle state changes. This will be called with the new toggle state as a boolean. Setting this prop will make the button controlled.`,table:{type:{summary:`function`}}}}})),x=n({Controlled:()=>k,Playground:()=>D,ToggleButtonGroup:()=>O,ToggleIconButtonPlayground:()=>A,VisualTest:()=>j,__namedExportsOrder:()=>M,default:()=>E});function S({children:e}){return(0,w.jsx)(`h2`,{className:a(`flex`,`flex-row`,`border-box`,`font-heading-m`,`text-default`),children:e})}var C,w,T,E,D,O,k,A,j,M,N=t((()=>{C=e(f()),i(),h(),p(),b(),w=s(),{fn:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/ToggleButton`},D={render:e=>(0,w.jsx)(`div`,{className:o.classNames(`gap-s`),children:(0,w.jsx)(l,{...e})}),args:{label:`Label`},parameters:{chromatic:{disableSnapshot:!0}},argTypes:y},O={render:()=>{let[e,t]=(0,C.useState)(`Two`);return(0,w.jsx)(m,{children:[`One`,`Two`,`Three`].map(n=>(0,w.jsx)(l,{label:n,toggled:e===n,onChange:()=>{t(n)}},n))})},parameters:{chromatic:{disableSnapshot:!0},control:{disable:!0}}},k={render:({onChange:e})=>{let[t,n]=(0,C.useState)(!1),r=(0,C.useRef)(null);return(0,w.jsx)(l,{ref:r,label:`Controlled`,toggled:t,onChange:t=>{e&&e(t),n(t)}})},args:{onChange:T()},parameters:{chromatic:{disableSnapshot:!0}}},A={render:e=>(0,w.jsx)(`div`,{className:o.classNames(`gap-s`),children:(0,w.jsx)(g,{icon:(0,w.jsx)(_,{}),...e})}),args:{label:`Label`},argTypes:D.argTypes,parameters:{chromatic:{disableSnapshot:!0}}},j={render:()=>(0,w.jsxs)(`div`,{className:o.classNames(`flex`,`border-box`,`flex-col`,`gap-l`,`w-s`),children:[(0,w.jsx)(S,{children:`States`}),(0,w.jsxs)(`div`,{className:o.classNames(`flex`,`border-box`,`gap-s`,`w-full`,`flex-row`),children:[(0,w.jsx)(l,{label:`Default`}),(0,w.jsx)(l,{label:`Hover`,"data-testid":`hover`}),(0,w.jsx)(l,{label:`Active`,"data-testid":`active`}),(0,w.jsx)(l,{label:`Focus`,"data-testid":`focused`}),(0,w.jsx)(l,{label:`Toggle`,toggled:!0}),(0,w.jsx)(l,{label:`Dropdown`,asDropdown:!0})]}),(0,w.jsxs)(`div`,{className:o.classNames(`flex`,`border-box`,`gap-s`,`w-full`,`flex-row`),children:[(0,w.jsx)(l,{icon:(0,w.jsx)(_,{}),label:`Default`}),(0,w.jsx)(l,{icon:(0,w.jsx)(_,{}),label:`Hover`,"data-testid":`hover`}),(0,w.jsx)(l,{icon:(0,w.jsx)(_,{}),label:`Active`,"data-testid":`active`}),(0,w.jsx)(l,{icon:(0,w.jsx)(_,{}),label:`Focus`,"data-testid":`focused`}),(0,w.jsx)(l,{icon:(0,w.jsx)(_,{}),label:`Toggle`,toggled:!0}),(0,w.jsx)(l,{icon:(0,w.jsx)(_,{}),label:`Dropdown`,asDropdown:!0})]}),(0,w.jsxs)(`div`,{className:o.classNames(`flex`,`border-box`,`gap-s`,`w-full`,`flex-row`),children:[(0,w.jsx)(g,{size:`small`,icon:(0,w.jsx)(_,{height:void 0,width:void 0}),label:`Default`}),(0,w.jsx)(g,{size:`small`,icon:(0,w.jsx)(_,{height:void 0,width:void 0}),label:`Hover`,"data-testid":`hover`}),(0,w.jsx)(g,{size:`small`,icon:(0,w.jsx)(_,{height:void 0,width:void 0}),label:`Active`,"data-testid":`active`}),(0,w.jsx)(g,{size:`small`,icon:(0,w.jsx)(_,{height:void 0,width:void 0}),label:`Focus`,"data-testid":`focused`}),(0,w.jsx)(g,{size:`small`,icon:(0,w.jsx)(_,{height:void 0,width:void 0}),label:`Toggle`,toggled:!0}),(0,w.jsx)(g,{size:`small`,icon:(0,w.jsx)(_,{height:void 0,width:void 0}),label:`Dropdown`,asDropdown:!0})]}),(0,w.jsx)(S,{children:`With Badge`}),(0,w.jsxs)(`div`,{className:o.classNames(`flex`,`border-box`,`gap-s`,`w-full`,`flex-row`),children:[(0,w.jsx)(l,{label:`Default`,badge:(0,w.jsx)(r,{text:`1`,variant:`alphanumeric`})}),(0,w.jsx)(l,{label:`Hover`,"data-testid":`hover`,badge:(0,w.jsx)(r,{text:`1`,variant:`alphanumeric`})}),(0,w.jsx)(l,{label:`Active`,"data-testid":`active`,badge:(0,w.jsx)(r,{text:`1`,variant:`alphanumeric`})}),(0,w.jsx)(l,{label:`Focus`,"data-testid":`focused`,badge:(0,w.jsx)(r,{text:`1`,variant:`alphanumeric`})}),(0,w.jsx)(l,{label:`Toggle`,toggled:!0,badge:(0,w.jsx)(r,{text:`1`,variant:`alphanumeric`})}),(0,w.jsx)(l,{label:`Dropdown`,asDropdown:!0,badge:(0,w.jsx)(r,{text:`1`,variant:`alphanumeric`})})]}),(0,w.jsx)(S,{children:`Inside ButtonGroup`}),(0,w.jsxs)(m,{children:[(0,w.jsx)(l,{label:`Default`}),(0,w.jsx)(l,{label:`Hover`,"data-testid":`hover`}),(0,w.jsx)(l,{label:`Active`,"data-testid":`active`}),(0,w.jsx)(l,{label:`Focus`,"data-testid":`focused`}),(0,w.jsx)(l,{label:`Toggle`,toggled:!0}),(0,w.jsx)(l,{label:`Dropdown`,asDropdown:!0})]}),(0,w.jsx)(S,{children:`ToggleIconButton`}),(0,w.jsxs)(m,{children:[(0,w.jsx)(g,{label:`Default`,icon:(0,w.jsx)(_,{})}),(0,w.jsx)(g,{label:`Hover`,icon:(0,w.jsx)(d,{}),"data-testid":`hover`}),(0,w.jsx)(g,{label:`Active`,icon:(0,w.jsx)(v,{}),"data-testid":`active`}),(0,w.jsx)(g,{label:`Focus`,icon:(0,w.jsx)(c,{}),"data-testid":`focused`}),(0,w.jsx)(g,{label:`Toggle`,icon:(0,w.jsx)(c,{}),toggled:!0}),(0,w.jsx)(g,{label:`Dropdown`,icon:(0,w.jsx)(u,{}),toggled:!0,asDropdown:!0})]}),(0,w.jsxs)(m,{children:[(0,w.jsx)(g,{label:`Default`,badge:(0,w.jsx)(r,{text:`1`,variant:`alphanumeric`}),icon:(0,w.jsx)(_,{})}),(0,w.jsx)(g,{label:`Hover`,badge:(0,w.jsx)(r,{text:`1`,variant:`alphanumeric`}),icon:(0,w.jsx)(c,{}),"data-testid":`hover`}),(0,w.jsx)(g,{label:`Active`,badge:(0,w.jsx)(r,{text:`1`,variant:`alphanumeric`}),icon:(0,w.jsx)(v,{}),"data-testid":`active`}),(0,w.jsx)(g,{label:`Focus`,badge:(0,w.jsx)(r,{text:`1`,variant:`alphanumeric`}),icon:(0,w.jsx)(c,{}),"data-testid":`focused`}),(0,w.jsx)(g,{label:`Toggle`,badge:(0,w.jsx)(r,{text:`1`,variant:`alphanumeric`}),icon:(0,w.jsx)(u,{}),toggled:!0}),(0,w.jsx)(g,{label:`Toggle`,badge:(0,w.jsx)(r,{text:`1`,variant:`alphanumeric`}),icon:(0,w.jsx)(u,{}),asDropdown:!0})]})]}),parameters:{pseudo:{hover:`[data-testid='hover']`,active:`[data-testid='active']`,focusVisible:`[data-testid="focused"]`},control:{disable:!0}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`Playground`,`ToggleButtonGroup`,`Controlled`,`ToggleIconButtonPlayground`,`VisualTest`]}));N();export{k as Controlled,D as Playground,O as ToggleButtonGroup,A as ToggleIconButtonPlayground,j as VisualTest,M as __namedExportsOrder,E as default,N as n,x as t};