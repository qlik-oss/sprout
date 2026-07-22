import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./react-a45N5K9M.js";import{t as i}from"./jsx-runtime-BqsN2jGA.js";import{Dr as a,Fi as o,Fn as s,Gr as c,O as l,Ot as u,Ti as d,_r as f,qn as p,ta as m,xi as h}from"./iframe-UwarwtgL.js";var g=e({JsxApi:()=>S,MuiApi:()=>w,Selections:()=>C,VisualTest:()=>T,__namedExportsOrder:()=>E,default:()=>b}),_,v,y,b,x,S,C,w,T,E,D=t((()=>{_=n(r()),l(),p(),v=i(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/Menu`,component:u.Trigger},x={chromatic:{disableSnapshot:!0}},S={render:()=>(0,v.jsx)(u.Trigger,{menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.GroupLabel,{label:`User`}),(0,v.jsx)(u.Item,{icon:(0,v.jsx)(a,{}),label:`Profile`,disabled:!0}),(0,v.jsx)(u.Item,{icon:(0,v.jsx)(c,{}),label:`Logout`}),(0,v.jsx)(u.Item,{icon:null,label:`Reload`}),(0,v.jsx)(u.Item,{icon:null,label:`Share`}),(0,v.jsx)(u.Sub,{icon:(0,v.jsx)(f,{}),label:`Settings`,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.Item,{label:`Text`}),(0,v.jsx)(u.Item,{label:`Video`}),(0,v.jsx)(u.Sub,{label:`Image`,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.Item,{label:`.png`}),(0,v.jsx)(u.Item,{label:`.jpg`}),(0,v.jsx)(u.Item,{label:`.svg`}),(0,v.jsx)(u.Item,{label:`.gif`})]})})]})}),(0,v.jsx)(u.Sub,{icon:(0,v.jsx)(o,{}),label:`More options`,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.Item,{label:`Reload`}),(0,v.jsx)(u.Item,{label:`Schedule`}),(0,v.jsx)(u.Item,{label:`History`})]})}),(0,v.jsx)(u.Divider,{}),(0,v.jsx)(u.Item,{icon:(0,v.jsx)(h,{}),label:`Edit`,description:`Don’t remember what we said about overflow, but this would be it.`,valueLabel:`⌘ E`}),(0,v.jsx)(u.Item,{icon:(0,v.jsx)(d,{}),label:`Delete`}),(0,v.jsx)(u.Divider,{}),(0,v.jsx)(u.Item,{icon:null,label:`Cut`,valueLabel:`⌘ X`}),(0,v.jsx)(u.Item,{icon:null,label:`Copy`,valueLabel:`⌘ C`}),(0,v.jsx)(u.Item,{icon:null,label:`Paste`,disabled:!0,valueLabel:`⌘ V`})]}),children:(0,v.jsx)(s,{label:`Open Menu`})}),parameters:{...x}},C={render:()=>(0,v.jsx)(u.Trigger,{defaultOpen:!0,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.Item,{label:`Bold`,selectable:!0}),(0,v.jsx)(u.Item,{label:`Italic`,selectable:!0,selected:!0}),(0,v.jsx)(u.Item,{label:`Underline`,selectable:!0}),(0,v.jsx)(u.Divider,{}),(0,v.jsx)(u.Item,{label:`Small`,selectable:!0}),(0,v.jsx)(u.Item,{label:`Medium`,selectable:!0}),(0,v.jsx)(u.Item,{label:`Large`,selectable:!0})]}),children:(0,v.jsx)(s,{label:`Open Menu`})}),parameters:{...x}},w={render:()=>{let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)(null),i=!!n,a=e=>{r(e.currentTarget)},o=e=>{e.preventDefault(),t(e)},c=()=>{t(null),r(null)};return(0,v.jsxs)(`div`,{className:m(`flex`,`flex-row`,`w-full`),onContextMenu:o,style:{cursor:`context-menu`},children:[(0,v.jsxs)(`div`,{className:m(`flex`,`flex-col`,`p-m`,`w-full`,`border-default`),"data-testid":`contextual`,children:[(0,v.jsx)(`h1`,{className:m(`flex`,`flex-row`,`border-box`,`font-heading-m`,`text-default`),children:`Contextual Menu demo using MUI api`}),(0,v.jsx)(`p`,{className:m(`flex`,`flex-row`,`border-box`,`font-body-m`,`text-default`),children:`This a paragraph with a bit of text.`}),(0,v.jsx)(s,{label:`Menu`,onClick:a})]}),(0,v.jsx)(u.Contextual,{minWidth:`xxs`,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.Item,{onClick:c,label:`Copy`}),(0,v.jsx)(u.Item,{onClick:c,label:`Print`}),(0,v.jsx)(u.Item,{onClick:c,label:`Highlight`}),(0,v.jsx)(u.Item,{onClick:c,label:`Email`})]}),open:!!e,onOpenChange:e=>{e||t(null)},anchorPosition:e?{left:e.clientX,top:e.clientY}:void 0}),(0,v.jsx)(u.Trigger,{anchorEl:n||void 0,open:i,onOpenChange:e=>{e||r(null)},menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.Item,{onClick:c,label:`Copy`}),(0,v.jsx)(u.Item,{onClick:c,label:`Print`}),(0,v.jsx)(u.Item,{onClick:c,label:`Highlight`}),(0,v.jsx)(u.Item,{onClick:c,label:`Email`})]})})]})},parameters:{...x,controls:{disable:!0}}},T={render:e=>(0,v.jsx)(`div`,{className:m(`flex`,`flex-row`,`items-start`),style:{blockSize:`650px`,inlineSize:`300px`},children:(0,v.jsx)(u.Trigger,{...e,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.GroupLabel,{label:`Menu.GroupLabel`}),(0,v.jsx)(u.Item,{icon:null,label:`Default`}),(0,v.jsx)(u.Divider,{}),(0,v.jsx)(u.Item,{icon:null,label:`Hover`,"data-testid":`hover`}),(0,v.jsx)(u.Divider,{}),(0,v.jsx)(u.Item,{icon:null,label:`Active`,"data-testid":`active`}),(0,v.jsx)(u.Divider,{}),(0,v.jsx)(u.Item,{icon:null,label:`Focus`,"data-testid":`focus`}),(0,v.jsx)(u.Divider,{}),(0,v.jsx)(u.Item,{icon:(0,v.jsx)(a,{}),label:`Disabled`,disabled:!0}),(0,v.jsx)(u.Divider,{}),(0,v.jsx)(u.Item,{icon:(0,v.jsx)(h,{}),label:`Edit with a super long menu too so it should also overflow`,description:`Don’t remember what we said about overflow, but this would be it.`,valueLabel:`⌘ E`,selectable:!0,selected:!0}),(0,v.jsx)(u.Item,{icon:null,label:`An_too_long_label_with_very_long_word_that_goes_beyond_the_parent_size_and_with_no_space`,selectable:!0,valueLabel:`⌘ E`}),(0,v.jsx)(u.Item,{variant:`destructive`,icon:(0,v.jsx)(d,{}),label:`Delete`}),(0,v.jsx)(u.Divider,{}),(0,v.jsx)(u.Item,{icon:null,label:`Cut`,valueLabel:`⌘ X`}),(0,v.jsx)(u.Item,{icon:null,label:`Copy`,valueLabel:`⌘ C`}),(0,v.jsx)(u.Item,{icon:null,label:`Paste`,disabled:!0,valueLabel:`⌘ V`}),(0,v.jsx)(u.Divider,{}),(0,v.jsx)(u.Item,{label:`Bold`,selectable:!0}),(0,v.jsx)(u.Item,{label:`Italic`,selectable:!0,selected:!0}),(0,v.jsx)(u.Item,{label:`Underline`,selectable:!0}),(0,v.jsx)(u.Divider,{}),(0,v.jsxs)(u.Split,{children:[(0,v.jsx)(u.Item,{label:`Link`,selectable:!0}),(0,v.jsx)(u.SecondaryAction,{onClick:()=>{window.open(`/?path=/story/components-menu--secondary-action`,`_blank`)?.focus()}})]})]}),children:(0,v.jsx)(s,{label:`Controlled Menu`})})}),args:{open:!0,defaultOpen:!0,onOpenChange:y()},parameters:{pseudo:{hover:`[data-testid="hover"]`,focusVisible:`[data-testid="focus"]`,active:`[data-testid="active"]`},chromatic:{delay:100}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Menu.Trigger menu={<>
          <Menu.GroupLabel label="User" />
          <Menu.Item icon={<PersonIcon />} label="Profile" disabled />
          <Menu.Item icon={<LogOutIcon />} label="Logout" />
          <Menu.Item icon={null} label="Reload" />
          <Menu.Item icon={null} label="Share" />
          <Menu.Sub icon={<SettingsIcon />} label="Settings" menu={<>
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
            Contextual Menu demo using MUI api
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
            <Menu.Item icon={<PersonIcon />} label="Disabled" disabled />
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
}`,...T.parameters?.docs?.source}}},E=[`JsxApi`,`Selections`,`MuiApi`,`VisualTest`]}));D();export{S as JsxApi,w as MuiApi,C as Selections,T as VisualTest,E as __namedExportsOrder,b as default,D as n,g as t};