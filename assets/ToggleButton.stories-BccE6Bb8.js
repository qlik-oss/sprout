import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./react-a45N5K9M.js";import{n as i,t as a}from"./sprout-CTw7vb1V.js";import{t as o}from"./jsx-runtime-BqsN2jGA.js";import{Ci as s,M as c,O as l,P as u,Ti as d,Vn as f,_i as p,qi as m,qn as h,sn as g,ta as _,xi as v}from"./iframe-UwarwtgL.js";var y,b=t((()=>{y={label:{control:{type:`text`}},variant:{control:{type:`select`},options:[void 0,`default`,`quiet`]},size:{control:{type:`select`},options:[void 0,`default`,`small`]},toggled:{control:{type:`boolean`},description:`Controls the toggle state. Setting this prop will make the button controlled.`,table:{type:{summary:`boolean`}}},asDropdown:{control:{type:`boolean`},description:`When true, a dropdown arrow is added to the button. This is used when the button is a dropdown trigger.`,table:{type:{summary:`boolean`}}},defaultToggled:{description:"Boolean indicating if the button should be toggled by default. Setting this prop will make the button controlled. Defaults to `false` if not set.",table:{type:{summary:`boolean`}}},onChange:{description:`Function to call when the toggle state changes. This will be called with the new toggle state as a boolean. Setting this prop will make the button controlled.`,table:{type:{summary:`function`}}}}})),x=e({Controlled:()=>k,Playground:()=>D,ToggleButtonGroup:()=>O,ToggleIconButtonPlayground:()=>A,VisualTest:()=>j,__namedExportsOrder:()=>M,default:()=>E});function S({children:e}){return(0,w.jsx)(`h2`,{className:_(`flex`,`flex-row`,`border-box`,`font-heading-m`,`text-default`),children:e})}var C,w,T,E,D,O,k,A,j,M,N=t((()=>{C=n(r()),a(),l(),h(),b(),w=o(),{fn:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/ToggleButton`},D={render:e=>(0,w.jsx)(`div`,{className:i.classNames(`gap-s`),children:(0,w.jsx)(u,{...e})}),args:{label:`Label`},parameters:{chromatic:{disableSnapshot:!0}},argTypes:y},O={render:()=>{let[e,t]=(0,C.useState)(`Two`);return(0,w.jsx)(g,{children:[`One`,`Two`,`Three`].map(n=>(0,w.jsx)(u,{label:n,toggled:e===n,onChange:()=>{t(n)}},n))})},parameters:{chromatic:{disableSnapshot:!0},control:{disable:!0}}},k={render:({onChange:e})=>{let[t,n]=(0,C.useState)(!1),r=(0,C.useRef)(null);return(0,w.jsx)(u,{ref:r,label:`Controlled`,toggled:t,onChange:t=>{e&&e(t),n(t)}})},args:{onChange:T()},parameters:{chromatic:{disableSnapshot:!0}}},A={render:e=>(0,w.jsx)(`div`,{className:i.classNames(`gap-s`),children:(0,w.jsx)(c,{icon:(0,w.jsx)(d,{}),...e})}),args:{label:`Label`},argTypes:D.argTypes,parameters:{chromatic:{disableSnapshot:!0}}},j={render:()=>(0,w.jsxs)(`div`,{className:i.classNames(`flex`,`border-box`,`flex-col`,`gap-l`,`w-s`),children:[(0,w.jsx)(S,{children:`States`}),(0,w.jsxs)(`div`,{className:i.classNames(`flex`,`border-box`,`gap-s`,`w-full`,`flex-row`),children:[(0,w.jsx)(u,{label:`Default`}),(0,w.jsx)(u,{label:`Hover`,"data-testid":`hover`}),(0,w.jsx)(u,{label:`Active`,"data-testid":`active`}),(0,w.jsx)(u,{label:`Focus`,"data-testid":`focused`}),(0,w.jsx)(u,{label:`Toggle`,toggled:!0}),(0,w.jsx)(u,{label:`Dropdown`,asDropdown:!0})]}),(0,w.jsxs)(`div`,{className:i.classNames(`flex`,`border-box`,`gap-s`,`w-full`,`flex-row`),children:[(0,w.jsx)(u,{icon:(0,w.jsx)(d,{}),label:`Default`}),(0,w.jsx)(u,{icon:(0,w.jsx)(d,{}),label:`Hover`,"data-testid":`hover`}),(0,w.jsx)(u,{icon:(0,w.jsx)(d,{}),label:`Active`,"data-testid":`active`}),(0,w.jsx)(u,{icon:(0,w.jsx)(d,{}),label:`Focus`,"data-testid":`focused`}),(0,w.jsx)(u,{icon:(0,w.jsx)(d,{}),label:`Toggle`,toggled:!0}),(0,w.jsx)(u,{icon:(0,w.jsx)(d,{}),label:`Dropdown`,asDropdown:!0})]}),(0,w.jsxs)(`div`,{className:i.classNames(`flex`,`border-box`,`gap-s`,`w-full`,`flex-row`),children:[(0,w.jsx)(c,{size:`small`,icon:(0,w.jsx)(d,{height:void 0,width:void 0}),label:`Default`}),(0,w.jsx)(c,{size:`small`,icon:(0,w.jsx)(d,{height:void 0,width:void 0}),label:`Hover`,"data-testid":`hover`}),(0,w.jsx)(c,{size:`small`,icon:(0,w.jsx)(d,{height:void 0,width:void 0}),label:`Active`,"data-testid":`active`}),(0,w.jsx)(c,{size:`small`,icon:(0,w.jsx)(d,{height:void 0,width:void 0}),label:`Focus`,"data-testid":`focused`}),(0,w.jsx)(c,{size:`small`,icon:(0,w.jsx)(d,{height:void 0,width:void 0}),label:`Toggle`,toggled:!0}),(0,w.jsx)(c,{size:`small`,icon:(0,w.jsx)(d,{height:void 0,width:void 0}),label:`Dropdown`,asDropdown:!0})]}),(0,w.jsx)(S,{children:`With Badge`}),(0,w.jsxs)(`div`,{className:i.classNames(`flex`,`border-box`,`gap-s`,`w-full`,`flex-row`),children:[(0,w.jsx)(u,{label:`Default`,badge:(0,w.jsx)(f,{text:`1`,variant:`alphanumeric`})}),(0,w.jsx)(u,{label:`Hover`,"data-testid":`hover`,badge:(0,w.jsx)(f,{text:`1`,variant:`alphanumeric`})}),(0,w.jsx)(u,{label:`Active`,"data-testid":`active`,badge:(0,w.jsx)(f,{text:`1`,variant:`alphanumeric`})}),(0,w.jsx)(u,{label:`Focus`,"data-testid":`focused`,badge:(0,w.jsx)(f,{text:`1`,variant:`alphanumeric`})}),(0,w.jsx)(u,{label:`Toggle`,toggled:!0,badge:(0,w.jsx)(f,{text:`1`,variant:`alphanumeric`})}),(0,w.jsx)(u,{label:`Dropdown`,asDropdown:!0,badge:(0,w.jsx)(f,{text:`1`,variant:`alphanumeric`})})]}),(0,w.jsx)(S,{children:`Inside ButtonGroup`}),(0,w.jsxs)(g,{children:[(0,w.jsx)(u,{label:`Default`}),(0,w.jsx)(u,{label:`Hover`,"data-testid":`hover`}),(0,w.jsx)(u,{label:`Active`,"data-testid":`active`}),(0,w.jsx)(u,{label:`Focus`,"data-testid":`focused`}),(0,w.jsx)(u,{label:`Toggle`,toggled:!0}),(0,w.jsx)(u,{label:`Dropdown`,asDropdown:!0})]}),(0,w.jsx)(S,{children:`ToggleIconButton`}),(0,w.jsxs)(g,{children:[(0,w.jsx)(c,{label:`Default`,icon:(0,w.jsx)(d,{})}),(0,w.jsx)(c,{label:`Hover`,icon:(0,w.jsx)(s,{}),"data-testid":`hover`}),(0,w.jsx)(c,{label:`Active`,icon:(0,w.jsx)(v,{}),"data-testid":`active`}),(0,w.jsx)(c,{label:`Focus`,icon:(0,w.jsx)(m,{}),"data-testid":`focused`}),(0,w.jsx)(c,{label:`Toggle`,icon:(0,w.jsx)(m,{}),toggled:!0}),(0,w.jsx)(c,{label:`Dropdown`,icon:(0,w.jsx)(p,{}),toggled:!0,asDropdown:!0})]}),(0,w.jsxs)(g,{children:[(0,w.jsx)(c,{label:`Default`,badge:(0,w.jsx)(f,{text:`1`,variant:`alphanumeric`}),icon:(0,w.jsx)(d,{})}),(0,w.jsx)(c,{label:`Hover`,badge:(0,w.jsx)(f,{text:`1`,variant:`alphanumeric`}),icon:(0,w.jsx)(m,{}),"data-testid":`hover`}),(0,w.jsx)(c,{label:`Active`,badge:(0,w.jsx)(f,{text:`1`,variant:`alphanumeric`}),icon:(0,w.jsx)(v,{}),"data-testid":`active`}),(0,w.jsx)(c,{label:`Focus`,badge:(0,w.jsx)(f,{text:`1`,variant:`alphanumeric`}),icon:(0,w.jsx)(m,{}),"data-testid":`focused`}),(0,w.jsx)(c,{label:`Toggle`,badge:(0,w.jsx)(f,{text:`1`,variant:`alphanumeric`}),icon:(0,w.jsx)(p,{}),toggled:!0}),(0,w.jsx)(c,{label:`Toggle`,badge:(0,w.jsx)(f,{text:`1`,variant:`alphanumeric`}),icon:(0,w.jsx)(p,{}),asDropdown:!0})]})]}),parameters:{pseudo:{hover:`[data-testid='hover']`,active:`[data-testid='active']`,focusVisible:`[data-testid="focused"]`},control:{disable:!0}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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