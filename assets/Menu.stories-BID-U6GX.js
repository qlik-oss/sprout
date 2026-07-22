import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-BDsysHVl.js";import{$r as i,Gn as a,Yr as o,cn as s,ki as c,li as l,t as u,tr as d,tt as f,xn as p,yr as m}from"./sprout-react-KA55n9ke.js";import{t as h}from"./jsx-runtime-Bq1bXGty.js";var g=n({JsxApi:()=>S,MuiApi:()=>w,Selections:()=>C,VisualTest:()=>T,__namedExportsOrder:()=>E,default:()=>b}),_,v,y,b,x,S,C,w,T,E,D=t((()=>{_=e(r()),u(),p(),v=h(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/Menu`,component:f.Trigger},x={chromatic:{disableSnapshot:!0}},S={render:()=>(0,v.jsx)(f.Trigger,{menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.GroupLabel,{label:`User`}),(0,v.jsx)(f.Item,{icon:(0,v.jsx)(d,{}),label:`Profile`,disabled:!0}),(0,v.jsx)(f.Item,{icon:(0,v.jsx)(m,{}),label:`Logout`}),(0,v.jsx)(f.Item,{icon:null,label:`Reload`}),(0,v.jsx)(f.Item,{icon:null,label:`Share`}),(0,v.jsx)(f.Sub,{icon:(0,v.jsx)(a,{}),label:`Settings`,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.Item,{label:`Text`}),(0,v.jsx)(f.Item,{label:`Video`}),(0,v.jsx)(f.Sub,{label:`Image`,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.Item,{label:`.png`}),(0,v.jsx)(f.Item,{label:`.jpg`}),(0,v.jsx)(f.Item,{label:`.svg`}),(0,v.jsx)(f.Item,{label:`.gif`})]})})]})}),(0,v.jsx)(f.Sub,{icon:(0,v.jsx)(l,{}),label:`More options`,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.Item,{label:`Reload`}),(0,v.jsx)(f.Item,{label:`Schedule`}),(0,v.jsx)(f.Item,{label:`History`})]})}),(0,v.jsx)(f.Divider,{}),(0,v.jsx)(f.Item,{icon:(0,v.jsx)(o,{}),label:`Edit`,description:`Don’t remember what we said about overflow, but this would be it.`,valueLabel:`⌘ E`}),(0,v.jsx)(f.Item,{icon:(0,v.jsx)(i,{}),label:`Delete`}),(0,v.jsx)(f.Divider,{}),(0,v.jsx)(f.Item,{icon:null,label:`Cut`,valueLabel:`⌘ X`}),(0,v.jsx)(f.Item,{icon:null,label:`Copy`,valueLabel:`⌘ C`}),(0,v.jsx)(f.Item,{icon:null,label:`Paste`,disabled:!0,valueLabel:`⌘ V`})]}),children:(0,v.jsx)(s,{label:`Open Menu`})}),parameters:{...x}},C={render:()=>(0,v.jsx)(f.Trigger,{defaultOpen:!0,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.Item,{label:`Bold`,selectable:!0}),(0,v.jsx)(f.Item,{label:`Italic`,selectable:!0,selected:!0}),(0,v.jsx)(f.Item,{label:`Underline`,selectable:!0}),(0,v.jsx)(f.Divider,{}),(0,v.jsx)(f.Item,{label:`Small`,selectable:!0}),(0,v.jsx)(f.Item,{label:`Medium`,selectable:!0}),(0,v.jsx)(f.Item,{label:`Large`,selectable:!0})]}),children:(0,v.jsx)(s,{label:`Open Menu`})}),parameters:{...x}},w={render:()=>{let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)(null),i=!!n,a=e=>{r(e.currentTarget)},o=e=>{e.preventDefault(),t(e)},l=()=>{t(null),r(null)};return(0,v.jsxs)(`div`,{className:c(`flex`,`flex-row`,`w-full`),onContextMenu:o,style:{cursor:`context-menu`},children:[(0,v.jsxs)(`div`,{className:c(`flex`,`flex-col`,`p-m`,`w-full`,`border-default`),"data-testid":`contextual`,children:[(0,v.jsx)(`h1`,{className:c(`flex`,`flex-row`,`border-box`,`font-heading-m`,`text-default`),children:`Contextual Menu demo using MUI api`}),(0,v.jsx)(`p`,{className:c(`flex`,`flex-row`,`border-box`,`font-body-m`,`text-default`),children:`This a paragraph with a bit of text.`}),(0,v.jsx)(s,{label:`Menu`,onClick:a})]}),(0,v.jsx)(f.Contextual,{minWidth:`xxs`,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.Item,{onClick:l,label:`Copy`}),(0,v.jsx)(f.Item,{onClick:l,label:`Print`}),(0,v.jsx)(f.Item,{onClick:l,label:`Highlight`}),(0,v.jsx)(f.Item,{onClick:l,label:`Email`})]}),open:!!e,onOpenChange:e=>{e||t(null)},anchorPosition:e?{left:e.clientX,top:e.clientY}:void 0}),(0,v.jsx)(f.Trigger,{anchorEl:n||void 0,open:i,onOpenChange:e=>{e||r(null)},menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.Item,{onClick:l,label:`Copy`}),(0,v.jsx)(f.Item,{onClick:l,label:`Print`}),(0,v.jsx)(f.Item,{onClick:l,label:`Highlight`}),(0,v.jsx)(f.Item,{onClick:l,label:`Email`})]})})]})},parameters:{...x,controls:{disable:!0}}},T={render:e=>(0,v.jsx)(`div`,{className:c(`flex`,`flex-row`,`items-start`),style:{blockSize:`650px`,inlineSize:`300px`},children:(0,v.jsx)(f.Trigger,{...e,menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.GroupLabel,{label:`Menu.GroupLabel`}),(0,v.jsx)(f.Item,{icon:null,label:`Default`}),(0,v.jsx)(f.Divider,{}),(0,v.jsx)(f.Item,{icon:null,label:`Hover`,"data-testid":`hover`}),(0,v.jsx)(f.Divider,{}),(0,v.jsx)(f.Item,{icon:null,label:`Active`,"data-testid":`active`}),(0,v.jsx)(f.Divider,{}),(0,v.jsx)(f.Item,{icon:null,label:`Focus`,"data-testid":`focus`}),(0,v.jsx)(f.Divider,{}),(0,v.jsx)(f.Item,{icon:(0,v.jsx)(d,{}),label:`Disabled`,disabled:!0}),(0,v.jsx)(f.Divider,{}),(0,v.jsx)(f.Item,{icon:(0,v.jsx)(o,{}),label:`Edit with a super long menu too so it should also overflow`,description:`Don’t remember what we said about overflow, but this would be it.`,valueLabel:`⌘ E`,selectable:!0,selected:!0}),(0,v.jsx)(f.Item,{icon:null,label:`An_too_long_label_with_very_long_word_that_goes_beyond_the_parent_size_and_with_no_space`,selectable:!0,valueLabel:`⌘ E`}),(0,v.jsx)(f.Item,{variant:`destructive`,icon:(0,v.jsx)(i,{}),label:`Delete`}),(0,v.jsx)(f.Divider,{}),(0,v.jsx)(f.Item,{icon:null,label:`Cut`,valueLabel:`⌘ X`}),(0,v.jsx)(f.Item,{icon:null,label:`Copy`,valueLabel:`⌘ C`}),(0,v.jsx)(f.Item,{icon:null,label:`Paste`,disabled:!0,valueLabel:`⌘ V`}),(0,v.jsx)(f.Divider,{}),(0,v.jsx)(f.Item,{label:`Bold`,selectable:!0}),(0,v.jsx)(f.Item,{label:`Italic`,selectable:!0,selected:!0}),(0,v.jsx)(f.Item,{label:`Underline`,selectable:!0}),(0,v.jsx)(f.Divider,{}),(0,v.jsxs)(f.Split,{children:[(0,v.jsx)(f.Item,{label:`Link`,selectable:!0}),(0,v.jsx)(f.SecondaryAction,{onClick:()=>{window.open(`/?path=/story/components-menu--secondary-action`,`_blank`)?.focus()}})]})]}),children:(0,v.jsx)(s,{label:`Controlled Menu`})})}),args:{open:!0,defaultOpen:!0,onOpenChange:y()},parameters:{pseudo:{hover:`[data-testid="hover"]`,focusVisible:`[data-testid="focus"]`,active:`[data-testid="active"]`},chromatic:{delay:100}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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