import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{Fn as r,H as i,K as a,Pn as o,U as s,nr as c,st as l,v as u,wt as d,yt as f}from"./iframe-RiXBydPV.js";var p,m,h=t((()=>{p={demoContentWidth:{control:{type:`number`,min:0,step:50}},demoContentHeight:{control:{type:`number`,min:0,step:50}},demoContainerWidth:{control:{type:`number`,min:0,step:50}},demoContainerHeight:{control:{type:`number`,min:0,step:50}}},m={content:{control:!1,description:`The content of the popover.`,table:{type:{summary:`ReactNode`}}},children:{control:!1,description:`The anchor element that the popover is attached to. It's not required as you can use anchorPosition instead.`,table:{type:{summary:`ReactNode`}}},anchorEl:{control:!1,description:`The anchor element that the popover is attached to. It's not required as you can use anchorPosition instead.`,table:{type:{summary:`HTMLElement | null`}}},placement:{control:{type:`select`},options:[void 0,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`,`right`,`right-start`,`right-end`,`top`,`top-start`,`top-end`],description:`The preferred placement of the popover relative to the anchor element.`,table:{defaultValue:{summary:`bottom-start`},type:{summary:`string`}}},placementUpdate:{control:{type:`select`},options:[void 0,!0,!1,`dropdown`],description:`If true, the popover will update its position when the anchor element changes position.`,table:{defaultValue:{summary:void 0},type:{summary:`boolean`}}},anchorPosition:{control:{type:`object`},description:`The position of the anchor element in the viewport. Used when there is no children prop.`,table:{type:{summary:`{ top: number; left: number }`}}},open:{control:{type:`select`},options:[void 0,!0,!1],description:`Controls the visibility of the popover. If undefined, the popover will manage its own state.`,table:{defaultValue:{summary:void 0},type:{summary:`boolean`}}},initialOpen:{control:{type:`select`},options:[void 0,!0,!1],description:`Controls the initial visibility of the popover.`,table:{defaultValue:{summary:void 0},type:{summary:`boolean`}}},onOpenChange:{control:!1,description:`Callback fired when the open state of the popover changes.`,table:{type:{summary:`(open: boolean) => void`}}},hideBackdrop:{control:{type:`boolean`},description:`If true, hides the backdrop overlay (no overlay is rendered behind the popover), allowing interaction with the background.`,table:{defaultValue:{summary:`true`},type:{summary:`boolean`}}},disableScrollLock:{control:{type:`boolean`},description:`If true, disables scroll locking when the backdrop/overlay is shown (i.e., when hideBackdrop is false), allowing the page to continue scrolling in the background.`,table:{defaultValue:{summary:`true`},type:{summary:`boolean`}}},width:{control:{type:`select`},options:[void 0,`reference`,`screen`,`xxs`,`xs`,`s`,`m`,`l`,`xl`,`100px`],description:`Sets the width of the popover. Can be a predefined size or a custom CSS value.`,table:{defaultValue:{summary:`fit-content`},type:{summary:` "reference" | "screen" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | string`}}},minWidth:{control:{type:`select`},options:[void 0,`reference`,`screen`,`xxs`,`xs`,`s`,`m`,`l`,`xl`,`100px`],description:`Sets the minimum width of the popover. Can be a predefined size or a custom CSS value.`,table:{defaultValue:{summary:void 0},type:{summary:` "reference" | "screen" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | string`}}},maxWidth:{control:{type:`select`},options:[void 0,`reference`,`screen`,`xxs`,`xs`,`s`,`m`,`l`,`xl`,`100px`],description:`Sets the maximum width of the popover. Can be a predefined size or a custom CSS value.`,table:{defaultValue:{summary:`s`},type:{summary:` "reference" | "screen" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | string`}}},role:{control:{type:`text`},description:`The ARIA role attribute for the popover element.`,table:{defaultValue:{summary:`dialog`},type:{summary:`string`}}},"aria-label":{control:{type:`text`},description:`The ARIA label attribute for the popover element.`,table:{defaultValue:{summary:`popover`},type:{summary:`string`}}},forceMount:{control:{type:`boolean`},description:`If true, the popover will be rendered in the DOM even when it's not open.`,table:{defaultValue:{summary:`false`},type:{summary:`boolean`}}},onMount:{control:!1,description:`This callback is called multiple times controlled by react itself under the reference callback. Helpful to manage react state or query HTML elements.`,table:{type:{summary:`(reference?: HTMLElement, floating?: HTMLElement) => void;`}}},tree:{control:{type:`boolean`},description:`If true, the popover will be able to manage popover in popover.`,table:{defaultValue:{summary:`false`},type:{summary:`boolean`}}},p:{control:{type:`select`},options:[void 0,`0`,`xxs`,`xs`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`],description:`Sets padding on all sides of the popover.`,table:{defaultValue:{summary:void 0},type:{summary:` "0" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl"`}}}},m.px=m.p,m.py=m.p,m.pt=m.p,m.pr=m.p,m.pb=m.p,m.pl=m.p})),g=n({AnchorAPI:()=>T,AnchorPositionAPI:()=>E,CustomDropdown:()=>w,Nested:()=>D,Playground:()=>C,VisualTest:()=>O,__namedExportsOrder:()=>k,default:()=>b}),_,v,y,b,x,S,C,w,T,E,D,O,k,A=t((()=>{_=e(c()),u(),h(),v=r(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/Popover`,component:l,argTypes:{...m}},x=o(`font-body-s`,`text-default`),S={chromatic:{disableSnapshot:!0}},C={render:({demoContainerHeight:e,demoContainerWidth:t,demoContentHeight:n,demoContentWidth:r,content:i,...a})=>(0,v.jsx)(`div`,{className:o(`flex`,`border-box`,`flex-col`,`items-center`,`justify-center`),style:{inlineSize:t,blockSize:e},children:(0,v.jsx)(l,{...a,content:(0,v.jsx)(`div`,{style:{blockSize:n,inlineSize:r},children:i}),p:`xl`,pb:`m`,children:(0,v.jsx)(d,{label:`My trigger`})})}),args:{demoContainerWidth:400,demoContainerHeight:400,demoContentWidth:100,demoContentHeight:100,content:`content string`,placement:`bottom-start`,onOpenChange:y(),initialOpen:!0,minWidth:`reference`,placementUpdate:!1},argTypes:{...p,...m},parameters:S},w={render:e=>(0,v.jsx)(`div`,{className:o(`flex`,`flex-col`,`p-xl`,`gap-xl`),style:{inlineSize:`400px`},children:(0,v.jsx)(l,{...e,minWidth:`reference`,content:(0,v.jsxs)(i,{children:[(0,v.jsx)(s,{onClick:()=>{},children:`Item 1`}),(0,v.jsx)(s,{onClick:()=>{},children:`Item 1`})]}),children:(0,v.jsx)(d,{label:`My trigger`,asDropdown:!0})})}),args:{},argTypes:{...m},parameters:S},T={render:e=>{let[t,n]=(0,_.useState)(),[r,i]=(0,_.useState)(!1);return(0,v.jsxs)(`div`,{className:o(`flex`,`flex-col`,`gap-xl`),style:{inlineSize:`400px`},children:[(0,v.jsx)(d,{label:`My trigger`,ref:e=>{n(e)},onClick:()=>{i(!r)}}),(0,v.jsx)(l,{...e,anchorEl:t,open:r,onOpenChange:i,content:(0,v.jsx)(`p`,{className:x,children:`placeholder`})})]})},args:{minWidth:`reference`},argTypes:{...m},parameters:S},E={render:e=>{let[t,n]=(0,_.useState)(),[r,i]=(0,_.useState)(!1);return(0,v.jsxs)(`div`,{className:o(`flex`,`flex-col`,`gap-xl`),style:{inlineSize:`400px`},children:[(0,v.jsx)(a.Trigger,{menu:(0,v.jsx)(a.Item,{label:`Delete`,onClick:e=>{n({top:e.clientY,left:e.clientX}),i(!r)}}),children:(0,v.jsx)(d,{label:`OpenMenu`,asDropdown:!0})}),(0,v.jsx)(l,{...e,anchorPosition:t,p:`m`,open:r,onOpenChange:i,content:(0,v.jsxs)(`form`,{className:o(`flex`,`flex-col`,`gap-m`,`items-start`,`bg-default`),onSubmit:e=>{e.preventDefault()},children:[(0,v.jsx)(`h2`,{className:o(`flex`,`text-default`,`font-heading-s`),children:`Delete confirmation`}),(0,v.jsx)(f,{severity:`warning`,children:`This action can't be reverted`}),(0,v.jsx)(`div`,{className:o(`flex`,`flex-col`,`gap-m`,`w-full`,`items-end`),children:(0,v.jsx)(d,{variant:`primary`,label:`Yes`,type:`submit`})})]})})]})},args:{minWidth:`reference`},argTypes:{...m},parameters:S},D={render:()=>(0,v.jsx)(`div`,{className:o(`flex`,`flex-col`,`gap-xl`,`p-xl`,`items-center`,`justify-center`),style:{inlineSize:`400px`,blockSize:`300px`},children:(0,v.jsx)(l,{tree:!0,p:`xl`,placement:`top`,content:(0,v.jsx)(l,{content:`Nested content`,p:`xl`,placement:`right`,children:(0,v.jsx)(`button`,{type:`button`,children:`Nested reference`})}),children:(0,v.jsx)(`button`,{type:`button`,children:`Root reference`})})}),parameters:S},O={render:()=>{let[e,t]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let e=setTimeout(()=>{t(!0)},50);return()=>{clearTimeout(e)}},[]),(0,v.jsxs)(`div`,{className:o(`flex`,`flex-row`,`p-xl`,`items-center`,`justify-between`,`w-full`),style:{blockSize:`100vh`},children:[(0,v.jsx)(`div`,{className:o(`flex`,`flex-row`,`justify-end`),style:{inlineSize:`35%`},children:(0,v.jsx)(l,{initialOpen:!0,placement:`left`,content:(0,v.jsx)(`p`,{className:x,children:`placeholder`}),children:(0,v.jsx)(d,{label:`left`})})}),(0,v.jsxs)(`div`,{className:o(`flex`,`flex-col`,`self-center`,`gap-3xl`,`items-center`),style:{inlineSize:`30%`},children:[(0,v.jsx)(l,{initialOpen:!0,placement:`top`,content:(0,v.jsx)(`p`,{className:x,children:`placeholder`}),children:(0,v.jsx)(d,{label:`top`})}),(0,v.jsx)(l,{initialOpen:!0,placement:`bottom`,content:(0,v.jsx)(`p`,{className:x,children:`placeholder`}),children:(0,v.jsx)(d,{label:`bottom`})})]}),(0,v.jsx)(`div`,{style:{inlineSize:`35%`},children:(0,v.jsx)(l,{initialOpen:!0,placement:`right`,content:(0,v.jsx)(`p`,{className:x,children:`placeholder`}),children:(0,v.jsx)(d,{label:`right`})})}),(0,v.jsx)(`div`,{style:{inlineSize:`35%`},children:(0,v.jsx)(l,{tree:!0,p:`xl`,placement:`top`,initialOpen:!0,content:(0,v.jsx)(l,{content:`Nested content`,p:`xl`,placement:`left`,open:e,onOpenChange:t,children:(0,v.jsx)(`button`,{type:`button`,className:x,children:`Nested reference`})}),children:(0,v.jsx)(`button`,{type:`button`,className:x,children:`Root reference`})})})]})},parameters:{controls:{disable:!0}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: ({
    demoContainerHeight,
    demoContainerWidth,
    demoContentHeight,
    demoContentWidth,
    content,
    ...props
  }) => <div className={classNames("flex", "border-box", "flex-col", "items-center", "justify-center")} style={{
    inlineSize: demoContainerWidth,
    blockSize: demoContainerHeight
  }}>
      <Popover {...props} content={<div style={{
      blockSize: demoContentHeight,
      inlineSize: demoContentWidth
    }}>
            {content}
          </div>} p="xl" pb="m">
        <Button label="My trigger" />
      </Popover>
    </div>,
  args: {
    demoContainerWidth: 400,
    demoContainerHeight: 400,
    demoContentWidth: 100,
    demoContentHeight: 100,
    content: "content string",
    placement: "bottom-start",
    onOpenChange: fn(),
    initialOpen: true,
    minWidth: "reference",
    placementUpdate: false
  },
  argTypes: {
    ...PopoverDemoContentArgTypes,
    ...PopoverArgTypes
  },
  parameters: chromatic
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "flex-col", "p-xl", "gap-xl")} style={{
    inlineSize: "400px"
  }}>
      <Popover {...props} minWidth="reference" content={<List>
            <ListItem onClick={() => {}}>Item 1</ListItem>
            <ListItem onClick={() => {}}>Item 1</ListItem>
          </List>}>
        <Button label="My trigger" asDropdown />
      </Popover>
    </div>,
  args: {},
  argTypes: {
    ...PopoverArgTypes
  },
  parameters: chromatic
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [state, setState] = useState<HTMLButtonElement | undefined>();
    const [open, setOpen] = useState(false);
    return <div className={classNames("flex", "flex-col", "gap-xl")} style={{
      inlineSize: "400px"
    }}>
        <Button label="My trigger" ref={(e: HTMLButtonElement) => {
        setState(e);
      }} onClick={() => {
        setOpen(!open);
      }} />
        <Popover {...props} anchorEl={state} open={open} onOpenChange={setOpen} content={<p className={bodySClass}>placeholder</p>} />
      </div>;
  },
  args: {
    minWidth: "reference"
  },
  argTypes: {
    ...PopoverArgTypes
  },
  parameters: chromatic
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [clickPos, setClickPos] = useState<PopoverProps["anchorPosition"] | undefined>();
    const [open, setOpen] = useState(false);
    return <div className={classNames("flex", "flex-col", "gap-xl")} style={{
      inlineSize: "400px"
    }}>
        <Menu.Trigger menu={<Menu.Item label="Delete" onClick={e => {
        setClickPos({
          top: e.clientY,
          left: e.clientX
        });
        setOpen(!open);
      }} />}>
          <Button label="OpenMenu" asDropdown />
        </Menu.Trigger>
        <Popover {...props} anchorPosition={clickPos} p="m" open={open} onOpenChange={setOpen} content={<form className={classNames("flex", "flex-col", "gap-m", "items-start", "bg-default")} onSubmit={e => {
        e.preventDefault();
      }}>
              <h2 className={classNames("flex", "text-default", "font-heading-s")}>
                Delete confirmation
              </h2>
              <AlertInline severity="warning">
                This action can&apos;t be reverted
              </AlertInline>
              <div className={classNames("flex", "flex-col", "gap-m", "w-full", "items-end")}>
                <Button variant="primary" label="Yes" type="submit" />
              </div>
            </form>} />
      </div>;
  },
  args: {
    minWidth: "reference"
  },
  argTypes: {
    ...PopoverArgTypes
  },
  parameters: chromatic
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "flex-col", "gap-xl", "p-xl", "items-center", "justify-center")} style={{
    inlineSize: "400px",
    blockSize: "300px"
  }}>
      <Popover tree p="xl" placement="top" content={<Popover content="Nested content" p="xl" placement="right">
            <button type="button">Nested reference</button>
          </Popover>}>
        <button type="button">Root reference</button>
      </Popover>
    </div>,
  parameters: chromatic
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showNested, setShowNested] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowNested(true);
      }, 50);
      return () => {
        clearTimeout(timer);
      };
    }, []);
    return <div className={classNames("flex", "flex-row", "p-xl", "items-center", "justify-between", "w-full")} style={{
      blockSize: "100vh"
    }}>
        <div className={classNames("flex", "flex-row", "justify-end")} style={{
        inlineSize: "35%"
      }}>
          <Popover initialOpen placement="left" content={<p className={bodySClass}>placeholder</p>}>
            <Button label="left" />
          </Popover>
        </div>

        <div className={classNames("flex", "flex-col", "self-center", "gap-3xl", "items-center")} style={{
        inlineSize: "30%"
      }}>
          <Popover initialOpen placement="top" content={<p className={bodySClass}>placeholder</p>}>
            <Button label="top" />
          </Popover>
          <Popover initialOpen placement="bottom" content={<p className={bodySClass}>placeholder</p>}>
            <Button label="bottom" />
          </Popover>
        </div>
        <div style={{
        inlineSize: "35%"
      }}>
          <Popover initialOpen placement="right" content={<p className={bodySClass}>placeholder</p>}>
            <Button label="right" />
          </Popover>
        </div>
        <div style={{
        inlineSize: "35%"
      }}>
          <Popover tree p="xl" placement="top" initialOpen content={<Popover content="Nested content" p="xl" placement="left" open={showNested} onOpenChange={setShowNested}>
                <button type="button" className={bodySClass}>
                  Nested reference
                </button>
              </Popover>}>
            <button type="button" className={bodySClass}>
              Root reference
            </button>
          </Popover>
        </div>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...O.parameters?.docs?.source}}},k=[`Playground`,`CustomDropdown`,`AnchorAPI`,`AnchorPositionAPI`,`Nested`,`VisualTest`]}));A();export{T as AnchorAPI,E as AnchorPositionAPI,w as CustomDropdown,D as Nested,C as Playground,O as VisualTest,k as __namedExportsOrder,b as default,A as n,g as t};