import{j as e,r as p}from"./iframe-itHhOQJ8.js";import{F as M,a as f}from"./Person-CY2HVuRl.js";import{F as h}from"./Delete-BVSKNF4j.js";import{F as I}from"./Edit-C4Gy6c5s.js";import{L as C,C as w}from"./icons-CitEqhfm.js";import{M as l}from"./Menu-BI017uJL.js";import{B as c}from"./Button-D1L5V1zp.js";import{c as o}from"./classNames-8u_YGv6N.js";const{fn:_}=__STORYBOOK_MODULE_TEST__,S={title:"Components/Menu",component:l.Trigger},b={chromatic:{disableSnapshot:!0}},s={render:()=>e.jsx(l.Trigger,{menu:e.jsxs(e.Fragment,{children:[e.jsx(l.GroupLabel,{label:"User"}),e.jsx(l.Item,{icon:e.jsx(M,{}),label:"Profile",disabled:!0}),e.jsx(l.Item,{icon:e.jsx(C,{}),label:"Logout"}),e.jsx(l.Item,{icon:null,label:"Reload"}),e.jsx(l.Item,{icon:null,label:"Share"}),e.jsx(l.Sub,{icon:e.jsx(w,{}),label:"Settings",menu:e.jsxs(e.Fragment,{children:[e.jsx(l.Item,{label:"Text"}),e.jsx(l.Item,{label:"Video"}),e.jsx(l.Sub,{label:"Image",menu:e.jsxs(e.Fragment,{children:[e.jsx(l.Item,{label:".png"}),e.jsx(l.Item,{label:".jpg"}),e.jsx(l.Item,{label:".svg"}),e.jsx(l.Item,{label:".gif"})]})})]})}),e.jsx(l.Sub,{icon:e.jsx(f,{}),label:"More options",menu:e.jsxs(e.Fragment,{children:[e.jsx(l.Item,{label:"Reload"}),e.jsx(l.Item,{label:"Schedule"}),e.jsx(l.Item,{label:"History"})]})}),e.jsx(l.Divider,{}),e.jsx(l.Item,{icon:e.jsx(I,{}),label:"Edit",description:"Don’t remember what we said about overflow, but this would be it.",valueLabel:"⌘ E"}),e.jsx(l.Item,{icon:e.jsx(h,{}),label:"Delete"}),e.jsx(l.Divider,{}),e.jsx(l.Item,{icon:null,label:"Cut",valueLabel:"⌘ X"}),e.jsx(l.Item,{icon:null,label:"Copy",valueLabel:"⌘ C"}),e.jsx(l.Item,{icon:null,label:"Paste",disabled:!0,valueLabel:"⌘ V"})]}),children:e.jsx(c,{label:"Open Menu"})}),parameters:{...b}},r={render:()=>e.jsx(l.Trigger,{defaultOpen:!0,menu:e.jsxs(e.Fragment,{children:[e.jsx(l.Item,{label:"Bold",selectable:!0}),e.jsx(l.Item,{label:"Italic",selectable:!0,selected:!0}),e.jsx(l.Item,{label:"Underline",selectable:!0}),e.jsx(l.Divider,{}),e.jsx(l.Item,{label:"Small",selectable:!0}),e.jsx(l.Item,{label:"Medium",selectable:!0}),e.jsx(l.Item,{label:"Large",selectable:!0})]}),children:e.jsx(c,{label:"Open Menu"})}),parameters:{...b}},i={render:()=>{const[a,d]=p.useState(null),[x,m]=p.useState(null),j=!!x,v=t=>{m(t.currentTarget)},g=t=>{t.preventDefault(),d(t)},n=()=>{d(null),m(null)};return e.jsxs("div",{className:o("flex","flex-row","w-full"),onContextMenu:g,style:{cursor:"context-menu"},children:[e.jsxs("div",{className:o("flex","flex-col","p-m","w-full","border-default"),"data-testid":"contextual",children:[e.jsx("h1",{className:o("flex","flex-row","border-box","font-heading-m","text-default"),children:"Contextual Menu demo"}),e.jsx("p",{className:o("flex","flex-row","border-box","font-body-m","text-default"),children:"This a paragraph with a bit of text."}),e.jsx(c,{label:"Menu",onClick:v})]}),e.jsx(l.Contextual,{minWidth:"xxs",menu:e.jsxs(e.Fragment,{children:[e.jsx(l.Item,{onClick:n,label:"Copy"}),e.jsx(l.Item,{onClick:n,label:"Print"}),e.jsx(l.Item,{onClick:n,label:"Highlight"}),e.jsx(l.Item,{onClick:n,label:"Email"})]}),open:!!a,onOpenChange:t=>{t||d(null)},anchorPosition:a?{left:a.clientX,top:a.clientY}:void 0}),e.jsx(l.Trigger,{anchorEl:x||void 0,open:j,onOpenChange:t=>{t||m(null)},menu:e.jsxs(e.Fragment,{children:[e.jsx(l.Item,{onClick:n,label:"Copy"}),e.jsx(l.Item,{onClick:n,label:"Print"}),e.jsx(l.Item,{onClick:n,label:"Highlight"}),e.jsx(l.Item,{onClick:n,label:"Email"})]})})]})},parameters:{...b,controls:{disable:!0}}},u={render:a=>e.jsx("div",{className:o("flex","flex-row","items-start"),style:{blockSize:"650px",inlineSize:"300px"},children:e.jsx(l.Trigger,{...a,menu:e.jsxs(e.Fragment,{children:[e.jsx(l.GroupLabel,{label:"Menu.GroupLabel"}),e.jsx(l.Item,{icon:null,label:"Default"}),e.jsx(l.Divider,{}),e.jsx(l.Item,{icon:null,label:"Hover","data-testid":"hover"}),e.jsx(l.Divider,{}),e.jsx(l.Item,{icon:null,label:"Active","data-testid":"active"}),e.jsx(l.Divider,{}),e.jsx(l.Item,{icon:null,label:"Focus","data-testid":"focus"}),e.jsx(l.Divider,{}),e.jsx(l.Item,{icon:e.jsx(M,{}),label:"Disabled",disabled:!0}),e.jsx(l.Divider,{}),e.jsx(l.Item,{icon:e.jsx(I,{}),label:"Edit with a super long menu too so it should also overflow",description:"Don’t remember what we said about overflow, but this would be it.",valueLabel:"⌘ E",selectable:!0,selected:!0}),e.jsx(l.Item,{icon:null,label:"An_too_long_label_with_very_long_word_that_goes_beyond_the_parent_size_and_with_no_space",selectable:!0,valueLabel:"⌘ E"}),e.jsx(l.Item,{variant:"destructive",icon:e.jsx(h,{}),label:"Delete"}),e.jsx(l.Divider,{}),e.jsx(l.Item,{icon:null,label:"Cut",valueLabel:"⌘ X"}),e.jsx(l.Item,{icon:null,label:"Copy",valueLabel:"⌘ C"}),e.jsx(l.Item,{icon:null,label:"Paste",disabled:!0,valueLabel:"⌘ V"}),e.jsx(l.Divider,{}),e.jsx(l.Item,{label:"Bold",selectable:!0}),e.jsx(l.Item,{label:"Italic",selectable:!0,selected:!0}),e.jsx(l.Item,{label:"Underline",selectable:!0}),e.jsx(l.Divider,{}),e.jsxs(l.Split,{children:[e.jsx(l.Item,{label:"Link",selectable:!0}),e.jsx(l.SecondaryAction,{onClick:()=>{window.open("/?path=/story/components-menu--secondary-action","_blank")?.focus()}})]})]}),children:e.jsx(c,{label:"Controlled Menu"})})}),args:{open:!0,defaultOpen:!0,onOpenChange:_()},parameters:{pseudo:{hover:'[data-testid="hover"]',focusVisible:'[data-testid="focus"]',active:'[data-testid="active"]'},chromatic:{delay:100}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Menu.Trigger menu={<>
          <Menu.GroupLabel label="User" />
          <Menu.Item icon={<PersonIcon />} label="Profile" disabled />
          <Menu.Item icon={<LogoutIcon />} label="Logout" />
          <Menu.Item icon={null} label="Reload" />
          <Menu.Item icon={null} label="Share" />
          <Menu.Sub icon={<CogwheelIcon />} label="Settings" menu={<>
                <Menu.Item label="Text" />
                <Menu.Item label="Video" />
                <Menu.Sub label="Image" menu={<>
                      <Menu.Item label=".png" />
                      <Menu.Item label=".jpg" />
                      <Menu.Item label=".svg" />
                      <Menu.Item label=".gif" />
                    </>} />
              </>} />
          <Menu.Sub icon={<ControlIcon />} label="More options" menu={<>
                <Menu.Item label="Reload" />
                <Menu.Item label="Schedule" />
                <Menu.Item label="History" />
              </>} />
          <Menu.Divider />
          <Menu.Item icon={<EditIcon />} label="Edit" description="Don’t remember what we said about overflow, but this would be it." valueLabel="⌘ E" />
          <Menu.Item icon={<DeleteIcon />} label="Delete" />
          <Menu.Divider />
          <Menu.Item icon={null} label="Cut" valueLabel="⌘ X" />
          <Menu.Item icon={null} label="Copy" valueLabel="⌘ C" />
          <Menu.Item icon={null} label="Paste" disabled valueLabel="⌘ V" />
        </>}>
      <Button label="Open Menu" />
    </Menu.Trigger>,
  parameters: {
    ...parameters
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Menu.Trigger defaultOpen menu={<>
          <Menu.Item label="Bold" selectable />
          <Menu.Item label="Italic" selectable selected />
          <Menu.Item label="Underline" selectable />
          <Menu.Divider />
          <Menu.Item label="Small" selectable />
          <Menu.Item label="Medium" selectable />
          <Menu.Item label="Large" selectable />
        </>}>
      <Button label="Open Menu" />
    </Menu.Trigger>,
  parameters: {
    ...parameters
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [contextMenu, setContextMenu] = useState<MouseEvent | null>(null);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent) => {
      setAnchorEl(event.currentTarget as HTMLElement);
    };
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      setContextMenu(event);
    };
    const handleClose = () => {
      setContextMenu(null);
      setAnchorEl(null);
    };
    return <div className={classNames("flex", "flex-row", "w-full")} onContextMenu={handleContextMenu} style={{
      cursor: "context-menu"
    }}>
        <div className={classNames("flex", "flex-col", "p-m", "w-full", "border-default")} data-testid="contextual">
          <h1 className={classNames("flex", "flex-row", "border-box", "font-heading-m", "text-default")}>
            Contextual Menu demo
          </h1>
          <p className={classNames("flex", "flex-row", "border-box", "font-body-m", "text-default")}>
            This a paragraph with a bit of text.
          </p>
          <Button label="Menu" onClick={handleClick} />
        </div>
        <Menu.Contextual minWidth="xxs" menu={<>
              <Menu.Item onClick={handleClose} label="Copy" />
              <Menu.Item onClick={handleClose} label="Print" />
              <Menu.Item onClick={handleClose} label="Highlight" />
              <Menu.Item onClick={handleClose} label="Email" />
            </>} open={Boolean(contextMenu)} onOpenChange={value => {
        if (!value) {
          setContextMenu(null);
        }
      }} anchorPosition={contextMenu ? {
        left: contextMenu.clientX,
        top: contextMenu.clientY
      } : undefined} />
        <Menu.Trigger anchorEl={anchorEl || undefined} open={open} onOpenChange={value => {
        if (!value) {
          setAnchorEl(null);
        }
      }} menu={<>
              <Menu.Item onClick={handleClose} label="Copy" />
              <Menu.Item onClick={handleClose} label="Print" />
              <Menu.Item onClick={handleClose} label="Highlight" />
              <Menu.Item onClick={handleClose} label="Email" />
            </>} />
      </div>;
  },
  parameters: {
    ...parameters,
    controls: {
      disable: true
    }
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "flex-row", "items-start")} style={{
    blockSize: "650px",
    inlineSize: "300px"
  }}>
      <Menu.Trigger {...props} menu={<>
            <Menu.GroupLabel label="Menu.GroupLabel" />
            <Menu.Item icon={null} label="Default" />
            <Menu.Divider />
            <Menu.Item icon={null} label="Hover" data-testid="hover" />
            <Menu.Divider />
            <Menu.Item icon={null} label="Active" data-testid="active" />
            <Menu.Divider />
            <Menu.Item icon={null} label="Focus" data-testid="focus" />
            <Menu.Divider />
            <Menu.Item icon={<Person />} label="Disabled" disabled />
            <Menu.Divider />
            <Menu.Item icon={<EditIcon />} label="Edit with a super long menu too so it should also overflow" description="Don’t remember what we said about overflow, but this would be it." valueLabel="⌘ E" selectable selected />
            <Menu.Item icon={null} label="An_too_long_label_with_very_long_word_that_goes_beyond_the_parent_size_and_with_no_space" selectable valueLabel="⌘ E" />

            <Menu.Item variant="destructive" icon={<DeleteIcon />} label="Delete" />
            <Menu.Divider />
            <Menu.Item icon={null} label="Cut" valueLabel="⌘ X" />
            <Menu.Item icon={null} label="Copy" valueLabel="⌘ C" />
            <Menu.Item icon={null} label="Paste" disabled valueLabel="⌘ V" />
            <Menu.Divider />
            <Menu.Item label="Bold" selectable />
            <Menu.Item label="Italic" selectable selected />
            <Menu.Item label="Underline" selectable />
            <Menu.Divider />
            <Menu.Split>
              <Menu.Item label="Link" selectable />
              <Menu.SecondaryAction onClick={() => {
          window.open("/?path=/story/components-menu--secondary-action", "_blank")?.focus();
        }} />
            </Menu.Split>
          </>}>
        <Button label="Controlled Menu" />
      </Menu.Trigger>
    </div>,
  args: {
    open: true,
    defaultOpen: true,
    onOpenChange: fn()
  },
  parameters: {
    pseudo: {
      hover: '[data-testid="hover"]',
      focusVisible: '[data-testid="focus"]',
      active: '[data-testid="active"]'
    },
    chromatic: {
      delay: 100
    }
  }
}`,...u.parameters?.docs?.source}}};const D=["JsxApi","Selections","MuiApi","VisualTest"],A=Object.freeze(Object.defineProperty({__proto__:null,JsxApi:s,MuiApi:i,Selections:r,VisualTest:u,__namedExportsOrder:D,default:S},Symbol.toStringTag,{value:"Module"}));export{s as J,A as S};
