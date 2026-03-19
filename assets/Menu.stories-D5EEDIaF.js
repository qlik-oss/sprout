import{i as e,n as t}from"./chunk-DseTPa7n.js";import{t as n}from"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as r}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{Ft as i,J as a,Yt as o,Zt as s,bt as c,hn as l,nn as u,wt as d,x as f}from"./iframe-URhFfzNK.js";var p=t({JsxApi:()=>y,MuiApi:()=>x,Selections:()=>b,VisualTest:()=>S,__namedExportsOrder:()=>C,default:()=>_}),m=e(n()),h=r(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/Menu`,component:f.Trigger},v={chromatic:{disableSnapshot:!0}},y={render:()=>(0,h.jsx)(f.Trigger,{menu:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.GroupLabel,{label:`User`}),(0,h.jsx)(f.Item,{icon:(0,h.jsx)(d,{}),label:`Profile`,disabled:!0}),(0,h.jsx)(f.Item,{icon:(0,h.jsx)(i,{}),label:`Logout`}),(0,h.jsx)(f.Item,{icon:null,label:`Reload`}),(0,h.jsx)(f.Item,{icon:null,label:`Share`}),(0,h.jsx)(f.Sub,{icon:(0,h.jsx)(c,{}),label:`Settings`,menu:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.Item,{label:`Text`}),(0,h.jsx)(f.Item,{label:`Video`}),(0,h.jsx)(f.Sub,{label:`Image`,menu:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.Item,{label:`.png`}),(0,h.jsx)(f.Item,{label:`.jpg`}),(0,h.jsx)(f.Item,{label:`.svg`}),(0,h.jsx)(f.Item,{label:`.gif`})]})})]})}),(0,h.jsx)(f.Sub,{icon:(0,h.jsx)(u,{}),label:`More options`,menu:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.Item,{label:`Reload`}),(0,h.jsx)(f.Item,{label:`Schedule`}),(0,h.jsx)(f.Item,{label:`History`})]})}),(0,h.jsx)(f.Divider,{}),(0,h.jsx)(f.Item,{icon:(0,h.jsx)(o,{}),label:`Edit`,description:`Don’t remember what we said about overflow, but this would be it.`,valueLabel:`⌘ E`}),(0,h.jsx)(f.Item,{icon:(0,h.jsx)(s,{}),label:`Delete`}),(0,h.jsx)(f.Divider,{}),(0,h.jsx)(f.Item,{icon:null,label:`Cut`,valueLabel:`⌘ X`}),(0,h.jsx)(f.Item,{icon:null,label:`Copy`,valueLabel:`⌘ C`}),(0,h.jsx)(f.Item,{icon:null,label:`Paste`,disabled:!0,valueLabel:`⌘ V`})]}),children:(0,h.jsx)(a,{label:`Open Menu`})}),parameters:{...v}},b={render:()=>(0,h.jsx)(f.Trigger,{defaultOpen:!0,menu:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.Item,{label:`Bold`,selectable:!0}),(0,h.jsx)(f.Item,{label:`Italic`,selectable:!0,selected:!0}),(0,h.jsx)(f.Item,{label:`Underline`,selectable:!0}),(0,h.jsx)(f.Divider,{}),(0,h.jsx)(f.Item,{label:`Small`,selectable:!0}),(0,h.jsx)(f.Item,{label:`Medium`,selectable:!0}),(0,h.jsx)(f.Item,{label:`Large`,selectable:!0})]}),children:(0,h.jsx)(a,{label:`Open Menu`})}),parameters:{...v}},x={render:()=>{let[e,t]=(0,m.useState)(null),[n,r]=(0,m.useState)(null),i=!!n,o=e=>{r(e.currentTarget)},s=e=>{e.preventDefault(),t(e)},c=()=>{t(null),r(null)};return(0,h.jsxs)(`div`,{className:l(`flex`,`flex-row`,`w-full`),onContextMenu:s,style:{cursor:`context-menu`},children:[(0,h.jsxs)(`div`,{className:l(`flex`,`flex-col`,`p-m`,`w-full`,`border-default`),"data-testid":`contextual`,children:[(0,h.jsx)(`h1`,{className:l(`flex`,`flex-row`,`border-box`,`font-heading-m`,`text-default`),children:`Contextual Menu demo using MUI api`}),(0,h.jsx)(`p`,{className:l(`flex`,`flex-row`,`border-box`,`font-body-m`,`text-default`),children:`This a paragraph with a bit of text.`}),(0,h.jsx)(a,{label:`Menu`,onClick:o})]}),(0,h.jsx)(f.Contextual,{minWidth:`xxs`,menu:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.Item,{onClick:c,label:`Copy`}),(0,h.jsx)(f.Item,{onClick:c,label:`Print`}),(0,h.jsx)(f.Item,{onClick:c,label:`Highlight`}),(0,h.jsx)(f.Item,{onClick:c,label:`Email`})]}),open:!!e,onOpenChange:e=>{e||t(null)},anchorPosition:e?{left:e.clientX,top:e.clientY}:void 0}),(0,h.jsx)(f.Trigger,{anchorEl:n||void 0,open:i,onOpenChange:e=>{e||r(null)},menu:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.Item,{onClick:c,label:`Copy`}),(0,h.jsx)(f.Item,{onClick:c,label:`Print`}),(0,h.jsx)(f.Item,{onClick:c,label:`Highlight`}),(0,h.jsx)(f.Item,{onClick:c,label:`Email`})]})})]})},parameters:{...v,controls:{disable:!0}}},S={render:e=>(0,h.jsx)(`div`,{className:l(`flex`,`flex-row`,`items-start`),style:{blockSize:`650px`,inlineSize:`300px`},children:(0,h.jsx)(f.Trigger,{...e,menu:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.GroupLabel,{label:`Menu.GroupLabel`}),(0,h.jsx)(f.Item,{icon:null,label:`Default`}),(0,h.jsx)(f.Divider,{}),(0,h.jsx)(f.Item,{icon:null,label:`Hover`,"data-testid":`hover`}),(0,h.jsx)(f.Divider,{}),(0,h.jsx)(f.Item,{icon:null,label:`Active`,"data-testid":`active`}),(0,h.jsx)(f.Divider,{}),(0,h.jsx)(f.Item,{icon:null,label:`Focus`,"data-testid":`focus`}),(0,h.jsx)(f.Divider,{}),(0,h.jsx)(f.Item,{icon:(0,h.jsx)(d,{}),label:`Disabled`,disabled:!0}),(0,h.jsx)(f.Divider,{}),(0,h.jsx)(f.Item,{icon:(0,h.jsx)(o,{}),label:`Edit with a super long menu too so it should also overflow`,description:`Don’t remember what we said about overflow, but this would be it.`,valueLabel:`⌘ E`,selectable:!0,selected:!0}),(0,h.jsx)(f.Item,{icon:null,label:`An_too_long_label_with_very_long_word_that_goes_beyond_the_parent_size_and_with_no_space`,selectable:!0,valueLabel:`⌘ E`}),(0,h.jsx)(f.Item,{variant:`destructive`,icon:(0,h.jsx)(s,{}),label:`Delete`}),(0,h.jsx)(f.Divider,{}),(0,h.jsx)(f.Item,{icon:null,label:`Cut`,valueLabel:`⌘ X`}),(0,h.jsx)(f.Item,{icon:null,label:`Copy`,valueLabel:`⌘ C`}),(0,h.jsx)(f.Item,{icon:null,label:`Paste`,disabled:!0,valueLabel:`⌘ V`}),(0,h.jsx)(f.Divider,{}),(0,h.jsx)(f.Item,{label:`Bold`,selectable:!0}),(0,h.jsx)(f.Item,{label:`Italic`,selectable:!0,selected:!0}),(0,h.jsx)(f.Item,{label:`Underline`,selectable:!0}),(0,h.jsx)(f.Divider,{}),(0,h.jsxs)(f.Split,{children:[(0,h.jsx)(f.Item,{label:`Link`,selectable:!0}),(0,h.jsx)(f.SecondaryAction,{onClick:()=>{window.open(`/?path=/story/components-menu--secondary-action`,`_blank`)?.focus()}})]})]}),children:(0,h.jsx)(a,{label:`Controlled Menu`})})}),args:{open:!0,defaultOpen:!0,onOpenChange:g()},parameters:{pseudo:{hover:`[data-testid="hover"]`,focusVisible:`[data-testid="focus"]`,active:`[data-testid="active"]`},chromatic:{delay:100}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};var C=[`JsxApi`,`Selections`,`MuiApi`,`VisualTest`];export{y as JsxApi,x as MuiApi,b as Selections,S as VisualTest,C as __namedExportsOrder,_ as default,p as t};