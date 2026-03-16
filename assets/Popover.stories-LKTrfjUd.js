import{i as e,n as t}from"./chunk-DseTPa7n.js";import{t as n}from"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as r}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{J as i,P as a,W as o,_ as s,g as c,hn as l,x as u}from"./iframe-BRSAI4nO.js";var d=e(n()),f={demoContentWidth:{control:{type:`number`,min:0,step:50}},demoContentHeight:{control:{type:`number`,min:0,step:50}},demoContainerWidth:{control:{type:`number`,min:0,step:50}},demoContainerHeight:{control:{type:`number`,min:0,step:50}}},p={content:{control:!1,description:`The content of the popover.`,table:{type:{summary:`ReactNode`}}},children:{control:!1,description:`The anchor element that the popover is attached to. It's not required as you can use anchorPosition instead.`,table:{type:{summary:`ReactNode`}}},anchorEl:{control:!1,description:`The anchor element that the popover is attached to. It's not required as you can use anchorPosition instead.`,table:{type:{summary:`HTMLElement | null`}}},placement:{control:{type:`select`},options:[void 0,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`,`right`,`right-start`,`right-end`,`top`,`top-start`,`top-end`],description:`The preferred placement of the popover relative to the anchor element.`,table:{defaultValue:{summary:`bottom-start`},type:{summary:`string`}}},placementUpdate:{control:{type:`select`},options:[void 0,!0,!1,`dropdown`],description:`If true, the popover will update its position when the anchor element changes position.`,table:{defaultValue:{summary:void 0},type:{summary:`boolean`}}},anchorPosition:{control:{type:`object`},description:`The position of the anchor element in the viewport. Used when there is no children prop.`,table:{type:{summary:`{ top: number; left: number }`}}},open:{control:{type:`select`},options:[void 0,!0,!1],description:`Controls the visibility of the popover. If undefined, the popover will manage its own state.`,table:{defaultValue:{summary:void 0},type:{summary:`boolean`}}},initialOpen:{control:{type:`select`},options:[void 0,!0,!1],description:`Controls the initial visibility of the popover.`,table:{defaultValue:{summary:void 0},type:{summary:`boolean`}}},onOpenChange:{control:!1,description:`Callback fired when the open state of the popover changes.`,table:{type:{summary:`(open: boolean) => void`}}},hideBackdrop:{control:{type:`boolean`},description:`If true, hides the backdrop overlay (no overlay is rendered behind the popover), allowing interaction with the background.`,table:{defaultValue:{summary:`true`},type:{summary:`boolean`}}},disableScrollLock:{control:{type:`boolean`},description:`If true, disables scroll locking when the backdrop/overlay is shown (i.e., when hideBackdrop is false), allowing the page to continue scrolling in the background.`,table:{defaultValue:{summary:`true`},type:{summary:`boolean`}}},width:{control:{type:`select`},options:[void 0,`reference`,`screen`,`xxs`,`xs`,`s`,`m`,`l`,`xl`,`100px`],description:`Sets the width of the popover. Can be a predefined size or a custom CSS value.`,table:{defaultValue:{summary:`fit-content`},type:{summary:` "reference" | "screen" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | string`}}},minWidth:{control:{type:`select`},options:[void 0,`reference`,`screen`,`xxs`,`xs`,`s`,`m`,`l`,`xl`,`100px`],description:`Sets the minimum width of the popover. Can be a predefined size or a custom CSS value.`,table:{defaultValue:{summary:void 0},type:{summary:` "reference" | "screen" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | string`}}},maxWidth:{control:{type:`select`},options:[void 0,`reference`,`screen`,`xxs`,`xs`,`s`,`m`,`l`,`xl`,`100px`],description:`Sets the maximum width of the popover. Can be a predefined size or a custom CSS value.`,table:{defaultValue:{summary:`s`},type:{summary:` "reference" | "screen" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | string`}}},role:{control:{type:`text`},description:`The ARIA role attribute for the popover element.`,table:{defaultValue:{summary:`dialog`},type:{summary:`string`}}},"aria-label":{control:{type:`text`},description:`The ARIA label attribute for the popover element.`,table:{defaultValue:{summary:`popover`},type:{summary:`string`}}},forceMount:{control:{type:`boolean`},description:`If true, the popover will be rendered in the DOM even when it's not open.`,table:{defaultValue:{summary:`false`},type:{summary:`boolean`}}},onMount:{control:!1,description:`This callback is called multiple times controlled by react itself under the reference callback. Helpful to manage react state or query HTML elements.`,table:{type:{summary:`(reference?: HTMLElement, floating?: HTMLElement) => void;`}}},tree:{control:{type:`boolean`},description:`If true, the popover will be able to manage popover in popover.`,table:{defaultValue:{summary:`false`},type:{summary:`boolean`}}},p:{control:{type:`select`},options:[void 0,`0`,`xxs`,`xs`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`],description:`Sets padding on all sides of the popover.`,table:{defaultValue:{summary:void 0},type:{summary:` "0" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl"`}}}};p.px=p.p,p.py=p.p,p.pt=p.p,p.pr=p.p,p.pb=p.p,p.pl=p.p;var m=t({AnchorAPI:()=>S,AnchorPositionAPI:()=>C,CustomDropdown:()=>x,Nested:()=>w,Playground:()=>b,VisualTest:()=>T,__namedExportsOrder:()=>E,default:()=>_}),h=r(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/Popover`,component:a,argTypes:{...p}},v=l(`font-body-s`,`text-default`),y={chromatic:{disableSnapshot:!0}},b={render:({demoContainerHeight:e,demoContainerWidth:t,demoContentHeight:n,demoContentWidth:r,content:o,...s})=>(0,h.jsx)(`div`,{className:l(`flex`,`border-box`,`flex-col`,`items-center`,`justify-center`),style:{inlineSize:t,blockSize:e},children:(0,h.jsx)(a,{...s,content:(0,h.jsx)(`div`,{style:{blockSize:n,inlineSize:r},children:o}),p:`xl`,pb:`m`,children:(0,h.jsx)(i,{label:`My trigger`})})}),args:{demoContainerWidth:400,demoContainerHeight:400,demoContentWidth:100,demoContentHeight:100,content:`content string`,placement:`bottom-start`,onOpenChange:g(),initialOpen:!0,minWidth:`reference`,placementUpdate:!1},argTypes:{...f,...p},parameters:y},x={render:e=>(0,h.jsx)(`div`,{className:l(`flex`,`flex-col`,`p-xl`,`gap-xl`),style:{inlineSize:`400px`},children:(0,h.jsx)(a,{...e,minWidth:`reference`,content:(0,h.jsxs)(c,{children:[(0,h.jsx)(s,{onClick:()=>{},children:`Item 1`}),(0,h.jsx)(s,{onClick:()=>{},children:`Item 1`})]}),children:(0,h.jsx)(i,{label:`My trigger`,asDropdown:!0})})}),args:{},argTypes:{...p},parameters:y},S={render:e=>{let[t,n]=(0,d.useState)(),[r,o]=(0,d.useState)(!1);return(0,h.jsxs)(`div`,{className:l(`flex`,`flex-col`,`gap-xl`),style:{inlineSize:`400px`},children:[(0,h.jsx)(i,{label:`My trigger`,ref:e=>{n(e)},onClick:()=>{o(!r)}}),(0,h.jsx)(a,{...e,anchorEl:t,open:r,onOpenChange:o,content:(0,h.jsx)(`p`,{className:v,children:`placeholder`})})]})},args:{minWidth:`reference`},argTypes:{...p},parameters:y},C={render:e=>{let[t,n]=(0,d.useState)(),[r,s]=(0,d.useState)(!1);return(0,h.jsxs)(`div`,{className:l(`flex`,`flex-col`,`gap-xl`),style:{inlineSize:`400px`},children:[(0,h.jsx)(u.Trigger,{menu:(0,h.jsx)(u.Item,{label:`Delete`,onClick:e=>{n({top:e.clientY,left:e.clientX}),s(!r)}}),children:(0,h.jsx)(i,{label:`OpenMenu`,asDropdown:!0})}),(0,h.jsx)(a,{...e,anchorPosition:t,p:`m`,open:r,onOpenChange:s,content:(0,h.jsxs)(`form`,{className:l(`flex`,`flex-col`,`gap-m`,`items-start`,`bg-default`),onSubmit:e=>{e.preventDefault()},children:[(0,h.jsx)(`h2`,{className:l(`flex`,`text-default`,`font-heading-s`),children:`Delete confirmation`}),(0,h.jsx)(o,{severity:`warning`,children:`This action can't be reverted`}),(0,h.jsx)(`div`,{className:l(`flex`,`flex-col`,`gap-m`,`w-full`,`items-end`),children:(0,h.jsx)(i,{variant:`primary`,label:`Yes`,type:`submit`})})]})})]})},args:{minWidth:`reference`},argTypes:{...p},parameters:y},w={render:()=>(0,h.jsx)(`div`,{className:l(`flex`,`flex-col`,`gap-xl`,`p-xl`,`items-center`,`justify-center`),style:{inlineSize:`400px`,blockSize:`300px`},children:(0,h.jsx)(a,{tree:!0,p:`xl`,placement:`top`,content:(0,h.jsx)(a,{content:`Nested content`,p:`xl`,placement:`right`,children:(0,h.jsx)(`button`,{type:`button`,children:`Nested reference`})}),children:(0,h.jsx)(`button`,{type:`button`,children:`Root reference`})})}),parameters:y},T={render:()=>{let[e,t]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{let e=setTimeout(()=>{t(!0)},50);return()=>{clearTimeout(e)}},[]),(0,h.jsxs)(`div`,{className:l(`flex`,`flex-row`,`p-xl`,`items-center`,`justify-between`,`w-full`),style:{blockSize:`100vh`},children:[(0,h.jsx)(`div`,{className:l(`flex`,`flex-row`,`justify-end`),style:{inlineSize:`35%`},children:(0,h.jsx)(a,{initialOpen:!0,placement:`left`,content:(0,h.jsx)(`p`,{className:v,children:`placeholder`}),children:(0,h.jsx)(i,{label:`left`})})}),(0,h.jsxs)(`div`,{className:l(`flex`,`flex-col`,`self-center`,`gap-3xl`,`items-center`),style:{inlineSize:`30%`},children:[(0,h.jsx)(a,{initialOpen:!0,placement:`top`,content:(0,h.jsx)(`p`,{className:v,children:`placeholder`}),children:(0,h.jsx)(i,{label:`top`})}),(0,h.jsx)(a,{initialOpen:!0,placement:`bottom`,content:(0,h.jsx)(`p`,{className:v,children:`placeholder`}),children:(0,h.jsx)(i,{label:`bottom`})})]}),(0,h.jsx)(`div`,{style:{inlineSize:`35%`},children:(0,h.jsx)(a,{initialOpen:!0,placement:`right`,content:(0,h.jsx)(`p`,{className:v,children:`placeholder`}),children:(0,h.jsx)(i,{label:`right`})})}),(0,h.jsx)(`div`,{style:{inlineSize:`35%`},children:(0,h.jsx)(a,{tree:!0,p:`xl`,placement:`top`,initialOpen:!0,content:(0,h.jsx)(a,{content:`Nested content`,p:`xl`,placement:`left`,open:e,onOpenChange:t,children:(0,h.jsx)(`button`,{type:`button`,className:v,children:`Nested reference`})}),children:(0,h.jsx)(`button`,{type:`button`,className:v,children:`Root reference`})})})]})},parameters:{controls:{disable:!0}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};var E=[`Playground`,`CustomDropdown`,`AnchorAPI`,`AnchorPositionAPI`,`Nested`,`VisualTest`];export{S as AnchorAPI,C as AnchorPositionAPI,x as CustomDropdown,w as Nested,b as Playground,T as VisualTest,E as __namedExportsOrder,_ as default,m as t};