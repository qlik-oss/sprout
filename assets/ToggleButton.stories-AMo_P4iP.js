import{r as v,j as e}from"./iframe-Bp0nu8X6.js";import{s as n}from"./sprout-rpr_484f.js";import{F as p}from"./bookmark-BjcmHdPC.js";import{F as a}from"./delete-CSyzwOk8.js";import{F as w}from"./documentation-6ghMNW6p.js";import{F as T}from"./edit-Dwo3NC30.js";import{F as h}from"./favorited-xiONJzzc.js";import{T as t}from"./ToggleButton-FxIIWV9x.js";import{B as x}from"./ButtonGroup-CpiqZNxt.js";import{T as o}from"./ToggleIconButton-XFKlKW_r.js";import{B as l}from"./Badge-Br2oOa7d.js";import{c as D}from"./classNames-BUd7eP-S.js";const I={label:{control:{type:"text"}},variant:{control:{type:"select"},options:[void 0,"default","quiet"]},size:{control:{type:"select"},options:[void 0,"default","small"]},toggled:{control:{type:"boolean"},description:"Controls the toggle state. Setting this prop will make the button controlled.",table:{type:{summary:"boolean"}}},asDropdown:{control:{type:"boolean"},description:"When true, a dropdown arrow is added to the button. This is used when the button is a dropdown trigger.",table:{type:{summary:"boolean"}}},defaultToggled:{description:"Boolean indicating if the button should be toggled by default. Setting this prop will make the button controlled. Defaults to `false` if not set.",table:{type:{summary:"boolean"}}},onChange:{description:"Function to call when the toggle state changes. This will be called with the new toggle state as a boolean. Setting this prop will make the button controlled.",table:{type:{summary:"function"}}}},{fn:y}=__STORYBOOK_MODULE_TEST__,N={title:"Components/ToggleButton"},d={render:s=>e.jsx("div",{className:n.classNames("gap-s"),children:e.jsx(t,{...s})}),args:{label:"Label"},parameters:{chromatic:{disableSnapshot:!0}},argTypes:I},i={render:()=>{const[s,m]=v.useState("Two");return e.jsx(x,{children:["One","Two","Three"].map(r=>e.jsx(t,{label:r,toggled:s===r,onChange:()=>{m(r)}},r))})},parameters:{chromatic:{disableSnapshot:!0},control:{disable:!0}}},g={render:({onChange:s})=>{const[m,r]=v.useState(!1),j=v.useRef(null),B=f=>{s&&s(f),r(f)};return e.jsx(t,{ref:j,label:"Controlled",toggled:m,onChange:B})},args:{onChange:y()},parameters:{chromatic:{disableSnapshot:!0}}},c={render:s=>e.jsx("div",{className:n.classNames("gap-s"),children:e.jsx(o,{icon:e.jsx(a,{}),...s})}),args:{label:"Label"},argTypes:d.argTypes,parameters:{chromatic:{disableSnapshot:!0}}};function b({children:s}){return e.jsx("h2",{className:D("flex","flex-row","border-box","font-heading-m","text-default"),children:s})}const u={render:()=>e.jsxs("div",{className:n.classNames("flex","border-box","flex-col","gap-l","w-s"),children:[e.jsx(b,{children:"States"}),e.jsxs("div",{className:n.classNames("flex","border-box","gap-s","w-full","flex-row"),children:[e.jsx(t,{label:"Default"}),e.jsx(t,{label:"Hover","data-testid":"hover"}),e.jsx(t,{label:"Active","data-testid":"active"}),e.jsx(t,{label:"Focus","data-testid":"focused"}),e.jsx(t,{label:"Toggle",toggled:!0}),e.jsx(t,{label:"Dropdown",asDropdown:!0})]}),e.jsxs("div",{className:n.classNames("flex","border-box","gap-s","w-full","flex-row"),children:[e.jsx(t,{icon:e.jsx(a,{}),label:"Default"}),e.jsx(t,{icon:e.jsx(a,{}),label:"Hover","data-testid":"hover"}),e.jsx(t,{icon:e.jsx(a,{}),label:"Active","data-testid":"active"}),e.jsx(t,{icon:e.jsx(a,{}),label:"Focus","data-testid":"focused"}),e.jsx(t,{icon:e.jsx(a,{}),label:"Toggle",toggled:!0}),e.jsx(t,{icon:e.jsx(a,{}),label:"Dropdown",asDropdown:!0})]}),e.jsxs("div",{className:n.classNames("flex","border-box","gap-s","w-full","flex-row"),children:[e.jsx(o,{size:"small",icon:e.jsx(a,{height:void 0,width:void 0}),label:"Default"}),e.jsx(o,{size:"small",icon:e.jsx(a,{height:void 0,width:void 0}),label:"Hover","data-testid":"hover"}),e.jsx(o,{size:"small",icon:e.jsx(a,{height:void 0,width:void 0}),label:"Active","data-testid":"active"}),e.jsx(o,{size:"small",icon:e.jsx(a,{height:void 0,width:void 0}),label:"Focus","data-testid":"focused"}),e.jsx(o,{size:"small",icon:e.jsx(a,{height:void 0,width:void 0}),label:"Toggle",toggled:!0}),e.jsx(o,{size:"small",icon:e.jsx(a,{height:void 0,width:void 0}),label:"Dropdown",asDropdown:!0})]}),e.jsx(b,{children:"With Badge"}),e.jsxs("div",{className:n.classNames("flex","border-box","gap-s","w-full","flex-row"),children:[e.jsx(t,{label:"Default",badge:e.jsx(l,{text:"1",variant:"alphanumeric"})}),e.jsx(t,{label:"Hover","data-testid":"hover",badge:e.jsx(l,{text:"1",variant:"alphanumeric"})}),e.jsx(t,{label:"Active","data-testid":"active",badge:e.jsx(l,{text:"1",variant:"alphanumeric"})}),e.jsx(t,{label:"Focus","data-testid":"focused",badge:e.jsx(l,{text:"1",variant:"alphanumeric"})}),e.jsx(t,{label:"Toggle",toggled:!0,badge:e.jsx(l,{text:"1",variant:"alphanumeric"})}),e.jsx(t,{label:"Dropdown",asDropdown:!0,badge:e.jsx(l,{text:"1",variant:"alphanumeric"})})]}),e.jsx(b,{children:"Inside ButtonGroup"}),e.jsxs(x,{children:[e.jsx(t,{label:"Default"}),e.jsx(t,{label:"Hover","data-testid":"hover"}),e.jsx(t,{label:"Active","data-testid":"active"}),e.jsx(t,{label:"Focus","data-testid":"focused"}),e.jsx(t,{label:"Toggle",toggled:!0}),e.jsx(t,{label:"Dropdown",asDropdown:!0})]}),e.jsx(b,{children:"ToggleIconButton"}),e.jsxs(x,{children:[e.jsx(o,{label:"Default",icon:e.jsx(a,{})}),e.jsx(o,{label:"Hover",icon:e.jsx(w,{}),"data-testid":"hover"}),e.jsx(o,{label:"Active",icon:e.jsx(T,{}),"data-testid":"active"}),e.jsx(o,{label:"Focus",icon:e.jsx(p,{}),"data-testid":"focused"}),e.jsx(o,{label:"Toggle",icon:e.jsx(p,{}),toggled:!0}),e.jsx(o,{label:"Dropdown",icon:e.jsx(h,{}),toggled:!0,asDropdown:!0})]}),e.jsxs(x,{children:[e.jsx(o,{label:"Default",badge:e.jsx(l,{text:"1",variant:"alphanumeric"}),icon:e.jsx(a,{})}),e.jsx(o,{label:"Hover",badge:e.jsx(l,{text:"1",variant:"alphanumeric"}),icon:e.jsx(p,{}),"data-testid":"hover"}),e.jsx(o,{label:"Active",badge:e.jsx(l,{text:"1",variant:"alphanumeric"}),icon:e.jsx(T,{}),"data-testid":"active"}),e.jsx(o,{label:"Focus",badge:e.jsx(l,{text:"1",variant:"alphanumeric"}),icon:e.jsx(p,{}),"data-testid":"focused"}),e.jsx(o,{label:"Toggle",badge:e.jsx(l,{text:"1",variant:"alphanumeric"}),icon:e.jsx(h,{}),toggled:!0}),e.jsx(o,{label:"Toggle",badge:e.jsx(l,{text:"1",variant:"alphanumeric"}),icon:e.jsx(h,{}),asDropdown:!0})]})]}),parameters:{pseudo:{hover:"[data-testid='hover']",active:"[data-testid='active']",focusVisible:'[data-testid="focused"]'},control:{disable:!0}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const F=["Playground","ToggleButtonGroup","Controlled","ToggleIconButtonPlayground","VisualTest"],L=Object.freeze(Object.defineProperty({__proto__:null,Controlled:g,Playground:d,ToggleButtonGroup:i,ToggleIconButtonPlayground:c,VisualTest:u,__namedExportsOrder:F,default:N},Symbol.toStringTag,{value:"Module"}));export{d as P,L as S,i as T};
