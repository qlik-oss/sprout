import{r as d,j as e}from"./iframe-CxjlquLv.js";import{P as n}from"./Popover-D095V7L6.js";import{B as r}from"./Button-DovarDo_.js";import{c as o}from"./classNames-OYhIMgh8.js";import{M as g}from"./Menu-BRV3ljPm.js";import{A as N}from"./AlertInline-K94GNLTd.js";import{L as j,a as S}from"./List-BVLqhIS2.js";const C={demoContentWidth:{control:{type:"number",min:0,step:50}},demoContentHeight:{control:{type:"number",min:0,step:50}},demoContainerWidth:{control:{type:"number",min:0,step:50}},demoContainerHeight:{control:{type:"number",min:0,step:50}}},t={content:{control:!1,description:"The content of the popover.",table:{type:{summary:"ReactNode"}}},children:{control:!1,description:"The anchor element that the popover is attached to. It's not required as you can use anchorPosition instead.",table:{type:{summary:"ReactNode"}}},anchorEl:{control:!1,description:"The anchor element that the popover is attached to. It's not required as you can use anchorPosition instead.",table:{type:{summary:"HTMLElement | null"}}},placement:{control:{type:"select"},options:[void 0,"bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end","top","top-start","top-end"],description:"The preferred placement of the popover relative to the anchor element.",table:{defaultValue:{summary:"bottom-start"},type:{summary:"string"}}},placementUpdate:{control:{type:"select"},options:[void 0,!0,!1,"dropdown"],description:"If true, the popover will update its position when the anchor element changes position.",table:{defaultValue:{summary:void 0},type:{summary:"boolean"}}},anchorPosition:{control:{type:"object"},description:"The position of the anchor element in the viewport. Used when there is no children prop.",table:{type:{summary:"{ top: number; left: number }"}}},open:{control:{type:"select"},options:[void 0,!0,!1],description:"Controls the visibility of the popover. If undefined, the popover will manage its own state.",table:{defaultValue:{summary:void 0},type:{summary:"boolean"}}},initialOpen:{control:{type:"select"},options:[void 0,!0,!1],description:"Controls the initial visibility of the popover.",table:{defaultValue:{summary:void 0},type:{summary:"boolean"}}},onOpenChange:{control:!1,description:"Callback fired when the open state of the popover changes.",table:{type:{summary:"(open: boolean) => void"}}},hideBackdrop:{control:{type:"boolean"},description:"If true, hides the backdrop overlay (no overlay is rendered behind the popover), allowing interaction with the background.",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},disableScrollLock:{control:{type:"boolean"},description:"If true, disables scroll locking when the backdrop/overlay is shown (i.e., when hideBackdrop is false), allowing the page to continue scrolling in the background.",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},width:{control:{type:"select"},options:[void 0,"reference","screen","xxs","xs","s","m","l","xl","100px"],description:"Sets the width of the popover. Can be a predefined size or a custom CSS value.",table:{defaultValue:{summary:"fit-content"},type:{summary:' "reference" | "screen" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | string'}}},minWidth:{control:{type:"select"},options:[void 0,"reference","screen","xxs","xs","s","m","l","xl","100px"],description:"Sets the minimum width of the popover. Can be a predefined size or a custom CSS value.",table:{defaultValue:{summary:void 0},type:{summary:' "reference" | "screen" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | string'}}},maxWidth:{control:{type:"select"},options:[void 0,"reference","screen","xxs","xs","s","m","l","xl","100px"],description:"Sets the maximum width of the popover. Can be a predefined size or a custom CSS value.",table:{defaultValue:{summary:"s"},type:{summary:' "reference" | "screen" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | string'}}},role:{control:{type:"text"},description:"The ARIA role attribute for the popover element.",table:{defaultValue:{summary:"dialog"},type:{summary:"string"}}},"aria-label":{control:{type:"text"},description:"The ARIA label attribute for the popover element.",table:{defaultValue:{summary:"popover"},type:{summary:"string"}}},forceMount:{control:{type:"boolean"},description:"If true, the popover will be rendered in the DOM even when it's not open.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onMount:{control:!1,description:"This callback is called multiple times controlled by react itself under the reference callback. Helpful to manage react state or query HTML elements.",table:{type:{summary:"(reference?: HTMLElement, floating?: HTMLElement) => void;"}}},tree:{control:{type:"boolean"},description:"If true, the popover will be able to manage popover in popover.",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},p:{control:{type:"select"},options:[void 0,"0","xxs","xs","s","m","l","xl","xxl","3xl"],description:"Sets padding on all sides of the popover.",table:{defaultValue:{summary:void 0},type:{summary:' "0" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl"'}}}};t.px=t.p;t.py=t.p;t.pt=t.p;t.pr=t.p;t.pb=t.p;t.pl=t.p;const{fn:P}=__STORYBOOK_MODULE_TEST__,w={title:"Components/Popover",component:n,argTypes:{...t}},m=o("font-body-s","text-default"),v={chromatic:{disableSnapshot:!0}},u={render:({demoContainerHeight:s,demoContainerWidth:l,demoContentHeight:i,demoContentWidth:c,content:p,...a})=>e.jsx("div",{className:o("flex","border-box","flex-col","items-center","justify-center"),style:{inlineSize:l,blockSize:s},children:e.jsx(n,{...a,content:e.jsx("div",{style:{blockSize:i,inlineSize:c},children:p}),p:"xl",pb:"m",children:e.jsx(r,{label:"My trigger"})})}),args:{demoContainerWidth:400,demoContainerHeight:400,demoContentWidth:100,demoContentHeight:100,content:"content string",placement:"bottom-start",onOpenChange:P(),initialOpen:!0,minWidth:"reference",placementUpdate:!1},argTypes:{...C,...t},parameters:v},h={render:s=>e.jsx("div",{className:o("flex","flex-col","p-xl","gap-xl"),style:{inlineSize:"400px"},children:e.jsx(n,{...s,minWidth:"reference",content:e.jsxs(j,{children:[e.jsx(S,{onClick:()=>{},children:"Item 1"}),e.jsx(S,{onClick:()=>{},children:"Item 1"})]}),children:e.jsx(r,{label:"My trigger",asDropdown:!0})})}),args:{},argTypes:{...t},parameters:v},f={render:s=>{const[l,i]=d.useState(),[c,p]=d.useState(!1);return e.jsxs("div",{className:o("flex","flex-col","gap-xl"),style:{inlineSize:"400px"},children:[e.jsx(r,{label:"My trigger",ref:a=>{i(a)},onClick:()=>{p(!c)}}),e.jsx(n,{...s,anchorEl:l,open:c,onOpenChange:p,content:e.jsx("p",{className:m,children:"placeholder"})})]})},args:{minWidth:"reference"},argTypes:{...t},parameters:v},x={render:s=>{const[l,i]=d.useState(),[c,p]=d.useState(!1);return e.jsxs("div",{className:o("flex","flex-col","gap-xl"),style:{inlineSize:"400px"},children:[e.jsx(g.Trigger,{menu:e.jsx(g.Item,{label:"Delete",onClick:a=>{i({top:a.clientY,left:a.clientX}),p(!c)}}),children:e.jsx(r,{label:"OpenMenu",asDropdown:!0})}),e.jsx(n,{...s,anchorPosition:l,p:"m",open:c,onOpenChange:p,content:e.jsxs("form",{className:o("flex","flex-col","gap-m","items-start","bg-default"),onSubmit:a=>{a.preventDefault()},children:[e.jsx("h2",{className:o("flex","text-default","font-heading-s"),children:"Delete confirmation"}),e.jsx(N,{severity:"warning",children:"This action can't be reverted"}),e.jsx("div",{className:o("flex","flex-col","gap-m","w-full","items-end"),children:e.jsx(r,{variant:"primary",label:"Yes",type:"submit"})})]})})]})},args:{minWidth:"reference"},argTypes:{...t},parameters:v},y={render:()=>e.jsx("div",{className:o("flex","flex-col","gap-xl","p-xl","items-center","justify-center"),style:{inlineSize:"400px",blockSize:"300px"},children:e.jsx(n,{tree:!0,p:"xl",placement:"top",content:e.jsx(n,{content:"Nested content",p:"xl",placement:"right",children:e.jsx("button",{type:"button",children:"Nested reference"})}),children:e.jsx("button",{type:"button",children:"Root reference"})})}),parameters:v},b={render:()=>{const[s,l]=d.useState(!1);return d.useEffect(()=>{const i=setTimeout(()=>{l(!0)},50);return()=>{clearTimeout(i)}},[]),e.jsxs("div",{className:o("flex","flex-row","p-xl","items-center","justify-between","w-full"),style:{blockSize:"100vh"},children:[e.jsx("div",{className:o("flex","flex-row","justify-end"),style:{inlineSize:"35%"},children:e.jsx(n,{initialOpen:!0,placement:"left",content:e.jsx("p",{className:m,children:"placeholder"}),children:e.jsx(r,{label:"left"})})}),e.jsxs("div",{className:o("flex","flex-col","self-center","gap-3xl","items-center"),style:{inlineSize:"30%"},children:[e.jsx(n,{initialOpen:!0,placement:"top",content:e.jsx("p",{className:m,children:"placeholder"}),children:e.jsx(r,{label:"top"})}),e.jsx(n,{initialOpen:!0,placement:"bottom",content:e.jsx("p",{className:m,children:"placeholder"}),children:e.jsx(r,{label:"bottom"})})]}),e.jsx("div",{style:{inlineSize:"35%"},children:e.jsx(n,{initialOpen:!0,placement:"right",content:e.jsx("p",{className:m,children:"placeholder"}),children:e.jsx(r,{label:"right"})})}),e.jsx("div",{style:{inlineSize:"35%"},children:e.jsx(n,{tree:!0,p:"xl",placement:"top",initialOpen:!0,content:e.jsx(n,{content:"Nested content",p:"xl",placement:"left",open:s,onOpenChange:l,children:e.jsx("button",{type:"button",className:m,children:"Nested reference"})}),children:e.jsx("button",{type:"button",className:m,children:"Root reference"})})})]})},parameters:{controls:{disable:!0}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
              <h2 className={classNames("flex", "text-default", "font-heading-s")}>Delete confirmation</h2>
              <AlertInline severity="warning">This action can&apos;t be reverted</AlertInline>
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
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const T=["Playground","CustomDropdown","AnchorAPI","AnchorPositionAPI","Nested","VisualTest"],H=Object.freeze(Object.defineProperty({__proto__:null,AnchorAPI:f,AnchorPositionAPI:x,CustomDropdown:h,Nested:y,Playground:u,VisualTest:b,__namedExportsOrder:T,default:w},Symbol.toStringTag,{value:"Module"}));export{u as P,H as S};
