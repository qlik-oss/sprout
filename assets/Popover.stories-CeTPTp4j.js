import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{Gt as r,H as i,In as a,K as o,Ln as s,U as c,V as l,ct as u,ir as d,jt as f,ln as p,st as m,v as h,wt as g,yt as _}from"./iframe-B0xl5hqz.js";function v(e,t){let n=(0,y.useRef)(null),r=(0,y.useRef)(document.activeElement),i=(0,y.useRef)(null);return(0,y.useEffect)(()=>{if(t||t===void 0){let t=n.current;i.current=document.activeElement,i.current.blur();let a=t.querySelectorAll(b),o=a.length;if(o===0)throw`At least one tabbable element needs to be present within your target. If you feel this is a mistake and there is a tabbable element on your target, try adding your tabbable element within the optional tabbableElems parameter.`;let s=a[0],c=a[o-1];if(e===`first`||e===void 0)s.focus();else if(e===`container`)t.focus();else throw Error(`initialFocus must be either the values 'first', 'container'. You specified initialFocus as ${typeof e}`);let l=e=>{if(console.log(`handleTab`,{firstElement:s,lastElement:c}),e.key===`Tab`){let t=document.activeElement,n=t=>(t.focus(),e.preventDefault());!e.shiftKey&&t===c&&n(s),e.shiftKey&&t===s&&n(c)}};return t.addEventListener(`keydown`,l),()=>{r.current?r.current.focus():i.current&&i.current.focus(),t.removeEventListener(`keydown`,l)}}},[t]),n}var y,b,x=t((()=>{y=e(d()),b=`a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), area[href], form, audio[controls], video[controls], [tabindex="0"]`}));function S(e){return(0,C.jsx)(`div`,{ref:v(`container`,!0),...e})}var C,w=t((()=>{C=s(),d(),x()})),T=t((()=>{w()})),E,D,O=t((()=>{E={demoContentWidth:{control:{type:`number`,min:0,step:50}},demoContentHeight:{control:{type:`number`,min:0,step:50}},demoContainerWidth:{control:{type:`number`,min:0,step:50}},demoContainerHeight:{control:{type:`number`,min:0,step:50}}},D={content:{control:!1,description:`The content of the popover.`,table:{type:{summary:`ReactNode`}}},children:{control:!1,description:`The anchor element that the popover is attached to. It's not required as you can use anchorPosition instead.`,table:{type:{summary:`ReactNode`}}},anchorEl:{control:!1,description:`The anchor element that the popover is attached to. It's not required as you can use anchorPosition instead.`,table:{type:{summary:`HTMLElement | null`}}},placement:{control:{type:`select`},options:[void 0,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`,`right`,`right-start`,`right-end`,`top`,`top-start`,`top-end`],description:`The preferred placement of the popover relative to the anchor element.`,table:{defaultValue:{summary:`bottom-start`},type:{summary:`string`}}},placementUpdate:{control:{type:`select`},options:[void 0,!0,!1,`dropdown`],description:`If true, the popover will update its position when the anchor element changes position.`,table:{defaultValue:{summary:void 0},type:{summary:`boolean`}}},anchorPosition:{control:{type:`object`},description:`The position of the anchor element in the viewport. Used when there is no children prop.`,table:{type:{summary:`{ top: number; left: number }`}}},open:{control:{type:`select`},options:[void 0,!0,!1],description:`Controls the visibility of the popover. If undefined, the popover will manage its own state.`,table:{defaultValue:{summary:void 0},type:{summary:`boolean`}}},initialOpen:{control:{type:`select`},options:[void 0,!0,!1],description:`Controls the initial visibility of the popover.`,table:{defaultValue:{summary:void 0},type:{summary:`boolean`}}},onOpenChange:{control:!1,description:`Callback fired when the open state of the popover changes.`,table:{type:{summary:`(open: boolean) => void`}}},hideBackdrop:{control:{type:`boolean`},description:`If true, hides the backdrop overlay (no overlay is rendered behind the popover), allowing interaction with the background.`,table:{defaultValue:{summary:`true`},type:{summary:`boolean`}}},disableScrollLock:{control:{type:`boolean`},description:`If true, disables scroll locking when the backdrop/overlay is shown (i.e., when hideBackdrop is false), allowing the page to continue scrolling in the background.`,table:{defaultValue:{summary:`true`},type:{summary:`boolean`}}},width:{control:{type:`select`},options:[void 0,`reference`,`screen`,`xxs`,`xs`,`s`,`m`,`l`,`xl`,`100px`],description:`Sets the width of the popover. Can be a predefined size or a custom CSS value.`,table:{defaultValue:{summary:`fit-content`},type:{summary:` "reference" | "screen" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | string`}}},minWidth:{control:{type:`select`},options:[void 0,`reference`,`screen`,`xxs`,`xs`,`s`,`m`,`l`,`xl`,`100px`],description:`Sets the minimum width of the popover. Can be a predefined size or a custom CSS value.`,table:{defaultValue:{summary:void 0},type:{summary:` "reference" | "screen" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | string`}}},maxWidth:{control:{type:`select`},options:[void 0,`reference`,`screen`,`xxs`,`xs`,`s`,`m`,`l`,`xl`,`100px`],description:`Sets the maximum width of the popover. Can be a predefined size or a custom CSS value.`,table:{defaultValue:{summary:`s`},type:{summary:` "reference" | "screen" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | string`}}},role:{control:{type:`text`},description:`The ARIA role attribute for the popover element.`,table:{defaultValue:{summary:`dialog`},type:{summary:`string`}}},"aria-label":{control:{type:`text`},description:`The ARIA label attribute for the popover element.`,table:{defaultValue:{summary:`popover`},type:{summary:`string`}}},forceMount:{control:{type:`boolean`},description:`If true, the popover will be rendered in the DOM even when it's not open.`,table:{defaultValue:{summary:`false`},type:{summary:`boolean`}}},onMount:{control:!1,description:`This callback is called multiple times controlled by react itself under the reference callback. Helpful to manage react state or query HTML elements.`,table:{type:{summary:`(reference?: HTMLElement, floating?: HTMLElement) => void;`}}},tree:{control:{type:`boolean`},description:`If true, the popover will be able to manage popover in popover.`,table:{defaultValue:{summary:`false`},type:{summary:`boolean`}}},p:{control:{type:`select`},options:[void 0,`0`,`xxs`,`xs`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`],description:`Sets padding on all sides of the popover.`,table:{defaultValue:{summary:void 0},type:{summary:` "0" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl"`}}}},D.px=D.p,D.py=D.p,D.pt=D.p,D.pr=D.p,D.pb=D.p,D.pl=D.p})),k=n({AnchorAPI:()=>R,AnchorPositionAPI:()=>z,CustomDropdown:()=>L,Nested:()=>B,Playground:()=>I,PopoverWithList:()=>H,VisualTest:()=>V,__namedExportsOrder:()=>U,default:()=>N}),A,j,M,N,P,F,I,L,R,z,B,V,H,U,W=t((()=>{A=e(d()),T(),h(),O(),f(),j=s(),{fn:M}=__STORYBOOK_MODULE_TEST__,N={title:`Components/Popover`,component:m,argTypes:{...D}},P=a(`font-body-s`,`text-default`),F={chromatic:{disableSnapshot:!0}},I={render:({demoContainerHeight:e,demoContainerWidth:t,demoContentHeight:n,demoContentWidth:r,content:i,...o})=>(0,j.jsx)(`div`,{className:a(`flex`,`border-box`,`flex-col`,`items-center`,`justify-center`),style:{inlineSize:t,blockSize:e},children:(0,j.jsx)(m,{...o,content:(0,j.jsx)(`div`,{style:{blockSize:n,inlineSize:r},children:i}),p:`xl`,pb:`m`,children:(0,j.jsx)(g,{label:`My trigger`})})}),args:{demoContainerWidth:400,demoContainerHeight:400,demoContentWidth:100,demoContentHeight:100,content:`content string`,placement:`bottom-start`,onOpenChange:M(),initialOpen:!0,minWidth:`reference`,placementUpdate:!1},argTypes:{...E,...D},parameters:F},L={render:e=>(0,j.jsx)(`div`,{className:a(`flex`,`flex-col`,`p-xl`,`gap-xl`),style:{inlineSize:`400px`},children:(0,j.jsx)(m,{...e,minWidth:`reference`,content:(0,j.jsxs)(i,{children:[(0,j.jsx)(c,{onClick:()=>{},children:`Item 1`}),(0,j.jsx)(c,{onClick:()=>{},children:`Item 1`})]}),children:(0,j.jsx)(g,{label:`My trigger`,asDropdown:!0})})}),args:{},argTypes:{...D},parameters:F},R={render:e=>{let[t,n]=(0,A.useState)(),[r,i]=(0,A.useState)(!1);return(0,j.jsxs)(`div`,{className:a(`flex`,`flex-col`,`gap-xl`),style:{inlineSize:`400px`},children:[(0,j.jsx)(g,{label:`My trigger`,ref:e=>{n(e)},onClick:()=>{i(!r)}}),(0,j.jsx)(m,{...e,anchorEl:t,open:r,onOpenChange:i,content:(0,j.jsx)(`p`,{className:P,children:`placeholder`})})]})},args:{minWidth:`reference`},argTypes:{...D},parameters:F},z={render:e=>{let[t,n]=(0,A.useState)(),[r,i]=(0,A.useState)(!1);return(0,j.jsxs)(`div`,{className:a(`flex`,`flex-col`,`gap-xl`),style:{inlineSize:`400px`},children:[(0,j.jsx)(o.Trigger,{menu:(0,j.jsx)(o.Item,{label:`Delete`,onClick:e=>{n({top:e.clientY,left:e.clientX}),i(!r)}}),children:(0,j.jsx)(g,{label:`OpenMenu`,asDropdown:!0})}),(0,j.jsx)(m,{...e,anchorPosition:t,p:`m`,open:r,onOpenChange:i,content:(0,j.jsxs)(`form`,{className:a(`flex`,`flex-col`,`gap-m`,`items-start`,`bg-default`),onSubmit:e=>{e.preventDefault()},children:[(0,j.jsx)(`h2`,{className:a(`flex`,`text-default`,`font-heading-s`),children:`Delete confirmation`}),(0,j.jsx)(_,{severity:`warning`,children:`This action can't be reverted`}),(0,j.jsx)(`div`,{className:a(`flex`,`flex-col`,`gap-m`,`w-full`,`items-end`),children:(0,j.jsx)(g,{variant:`primary`,label:`Yes`,type:`submit`})})]})})]})},args:{minWidth:`reference`},argTypes:{...D},parameters:F},B={render:()=>(0,j.jsx)(`div`,{className:a(`flex`,`flex-col`,`gap-xl`,`p-xl`,`items-center`,`justify-center`),style:{inlineSize:`400px`,blockSize:`300px`},children:(0,j.jsx)(m,{tree:!0,p:`xl`,placement:`top`,content:(0,j.jsx)(m,{content:`Nested content`,p:`xl`,placement:`right`,children:(0,j.jsx)(`button`,{type:`button`,children:`Nested reference`})}),children:(0,j.jsx)(`button`,{type:`button`,children:`Root reference`})})}),parameters:F},V={render:()=>{let[e,t]=(0,A.useState)(!1);return(0,A.useEffect)(()=>{let e=setTimeout(()=>{t(!0)},50);return()=>{clearTimeout(e)}},[]),(0,j.jsxs)(`div`,{className:a(`flex`,`flex-row`,`p-xl`,`items-center`,`justify-between`,`w-full`),style:{blockSize:`100vh`},children:[(0,j.jsx)(`div`,{className:a(`flex`,`flex-row`,`justify-end`),style:{inlineSize:`35%`},children:(0,j.jsx)(m,{initialOpen:!0,placement:`left`,content:(0,j.jsx)(`p`,{className:P,children:`placeholder`}),children:(0,j.jsx)(g,{label:`left`})})}),(0,j.jsxs)(`div`,{className:a(`flex`,`flex-col`,`self-center`,`gap-3xl`,`items-center`),style:{inlineSize:`30%`},children:[(0,j.jsx)(m,{initialOpen:!0,placement:`top`,content:(0,j.jsx)(`p`,{className:P,children:`placeholder`}),children:(0,j.jsx)(g,{label:`top`})}),(0,j.jsx)(m,{initialOpen:!0,placement:`bottom`,content:(0,j.jsx)(`p`,{className:P,children:`placeholder`}),children:(0,j.jsx)(g,{label:`bottom`})})]}),(0,j.jsx)(`div`,{style:{inlineSize:`35%`},children:(0,j.jsx)(m,{initialOpen:!0,placement:`right`,content:(0,j.jsx)(`p`,{className:P,children:`placeholder`}),children:(0,j.jsx)(g,{label:`right`})})}),(0,j.jsx)(`div`,{style:{inlineSize:`35%`},children:(0,j.jsx)(m,{tree:!0,p:`xl`,placement:`top`,initialOpen:!0,content:(0,j.jsx)(m,{content:`Nested content`,p:`xl`,placement:`left`,open:e,onOpenChange:t,children:(0,j.jsx)(`button`,{type:`button`,className:P,children:`Nested reference`})}),children:(0,j.jsx)(`button`,{type:`button`,className:P,children:`Root reference`})})})]})},parameters:{controls:{disable:!0}}},H={render:e=>(0,j.jsxs)(`div`,{className:a(`bg-default`,`text-default`),children:[(0,j.jsx)(`p`,{children:`This is a demo of how to build keyboard navigation in a popover`}),(0,j.jsx)(m,{...e,content:(0,j.jsx)(S,{children:(0,j.jsxs)(i,{useGesture:!0,children:[(0,j.jsx)(c,{selected:!0,onClick:()=>{},children:(0,j.jsx)(u,{label:`select item 1`})}),(0,j.jsx)(c,{onClick:()=>{},children:(0,j.jsx)(u,{label:`select item 2`})}),(0,j.jsx)(l,{}),(0,j.jsxs)(c,{onClick:()=>{},children:[(0,j.jsx)(p,{}),`Inbox`]}),(0,j.jsxs)(c,{onClick:()=>{},children:[(0,j.jsx)(r,{}),`Draft`]}),(0,j.jsxs)(c,{disabled:!0,onClick:()=>{},children:[(0,j.jsx)(r,{}),`Disabled`]})]})}),p:`xl`,pb:`m`,children:(0,j.jsx)(g,{label:`My trigger`})})]}),parameters:F},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("bg-default", "text-default")}>
      <p>This is a demo of how to build keyboard navigation in a popover</p>
      <Popover {...props} content={<FocusTrap>
            <List useGesture>
              <ListItem selected onClick={() => {}}>
                <Checkbox label="select item 1" />
              </ListItem>
              <ListItem onClick={() => {}}>
                <Checkbox label="select item 2" />
              </ListItem>
              <ListDivider />
              <ListItem onClick={() => {}}>
                <InboxIcon />
                Inbox
              </ListItem>
              <ListItem onClick={() => {}}>
                <SendIcon />
                Draft
              </ListItem>
              <ListItem disabled onClick={() => {}}>
                <SendIcon />
                Disabled
              </ListItem>
            </List>
          </FocusTrap>} p="xl" pb="m">
        <Button label="My trigger" />
      </Popover>
    </div>,
  parameters: chromatic
}`,...H.parameters?.docs?.source}}},U=[`Playground`,`CustomDropdown`,`AnchorAPI`,`AnchorPositionAPI`,`Nested`,`VisualTest`,`PopoverWithList`]}));W();export{R as AnchorAPI,z as AnchorPositionAPI,L as CustomDropdown,B as Nested,I as Playground,H as PopoverWithList,V as VisualTest,U as __namedExportsOrder,N as default,W as n,k as t};